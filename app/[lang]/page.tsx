import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  Wheat,
  HeartPulse,
  Droplets,
  Gauge,
  Leaf,
  Sprout,
  BookOpen,
  UtensilsCrossed,
  BarChart3,
} from 'lucide-react';
import Hero from '@/components/sections/Hero';
import MilletGrid from '@/components/sections/MilletGrid';
import { Card, CardBody } from '@/components/ui/Card';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { localePath, getTranslations, isValidLocale } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { getMillets, getRecipes } from '@/lib/i18n-data';

// Lazy load below-fold interactive components to reduce initial JS bundle
const FeaturedRecipes = dynamic(() => import('@/components/sections/FeaturedRecipes'));
const MilletQuiz = dynamic(() => import('@/components/ui/MilletQuiz'));

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'te' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'en';
  const t = getTranslations(locale);

  return {
    title: t.site.title,
    description: t.site.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'te': '/te',
        'x-default': '/en',
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'en';
  const t = getTranslations(locale);

  const allMillets = getMillets(locale);
  const allRecipes = getRecipes(locale);
  const featuredRecipes = allRecipes.slice(0, 6);

  const benefits = [
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: t.home.nutrientDense,
      description: t.home.nutrientDenseDesc,
    },
    {
      icon: <Wheat className="w-8 h-8" />,
      title: t.home.glutenFreeTitle,
      description: t.home.glutenFreeDesc,
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: t.home.lowGI,
      description: t.home.lowGIDesc,
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: t.home.climateResilient,
      description: t.home.climateResilientDesc,
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: t.home.sustainable,
      description: t.home.sustainableDesc,
    },
  ];

  return (
    <>
      <Breadcrumb locale={locale} />

      {/* Hero Section */}
      <Hero
        title={t.home.heroTitle}
        subtitle={t.home.heroSubtitle}
        ctaButtons={[
          { label: t.home.exploreMillets, href: localePath(locale, '/millets'), variant: 'primary' },
          { label: t.home.browseRecipes, href: localePath(locale, '/recipes'), variant: 'secondary' },
        ]}
      />

      {/* What Are Millets Section */}
      <section className="section-padding">
        <div className="content-wrapper">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            {t.home.whatAreMillets}
          </h2>
          <div className="max-w-3xl space-y-4 text-earth-600 dark:text-earth-300 leading-relaxed">
            <p>{t.home.whatAreMilletsP1}</p>
            <p>{t.home.whatAreMilletsP2}</p>
            <p>{t.home.whatAreMilletsP3}</p>
          </div>
        </div>
      </section>

      {/* Millet Grid Section */}
      <section className="section-padding bg-earth-100/30 dark:bg-earth-900/30">
        <div className="content-wrapper">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-earth-800 dark:text-earth-100 mb-3">
              {t.home.exploreAllMillets}
            </h2>
            <p className="text-earth-600 dark:text-earth-300 max-w-2xl mx-auto">
              {locale === 'en'
                ? 'Click on any millet to discover its nutrition, recipes, Ayurvedic properties, cooking methods, and more.'
                : 'ఏదైనా చిరుధాన్యంపై క్లిక్ చేసి దాని పోషణ, రెసిపీలు, ఆయుర్వేద గుణాలు, వంట పద్ధతులు మరియు మరిన్ని తెలుసుకోండి.'}
            </p>
          </div>
          <MilletGrid millets={allMillets} columns={3} />
        </div>
      </section>

      {/* Why Millets Section */}
      <section className="section-padding">
        <div className="content-wrapper">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-earth-800 dark:text-earth-100 mb-3">
              {t.home.whyMillets}
            </h2>
            <p className="text-earth-600 dark:text-earth-300 max-w-2xl mx-auto">
              {locale === 'en'
                ? 'From personal health to planetary sustainability, millets offer benefits that few other grains can match.'
                : 'వ్యక్తిగత ఆరోగ్యం నుండి భూగోళ సుస్థిరత వరకు, చిరుధాన్యాలు ఇతర ధాన్యాలు సరిపోలలేని ప్రయోజనాలను అందిస్తాయి.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} variant="outlined">
                <CardBody>
                  <div className="text-earth-500 dark:text-earth-400 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-earth-600 dark:text-earth-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Millet Quiz Section */}
      <section className="section-padding bg-earth-100/30 dark:bg-earth-900/30">
        <div className="content-wrapper">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-earth-800 dark:text-earth-100 mb-3">
              {t.home.whichMillet}
            </h2>
            <p className="text-earth-600 dark:text-earth-300 max-w-2xl mx-auto">
              {locale === 'en'
                ? "Answer a few questions and we'll recommend the perfect millet for you."
                : 'కొన్ని ప్రశ్నలకు సమాధానం ఇవ్వండి, మీకు సరైన చిరుధాన్యాన్ని సిఫార్సు చేస్తాం.'}
            </p>
          </div>
          <MilletQuiz locale={locale} />
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section>
        <FeaturedRecipes recipes={featuredRecipes} title={t.home.tryRecipes} />
      </section>

      {/* Call to Action Section */}
      <section className="section-padding">
        <div className="content-wrapper">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Sprout className="w-10 h-10 text-forest-500 mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              {t.home.startJourney}
            </h2>
            <p className="text-earth-600 dark:text-earth-300 leading-relaxed">
              {locale === 'en'
                ? 'Whether you are looking to cook your first millet meal or compare their nutritional profiles, we have you covered with verified, sourced information.'
                : 'మీరు మీ మొదటి చిరుధాన్యాల భోజనం వండాలనుకుంటున్నా లేదా వాటి పోషక విలువలను పోల్చాలనుకుంటున్నా, ధృవీకరించబడిన సమాచారంతో మీకు సహాయం చేస్తాం.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href={localePath(locale, '/cooking-guide')} className="group">
              <Card variant="outlined" className="h-full transition-shadow hover:shadow-elevated">
                <CardBody className="text-center">
                  <UtensilsCrossed className="w-8 h-8 text-earth-400 mx-auto mb-3 group-hover:text-forest-600 transition-colors" />
                  <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                    {t.home.cookingGuideTitle}
                  </h3>
                  <p className="text-sm text-earth-600 dark:text-earth-300">
                    {t.home.cookingGuideDesc}
                  </p>
                </CardBody>
              </Card>
            </Link>

            <Link href={localePath(locale, '/nutrition')} className="group">
              <Card variant="outlined" className="h-full transition-shadow hover:shadow-elevated">
                <CardBody className="text-center">
                  <BarChart3 className="w-8 h-8 text-earth-400 mx-auto mb-3 group-hover:text-forest-600 transition-colors" />
                  <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                    {t.home.nutritionTitle}
                  </h3>
                  <p className="text-sm text-earth-600 dark:text-earth-300">
                    {t.home.nutritionDesc}
                  </p>
                </CardBody>
              </Card>
            </Link>

            {locale === 'en' ? (
              <Link href={localePath(locale, '/about')} className="group">
                <Card variant="outlined" className="h-full transition-shadow hover:shadow-elevated">
                  <CardBody className="text-center">
                    <BookOpen className="w-8 h-8 text-earth-400 mx-auto mb-3 group-hover:text-forest-600 transition-colors" />
                    <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                      {t.home.learnMoreTitle}
                    </h3>
                    <p className="text-sm text-earth-600 dark:text-earth-300">
                      {t.home.learnMoreDesc}
                    </p>
                  </CardBody>
                </Card>
              </Link>
            ) : (
              <Link href={localePath(locale, '/history')} className="group">
                <Card variant="outlined" className="h-full transition-shadow hover:shadow-elevated">
                  <CardBody className="text-center">
                    <BookOpen className="w-8 h-8 text-earth-400 mx-auto mb-3 group-hover:text-forest-600 transition-colors" />
                    <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                      {t.home.learnMoreTitle}
                    </h3>
                    <p className="text-sm text-earth-600 dark:text-earth-300">
                      {t.home.learnMoreDesc}
                    </p>
                  </CardBody>
                </Card>
              </Link>
            )}
          </div>
        </div>
      </section>

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
