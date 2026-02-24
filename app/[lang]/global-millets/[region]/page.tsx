import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Globe, Utensils, Clock, BookOpen, TrendingUp } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Sidebar from '@/components/layout/Sidebar';
import Badge from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import type { Locale } from '@/lib/i18n';
import { getTranslations, isValidLocale, hreflangAlternates } from '@/lib/i18n';
import { locales } from '@/lib/i18n';
import {
  getGlobalMilletRegions,
  getGlobalMilletRegionBySlugLocale,
} from '@/lib/i18n-data';

// ---------------------------------------------------------------------------
// Static Params & Metadata
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  const params: { lang: string; region: string }[] = [];
  for (const lang of locales) {
    const regions = getGlobalMilletRegions(lang);
    for (const r of regions) {
      params.push({ lang, region: r.slug });
    }
  }
  return params;
}

interface PageProps {
  params: Promise<{ lang: string; region: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, region } = await params;
  if (!isValidLocale(lang)) {
    return { title: 'Region Not Found' };
  }
  const locale = lang as Locale;
  const data = getGlobalMilletRegionBySlugLocale(region, locale);
  if (!data) {
    return { title: 'Region Not Found' };
  }
  const t = getTranslations(locale);
  return {
    title: `${data.region} — ${t.globalPage.title} | ${t.site.siteName}`,
    description: `${data.tagline} Explore the millet heritage of ${data.region}, including iconic foods, history, and cultural significance.`,
    alternates: {
      canonical: `/${lang}/global-millets/${region}`,
      languages: hreflangAlternates(`/global-millets/${region}`),
    },
  };
}

// ---------------------------------------------------------------------------
// Continent badge variant helper
// ---------------------------------------------------------------------------

const continentBadgeVariant: Record<string, 'green' | 'orange' | 'blue' | 'red' | 'default'> = {
  Africa: 'orange',
  Asia: 'green',
  'Asia/Europe': 'blue',
  Europe: 'red',
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function GlobalMilletRegionDetailPage({ params }: PageProps) {
  const { lang, region } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = getTranslations(locale);
  const data = getGlobalMilletRegionBySlugLocale(region, locale);

  if (!data) {
    notFound();
  }

  const sidebarSections = [
    { id: 'overview', title: 'Overview' },
    { id: 'foods', title: t.globalPage.iconicFoods },
    { id: 'history', title: t.globalPage.historicalHighlights },
    { id: 'culture', title: t.regionalPage.culturalSignificance },
    { id: 'modern-status', title: t.globalPage.modernStatus },
  ];

  return (
    <>
      <Breadcrumb locale={locale} />

      {/* Hero Area */}
      <header className="content-wrapper pt-4 pb-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <Badge variant={continentBadgeVariant[data.continent] || 'default'}>
            {data.continent}
          </Badge>
          <Badge variant="default" size="sm">
            {data.countries.length}{' '}
            {data.countries.length === 1 ? 'Country' : 'Countries'}
          </Badge>
        </div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-2">
          {data.region}
        </h1>
        <p className="text-lg italic text-warm-gray dark:text-earth-400 mb-3">
          {data.tagline}
        </p>
        <p className="text-sm text-warm-gray dark:text-earth-400">
          <span className="font-medium text-earth-700 dark:text-earth-300">Countries:</span>{' '}
          {data.countries.join(', ')}
        </p>
      </header>

      {/* Two-column layout */}
      <div className="content-wrapper flex gap-10 pb-16">
        {/* Main Content */}
        <div className="flex-1 min-w-0 space-y-14">
          {/* ===== Overview ===== */}
          <section id="overview">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-warm-gray dark:text-earth-400" />
              Overview
            </h2>
            <p className="text-earth-700 dark:text-earth-300 leading-relaxed mb-6">
              {data.description}
            </p>

            {/* Key Fact Card */}
            <Card variant="outlined">
              <CardBody>
                <p className="text-xs text-warm-gray dark:text-earth-400 uppercase tracking-wider font-semibold mb-2">
                  {t.globalPage.keyFact}
                </p>
                <p className="text-sm text-earth-800 dark:text-earth-200 leading-relaxed font-medium">
                  {data.keyFact}
                </p>
              </CardBody>
            </Card>

            {/* Primary Millets */}
            <div className="mt-6">
              <p className="text-xs text-warm-gray dark:text-earth-400 uppercase tracking-wider font-semibold mb-2">
                Primary Millets
              </p>
              <div className="flex flex-wrap gap-2">
                {data.primaryMillets.map((millet) => (
                  <Badge key={millet} variant="green" size="sm">
                    {millet}
                  </Badge>
                ))}
              </div>
            </div>
          </section>

          {/* ===== Iconic Foods ===== */}
          <section id="foods">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-warm-gray dark:text-earth-400" />
              {t.globalPage.iconicFoods}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.iconicFoods.map((food, index) => (
                <Card key={index} variant="outlined">
                  <CardBody>
                    <h3 className="font-heading text-base font-bold text-earth-800 dark:text-earth-100 mb-1">
                      {food.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="blue" size="sm">
                        {food.country}
                      </Badge>
                      <Badge variant="default" size="sm">
                        {food.millet}
                      </Badge>
                    </div>
                    <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed">
                      {food.description}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>

          {/* ===== Historical Highlights ===== */}
          <section id="history">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-warm-gray dark:text-earth-400" />
              {t.globalPage.historicalHighlights}
            </h2>
            <div className="space-y-4">
              {data.historicalHighlights.map((highlight, index) => (
                <Card key={index} variant="outlined">
                  <CardBody>
                    <div className="flex items-start gap-4">
                      {/* Timeline indicator */}
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-earth-500 mt-1" />
                        {index < data.historicalHighlights.length - 1 && (
                          <div className="w-0.5 flex-1 bg-earth-200 dark:bg-earth-700 mt-1" />
                        )}
                      </div>
                      <div>
                        <Badge variant="default" size="sm" className="mb-2">
                          {highlight.period}
                        </Badge>
                        <h3 className="font-heading text-base font-bold text-earth-800 dark:text-earth-100 mb-2">
                          {highlight.title}
                        </h3>
                        <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>

          {/* ===== Cultural Significance ===== */}
          <section id="culture">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-warm-gray dark:text-earth-400" />
              {t.regionalPage.culturalSignificance}
            </h2>
            <Card variant="outlined">
              <CardBody>
                <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed">
                  {data.culturalSignificance}
                </p>
              </CardBody>
            </Card>
          </section>

          {/* ===== Modern Status ===== */}
          <section id="modern-status">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-warm-gray dark:text-earth-400" />
              {t.globalPage.modernStatus}
            </h2>
            <Card variant="outlined">
              <CardBody>
                <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed">
                  {data.modernStatus}
                </p>
              </CardBody>
            </Card>
          </section>
        </div>

        {/* Sidebar */}
        <Sidebar sections={sidebarSections} />
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
