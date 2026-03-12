const DEFAULT_SITE_URL = 'https://www.simplymillets.com';

function withProtocol(url: string): string {
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

export function getSiteUrl(): string {
  const rawUrl = process.env.SITE_URL?.trim() || DEFAULT_SITE_URL;
  return withProtocol(rawUrl).replace(/\/+$/, '');
}

export const siteUrl = getSiteUrl();

export function toAbsoluteSiteUrl(pathname: string): string {
  return new URL(pathname, `${siteUrl}/`).toString();
}
