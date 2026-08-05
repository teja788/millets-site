import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Package, ShieldCheck } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Card, CardBody } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, isValidLocale, localeParams, hreflangAlternates } from '@/lib/i18n';
import { getBuyingGuideItems, getMilletBySlugLocale } from '@/lib/i18n-data';

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
    title: `${t.buyingGuidePage.title} | ${t.site.siteName}`,
    description:
      'How to select, store, and buy millets. Forms available, shelf life, and storage tips for all 9 millets.',
    alternates: {
      canonical: `/${lang}/buying-guide`,
      languages: hreflangAlternates('/buying-guide'),
    },
  };
}

function getPriceVariant(priceRange: string): 'green' | 'orange' | 'red' {
  const lower = priceRange.toLowerCase();
  if (lower.includes('budget')) return 'green';
  if (lower.includes('premium')) return 'red';
  return 'orange';
}

export default async function BuyingGuidePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale = lang as Locale;

  const t = getTranslations(locale);
  const buyingGuideItems = getBuyingGuideItems(locale);

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-6">
          {t.buyingGuidePage.title}
        </h1>

        {/* Intro */}
        <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-10">
          <p>
            Whether you are buying millets for the first time or looking to expand your
            pantry, this guide covers everything you need to know -- what forms each millet
            is available in, what to look for when shopping, how to store them properly, and
            where to buy them online and offline.
          </p>
        </div>

        {/* General Tips Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-6 h-6 text-warm-gray dark:text-earth-400" />
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100">
              General Buying Tips
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Polished vs Unpolished
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                <strong>Unpolished millets</strong> retain the bran layer and are richer in
                fiber, minerals, and B-vitamins. They have a nuttier taste and slightly longer
                cooking time. <strong>Polished millets</strong> have the outer bran removed --
                they cook faster and have a milder flavor, but lose some nutritional value. For
                everyday use, unpolished is the healthier choice. For rice-replacement dishes
                where texture matters, polished works better.
              </p>
            </div>
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Checking Freshness
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                Fresh millets should smell clean and neutral -- any musty, sour, or rancid odor
                indicates spoilage or age. The grains should feel completely dry and pour freely
                without clumping. Check the packaging date and prefer products processed within
                the last 3-6 months. For flour, freshness is even more critical as the exposed
                oils oxidize quickly -- always check the expiry date and store in the refrigerator
                after opening.
              </p>
            </div>
          </div>
        </section>

        {/* Individual Millet Cards */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-6 h-6 text-warm-gray dark:text-earth-400" />
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100">
              Buying Guide by Millet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {buyingGuideItems.map((item) => (
              <Card key={item.millet} variant="outlined">
                <CardBody>
                  {/* Millet Name (linked) */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    {getMilletBySlugLocale(item.millet, locale) ? (
                      <Link
                        href={localePath(locale, `/millets/${item.millet}`)}
                        className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100 hover:text-earth-600 dark:hover:text-earth-300 transition-colors underline underline-offset-2"
                      >
                        {item.milletName}
                      </Link>
                    ) : (
                      <span className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100">
                        {item.milletName}
                      </span>
                    )}
                    <Badge variant={getPriceVariant(item.priceRange)} size="sm">
                      {item.priceRange}
                    </Badge>
                  </div>

                  {/* Forms Available */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-earth-700 dark:text-earth-300 uppercase tracking-wider mb-2">
                      {t.buyingGuidePage.formsAvailable}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {item.formsAvailable.map((form) => (
                        <Badge key={form} variant="default" size="sm">
                          {form}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* What to Look For */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-earth-700 dark:text-earth-300 uppercase tracking-wider mb-2">
                      {t.buyingGuidePage.whatToLookFor}
                    </h3>
                    <ul className="space-y-1.5">
                      {item.whatToLookFor.map((tip, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-earth-800 dark:text-earth-200 text-sm"
                        >
                          <span className="text-green-400 flex-shrink-0 mt-0.5">&#10003;</span>
                          <span className="leading-relaxed">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Storage */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-earth-700 dark:text-earth-300 uppercase tracking-wider mb-1">
                      {t.buyingGuidePage.storage}
                    </h3>
                    <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                      {item.storageInstructions}
                    </p>
                  </div>

                  {/* Shelf Life */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-earth-700 dark:text-earth-300 uppercase tracking-wider mb-1">
                      {t.buyingGuidePage.shelfLife}
                    </h3>
                    <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                      {item.shelfLife}
                    </p>
                  </div>

                  {/* Online Availability */}
                  <div className="bg-forest-50 dark:bg-earth-800 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-earth-700 dark:text-earth-300 uppercase tracking-wider mb-1">
                      {t.buyingGuidePage.availability}
                    </h3>
                    <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                      {item.onlineAvailability}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>
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
