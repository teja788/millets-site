'use client';

import { useParams } from 'next/navigation';
import { Printer } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { isValidLocale, getTranslations } from '@/lib/i18n';

export default function PrintButton() {
  const params = useParams();
  const locale: Locale = isValidLocale(params.lang as string) ? (params.lang as Locale) : 'en';
  const t = getTranslations(locale);

  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-lg border-2 border-earth-500 text-earth-500 dark:border-earth-400 dark:text-earth-200 hover:bg-earth-500 hover:text-white transition font-medium cursor-pointer"
    >
      <Printer className="w-4 h-4" />
      {t.recipeDetail.print}
    </button>
  );
}
