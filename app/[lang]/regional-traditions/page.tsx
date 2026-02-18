'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Badge from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, isValidLocale } from '@/lib/i18n';
import { getRegionalTraditions } from '@/lib/i18n-data';

type RegionFilter =
  | 'all'
  | 'South India'
  | 'Western India'
  | 'Northern India'
  | 'Eastern India'
  | 'Northeast India';

const regionFilters: { label: string; value: RegionFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'South India', value: 'South India' },
  { label: 'Western India', value: 'Western India' },
  { label: 'Northern India', value: 'Northern India' },
  { label: 'Eastern India', value: 'Eastern India' },
  { label: 'Northeast India', value: 'Northeast India' },
];

const regionBadgeVariant: Record<string, 'green' | 'orange' | 'blue' | 'red' | 'default'> = {
  'South India': 'green',
  'Western India': 'orange',
  'Northern India': 'blue',
  'Eastern India': 'red',
  'Northeast India': 'default',
};

export default function RegionalTraditionsPage() {
  const params = useParams();
  const lang = params.lang as string;
  const locale: Locale = isValidLocale(lang) ? lang : 'en';
  const t = getTranslations(locale);

  const regionalTraditions = useMemo(() => getRegionalTraditions(locale), [locale]);

  const [activeRegion, setActiveRegion] = useState<RegionFilter>('all');

  const filteredTraditions = useMemo(() => {
    if (activeRegion === 'all') return regionalTraditions;
    return regionalTraditions.filter((trad) => trad.region === activeRegion);
  }, [activeRegion, regionalTraditions]);

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper section-padding">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
          {t.regionalPage.title}
        </h1>
        <p className="text-lg text-earth-700 dark:text-earth-300 max-w-3xl mb-10 leading-relaxed">
          India&apos;s millet heritage is a tapestry of regional traditions, each
          shaped by local climate, soil, culture, and centuries of culinary
          innovation. From the bajra rotis of Rajasthan&apos;s deserts to the ragi
          mudde of Karnataka&apos;s Deccan plateau, every state has its own
          relationship with these ancient grains. Explore the iconic dishes,
          festivals, and living practices that keep millet traditions alive across
          the subcontinent.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {regionFilters.map((rf) => (
            <button
              key={rf.value}
              onClick={() => setActiveRegion(rf.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${
                activeRegion === rf.value
                  ? 'bg-earth-500 text-white'
                  : 'bg-white dark:bg-earth-800 text-earth-800 dark:text-earth-200 hover:bg-earth-100 dark:hover:bg-earth-700'
              }`}
            >
              {rf.label}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-sm text-warm-gray dark:text-earth-400 mb-6">
          Showing {filteredTraditions.length}{' '}
          {filteredTraditions.length === 1 ? 'tradition' : 'traditions'}
        </p>

        {/* Grid */}
        {filteredTraditions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTraditions.map((tradition) => (
              <Link
                key={tradition.slug}
                href={localePath(locale, `/regional-traditions/${tradition.slug}`)}
              >
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Card variant="outlined" className="h-full hover:border-earth-500 transition-colors">
                    <CardBody>
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <h2 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100">
                          {tradition.state}
                        </h2>
                        <Badge
                          variant={regionBadgeVariant[tradition.region] || 'default'}
                          size="sm"
                        >
                          {tradition.region}
                        </Badge>
                      </div>

                      <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed mb-4">
                        {tradition.tagline}
                      </p>

                      <p className="text-xs text-warm-gray dark:text-earth-400 mb-3">
                        <span className="font-medium text-earth-700 dark:text-earth-300">Primary millets:</span>{' '}
                        {tradition.primaryMillets
                          .map((slug) =>
                            slug
                              .split('-')
                              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                              .join(' ')
                          )
                          .join(', ')}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-warm-gray dark:text-earth-400">
                          {tradition.iconicDishes.length}{' '}
                          {tradition.iconicDishes.length === 1 ? 'dish' : 'dishes'} featured
                        </span>
                        <span className="text-xs text-earth-400 font-medium">
                          Explore &rarr;
                        </span>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-warm-gray dark:text-earth-400 text-lg">
              No traditions found for the selected region. Try a different filter.
            </p>
          </div>
        )}
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
