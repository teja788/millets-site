'use client';

import { useState, useMemo } from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Card, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import type { Myth } from '@/lib/types';
import type { Locale } from '@/lib/i18n';
import type { TranslationKeys } from '@/lib/translations/en';

const categories: { labelKey: string; value: Myth['category'] | 'all' }[] = [
  { labelKey: 'all', value: 'all' },
  { labelKey: 'nutrition', value: 'nutrition' },
  { labelKey: 'cooking', value: 'cooking' },
  { labelKey: 'health', value: 'health' },
  { labelKey: 'farming', value: 'farming' },
  { labelKey: 'general', value: 'general' },
];

const categoryLabels: Record<string, Record<string, string>> = {
  en: {
    all: 'All',
    nutrition: 'Nutrition',
    cooking: 'Cooking',
    health: 'Health',
    farming: 'Farming',
    general: 'General',
  },
  te: {
    all: 'అన్నీ',
    nutrition: 'పోషణ',
    cooking: 'వంట',
    health: 'ఆరోగ్యం',
    farming: 'వ్యవసాయం',
    general: 'సాధారణం',
  },
};

export default function MythsPageClient({
  locale,
  t,
  myths,
}: {
  locale: Locale;
  t: TranslationKeys;
  myths: Myth[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<Myth['category'] | 'all'>('all');

  const filteredMyths = useMemo(() => {
    if (selectedCategory === 'all') return myths;
    return myths.filter((m) => m.category === selectedCategory);
  }, [selectedCategory, myths]);

  const labels = categoryLabels[locale] || categoryLabels.en;

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
          {t.mythsPage.title}
        </h1>
        <p className="text-lg text-earth-700 dark:text-earth-300 max-w-3xl mb-8 leading-relaxed">
          {locale === 'te'
            ? 'చిరుధాన్యాలు అపోహలతో చుట్టబడి ఉన్నాయి -- "ముతక ధాన్యాలు" వంటి పాత లేబుల్స్ నుండి నిరాధార ఆరోగ్య భయాల వరకు. ఇక్కడ మేము అత్యంత సాధారణ అపోహలను ఆధారాల ఆధారంగా నిజాలతో చర్చిస్తాము.'
            : 'Millets have been surrounded by misconceptions -- from outdated labels like "coarse grains" to unfounded health scares. Here we address the most common myths with evidence-based facts, so you can make informed choices about including millets in your diet.'}
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={selectedCategory === cat.value ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setSelectedCategory(cat.value)}
            >
              {labels[cat.labelKey] || cat.labelKey}
            </Button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-sm text-warm-gray dark:text-earth-400 mb-6">
          {locale === 'te'
            ? `${myths.length} లో ${filteredMyths.length} అపోహలు చూపిస్తోంది`
            : `Showing ${filteredMyths.length} of ${myths.length} myths`}
        </p>

        {/* Myths List */}
        <div className="space-y-6 max-w-4xl">
          {filteredMyths.map((item) => (
            <Card key={item.id} variant="outlined">
              <CardBody className="p-0">
                {/* Myth Section */}
                <div className="bg-red-900/20 border-l-4 border-red-700 p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                        {t.mythsPage.myth}
                      </span>
                      <p className="text-earth-800 dark:text-earth-100 font-medium mt-1 leading-relaxed">
                        {item.myth}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fact Section */}
                <div className="bg-forest-900/20 border-l-4 border-forest-700 p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-green-400 uppercase tracking-wider">
                        {t.mythsPage.fact}
                      </span>
                      <p className="text-earth-800 dark:text-earth-200 text-sm mt-1 leading-relaxed">
                        {item.fact}
                      </p>
                      {item.sources && item.sources.length > 0 && (
                        <div className="mt-3">
                          <p className="text-xs text-warm-gray dark:text-earth-400 italic">
                            {t.common.sources}: {item.sources.join('; ')}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {filteredMyths.length === 0 && (
          <div className="text-center py-12">
            <p className="text-warm-gray dark:text-earth-400 text-lg">
              {locale === 'te'
                ? 'ఈ విభాగంలో అపోహలు కనుగొనబడలేదు.'
                : 'No myths found in this category.'}
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
