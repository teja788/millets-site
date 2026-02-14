import type { MetadataRoute } from 'next';
import { millets } from '@/data/millets';
import { recipes } from '@/data/recipes';
import { globalMilletRegions } from '@/data/global-millets';
import { regionalTraditions } from '@/data/regional-traditions';

const BASE_URL = 'https://simplymillets.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages = [
    '',
    '/about',
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
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic millet pages
  const milletPages = millets.map((millet) => ({
    url: `${BASE_URL}/millets/${millet.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Dynamic recipe pages
  const recipePages = recipes.map((recipe) => ({
    url: `${BASE_URL}/recipes/${recipe.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Dynamic global millets region pages
  const globalPages = globalMilletRegions.map((region) => ({
    url: `${BASE_URL}/global-millets/${region.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic regional traditions state pages
  const regionalPages = regionalTraditions.map((state) => ({
    url: `${BASE_URL}/regional-traditions/${state.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...milletPages,
    ...recipePages,
    ...globalPages,
    ...regionalPages,
  ];
}
