'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { locales, localePattern } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

const localeLabels: Record<Locale, string> = {
  en: 'English',
  te: 'తెలుగు',
  ar: 'العربية',
  fr: 'Français',
};

export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const pathWithoutLocale = pathname.replace(localePattern, '') || '/';

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Hide on /en/about (no other locale equivalent)
  if (pathname === '/en/about') return null;

  const otherLocales = locales.filter((l) => l !== currentLocale);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium text-earth-800 dark:text-earth-300 hover:text-forest-600 dark:hover:text-forest-300 hover:bg-earth-100 dark:hover:bg-earth-800/40 transition-colors"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        {localeLabels[currentLocale]}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full mt-1 ltr:right-0 rtl:left-0 bg-white dark:bg-earth-900 border border-earth-200 dark:border-earth-700 rounded-lg shadow-lg py-1 z-50 min-w-[120px]">
          {otherLocales.map((locale) => (
            <Link
              key={locale}
              href={`/${locale}${pathWithoutLocale}`}
              className="block px-4 py-2 text-sm text-earth-800 dark:text-earth-300 hover:bg-earth-100 dark:hover:bg-earth-800/40 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {localeLabels[locale]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
