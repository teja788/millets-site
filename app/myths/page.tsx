'use client';

import { useState, useMemo, useEffect } from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Card, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { myths } from '@/data/myths';
import type { Myth } from '@/lib/types';

const categories: { label: string; value: Myth['category'] | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Nutrition', value: 'nutrition' },
  { label: 'Cooking', value: 'cooking' },
  { label: 'Health', value: 'health' },
  { label: 'Farming', value: 'farming' },
  { label: 'General', value: 'general' },
];

export default function MythsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Myth['category'] | 'all'>('all');

  useEffect(() => {
    document.title = 'Myths & Facts About Millets | Millets Guide';
  }, []);

  const filteredMyths = useMemo(() => {
    if (selectedCategory === 'all') return myths;
    return myths.filter((m) => m.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main>
      <Breadcrumb />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
          Myths &amp; Facts About Millets
        </h1>
        <p className="text-lg text-earth-700 dark:text-earth-300 max-w-3xl mb-8 leading-relaxed">
          Millets have been surrounded by misconceptions -- from outdated labels like
          &ldquo;coarse grains&rdquo; to unfounded health scares. Here we address the most
          common myths with evidence-based facts, so you can make informed choices about
          including millets in your diet.
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
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-sm text-warm-gray dark:text-earth-400 mb-6">
          Showing {filteredMyths.length} of {myths.length} myths
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
                        Myth
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
                        Fact
                      </span>
                      <p className="text-earth-800 dark:text-earth-200 text-sm mt-1 leading-relaxed">
                        {item.fact}
                      </p>
                      {item.sources && item.sources.length > 0 && (
                        <div className="mt-3">
                          <p className="text-xs text-warm-gray dark:text-earth-400 italic">
                            Sources: {item.sources.join('; ')}
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
              No myths found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6 mt-10">
          <p className="text-xs text-warm-gray dark:text-earth-400 leading-relaxed max-w-3xl">
            <strong>Disclaimer:</strong> This content is created with the assistance of AI and is intended for educational purposes only. While we strive for accuracy, information may contain errors or be incomplete. Always do your own research and consult qualified professionals (nutritionists, doctors, agricultural experts) before making decisions based on this content. This website does not provide medical, nutritional, or agricultural advice.
          </p>
        </div>
      </div>
    </main>
  );
}
