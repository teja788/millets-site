import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BookOpen } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Card, CardBody } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, isValidLocale, localeParams, hreflangAlternates } from '@/lib/i18n';
import { getAncientReferences } from '@/lib/i18n-data';

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
    title: `${t.ancientRefsPage.title} | ${t.site.siteName}`,
    description:
      'Literary and archaeological evidence of millets in ancient texts from around the world.',
    alternates: {
      canonical: `/${lang}/ancient-references`,
      languages: hreflangAlternates('/ancient-references'),
    },
  };
}

export default async function AncientReferencesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale = lang as Locale;

  const t = getTranslations(locale);
  const ancientReferences = getAncientReferences(locale);

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-6">
          {t.ancientRefsPage.title}
        </h1>

        {/* Intro */}
        <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-12">
          <p>
            Millets are among the oldest cultivated crops in human history, with archaeological
            evidence of domestication stretching back 8,000-10,000 years in both China and
            Africa. Far from being forgotten crops, millets were documented extensively in the
            sacred hymns of the Vedas, the poetry of ancient Tamil Sangam literature, the oracle
            bone inscriptions of Shang Dynasty China, the agricultural treatises of Rome, and the
            scriptures of the Hebrew Bible. These references reveal that millets were not merely
            survival food but were woven into the religious, cultural, literary, and economic
            fabric of civilizations across the ancient world.
          </p>
        </div>

        {/* Timeline-style Cards */}
        <div className="space-y-6 max-w-4xl">
          {ancientReferences.map((ref) => (
            <Card key={ref.id} variant="outlined">
              <CardBody>
                {/* Header: Text name, period, language */}
                <div className="flex flex-wrap items-start gap-3 mb-4">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <BookOpen className="w-5 h-5 text-warm-gray dark:text-earth-400 flex-shrink-0" />
                    <h2 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100">
                      {ref.text}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Badge variant="orange" size="sm">
                      {ref.period}
                    </Badge>
                    <Badge variant="default" size="sm">
                      {ref.language}
                    </Badge>
                  </div>
                </div>

                {/* Original Quote (if exists) */}
                {ref.originalQuote && (
                  <blockquote className="border-l-4 border-earth-600 pl-4 italic text-earth-700 dark:text-earth-300 my-3">
                    &ldquo;{ref.originalQuote}&rdquo;
                  </blockquote>
                )}

                {/* Translation */}
                <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed mb-4">
                  {ref.translation}
                </p>

                {/* Millet Mentioned */}
                <div className="flex items-start gap-2 mb-4">
                  <span className="text-sm font-semibold text-earth-700 dark:text-earth-300 whitespace-nowrap">
                    Millet Mentioned:
                  </span>
                  <span className="text-sm text-earth-800 dark:text-earth-100 font-medium">
                    {ref.milletMentioned}
                  </span>
                </div>

                {/* Significance */}
                <div className="bg-forest-50 dark:bg-earth-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-earth-700 dark:text-earth-300 uppercase tracking-wider mb-1">
                    {t.ancientRefsPage.significance}
                  </h3>
                  <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                    {ref.significance}
                  </p>
                </div>

                {/* Source */}
                <p className="text-xs text-warm-gray dark:text-earth-400 italic mt-3">
                  {t.common.source}: {ref.source}
                </p>
              </CardBody>
            </Card>
          ))}
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
    </main>
  );
}
