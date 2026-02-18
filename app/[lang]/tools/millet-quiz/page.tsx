import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/layout/Breadcrumb';
import MilletQuiz from '@/components/ui/MilletQuiz';
import type { Locale } from '@/lib/i18n';
import { getTranslations, isValidLocale } from '@/lib/i18n';
import { locales } from '@/lib/i18n';

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
    return { title: 'Millet Quiz' };
  }
  const locale = lang as Locale;
  const t = getTranslations(locale);
  return {
    title: `${t.quiz.title} | ${t.site.siteName}`,
    description: t.quiz.subtitle,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/tools/millet-quiz`])
      ),
    },
  };
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function MilletQuizPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = getTranslations(locale);

  return (
    <>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper section-padding">
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            {t.quiz.title}
          </h1>
          <p className="text-earth-700 dark:text-earth-300 max-w-2xl mx-auto leading-relaxed">
            {t.quiz.subtitle}
          </p>
        </div>

        <MilletQuiz locale={locale} />
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
