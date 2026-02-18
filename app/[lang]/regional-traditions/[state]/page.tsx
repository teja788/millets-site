import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Utensils, Calendar, BookOpen, Sprout } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Sidebar from '@/components/layout/Sidebar';
import Badge from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, isValidLocale } from '@/lib/i18n';
import { locales } from '@/lib/i18n';
import {
  getRegionalTraditions,
  getRegionalTraditionBySlugLocale,
} from '@/lib/i18n-data';

// ---------------------------------------------------------------------------
// Static Params & Metadata
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  const params: { lang: string; state: string }[] = [];
  for (const lang of locales) {
    const traditions = getRegionalTraditions(lang);
    for (const t of traditions) {
      params.push({ lang, state: t.slug });
    }
  }
  return params;
}

interface PageProps {
  params: Promise<{ lang: string; state: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, state } = await params;
  if (!isValidLocale(lang)) {
    return { title: 'Tradition Not Found' };
  }
  const locale = lang as Locale;
  const tradition = getRegionalTraditionBySlugLocale(state, locale);
  if (!tradition) {
    return { title: 'Tradition Not Found' };
  }
  const t = getTranslations(locale);
  return {
    title: `${tradition.state} — ${t.regionalPage.title} | ${t.site.siteName}`,
    description: `${tradition.tagline} Explore the iconic millet dishes, festivals, and cultural practices of ${tradition.state}.`,
    alternates: {
      canonical: `/${lang}/regional-traditions/${state}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/regional-traditions/${state}`])
      ),
    },
  };
}

// ---------------------------------------------------------------------------
// Region badge variant helper
// ---------------------------------------------------------------------------

const regionBadgeVariant: Record<string, 'green' | 'orange' | 'blue' | 'red' | 'default'> = {
  'South India': 'green',
  'Western India': 'orange',
  'Northern India': 'blue',
  'Eastern India': 'red',
  'Northeast India': 'default',
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function RegionalTraditionDetailPage({ params }: PageProps) {
  const { lang, state } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = getTranslations(locale);
  const tradition = getRegionalTraditionBySlugLocale(state, locale);

  if (!tradition) {
    notFound();
  }

  const sidebarSections = [
    { id: 'overview', title: 'Overview' },
    { id: 'dishes', title: t.regionalPage.iconicDishes },
    { id: 'festivals', title: t.regionalPage.festivals },
    { id: 'practices', title: t.regionalPage.traditionalPractices },
    { id: 'related-millets', title: 'Primary Millets' },
  ];

  return (
    <>
      <Breadcrumb locale={locale} />

      {/* Hero Area */}
      <header className="content-wrapper pt-4 pb-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <Badge variant={regionBadgeVariant[tradition.region] || 'default'}>
            {tradition.region}
          </Badge>
          <Badge variant="default" size="sm">
            {tradition.iconicDishes.length} {t.regionalPage.iconicDishes}
          </Badge>
        </div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-2">
          {tradition.state}
        </h1>
        <p className="text-lg italic text-warm-gray dark:text-earth-400 mb-4">
          {tradition.tagline}
        </p>
      </header>

      {/* Two-column layout */}
      <div className="content-wrapper flex gap-10 pb-16">
        {/* Main Content */}
        <div className="flex-1 min-w-0 space-y-14">
          {/* ===== Overview ===== */}
          <section id="overview">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-warm-gray dark:text-earth-400" />
              Overview
            </h2>
            <p className="text-earth-700 dark:text-earth-300 leading-relaxed mb-6">
              {tradition.description}
            </p>

            {/* Cultural Significance */}
            <Card variant="outlined">
              <CardBody>
                <h3 className="font-heading text-lg font-semibold text-earth-800 dark:text-earth-100 mb-3">
                  {t.regionalPage.culturalSignificance}
                </h3>
                <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed">
                  {tradition.culturalSignificance}
                </p>
              </CardBody>
            </Card>

            {/* Quote / Saying */}
            {tradition.famousQuoteOrSaying && (
              <blockquote className="mt-6 border-l-4 border-earth-500 pl-4 py-2">
                <p className="text-earth-700 dark:text-earth-300 italic leading-relaxed">
                  {tradition.famousQuoteOrSaying}
                </p>
              </blockquote>
            )}
          </section>

          {/* ===== Iconic Dishes ===== */}
          <section id="dishes">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-warm-gray dark:text-earth-400" />
              {t.regionalPage.iconicDishes}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tradition.iconicDishes.map((dish, index) => (
                <Card key={index} variant="outlined">
                  <CardBody>
                    <h3 className="font-heading text-base font-bold text-earth-800 dark:text-earth-100 mb-1">
                      {dish.name}
                    </h3>
                    <Badge variant="default" size="sm" className="mb-3">
                      {dish.millet}
                    </Badge>
                    <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed">
                      {dish.description}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>

          {/* ===== Festivals ===== */}
          <section id="festivals">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-warm-gray dark:text-earth-400" />
              {t.regionalPage.festivals}
            </h2>
            <div className="space-y-4">
              {tradition.festivals.map((festival, index) => (
                <Card key={index} variant="outlined">
                  <CardBody>
                    <h3 className="font-heading text-base font-bold text-earth-800 dark:text-earth-100 mb-2">
                      {festival.name}
                    </h3>
                    <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed mb-3">
                      {festival.description}
                    </p>
                    <div className="bg-forest-50 dark:bg-earth-800 rounded-lg p-3">
                      <p className="text-xs text-warm-gray dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                        Millet Connection
                      </p>
                      <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed">
                        {festival.milletConnection}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>

          {/* ===== Traditional Practices ===== */}
          <section id="practices">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-warm-gray dark:text-earth-400" />
              {t.regionalPage.traditionalPractices}
            </h2>
            <Card variant="outlined">
              <CardBody>
                <ol className="space-y-3">
                  {tradition.traditionalPractices.map((practice, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-earth-700 dark:text-earth-300 leading-relaxed"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-earth-200 dark:bg-earth-700 text-earth-800 dark:text-earth-200 flex items-center justify-center text-xs font-bold mt-0.5">
                        {index + 1}
                      </span>
                      <span>{practice}</span>
                    </li>
                  ))}
                </ol>
              </CardBody>
            </Card>
          </section>

          {/* ===== Related Millets ===== */}
          <section id="related-millets">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4 flex items-center gap-2">
              <Sprout className="w-5 h-5 text-warm-gray dark:text-earth-400" />
              Primary Millets
            </h2>
            <div className="flex flex-wrap gap-3">
              {tradition.primaryMillets.map((milletSlug) => {
                const milletName = milletSlug
                  .split('-')
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(' ');
                return (
                  <Link key={milletSlug} href={localePath(locale, `/millets/${milletSlug}`)}>
                    <Badge
                      variant="green"
                      size="md"
                      className="hover:opacity-80 transition-opacity cursor-pointer"
                    >
                      {milletName}
                    </Badge>
                  </Link>
                );
              })}
            </div>
            <p className="text-xs text-warm-gray dark:text-earth-400 mt-3">
              Click any millet to explore its nutrition, recipes, and detailed profile.
            </p>
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
