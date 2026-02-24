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
    url: `/fr/millets/${m.slug}`,
    tags: [m.commonName, m.scientificName, m.category, 'millet', 'céréale'],
  })),
  // Map recipes
  ...recipes.map(r => ({
    id: r.slug,
    title: r.title,
    description: r.description,
    type: 'recipe' as const,
    url: `/fr/recipes/${r.slug}`,
    tags: [r.category, r.cuisine, r.difficulty, ...r.millets],
  })),
  // Map FAQ items
  ...faqItems.map(f => ({
    id: f.id,
    title: f.question,
    description: f.answer.substring(0, 200),
    type: 'faq' as const,
    url: `/fr/faq#${f.id}`,
    tags: [f.category],
  })),
  // Map regional traditions
  ...regionalTraditions.map(t => ({
    id: `tradition-${t.slug}`,
    title: `Traditions de ${t.state}`,
    description: t.description.substring(0, 200),
    type: 'tradition' as const,
    url: `/fr/regional-traditions/${t.slug}`,
    tags: [t.state, t.region, ...t.primaryMillets],
  })),
  // Map global millet regions
  ...globalMilletRegions.map(r => ({
    id: `global-${r.slug}`,
    title: `Les millets en ${r.region}`,
    description: r.description.substring(0, 200),
    type: 'region' as const,
    url: `/fr/global-millets/${r.slug}`,
    tags: [r.region, ...r.countries],
  })),
  // Map myths
  ...myths.map(m => ({
    id: m.id,
    title: m.myth,
    description: m.fact.substring(0, 200),
    type: 'page' as const,
    url: `/fr/myths#${m.id}`,
    tags: [m.category, 'mythe', 'réalité'],
  })),
  // Map fermented products
  ...fermentedProducts.map(f => ({
    id: `fermented-${f.name.toLowerCase().replace(/\s+/g, '-')}`,
    title: f.name,
    description: `${f.region} — ${f.culturalContext.substring(0, 150)}`,
    type: 'page' as const,
    url: '/fr/fermentation',
    tags: ['fermentation', f.region, ...f.millets],
  })),
  // Map meal plans
  ...mealPlans.map(p => ({
    id: `plan-${p.slug}`,
    title: p.title,
    description: p.description.substring(0, 200),
    type: 'page' as const,
    url: '/fr/meal-plans',
    tags: ['plan de repas', p.goal],
  })),
  // Static pages with French titles
  { id: 'millets', title: 'Les millets', description: 'Explorez tous les millets et leurs bienfaits nutritionnels', type: 'page' as const, url: '/fr/millets', tags: ['millets', 'céréales'] },
  { id: 'recipes', title: 'Recettes de millets', description: 'Recettes traditionnelles et modernes à base de millets', type: 'page' as const, url: '/fr/recipes', tags: ['recettes', 'cuisine'] },
  { id: 'history', title: 'Histoire des millets', description: 'Chronologie archéologique de la culture des millets, de 8000 av. J.-C. à nos jours', type: 'page' as const, url: '/fr/history', tags: ['histoire', 'archéologie'] },
  { id: 'ayurveda', title: 'Millets et nutrition traditionnelle', description: 'Propriétés nutritionnelles traditionnelles et recommandations saisonnières', type: 'page' as const, url: '/fr/ayurveda', tags: ['nutrition', 'santé', 'ayurveda'] },
  { id: 'sustainability', title: 'Durabilité et millets', description: 'Les avantages environnementaux des millets : efficacité hydrique et résilience climatique', type: 'page' as const, url: '/fr/sustainability', tags: ['durabilité', 'environnement', 'climat'] },
  { id: 'cooking-guide', title: 'Guide de cuisson', description: 'Comment cuire, tremper, conserver et substituer les millets', type: 'page' as const, url: '/fr/cooking-guide', tags: ['cuisson', 'guide', 'cuisine'] },
  { id: 'glossary', title: 'Glossaire des millets', description: 'Noms des millets dans différentes langues du monde', type: 'page' as const, url: '/fr/glossary', tags: ['glossaire', 'langues', 'noms'] },
  { id: 'nutrition', title: 'Comparaison nutritionnelle', description: 'Comparez les profils nutritionnels des 9 millets avec le riz et le blé', type: 'page' as const, url: '/fr/nutrition', tags: ['nutrition', 'comparaison'] },
  { id: 'regional-traditions', title: 'Traditions régionales des millets', description: 'Découvrez les traditions culinaires du mil au Sénégal, Mali, Burkina Faso, Niger, France et Québec', type: 'page' as const, url: '/fr/regional-traditions', tags: ['régional', 'traditions', 'Afrique', 'France'] },
  { id: 'global-millets', title: 'Les millets dans le monde', description: 'Découvrez comment les millets sont cultivés et consommés à travers les continents', type: 'page' as const, url: '/fr/global-millets', tags: ['mondial', 'international'] },
  { id: 'fermentation', title: 'Aliments fermentés à base de millets', description: 'Boissons et aliments fermentés traditionnels à base de millets dans le monde', type: 'page' as const, url: '/fr/fermentation', tags: ['fermentation', 'probiotique'] },
  { id: 'ancient-references', title: 'Références anciennes aux millets', description: 'Preuves littéraires et archéologiques des millets : Pline, Hérodote, Ibn Battûta, traditions orales africaines', type: 'page' as const, url: '/fr/ancient-references', tags: ['ancien', 'textes', 'histoire', 'archéologie'] },
  { id: 'myths', title: 'Mythes et réalités sur les millets', description: 'Les idées reçues sur les millets réfutées par la science', type: 'page' as const, url: '/fr/myths', tags: ['mythes', 'réalités'] },
  { id: 'faq', title: 'Questions fréquentes', description: 'Réponses aux questions courantes sur les millets', type: 'page' as const, url: '/fr/faq', tags: ['faq', 'questions'] },
  { id: 'buying-guide', title: 'Guide d\'achat des millets', description: 'Comment choisir, conserver et acheter des millets', type: 'page' as const, url: '/fr/buying-guide', tags: ['achat', 'conservation', 'guide'] },
  { id: 'meal-plans', title: 'Plans de repas à base de millets', description: 'Plans de repas hebdomadaires incluant des millets pour différents objectifs santé', type: 'page' as const, url: '/fr/meal-plans', tags: ['plan de repas', 'hebdomadaire'] },
  // French-only pages
  { id: 'nutrition-et-sante', title: 'Nutrition et santé des millets', description: 'Bienfaits nutritionnels des millets fondés sur la science : santé cardiovasculaire, gestion du diabète, richesse en minéraux', type: 'page' as const, url: '/fr/nutrition-et-sante', tags: ['nutrition', 'santé', 'science', 'ANSES'] },
  { id: 'millet-vs-quinoa', title: 'Millet vs Quinoa', description: 'Comparaison nutritionnelle, écologique, économique et culinaire entre les millets et le quinoa', type: 'page' as const, url: '/fr/millet-vs-quinoa', tags: ['quinoa', 'comparaison', 'environnement', 'prix'] },
  { id: 'culture-africaine-du-mil', title: 'Culture africaine du mil', description: 'Le mil en Afrique de l\'Ouest : traditions culinaires du Sahel, sécurité alimentaire, variétés régionales et importance économique', type: 'page' as const, url: '/fr/culture-africaine-du-mil', tags: ['Afrique', 'Sahel', 'culture', 'traditions', 'Sénégal', 'Mali'] },
  { id: 'ou-acheter-du-millet', title: 'Où acheter du millet', description: 'Guide complet pour acheter du millet en France (Biocoop, épiceries africaines) et au Canada (Bulk Barn, magasins bio)', type: 'page' as const, url: '/fr/ou-acheter-du-millet', tags: ['achat', 'France', 'Canada', 'magasin', 'bio', 'épicerie'] },
];
