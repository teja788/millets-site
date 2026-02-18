import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Clock, FlaskConical } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Card, CardBody } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, isValidLocale } from '@/lib/i18n';
import { getFermentedProducts } from '@/lib/i18n-data';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'te' }];
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
    title: `${t.fermentationPage.title} | ${t.site.siteName}`,
    description:
      'Traditional fermented millet beverages and foods from around the world.',
    alternates: {
      languages: {
        en: '/en/fermentation',
        te: '/te/fermentation',
      },
    },
  };
}

export default async function FermentationPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale = lang as Locale;

  const t = getTranslations(locale);
  const fermentedProducts = getFermentedProducts(locale);

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-6">
          {t.fermentationPage.title}
        </h1>

        {/* Intro */}
        <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-8">
          <p>
            Fermentation is one of the oldest and most effective methods of processing millets.
            Across Africa, Asia, and Europe, traditional cultures have fermented millets into
            porridges, beverages, and breads for thousands of years -- not just for flavor and
            preservation, but because fermentation fundamentally improves the nutritional quality
            of millets. It reduces phytic acid (which binds minerals like iron and calcium),
            generates B-vitamins and probiotics, improves protein digestibility, and creates
            bioactive compounds that support gut health.
          </p>
        </div>

        {/* Key Stat Highlight */}
        <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6 max-w-3xl mb-12 border-l-4 border-earth-500">
          <p className="text-earth-800 dark:text-earth-100 font-heading text-lg font-bold mb-1">
            Key Finding
          </p>
          <p className="text-earth-800 dark:text-earth-200 leading-relaxed">
            <strong className="text-earth-800 dark:text-earth-100">24-hour fermentation reduces phytic acid by ~52%</strong>,
            dramatically improving the bioavailability of iron, calcium, and zinc in millet-based
            foods. Combined with germination, reductions can exceed 85%.
          </p>
          <p className="text-xs text-warm-gray dark:text-earth-400 mt-2 italic">
            Source: Devi et al., Journal of Food Science and Technology (2014); Platel &amp; Srinivasan, Plant Foods for Human Nutrition (2016).
          </p>
        </div>

        {/* Fermented Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fermentedProducts.map((product) => (
            <Card key={product.name} variant="outlined">
              <CardBody>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100">
                    {product.name}
                  </h2>
                  <Badge variant="blue" size="sm">
                    {product.region.split('(')[0].trim()}
                  </Badge>
                </div>

                {/* Process */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <FlaskConical className="w-4 h-4 text-warm-gray dark:text-earth-400 flex-shrink-0" />
                    <h3 className="text-sm font-semibold text-earth-700 dark:text-earth-300 uppercase tracking-wider">
                      {t.fermentationPage.process}
                    </h3>
                  </div>
                  <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                    {product.process}
                  </p>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-warm-gray dark:text-earth-400 flex-shrink-0" />
                  <span className="text-sm text-earth-700 dark:text-earth-300">
                    <strong className="text-earth-800 dark:text-earth-100">{t.fermentationPage.duration}:</strong>{' '}
                    {product.duration}
                  </span>
                </div>

                {/* Nutritional Benefit */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-earth-700 dark:text-earth-300 uppercase tracking-wider mb-1">
                    {t.fermentationPage.benefit}
                  </h3>
                  <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                    {product.nutritionalBenefit}
                  </p>
                </div>

                {/* Cultural Context */}
                <div className="bg-forest-50 dark:bg-earth-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-earth-700 dark:text-earth-300 uppercase tracking-wider mb-1">
                    {t.fermentationPage.culturalContext}
                  </h3>
                  <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                    {product.culturalContext}
                  </p>
                </div>
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
