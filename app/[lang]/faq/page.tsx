import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, isValidLocale, locales } from '@/lib/i18n';
import { getFaqItems } from '@/lib/i18n-data';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Accordion from '@/components/ui/Accordion';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const t = getTranslations(lang);

  return {
    title: `${t.faqPage.title} | ${t.site.siteName}`,
    description:
      lang === 'te'
        ? 'చిరుధాన్యాల గురించి తరచుగా అడిగే ప్రశ్నలకు సమాధానాలు: పోషణ, వంట, ఆరోగ్య ప్రయోజనాలు, ఆయుర్వేద గుణాలు మరియు మరిన్ని.'
        : 'Find answers to common questions about millets: nutrition, cooking, health benefits, Ayurvedic properties, and more.',
    alternates: {
      canonical: `/${lang}/faq`,
      languages: Object.fromEntries(
        locales.map((l) => [l, localePath(l, '/faq')])
      ),
    },
  };
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'te' }];
}

const categoryOrder = ['General', 'Nutrition', 'Cooking', 'Health', 'Ayurveda'];

export default async function FAQPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale: Locale = lang;
  const t = getTranslations(locale);
  const faqItems = getFaqItems(locale);

  // Map English category names to translation keys
  const categoryKeyMap: Record<string, keyof typeof t.faqPage.categories> = {
    General: 'general',
    Nutrition: 'nutrition',
    Cooking: 'cooking',
    Health: 'health',
    Ayurveda: 'ayurveda',
  };

  // Group FAQ items by category
  const groupedFAQs = categoryOrder
    .map((category) => ({
      category,
      translatedCategory: categoryKeyMap[category]
        ? t.faqPage.categories[categoryKeyMap[category]]
        : category,
      items: faqItems.filter((item) => item.category === category),
    }))
    .filter((group) => group.items.length > 0);

  // Build JSON-LD structured data for FAQPage schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <main>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
          {t.faqPage.title}
        </h1>
        <p className="text-lg text-earth-700 dark:text-earth-300 max-w-3xl mb-10 leading-relaxed">
          {locale === 'te'
            ? 'చిరుధాన్యాల గురించి అత్యంత సాధారణ ప్రశ్నలకు సమాధానాలు -- పోషణ మరియు వంట నుండి ఆరోగ్య ప్రయోజనాలు మరియు ఆయుర్వేద దృక్పథాల వరకు.'
            : 'Answers to the most common questions about millets -- from nutrition and cooking to health benefits and Ayurvedic perspectives.'}
        </p>

        {/* FAQ Groups */}
        <div className="space-y-10 max-w-3xl">
          {groupedFAQs.map((group) => (
            <section key={group.category}>
              <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
                {group.translatedCategory}
              </h2>
              <Accordion
                items={group.items.map((item) => ({
                  title: item.question,
                  content: (
                    <p className="text-earth-800 dark:text-earth-200 leading-relaxed">{item.answer}</p>
                  ),
                }))}
                allowMultiple
              />
            </section>
          ))}
        </div>

        {/* Explore More */}
        <div className="mt-14 bg-forest-50 dark:bg-earth-800 rounded-xl p-8 max-w-3xl">
          <h2 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100 mb-3">
            {locale === 'te'
              ? 'ఇంకా ప్రశ్నలు ఉన్నాయా? మా వివరణాత్మక గైడ్‌లను అన్వేషించండి:'
              : 'Still have questions? Explore our detailed guides:'}
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href={localePath(locale, '/cooking-guide')}
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-earth-500 text-white font-medium hover:bg-earth-600 transition"
            >
              {t.nav.cookingGuide}
            </Link>
            <Link
              href={localePath(locale, '/nutrition')}
              className="inline-flex items-center px-5 py-2.5 rounded-lg border-2 border-earth-500 text-earth-600 dark:text-earth-400 font-medium hover:bg-earth-500 hover:text-white transition"
            >
              {t.nav.nutrition}
            </Link>
            <Link
              href={localePath(locale, '/ayurveda')}
              className="inline-flex items-center px-5 py-2.5 rounded-lg border-2 border-earth-500 text-earth-600 dark:text-earth-400 font-medium hover:bg-earth-500 hover:text-white transition"
            >
              {t.nav.ayurveda}
            </Link>
          </div>
        </div>
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
