'use client';

import { useState, useMemo } from 'react';
import type { Millet } from '@/lib/types';
import Button from '@/components/ui/Button';

interface ComparisonTableProps {
  millets: Millet[];
}

interface NutritionRow {
  label: string;
  key: string;
  unit: string;
  getValue: (millet: Millet) => number;
  higher: 'better' | 'lower' | 'neutral';
}

const NUTRITION_ROWS: NutritionRow[] = [
  {
    label: 'Calories',
    key: 'calories',
    unit: 'kcal',
    getValue: (m) => m.nutrition.calories,
    higher: 'neutral',
  },
  {
    label: 'Protein',
    key: 'protein',
    unit: 'g',
    getValue: (m) => m.nutrition.protein_g,
    higher: 'better',
  },
  {
    label: 'Fat',
    key: 'fat',
    unit: 'g',
    getValue: (m) => m.nutrition.fat_g,
    higher: 'neutral',
  },
  {
    label: 'Carbohydrates',
    key: 'carbs',
    unit: 'g',
    getValue: (m) => m.nutrition.carbohydrates_g,
    higher: 'neutral',
  },
  {
    label: 'Fiber',
    key: 'fiber',
    unit: 'g',
    getValue: (m) => m.nutrition.fiber_g,
    higher: 'better',
  },
  {
    label: 'Calcium',
    key: 'calcium',
    unit: 'mg',
    getValue: (m) => m.nutrition.calcium_mg,
    higher: 'better',
  },
  {
    label: 'Iron',
    key: 'iron',
    unit: 'mg',
    getValue: (m) => m.nutrition.iron_mg,
    higher: 'better',
  },
  {
    label: 'Zinc',
    key: 'zinc',
    unit: 'mg',
    getValue: (m) => m.nutrition.zinc_mg,
    higher: 'better',
  },
  {
    label: 'Phosphorus',
    key: 'phosphorus',
    unit: 'mg',
    getValue: (m) => m.nutrition.phosphorus_mg,
    higher: 'better',
  },
  {
    label: 'Magnesium',
    key: 'magnesium',
    unit: 'mg',
    getValue: (m) => m.nutrition.magnesium_mg,
    higher: 'better',
  },
  {
    label: 'Potassium',
    key: 'potassium',
    unit: 'mg',
    getValue: (m) => m.nutrition.potassium_mg,
    higher: 'better',
  },
];

const MAX_SELECTIONS = 4;

export default function ComparisonTable({ millets }: ComparisonTableProps) {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);

  const selectedMillets = useMemo(
    () =>
      selectedSlugs
        .map((slug) => millets.find((m) => m.slug === slug))
        .filter((m): m is Millet => m !== undefined),
    [selectedSlugs, millets]
  );

  const handleSelect = (index: number, slug: string) => {
    setSelectedSlugs((prev) => {
      const updated = [...prev];
      if (slug === '') {
        updated.splice(index, 1);
      } else {
        updated[index] = slug;
      }
      return updated;
    });
  };

  const handleAddSlot = () => {
    if (selectedSlugs.length < MAX_SELECTIONS) {
      setSelectedSlugs((prev) => [...prev, '']);
    }
  };

  const handleReset = () => {
    setSelectedSlugs([]);
  };

  const getBestIndex = (row: NutritionRow): number | null => {
    if (selectedMillets.length < 2) return null;
    const values = selectedMillets.map((m) => row.getValue(m));
    if (row.higher === 'better') {
      const max = Math.max(...values);
      return values.indexOf(max);
    }
    if (row.higher === 'lower') {
      const min = Math.min(...values);
      return values.indexOf(min);
    }
    return null;
  };

  // Ensure at least 2 select slots visible
  const slotsCount = Math.max(2, selectedSlugs.length);

  return (
    <div className="space-y-6">
      {/* Selection controls */}
      <div className="flex flex-wrap items-end gap-4">
        {Array.from({ length: slotsCount }).map((_, index) => (
          <div key={index} className="flex-1 min-w-[180px]">
            <label className="block text-sm font-medium text-earth-700 dark:text-earth-200 mb-1">
              Millet {index + 1}
            </label>
            <select
              value={selectedSlugs[index] || ''}
              onChange={(e) => handleSelect(index, e.target.value)}
              className="w-full rounded-lg border border-earth-200 dark:border-earth-700 bg-cream dark:bg-earth-800 px-3 py-2 text-earth-800 dark:text-earth-100 text-sm focus:outline-none focus:ring-2 focus:ring-earth-400 focus:border-earth-400"
            >
              <option value="">Select a millet...</option>
              {millets.map((m) => (
                <option
                  key={m.slug}
                  value={m.slug}
                  disabled={
                    selectedSlugs.includes(m.slug) &&
                    selectedSlugs[index] !== m.slug
                  }
                >
                  {m.name}
                </option>
              ))}
            </select>
          </div>
        ))}

        {slotsCount < MAX_SELECTIONS && (
          <Button variant="ghost" size="sm" onClick={handleAddSlot}>
            + Add Millet
          </Button>
        )}

        <Button variant="secondary" size="sm" onClick={handleReset}>
          Reset
        </Button>
      </div>

      {/* Comparison table */}
      {selectedMillets.length >= 2 && (
        <div className="overflow-x-auto rounded-xl border border-earth-200 dark:border-earth-700">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-earth-200 dark:bg-earth-700">
                <th className="px-4 py-3 text-left text-sm font-semibold text-earth-800 dark:text-earth-100 uppercase tracking-wider">
                  Nutrient (per 100g)
                </th>
                {selectedMillets.map((m) => (
                  <th
                    key={m.slug}
                    className="px-4 py-3 text-center text-sm font-semibold text-earth-800 dark:text-earth-100 uppercase tracking-wider"
                  >
                    {m.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {NUTRITION_ROWS.map((row, rowIndex) => {
                const bestIdx = getBestIndex(row);
                return (
                  <tr
                    key={row.key}
                    className={`border-b border-earth-100 dark:border-earth-700 ${
                      rowIndex % 2 === 0 ? 'bg-earth-50 dark:bg-earth-800' : 'bg-white dark:bg-earth-900'
                    }`}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-earth-700 dark:text-earth-200">
                      {row.label}{' '}
                      <span className="text-earth-400 dark:text-earth-500">({row.unit})</span>
                    </td>
                    {selectedMillets.map((m, colIndex) => {
                      const isBest = bestIdx === colIndex;
                      return (
                        <td
                          key={m.slug}
                          className={`px-4 py-3 text-center text-sm ${
                            isBest
                              ? 'bg-forest-100 dark:bg-forest-900/40 text-forest-700 dark:text-forest-300 font-bold'
                              : 'text-earth-700 dark:text-earth-200'
                          }`}
                        >
                          {row.getValue(m)}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {selectedMillets.length < 2 && (
        <p className="text-center text-earth-500 dark:text-earth-400 py-8">
          Select at least 2 millets to compare their nutritional profiles.
        </p>
      )}
    </div>
  );
}
