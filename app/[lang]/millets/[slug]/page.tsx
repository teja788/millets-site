import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import MedicalDisclaimer from '@/components/ui/MedicalDisclaimer';
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
import FrenchNamesTable from '@/components/ui/FrenchNamesTable';
import GermanNamesTable from '@/components/ui/GermanNamesTable';
import SpanishNamesTable from '@/components/ui/SpanishNamesTable';
import NutritionChart from '@/components/ui/NutritionChart';
import SourceCitation from '@/components/ui/SourceCitation';
import NutritionHighlight from '@/components/sections/NutritionHighlight';
import FeaturedRecipes from '@/components/sections/FeaturedRecipes';
import TestimonialOrQuote from '@/components/sections/TestimonialOrQuote';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import type { Locale } from '@/lib/i18n';
import {
  localePath,
  getTranslations,
  isValidLocale,
  locales,
  availableHreflangAlternates,
} from '@/lib/i18n';
import { localeFeatures } from '@/lib/locale-config';
import { getMillets, getMilletBySlugLocale, getRecipesByMilletLocale, getSources, riceNutrition } from '@/lib/i18n-data';
import type { EvidenceLevel } from '@/lib/types';

// ---------------------------------------------------------------------------
// Static Params & Metadata
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  // English millets used for slugs (slugs are the same in both locales)
  const enMillets = getMillets('en');
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const m of enMillets) {
      params.push({ lang, slug: m.slug });
    }
  }
  return params;
}

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'en';
  const millet = getMilletBySlugLocale(slug, locale);
  const t = getTranslations(locale);
  if (!millet) {
    return { title: t.milletDetail.notFound };
  }
  const availableLocales = locales.filter((candidateLocale) =>
    getMilletBySlugLocale(slug, candidateLocale),
  );

  return {
    title: millet.name,
    description: millet.tagline,
    alternates: {
      canonical: `/${locale}/millets/${slug}`,
      languages: availableHreflangAlternates(
        `/millets/${slug}`,
        availableLocales,
      ),
    },
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

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function MilletDetailPage({ params }: PageProps) {
  const { lang, slug } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'en';
  const t = getTranslations(locale);
  const millet = getMilletBySlugLocale(slug, locale);

  if (!millet) {
    notFound();
  }

  const relatedRecipes = getRecipesByMilletLocale(millet.slug, locale);
  const sources = getSources(locale);
  const milletSources = sources.filter((s) => millet.sources.includes(s.key));

  const sidebarSections = [
    { id: 'names', title: ['fr', 'de'].includes(locale) ? t.milletDetail.namesMultilingual : t.milletDetail.namesInLanguages },
    { id: 'nutrition', title: t.milletDetail.nutritionProfile },
    { id: 'health-benefits', title: t.milletDetail.healthBenefits },
    { id: 'ayurveda', title: ['fr', 'de'].includes(locale) ? t.milletDetail.nutritionAndHealth : t.milletDetail.ayurvedicProperties },
    { id: 'cooking', title: t.milletDetail.howToCook },
    { id: 'cultivation', title: t.milletDetail.cultivation },
    { id: 'history', title: t.milletDetail.history },
    { id: 'side-effects', title: t.milletDetail.sideEffects },
    { id: 'recipes', title: t.milletDetail.recipes },
    { id: 'sources', title: t.common.sources },
  ];

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
      name: t.comparison.whiteRice,
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
  const nutritionRows: { label: string; value: number; unit: string }[] = [
    { label: t.milletDetail.calories, value: millet.nutrition.calories, unit: 'kcal' },
    { label: t.milletDetail.protein, value: millet.nutrition.protein_g, unit: 'g' },
    { label: t.milletDetail.fat, value: millet.nutrition.fat_g, unit: 'g' },
    { label: t.milletDetail.carbohydrates, value: millet.nutrition.carbohydrates_g, unit: 'g' },
    { label: t.milletDetail.fiber, value: millet.nutrition.fiber_g, unit: 'g' },
    { label: t.milletDetail.calcium, value: millet.nutrition.calcium_mg, unit: 'mg' },
    { label: t.milletDetail.iron, value: millet.nutrition.iron_mg, unit: 'mg' },
    { label: t.milletDetail.zinc, value: millet.nutrition.zinc_mg, unit: 'mg' },
    { label: t.milletDetail.phosphorus, value: millet.nutrition.phosphorus_mg, unit: 'mg' },
    { label: t.milletDetail.magnesium, value: millet.nutrition.magnesium_mg, unit: 'mg' },
    { label: t.milletDetail.potassium, value: millet.nutrition.potassium_mg, unit: 'mg' },
  ];

  if (millet.nutrition.thiamine_mg !== undefined)
    nutritionRows.push({ label: t.milletDetail.thiamine, value: millet.nutrition.thiamine_mg, unit: 'mg' });
  if (millet.nutrition.riboflavin_mg !== undefined)
    nutritionRows.push({ label: t.milletDetail.riboflavin, value: millet.nutrition.riboflavin_mg, unit: 'mg' });
  if (millet.nutrition.niacin_mg !== undefined)
    nutritionRows.push({ label: t.milletDetail.niacin, value: millet.nutrition.niacin_mg, unit: 'mg' });
  if (millet.nutrition.folate_mcg !== undefined)
    nutritionRows.push({ label: t.milletDetail.folate, value: millet.nutrition.folate_mcg, unit: 'mcg' });

  // Dosha display helper
  const doshaArrow = (effect: 'increases' | 'decreases' | 'neutral') => {
    return t.doshas[effect];
  };

  const doshaColor = (effect: 'increases' | 'decreases' | 'neutral') => {
    if (effect === 'decreases') return 'text-forest-600 dark:text-forest-400';
    if (effect === 'increases') return 'text-red-600 dark:text-red-400';
    return 'text-earth-500 dark:text-earth-400';
  };

  return (
    <>
      <Breadcrumb locale={locale} />

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
              fallbackColor="#D4A843"
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
            {millet.category === 'major' ? t.common.majorMillet : t.common.minorMillet}
          </Badge>
          {millet.isGlutenFree && <Badge variant="blue">{t.common.glutenFree}</Badge>}
          <Badge variant="default">
            {millet.grainType === 'naked' ? t.common.nakedGrain : t.common.huskedGrain}
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
            {millet.commonName}
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
          {/* ===== Names in Languages ===== */}
          <section id="names">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              {localeFeatures[locale].namesTable ? t.milletDetail.namesMultilingual : t.milletDetail.namesInLanguages}
            </h2>
            {localeFeatures[locale].namesTable === 'french' ? (
              <FrenchNamesTable slug={millet.slug} />
            ) : localeFeatures[locale].namesTable === 'german' ? (
              <GermanNamesTable slug={millet.slug} />
            ) : localeFeatures[locale].namesTable === 'spanish' ? (
              <SpanishNamesTable slug={millet.slug} />
            ) : (
              <LanguageTable names={millet.names} />
            )}
          </section>

          {/* ===== Nutrition Profile ===== */}
          <section id="nutrition">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              {t.milletDetail.nutritionProfile}
            </h2>
            <p className="text-sm text-earth-500 dark:text-earth-400 mb-4">
              {t.common.per100g}. {t.common.source}: {millet.nutrition.source}
              {millet.nutrition.sourceDetail && `, ${millet.nutrition.sourceDetail}`}
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
                    <TableHeaderCell>{t.milletDetail.nutrient}</TableHeaderCell>
                    <TableHeaderCell>{t.milletDetail.amount} {t.common.per100g}</TableHeaderCell>
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
              {millet.name} vs. {t.comparison.whiteRice}
            </h3>
            <NutritionChart data={chartData} chartType="bar" locale={locale} />
          </section>

          <MedicalDisclaimer locale={locale} />

          {/* ===== Health Benefits ===== */}
          <section id="health-benefits">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              {t.milletDetail.healthBenefits}
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
                        {t.milletDetail.evidenceLevels[hb.evidenceLevel]}
                      </Badge>
                    </div>
                    <p className="text-sm text-earth-600 dark:text-earth-300 leading-relaxed">
                      {hb.description}
                    </p>
                    {hb.source && (
                      <p className="text-xs text-warm-gray dark:text-earth-400 mt-2 italic">
                        {t.common.source}: {hb.source}
                      </p>
                    )}
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>

          {/* ===== Ayurvedic Properties / Nutrition & Health (French) ===== */}
          <section id="ayurveda">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              {!localeFeatures[locale].hasAyurveda ? t.milletDetail.nutritionAndHealth : t.milletDetail.ayurvedicProperties}
            </h2>

            {!localeFeatures[locale].hasAyurveda ? (
              <>
                {/* French: Evidence-based benefits */}
                <h3 className="font-heading text-lg font-semibold text-earth-800 dark:text-earth-100 mb-3">
                  {t.milletDetail.evidenceBasedBenefits}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-earth-600 dark:text-earth-300 text-sm mb-6">
                  {millet.ayurveda.therapeuticUses.map((use, i) => (
                    <li key={i}>{use}</li>
                  ))}
                </ul>

                {/* French: Source reference */}
                <p className="text-sm text-earth-500 dark:text-earth-400 mb-4 flex items-start gap-2">
                  <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>{t.common.source} :</strong>{' '}
                    {millet.ayurveda.classicalReference}
                  </span>
                </p>

                {/* French: Precautions */}
                {millet.ayurveda.contraindications.length > 0 && (
                  <>
                    <h3 className="font-heading text-lg font-semibold text-earth-800 dark:text-earth-100 mb-3">
                      {t.milletDetail.precautions}
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-earth-600 dark:text-earth-300 text-sm mb-6">
                      {millet.ayurveda.contraindications.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </>
                )}

                {/* French/German: Disclaimer */}
                <TestimonialOrQuote
                  quote={locale === 'de'
                    ? "Die hier dargestellten Ernährungsinformationen dienen ausschließlich Bildungszwecken. Sie stellen keine medizinische Beratung dar. Konsultieren Sie immer einen Arzt, bevor Sie Ihre Ernährung umstellen."
                    : "Les informations nutritionnelles présentées ici sont à titre éducatif uniquement. Elles ne constituent pas un avis médical. Consultez toujours un professionnel de santé avant de modifier votre alimentation."}
                  attribution={t.common.disclaimer}
                  source="Simply Millets"
                />
              </>
            ) : (
              <>
                {/* Non-French: Full Ayurvedic Properties */}
                {/* Properties Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <Card variant="outlined">
                    <CardBody className="text-center">
                      <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                        {t.milletDetail.rasa}
                      </p>
                      <p className="font-heading text-base font-semibold text-earth-800 dark:text-earth-100">
                        {millet.ayurveda.rasa.join(', ')}
                      </p>
                    </CardBody>
                  </Card>
                  <Card variant="outlined">
                    <CardBody className="text-center">
                      <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                        {t.milletDetail.virya}
                      </p>
                      <p className="font-heading text-base font-semibold text-earth-800 dark:text-earth-100">
                        {millet.ayurveda.virya}
                      </p>
                    </CardBody>
                  </Card>
                  <Card variant="outlined">
                    <CardBody className="text-center">
                      <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                        {t.milletDetail.vipaka}
                      </p>
                      <p className="font-heading text-base font-semibold text-earth-800 dark:text-earth-100">
                        {millet.ayurveda.vipaka}
                      </p>
                    </CardBody>
                  </Card>
                  <Card variant="outlined">
                    <CardBody className="text-center">
                      <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                        {t.milletDetail.guna}
                      </p>
                      <p className="font-heading text-base font-semibold text-earth-800 dark:text-earth-100">
                        {millet.ayurveda.guna.join(', ')}
                      </p>
                    </CardBody>
                  </Card>
                </div>

                {/* Dosha Effects */}
                <h3 className="font-heading text-lg font-semibold text-earth-800 dark:text-earth-100 mb-3">
                  {t.milletDetail.doshaEffect}
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {(['vata', 'pitta', 'kapha'] as const).map((dosha) => (
                    <Card key={dosha} variant="outlined">
                      <CardBody className="text-center">
                        <p className="text-sm font-medium text-earth-700 dark:text-earth-200 capitalize mb-1">
                          {t.doshas[dosha]}
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
                  {t.milletDetail.therapeuticUses}
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
                    <strong>{t.milletDetail.classicalReference}:</strong>{' '}
                    {millet.ayurveda.classicalReference}
                  </span>
                </p>

                {/* Contraindications */}
                {millet.ayurveda.contraindications.length > 0 && (
                  <>
                    <h3 className="font-heading text-lg font-semibold text-earth-800 dark:text-earth-100 mb-3">
                      {t.milletDetail.contraindications}
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
                  attribution={t.common.disclaimer}
                  source="This website"
                />
              </>
            )}
          </section>

          {/* ===== How to Cook ===== */}
          <section id="cooking">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              {t.milletDetail.howToCook} {millet.name}
            </h2>

            <Card variant="outlined">
              <CardBody>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-start gap-3">
                    <Ratio className="w-5 h-5 text-earth-500 dark:text-earth-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-earth-500 dark:text-earth-400 uppercase tracking-wider">
                        {t.milletDetail.waterRatio}
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
                        {t.milletDetail.soakingTime}
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
                        {t.milletDetail.cookingTime}
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
                        {t.milletDetail.bestSubstitute}
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
                      {t.milletDetail.texture}
                    </p>
                    <p className="text-sm text-earth-700 dark:text-earth-200">
                      {millet.cooking.texture}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                      {t.milletDetail.flavorProfile}
                    </p>
                    <p className="text-sm text-earth-700 dark:text-earth-200">
                      {millet.cooking.flavorProfile}
                    </p>
                  </div>
                </div>

                {/* Cooking Tips */}
                <h3 className="font-heading text-base font-semibold text-earth-800 dark:text-earth-100 mb-2">
                  {t.milletDetail.cookingTips}
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
              {t.milletDetail.cultivation}
            </h2>
            <Card variant="outlined">
              <CardBody>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-earth-500 dark:text-earth-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                        {t.milletDetail.majorStates}{['fr', 'de'].includes(locale) ? '' : ' (India)'}
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
                        {t.milletDetail.globalRegions}
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
                        {t.milletDetail.growingSeason}
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
                        {t.milletDetail.waterRequirement}
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
                        {t.milletDetail.soilType}
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
                        {t.milletDetail.harvestDays}
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
              {t.milletDetail.history}
            </h2>
            <Card variant="outlined">
              <CardBody className="space-y-4">
                <div>
                  <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                    {t.milletDetail.originRegion}
                  </p>
                  <p className="text-sm text-earth-700 dark:text-earth-200">
                    {millet.history.originRegion}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                    {t.milletDetail.domesticationPeriod}
                  </p>
                  <p className="text-sm text-earth-700 dark:text-earth-200">
                    {millet.history.domesticationPeriod}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                    {t.milletDetail.archaeologicalEvidence}
                  </p>
                  <p className="text-sm text-earth-700 dark:text-earth-200 leading-relaxed">
                    {millet.history.archaeologicalEvidence}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                    {t.milletDetail.spreadPattern}
                  </p>
                  <p className="text-sm text-earth-700 dark:text-earth-200 leading-relaxed">
                    {millet.history.spreadPattern}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-earth-600 dark:text-earth-400 uppercase tracking-wider font-semibold mb-1">
                    {t.milletDetail.culturalSignificanceLabel}
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
              {t.milletDetail.sideEffects}
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
                  const severityLabel = t.milletDetail.severityLevels[se.severity];

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
                {t.milletDetail.noSideEffects}
              </p>
            )}
          </section>

          {/* ===== Related Recipes ===== */}
          <section id="recipes">
            {relatedRecipes.length > 0 ? (
              <FeaturedRecipes
                recipes={relatedRecipes}
                title={`${t.milletDetail.relatedRecipes} - ${millet.name}`}
              />
            ) : (
              <>
                <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
                  {t.milletDetail.relatedRecipes} - {millet.name}
                </h2>
                <p className="text-earth-600 dark:text-earth-300 text-sm">
                  {t.milletDetail.noRecipes}{' '}
                  <Link
                    href={localePath(locale, '/recipes')}
                    className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 underline"
                  >
                    {t.nav.recipes}
                  </Link>
                  .
                </p>
              </>
            )}
          </section>

          {/* ===== Sources ===== */}
          <section id="sources">
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              {t.common.sources}
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
                {t.milletDetail.sourcesCompiling}
              </p>
            )}
          </section>
        </div>

        {/* Sidebar */}
        <Sidebar sections={sidebarSections} />
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
