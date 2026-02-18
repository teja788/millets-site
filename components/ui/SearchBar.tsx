'use client';

import { useState, useEffect, useRef, useMemo, useCallback, type KeyboardEvent } from 'react';
import { Search } from 'lucide-react';
import { useParams } from 'next/navigation';
import Fuse from 'fuse.js';
import Link from 'next/link';
import type { SearchableItem } from '@/lib/types';
import type { Locale } from '@/lib/i18n';
import { localePath, isValidLocale } from '@/lib/i18n';
import { getSearchIndex } from '@/lib/i18n-data';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

const TYPE_LABELS: Record<SearchableItem['type'], string> = {
  millet: 'Millets',
  recipe: 'Recipes',
  faq: 'FAQ',
  page: 'Pages',
  tool: 'Tools',
  tradition: 'Traditions',
  region: 'Regions',
};

const TYPE_ORDER: SearchableItem['type'][] = ['millet', 'recipe', 'tradition', 'region', 'tool', 'page', 'faq'];

export default function SearchBar({
  placeholder = 'Search millets, recipes, and more...',
  className = '',
}: SearchBarProps) {
  const params = useParams();
  const locale: Locale = isValidLocale(params.lang as string) ? (params.lang as Locale) : 'en';
  const searchIndex = useMemo(() => getSearchIndex(locale), [locale]);

  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchableItem[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Build Fuse index on mount
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
    [searchIndex]
  );

  // Debounce the query input by 300ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // Perform search when debounced query changes
  useEffect(() => {
    if (debouncedQuery.trim().length === 0) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchResults = fuse.search(debouncedQuery).map((r) => r.item);
    setResults(searchResults);
    setIsOpen(searchResults.length > 0);
  }, [debouncedQuery, fuse]);

  // Group results by type
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

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get the first result URL for Enter key navigation
  const getFirstResultUrl = useCallback((): string | null => {
    for (const type of TYPE_ORDER) {
      const group = groupedResults[type];
      if (group && group.length > 0) {
        return localePath(locale, group[0].url);
      }
    }
    return null;
  }, [groupedResults]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    } else if (e.key === 'Enter') {
      const firstUrl = getFirstResultUrl();
      if (firstUrl) {
        setIsOpen(false);
        window.location.href = firstUrl;
      }
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Search input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-earth-400 pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (results.length > 0) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-label="Search"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          className="
            w-full pl-10 pr-4 py-2.5
            bg-earth-50 dark:bg-earth-800 border border-earth-200 dark:border-earth-700 rounded-lg
            text-earth-800 dark:text-earth-100 placeholder:text-earth-400 dark:placeholder:text-earth-500
            focus:outline-none focus:ring-2 focus:ring-earth-500 focus:border-earth-500
            transition
          "
        />
      </div>

      {/* Results dropdown */}
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
                  {TYPE_LABELS[type]}
                </div>
                {items.map((item) => (
                  <Link
                    key={item.id}
                    href={localePath(locale, item.url)}
                    onClick={() => {
                      setIsOpen(false);
                      setQuery('');
                    }}
                    role="option"
                    className="
                      block px-4 py-3
                      hover:bg-earth-100 dark:hover:bg-earth-700 transition-colors
                      focus:bg-earth-100 dark:focus:bg-earth-700 focus:outline-none
                    "
                  >
                    <div className="text-sm font-medium text-earth-800 dark:text-earth-100">
                      {item.title}
                    </div>
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
