import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Heart, Droplets, Scale, Bone, Wheat } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { localePath, isValidLocale, hreflangAlternates } from '@/lib/i18n';
import Breadcrumb from '@/components/layout/Breadcrumb';
import MedicalDisclaimer from '@/components/ui/MedicalDisclaimer';
import { Card, CardBody } from '@/components/ui/Card';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== 'fr') return {};

  return {
    title: 'Nutrition et santé des millets | Simply Millets',
    description:
      'Bienfaits nutritionnels des millets fondés sur la science : santé cardiovasculaire, diabète, minéraux, sans gluten. Données ANSES.',
    alternates: {
      canonical: '/fr/nutrition-et-sante',
      languages: { fr: '/fr/nutrition-et-sante' },
    },
  };
}

export function generateStaticParams() {
  return [{ lang: 'fr' }];
}

const healthBenefits = [
  {
    icon: Heart,
    title: 'Santé cardiovasculaire',
    description:
      'Le mil perlé fournit 242 mg de magnésium pour 100 g, un minéral essentiel à la régulation du rythme cardiaque. Les fibres solubles réduisent le cholestérol LDL de 5 à 10 % selon les méta-analyses du Journal of the American Heart Association.',
    millets: ['Mil perlé', 'Éleusine (ragi)'],
    color: 'text-red-500',
  },
  {
    icon: Droplets,
    title: 'Gestion de la glycémie',
    description:
      'L\'éleusine possède un indice glycémique d\'environ 54, grâce à sa richesse en fibres (11,5 g/100 g) et en polyphénols. Des essais cliniques montrent une réduction de l\'HbA1c de 0,3 à 0,5 % sur 3 mois en substituant le riz blanc par des millets.',
    millets: ['Éleusine', 'Petit mil', 'Millet des oiseaux', 'Millet kodo'],
    color: 'text-amber-500',
  },
  {
    icon: Scale,
    title: 'Gestion du poids',
    description:
      'Le millet des Indes n\'apporte que 351 kcal pour 100 g avec 8 g de fibres, favorisant une satiété prolongée. Le millet kodo, riche en fibres insolubles (9 g/100 g), accélère le transit et limite l\'absorption des graisses.',
    millets: ['Millet des Indes', 'Millet kodo', 'Millet brun', 'Millet commun'],
    color: 'text-teal-500',
  },
  {
    icon: Bone,
    title: 'Santé osseuse',
    description:
      'L\'éleusine est la céréale la plus riche en calcium : 344 mg pour 100 g, soit plus que le lait de vache (120 mg). Le phosphore (283 mg) et le magnésium complètent ce trio essentiel à la densité osseuse, particulièrement important pour la prévention de l\'ostéoporose.',
    millets: ['Éleusine (ragi)', 'Mil perlé'],
    color: 'text-purple-500',
  },
  {
    icon: Wheat,
    title: 'Alternative sans gluten',
    description:
      'Tous les millets sont naturellement sans gluten, contrairement au blé, à l\'orge et au seigle. Ils constituent une alternative sûre et nutritive pour les personnes atteintes de maladie coeliaque ou d\'intolérance au gluten, validée par l\'AFDIAG (Association Française Des Intolérants Au Gluten).',
    millets: ['Tous les millets'],
    color: 'text-green-500',
  },
];

const nutritionFacts = [
  { label: 'Protéines', value: '7 à 12,5 g / 100 g', note: 'Comparable au blé complet' },
  { label: 'Fibres', value: '8 à 12,5 g / 100 g', note: '20× plus que le riz blanc' },
  { label: 'Calcium', value: 'Jusqu\'à 344 mg / 100 g', note: 'Éleusine : 3× le lait' },
  { label: 'Fer', value: 'Jusqu\'à 4,4 mg / 100 g', note: 'Sorgho : couvre 25 % des AJR' },
  { label: 'Magnésium', value: 'Jusqu\'à 242 mg / 100 g', note: 'Mil perlé : 60 % des AJR' },
  { label: 'Indice glycémique', value: '54 à 68', note: 'Bas à modéré vs 73 pour le riz blanc' },
];

export default async function NutritionEtSantePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang) || lang !== 'fr') notFound();

  const locale: Locale = lang;

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-6">
          Nutrition et santé des millets
        </h1>

        <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-10">
          <p>
            Les millets sont reconnus par l&apos;Organisation mondiale de la santé (OMS), l&apos;ANSES et la FAO
            comme des céréales à haute valeur nutritionnelle. Cette page synthétise les données scientifiques
            les plus récentes sur leurs bienfaits pour la santé, issues d&apos;études cliniques et de bases de
            données nutritionnelles de référence.
          </p>
        </div>

        <MedicalDisclaimer locale={locale} />

        {/* Key Nutrition Facts */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Chiffres clés
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nutritionFacts.map((fact) => (
              <Card key={fact.label}>
                <CardBody>
                  <p className="text-sm font-medium text-earth-600 dark:text-earth-400 uppercase tracking-wide mb-1">
                    {fact.label}
                  </p>
                  <p className="text-2xl font-bold text-earth-800 dark:text-earth-100 mb-1">
                    {fact.value}
                  </p>
                  <p className="text-sm text-earth-600 dark:text-earth-400">
                    {fact.note}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* Health Benefits */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Bienfaits pour la santé
          </h2>
          <div className="space-y-6">
            {healthBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className={`w-6 h-6 ${benefit.color} flex-shrink-0`} />
                    <h3 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-earth-700 dark:text-earth-300 leading-relaxed mb-3">
                    {benefit.description}
                  </p>
                  <p className="text-sm text-earth-600 dark:text-earth-400">
                    <strong>Millets concernés :</strong> {benefit.millets.join(', ')}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* PNNS / ANSES Recommendations */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Recommandations des autorités de santé
          </h2>
          <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6 md:p-8 max-w-3xl">
            <p className="text-earth-700 dark:text-earth-300 leading-relaxed mb-4">
              Le Programme National Nutrition Santé (PNNS) recommande de consommer des céréales complètes
              à chaque repas. Les millets, naturellement complets et riches en fibres, s&apos;inscrivent
              parfaitement dans cette recommandation.
            </p>
            <ul className="space-y-2 text-earth-700 dark:text-earth-300">
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">•</span>
                <span><strong>ANSES :</strong> augmenter la part de céréales complètes dans l&apos;alimentation quotidienne</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">•</span>
                <span><strong>OMS :</strong> diversifier les sources de céréales pour améliorer l&apos;apport en micronutriments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">•</span>
                <span><strong>FAO :</strong> les millets sont des &laquo; aliments intelligents &raquo; pour la sécurité alimentaire et nutritionnelle</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Links to related pages */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Pour aller plus loin
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href={localePath(locale, '/nutrition')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Comparaison nutritionnelle
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                Tableaux et graphiques comparatifs des 9 millets avec le riz et le blé
              </p>
            </Link>
            <Link
              href={localePath(locale, '/millet-vs-quinoa')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Millet vs Quinoa
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                Comparaison nutritionnelle, environnementale et économique
              </p>
            </Link>
          </div>
        </section>

        {/* Sources */}
        <section className="border-t border-earth-200 dark:border-earth-700 pt-8">
          <h2 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            Sources et références
          </h2>
          <ul className="space-y-2 text-sm text-earth-700 dark:text-earth-300">
            <li>ANSES — Table de composition nutritionnelle Ciqual (2024)</li>
            <li>USDA FoodData Central — U.S. Department of Agriculture (2019)</li>
            <li>Saleh ASM et al. — &laquo; Millet grains: nutritional quality, processing, and potential health benefits &raquo;, Comprehensive Reviews in Food Science and Food Safety (2013)</li>
            <li>Devi PB et al. — &laquo; Health benefits of finger millet polyphenols and dietary fiber &raquo;, Journal of Food Science and Technology (2014)</li>
            <li>Kam J et al. — &laquo; Dietary interventions for type 2 diabetes: how millet comes to help &raquo;, Frontiers in Plant Science (2016)</li>
            <li>FAO — Sorghum and millets in human nutrition, Food and Nutrition Series No. 27 (1995)</li>
          </ul>
        </section>
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6 mt-10">
          <p className="text-xs text-warm-gray dark:text-earth-400 leading-relaxed max-w-3xl">
            <strong>Avertissement :</strong> Les informations présentées sur cette page sont fournies à titre
            informatif uniquement. Elles ne constituent pas un avis médical. Consultez un professionnel de
            santé qualifié avant de modifier votre alimentation.
          </p>
        </div>
      </div>
    </main>
  );
}
