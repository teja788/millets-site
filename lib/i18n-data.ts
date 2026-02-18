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

// Locale-aware getters
export function getMillets(locale: Locale): Millet[] {
  return locale === 'te' ? teMillets : enMillets;
}

export function getMilletBySlugLocale(slug: string, locale: Locale): Millet | undefined {
  return locale === 'te' ? teGetMilletBySlug(slug) : enGetMilletBySlug(slug);
}

export function getRecipes(locale: Locale): Recipe[] {
  return locale === 'te' ? teRecipes : enRecipes;
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
  // Sources are academic references, same for both locales
  return enSources;
}

export function getFaqItems(locale: Locale): FAQItem[] {
  return locale === 'te' ? teFaqItems : enFaqItems;
}

export function getTimelineEvents(locale: Locale): TimelineEvent[] {
  return locale === 'te' ? teTimelineEvents : enTimelineEvents;
}

export function getMyths(locale: Locale): Myth[] {
  return locale === 'te' ? teMyths : enMyths;
}

export function getAyurvedaData(locale: Locale): AyurvedaPageData {
  return locale === 'te' ? teAyurvedaData : enAyurvedaData;
}

export function getRegionalTraditions(locale: Locale): RegionalTradition[] {
  return locale === 'te' ? teRegionalTraditions : enRegionalTraditions;
}

export function getRegionalTraditionBySlugLocale(slug: string, locale: Locale): RegionalTradition | undefined {
  return locale === 'te' ? teGetRegionalTraditionBySlug(slug) : enGetRegionalTraditionBySlug(slug);
}

export function getGlobalMilletRegions(locale: Locale): GlobalMilletRegion[] {
  return locale === 'te' ? teGlobalMilletRegions : enGlobalMilletRegions;
}

export function getGlobalMilletRegionBySlugLocale(slug: string, locale: Locale): GlobalMilletRegion | undefined {
  return locale === 'te' ? teGetGlobalMilletRegionBySlug(slug) : enGetGlobalMilletRegionBySlug(slug);
}

export function getFermentedProducts(locale: Locale): FermentedProduct[] {
  return locale === 'te' ? teFermentedProducts : enFermentedProducts;
}

export function getBuyingGuideItems(locale: Locale): BuyingGuideItem[] {
  return locale === 'te' ? teBuyingGuideItems : enBuyingGuideItems;
}

export function getMealPlans(locale: Locale): MealPlan[] {
  return locale === 'te' ? teMealPlans : enMealPlans;
}

export function getMealPlanBySlugLocale(slug: string, locale: Locale): MealPlan | undefined {
  return locale === 'te' ? teGetMealPlanBySlug(slug) : enGetMealPlanBySlug(slug);
}

export function getSubstitutionEntries(locale: Locale): SubstitutionEntry[] {
  return locale === 'te' ? teSubstitutionEntries : enSubstitutionEntries;
}

export function getAncientReferences(locale: Locale): AncientReference[] {
  return locale === 'te' ? teAncientReferences : enAncientReferences;
}

export function getSearchIndex(locale: Locale): SearchableItem[] {
  return locale === 'te' ? teSearchIndex : enSearchIndex;
}

// Nutrition data is the same for both locales (numeric only)
export { riceNutrition, wheatNutrition, dailyValues };
