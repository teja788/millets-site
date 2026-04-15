import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import SourceCitation from '@/components/ui/SourceCitation';
import { sources } from '@/data/sources';
import type { Locale } from '@/lib/i18n';
import {
  localePath,
  getTranslations,
  isValidLocale,
  localeParams,
  pageAlternates,
} from '@/lib/i18n';

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const t = getTranslations(lang);
  return {
    title: `${t.aboutPage.title} | ${t.site.siteName}`,
    description: t.aboutPage.introP1.slice(0, 160),
    alternates: pageAlternates(lang, '/about'),
  };
}

const keySources = sources.filter((s) =>
  [
    'icmr-nin-ifct-2017',
    'fao-millets-1995',
    'un-iym-2023',
    'india-nutri-cereals',
    'icrisat-millets',
    'saleh-2013',
    'gopalan-nutritive-values',
  ].includes(s.key)
);

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale: Locale = lang;
  const t = getTranslations(locale);
  const a = t.aboutPage;

  return (
    <>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper section-padding">
        {/* Page Title */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-8">
          {a.heading}
        </h1>

        <div className="max-w-3xl space-y-12">
          {/* About This Website */}
          <section>
            <div className="space-y-4 text-earth-600 dark:text-earth-300 leading-relaxed">
              <p>{a.introP1}</p>
              <p>{a.introP2}</p>
              <p>{a.introP3}</p>
            </div>
          </section>

          {/* Key Sources */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              {a.keyReferencesHeading}
            </h2>
            <ol className="list-decimal list-inside space-y-3">
              {keySources.map((source) => (
                <SourceCitation key={source.key} source={source} />
              ))}
            </ol>
          </section>

          {/* Navigation Links */}
          <section className="pt-4 border-t border-earth-200 dark:border-earth-700">
            <p className="text-earth-600 dark:text-earth-300 mb-4">
              {a.readyToExplore}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={localePath(locale, '/millets')}
                className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
              >
                {a.browseAllMillets}
              </Link>
              <Link
                href={localePath(locale, '/nutrition')}
                className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
              >
                {a.nutritionComparison}
              </Link>
              <Link
                href={localePath(locale, '/recipes')}
                className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
              >
                {a.recipes}
              </Link>
              <Link
                href={localePath(locale, '/history')}
                className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
              >
                {a.history}
              </Link>
              <Link
                href={localePath(locale, '/privacy-policy')}
                className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
              >
                {a.privacyPolicy}
              </Link>
              <Link
                href={localePath(locale, '/contact')}
                className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
              >
                {a.contact}
              </Link>
            </div>
          </section>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6 mt-10">
          <p className="text-xs text-warm-gray dark:text-earth-400 leading-relaxed max-w-3xl">
            <strong>{t.common.disclaimer}:</strong> {t.common.disclaimerText}
          </p>
        </div>
      </div>
    </>
  );
}
