import { en } from './translations/en';
import { te } from './translations/te';

export const locales = ['en', 'te'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function isValidLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}

export function localePath(locale: Locale, path: string): string {
  return `/${locale}${path}`;
}

export function getTranslations(locale: Locale) {
  return locale === 'te' ? te : en;
}
