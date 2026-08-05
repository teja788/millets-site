import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Heart, Droplets, Scale, Bone, Wheat } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { localePath, isValidLocale } from '@/lib/i18n';
import Breadcrumb from '@/components/layout/Breadcrumb';
import MedicalDisclaimer from '@/components/ui/MedicalDisclaimer';
import { Card, CardBody } from '@/components/ui/Card';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== 'es') return {};

  return {
    title: 'Nutrición y salud de los mijos | Simply Millets',
    description:
      'Beneficios nutricionales de los mijos basados en la ciencia: salud cardiovascular, diabetes, minerales, sin gluten. Datos BEDCA y AESAN.',
    alternates: {
      canonical: '/es/nutricion-y-salud',
      languages: { es: '/es/nutricion-y-salud' },
    },
  };
}

export function generateStaticParams() {
  return [{ lang: 'es' }];
}

const healthBenefits = [
  {
    icon: Heart,
    title: 'Salud cardiovascular',
    description:
      'El mijo perla aporta 242 mg de magnesio por 100 g, un mineral esencial para la regulación del ritmo cardíaco. La fibra soluble reduce el colesterol LDL entre un 5 y un 10 % según los metaanálisis del Journal of the American Heart Association.',
    millets: ['Mijo perla (bajra)', 'Eleusine (ragi)'],
    color: 'text-red-500',
  },
  {
    icon: Droplets,
    title: 'Control de la glucemia',
    description:
      'La eleusine posee un índice glucémico de aproximadamente 54, gracias a su riqueza en fibra (11,5 g/100 g) y polifenoles. Ensayos clínicos demuestran una reducción de la HbA1c de 0,3 a 0,5 % en 3 meses al sustituir el arroz blanco por mijos.',
    millets: ['Eleusine (ragi)', 'Mijo menor', 'Mijo de los pájaros', 'Mijo kodo'],
    color: 'text-amber-500',
  },
  {
    icon: Scale,
    title: 'Control del peso',
    description:
      'El mijo de las Indias aporta solo 351 kcal por 100 g con 8 g de fibra, favoreciendo una saciedad prolongada. El mijo kodo, rico en fibra insoluble (9 g/100 g), acelera el tránsito intestinal y limita la absorción de grasas.',
    millets: ['Mijo de las Indias', 'Mijo kodo', 'Mijo marrón', 'Mijo común (proso)'],
    color: 'text-teal-500',
  },
  {
    icon: Bone,
    title: 'Salud ósea',
    description:
      'La eleusine es el cereal más rico en calcio: 344 mg por 100 g, más que la leche de vaca (120 mg). El fósforo (283 mg) y el magnesio completan este trío esencial para la densidad ósea, particularmente importante en la prevención de la osteoporosis.',
    millets: ['Eleusine (ragi)', 'Mijo perla (bajra)'],
    color: 'text-purple-500',
  },
  {
    icon: Wheat,
    title: 'Alternativa sin gluten',
    description:
      'Todos los mijos son naturalmente sin gluten, a diferencia del trigo, la cebada y el centeno. Constituyen una alternativa segura y nutritiva para las personas con enfermedad celíaca o intolerancia al gluten, avalada por las asociaciones de celíacos de España y Latinoamérica.',
    millets: ['Todos los mijos'],
    color: 'text-green-500',
  },
];

const nutritionFacts = [
  { label: 'Proteínas', value: '7 a 12,5 g / 100 g', note: 'Comparable al trigo integral' },
  { label: 'Fibra', value: '8 a 12,5 g / 100 g', note: '20 veces más que el arroz blanco' },
  { label: 'Calcio', value: 'Hasta 344 mg / 100 g', note: 'Eleusine: 3 veces la leche' },
  { label: 'Hierro', value: 'Hasta 4,4 mg / 100 g', note: 'Sorgo: cubre el 25 % de la IDR' },
  { label: 'Magnesio', value: 'Hasta 242 mg / 100 g', note: 'Mijo perla: 60 % de la IDR' },
  { label: 'Índice glucémico', value: '54 a 68', note: 'Bajo a moderado vs 73 del arroz blanco' },
];

export default async function NutricionYSaludPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang) || lang !== 'es') notFound();

  const locale: Locale = lang;

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-6">
          Nutrición y salud de los mijos
        </h1>

        <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-10">
          <p>
            Los mijos son reconocidos por la Organización Mundial de la Salud (OMS), la AESAN y la FAO
            como cereales de alto valor nutricional. Esta página sintetiza los datos científicos
            más recientes sobre sus beneficios para la salud, extraídos de estudios clínicos y de
            bases de datos nutricionales de referencia como BEDCA.
          </p>
        </div>

        <MedicalDisclaimer locale={locale} />

        {/* Key Nutrition Facts */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Cifras clave
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
            Beneficios para la salud
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
                    <strong>Mijos destacados:</strong> {benefit.millets.join(', ')}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* AESAN / OMS Recommendations */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Recomendaciones de las autoridades sanitarias
          </h2>
          <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6 md:p-8 max-w-3xl">
            <p className="text-earth-700 dark:text-earth-300 leading-relaxed mb-4">
              La AESAN (Agencia Española de Seguridad Alimentaria y Nutrición) recomienda consumir
              cereales integrales en cada comida. Los mijos, naturalmente integrales y ricos en fibra,
              encajan perfectamente en esta recomendación.
            </p>
            <ul className="space-y-2 text-earth-700 dark:text-earth-300">
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>AESAN:</strong> aumentar la proporción de cereales integrales en la alimentación diaria</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>OMS:</strong> diversificar las fuentes de cereales para mejorar el aporte de micronutrientes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>FAO:</strong> los mijos son &laquo;alimentos inteligentes&raquo; para la seguridad alimentaria y nutricional</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Links to related pages */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Para saber más
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href={localePath(locale, '/nutrition')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Comparación nutricional
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                Tablas y gráficos comparativos de los 9 mijos con el arroz y el trigo
              </p>
            </Link>
            <Link
              href={localePath(locale, '/mijo-vs-quinoa')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Mijo vs Quinoa
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                Comparación nutricional, medioambiental y económica
              </p>
            </Link>
          </div>
        </section>

        {/* Sources */}
        <section className="border-t border-earth-200 dark:border-earth-700 pt-8">
          <h2 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            Fuentes y referencias
          </h2>
          <ul className="space-y-2 text-sm text-earth-700 dark:text-earth-300">
            <li>BEDCA &mdash; Base de Datos Española de Composición de Alimentos (2024)</li>
            <li>USDA FoodData Central &mdash; U.S. Department of Agriculture (2019)</li>
            <li>Saleh ASM et al. &mdash; &laquo;Millet grains: nutritional quality, processing, and potential health benefits&raquo;, Comprehensive Reviews in Food Science and Food Safety (2013)</li>
            <li>Devi PB et al. &mdash; &laquo;Health benefits of finger millet polyphenols and dietary fiber&raquo;, Journal of Food Science and Technology (2014)</li>
            <li>Kam J et al. &mdash; &laquo;Dietary interventions for type 2 diabetes: how millet comes to help&raquo;, Frontiers in Plant Science (2016)</li>
            <li>FAO &mdash; Sorghum and millets in human nutrition, Food and Nutrition Series No. 27 (1995)</li>
          </ul>
        </section>
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6 mt-10">
          <p className="text-xs text-warm-gray dark:text-earth-400 leading-relaxed max-w-3xl">
            <strong>Aviso:</strong> La información presentada en esta página se ofrece únicamente con
            fines informativos. No constituye consejo médico. Consulte a un profesional de la salud
            cualificado antes de modificar su alimentación.
          </p>
        </div>
      </div>
    </main>
  );
}
