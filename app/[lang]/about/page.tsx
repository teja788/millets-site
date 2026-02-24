import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Card, CardBody } from '@/components/ui/Card';
import SourceCitation from '@/components/ui/SourceCitation';
import { sources } from '@/data/sources';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, isValidLocale } from '@/lib/i18n';

export function generateStaticParams() {
  return [{ lang: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== 'en') return {};
  const t = getTranslations('en');
  return {
    title: `About | ${t.site.siteName}`,
    description:
      'About this website — our mission, methodology, and the key references behind every fact on Simply Millets.',
    alternates: {
      canonical: '/en/about',
      languages: {
        en: '/en/about',
      },
    },
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

  // About page is English-only
  if (lang !== 'en') notFound();

  const locale = 'en' as Locale;
  const t = getTranslations(locale);

  return (
    <>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper section-padding">
        {/* Page Title */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-8">
          About This Website
        </h1>

        <div className="max-w-3xl space-y-12">
          {/* About This Website */}
          <section>
            <div className="space-y-4 text-earth-600 dark:text-earth-300 leading-relaxed">
              <p>
                This website exists to provide comprehensive and
                accessible information about millets. In an era of health trends
                and superfood marketing, there is a real need for a single,
                well-organized resource that presents millet information based on
                evidence rather than hype.
              </p>
              <p>
                We cover nutrition (sourced from ICMR-NIN and USDA databases),
                traditional recipes, Ayurvedic properties (referenced from
                classical texts like Charaka Samhita and Bhavaprakasha Nighantu),
                cultivation practices, and historical context. We believe that
                understanding millets fully — not just as a health food, but as a
                cultural, ecological, and agricultural treasure — is key to their
                revival.
              </p>
              <p>
                Nutritional data follows the ICMR-NIN
                Indian Food Composition Tables (2017) as the primary reference.
                Ayurvedic information is attributed to specific classical texts.
                We distinguish between well-established science and preliminary
                evidence.
              </p>
            </div>
          </section>

          {/* Key Sources */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              Key References
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
              Ready to explore?
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={localePath(locale, '/millets')}
                className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
              >
                Browse All Millets
              </Link>
              <Link
                href={localePath(locale, '/nutrition')}
                className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
              >
                Nutrition Comparison
              </Link>
              <Link
                href={localePath(locale, '/recipes')}
                className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
              >
                Recipes
              </Link>
              <Link
                href={localePath(locale, '/history')}
                className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
              >
                History
              </Link>
              <Link
                href={localePath(locale, '/privacy-policy')}
                className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href={localePath(locale, '/contact')}
                className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
              >
                Contact
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
