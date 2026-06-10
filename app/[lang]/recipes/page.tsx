'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Breadcrumb from '@/components/layout/Breadcrumb';
import PageBanner from '@/components/sections/PageBanner';
import RecipeCard from '@/components/ui/RecipeCard';
import type { Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/i18n';
import { getRecipes, getMillets } from '@/lib/i18n-data';
import type { RecipeCategory } from '@/lib/types';

export default function RecipesPage() {
  const params = useParams();
  const locale = (params.lang as Locale) || 'en';
  const t = getTranslations(locale);

  const recipes = getRecipes(locale);
  const millets = getMillets(locale);

  const categories: { label: string; value: RecipeCategory | 'all' }[] = [
    { label: t.recipesPage.filterAll, value: 'all' },
    { label: t.recipesPage.filterBreakfast, value: 'breakfast' },
    { label: t.recipesPage.filterLunch, value: 'lunch' },
    { label: t.recipesPage.filterDinner, value: 'dinner' },
    { label: t.recipesPage.filterSnack, value: 'snack' },
    { label: t.recipesPage.filterDessert, value: 'dessert' },
    { label: t.recipesPage.filterDrink, value: 'drink' },
    { label: t.recipesPage.filterBread, value: 'bread' },
  ];

  const milletOptions = [
    { label: t.milletsPage.filterAll, value: 'all' },
    ...millets.map((m) => ({ label: m.name, value: m.slug })),
  ];

  const [activeCategory, setActiveCategory] = useState<RecipeCategory | 'all'>('all');
  const [activeMillet, setActiveMillet] = useState<string>('all');

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchCategory = activeCategory === 'all' || recipe.category === activeCategory;
      const matchMillet = activeMillet === 'all' || recipe.millets.includes(activeMillet);
      return matchCategory && matchMillet;
    });
  }, [activeCategory, activeMillet, recipes]);

  return (
    <main>
      <Breadcrumb locale={locale} />
      <PageBanner src="/images/hero/hero-recipes.webp" alt={t.recipesPage.title} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
          {t.recipesPage.title}
        </h1>
        <p className="text-lg text-earth-700 dark:text-earth-300 max-w-3xl mb-10 leading-relaxed">
          {t.recipesPage.description}
        </p>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          {/* Category filter buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-earth-500 text-white'
                    : 'bg-white dark:bg-earth-800 text-earth-800 dark:text-earth-200 hover:bg-earth-100 dark:hover:bg-earth-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Millet type dropdown */}
          <select
            value={activeMillet}
            onChange={(e) => setActiveMillet(e.target.value)}
            className="px-4 py-2 rounded-lg border border-earth-200 dark:border-earth-700 bg-cream dark:bg-earth-800 text-earth-800 dark:text-earth-200 text-sm focus:outline-none focus:ring-2 focus:ring-earth-500"
          >
            {milletOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Results count */}
        <p className="text-sm text-warm-gray dark:text-earth-400 mb-6">
          {t.common.showing} {filteredRecipes.length} {filteredRecipes.length === 1 ? t.common.recipeSingular : t.common.recipePlural}
        </p>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-warm-gray dark:text-earth-400 text-lg">
              {t.common.noRecipesFilter}
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
