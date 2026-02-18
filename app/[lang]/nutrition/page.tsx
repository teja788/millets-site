import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, isValidLocale, locales } from '@/lib/i18n';
import { getMillets, riceNutrition } from '@/lib/i18n-data';
import Breadcrumb from '@/components/layout/Breadcrumb';
import ComparisonTable from '@/components/ui/ComparisonTable';
import NutritionChart from '@/components/ui/NutritionChart';
import SourceCitation from '@/components/ui/SourceCitation';
import { Card, CardBody } from '@/components/ui/Card';
import { sources } from '@/data/sources';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const t = getTranslations(lang);

  return {
    title: `${t.comparison.title} | ${t.site.siteName}`,
    description:
      lang === 'te'
        ? 'అన్ని 9 చిరుధాన్యాల పోషక విలువలను పక్కపక్కన పోల్చండి. ప్రోటీన్, కాల్షియం, ఇనుము, ఫైబర్ మరియు మరిన్నింటిలో చిరుధాన్యాలు బియ్యం మరియు గోధుమలతో ఎలా పోల్చబడతాయో చూడండి.'
        : 'Compare the nutritional profiles of all 9 millets side by side. See how millets compare to rice and wheat in protein, calcium, iron, fiber, and more.',
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, localePath(l, '/nutrition')])
      ),
    },
  };
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'te' }];
}

export default async function NutritionPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale: Locale = lang;
  const t = getTranslations(locale);
  const millets = getMillets(locale);

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
      name: locale === 'te' ? 'తెల్ల బియ్యం' : 'White Rice',
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

  const insights = locale === 'te'
    ? [
        fingerMillet
          ? `రాగి (Finger Millet) లో 100 గ్రాములకు ${fingerMillet.nutrition.calcium_mg} mg కాల్షియం ఉంటుంది — ఇది తెల్ల బియ్యం (${riceNutrition.calcium_mg} mg) కంటే ${Math.round(fingerMillet.nutrition.calcium_mg / riceNutrition.calcium_mg)} రెట్లు ఎక్కువ.`
          : null,
        pearlMillet
          ? `సజ్జలు (Pearl Millet) 100 గ్రాములకు ${pearlMillet.nutrition.iron_mg} mg ఇనుము అందిస్తాయి, ఇది ధాన్యాలలో అత్యంత సమృద్ధిగా మొక్కల ఆధారిత ఇనుము మూలాలలో ఒకటి.`
          : null,
        barnyardMillet
          ? `ఊదల (Barnyard Millet) లో చిరుధాన్యాలలో అత్యధిక ఫైబర్ 100 గ్రాములకు ${barnyardMillet.nutrition.fiber_g} g ఉంటుంది — తెల్ల బియ్యంలో కేవలం ${riceNutrition.fiber_g} g తో పోలిస్తే.`
          : null,
        foxtailMillet
          ? `కొర్రలు (Foxtail Millet) 100 గ్రాములకు ${foxtailMillet.nutrition.protein_g} g ప్రోటీన్ అందిస్తాయి, తక్కువ గ్లైసెమిక్ ఇండెక్స్ తో రక్తంలో చక్కెర నియంత్రణకు అద్భుతమైన బియ్యం ప్రత్యామ్నాయం.`
          : null,
        sorghum
          ? `జొన్నలు (Sorghum) యాంటీఆక్సిడెంట్ పాలీఫెనాల్స్ సమృద్ధిగా ఉన్నాయి మరియు 100 గ్రాములకు ${sorghum.nutrition.potassium_mg} mg పొటాషియం అందిస్తాయి, గుండె ఆరోగ్యం మరియు రక్తపోటు నియంత్రణకు సహాయపడతాయి.`
          : null,
      ].filter(Boolean) as string[]
    : [
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

  return (
    <>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper section-padding">
        {/* Page Title */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
          {t.comparison.title}
        </h1>
        <p className="text-earth-600 dark:text-earth-300 leading-relaxed max-w-3xl mb-10">
          {locale === 'te'
            ? 'చిరుధాన్యాలు పోషక శక్తి కేంద్రాలు. క్రింద ఇంటరాక్టివ్ పోలిక పట్టికను ఉపయోగించి చిరుధాన్యాలను ఎంచుకుని వాటి పోషక విలువలను పక్కపక్కన చూడండి. అన్ని డేటా 100 గ్రాముల ముడి ధాన్యానికి, ICMR-NIN ఇండియన్ ఫుడ్ కంపోజిషన్ టేబుల్స్ (2017) నుండి సేకరించబడింది.'
            : 'Millets are nutritional powerhouses. Use the interactive comparison table below to select millets and see their nutritional values side by side. All data is per 100 grams of raw grain, sourced from the ICMR-NIN Indian Food Composition Tables (2017).'}
        </p>

        {/* Comparison Table */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            {locale === 'te' ? 'చిరుధాన్యాలను పోల్చండి' : 'Compare Millets'}
          </h2>
          <ComparisonTable millets={millets} />
        </section>

        {/* Key Insights */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            {locale === 'te' ? 'ముఖ్యమైన విశేషాలు' : 'Key Insights'}
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
            {locale === 'te'
              ? 'అన్ని చిరుధాన్యాలు: మాక్రో న్యూట్రియెంట్ పోలిక'
              : 'All Millets: Macro Nutrient Comparison'}
          </h2>
          <p className="text-sm text-earth-500 dark:text-earth-400 mb-6">
            {locale === 'te'
              ? 'అన్ని చిరుధాన్యాలు మరియు తెల్ల బియ్యంలో 100 గ్రాములకు ప్రోటీన్, కొవ్వు, కార్బోహైడ్రేట్లు, ఫైబర్ మరియు కేలరీలను పోల్చే బార్ చార్ట్.'
              : 'Bar chart comparing protein, fat, carbohydrates, fiber, and calories per 100 g across all millets and white rice.'}
          </p>
          <NutritionChart data={proteinChartData} chartType="bar" />
        </section>

        {/* Source Citation */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            {locale === 'te' ? 'డేటా మూలం' : 'Data Source'}
          </h2>
          <p className="text-sm text-earth-600 dark:text-earth-300 mb-3">
            {locale === 'te'
              ? 'ఈ పేజీలోని అన్ని పోషణ డేటా ఈ క్రింది వనరు నుండి సేకరించబడింది:'
              : 'All nutritional data on this page is sourced from:'}
          </p>
          {icmrSource && (
            <ol className="list-decimal list-inside">
              <SourceCitation source={icmrSource} />
            </ol>
          )}
          <p className="text-xs text-earth-400 dark:text-earth-300 mt-4">
            {locale === 'te'
              ? 'విలువలు 100 గ్రాముల ముడి ధాన్యం కూర్పును సూచిస్తాయి. వాస్తవ పోషక లభ్యత ప్రాసెసింగ్, వంట మరియు జీవ లభ్యత కారకాల ఆధారంగా మారవచ్చు.'
              : 'Values represent raw grain composition per 100 g. Actual nutrient availability may vary based on processing, cooking, and bioavailability factors.'}
          </p>
        </section>
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6 mt-10">
          <p className="text-xs text-warm-gray dark:text-earth-400 leading-relaxed max-w-3xl">
            <strong>{t.common.disclaimer}:</strong> {t.common.disclaimerText}
          </p>
        </div>
      </div>
    </>
  );
}
