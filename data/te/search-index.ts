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
    url: `/te/millets/${m.slug}`,
    tags: [m.commonName, m.scientificName, m.names.hindi, m.names.tamil, m.category],
  })),
  // Map recipes
  ...recipes.map(r => ({
    id: r.slug,
    title: r.title,
    description: r.description,
    type: 'recipe' as const,
    url: `/te/recipes/${r.slug}`,
    tags: [r.category, r.cuisine, r.difficulty, ...r.millets],
  })),
  // Map FAQ items
  ...faqItems.map(f => ({
    id: f.id,
    title: f.question,
    description: f.answer.substring(0, 200),
    type: 'faq' as const,
    url: `/te/faq#${f.id}`,
    tags: [f.category],
  })),
  // Map regional traditions
  ...regionalTraditions.map(t => ({
    id: `tradition-${t.slug}`,
    title: `${t.state} Millet Traditions`,
    description: t.description.substring(0, 200),
    type: 'tradition' as const,
    url: `/te/regional-traditions/${t.slug}`,
    tags: [t.state, t.region, ...t.primaryMillets],
  })),
  // Map global millet regions
  ...globalMilletRegions.map(r => ({
    id: `global-${r.slug}`,
    title: `Millets in ${r.region}`,
    description: r.description.substring(0, 200),
    type: 'region' as const,
    url: `/te/global-millets/${r.slug}`,
    tags: [r.region, ...r.countries],
  })),
  // Map myths
  ...myths.map(m => ({
    id: m.id,
    title: m.myth,
    description: m.fact.substring(0, 200),
    type: 'page' as const,
    url: `/te/myths#${m.id}`,
    tags: [m.category, 'myth', 'fact'],
  })),
  // Map fermented products
  ...fermentedProducts.map(f => ({
    id: `fermented-${f.name.toLowerCase().replace(/\s+/g, '-')}`,
    title: f.name,
    description: `${f.region} — ${f.culturalContext.substring(0, 150)}`,
    type: 'page' as const,
    url: '/te/fermentation',
    tags: ['fermentation', f.region, ...f.millets],
  })),
  // Map meal plans
  ...mealPlans.map(p => ({
    id: `plan-${p.slug}`,
    title: p.title,
    description: p.description.substring(0, 200),
    type: 'page' as const,
    url: '/te/meal-plans',
    tags: ['meal plan', p.goal],
  })),
  // Static pages
  { id: 'about', title: 'చిరుధాన్యాల గురించి', description: 'చిరుధాన్యాలు, వాటి వర్గీకరణ మరియు ఈ వెబ్‌సైట్ గురించి తెలుసుకోండి', type: 'page' as const, url: '/te/about', tags: ['about'] },
  { id: 'history', title: 'చిరుధాన్యాల చరిత్ర', description: 'క్రీ.పూ. 8000 నుండి నేటి వరకు చిరుధాన్యాల సాగు పురావస్తు కాలరేఖ', type: 'page' as const, url: '/te/history', tags: ['history', 'archaeology', 'timeline'] },
  { id: 'ayurveda', title: 'ఆయుర్వేదంలో చిరుధాన్యాలు', description: 'ఆయుర్వేద గుణాలు, దోష మార్గదర్శి మరియు ఋతువుల ఆధారిత సిఫార్సులు', type: 'page' as const, url: '/te/ayurveda', tags: ['ayurveda', 'dosha', 'traditional'] },
  { id: 'sustainability', title: 'చిరుధాన్యాలు & సుస్థిరత', description: 'నీటి సామర్థ్యం మరియు వాతావరణ దృఢత్వంతో సహా చిరుధాన్యాల పర్యావరణ ప్రయోజనాలు', type: 'page' as const, url: '/te/sustainability', tags: ['sustainability', 'climate', 'water'] },
  { id: 'cooking-guide', title: 'వంట మార్గదర్శి', description: 'చిరుధాన్యాలను ఎలా వండాలి, నానబెట్టాలి, నిల్వ చేయాలి మరియు ప్రత్యామ్నాయంగా వాడాలి', type: 'page' as const, url: '/te/cooking-guide', tags: ['cooking', 'guide', 'how to'] },
  { id: 'glossary', title: 'చిరుధాన్య పదకోశం', description: '12 భారతీయ భాషలలో చిరుధాన్యాల పేర్లు', type: 'page' as const, url: '/te/glossary', tags: ['glossary', 'languages', 'names'] },
  { id: 'nutrition', title: 'పోషకాహార పోలిక', description: 'అన్ని 9 చిరుధాన్యాల పోషక విలువలను బియ్యం మరియు గోధుమతో పోల్చండి', type: 'page' as const, url: '/te/nutrition', tags: ['nutrition', 'comparison', 'chart'] },
  // New static pages
  { id: 'regional-traditions', title: 'ప్రాంతీయ చిరుధాన్య సంప్రదాయాలు', description: 'వివిధ భారతీయ రాష్ట్రాలు చిరుధాన్యాలను తమ వంటలు మరియు సంస్కృతిలో ఎలా వాడుతాయో తెలుసుకోండి', type: 'page' as const, url: '/te/regional-traditions', tags: ['regional', 'traditions', 'cuisine', 'states'] },
  { id: 'global-millets', title: 'ప్రపంచంలో చిరుధాన్యాలు', description: 'వివిధ ఖండాలలో చిరుధాన్యాలను ఎలా పండిస్తారు మరియు తింటారో తెలుసుకోండి', type: 'page' as const, url: '/te/global-millets', tags: ['global', 'world', 'international'] },
  { id: 'fermentation', title: 'పులిసిన చిరుధాన్య ఆహారాలు', description: 'ప్రపంచవ్యాప్తంగా సంప్రదాయ పులిసిన చిరుధాన్య పానీయాలు మరియు ఆహారాలు', type: 'page' as const, url: '/te/fermentation', tags: ['fermentation', 'fermented', 'probiotic', 'traditional'] },
  { id: 'ancient-references', title: 'చిరుధాన్యాల పురాతన ప్రస్తావనలు', description: 'పురాతన గ్రంథాలలో చిరుధాన్యాల సాహిత్య మరియు పురావస్తు ఆధారాలు', type: 'page' as const, url: '/te/ancient-references', tags: ['ancient', 'texts', 'vedas', 'history', 'literature'] },
  { id: 'myths', title: 'చిరుధాన్యాల అపోహలు & నిజాలు', description: 'చిరుధాన్యాల గురించి సాధారణ అపోహలను ఆధారాలతో తొలగించడం', type: 'page' as const, url: '/te/myths', tags: ['myths', 'facts', 'misconceptions'] },
  { id: 'substitution-calculator', title: 'చిరుధాన్య ప్రత్యామ్నాయ కాలిక్యులేటర్', description: 'బియ్యం, గోధుమ మరియు ఇతర ధాన్యాలకు సరైన చిరుధాన్య ప్రత్యామ్నాయం కనుగొనండి', type: 'tool' as const, url: '/te/tools/substitution-calculator', tags: ['tool', 'substitution', 'calculator', 'replace'] },
  { id: 'cooking-timer', title: 'చిరుధాన్య వంట టైమర్', description: 'ప్రతి చిరుధాన్య రకానికి ప్రీసెట్లతో టైమర్ పరికరం', type: 'tool' as const, url: '/te/tools/cooking-timer', tags: ['tool', 'timer', 'cooking'] },
  { id: 'millet-quiz', title: 'చిరుధాన్య క్విజ్', description: 'మీ అభిరుచుల ఆధారంగా మీకు సరైన చిరుధాన్యాన్ని కనుగొనండి', type: 'tool' as const, url: '/te/tools/millet-quiz', tags: ['tool', 'quiz', 'recommendation'] },
  { id: 'meal-plans', title: 'చిరుధాన్య భోజన ప్రణాళికలు', description: 'వివిధ ఆరోగ్య లక్ష్యాలకు చిరుధాన్యాలతో వారపు భోజన ప్రణాళికలు', type: 'page' as const, url: '/te/meal-plans', tags: ['meal plan', 'weekly', 'diet'] },
  { id: 'buying-guide', title: 'చిరుధాన్య కొనుగోలు మార్గదర్శి', description: 'చిరుధాన్యాలను ఎలా ఎంచుకోవాలి, నిల్వ చేయాలి మరియు కొనాలి', type: 'page' as const, url: '/te/buying-guide', tags: ['buying', 'shopping', 'storage', 'guide'] },
];
