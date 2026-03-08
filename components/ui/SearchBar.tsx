'use client';

import { useState, useEffect, useRef, useMemo, useCallback, type KeyboardEvent } from 'react';
import { Search } from 'lucide-react';
import { useParams } from 'next/navigation';
import Fuse from 'fuse.js';
import Link from 'next/link';
import type { SearchableItem } from '@/lib/types';
import type { Locale } from '@/lib/i18n';
import { localePath, isValidLocale, getTranslations } from '@/lib/i18n';
import { getSearchIndexByLocale } from '@/lib/search-index-data';

interface SearchBarProps {
  className?: string;
}

const TYPE_ORDER: SearchableItem['type'][] = ['millet', 'recipe', 'tradition', 'region', 'tool', 'page', 'faq'];

export default function SearchBar({ className = '' }: SearchBarProps) {
  const params = useParams();
  const locale: Locale = isValidLocale(params.lang as string) ? (params.lang as Locale) : 'en';
  const t = getTranslations(locale);
  const searchIndex = useMemo(() => getSearchIndexByLocale(locale), [locale]);

  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [hasFocus, setHasFocus] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const fuse = useMemo(
    () =>
      new Fuse(searchIndex, {
        keys: [
          { name: 'title', weight: 2 },
          { name: 'description', weight: 1 },
          { name: 'tags', weight: 1.5 },
        ],
        threshold: 0.3,
        includeScore: true,
      }),
    [searchIndex],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const results = useMemo(() => {
    if (debouncedQuery.trim().length === 0) return [];
    return fuse.search(debouncedQuery).map((r) => r.item);
  }, [debouncedQuery, fuse]);

  const isOpen = hasFocus && results.length > 0;

  const groupedResults = useMemo(() => {
    const groups: Partial<Record<SearchableItem['type'], SearchableItem[]>> = {};

    for (const result of results) {
      if (!groups[result.type]) {
        groups[result.type] = [];
      }
      groups[result.type]!.push(result);
    }

    return groups;
  }, [results]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setHasFocus(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getFirstResultUrl = useCallback((): string | null => {
    for (const type of TYPE_ORDER) {
      const group = groupedResults[type];
      if (group && group.length > 0) {
        return localePath(locale, group[0].url);
      }
    }
    return null;
  }, [groupedResults, locale]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setHasFocus(false);
      inputRef.current?.blur();
    } else if (e.key === 'Enter') {
      const firstUrl = getFirstResultUrl();
      if (firstUrl) {
        setHasFocus(false);
        window.location.href = firstUrl;
      }
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-earth-400 pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setHasFocus(true)}
          onKeyDown={handleKeyDown}
          placeholder={t.search.placeholder}
          aria-label={t.nav.search}
          className="
            w-full pl-10 pr-4 py-2.5
            bg-earth-50 dark:bg-earth-800 border border-earth-200 dark:border-earth-700 rounded-lg
            text-earth-800 dark:text-earth-100 placeholder:text-earth-400 dark:placeholder:text-earth-500
            focus:outline-none focus:ring-2 focus:ring-earth-500 focus:border-earth-500
            transition
          "
        />
      </div>

      {isOpen && (
        <div
          role="listbox"
          className="
            absolute top-full left-0 right-0
            mt-2 max-h-96 overflow-y-auto
            bg-cream dark:bg-earth-800 rounded-lg card-shadow
            border border-earth-200 dark:border-earth-700
            z-50
          "
        >
          {TYPE_ORDER.map((type) => {
            const items = groupedResults[type];
            if (!items || items.length === 0) return null;

            return (
              <div key={type}>
                <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-earth-500 dark:text-earth-400 bg-earth-50 dark:bg-earth-900">
                  {t.search.typeLabels[type]}
                </div>
                {items.map((item) => (
                  <Link
                    key={item.id}
                    href={localePath(locale, item.url)}
                    onClick={() => {
                      setHasFocus(false);
                      setQuery('');
                    }}
                    role="option"
                    className="
                      block px-4 py-3
                      hover:bg-earth-100 dark:hover:bg-earth-700 transition-colors
                      focus:bg-earth-100 dark:focus:bg-earth-700 focus:outline-none
                    "
                  >
                    <div className="text-sm font-medium text-earth-800 dark:text-earth-100">{item.title}</div>
                    <div className="text-xs text-earth-600 dark:text-earth-300 mt-0.5 line-clamp-1">
                      {item.description}
                    </div>
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
