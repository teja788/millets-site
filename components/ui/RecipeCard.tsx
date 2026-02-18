'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Clock, Users } from 'lucide-react';
import type { Recipe } from '@/lib/types';
import type { Locale } from '@/lib/i18n';
import { localePath, isValidLocale } from '@/lib/i18n';
import Badge from '@/components/ui/Badge';

interface RecipeCardProps {
  recipe: Recipe;
}

const difficultyVariant: Record<Recipe['difficulty'], 'green' | 'orange' | 'red'> = {
  easy: 'green',
  medium: 'orange',
  advanced: 'red',
};

const categoryGradients: Record<string, string> = {
  breakfast: 'from-orange-500 via-amber-500 to-yellow-600',
  lunch: 'from-green-600 via-emerald-500 to-teal-600',
  dinner: 'from-indigo-600 via-purple-500 to-violet-600',
  snack: 'from-rose-500 via-pink-500 to-red-500',
  dessert: 'from-pink-400 via-rose-400 to-fuchsia-500',
  drink: 'from-cyan-500 via-sky-500 to-blue-500',
  bread: 'from-amber-700 via-yellow-600 to-orange-700',
};

const defaultGradient = 'from-earth-400 via-earth-500 to-earth-700';

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const params = useParams();
  const locale: Locale = isValidLocale(params.lang as string) ? (params.lang as Locale) : 'en';
  const [imgError, setImgError] = useState(false);
  const gradient = categoryGradients[recipe.category] || defaultGradient;
  const hasImage = recipe.imageFile && !imgError;

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0, 0, 0, 0.10)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="w-full"
    >
      <Link href={localePath(locale, `/recipes/${recipe.slug}`)} className="block">
        <div className="bg-white dark:bg-earth-800 rounded-xl overflow-hidden card-shadow h-full flex flex-col">
          {/* Image area */}
          <div className={`relative h-48 overflow-hidden ${hasImage ? '' : `bg-gradient-to-br ${gradient}`}`}>
            {hasImage ? (
              <Image
                src={recipe.imageFile}
                alt={recipe.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/30"
                >
                  <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                  <line x1="6" y1="17" x2="18" y2="17" />
                </svg>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
            {/* Category badge overlay */}
            <div className="absolute top-3 right-3">
              <Badge variant="default" size="sm">
                {recipe.category}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="px-5 py-4 flex flex-col flex-1">
            <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-1">
              {recipe.title}
            </h3>
            <p className="text-sm text-earth-700 dark:text-earth-300 line-clamp-2 mb-3 flex-1">
              {recipe.description}
            </p>

            {/* Meta info */}
            <div className="flex items-center gap-4 text-sm text-earth-700 dark:text-earth-300 mb-3">
              <span className="inline-flex items-center gap-1">
                <Clock size={14} />
                {recipe.cookTime}
              </span>
              <span className="inline-flex items-center gap-1">
                <Users size={14} />
                {recipe.servings} servings
              </span>
            </div>

            {/* Difficulty badge */}
            <div>
              <Badge variant={difficultyVariant[recipe.difficulty]} size="sm">
                {recipe.difficulty}
              </Badge>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
