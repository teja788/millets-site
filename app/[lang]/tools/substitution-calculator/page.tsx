import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/layout/Breadcrumb';
import SubstitutionCalculator from '@/components/ui/SubstitutionCalculator';
import type { Locale } from '@/lib/i18n';
import { getTranslations, isValidLocale } from '@/lib/i18n';
import { locales } from '@/lib/i18n';
import { getSubstitutionEntries, getMillets } from '@/lib/i18n-data';

// ---------------------------------------------------------------------------
// Static Params & Metadata
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    return { title: 'Substitution Calculator' };
  }
  const locale = lang as Locale;
  const t = getTranslations(locale);
  return {
    title: `${t.substitutionPage.title} | ${t.site.siteName}`,
    description: 'Find the right millet to replace rice, wheat, or other grains in your recipes. Get exact ratios and cooking tips.',
    alternates: {
      canonical: `/${lang}/tools/substitution-calculator`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/tools/substitution-calculator`])
      ),
    },
  };
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function SubstitutionCalculatorPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = getTranslations(locale);
  const substitutionEntries = getSubstitutionEntries(locale);
  const millets = getMillets(locale);

  return (
    <>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper section-padding">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
          {t.substitutionPage.title}
        </h1>
        <p className="text-earth-700 dark:text-earth-300 max-w-2xl mb-10 leading-relaxed">
          {t.substitutionPage.selectGrain === 'Select grain to replace'
            ? 'Select a conventional grain and discover which millets can replace it in your recipes. Get exact ratios, cooking tips, and the best uses for each substitute.'
            : t.substitutionPage.selectGrain}
        </p>

        <SubstitutionCalculator
          locale={locale}
          substitutionEntries={substitutionEntries}
          millets={millets}
        />
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
