'use client';

import Link from 'next/link';
import type { Recipe } from '@/lib/types';
import RecipeCard from '@/components/ui/RecipeCard';

interface FeaturedRecipesProps {
  recipes: Recipe[];
  title?: string;
}

export default function FeaturedRecipes({
  recipes,
  title = 'Featured Recipes',
}: FeaturedRecipesProps) {
  return (
    <section className="section-padding">
      <div className="content-wrapper">
        <h2 className="font-heading text-3xl font-bold text-earth-800 dark:text-earth-100 mb-8">
          {title}
        </h2>

        {/* Desktop: grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>

        {/* Mobile: horizontal scroll snap */}
        <div className="md:hidden -mx-6 px-6">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
            {recipes.map((recipe) => (
              <div
                key={recipe.slug}
                className="snap-start flex-shrink-0 w-[280px]"
              >
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        </div>

        {/* View all link */}
        <div className="mt-8 text-center">
          <Link
            href="/recipes"
            className="inline-flex items-center gap-2 text-earth-500 hover:text-earth-200 font-medium transition-colors"
          >
            View All Recipes
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 3L11 8L6 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
