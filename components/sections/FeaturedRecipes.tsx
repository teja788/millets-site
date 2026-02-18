'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import type { Recipe } from '@/lib/types';
import type { Locale } from '@/lib/i18n';
import { localePath, isValidLocale, getTranslations } from '@/lib/i18n';
import RecipeCard from '@/components/ui/RecipeCard';

interface FeaturedRecipesProps {
  recipes: Recipe[];
  title?: string;
}

export default function FeaturedRecipes({
  recipes,
  title,
}: FeaturedRecipesProps) {
  const params = useParams();
  const locale: Locale = isValidLocale(params.lang as string) ? (params.lang as Locale) : 'en';
  const t = getTranslations(locale);
  const heading = title || t.common.viewAll;
  return (
    <section className="section-padding">
      <div className="content-wrapper">
        <h2 className="font-heading text-3xl font-bold text-earth-800 dark:text-earth-100 mb-8">
          {heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>

        {/* View all link */}
        <div className="mt-8 text-center">
          <Link
            href={localePath(locale, '/recipes')}
            className="inline-flex items-center gap-2 text-earth-500 hover:text-earth-500 dark:hover:text-earth-200 font-medium transition-colors"
          >
            {t.common.viewAll}
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
