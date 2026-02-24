import type { Locale } from './i18n';
import type {
  Millet,
  Recipe,
  FAQItem,
  TimelineEvent,
  Myth,
  AyurvedaPageData,
  RegionalTradition,
  GlobalMilletRegion,
  FermentedProduct,
  BuyingGuideItem,
  MealPlan,
  SubstitutionEntry,
  AncientReference,
  SearchableItem,
} from './types';

// English data
import { millets as enMillets, getMilletBySlug as enGetMilletBySlug } from '@/data/millets';
import { recipes as enRecipes, getRecipeBySlug as enGetRecipeBySlug, getRecipesByMillet as enGetRecipesByMillet } from '@/data/recipes';
import { sources as enSources } from '@/data/sources';
import { faqItems as enFaqItems } from '@/data/faq';
import { timelineEvents as enTimelineEvents } from '@/data/history-timeline';
import { myths as enMyths } from '@/data/myths';
import { ayurvedaPageData as enAyurvedaData } from '@/data/ayurveda';
import { regionalTraditions as enRegionalTraditions, getRegionalTraditionBySlug as enGetRegionalTraditionBySlug } from '@/data/regional-traditions';
import { globalMilletRegions as enGlobalMilletRegions, getGlobalMilletRegionBySlug as enGetGlobalMilletRegionBySlug } from '@/data/global-millets';
import { fermentedProducts as enFermentedProducts } from '@/data/fermentation';
import { buyingGuideItems as enBuyingGuideItems } from '@/data/buying-guide';
import { mealPlans as enMealPlans, getMealPlanBySlug as enGetMealPlanBySlug } from '@/data/meal-plans';
import { substitutionEntries as enSubstitutionEntries } from '@/data/substitution-data';
import { ancientReferences as enAncientReferences } from '@/data/ancient-references';
import { searchIndex as enSearchIndex } from '@/data/search-index';
import { riceNutrition, wheatNutrition, dailyValues } from '@/data/nutrition';

// Telugu data
import { millets as teMillets, getMilletBySlug as teGetMilletBySlug } from '@/data/te/millets';
import { recipes as teRecipes } from '@/data/te/recipes';
import { faqItems as teFaqItems } from '@/data/te/faq';
import { timelineEvents as teTimelineEvents } from '@/data/te/history-timeline';
import { myths as teMyths } from '@/data/te/myths';
import { ayurvedaPageData as teAyurvedaData } from '@/data/te/ayurveda';
import { regionalTraditions as teRegionalTraditions, getRegionalTraditionBySlug as teGetRegionalTraditionBySlug } from '@/data/te/regional-traditions';
import { globalMilletRegions as teGlobalMilletRegions, getGlobalMilletRegionBySlug as teGetGlobalMilletRegionBySlug } from '@/data/te/global-millets';
import { fermentedProducts as teFermentedProducts } from '@/data/te/fermentation';
import { buyingGuideItems as teBuyingGuideItems } from '@/data/te/buying-guide';
import { mealPlans as teMealPlans, getMealPlanBySlug as teGetMealPlanBySlug } from '@/data/te/meal-plans';
import { substitutionEntries as teSubstitutionEntries } from '@/data/te/substitution-data';
import { ancientReferences as teAncientReferences } from '@/data/te/ancient-references';
import { searchIndex as teSearchIndex } from '@/data/te/search-index';

// Arabic data
import { millets as arMillets, getMilletBySlug as arGetMilletBySlug } from '@/data/ar/millets';
import { recipes as arRecipes } from '@/data/ar/recipes';
import { faqItems as arFaqItems } from '@/data/ar/faq';
import { timelineEvents as arTimelineEvents } from '@/data/ar/history-timeline';
import { myths as arMyths } from '@/data/ar/myths';
import { ayurvedaPageData as arAyurvedaData } from '@/data/ar/ayurveda';
import { regionalTraditions as arRegionalTraditions, getRegionalTraditionBySlug as arGetRegionalTraditionBySlug } from '@/data/ar/regional-traditions';
import { globalMilletRegions as arGlobalMilletRegions, getGlobalMilletRegionBySlug as arGetGlobalMilletRegionBySlug } from '@/data/ar/global-millets';
import { fermentedProducts as arFermentedProducts } from '@/data/ar/fermentation';
import { buyingGuideItems as arBuyingGuideItems } from '@/data/ar/buying-guide';
import { mealPlans as arMealPlans, getMealPlanBySlug as arGetMealPlanBySlug } from '@/data/ar/meal-plans';
import { substitutionEntries as arSubstitutionEntries } from '@/data/ar/substitution-data';
import { ancientReferences as arAncientReferences } from '@/data/ar/ancient-references';
import { searchIndex as arSearchIndex } from '@/data/ar/search-index';

// French data
import { millets as frMillets, getMilletBySlug as frGetMilletBySlug } from '@/data/fr/millets';
import { recipes as frRecipes } from '@/data/fr/recipes';
import { faqItems as frFaqItems } from '@/data/fr/faq';
import { timelineEvents as frTimelineEvents } from '@/data/fr/history-timeline';
import { myths as frMyths } from '@/data/fr/myths';
import { ayurvedaPageData as frAyurvedaData } from '@/data/fr/ayurveda';
import { regionalTraditions as frRegionalTraditions, getRegionalTraditionBySlug as frGetRegionalTraditionBySlug } from '@/data/fr/regional-traditions';
import { globalMilletRegions as frGlobalMilletRegions, getGlobalMilletRegionBySlug as frGetGlobalMilletRegionBySlug } from '@/data/fr/global-millets';
import { fermentedProducts as frFermentedProducts } from '@/data/fr/fermentation';
import { buyingGuideItems as frBuyingGuideItems } from '@/data/fr/buying-guide';
import { mealPlans as frMealPlans, getMealPlanBySlug as frGetMealPlanBySlug } from '@/data/fr/meal-plans';
import { substitutionEntries as frSubstitutionEntries } from '@/data/fr/substitution-data';
import { ancientReferences as frAncientReferences } from '@/data/fr/ancient-references';
import { searchIndex as frSearchIndex } from '@/data/fr/search-index';

// Locale-aware getters
export function getMillets(locale: Locale): Millet[] {
  switch (locale) {
    case 'te': return teMillets;
    case 'ar': return arMillets;
    case 'fr': return frMillets;
    default: return enMillets;
  }
}

export function getMilletBySlugLocale(slug: string, locale: Locale): Millet | undefined {
  switch (locale) {
    case 'te': return teGetMilletBySlug(slug);
    case 'ar': return arGetMilletBySlug(slug);
    case 'fr': return frGetMilletBySlug(slug);
    default: return enGetMilletBySlug(slug);
  }
}

export function getRecipes(locale: Locale): Recipe[] {
  switch (locale) {
    case 'te': return teRecipes;
    case 'ar': return arRecipes;
    case 'fr': return frRecipes;
    default: return enRecipes;
  }
}

export function getRecipeBySlugLocale(slug: string, locale: Locale): Recipe | undefined {
  const recipes = getRecipes(locale);
  return recipes.find(r => r.slug === slug);
}

export function getRecipesByMilletLocale(milletSlug: string, locale: Locale): Recipe[] {
  const recipes = getRecipes(locale);
  return recipes.filter(r => r.millets.includes(milletSlug));
}

export function getSources(locale: Locale) {
  // Sources are academic references, same for all locales
  return enSources;
}

export function getFaqItems(locale: Locale): FAQItem[] {
  switch (locale) {
    case 'te': return teFaqItems;
    case 'ar': return arFaqItems;
    case 'fr': return frFaqItems;
    default: return enFaqItems;
  }
}

export function getTimelineEvents(locale: Locale): TimelineEvent[] {
  switch (locale) {
    case 'te': return teTimelineEvents;
    case 'ar': return arTimelineEvents;
    case 'fr': return frTimelineEvents;
    default: return enTimelineEvents;
  }
}

export function getMyths(locale: Locale): Myth[] {
  switch (locale) {
    case 'te': return teMyths;
    case 'ar': return arMyths;
    case 'fr': return frMyths;
    default: return enMyths;
  }
}

export function getAyurvedaData(locale: Locale): AyurvedaPageData {
  switch (locale) {
    case 'te': return teAyurvedaData;
    case 'ar': return arAyurvedaData;
    case 'fr': return frAyurvedaData;
    default: return enAyurvedaData;
  }
}

export function getRegionalTraditions(locale: Locale): RegionalTradition[] {
  switch (locale) {
    case 'te': return teRegionalTraditions;
    case 'ar': return arRegionalTraditions;
    case 'fr': return frRegionalTraditions;
    default: return enRegionalTraditions;
  }
}

export function getRegionalTraditionBySlugLocale(slug: string, locale: Locale): RegionalTradition | undefined {
  switch (locale) {
    case 'te': return teGetRegionalTraditionBySlug(slug);
    case 'ar': return arGetRegionalTraditionBySlug(slug);
    case 'fr': return frGetRegionalTraditionBySlug(slug);
    default: return enGetRegionalTraditionBySlug(slug);
  }
}

export function getGlobalMilletRegions(locale: Locale): GlobalMilletRegion[] {
  switch (locale) {
    case 'te': return teGlobalMilletRegions;
    case 'ar': return arGlobalMilletRegions;
    case 'fr': return frGlobalMilletRegions;
    default: return enGlobalMilletRegions;
  }
}

export function getGlobalMilletRegionBySlugLocale(slug: string, locale: Locale): GlobalMilletRegion | undefined {
  switch (locale) {
    case 'te': return teGetGlobalMilletRegionBySlug(slug);
    case 'ar': return arGetGlobalMilletRegionBySlug(slug);
    case 'fr': return frGetGlobalMilletRegionBySlug(slug);
    default: return enGetGlobalMilletRegionBySlug(slug);
  }
}

export function getFermentedProducts(locale: Locale): FermentedProduct[] {
  switch (locale) {
    case 'te': return teFermentedProducts;
    case 'ar': return arFermentedProducts;
    case 'fr': return frFermentedProducts;
    default: return enFermentedProducts;
  }
}

export function getBuyingGuideItems(locale: Locale): BuyingGuideItem[] {
  switch (locale) {
    case 'te': return teBuyingGuideItems;
    case 'ar': return arBuyingGuideItems;
    case 'fr': return frBuyingGuideItems;
    default: return enBuyingGuideItems;
  }
}

export function getMealPlans(locale: Locale): MealPlan[] {
  switch (locale) {
    case 'te': return teMealPlans;
    case 'ar': return arMealPlans;
    case 'fr': return frMealPlans;
    default: return enMealPlans;
  }
}

export function getMealPlanBySlugLocale(slug: string, locale: Locale): MealPlan | undefined {
  switch (locale) {
    case 'te': return teGetMealPlanBySlug(slug);
    case 'ar': return arGetMealPlanBySlug(slug);
    case 'fr': return frGetMealPlanBySlug(slug);
    default: return enGetMealPlanBySlug(slug);
  }
}

export function getSubstitutionEntries(locale: Locale): SubstitutionEntry[] {
  switch (locale) {
    case 'te': return teSubstitutionEntries;
    case 'ar': return arSubstitutionEntries;
    case 'fr': return frSubstitutionEntries;
    default: return enSubstitutionEntries;
  }
}

export function getAncientReferences(locale: Locale): AncientReference[] {
  switch (locale) {
    case 'te': return teAncientReferences;
    case 'ar': return arAncientReferences;
    case 'fr': return frAncientReferences;
    default: return enAncientReferences;
  }
}

export function getSearchIndex(locale: Locale): SearchableItem[] {
  switch (locale) {
    case 'te': return teSearchIndex;
    case 'ar': return arSearchIndex;
    case 'fr': return frSearchIndex;
    default: return enSearchIndex;
  }
}

// Nutrition data is the same for all locales (numeric only)
export { riceNutrition, wheatNutrition, dailyValues };
