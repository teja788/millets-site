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
  Source,
} from './types';

/* ------------------------------------------------------------------ */
/*  Locale data module interface                                       */
/* ------------------------------------------------------------------ */

interface LocaleDataModule {
  millets: Millet[];
  getMilletBySlug: (slug: string) => Millet | undefined;
  recipes: Recipe[];
  faqItems: FAQItem[];
  timelineEvents: TimelineEvent[];
  myths: Myth[];
  ayurvedaPageData: AyurvedaPageData;
  regionalTraditions: RegionalTradition[];
  getRegionalTraditionBySlug: (slug: string) => RegionalTradition | undefined;
  globalMilletRegions: GlobalMilletRegion[];
  getGlobalMilletRegionBySlug: (slug: string) => GlobalMilletRegion | undefined;
  fermentedProducts: FermentedProduct[];
  buyingGuideItems: BuyingGuideItem[];
  mealPlans: MealPlan[];
  getMealPlanBySlug: (slug: string) => MealPlan | undefined;
  substitutionEntries: SubstitutionEntry[];
  ancientReferences: AncientReference[];
  searchIndex: SearchableItem[];
  sources: Source[];
}

/* ------------------------------------------------------------------ */
/*  English data                                                       */
/* ------------------------------------------------------------------ */

import { millets as enMillets, getMilletBySlug as enGetMilletBySlug } from '@/data/millets';
import { recipes as enRecipes } from '@/data/recipes';
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

/* ------------------------------------------------------------------ */
/*  Telugu data                                                        */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Arabic data                                                        */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  French data                                                        */
/* ------------------------------------------------------------------ */

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
import { sources as frSources } from '@/data/fr/sources';

/* ------------------------------------------------------------------ */
/*  German data                                                        */
/* ------------------------------------------------------------------ */

import { millets as deMillets, getMilletBySlug as deGetMilletBySlug } from '@/data/de/millets';
import { recipes as deRecipes } from '@/data/de/recipes';
import { faqItems as deFaqItems } from '@/data/de/faq';
import { timelineEvents as deTimelineEvents } from '@/data/de/history-timeline';
import { myths as deMyths } from '@/data/de/myths';
import { ayurvedaPageData as deAyurvedaData } from '@/data/de/ayurveda';
import { regionalTraditions as deRegionalTraditions, getRegionalTraditionBySlug as deGetRegionalTraditionBySlug } from '@/data/de/regional-traditions';
import { globalMilletRegions as deGlobalMilletRegions, getGlobalMilletRegionBySlug as deGetGlobalMilletRegionBySlug } from '@/data/de/global-millets';
import { fermentedProducts as deFermentedProducts } from '@/data/de/fermentation';
import { buyingGuideItems as deBuyingGuideItems } from '@/data/de/buying-guide';
import { mealPlans as deMealPlans, getMealPlanBySlug as deGetMealPlanBySlug } from '@/data/de/meal-plans';
import { substitutionEntries as deSubstitutionEntries } from '@/data/de/substitution-data';
import { ancientReferences as deAncientReferences } from '@/data/de/ancient-references';
import { searchIndex as deSearchIndex } from '@/data/de/search-index';
import { sources as deSources } from '@/data/de/sources';

/* ------------------------------------------------------------------ */
/*  Locale data registry                                               */
/*  To add a new locale: add 1 import block above + 1 entry below.    */
/* ------------------------------------------------------------------ */

const localeData: Record<Locale, LocaleDataModule> = {
  en: {
    millets: enMillets, getMilletBySlug: enGetMilletBySlug,
    recipes: enRecipes, faqItems: enFaqItems, timelineEvents: enTimelineEvents,
    myths: enMyths, ayurvedaPageData: enAyurvedaData,
    regionalTraditions: enRegionalTraditions, getRegionalTraditionBySlug: enGetRegionalTraditionBySlug,
    globalMilletRegions: enGlobalMilletRegions, getGlobalMilletRegionBySlug: enGetGlobalMilletRegionBySlug,
    fermentedProducts: enFermentedProducts, buyingGuideItems: enBuyingGuideItems,
    mealPlans: enMealPlans, getMealPlanBySlug: enGetMealPlanBySlug,
    substitutionEntries: enSubstitutionEntries, ancientReferences: enAncientReferences,
    searchIndex: enSearchIndex, sources: enSources,
  },
  te: {
    millets: teMillets, getMilletBySlug: teGetMilletBySlug,
    recipes: teRecipes, faqItems: teFaqItems, timelineEvents: teTimelineEvents,
    myths: teMyths, ayurvedaPageData: teAyurvedaData,
    regionalTraditions: teRegionalTraditions, getRegionalTraditionBySlug: teGetRegionalTraditionBySlug,
    globalMilletRegions: teGlobalMilletRegions, getGlobalMilletRegionBySlug: teGetGlobalMilletRegionBySlug,
    fermentedProducts: teFermentedProducts, buyingGuideItems: teBuyingGuideItems,
    mealPlans: teMealPlans, getMealPlanBySlug: teGetMealPlanBySlug,
    substitutionEntries: teSubstitutionEntries, ancientReferences: teAncientReferences,
    searchIndex: teSearchIndex, sources: enSources,
  },
  ar: {
    millets: arMillets, getMilletBySlug: arGetMilletBySlug,
    recipes: arRecipes, faqItems: arFaqItems, timelineEvents: arTimelineEvents,
    myths: arMyths, ayurvedaPageData: arAyurvedaData,
    regionalTraditions: arRegionalTraditions, getRegionalTraditionBySlug: arGetRegionalTraditionBySlug,
    globalMilletRegions: arGlobalMilletRegions, getGlobalMilletRegionBySlug: arGetGlobalMilletRegionBySlug,
    fermentedProducts: arFermentedProducts, buyingGuideItems: arBuyingGuideItems,
    mealPlans: arMealPlans, getMealPlanBySlug: arGetMealPlanBySlug,
    substitutionEntries: arSubstitutionEntries, ancientReferences: arAncientReferences,
    searchIndex: arSearchIndex, sources: enSources,
  },
  fr: {
    millets: frMillets, getMilletBySlug: frGetMilletBySlug,
    recipes: frRecipes, faqItems: frFaqItems, timelineEvents: frTimelineEvents,
    myths: frMyths, ayurvedaPageData: frAyurvedaData,
    regionalTraditions: frRegionalTraditions, getRegionalTraditionBySlug: frGetRegionalTraditionBySlug,
    globalMilletRegions: frGlobalMilletRegions, getGlobalMilletRegionBySlug: frGetGlobalMilletRegionBySlug,
    fermentedProducts: frFermentedProducts, buyingGuideItems: frBuyingGuideItems,
    mealPlans: frMealPlans, getMealPlanBySlug: frGetMealPlanBySlug,
    substitutionEntries: frSubstitutionEntries, ancientReferences: frAncientReferences,
    searchIndex: frSearchIndex, sources: frSources,
  },
  de: {
    millets: deMillets, getMilletBySlug: deGetMilletBySlug,
    recipes: deRecipes, faqItems: deFaqItems, timelineEvents: deTimelineEvents,
    myths: deMyths, ayurvedaPageData: deAyurvedaData,
    regionalTraditions: deRegionalTraditions, getRegionalTraditionBySlug: deGetRegionalTraditionBySlug,
    globalMilletRegions: deGlobalMilletRegions, getGlobalMilletRegionBySlug: deGetGlobalMilletRegionBySlug,
    fermentedProducts: deFermentedProducts, buyingGuideItems: deBuyingGuideItems,
    mealPlans: deMealPlans, getMealPlanBySlug: deGetMealPlanBySlug,
    substitutionEntries: deSubstitutionEntries, ancientReferences: deAncientReferences,
    searchIndex: deSearchIndex, sources: deSources,
  },
};

/* ------------------------------------------------------------------ */
/*  Public getters — same API as before, now backed by registry        */
/* ------------------------------------------------------------------ */

export const getMillets = (locale: Locale): Millet[] => localeData[locale].millets;

export const getMilletBySlugLocale = (slug: string, locale: Locale): Millet | undefined =>
  localeData[locale].getMilletBySlug(slug);

export const getRecipes = (locale: Locale): Recipe[] => localeData[locale].recipes;

export const getRecipeBySlugLocale = (slug: string, locale: Locale): Recipe | undefined =>
  localeData[locale].recipes.find(r => r.slug === slug);

export const getRecipesByMilletLocale = (milletSlug: string, locale: Locale): Recipe[] =>
  localeData[locale].recipes.filter(r => r.millets.includes(milletSlug));

export const getSources = (locale: Locale) => localeData[locale].sources;

export const getFaqItems = (locale: Locale): FAQItem[] => localeData[locale].faqItems;

export const getTimelineEvents = (locale: Locale): TimelineEvent[] => localeData[locale].timelineEvents;

export const getMyths = (locale: Locale): Myth[] => localeData[locale].myths;

export const getAyurvedaData = (locale: Locale): AyurvedaPageData => localeData[locale].ayurvedaPageData;

export const getRegionalTraditions = (locale: Locale): RegionalTradition[] => localeData[locale].regionalTraditions;

export const getRegionalTraditionBySlugLocale = (slug: string, locale: Locale): RegionalTradition | undefined =>
  localeData[locale].getRegionalTraditionBySlug(slug);

export const getGlobalMilletRegions = (locale: Locale): GlobalMilletRegion[] => localeData[locale].globalMilletRegions;

export const getGlobalMilletRegionBySlugLocale = (slug: string, locale: Locale): GlobalMilletRegion | undefined =>
  localeData[locale].getGlobalMilletRegionBySlug(slug);

export const getFermentedProducts = (locale: Locale): FermentedProduct[] => localeData[locale].fermentedProducts;

export const getBuyingGuideItems = (locale: Locale): BuyingGuideItem[] => localeData[locale].buyingGuideItems;

export const getMealPlans = (locale: Locale): MealPlan[] => localeData[locale].mealPlans;

export const getMealPlanBySlugLocale = (slug: string, locale: Locale): MealPlan | undefined =>
  localeData[locale].getMealPlanBySlug(slug);

export const getSubstitutionEntries = (locale: Locale): SubstitutionEntry[] => localeData[locale].substitutionEntries;

export const getAncientReferences = (locale: Locale): AncientReference[] => localeData[locale].ancientReferences;

export const getSearchIndex = (locale: Locale): SearchableItem[] => localeData[locale].searchIndex;

// Nutrition data is the same for all locales (numeric only)
export { riceNutrition, wheatNutrition, dailyValues };
