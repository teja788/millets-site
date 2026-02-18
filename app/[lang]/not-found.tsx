'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Wheat } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { isValidLocale, getTranslations, localePath } from '@/lib/i18n';

export default function NotFound() {
  const params = useParams();
  const locale: Locale = isValidLocale(params.lang as string) ? (params.lang as Locale) : 'en';
  const t = getTranslations(locale);

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="content-wrapper text-center max-w-lg mx-auto py-20">
        {/* Icon */}
        <Wheat className="w-16 h-16 text-earth-300 dark:text-earth-600 mx-auto mb-6" />

        {/* 404 Label */}
        <p className="text-6xl font-heading font-bold text-earth-300 dark:text-earth-600 mb-4">
          404
        </p>

        {/* Heading */}
        <h1 className="font-heading text-3xl font-bold text-earth-800 dark:text-earth-100 mb-3">
          {t.notFound.heading}
        </h1>

        {/* Subtext */}
        <p className="text-earth-600 dark:text-earth-300 mb-8 leading-relaxed">
          {t.notFound.message}
        </p>

        {/* Back to Home */}
        <Link
          href={localePath(locale, '/')}
          className="inline-flex items-center justify-center rounded-lg bg-earth-500 hover:bg-earth-600 text-white font-medium px-6 py-3 transition-colors mb-8"
        >
          {t.notFound.backHome}
        </Link>

        {/* Popular Sections */}
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6">
          <p className="text-sm text-earth-500 dark:text-earth-400 mb-4">
            {t.notFound.explore}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={localePath(locale, '/millets')}
              className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
            >
              {t.nav.millets}
            </Link>
            <Link
              href={localePath(locale, '/recipes')}
              className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
            >
              {t.nav.recipes}
            </Link>
            <Link
              href={localePath(locale, '/nutrition')}
              className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
            >
              {t.nav.nutrition}
            </Link>
            <Link
              href={localePath(locale, '/faq')}
              className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
            >
              {t.nav.faq}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
