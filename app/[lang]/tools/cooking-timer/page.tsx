import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CookingTimer from '@/components/ui/CookingTimer';
import type { Locale } from '@/lib/i18n';
import { getTranslations, isValidLocale, hreflangAlternates } from '@/lib/i18n';
import { locales } from '@/lib/i18n';
import { getMillets } from '@/lib/i18n-data';

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
    return { title: 'Cooking Timer' };
  }
  const locale = lang as Locale;
  const t = getTranslations(locale);
  return {
    title: `${t.cookingTimerPage.title} | ${t.site.siteName}`,
    description: 'Interactive cooking timer with presets for each millet variety. Includes water ratios and soaking times.',
    alternates: {
      canonical: `/${lang}/tools/cooking-timer`,
      languages: hreflangAlternates('/tools/cooking-timer'),
    },
  };
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function CookingTimerPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = getTranslations(locale);
  const millets = getMillets(locale);

  return (
    <>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper section-padding">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
          {t.cookingTimerPage.title}
        </h1>
        <p className="text-earth-700 dark:text-earth-300 max-w-2xl mb-10 leading-relaxed">
          Select a millet to see its water ratio, soaking time, and cooking
          time. Use the built-in timer to cook your millets to perfection.
        </p>

        <CookingTimer locale={locale} millets={millets} />
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
