/* ========================================
   MILLETS WEBSITE - TYPE DEFINITIONS
   All data interfaces used across the site
   ======================================== */

// === NUTRITION ===

export interface NutritionPer100g {
  calories: number;
  protein_g: number;
  fat_g: number;
  carbohydrates_g: number;
  fiber_g: number;
  calcium_mg: number;
  iron_mg: number;
  zinc_mg: number;
  phosphorus_mg: number;
  magnesium_mg: number;
  potassium_mg: number;
  thiamine_mg?: number;
  riboflavin_mg?: number;
  niacin_mg?: number;
  folate_mcg?: number;
  source: string;
  sourceDetail?: string;
}

// === LANGUAGE NAMES ===

export interface LanguageNames {
  english: string;
  hindi: string;
  tamil: string;
  telugu: string;
  kannada: string;
  malayalam: string;
  marathi: string;
  bengali: string;
  gujarati: string;
  odia: string;
  punjabi: string;
  sanskrit: string;
}

// === AYURVEDA ===

export interface AyurvedicProperty {
  rasa: string[];
  guna: string[];
  virya: string;
  vipaka: string;
  doshaEffect: {
    vata: 'increases' | 'decreases' | 'neutral';
    pitta: 'increases' | 'decreases' | 'neutral';
    kapha: 'increases' | 'decreases' | 'neutral';
  };
  therapeuticUses: string[];
  contraindications: string[];
  classicalReference: string;
}

// === CULTIVATION ===

export interface CultivationInfo {
  majorStates: string[];
  globalRegions: string[];
  growingSeason: string;
  waterRequirement: string;
  soilType: string;
  harvestDays: string;
}

// === COOKING ===

export interface CookingInfo {
  waterRatio: string;
  soakingTime: string;
  cookingTime: string;
  texture: string;
  flavorProfile: string;
  bestSubstituteFor: string;
  tips: string[];
}

// === HEALTH ===

export type EvidenceLevel =
  | 'well-established'
  | 'supported-by-research'
  | 'preliminary-evidence'
  | 'traditional-knowledge';

export interface HealthBenefit {
  benefit: string;
  description: string;
  evidenceLevel: EvidenceLevel;
  source?: string;
}

export interface SideEffect {
  condition: string;
  description: string;
  severity: 'mild' | 'moderate' | 'consult-doctor';
}

// === HISTORY ===

export interface MilletHistory {
  originRegion: string;
  domesticationPeriod: string;
  archaeologicalEvidence: string;
  spreadPattern: string;
  culturalSignificance: string;
}

// === IMAGES ===

export interface MilletImages {
  grain: string;  // path to grain close-up (800x800)
  plant: string;  // path to plant/field image (1200x675)
  cooked: string; // path to cooked dish image (1200x675)
}

// === MILLET (MAIN TYPE) ===

export interface Millet {
  slug: string;
  name: string;
  commonName: string;
  scientificName: string;
  family: string;
  category: 'major' | 'minor';
  grainType: 'naked' | 'husked';
  imageUrl: string;
  images: MilletImages;
  tagline: string;
  description: string;

  names: LanguageNames;
  nutrition: NutritionPer100g;
  history: MilletHistory;
  ayurveda: AyurvedicProperty;
  cultivation: CultivationInfo;
  cooking: CookingInfo;

  healthBenefits: HealthBenefit[];
  sideEffects: SideEffect[];

  glycemicIndex?: {
    value: number;
    category: 'low' | 'medium' | 'high';
    source: string;
  };

  isGlutenFree: boolean;
  relatedRecipes: string[];
  sources: string[];
}

// === RECIPE ===

export type RecipeCategory =
  | 'breakfast'
  | 'lunch'
  | 'dinner'
  | 'snack'
  | 'dessert'
  | 'drink'
  | 'bread';

export interface RecipeIngredient {
  item: string;
  quantity: string;
  isOptional?: boolean;
}

export interface Recipe {
  slug: string;
  title: string;
  millets: string[];
  category: RecipeCategory;
  cuisine: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: 'easy' | 'medium' | 'advanced';
  description: string;
  ingredients: RecipeIngredient[];
  instructions: string[];
  nutritionPerServing?: {
    calories: number;
    protein_g: number;
    fiber_g: number;
  };
  tips: string[];
  imageUrl: string;
  imageFile: string; // path to recipe image (800x600)
  tags: string[];
}

// === TIMELINE ===

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  region?: string;
  source?: string;
}

// === SOURCES ===

export interface Source {
  key: string;
  title: string;
  authors: string;
  year: number;
  journal?: string;
  url?: string;
  type: 'peer-reviewed' | 'government' | 'book' | 'institutional';
}

// === FAQ ===

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  relatedMillets?: string[];
}

// === AYURVEDA PAGE DATA ===

export interface AyurvedaPageData {
  generalClassification: string;
  doshaGuide: {
    dosha: string;
    recommended: string[];
    moderate: string[];
    avoid: string[];
    description: string;
  }[];
  seasonalGuide: {
    season: string;
    months: string;
    recommended: string[];
    reasoning: string;
  }[];
  disclaimer: string;
}

// === SEARCH ===

export interface SearchableItem {
  id: string;
  title: string;
  description: string;
  type: 'millet' | 'recipe' | 'faq' | 'page' | 'tool' | 'tradition' | 'region';
  url: string;
  tags: string[];
}

// === REGIONAL TRADITIONS ===

export interface RegionalTradition {
  slug: string;
  state: string;
  region: string;
  tagline: string;
  description: string;
  primaryMillets: string[];
  iconicDishes: { name: string; millet: string; description: string }[];
  festivals: { name: string; description: string; milletConnection: string }[];
  culturalSignificance: string;
  traditionalPractices: string[];
  famousQuoteOrSaying?: string;
  imageFile: string;
}

// === GLOBAL MILLETS ===

export interface GlobalMilletRegion {
  slug: string;
  region: string;
  continent: string;
  tagline: string;
  description: string;
  countries: string[];
  primaryMillets: string[];
  iconicFoods: { name: string; country: string; millet: string; description: string }[];
  historicalHighlights: { title: string; period: string; description: string }[];
  culturalSignificance: string;
  modernStatus: string;
  keyFact: string;
  imageFile: string;
}

// === FERMENTATION ===

export interface FermentedProduct {
  name: string;
  region: string;
  millets: string[];
  process: string;
  duration: string;
  nutritionalBenefit: string;
  culturalContext: string;
}

// === ANCIENT REFERENCES ===

export interface AncientReference {
  id: string;
  text: string;
  period: string;
  language: string;
  originalQuote?: string;
  translation: string;
  milletMentioned: string;
  significance: string;
  source: string;
}

// === MYTHS ===

export interface Myth {
  id: string;
  myth: string;
  fact: string;
  category: 'nutrition' | 'cooking' | 'health' | 'farming' | 'general';
  sources?: string[];
}

// === SUBSTITUTION ===

export interface SubstitutionEntry {
  conventionalGrain: string;
  milletSubstitutes: {
    millet: string;
    milletName: string;
    ratio: string;
    notes: string;
    bestFor: string[];
    difficulty: 'easy' | 'moderate' | 'advanced';
  }[];
}

// === MEAL PLANS ===

export interface MealPlanDay {
  day: string;
  breakfast: string;
  lunch: string;
  snack: string;
  dinner: string;
}

export interface MealPlan {
  slug: string;
  title: string;
  description: string;
  goal: string;
  duration: string;
  days: MealPlanDay[];
  tips: string[];
  disclaimer: string;
}

// === BUYING GUIDE ===

export interface BuyingGuideItem {
  millet: string;
  milletName: string;
  formsAvailable: string[];
  whatToLookFor: string[];
  storageInstructions: string;
  shelfLife: string;
  priceRange: string;
  onlineAvailability: string;
}
