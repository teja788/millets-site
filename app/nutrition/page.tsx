import type { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import ComparisonTable from '@/components/ui/ComparisonTable';
import NutritionChart from '@/components/ui/NutritionChart';
import SourceCitation from '@/components/ui/SourceCitation';
import { Card, CardBody } from '@/components/ui/Card';
import { millets } from '@/data/millets';
import { sources } from '@/data/sources';
import { riceNutrition } from '@/data/nutrition';

export const metadata: Metadata = {
  title: 'Nutrition Comparison',
  description:
    'Compare the nutritional profiles of all 9 millets side by side. See how millets compare to rice and wheat in protein, calcium, iron, fiber, and more.',
};

const icmrSource = sources.find((s) => s.key === 'icmr-nin-ifct-2017');

// Build chart data for protein comparison across all millets + rice
const proteinChartData = [
  ...millets.map((m) => ({
    name: m.name,
    calories: m.nutrition.calories,
    protein_g: m.nutrition.protein_g,
    fat_g: m.nutrition.fat_g,
    carbohydrates_g: m.nutrition.carbohydrates_g,
    fiber_g: m.nutrition.fiber_g,
    calcium_mg: m.nutrition.calcium_mg,
    iron_mg: m.nutrition.iron_mg,
  })),
  {
    name: 'White Rice',
    calories: riceNutrition.calories,
    protein_g: riceNutrition.protein_g,
    fat_g: riceNutrition.fat_g,
    carbohydrates_g: riceNutrition.carbohydrates_g,
    fiber_g: riceNutrition.fiber_g,
    calcium_mg: riceNutrition.calcium_mg,
    iron_mg: riceNutrition.iron_mg,
  },
];

// Find specific millets for insights
const fingerMillet = millets.find((m) => m.slug === 'finger-millet');
const pearlMillet = millets.find((m) => m.slug === 'pearl-millet');
const foxtailMillet = millets.find((m) => m.slug === 'foxtail-millet');
const barnyardMillet = millets.find((m) => m.slug === 'barnyard-millet');
const sorghum = millets.find((m) => m.slug === 'sorghum');

const insights = [
  fingerMillet
    ? `Finger Millet (Ragi) contains ${fingerMillet.nutrition.calcium_mg} mg of calcium per 100 g — that is ${Math.round(fingerMillet.nutrition.calcium_mg / riceNutrition.calcium_mg)}x more calcium than white rice (${riceNutrition.calcium_mg} mg).`
    : null,
  pearlMillet
    ? `Pearl Millet (Bajra) provides ${pearlMillet.nutrition.iron_mg} mg of iron per 100 g, making it one of the richest plant-based sources of iron among cereals.`
    : null,
  barnyardMillet
    ? `Barnyard Millet has the highest fiber content among millets at ${barnyardMillet.nutrition.fiber_g} g per 100 g — compared to just ${riceNutrition.fiber_g} g in white rice.`
    : null,
  foxtailMillet
    ? `Foxtail Millet offers ${foxtailMillet.nutrition.protein_g} g of protein per 100 g along with a low glycemic index, making it an excellent rice substitute for blood sugar management.`
    : null,
  sorghum
    ? `Sorghum (Jowar) is rich in antioxidant polyphenols and provides ${sorghum.nutrition.potassium_mg} mg of potassium per 100 g, supporting heart health and blood pressure regulation.`
    : null,
].filter(Boolean) as string[];

export default function NutritionPage() {
  return (
    <>
      <Breadcrumb />

      <div className="content-wrapper section-padding">
        {/* Page Title */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
          Nutrition Comparison
        </h1>
        <p className="text-earth-600 dark:text-earth-300 leading-relaxed max-w-3xl mb-10">
          Millets are nutritional powerhouses. Use the interactive comparison
          table below to select millets and see their nutritional values side by
          side. All data is per 100 grams of raw grain, sourced from the ICMR-NIN
          Indian Food Composition Tables (2017).
        </p>

        {/* Comparison Table */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            Compare Millets
          </h2>
          <ComparisonTable millets={millets} />
        </section>

        {/* Key Insights */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Key Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {insights.map((insight, index) => (
              <Card key={index} variant="outlined">
                <CardBody>
                  <p className="text-sm text-earth-700 dark:text-earth-200 leading-relaxed">
                    {insight}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* Protein Comparison Chart */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-2">
            All Millets: Macro Nutrient Comparison
          </h2>
          <p className="text-sm text-earth-500 dark:text-earth-400 mb-6">
            Bar chart comparing protein, fat, carbohydrates, fiber, and calories
            per 100 g across all millets and white rice.
          </p>
          <NutritionChart data={proteinChartData} chartType="bar" />
        </section>

        {/* Source Citation */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            Data Source
          </h2>
          <p className="text-sm text-earth-600 dark:text-earth-300 mb-3">
            All nutritional data on this page is sourced from:
          </p>
          {icmrSource && (
            <ol className="list-decimal list-inside">
              <SourceCitation source={icmrSource} />
            </ol>
          )}
          <p className="text-xs text-earth-400 dark:text-earth-500 mt-4">
            Values represent raw grain composition per 100 g. Actual nutrient
            availability may vary based on processing, cooking, and bioavailability
            factors.
          </p>
        </section>
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-700 pt-6 mt-10">
          <p className="text-xs text-earth-500 leading-relaxed max-w-3xl">
            <strong>Disclaimer:</strong> This content is created with the
            assistance of AI and is intended for educational purposes only. While
            we strive for accuracy, information may contain errors or be
            incomplete. Always do your own research and consult qualified
            professionals (nutritionists, doctors, agricultural experts) before
            making decisions based on this content. This website does not provide
            medical, nutritional, or agricultural advice.
          </p>
        </div>
      </div>
    </>
  );
}
