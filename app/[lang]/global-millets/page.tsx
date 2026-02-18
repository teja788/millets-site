'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Badge from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, isValidLocale } from '@/lib/i18n';
import { getGlobalMilletRegions } from '@/lib/i18n-data';

const continentBadgeVariant: Record<string, 'green' | 'orange' | 'blue' | 'red' | 'default'> = {
  Africa: 'orange',
  Asia: 'green',
  'Asia/Europe': 'blue',
  Europe: 'red',
};

export default function GlobalMilletsPage() {
  const params = useParams();
  const lang = params.lang as string;
  const locale: Locale = isValidLocale(lang) ? lang : 'en';
  const t = getTranslations(locale);

  const globalMilletRegions = useMemo(() => getGlobalMilletRegions(locale), [locale]);

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper section-padding">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
          {t.globalPage.title}
        </h1>
        <p className="text-lg text-earth-700 dark:text-earth-300 max-w-3xl mb-10 leading-relaxed">
          Millets are not just an Indian story. From the injera tables of
          Ethiopia to the boza shops of Istanbul, from the ancient granaries of
          China to the porridge pots of medieval Europe, millets have sustained
          civilizations across every inhabited continent. Explore how different
          cultures have cultivated, cooked, and celebrated these remarkable
          grains throughout history.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {globalMilletRegions.map((region) => (
            <Link
              key={region.slug}
              href={localePath(locale, `/global-millets/${region.slug}`)}
            >
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Card variant="outlined" className="h-full hover:border-earth-500 transition-colors">
                  <CardBody>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h2 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100">
                        {region.region}
                      </h2>
                      <Badge
                        variant={continentBadgeVariant[region.continent] || 'default'}
                        size="sm"
                      >
                        {region.continent}
                      </Badge>
                    </div>

                    <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed mb-4">
                      {region.tagline}
                    </p>

                    <p className="text-xs text-warm-gray dark:text-earth-400 mb-3">
                      <span className="font-medium text-earth-700 dark:text-earth-300">Countries:</span>{' '}
                      {region.countries.join(', ')}
                    </p>

                    {/* Key Fact Highlight */}
                    <div className="bg-forest-50 dark:bg-earth-800 rounded-lg p-3 mb-3">
                      <p className="text-xs text-warm-gray dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                        {t.globalPage.keyFact}
                      </p>
                      <p className="text-xs text-earth-700 dark:text-earth-300 leading-relaxed line-clamp-3">
                        {region.keyFact}
                      </p>
                    </div>

                    <div className="flex items-center justify-end">
                      <span className="text-xs text-warm-gray dark:text-earth-400 font-medium">
                        Explore &rarr;
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </Link>
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
