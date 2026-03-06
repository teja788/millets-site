import { en } from './translations/en';
import type { TranslationKeys } from './translations/en';
import { te } from './translations/te';
import { ar } from './translations/ar';
import { fr } from './translations/fr';
import { de } from './translations/de';
import { hi } from './translations/hi';

export const locales = ['en', 'te', 'ar', 'fr', 'de', 'hi'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Regex to strip locale prefix from a pathname, e.g. /en/millets → /millets */
export const localePattern = new RegExp(`^/(${locales.join('|')})`);

export function isValidLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}

export function localePath(locale: Locale, path: string): string {
  return `/${locale}${path}`;
}

const translationMap: Record<Locale, TranslationKeys> = { en, te, ar, fr, de, hi };

export function getTranslations(locale: Locale) {
  return translationMap[locale] ?? en;
}

/** For use in generateStaticParams — returns [{ lang: 'en' }, { lang: 'te' }, { lang: 'ar' }] */
export function localeParams() {
  return locales.map((lang) => ({ lang }));
}

/**
 * Build hreflang alternates object for metadata.
 * Always use this (or pageAlternates) in every page's generateMetadata.
 * Never manually construct the languages object.
 */
export function hreflangAlternates(path: string) {
  return {
    ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
    'x-default': `/en${path}`,
  };
}

/** Build complete alternates object (canonical + hreflang) for a page */
export function pageAlternates(locale: Locale, path: string) {
  return {
    canonical: `/${locale}${path}`,
    languages: hreflangAlternates(path),
  };
}
