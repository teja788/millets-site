'use client';

import { Suspense, useState, useMemo, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Fuse from 'fuse.js';
import { Search, Wheat, UtensilsCrossed, HelpCircle, FileText, ArrowRight, Wrench, MapPin, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { searchIndex } from '@/data/search-index';
import type { SearchableItem } from '@/lib/types';

const fuse = new Fuse(searchIndex, {
  keys: ['title', 'description', 'tags'],
  threshold: 0.3,
  includeScore: true,
});

const typeConfig: Record<SearchableItem['type'], { label: string; icon: React.ReactNode; color: string }> = {
  millet: {
    label: 'Millet',
    icon: <Wheat className="w-3.5 h-3.5" />,
    color: 'bg-forest-100 text-forest-700 dark:bg-forest-900/40 dark:text-forest-300',
  },
  recipe: {
    label: 'Recipe',
    icon: <UtensilsCrossed className="w-3.5 h-3.5" />,
    color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  },
  faq: {
    label: 'FAQ',
    icon: <HelpCircle className="w-3.5 h-3.5" />,
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  },
  page: {
    label: 'Page',
    icon: <FileText className="w-3.5 h-3.5" />,
    color: 'bg-earth-100 text-earth-700 dark:bg-earth-800 dark:text-earth-300',
  },
  tool: {
    label: 'Tool',
    icon: <Wrench className="w-3.5 h-3.5" />,
    color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  },
  tradition: {
    label: 'Tradition',
    icon: <MapPin className="w-3.5 h-3.5" />,
    color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  },
  region: {
    label: 'Region',
    icon: <Globe className="w-3.5 h-3.5" />,
    color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  },
};

const groupOrder: SearchableItem['type'][] = ['millet', 'recipe', 'tradition', 'region', 'faq', 'tool', 'page'];
const groupLabels: Record<SearchableItem['type'], string> = {
  millet: 'Millets',
  recipe: 'Recipes',
  faq: 'Frequently Asked Questions',
  page: 'Pages',
  tool: 'Tools',
  tradition: 'Regional Traditions',
  region: 'Global Regions',
};

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query.trim());
  }, [query]);

  const groupedResults = useMemo(() => {
    const groups: Partial<Record<SearchableItem['type'], typeof results>> = {};
    for (const result of results) {
      const type = result.item.type;
      if (!groups[type]) groups[type] = [];
      groups[type]!.push(result);
    }
    return groups;
  }, [results]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const trimmed = query.trim();
      if (trimmed) {
        router.push(`/search?q=${encodeURIComponent(trimmed)}`);
      }
    },
    [query, router],
  );

  return (
    <>
      <Breadcrumb />
      <div className="content-wrapper section-padding">
        {/* Search input */}
        <div className="max-w-2xl mx-auto mb-10">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-earth-800 dark:text-earth-100 mb-6 text-center">
            Search
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400 dark:text-earth-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search millets, recipes, FAQ..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-earth-200 dark:border-earth-700 bg-white dark:bg-earth-800 text-earth-800 dark:text-earth-100 placeholder:text-earth-400 dark:placeholder:text-earth-400 focus:outline-none focus:ring-2 focus:ring-forest-500/50 focus:border-forest-500 transition-all text-base"
                autoFocus
              />
            </div>
          </form>
          {query.trim() && (
            <p className="text-sm text-earth-500 dark:text-earth-400 mt-3 text-center">
              {results.length} {results.length === 1 ? 'result' : 'results'} for &ldquo;{query.trim()}&rdquo;
            </p>
          )}
        </div>

        {/* Results */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {query.trim() && results.length > 0 && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-10"
              >
                {groupOrder.map((type) => {
                  const group = groupedResults[type];
                  if (!group || group.length === 0) return null;
                  return (
                    <section key={type}>
                      <h2 className="font-heading text-lg font-bold text-earth-700 dark:text-earth-200 mb-4 flex items-center gap-2">
                        {typeConfig[type].icon}
                        {groupLabels[type]}
                        <span className="text-sm font-normal text-earth-400 dark:text-earth-400">
                          ({group.length})
                        </span>
                      </h2>
                      <div className="space-y-3">
                        {group.map((result) => (
                          <Link
                            key={result.item.id}
                            href={result.item.url}
                            className="block group rounded-xl border border-earth-200 dark:border-earth-700 bg-white dark:bg-earth-800 p-4 hover:shadow-md hover:border-forest-300 dark:hover:border-forest-600 transition-all"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1.5">
                                  <span
                                    className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${typeConfig[result.item.type].color}`}
                                  >
                                    {typeConfig[result.item.type].icon}
                                    {typeConfig[result.item.type].label}
                                  </span>
                                </div>
                                <h3 className="font-heading font-semibold text-earth-800 dark:text-earth-100 group-hover:text-forest-700 dark:group-hover:text-forest-400 transition-colors mb-1">
                                  {result.item.title}
                                </h3>
                                <p className="text-sm text-earth-500 dark:text-earth-400 line-clamp-2">
                                  {result.item.description}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-earth-300 dark:text-earth-600 group-hover:text-forest-500 dark:group-hover:text-forest-400 transition-colors flex-shrink-0 mt-1" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </motion.div>
            )}

            {query.trim() && results.length === 0 && (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="text-center py-12"
              >
                <Search className="w-12 h-12 text-earth-300 dark:text-earth-600 mx-auto mb-4" />
                <h2 className="font-heading text-xl font-bold text-earth-700 dark:text-earth-200 mb-2">
                  No results found
                </h2>
                <p className="text-earth-500 dark:text-earth-400 mb-6 max-w-md mx-auto">
                  We couldn&apos;t find anything matching &ldquo;{query.trim()}&rdquo;. Try different keywords or browse our suggestions below.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {['Ragi', 'Jowar', 'Bajra', 'Gluten free', 'Breakfast', 'Calcium', 'Ayurveda'].map(
                    (suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setQuery(suggestion)}
                        className="px-4 py-2 rounded-full text-sm font-medium border border-earth-200 dark:border-earth-700 text-earth-600 dark:text-earth-300 hover:bg-forest-50 hover:border-forest-300 hover:text-forest-700 dark:hover:bg-forest-900/30 dark:hover:border-forest-600 dark:hover:text-forest-300 transition-all"
                      >
                        {suggestion}
                      </button>
                    ),
                  )}
                </div>
              </motion.div>
            )}

            {!query.trim() && (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="text-center py-12"
              >
                <Search className="w-12 h-12 text-earth-300 dark:text-earth-600 mx-auto mb-4" />
                <h2 className="font-heading text-xl font-bold text-earth-700 dark:text-earth-200 mb-2">
                  What are you looking for?
                </h2>
                <p className="text-earth-500 dark:text-earth-400 mb-6 max-w-md mx-auto">
                  Search across all millets, recipes, FAQ, and pages. Try typing a millet name, health topic, or recipe.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {['Finger Millet', 'Protein', 'Biryani', 'Diabetes', 'Cooking Guide', 'Foxtail'].map(
                    (suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setQuery(suggestion)}
                        className="px-4 py-2 rounded-full text-sm font-medium border border-earth-200 dark:border-earth-700 text-earth-600 dark:text-earth-300 hover:bg-forest-50 hover:border-forest-300 hover:text-forest-700 dark:hover:bg-forest-900/30 dark:hover:border-forest-600 dark:hover:text-forest-300 transition-all"
                      >
                        {suggestion}
                      </button>
                    ),
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-700 pt-6 mt-10">
          <p className="text-xs text-earth-400 leading-relaxed max-w-3xl">
            <strong>Disclaimer:</strong> This content is created with the
            assistance of AI and is intended for educational purposes only. While
            we strive for accuracy, information may contain errors or be
            incomplete. Always do your own research and consult qualified
            professionals (nutritionists, doctors, agricultural experts) before
            making decisions based on this content. This website does not provide
            medical, nutritional, or agricultural advice.
          </p>
        </div>
      </div>
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="content-wrapper section-padding text-center">
          <div className="animate-pulse">
            <div className="h-10 bg-earth-200 dark:bg-earth-700 rounded-xl max-w-md mx-auto mb-6" />
            <div className="h-12 bg-earth-200 dark:bg-earth-700 rounded-xl max-w-2xl mx-auto" />
          </div>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
