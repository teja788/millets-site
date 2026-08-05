import type { MetadataRoute } from 'next';
import { locales, type Locale } from '@/lib/i18n';
import {
  getGlobalMilletRegions,
  getMillets,
  getRecipes,
  getRegionalTraditions,
} from '@/lib/i18n-data';
import { siteUrl } from '@/lib/site-url';

const BASE_URL = siteUrl;

const TEMPORARILY_NOINDEXED_STATIC_ROUTES = new Set([
  '/cooking-guide',
  '/history',
  '/nutrition',
  '/sustainability',
]);
const MIXED_LANGUAGE_LOCALES = new Set<Locale>(['ar', 'hi', 'es']);

function alternatesFor(path: string, availableLocales: readonly Locale[]) {
  const defaultLocale = availableLocales.includes('en') ? 'en' : availableLocales[0];

  return {
    languages: {
      ...Object.fromEntries(
        availableLocales.map((locale) => [locale, `${BASE_URL}/${locale}${path}`]),
      ),
      ...(defaultLocale ? { 'x-default': `${BASE_URL}/${defaultLocale}${path}` } : {}),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages (all locales)
  const staticRoutes = [
    '',
    '/millets',
    '/recipes',
    '/nutrition',
    '/cooking-guide',
    '/history',
    '/ayurveda',
    '/faq',
    '/glossary',
    '/sustainability',
    '/fermentation',
    '/meal-plans',
    '/buying-guide',
    '/ancient-references',
    '/myths',
    '/global-millets',
    '/regional-traditions',
    '/tools/cooking-timer',
    '/tools/millet-quiz',
    '/tools/substitution-calculator',
    '/about',
    '/contact',
    '/privacy-policy',
    '/disclaimer',
  ];

  for (const route of staticRoutes) {
    const availableLocales =
      route === '/ayurveda'
        ? locales.filter((locale) => !['fr', 'de', 'es'].includes(locale))
        : TEMPORARILY_NOINDEXED_STATIC_ROUTES.has(route)
          ? locales.filter((locale) => !MIXED_LANGUAGE_LOCALES.has(locale))
        : locales;

    for (const locale of availableLocales) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        changeFrequency: 'monthly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: alternatesFor(route, availableLocales),
      });
    }
  }

  entries.push({
    url: `${BASE_URL}/en/open-millet-reference`,
    changeFrequency: 'monthly',
    priority: 0.9,
  });

  // French-only pages
  const frenchOnlyRoutes = ['/nutrition-et-sante', '/millet-vs-quinoa', '/culture-africaine-du-mil', '/ou-acheter-du-millet'];
  for (const route of frenchOnlyRoutes) {
    entries.push({
      url: `${BASE_URL}/fr${route}`,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  // German-only pages
  const germanOnlyRoutes = ['/ernaehrung-und-gesundheit', '/hirse-vs-quinoa', '/hirse-in-der-deutschen-kueche', '/wo-hirse-kaufen'];
  for (const route of germanOnlyRoutes) {
    entries.push({
      url: `${BASE_URL}/de${route}`,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  // Spanish-only pages
  const spanishOnlyRoutes = ['/nutricion-y-salud', '/mijo-vs-quinoa', '/mijo-en-la-cocina-hispanica', '/donde-comprar-mijo'];
  for (const route of spanishOnlyRoutes) {
    entries.push({
      url: `${BASE_URL}/es${route}`,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  const milletSlugsByLocale = Object.fromEntries(
    locales.map((locale) => [locale, new Set(getMillets(locale).map((millet) => millet.slug))]),
  ) as Record<Locale, Set<string>>;
  const allMilletSlugs = new Set(
    locales.flatMap((locale) => [...milletSlugsByLocale[locale]]),
  );

  for (const slug of allMilletSlugs) {
    const availableLocales = locales.filter((locale) =>
      milletSlugsByLocale[locale].has(slug),
    );

    for (const locale of availableLocales) {
      entries.push({
        url: `${BASE_URL}/${locale}/millets/${slug}`,
        changeFrequency: 'monthly',
        priority: 0.9,
        alternates: alternatesFor(`/millets/${slug}`, availableLocales),
      });
    }
  }

  const recipeSlugsByLocale = Object.fromEntries(
    locales.map((locale) => [locale, new Set(getRecipes(locale).map((recipe) => recipe.slug))]),
  ) as Record<Locale, Set<string>>;
  const allRecipeSlugs = new Set(
    locales.flatMap((locale) => [...recipeSlugsByLocale[locale]]),
  );

  for (const slug of allRecipeSlugs) {
    const availableLocales = locales.filter((locale) =>
      recipeSlugsByLocale[locale].has(slug),
    );

    for (const locale of availableLocales) {
      entries.push({
        url: `${BASE_URL}/${locale}/recipes/${slug}`,
        changeFrequency: 'monthly',
        priority: 0.9,
        alternates: alternatesFor(`/recipes/${slug}`, availableLocales),
      });
    }
  }

  const regionSlugsByLocale = Object.fromEntries(
    locales.map((locale) => [
      locale,
      new Set(getGlobalMilletRegions(locale).map((region) => region.slug)),
    ]),
  ) as Record<Locale, Set<string>>;
  const allRegionSlugs = new Set(
    locales.flatMap((locale) => [...regionSlugsByLocale[locale]]),
  );

  for (const slug of allRegionSlugs) {
    const availableLocales = locales.filter((locale) =>
      regionSlugsByLocale[locale].has(slug),
    );

    for (const locale of availableLocales) {
      entries.push({
        url: `${BASE_URL}/${locale}/global-millets/${slug}`,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: alternatesFor(`/global-millets/${slug}`, availableLocales),
      });
    }
  }

  const traditionSlugsByLocale = Object.fromEntries(
    locales.map((locale) => [
      locale,
      new Set(getRegionalTraditions(locale).map((tradition) => tradition.slug)),
    ]),
  ) as Record<Locale, Set<string>>;
  const allTraditionSlugs = new Set(
    locales.flatMap((locale) => [...traditionSlugsByLocale[locale]]),
  );

  for (const slug of allTraditionSlugs) {
    const availableLocales = locales.filter((locale) =>
      locale !== 'ar' && traditionSlugsByLocale[locale].has(slug),
    );

    for (const locale of availableLocales) {
      entries.push({
        url: `${BASE_URL}/${locale}/regional-traditions/${slug}`,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: alternatesFor(`/regional-traditions/${slug}`, availableLocales),
      });
    }
  }

  return entries;
}
