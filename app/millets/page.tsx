'use client';

import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import MilletGrid from '@/components/sections/MilletGrid';
import Button from '@/components/ui/Button';
import { millets } from '@/data/millets';

type FilterType = 'all' | 'major' | 'minor';

export default function MilletsPage() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredMillets = useMemo(() => {
    if (filter === 'all') return millets;
    return millets.filter((m) => m.category === filter);
  }, [filter]);

  const filters: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Major Millets', value: 'major' },
    { label: 'Minor Millets', value: 'minor' },
  ];

  return (
    <>
      <Breadcrumb />

      <div className="content-wrapper section-padding">
        {/* Page Title */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
          Explore Millets
        </h1>
        <p className="text-earth-600 dark:text-earth-300 leading-relaxed max-w-2xl mb-8">
          India grows nine principal millet varieties, each with distinct
          nutrition, flavor, and culinary traditions. Use the filters below to
          browse by category, or click any card to dive deep into a specific
          millet.
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
          Showing {filteredMillets.length} millet{filteredMillets.length !== 1 ? 's' : ''}
        </p>

        {/* Millet Grid */}
        <MilletGrid millets={filteredMillets} columns={3} />
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-700 pt-6 mt-10">
          <p className="text-xs text-earth-400 leading-relaxed max-w-3xl">
            <strong>Disclaimer:</strong> This content is created with the
            assistance of AI and is intended for educational purposes only. While
            we strive for accuracy, information may contain errors or be
            incomplete. Always do your own research and consult qualified
            professionals (nutritionists, doctors, agricultural experts) before
            making decisions based on this content. This website does not provide
            medical, nutritional, or agricultural advice.
          </p>
        </div>
      </div>
    </>
  );
}
