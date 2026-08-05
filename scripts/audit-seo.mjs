const configuredBaseUrl = process.env.SEO_AUDIT_BASE_URL ?? 'https://simplymillets.com';
const baseUrl = configuredBaseUrl.replace(/\/$/, '');
const concurrency = Math.max(1, Number(process.env.SEO_AUDIT_CONCURRENCY ?? 16));
const requestTimeoutMs = Math.max(1_000, Number(process.env.SEO_AUDIT_TIMEOUT_MS ?? 20_000));

const failures = [];
const warnings = [];
const responseCache = new Map();

function normalizeUrl(value) {
  const url = new URL(value, baseUrl);
  url.hash = '';
  url.search = '';
  if (url.pathname !== '/') url.pathname = url.pathname.replace(/\/$/, '');
  return url.toString();
}

function canonicalMatches(pageUrl, canonicalHref) {
  const page = new URL(pageUrl);
  const canonical = new URL(canonicalHref, pageUrl);
  const pagePath = page.pathname === '/' ? '/' : page.pathname.replace(/\/$/, '');
  const canonicalPath = canonical.pathname === '/' ? '/' : canonical.pathname.replace(/\/$/, '');
  const isLocalAudit = ['localhost', '127.0.0.1'].includes(new URL(baseUrl).hostname);

  return pagePath === canonicalPath && (isLocalAudit || page.origin === canonical.origin);
}

function localizeUrl(value) {
  const url = new URL(value, baseUrl);
  return normalizeUrl(`${baseUrl}${url.pathname}${url.search}`);
}

function decodeHtml(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  return match ? decodeHtml(match[1] ?? match[2] ?? match[3] ?? '') : null;
}

function extractLinkTags(html) {
  return html.match(/<link\b[^>]*>/gi) ?? [];
}

function extractAnchorUrls(html, pageUrl) {
  const urls = [];
  for (const tag of html.match(/<a\b[^>]*>/gi) ?? []) {
    const href = attribute(tag, 'href');
    if (!href || href.startsWith('#') || /^(?:mailto|tel|javascript|data):/i.test(href)) continue;

    try {
      const url = new URL(href, pageUrl);
      if (!['http:', 'https:'].includes(url.protocol)) continue;
      if (!['simplymillets.com', 'www.simplymillets.com', new URL(baseUrl).hostname].includes(url.hostname)) continue;
      if (/\.(?:avif|css|gif|ico|jpe?g|js|json|map|pdf|png|svg|webmanifest|webp|woff2?)$/i.test(url.pathname)) continue;
      urls.push(localizeUrl(url));
    } catch {
      warnings.push(`Invalid internal link on ${pageUrl}: ${href}`);
    }
  }
  return urls;
}

async function fetchPage(url) {
  if (!responseCache.has(url)) {
    responseCache.set(url, (async () => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);
      try {
        const response = await fetch(url, {
          redirect: 'manual',
          headers: { 'user-agent': 'SimplyMilletsSeoAudit/1.0' },
          signal: controller.signal,
        });
        return {
          status: response.status,
          location: response.headers.get('location'),
          contentType: response.headers.get('content-type') ?? '',
          body: response.headers.get('content-type')?.includes('text/html')
            ? await response.text()
            : '',
        };
      } catch (error) {
        return { status: 0, location: null, contentType: '', body: '', error: String(error) };
      } finally {
        clearTimeout(timeout);
      }
    })());
  }
  return responseCache.get(url);
}

async function mapWithConcurrency(items, worker) {
  let cursor = 0;
  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, async () => {
      while (cursor < items.length) {
        const index = cursor++;
        await worker(items[index], index);
      }
    }),
  );
}

const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`, {
  headers: { 'user-agent': 'SimplyMilletsSeoAudit/1.0' },
});

if (!sitemapResponse.ok) {
  console.error(`Sitemap request failed: ${sitemapResponse.status} ${baseUrl}/sitemap.xml`);
  process.exit(1);
}

const sitemapXml = await sitemapResponse.text();
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/gi)]
  .map((match) => localizeUrl(decodeHtml(match[1])))
  .filter((url, index, urls) => urls.indexOf(url) === index);

if (sitemapUrls.length === 0) {
  console.error('Sitemap contains no <loc> entries.');
  process.exit(1);
}

const internalLinks = new Map();
const hreflangTargets = new Set();

await mapWithConcurrency(sitemapUrls, async (url) => {
  const page = await fetchPage(url);

  if (page.status !== 200) {
    failures.push(`Sitemap URL ${url} returned ${page.status}${page.location ? ` -> ${page.location}` : ''}`);
    return;
  }

  const linkTags = extractLinkTags(page.body);
  const canonicalTag = linkTags.find((tag) => /(?:^|\s)canonical(?:\s|$)/i.test(attribute(tag, 'rel') ?? ''));
  const canonicalHref = canonicalTag ? attribute(canonicalTag, 'href') : null;

  if (!canonicalHref) {
    failures.push(`Missing canonical: ${url}`);
  } else if (!canonicalMatches(url, canonicalHref)) {
    failures.push(`Canonical mismatch: ${url} -> ${canonicalHref}`);
  }

  for (const tag of linkTags) {
    if (!/(?:^|\s)alternate(?:\s|$)/i.test(attribute(tag, 'rel') ?? '')) continue;
    if (!attribute(tag, 'hreflang')) continue;
    const href = attribute(tag, 'href');
    if (href) hreflangTargets.add(localizeUrl(href));
  }

  for (const target of extractAnchorUrls(page.body, url)) {
    if (!internalLinks.has(target)) internalLinks.set(target, url);
  }
});

await mapWithConcurrency([...hreflangTargets], async (url) => {
  const page = await fetchPage(url);
  if (page.status !== 200) {
    failures.push(`Hreflang target ${url} returned ${page.status}${page.location ? ` -> ${page.location}` : ''}`);
  }
});

await mapWithConcurrency([...internalLinks], async ([url, source]) => {
  const page = await fetchPage(url);
  if (page.status === 0 || page.status >= 400) {
    failures.push(`Internal link ${source} -> ${url} returned ${page.status}${page.error ? ` (${page.error})` : ''}`);
  } else if (page.status >= 300) {
    warnings.push(`Internal link redirects: ${source} -> ${url} (${page.status}${page.location ? ` -> ${page.location}` : ''})`);
  }
});

console.log(`SEO audit base: ${baseUrl}`);
console.log(`Sitemap URLs: ${sitemapUrls.length}`);
console.log(`Hreflang targets: ${hreflangTargets.size}`);
console.log(`Unique internal links: ${internalLinks.size}`);
console.log(`Warnings: ${warnings.length}`);
console.log(`Failures: ${failures.length}`);

if (warnings.length) {
  console.log('\nWarnings:');
  for (const warning of warnings) console.log(`- ${warning}`);
}

if (failures.length) {
  console.error('\nFailures:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
}
