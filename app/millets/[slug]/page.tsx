import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Droplets,
  Sun,
  MapPin,
  Calendar,
  Sprout,
  Timer,
  CookingPot,
  Ratio,
  AlertTriangle,
  BookOpen,
  ScrollText,
} from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Sidebar from '@/components/layout/Sidebar';
import Badge from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from '@/components/ui/Table';
import LanguageTable from '@/components/ui/LanguageTable';
import NutritionChart from '@/components/ui/NutritionChart';
import SourceCitation from '@/components/ui/SourceCitation';
import NutritionHighlight from '@/components/sections/NutritionHighlight';
import FeaturedRecipes from '@/components/sections/FeaturedRecipes';
import TestimonialOrQuote from '@/components/sections/TestimonialOrQuote';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import { millets, getMilletBySlug } from '@/data/millets';
import { getRecipesByMillet } from '@/data/recipes';
import { sources } from '@/data/sources';
import { riceNutrition } from '@/data/nutrition';
import type { EvidenceLevel } from '@/lib/types';

// ---------------------------------------------------------------------------
// Static Params & Metadata
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return millets.map((m) => ({ slug: m.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const millet = getMilletBySlug(slug);
  if (!millet) {
    return { title: 'Millet Not Found' };
  }
  return {
    title: millet.name,
    description: `${millet.tagline} Learn about ${millet.name} nutrition, health benefits, Ayurvedic properties, recipes, and more.`,
  };
}

// ---------------------------------------------------------------------------
// Helper: Evidence badge color
// ---------------------------------------------------------------------------

function evidenceBadgeVariant(level: EvidenceLevel) {
  switch (level) {
    case 'well-established':
      return 'green' as const;
    case 'supported-by-research':
      return 'blue' as const;
    case 'preliminary-evidence':
      return 'orange' as const;
    case 'traditional-knowledge':
    default:
      return 'default' as const;
  }
}

function evidenceLabel(level: EvidenceLevel) {
  switch (level) {
    case 'well-established':
      return 'Well Established';
    case 'supported-by-research':
      return 'Supported by Research';
    case 'preliminary-evidence':
      return 'Preliminary Evidence';
    case 'traditional-knowledge':
      return 'Traditional Knowledge';
  }
}

// ---------------------------------------------------------------------------
// Sidebar sections definition
// ---------------------------------------------------------------------------

const milletGradients: Record<string, string> = {
  'pearl-millet': 'from-amber-600 via-yellow-700 to-amber-800',
  'finger-millet': 'from-red-800 via-red-700 to-rose-900',
  'sorghum': 'from-amber-700 via-orange-600 to-yellow-800',
  'foxtail-millet': 'from-yellow-600 via-amber-500 to-yellow-700',
  'little-millet': 'from-lime-700 via-green-600 to-emerald-800',
  'kodo-millet': 'from-stone-600 via-amber-700 to-stone-700',
  'barnyard-millet': 'from-emerald-700 via-teal-600 to-green-800',
  'proso-millet': 'from-yellow-500 via-amber-400 to-orange-600',
  'browntop-millet': 'from-amber-800 via-yellow-900 to-stone-800',
};

const defaultMilletGradient = 'from-earth-400 via-earth-500 to-earth-700';

const sidebarSections = [
  { id: 'names', title: 'Indian Names' },
  { id: 'nutrition', title: 'Nutrition' },
  { id: 'health-benefits', title: 'Health Benefits' },
  { id: 'ayurveda', title: 'Ayurveda' },
  { id: 'cooking', title: 'How to Cook' },
  { id: 'cultivation', title: 'Cultivation' },
  { id: 'history', title: 'History' },
  { id: 'side-effects', title: 'Side Effects' },
  { id: 'recipes', title: 'Recipes' },
  { id: 'sources', title: 'Sources' },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function MilletDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const millet = getMilletBySlug(slug);

  if (!millet) {
    notFound();
  }

  const relatedRecipes = getRecipesByMillet(millet.slug);
  const milletSources = sources.filter((s) => millet.sources.includes(s.key));

  // Chart data: this millet vs rice
  const chartData = [
    {
      name: millet.name,
      calories: millet.nutrition.calories,
      protein_g: millet.nutrition.protein_g,
      fat_g: millet.nutrition.fat_g,
      carbohydrates_g: millet.nutrition.carbohydrates_g,
      fiber_g: millet.nutrition.fiber_g,
      calcium_mg: millet.nutrition.calcium_mg,
      iron_mg: millet.nutrition.iron_mg,
    },
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

  // Nutrition table rows
  const nutritionRows = [
    { label: 'Calories', value: millet.nutrition.calories, unit: 'kcal' },
    { label: 'Protein', value: millet.nutrition.protein_g, unit: 'g' },
    { label: 'Fat', value: millet.nutrition.fat_g, unit: 'g' },
    { label: 'Carbohydrates', value: millet.nutrition.carbohydrates_g, unit: 'g' },
    { label: 'Dietary Fiber', value: millet.nutrition.fiber_g, unit: 'g' },
    { label: 'Calcium', value: millet.nutrition.calcium_mg, unit: 'mg' },
    { label: 'Iron', value: millet.nutrition.iron_mg, unit: 'mg' },
    { label: 'Zinc', value: millet.nutrition.zinc_mg, unit: 'mg' },
    { label: 'Phosphorus', value: millet.nutrition.phosphorus_mg, unit: 'mg' },
    { label: 'Magnesium', value: millet.nutrition.magnesium_mg, unit: 'mg' },
    { label: 'Potassium', value: millet.nutrition.potassium_mg, unit: 'mg' },
  ];

  if (millet.nutrition.thiamine_mg !== undefined)
    nutritionRows.push({ label: 'Thiamine (B1)', value: millet.nutrition.thiamine_mg, unit: 'mg' });
  if (millet.nutrition.riboflavin_mg !== undefined)
    nutritionRows.push({ label: 'Riboflavin (B2)', value: millet.nutrition.riboflavin_mg, unit: 'mg' });
  if (millet.nutrition.niacin_mg !== undefined)
    nutritionRows.push({ label: 'Niacin (B3)', value: millet.nutrition.niacin_mg, unit: 'mg' });
  if (millet.nutrition.folate_mcg !== undefined)
    nutritionRows.push({ label: 'Folate', value: millet.nutrition.folate_mcg, unit: 'mcg' });

  // Dosha display helper
  const doshaArrow = (effect: 'increases' | 'decreases' | 'neutral') => {
    if (effect === 'increases') return 'Increases';
    if (effect === 'decreases') return 'Decreases';
    return 'Neutral';
  };

  const doshaColor = (effect: 'increases' | 'decreases' | 'neutral') => {
    if (effect === 'decreases') return 'text-forest-600 dark:text-forest-400';
    if (effect === 'increases') return 'text-red-600 dark:text-red-400';
    return 'text-earth-500 dark:text-earth-400';
  };

  return (
    <>
      <Breadcrumb />

      {/* Hero Banner */}
      <div className="content-wrapper pt-2 mb-6">
        <div
          className={`relative w-full h-48 md:h-56 rounded-xl overflow-hidden bg-gradient-to-br ${milletGradients[millet.slug] || defaultMilletGradient}`}
        >
          {millet.images?.plant && (
            <ImageWithFallback
              src={millet.images.plant}
              alt={`${millet.name} plant growing in a field`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              fallbackColor="#C4A35A"
            />
          )}
          {/* SVG watermark shown on gradient (when no image) */}
          {!millet.images?.plant && (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/25"
              >
                <path d="M2 22 16 8" />
                <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
                <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
                <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
                <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
                <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
                <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
                <path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
              </svg>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      {/* Hero Area */}
      <header className="content-wrapper pt-0 pb-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <Badge variant={millet.category === 'major' ? 'green' : 'orange'}>
            {millet.category === 'major' ? 'Major Millet' : 'Minor Millet'}
          </Badge>
          {millet.isGlutenFree && <Badge variant="blue">Gluten-Free</Badge>}
          <Badge variant="default">
            {millet.grainType === 'naked' ? 'Naked Grain' : 'Husked Grain'}
          </Badge>
        </div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-2">
          {millet.name}
        </h1>
        <p className="text-lg italic text-earth-500 dark:text-earth-400 mb-1">
          {millet.scientificName}
        </p>
        {millet.commonName && (
          <p className="text-earth-600 dark:text-earth-300 mb-3">
            Common name: {millet.commonName}
          </p>
        )}
        <p className="text-earth-600 dark:text-earth-300 leading-relaxed max-w-3xl">
          {millet.tagline}
        </p>
      </header>

      {/* Two-column layout */}
      <div className="content-wrapper flex gap-10 pb-16">
        {/* Main Content */}
        <div className="flex-1 min-w-0 space-y-14">
          {/* ===== Names in Indian Languages ===== */}
          <section id="names">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              Names in Indian Languages
            </h2>
            <LanguageTable names={millet.names} />
          </section>

          {/* ===== Nutrition Profile ===== */}
          <section id="nutrition">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              Nutrition Profile
            </h2>
            <p className="text-sm text-earth-500 dark:text-earth-400 mb-4">
              Per 100 g, raw grain. Source: {millet.nutrition.source}
              {millet.nutrition.sourceDetail && ` — ${millet.nutrition.sourceDetail}`}
            </p>

            {/* Quick Facts */}
            <div className="mb-8">
              <NutritionHighlight millet={millet} />
            </div>

            {/* Full Nutrition Table */}
            <div className="mb-8 rounded-xl border border-earth-200 dark:border-earth-700 overflow-hidden">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Nutrient</TableHeaderCell>
                    <TableHeaderCell>Amount per 100 g</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {nutritionRows.map((row) => (
                    <TableRow key={row.label}>
                      <TableCell className="font-medium">{row.label}</TableCell>
                      <TableCell>
                        {row.value} {row.unit}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Bar Chart: Millet vs Rice */}
            <h3 className="font-heading text-lg font-semibold text-earth-800 dark:text-earth-100 mb-3">
              {millet.name} vs. White Rice
            </h3>
            <NutritionChart data={chartData} chartType="bar" />
          </section>

          {/* ===== Health Benefits ===== */}
          <section id="health-benefits">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              Health Benefits
            </h2>
            <div className="space-y-4">
              {millet.healthBenefits.map((hb, index) => (
                <Card key={index} variant="outlined">
                  <CardBody>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="font-heading text-base font-bold text-earth-800 dark:text-earth-100">
                        {hb.benefit}
                      </h3>
                      <Badge
                        variant={evidenceBadgeVariant(hb.evidenceLevel)}
                        size="sm"
                      >
                        {evidenceLabel(hb.evidenceLevel)}
                      </Badge>
                    </div>
                    <p className="text-sm text-earth-600 dark:text-earth-300 leading-relaxed">
                      {hb.description}
                    </p>
                    {hb.source && (
                      <p className="text-xs text-earth-400 mt-2 italic">
                        Source: {hb.source}
                      </p>
                    )}
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>

          {/* ===== Ayurvedic Properties ===== */}
          <section id="ayurveda">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              Ayurvedic Properties
            </h2>

            {/* Properties Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <Card variant="outlined">
                <CardBody className="text-center">
                  <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                    Rasa (Taste)
                  </p>
                  <p className="font-heading text-base font-semibold text-earth-800 dark:text-earth-100">
                    {millet.ayurveda.rasa.join(', ')}
                  </p>
                </CardBody>
              </Card>
              <Card variant="outlined">
                <CardBody className="text-center">
                  <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                    Virya (Potency)
                  </p>
                  <p className="font-heading text-base font-semibold text-earth-800 dark:text-earth-100">
                    {millet.ayurveda.virya}
                  </p>
                </CardBody>
              </Card>
              <Card variant="outlined">
                <CardBody className="text-center">
                  <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                    Vipaka (Post-digestive)
                  </p>
                  <p className="font-heading text-base font-semibold text-earth-800 dark:text-earth-100">
                    {millet.ayurveda.vipaka}
                  </p>
                </CardBody>
              </Card>
              <Card variant="outlined">
                <CardBody className="text-center">
                  <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                    Guna (Quality)
                  </p>
                  <p className="font-heading text-base font-semibold text-earth-800 dark:text-earth-100">
                    {millet.ayurveda.guna.join(', ')}
                  </p>
                </CardBody>
              </Card>
            </div>

            {/* Dosha Effects */}
            <h3 className="font-heading text-lg font-semibold text-earth-800 dark:text-earth-100 mb-3">
              Dosha Effects
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {(['vata', 'pitta', 'kapha'] as const).map((dosha) => (
                <Card key={dosha} variant="outlined">
                  <CardBody className="text-center">
                    <p className="text-sm font-medium text-earth-700 dark:text-earth-200 capitalize mb-1">
                      {dosha}
                    </p>
                    <p
                      className={`font-heading text-base font-semibold ${doshaColor(
                        millet.ayurveda.doshaEffect[dosha]
                      )}`}
                    >
                      {doshaArrow(millet.ayurveda.doshaEffect[dosha])}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>

            {/* Therapeutic Uses */}
            <h3 className="font-heading text-lg font-semibold text-earth-800 dark:text-earth-100 mb-3">
              Therapeutic Uses
            </h3>
            <ul className="list-disc list-inside space-y-1 text-earth-600 dark:text-earth-300 text-sm mb-6">
              {millet.ayurveda.therapeuticUses.map((use, i) => (
                <li key={i}>{use}</li>
              ))}
            </ul>

            {/* Classical Reference */}
            <p className="text-sm text-earth-500 dark:text-earth-400 mb-4 flex items-start gap-2">
              <ScrollText className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Classical Reference:</strong>{' '}
                {millet.ayurveda.classicalReference}
              </span>
            </p>

            {/* Contraindications */}
            {millet.ayurveda.contraindications.length > 0 && (
              <>
                <h3 className="font-heading text-lg font-semibold text-earth-800 dark:text-earth-100 mb-3">
                  Contraindications (Ayurvedic)
                </h3>
                <ul className="list-disc list-inside space-y-1 text-earth-600 dark:text-earth-300 text-sm mb-6">
                  {millet.ayurveda.contraindications.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Disclaimer */}
            <TestimonialOrQuote
              quote="Ayurvedic information presented here is derived from classical texts for educational purposes. It is not medical advice. Always consult a qualified Ayurvedic practitioner or healthcare provider before making dietary changes based on Ayurvedic principles."
              attribution="Disclaimer"
              source="This website"
            />
          </section>

          {/* ===== How to Cook ===== */}
          <section id="cooking">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              How to Cook {millet.name}
            </h2>

            <Card variant="outlined">
              <CardBody>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-start gap-3">
                    <Ratio className="w-5 h-5 text-earth-500 dark:text-earth-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-earth-500 dark:text-earth-400 uppercase tracking-wider">
                        Water Ratio
                      </p>
                      <p className="font-heading text-base font-semibold text-earth-800 dark:text-earth-100">
                        {millet.cooking.waterRatio}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Droplets className="w-5 h-5 text-earth-500 dark:text-earth-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-earth-500 dark:text-earth-400 uppercase tracking-wider">
                        Soaking Time
                      </p>
                      <p className="font-heading text-base font-semibold text-earth-800 dark:text-earth-100">
                        {millet.cooking.soakingTime}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Timer className="w-5 h-5 text-earth-500 dark:text-earth-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-earth-500 dark:text-earth-400 uppercase tracking-wider">
                        Cooking Time
                      </p>
                      <p className="font-heading text-base font-semibold text-earth-800 dark:text-earth-100">
                        {millet.cooking.cookingTime}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CookingPot className="w-5 h-5 text-earth-500 dark:text-earth-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-earth-500 dark:text-earth-400 uppercase tracking-wider">
                        Best Substitute For
                      </p>
                      <p className="font-heading text-base font-semibold text-earth-800 dark:text-earth-100">
                        {millet.cooking.bestSubstituteFor}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                      Texture
                    </p>
                    <p className="text-sm text-earth-700 dark:text-earth-200">
                      {millet.cooking.texture}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                      Flavor Profile
                    </p>
                    <p className="text-sm text-earth-700 dark:text-earth-200">
                      {millet.cooking.flavorProfile}
                    </p>
                  </div>
                </div>

                {/* Cooking Tips */}
                <h3 className="font-heading text-base font-semibold text-earth-800 dark:text-earth-100 mb-2">
                  Tips
                </h3>
                <ul className="space-y-2">
                  {millet.cooking.tips.map((tip, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-earth-600 dark:text-earth-300"
                    >
                      <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">
                        {i + 1}.
                      </span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </section>

          {/* ===== Cultivation ===== */}
          <section id="cultivation">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              Cultivation
            </h2>
            <Card variant="outlined">
              <CardBody>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-earth-500 dark:text-earth-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                        Major States (India)
                      </p>
                      <p className="text-sm text-earth-700 dark:text-earth-200">
                        {millet.cultivation.majorStates.join(', ')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-earth-500 dark:text-earth-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                        Global Regions
                      </p>
                      <p className="text-sm text-earth-700 dark:text-earth-200">
                        {millet.cultivation.globalRegions.join(', ')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sun className="w-5 h-5 text-earth-500 dark:text-earth-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                        Growing Season
                      </p>
                      <p className="text-sm text-earth-700 dark:text-earth-200">
                        {millet.cultivation.growingSeason}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Droplets className="w-5 h-5 text-earth-500 dark:text-earth-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                        Water Requirement
                      </p>
                      <p className="text-sm text-earth-700 dark:text-earth-200">
                        {millet.cultivation.waterRequirement}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sprout className="w-5 h-5 text-earth-500 dark:text-earth-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                        Soil Type
                      </p>
                      <p className="text-sm text-earth-700 dark:text-earth-200">
                        {millet.cultivation.soilType}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-earth-500 dark:text-earth-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                        Days to Harvest
                      </p>
                      <p className="text-sm text-earth-700 dark:text-earth-200">
                        {millet.cultivation.harvestDays}
                      </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* ===== History ===== */}
          <section id="history">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              History
            </h2>
            <Card variant="outlined">
              <CardBody className="space-y-4">
                <div>
                  <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                    Region of Origin
                  </p>
                  <p className="text-sm text-earth-700 dark:text-earth-200">
                    {millet.history.originRegion}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                    Domestication Period
                  </p>
                  <p className="text-sm text-earth-700 dark:text-earth-200">
                    {millet.history.domesticationPeriod}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                    Archaeological Evidence
                  </p>
                  <p className="text-sm text-earth-700 dark:text-earth-200 leading-relaxed">
                    {millet.history.archaeologicalEvidence}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                    Spread Pattern
                  </p>
                  <p className="text-sm text-earth-700 dark:text-earth-200 leading-relaxed">
                    {millet.history.spreadPattern}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                    Cultural Significance
                  </p>
                  <p className="text-sm text-earth-700 dark:text-earth-200 leading-relaxed">
                    {millet.history.culturalSignificance}
                  </p>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* ===== Side Effects & Precautions ===== */}
          <section id="side-effects">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              Side Effects &amp; Precautions
            </h2>
            {millet.sideEffects.length > 0 ? (
              <div className="space-y-4">
                {millet.sideEffects.map((se, index) => {
                  const severityVariant =
                    se.severity === 'mild'
                      ? 'orange'
                      : se.severity === 'moderate'
                        ? 'red'
                        : 'red';
                  const severityLabel =
                    se.severity === 'consult-doctor'
                      ? 'Consult Doctor'
                      : se.severity.charAt(0).toUpperCase() + se.severity.slice(1);

                  return (
                    <Card key={index} variant="outlined">
                      <CardBody>
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <h3 className="font-heading text-base font-bold text-earth-800 dark:text-earth-100">
                              {se.condition}
                            </h3>
                          </div>
                          <Badge
                            variant={severityVariant}
                            size="sm"
                            className={
                              se.severity === 'consult-doctor' ? 'font-bold' : ''
                            }
                          >
                            {severityLabel}
                          </Badge>
                        </div>
                        <p className="text-sm text-earth-600 dark:text-earth-300 leading-relaxed pl-6">
                          {se.description}
                        </p>
                      </CardBody>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <p className="text-earth-600 dark:text-earth-300 text-sm">
                No significant side effects have been documented for this millet when consumed in normal dietary amounts.
              </p>
            )}
          </section>

          {/* ===== Related Recipes ===== */}
          <section id="recipes">
            {relatedRecipes.length > 0 ? (
              <FeaturedRecipes
                recipes={relatedRecipes}
                title={`Recipes with ${millet.name}`}
              />
            ) : (
              <>
                <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
                  Recipes with {millet.name}
                </h2>
                <p className="text-earth-600 dark:text-earth-300 text-sm">
                  No recipes available for this millet yet.{' '}
                  <Link
                    href="/recipes"
                    className="text-earth-400 hover:text-earth-200 underline"
                  >
                    Browse all recipes
                  </Link>
                  .
                </p>
              </>
            )}
          </section>

          {/* ===== Sources ===== */}
          <section id="sources">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              Sources
            </h2>
            {milletSources.length > 0 ? (
              <ol className="list-decimal list-inside space-y-3">
                {milletSources.map((source) => (
                  <SourceCitation key={source.key} source={source} />
                ))}
              </ol>
            ) : (
              <p className="text-earth-600 dark:text-earth-300 text-sm flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Source information is being compiled for this millet.
              </p>
            )}
          </section>
        </div>

        {/* Sidebar */}
        <Sidebar sections={sidebarSections} />
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
