import type { Metadata } from 'next';
import { isValidLocale, getTranslations, localeParams, pageAlternates } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'en';
  const t = getTranslations(locale);

  return {
    title: t.nav.search,
    robots: { index: false, follow: true },
    alternates: pageAlternates(locale, '/search'),
  };
}

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
