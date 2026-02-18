'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  // Build the switch URL by replacing the locale prefix
  const switchLocale = currentLocale === 'en' ? 'te' : 'en';
  const pathWithoutLocale = pathname.replace(/^\/(en|te)/, '');
  const switchPath = `/${switchLocale}${pathWithoutLocale || '/'}`;

  // Correct the path if it ends up as just the locale
  const href = switchPath === `/${switchLocale}` ? `/${switchLocale}` : switchPath;

  // Hide on /en/about (no Telugu equivalent)
  if (pathname === '/en/about') {
    return null;
  }

  return (
    <Link
      href={href}
      className="px-2 py-1 rounded-md text-sm font-medium text-earth-800 dark:text-earth-300 hover:text-forest-600 dark:hover:text-forest-300 hover:bg-earth-100 dark:hover:bg-earth-800/40 transition-colors"
      aria-label={currentLocale === 'en' ? 'Switch to Telugu' : 'Switch to English'}
    >
      {currentLocale === 'en' ? 'తెలుగు' : 'EN'}
    </Link>
  );
}
