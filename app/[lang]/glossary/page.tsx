import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, isValidLocale, locales, localeParams } from '@/lib/i18n';
import { getMillets } from '@/lib/i18n-data';
import GlossaryPageClient from './GlossaryPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const t = getTranslations(lang);

  return {
    title: `${t.glossaryPage.title} | ${t.site.siteName}`,
    description:
      lang === 'te'
        ? 'ఏదైనా చిరుధాన్యానికి మీ స్థానిక పేరును కనుగొనండి. భారతదేశంలోని వివిధ భాషలలో చిరుధాన్యాల పేర్లు.'
        : 'Find your local name for any millet. Millets are known by different names across India\'s diverse languages.',
    alternates: {
      canonical: `/${lang}/glossary`,
      languages: Object.fromEntries(
        locales.map((l) => [l, localePath(l, '/glossary')])
      ),
    },
  };
}

export function generateStaticParams() {
  return localeParams();
}

export default async function GlossaryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale: Locale = lang;
  const t = getTranslations(locale);
  const millets = getMillets(locale);

  return <GlossaryPageClient locale={locale} t={t} millets={millets} />;
}
