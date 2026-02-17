'use client';

import { useState, useMemo, useEffect } from 'react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import RecipeCard from '@/components/ui/RecipeCard';
import { recipes } from '@/data/recipes';
import { millets } from '@/data/millets';
import type { RecipeCategory } from '@/lib/types';

const categories: { label: string; value: RecipeCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Breakfast', value: 'breakfast' },
  { label: 'Lunch', value: 'lunch' },
  { label: 'Dinner', value: 'dinner' },
  { label: 'Snack', value: 'snack' },
  { label: 'Dessert', value: 'dessert' },
  { label: 'Drink', value: 'drink' },
  { label: 'Bread', value: 'bread' },
];

const milletOptions = [
  { label: 'All Millets', value: 'all' },
  ...millets.map((m) => ({ label: m.name, value: m.slug })),
];

export default function RecipesPage() {
  const [activeCategory, setActiveCategory] = useState<RecipeCategory | 'all'>('all');
  const [activeMillet, setActiveMillet] = useState<string>('all');

  useEffect(() => {
    document.title = 'Millet Recipes | Millets Info';
  }, []);

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchCategory = activeCategory === 'all' || recipe.category === activeCategory;
      const matchMillet = activeMillet === 'all' || recipe.millets.includes(activeMillet);
      return matchCategory && matchMillet;
    });
  }, [activeCategory, activeMillet]);

  return (
    <main>
      <Breadcrumb />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
          Millet Recipes
        </h1>
        <p className="text-lg text-earth-700 dark:text-earth-300 max-w-3xl mb-10 leading-relaxed">
          Discover the versatility of millets through our collection of traditional and modern
          recipes. From hearty Rajasthani bajra rotis to crispy South Indian dosas and warming
          porridges, millets have been the foundation of Indian cooking for thousands of years.
          Each recipe is designed to bring out the best flavor and nutrition from these ancient
          grains.
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
          Showing {filteredRecipes.length} {filteredRecipes.length === 1 ? 'recipe' : 'recipes'}
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
              No recipes found for the selected filters. Try a different combination.
            </p>
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6 mt-10">
          <p className="text-xs text-warm-gray dark:text-earth-400 leading-relaxed max-w-3xl">
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
    </main>
  );
}
