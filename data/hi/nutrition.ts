import type { NutritionPer100g } from '@/lib/types';

/**
 * Nutritional data for polished white rice per 100g (raw).
 * Source: ICMR-NIN Indian Food Composition Tables 2017
 */
export const riceNutrition: NutritionPer100g = {
  calories: 356,
  protein_g: 6.8,
  fat_g: 0.5,
  carbohydrates_g: 78.2,
  fiber_g: 0.2,
  calcium_mg: 10,
  iron_mg: 0.7,
  zinc_mg: 1.4,
  phosphorus_mg: 160,
  magnesium_mg: 64,
  potassium_mg: 120,
  thiamine_mg: 0.06,
  riboflavin_mg: 0.06,
  niacin_mg: 1.7,
  folate_mcg: 8,
  source: 'icmr-nin-ifct-2017',
  sourceDetail: 'ICMR-NIN Indian Food Composition Tables 2017 — Rice, raw, milled (white)',
};

/**
 * Nutritional data for whole wheat flour per 100g (raw).
 * Source: ICMR-NIN Indian Food Composition Tables 2017
 */
export const wheatNutrition: NutritionPer100g = {
  calories: 346,
  protein_g: 12.1,
  fat_g: 1.5,
  carbohydrates_g: 71.2,
  fiber_g: 12.5,
  calcium_mg: 41,
  iron_mg: 4.9,
  zinc_mg: 2.7,
  phosphorus_mg: 306,
  magnesium_mg: 138,
  potassium_mg: 363,
  thiamine_mg: 0.49,
  riboflavin_mg: 0.17,
  niacin_mg: 2.7,
  folate_mcg: 36.6,
  source: 'icmr-nin-ifct-2017',
  sourceDetail: 'ICMR-NIN Indian Food Composition Tables 2017 — Wheat, whole grain flour (atta)',
};

/**
 * Daily recommended values based on ICMR RDA for adult Indian male (sedentary to moderate activity).
 * Used as reference for percentage calculations in nutrition comparisons.
 * Source: ICMR-NIN Recommended Dietary Allowances for Indians, 2020
 */
export const dailyValues = {
  calories: 2320,
  protein_g: 60,
  fat_g: 65,
  carbohydrates_g: 300,
  fiber_g: 30,
  calcium_mg: 1000,
  iron_mg: 17,
  zinc_mg: 12,
  phosphorus_mg: 1000,
  magnesium_mg: 340,
  potassium_mg: 3510,
  thiamine_mg: 1.2,
  riboflavin_mg: 1.4,
  niacin_mg: 16,
  folate_mcg: 300,
} as const;

/**
 * Helper type for the daily values object.
 */
export type DailyValues = typeof dailyValues;

/**
 * Calculates the percentage of daily value for a given nutrient.
 * @param nutrientValue - The amount of the nutrient per 100g
 * @param dailyValue - The recommended daily value for that nutrient
 * @returns The percentage of daily value, rounded to 1 decimal place
 */
export function calculateDailyValuePercent(
  nutrientValue: number,
  dailyValue: number
): number {
  if (dailyValue === 0) return 0;
  return Math.round((nutrientValue / dailyValue) * 1000) / 10;
}
