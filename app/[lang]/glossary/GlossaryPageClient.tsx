'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import type { Millet, LanguageNames } from '@/lib/types';
import type { Locale } from '@/lib/i18n';
import { localePath } from '@/lib/i18n';
import type { TranslationKeys } from '@/lib/translations/en';

const languages: { key: keyof LanguageNames; label: string }[] = [
  { key: 'english', label: 'English' },
  { key: 'hindi', label: 'Hindi' },
  { key: 'tamil', label: 'Tamil' },
  { key: 'telugu', label: 'Telugu' },
  { key: 'kannada', label: 'Kannada' },
  { key: 'malayalam', label: 'Malayalam' },
  { key: 'marathi', label: 'Marathi' },
  { key: 'bengali', label: 'Bengali' },
  { key: 'gujarati', label: 'Gujarati' },
  { key: 'odia', label: 'Odia' },
  { key: 'punjabi', label: 'Punjabi' },
  { key: 'sanskrit', label: 'Sanskrit' },
];

export default function GlossaryPageClient({
  locale,
  t,
  millets,
}: {
  locale: Locale;
  t: TranslationKeys;
  millets: Millet[];
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMillets = useMemo(() => {
    if (!searchQuery.trim()) return millets;

    const query = searchQuery.toLowerCase();
    return millets.filter((millet) => {
      return languages.some((lang) =>
        millet.names[lang.key].toLowerCase().includes(query),
      );
    });
  }, [searchQuery, millets]);

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
          {t.glossaryPage.title}
        </h1>
        <p className="text-lg text-earth-700 dark:text-earth-300 max-w-3xl mb-8 leading-relaxed">
          {locale === 'te'
            ? 'ఏదైనా చిరుధాన్యానికి మీ స్థానిక పేరును కనుగొనండి. భారతదేశంలోని వివిధ భాషలలో చిరుధాన్యాలు వేర్వేరు పేర్లతో ప్రసిద్ధి చెందాయి. ఏదైనా భాష పేరుతో వెతకడానికి సెర్చ్ బాక్స్ వాడండి -- హిందీ, తమిళం, తెలుగు లేదా ఏ ఇతర భాషలోనైనా టైప్ చేయండి.'
            : 'Find your local name for any millet. Millets are known by different names across India\'s diverse languages. Use the search box to filter by any language name -- type in Hindi, Tamil, Telugu, or any other language to find the millet you are looking for.'}
        </p>

        {/* Search */}
        <div className="relative max-w-md mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
          <input
            type="text"
            placeholder={
              locale === 'te'
                ? 'ఏదైనా భాష పేరుతో వెతకండి...'
                : 'Search by any language name...'
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-earth-200 dark:border-earth-700 bg-cream dark:bg-earth-800 text-earth-800 dark:text-earth-200 placeholder:text-earth-400 focus:outline-none focus:ring-2 focus:ring-earth-500 focus:border-earth-500"
          />
        </div>

        {/* Results count */}
        <p className="text-sm text-warm-gray dark:text-earth-400 mb-4">
          {locale === 'te'
            ? `${millets.length} లో ${filteredMillets.length} చిరుధాన్యాలు చూపిస్తోంది`
            : `Showing ${filteredMillets.length} of ${millets.length} millets`}
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-earth-200 dark:border-earth-700">
          <table className="w-full border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-earth-200">
                {languages.map((lang) => (
                  <th
                    key={lang.key}
                    className="px-4 py-3 text-left text-xs font-semibold text-earth-800 dark:text-earth-100 uppercase tracking-wider whitespace-nowrap"
                  >
                    {lang.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredMillets.map((millet, index) => (
                <tr
                  key={millet.slug}
                  className={`border-b border-earth-200 dark:border-earth-700 hover:bg-earth-100/50 dark:hover:bg-earth-800/50 transition ${
                    index % 2 === 0 ? 'bg-white dark:bg-earth-800' : 'bg-earth-50 dark:bg-earth-800/30'
                  }`}
                >
                  {languages.map((lang) => (
                    <td
                      key={lang.key}
                      className={`px-4 py-3 text-sm ${
                        lang.key === 'sanskrit'
                          ? 'italic text-warm-gray dark:text-earth-400'
                          : 'text-earth-800 dark:text-earth-200'
                      }`}
                    >
                      {lang.key === 'english' ? (
                        <Link
                          href={localePath(locale, `/millets/${millet.slug}`)}
                          className="text-earth-800 dark:text-earth-200 hover:text-earth-600 dark:hover:text-earth-100 font-medium underline underline-offset-2 transition-colors"
                        >
                          {millet.names[lang.key]}
                        </Link>
                      ) : (
                        millet.names[lang.key]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredMillets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-warm-gray dark:text-earth-400 text-lg">
              {locale === 'te'
                ? `"${searchQuery}" కు సరిపోయే చిరుధాన్యాలు కనుగొనబడలేదు. వేరే పదం ట్రై చేయండి.`
                : `No millets found matching "${searchQuery}". Try a different search term.`}
            </p>
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6 mt-10">
          <p className="text-xs text-warm-gray dark:text-earth-400 leading-relaxed max-w-3xl">
            <strong>{t.common.disclaimer}:</strong> {t.common.disclaimerText}
          </p>
        </div>
      </div>
    </main>
  );
}
