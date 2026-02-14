import type { SearchableItem } from '@/lib/types';
import { millets } from './millets';
import { recipes } from './recipes';
import { faqItems } from './faq';
import { regionalTraditions } from './regional-traditions';
import { globalMilletRegions } from './global-millets';
import { myths } from './myths';
import { fermentedProducts } from './fermentation';
import { mealPlans } from './meal-plans';

export const searchIndex: SearchableItem[] = [
  // Map millets to searchable items
  ...millets.map(m => ({
    id: m.slug,
    title: m.name,
    description: `${m.commonName} - ${m.tagline}. ${m.scientificName}`,
    type: 'millet' as const,
    url: `/millets/${m.slug}`,
    tags: [m.commonName, m.scientificName, m.names.hindi, m.names.tamil, m.category],
  })),
  // Map recipes
  ...recipes.map(r => ({
    id: r.slug,
    title: r.title,
    description: r.description,
    type: 'recipe' as const,
    url: `/recipes/${r.slug}`,
    tags: [r.category, r.cuisine, r.difficulty, ...r.millets],
  })),
  // Map FAQ items
  ...faqItems.map(f => ({
    id: f.id,
    title: f.question,
    description: f.answer.substring(0, 200),
    type: 'faq' as const,
    url: `/faq#${f.id}`,
    tags: [f.category],
  })),
  // Map regional traditions
  ...regionalTraditions.map(t => ({
    id: `tradition-${t.slug}`,
    title: `${t.state} Millet Traditions`,
    description: t.description.substring(0, 200),
    type: 'tradition' as const,
    url: `/regional-traditions/${t.slug}`,
    tags: [t.state, t.region, ...t.primaryMillets],
  })),
  // Map global millet regions
  ...globalMilletRegions.map(r => ({
    id: `global-${r.slug}`,
    title: `Millets in ${r.region}`,
    description: r.description.substring(0, 200),
    type: 'region' as const,
    url: `/global-millets/${r.slug}`,
    tags: [r.region, ...r.countries],
  })),
  // Map myths
  ...myths.map(m => ({
    id: m.id,
    title: m.myth,
    description: m.fact.substring(0, 200),
    type: 'page' as const,
    url: `/myths#${m.id}`,
    tags: [m.category, 'myth', 'fact'],
  })),
  // Map fermented products
  ...fermentedProducts.map(f => ({
    id: `fermented-${f.name.toLowerCase().replace(/\s+/g, '-')}`,
    title: f.name,
    description: `${f.region} — ${f.culturalContext.substring(0, 150)}`,
    type: 'page' as const,
    url: '/fermentation',
    tags: ['fermentation', f.region, ...f.millets],
  })),
  // Map meal plans
  ...mealPlans.map(p => ({
    id: `plan-${p.slug}`,
    title: p.title,
    description: p.description.substring(0, 200),
    type: 'page' as const,
    url: '/meal-plans',
    tags: ['meal plan', p.goal],
  })),
  // Static pages
  { id: 'about', title: 'About Millets', description: 'Learn about millets, their classification, and this website', type: 'page' as const, url: '/about', tags: ['about'] },
  { id: 'history', title: 'History of Millets', description: 'Archaeological timeline of millet cultivation from 8000 BCE to present', type: 'page' as const, url: '/history', tags: ['history', 'archaeology', 'timeline'] },
  { id: 'ayurveda', title: 'Millets in Ayurveda', description: 'Ayurvedic properties, dosha guide, and seasonal recommendations', type: 'page' as const, url: '/ayurveda', tags: ['ayurveda', 'dosha', 'traditional'] },
  { id: 'sustainability', title: 'Millets & Sustainability', description: 'Environmental benefits of millets including water efficiency and climate resilience', type: 'page' as const, url: '/sustainability', tags: ['sustainability', 'climate', 'water'] },
  { id: 'cooking-guide', title: 'Cooking Guide', description: 'How to cook, soak, store, and substitute millets', type: 'page' as const, url: '/cooking-guide', tags: ['cooking', 'guide', 'how to'] },
  { id: 'glossary', title: 'Millet Glossary', description: 'Names of millets in 12 Indian languages', type: 'page' as const, url: '/glossary', tags: ['glossary', 'languages', 'names'] },
  { id: 'nutrition', title: 'Nutrition Comparison', description: 'Compare nutritional profiles of all 9 millets with rice and wheat', type: 'page' as const, url: '/nutrition', tags: ['nutrition', 'comparison', 'chart'] },
  // New static pages
  { id: 'regional-traditions', title: 'Regional Millet Traditions', description: 'Explore how different Indian states use millets in their cuisine and culture', type: 'page' as const, url: '/regional-traditions', tags: ['regional', 'traditions', 'cuisine', 'states'] },
  { id: 'global-millets', title: 'Millets Around the World', description: 'Discover how millets are grown and consumed across different continents', type: 'page' as const, url: '/global-millets', tags: ['global', 'world', 'international'] },
  { id: 'fermentation', title: 'Fermented Millet Foods', description: 'Traditional fermented millet beverages and foods from around the world', type: 'page' as const, url: '/fermentation', tags: ['fermentation', 'fermented', 'probiotic', 'traditional'] },
  { id: 'ancient-references', title: 'Ancient References to Millets', description: 'Literary and archaeological evidence of millets in ancient texts', type: 'page' as const, url: '/ancient-references', tags: ['ancient', 'texts', 'vedas', 'history', 'literature'] },
  { id: 'myths', title: 'Myths & Facts About Millets', description: 'Common misconceptions about millets debunked with evidence', type: 'page' as const, url: '/myths', tags: ['myths', 'facts', 'misconceptions'] },
  { id: 'substitution-calculator', title: 'Millet Substitution Calculator', description: 'Find the right millet substitute for rice, wheat, and other grains', type: 'tool' as const, url: '/tools/substitution-calculator', tags: ['tool', 'substitution', 'calculator', 'replace'] },
  { id: 'cooking-timer', title: 'Millet Cooking Timer', description: 'Timer tool with presets for each millet variety', type: 'tool' as const, url: '/tools/cooking-timer', tags: ['tool', 'timer', 'cooking'] },
  { id: 'millet-quiz', title: 'Millet Quiz', description: 'Find your ideal millet based on your preferences', type: 'tool' as const, url: '/tools/millet-quiz', tags: ['tool', 'quiz', 'recommendation'] },
  { id: 'meal-plans', title: 'Millet Meal Plans', description: 'Weekly meal plans featuring millets for different health goals', type: 'page' as const, url: '/meal-plans', tags: ['meal plan', 'weekly', 'diet'] },
  { id: 'buying-guide', title: 'Millet Buying Guide', description: 'How to select, store, and buy millets', type: 'page' as const, url: '/buying-guide', tags: ['buying', 'shopping', 'storage', 'guide'] },
];
