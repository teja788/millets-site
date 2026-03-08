import type { Locale } from './i18n';
import type { SearchableItem } from './types';
import { searchIndex as enSearchIndex } from '@/data/search-index';
import { searchIndex as teSearchIndex } from '@/data/te/search-index';
import { searchIndex as arSearchIndex } from '@/data/ar/search-index';
import { searchIndex as frSearchIndex } from '@/data/fr/search-index';
import { searchIndex as deSearchIndex } from '@/data/de/search-index';
import { searchIndex as hiSearchIndex } from '@/data/hi/search-index';

const searchIndexByLocale: Record<Locale, SearchableItem[]> = {
  en: enSearchIndex,
  te: teSearchIndex,
  ar: arSearchIndex,
  fr: frSearchIndex,
  de: deSearchIndex,
  hi: hiSearchIndex,
};

export function getSearchIndexByLocale(locale: Locale): SearchableItem[] {
  return searchIndexByLocale[locale];
}

