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
    url: `/ar/millets/${m.slug}`,
    tags: [m.commonName, m.scientificName, m.names.hindi, m.names.tamil, m.category],
  })),
  // Map recipes
  ...recipes.map(r => ({
    id: r.slug,
    title: r.title,
    description: r.description,
    type: 'recipe' as const,
    url: `/ar/recipes/${r.slug}`,
    tags: [r.category, r.cuisine, r.difficulty, ...r.millets],
  })),
  // Map FAQ items
  ...faqItems.map(f => ({
    id: f.id,
    title: f.question,
    description: f.answer.substring(0, 200),
    type: 'faq' as const,
    url: `/ar/faq#${f.id}`,
    tags: [f.category],
  })),
  // Map regional traditions
  ...regionalTraditions.map(t => ({
    id: `tradition-${t.slug}`,
    title: `${t.state} Millet Traditions`,
    description: t.description.substring(0, 200),
    type: 'tradition' as const,
    url: `/ar/regional-traditions/${t.slug}`,
    tags: [t.state, t.region, ...t.primaryMillets],
  })),
  // Map global millet regions
  ...globalMilletRegions.map(r => ({
    id: `global-${r.slug}`,
    title: `الدخن في ${r.region}`,
    description: r.description.substring(0, 200),
    type: 'region' as const,
    url: `/ar/global-millets/${r.slug}`,
    tags: [r.region, ...r.countries],
  })),
  // Map myths
  ...myths.map(m => ({
    id: m.id,
    title: m.myth,
    description: m.fact.substring(0, 200),
    type: 'page' as const,
    url: `/ar/myths#${m.id}`,
    tags: [m.category, 'myth', 'fact'],
  })),
  // Map fermented products
  ...fermentedProducts.map(f => ({
    id: `fermented-${f.name.toLowerCase().replace(/\s+/g, '-')}`,
    title: f.name,
    description: `${f.region} — ${f.culturalContext.substring(0, 150)}`,
    type: 'page' as const,
    url: '/ar/fermentation',
    tags: ['fermentation', f.region, ...f.millets],
  })),
  // Map meal plans
  ...mealPlans.map(p => ({
    id: `plan-${p.slug}`,
    title: p.title,
    description: p.description.substring(0, 200),
    type: 'page' as const,
    url: '/ar/meal-plans',
    tags: ['meal plan', p.goal],
  })),
  // Static pages with Arabic titles
  { id: 'millets', title: 'الدخن', description: 'استكشف جميع أنواع الدخن وفوائدها الغذائية', type: 'page' as const, url: '/ar/millets', tags: ['millets', 'الدخن'] },
  { id: 'recipes', title: 'وصفات الدخن', description: 'وصفات تقليدية وعصرية بالدخن من مختلف المطابخ', type: 'page' as const, url: '/ar/recipes', tags: ['recipes', 'وصفات'] },
  { id: 'history', title: 'تاريخ الدخن', description: 'الجدول الزمني الأثري لزراعة الدخن من 8000 قبل الميلاد إلى الحاضر', type: 'page' as const, url: '/ar/history', tags: ['history', 'تاريخ', 'archaeology'] },
  { id: 'ayurveda', title: 'الدخن في الأيورفيدا', description: 'الخصائص الأيورفيدية ودليل الدوشا والتوصيات الموسمية', type: 'page' as const, url: '/ar/ayurveda', tags: ['ayurveda', 'أيورفيدا', 'dosha'] },
  { id: 'sustainability', title: 'الدخن والاستدامة', description: 'الفوائد البيئية للدخن بما في ذلك كفاءة المياه والمرونة المناخية', type: 'page' as const, url: '/ar/sustainability', tags: ['sustainability', 'استدامة', 'climate'] },
  { id: 'cooking-guide', title: 'دليل الطهي', description: 'كيفية طهي الدخن ونقعه وتخزينه واستبداله', type: 'page' as const, url: '/ar/cooking-guide', tags: ['cooking', 'طهي', 'guide'] },
  { id: 'glossary', title: 'قاموس الدخن', description: 'أسماء الدخن بـ 12 لغة هندية', type: 'page' as const, url: '/ar/glossary', tags: ['glossary', 'قاموس', 'languages'] },
  { id: 'nutrition', title: 'مقارنة القيم الغذائية', description: 'قارن القيم الغذائية لجميع أنواع الدخن التسعة مع الأرز والقمح', type: 'page' as const, url: '/ar/nutrition', tags: ['nutrition', 'تغذية', 'comparison'] },
  { id: 'regional-traditions', title: 'تقاليد الدخن الإقليمية', description: 'استكشف كيف تستخدم الولايات الهندية المختلفة الدخن في مطبخها وثقافتها', type: 'page' as const, url: '/ar/regional-traditions', tags: ['regional', 'تقاليد', 'traditions'] },
  { id: 'global-millets', title: 'الدخن حول العالم', description: 'اكتشف كيف يُزرع الدخن ويُستهلك عبر القارات المختلفة', type: 'page' as const, url: '/ar/global-millets', tags: ['global', 'عالمي', 'international'] },
  { id: 'fermentation', title: 'أطعمة الدخن المخمرة', description: 'المشروبات والأطعمة التقليدية المخمرة من الدخن حول العالم', type: 'page' as const, url: '/ar/fermentation', tags: ['fermentation', 'تخمير', 'probiotic'] },
  { id: 'ancient-references', title: 'المراجع القديمة للدخن', description: 'الأدلة الأدبية والأثرية على الدخن في النصوص القديمة', type: 'page' as const, url: '/ar/ancient-references', tags: ['ancient', 'قديم', 'texts', 'vedas'] },
  { id: 'myths', title: 'خرافات وحقائق عن الدخن', description: 'المفاهيم الخاطئة الشائعة عن الدخن مدحوضة بالأدلة', type: 'page' as const, url: '/ar/myths', tags: ['myths', 'خرافات', 'facts'] },
  { id: 'faq', title: 'الأسئلة الشائعة', description: 'إجابات على الأسئلة المتكررة حول الدخن', type: 'page' as const, url: '/ar/faq', tags: ['faq', 'أسئلة'] },
  { id: 'buying-guide', title: 'دليل شراء الدخن', description: 'كيفية اختيار الدخن وتخزينه وشرائه', type: 'page' as const, url: '/ar/buying-guide', tags: ['buying', 'شراء', 'storage', 'guide'] },
  { id: 'meal-plans', title: 'خطط وجبات الدخن', description: 'خطط وجبات أسبوعية تتضمن الدخن لأهداف صحية مختلفة', type: 'page' as const, url: '/ar/meal-plans', tags: ['meal plan', 'خطة وجبات', 'weekly'] },
];
