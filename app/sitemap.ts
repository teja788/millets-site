import type { MetadataRoute } from 'next';
import { millets } from '@/data/millets';
import { recipes } from '@/data/recipes';
import { globalMilletRegions } from '@/data/global-millets';
import { regionalTraditions } from '@/data/regional-traditions';
import { locales } from '@/lib/i18n';

const BASE_URL = 'https://simplymillets.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages (both locales, except /about which is en-only)
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
  ];

  for (const route of staticRoutes) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${BASE_URL}/en${route}`,
            te: `${BASE_URL}/te${route}`,
            'x-default': `${BASE_URL}/en${route}`,
          },
        },
      });
    }
  }

  // About page (English only)
  entries.push({
    url: `${BASE_URL}/en/about`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  });

  // Dynamic millet pages (both locales)
  for (const millet of millets) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/millets/${millet.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
        alternates: {
          languages: {
            en: `${BASE_URL}/en/millets/${millet.slug}`,
            te: `${BASE_URL}/te/millets/${millet.slug}`,
            'x-default': `${BASE_URL}/en/millets/${millet.slug}`,
          },
        },
      });
    }
  }

  // Dynamic recipe pages (both locales)
  for (const recipe of recipes) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/recipes/${recipe.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
        alternates: {
          languages: {
            en: `${BASE_URL}/en/recipes/${recipe.slug}`,
            te: `${BASE_URL}/te/recipes/${recipe.slug}`,
            'x-default': `${BASE_URL}/en/recipes/${recipe.slug}`,
          },
        },
      });
    }
  }

  // Dynamic global millets region pages (both locales)
  for (const region of globalMilletRegions) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/global-millets/${region.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            en: `${BASE_URL}/en/global-millets/${region.slug}`,
            te: `${BASE_URL}/te/global-millets/${region.slug}`,
            'x-default': `${BASE_URL}/en/global-millets/${region.slug}`,
          },
        },
      });
    }
  }

  // Dynamic regional traditions state pages (both locales)
  for (const state of regionalTraditions) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/regional-traditions/${state.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            en: `${BASE_URL}/en/regional-traditions/${state.slug}`,
            te: `${BASE_URL}/te/regional-traditions/${state.slug}`,
            'x-default': `${BASE_URL}/en/regional-traditions/${state.slug}`,
          },
        },
      });
    }
  }

  return entries;
}
