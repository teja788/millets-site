import type { MetadataRoute } from 'next';
import { millets } from '@/data/millets';
import { recipes } from '@/data/recipes';
import { globalMilletRegions } from '@/data/global-millets';
import { regionalTraditions } from '@/data/regional-traditions';
import { locales } from '@/lib/i18n';
import { siteUrl } from '@/lib/site-url';

const BASE_URL = siteUrl;

/** Build hreflang alternates object for a given path */
function alternatesFor(path: string) {
  return {
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, `${BASE_URL}/${l}${path}`])),
      'x-default': `${BASE_URL}/en${path}`,
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
    '/search',
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
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: alternatesFor(route),
      });
    }
  }

  // French-only pages
  const frenchOnlyRoutes = ['/nutrition-et-sante', '/millet-vs-quinoa', '/culture-africaine-du-mil', '/ou-acheter-du-millet'];
  for (const route of frenchOnlyRoutes) {
    entries.push({
      url: `${BASE_URL}/fr${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  // German-only pages
  const germanOnlyRoutes = ['/ernaehrung-und-gesundheit', '/hirse-vs-quinoa', '/hirse-in-der-deutschen-kueche', '/wo-hirse-kaufen'];
  for (const route of germanOnlyRoutes) {
    entries.push({
      url: `${BASE_URL}/de${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  // Spanish-only pages
  const spanishOnlyRoutes = ['/nutricion-y-salud', '/mijo-vs-quinoa', '/mijo-en-la-cocina-hispanica', '/donde-comprar-mijo'];
  for (const route of spanishOnlyRoutes) {
    entries.push({
      url: `${BASE_URL}/es${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  // Dynamic millet pages (all locales)
  for (const millet of millets) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/millets/${millet.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
        alternates: alternatesFor(`/millets/${millet.slug}`),
      });
    }
  }

  // Dynamic recipe pages (all locales)
  for (const recipe of recipes) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/recipes/${recipe.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
        alternates: alternatesFor(`/recipes/${recipe.slug}`),
      });
    }
  }

  // Dynamic global millets region pages (all locales)
  for (const region of globalMilletRegions) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/global-millets/${region.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: alternatesFor(`/global-millets/${region.slug}`),
      });
    }
  }

  // Dynamic regional traditions state pages (all locales)
  for (const state of regionalTraditions) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/regional-traditions/${state.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: alternatesFor(`/regional-traditions/${state.slug}`),
      });
    }
  }

  return entries;
}
