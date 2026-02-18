'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Scale } from 'lucide-react';
import { Card, CardBody } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { substitutionEntries as defaultEntries } from '@/data/substitution-data';
import type { Locale } from '@/lib/i18n';
import { localePath } from '@/lib/i18n';
import type { SubstitutionEntry } from '@/lib/types';
import type { Millet } from '@/lib/types';

const difficultyVariant: Record<string, 'green' | 'orange' | 'red'> = {
  easy: 'green',
  moderate: 'orange',
  advanced: 'red',
};

export default function SubstitutionCalculator({
  locale = 'en',
  substitutionEntries,
}: {
  locale?: Locale;
  substitutionEntries?: SubstitutionEntry[];
  millets?: Millet[];
}) {
  const entries = substitutionEntries ?? defaultEntries;
  const [selectedGrain, setSelectedGrain] = useState('');
  const [quantity, setQuantity] = useState(1);

  const entry = entries.find(
    (e) => e.conventionalGrain === selectedGrain,
  );

  const parseRatio = (ratio: string): number => {
    const parts = ratio.split(':');
    if (parts.length === 2) {
      return Number(parts[0]) / Number(parts[1]);
    }
    return 1;
  };

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="grain-select"
            className="block text-sm font-medium text-earth-700 dark:text-earth-300 mb-2"
          >
            Select a grain to replace
          </label>
          <select
            id="grain-select"
            value={selectedGrain}
            onChange={(e) => setSelectedGrain(e.target.value)}
            className="w-full px-4 py-3 bg-white dark:bg-earth-800 border border-earth-200 dark:border-earth-700 rounded-lg text-earth-800 dark:text-earth-100 focus:outline-none focus:ring-2 focus:ring-earth-500 transition-colors"
          >
            <option value="">Choose a grain...</option>
            {entries.map((e) => (
              <option key={e.conventionalGrain} value={e.conventionalGrain}>
                {e.conventionalGrain}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="quantity-input"
            className="block text-sm font-medium text-earth-700 dark:text-earth-300 mb-2"
          >
            How many cups?
          </label>
          <input
            id="quantity-input"
            type="number"
            min={0.25}
            max={20}
            step={0.25}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value) || 1)}
            className="w-full px-4 py-3 bg-white dark:bg-earth-800 border border-earth-200 dark:border-earth-700 rounded-lg text-earth-800 dark:text-earth-100 focus:outline-none focus:ring-2 focus:ring-earth-500 transition-colors"
          />
        </div>
      </div>

      {/* Results */}
      {entry ? (
        <div className="space-y-4">
          <h3 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100 flex items-center gap-2">
            <Scale className="w-5 h-5 text-warm-gray dark:text-earth-400" />
            Millet substitutes for {quantity} cup{quantity !== 1 ? 's' : ''} of{' '}
            {entry.conventionalGrain}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {entry.milletSubstitutes.map((sub) => {
              const ratio = parseRatio(sub.ratio);
              const milletAmount = (quantity * ratio).toFixed(2).replace(/\.?0+$/, '');

              return (
                <Card key={sub.millet} variant="outlined">
                  <CardBody>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <Link
                        href={localePath(locale, `/millets/${sub.millet}`)}
                        className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 hover:text-earth-500 dark:hover:text-earth-300 transition-colors"
                      >
                        {sub.milletName}
                      </Link>
                      <Badge
                        variant={difficultyVariant[sub.difficulty]}
                        size="sm"
                      >
                        {sub.difficulty}
                      </Badge>
                    </div>

                    {/* Conversion */}
                    <div className="flex items-center gap-3 mb-3 p-3 bg-earth-100/50 dark:bg-earth-800/50 rounded-lg">
                      <span className="text-earth-700 dark:text-earth-300 text-sm">
                        {quantity} cup{quantity !== 1 ? 's' : ''}
                      </span>
                      <ArrowRight className="w-4 h-4 text-warm-gray dark:text-earth-400" />
                      <span className="text-earth-800 dark:text-earth-100 font-semibold">
                        {milletAmount} cup{Number(milletAmount) !== 1 ? 's' : ''}{' '}
                        {sub.milletName}
                      </span>
                      <span className="text-warm-gray dark:text-earth-400 text-xs">
                        ({sub.ratio})
                      </span>
                    </div>

                    <p className="text-sm text-earth-700 dark:text-earth-300 mb-3">{sub.notes}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {sub.bestFor.map((use) => (
                        <Badge key={use} variant="default" size="sm">
                          {use}
                        </Badge>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <Scale className="w-12 h-12 text-earth-600 mx-auto mb-4" />
          <p className="text-warm-gray dark:text-earth-400">
            Select a grain above to see millet substitution options.
          </p>
        </div>
      )}
    </div>
  );
}
