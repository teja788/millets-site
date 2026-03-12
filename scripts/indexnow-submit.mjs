import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { constants as fsConstants } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

function log(message) {
  console.log(`[indexnow] ${message}`);
}

function normalizeSiteUrl(siteUrl) {
  if (!siteUrl || !siteUrl.trim()) {
    throw new Error('SITE_URL must be set for production Vercel deployments.');
  }

  const value = /^https?:\/\//i.test(siteUrl) ? siteUrl : `https://${siteUrl}`;
  return value.replace(/\/+$/, '');
}

async function fileExists(filePath) {
  try {
    await access(filePath, fsConstants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function getValidatedKey(publicDir) {
  const entries = await readdir(publicDir, { withFileTypes: true });
  const candidates = [];

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith('.txt')) {
      continue;
    }

    const filename = entry.name;
    const key = filename.slice(0, -4);

    if (!/^[a-f0-9]{8,128}$/i.test(key)) {
      continue;
    }

    const filePath = path.join(publicDir, filename);
    const content = (await readFile(filePath, 'utf8')).trim();
    candidates.push({ content, filePath, filename, key });
  }

  const matched = candidates.filter((candidate) => candidate.content === candidate.key);

  if (matched.length === 0) {
    throw new Error('No valid IndexNow key file found in public/. The file content must match the filename.');
  }

  if (matched.length > 1) {
    throw new Error('Multiple valid IndexNow key files found in public/. Keep only one.');
  }

  return matched[0];
}

async function getSitemapXmlFromBuild(siteUrl) {
  const xmlArtifactPath = path.join(process.cwd(), '.next', 'server', 'app', 'sitemap.xml.body');
  if (await fileExists(xmlArtifactPath)) {
    return readFile(xmlArtifactPath, 'utf8');
  }

  const routeModulePath = path.join(process.cwd(), '.next', 'server', 'app', 'sitemap.xml', 'route.js');
  if (!(await fileExists(routeModulePath))) {
    throw new Error('Built sitemap route not found. Run next build before the IndexNow postbuild step.');
  }

  const builtRoute = require(routeModulePath);
  const response = await builtRoute.routeModule.userland.GET(new Request(`${siteUrl}/sitemap.xml`));

  if (!response.ok) {
    throw new Error(`Built sitemap route returned ${response.status}.`);
  }

  return response.text();
}

function getUrlsFromSitemap(xml, siteUrl) {
  const expectedHost = new URL(siteUrl).host;
  const urls = new Set();

  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const url = match[1].trim();
    if (!url) {
      continue;
    }

    const parsed = new URL(url);
    if (parsed.host === expectedHost) {
      urls.add(parsed.toString());
    }
  }

  return [...urls];
}

async function submitIndexNow({ host, key, keyLocation, urlList }) {
  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      host,
      key,
      keyLocation,
      urlList,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`IndexNow submission failed (${response.status}): ${body || 'empty response'}`);
  }
}

async function main() {
  if (process.env.VERCEL_ENV !== 'production') {
    log('Skipping: not a production Vercel deployment.');
    return;
  }

  const siteUrl = normalizeSiteUrl(process.env.SITE_URL);
  const publicDir = path.join(process.cwd(), 'public');
  const { key, filename } = await getValidatedKey(publicDir);
  const keyLocation = `${siteUrl}/${filename}`;
  const sitemapXml = await getSitemapXmlFromBuild(siteUrl);
  const urlList = getUrlsFromSitemap(sitemapXml, siteUrl);

  if (urlList.length === 0) {
    throw new Error('No URLs were found in the built sitemap.');
  }

  if (process.env.INDEXNOW_DRY_RUN === '1') {
    log(`Dry run: validated key file and parsed ${urlList.length} sitemap URLs.`);
    return;
  }

  await submitIndexNow({
    host: new URL(siteUrl).host,
    key,
    keyLocation,
    urlList,
  });

  log(`Submitted ${urlList.length} URLs to IndexNow.`);
}

main().catch((error) => {
  console.error(`[indexnow] ${error.message}`);
  process.exit(1);
});
