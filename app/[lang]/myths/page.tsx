import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, isValidLocale, locales, localeParams, hreflangAlternates } from '@/lib/i18n';
import { getMyths } from '@/lib/i18n-data';
import MythsPageClient from './MythsPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const t = getTranslations(lang);

  return {
    title: `${t.mythsPage.title} | ${t.site.siteName}`,
    description:
      lang === 'te'
        ? 'చిరుధాన్యాల గురించి సాధారణ అపోహలు మరియు వాస్తవాలు. ఆధారాల ఆధారంగా నిజాలతో అపోహలను తొలగించండి.'
        : 'Myths & Facts About Millets. Debunk common misconceptions with evidence-based facts.',
    alternates: {
      canonical: `/${lang}/myths`,
      languages: hreflangAlternates('/myths'),
    },
  };
}

export function generateStaticParams() {
  return localeParams();
}

export default async function MythsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale: Locale = lang;
  const t = getTranslations(locale);
  const myths = getMyths(locale);

  return <MythsPageClient locale={locale} t={t} myths={myths} />;
}
