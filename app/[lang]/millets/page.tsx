'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Breadcrumb from '@/components/layout/Breadcrumb';
import MilletGrid from '@/components/sections/MilletGrid';
import Button from '@/components/ui/Button';
import { Card, CardBody } from '@/components/ui/Card';
import type { Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/i18n';
import { getMillets } from '@/lib/i18n-data';

type FilterType = 'all' | 'major' | 'minor';

export default function MilletsPage() {
  const params = useParams();
  const locale = (params.lang as Locale) || 'en';
  const t = getTranslations(locale);
  const millets = getMillets(locale);

  const [filter, setFilter] = useState<FilterType>('all');

  const filteredMillets = useMemo(() => {
    if (filter === 'all') return millets;
    return millets.filter((m) => m.category === filter);
  }, [filter, millets]);

  const filters: { label: string; value: FilterType }[] = [
    { label: t.milletsPage.filterAll, value: 'all' },
    { label: t.milletsPage.filterMajor, value: 'major' },
    { label: t.milletsPage.filterMinor, value: 'minor' },
  ];

  return (
    <>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper section-padding">
        {/* Page Title */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
          {t.milletsPage.title}
        </h1>
        <p className="text-earth-600 dark:text-earth-300 leading-relaxed max-w-2xl mb-8">
          {t.milletsPage.description}
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {filters.map((f) => (
            <Button
              key={f.value}
              variant={filter === f.value ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </Button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-sm text-earth-500 dark:text-earth-400 mb-6">
          {t.common.showing} {filteredMillets.length} {filteredMillets.length !== 1 ? t.common.milletPlural : t.common.milletSingular}
        </p>

        {/* Millet Grid */}
        <MilletGrid millets={filteredMillets} columns={3} />

        {/* Major vs Minor Millets */}
        <section className="mt-16">
          <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            {t.milletsPage.majorVsMinorTitle}
          </h2>
          <div className="max-w-3xl space-y-4 text-earth-600 dark:text-earth-300 leading-relaxed">
            <p>{t.milletsPage.majorVsMinorIntro}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card variant="outlined">
                <CardBody>
                  <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                    {t.milletsPage.majorMilletsTitle}
                  </h3>
                  <p className="text-sm text-earth-600 dark:text-earth-300">
                    {t.milletsPage.majorMilletsDesc}
                  </p>
                </CardBody>
              </Card>

              <Card variant="outlined">
                <CardBody>
                  <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                    {t.milletsPage.minorMilletsTitle}
                  </h3>
                  <p className="text-sm text-earth-600 dark:text-earth-300">
                    {t.milletsPage.minorMilletsDesc}
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* Naked vs Husked Grains */}
        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            {t.milletsPage.nakedVsHuskedTitle}
          </h2>
          <div className="max-w-3xl space-y-4 text-earth-600 dark:text-earth-300 leading-relaxed">
            <p>{t.milletsPage.nakedVsHuskedIntro}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card variant="outlined">
                <CardBody>
                  <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                    {t.common.nakedGrain}
                  </h3>
                  <p className="text-sm text-earth-600 dark:text-earth-300">
                    {t.milletsPage.nakedGrainsDesc}
                  </p>
                </CardBody>
              </Card>

              <Card variant="outlined">
                <CardBody>
                  <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                    {t.common.huskedGrain}
                  </h3>
                  <p className="text-sm text-earth-600 dark:text-earth-300">
                    {t.milletsPage.huskedGrainsDesc}
                  </p>
                </CardBody>
              </Card>
            </div>
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
    </>
  );
}
