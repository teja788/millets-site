const configuredBaseUrl = process.env.SEO_AUDIT_BASE_URL ?? 'http://localhost:3000';
const baseUrl = configuredBaseUrl.replace(/\/$/, '');

const ambaliLocales = ['en', 'te', 'ar', 'hi', 'es'];
const ambaliSources = [
  'foxtail-millet-ambali',
  'little-millet-ambali',
  'kodo-millet-ambali',
  'barnyard-millet-ambali',
  'browntop-millet-ambali',
];
const duplicateRecipeLocales = ['en', 'te', 'ar', 'hi'];

const redirects = [
  ...ambaliLocales.flatMap((locale) =>
    ambaliSources.map((slug) => ({
      source: `/${locale}/recipes/${slug}`,
      destination: `/${locale}/recipes/ragi-ambali`,
    })),
  ),
  ...duplicateRecipeLocales.flatMap((locale) => [
    {
      source: `/${locale}/recipes/jowar-roti`,
      destination: `/${locale}/recipes/jowar-bhakri`,
    },
    {
      source: `/${locale}/recipes/ragi-malt`,
      destination: `/${locale}/recipes/ragi-porridge`,
    },
  ]),
];

const staticNoindexPaths = ['cooking-guide', 'history', 'nutrition', 'sustainability'];
const mixedLanguageLocales = ['ar', 'hi', 'es'];
const regionalTraditions = [
  'rajasthan',
  'karnataka',
  'maharashtra',
  'tamil-nadu',
  'odisha',
  'northeast-india',
  'uttarakhand',
  'gujarat',
];

const noindexPaths = [
  ...mixedLanguageLocales.flatMap((locale) =>
    staticNoindexPaths.map((path) => `/${locale}/${path}`),
  ),
  ...regionalTraditions.map((slug) => `/ar/regional-traditions/${slug}`),
];

const failures = [];

function absolute(path) {
  return new URL(path, `${baseUrl}/`).toString();
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, 'i'));
  return match ? match[1] ?? match[2] : null;
}

const sitemapResponse = await fetch(absolute('/sitemap.xml'));
if (!sitemapResponse.ok) {
  console.error(`Sitemap request failed: ${sitemapResponse.status}`);
  process.exit(1);
}

const sitemapXml = await sitemapResponse.text();
const sitemapPaths = new Set(
  [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/gi)].map(
    (match) => new URL(match[1]).pathname.replace(/\/$/, '') || '/',
  ),
);

for (const { source, destination } of redirects) {
  if (sitemapPaths.has(source)) failures.push(`Redirect source remains in sitemap: ${source}`);

  const sourceResponse = await fetch(absolute(source), { redirect: 'manual' });
  const location = sourceResponse.headers.get('location');
  const locationPath = location ? new URL(location, absolute(source)).pathname : null;

  if (sourceResponse.status !== 308) {
    failures.push(`${source} returned ${sourceResponse.status}, expected 308`);
  }
  if (locationPath !== destination) {
    failures.push(`${source} redirects to ${locationPath ?? 'nothing'}, expected ${destination}`);
  }

  const destinationResponse = await fetch(absolute(destination), { redirect: 'manual' });
  if (destinationResponse.status !== 200) {
    failures.push(`${destination} returned ${destinationResponse.status}, expected 200`);
  }
}

for (const path of noindexPaths) {
  if (sitemapPaths.has(path)) failures.push(`Noindex URL remains in sitemap: ${path}`);

  const response = await fetch(absolute(path), { redirect: 'manual' });
  const html = await response.text();
  const robotsTag = (html.match(/<meta\b[^>]*name=["']robots["'][^>]*>/i) ?? [])[0];
  const robotsContent = robotsTag ? attribute(robotsTag, 'content') : null;
  const canonicalTag = (html.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i) ?? [])[0];
  const canonicalHref = canonicalTag ? attribute(canonicalTag, 'href') : null;
  const canonicalPath = canonicalHref ? new URL(canonicalHref, absolute(path)).pathname : null;

  if (response.status !== 200) failures.push(`${path} returned ${response.status}, expected 200`);
  if (!robotsContent?.toLowerCase().includes('noindex')) {
    failures.push(`${path} does not emit a noindex robots directive`);
  }
  if (canonicalPath !== path) {
    failures.push(`${path} has canonical ${canonicalPath ?? 'missing'}, expected self-canonical`);
  }
}

const datasetResponse = await fetch(absolute('/en/open-millet-reference'));
const datasetHtml = await datasetResponse.text();
const jsonLdScripts = [...datasetHtml.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
const hasDatasetSchema = jsonLdScripts.some((match) => {
  try {
    const data = JSON.parse(match[1]);
    return data['@type'] === 'Dataset' && data.distribution?.contentUrl;
  } catch {
    return false;
  }
});

if (!hasDatasetSchema) failures.push('Open millet reference is missing valid Dataset JSON-LD');
if (sitemapPaths.size !== 469) failures.push(`Sitemap has ${sitemapPaths.size} URLs, expected 469`);

console.log(`SEO consolidation base: ${baseUrl}`);
console.log(`Sitemap URLs: ${sitemapPaths.size}`);
console.log(`Direct permanent redirects checked: ${redirects.length}`);
console.log(`Noindex pages checked: ${noindexPaths.length}`);
console.log(`Failures: ${failures.length}`);

if (failures.length) {
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
}
