import { en } from './translations/en';
import { te } from './translations/te';
import { ar } from './translations/ar';

export const locales = ['en', 'te', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Regex to strip locale prefix from a pathname, e.g. /en/millets → /millets */
export const localePattern = new RegExp(`^/(${locales.join('|')})`);

const rtlLocales: readonly string[] = ['ar'];

export function isValidLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}

export function isRTL(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

export function localePath(locale: Locale, path: string): string {
  return `/${locale}${path}`;
}

export function getTranslations(locale: Locale) {
  switch (locale) {
    case 'te': return te;
    case 'ar': return ar;
    default: return en;
  }
}

/** For use in generateStaticParams — returns [{ lang: 'en' }, { lang: 'te' }, { lang: 'ar' }] */
export function localeParams() {
  return locales.map((lang) => ({ lang }));
}

/** Build hreflang alternates object for metadata */
export function hreflangAlternates(path: string) {
  return {
    ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
    'x-default': `/en${path}`,
  };
}
