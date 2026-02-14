import type { Metadata } from 'next';
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
import FeaturedRecipes from '@/components/sections/FeaturedRecipes';
import MilletQuiz from '@/components/ui/MilletQuiz';
import { Card, CardBody } from '@/components/ui/Card';
import { millets } from '@/data/millets';
import { recipes } from '@/data/recipes';

export const metadata: Metadata = {
  title: 'Millets Guide - Ancient Grains, Timeless Nourishment',
  description:
    'Discover the world of millets — nutrient-dense, gluten-free ancient grains cultivated for over 5,000 years. Explore nutrition, recipes, Ayurveda, and more.',
};

const benefits = [
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: 'Nutrient Dense',
    description:
      'Millets are rich in protein, fiber, iron, calcium, and B-vitamins. Many millets surpass rice and wheat in key micronutrients.',
  },
  {
    icon: <Wheat className="w-8 h-8" />,
    title: 'Gluten Free',
    description:
      'All millets are naturally gluten-free, making them a safe and nutritious staple for people with celiac disease or gluten sensitivity.',
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: 'Low Glycemic Index',
    description:
      'Most millets have a low to medium glycemic index, leading to slower glucose release and better blood sugar management.',
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: 'Climate Resilient',
    description:
      'Millets thrive in arid and semi-arid conditions, requiring 70% less water than rice. They grow in poor soils where other crops fail.',
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: 'Sustainable',
    description:
      'With a low carbon footprint, short growing cycles, and minimal input requirements, millets are among the most sustainable grains on Earth.',
  },
];

export default function HomePage() {
  const featuredRecipes = recipes.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Ancient Grains. Timeless Nourishment."
        subtitle="Millets have been cultivated for over 5,000 years across Asia and Africa. These small-seeded, nutrient-dense grains are the original superfoods — gluten-free, drought-resistant, and packed with minerals. Rediscover what our ancestors always knew."
        ctaButtons={[
          { label: 'Explore Millets', href: '/millets', variant: 'primary' },
          { label: 'Browse Recipes', href: '/recipes', variant: 'secondary' },
        ]}
      />

      {/* What Are Millets Section */}
      <section className="section-padding">
        <div className="content-wrapper">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            What Are Millets?
          </h2>
          <div className="max-w-3xl space-y-4 text-earth-600 dark:text-earth-300 leading-relaxed">
            <p>
              Millets are a group of small-seeded grasses belonging to the family{' '}
              <em>Poaceae</em>. They are among the oldest cultivated crops in the
              world, with archaeological evidence dating their domestication to
              around 3000 BCE in East Asia and the Indian subcontinent. Unlike
              wheat and rice, millets are hardy, drought-tolerant crops that
              thrive in arid and semi-arid regions with poor soil conditions.
            </p>
            <p>
              In India, millets have been a dietary staple for millennia. The
              Government of India officially renamed millets as{' '}
              <strong>&quot;Nutri-Cereals&quot;</strong> in 2018, recognizing their
              superior nutritional profile. India is the world&apos;s largest
              producer of millets, accounting for about 20% of global
              production.
            </p>
            <p>
              There are nine major varieties commonly grown and consumed in India:
              Sorghum (Jowar), Pearl Millet (Bajra), Finger Millet (Ragi),
              Foxtail Millet, Little Millet, Kodo Millet, Barnyard Millet,
              Proso Millet, and Browntop Millet. Each has a unique nutritional
              profile, flavor, and culinary tradition.
            </p>
          </div>
        </div>
      </section>

      {/* Millet Grid Section */}
      <section className="section-padding bg-earth-100/30 dark:bg-earth-900/30">
        <div className="content-wrapper">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-earth-800 dark:text-earth-100 mb-3">
              Explore All 9 Millets
            </h2>
            <p className="text-earth-600 dark:text-earth-300 max-w-2xl mx-auto">
              Click on any millet to discover its nutrition, recipes, Ayurvedic
              properties, cooking methods, and more.
            </p>
          </div>
          <MilletGrid millets={millets} columns={3} />
        </div>
      </section>

      {/* Why Millets Section */}
      <section className="section-padding">
        <div className="content-wrapper">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-earth-800 dark:text-earth-100 mb-3">
              Why Millets?
            </h2>
            <p className="text-earth-600 dark:text-earth-300 max-w-2xl mx-auto">
              From personal health to planetary sustainability, millets offer
              benefits that few other grains can match.
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
              Which Millet Should You Try?
            </h2>
            <p className="text-earth-600 dark:text-earth-300 max-w-2xl mx-auto">
              Answer a few questions and we&apos;ll recommend the perfect millet for you.
            </p>
          </div>
          <MilletQuiz />
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section>
        <FeaturedRecipes recipes={featuredRecipes} title="Try These Recipes" />
      </section>

      {/* Call to Action Section */}
      <section className="section-padding">
        <div className="content-wrapper">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Sprout className="w-10 h-10 text-forest-500 mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              Start Your Millet Journey
            </h2>
            <p className="text-earth-600 dark:text-earth-300 leading-relaxed">
              Whether you are looking to cook your first millet meal or compare
              their nutritional profiles, we have you covered with verified,
              sourced information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/cooking-guide" className="group">
              <Card variant="outlined" className="h-full transition-shadow hover:shadow-elevated">
                <CardBody className="text-center">
                  <UtensilsCrossed className="w-8 h-8 text-earth-400 mx-auto mb-3 group-hover:text-forest-600 transition-colors" />
                  <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                    Cooking Guide
                  </h3>
                  <p className="text-sm text-earth-600 dark:text-earth-300">
                    Learn water ratios, soaking times, and tips for cooking every millet perfectly.
                  </p>
                </CardBody>
              </Card>
            </Link>

            <Link href="/nutrition" className="group">
              <Card variant="outlined" className="h-full transition-shadow hover:shadow-elevated">
                <CardBody className="text-center">
                  <BarChart3 className="w-8 h-8 text-earth-400 mx-auto mb-3 group-hover:text-forest-600 transition-colors" />
                  <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                    Nutrition Comparison
                  </h3>
                  <p className="text-sm text-earth-600 dark:text-earth-300">
                    Compare millets side by side on protein, calcium, iron, fiber, and more.
                  </p>
                </CardBody>
              </Card>
            </Link>

            <Link href="/about" className="group">
              <Card variant="outlined" className="h-full transition-shadow hover:shadow-elevated">
                <CardBody className="text-center">
                  <BookOpen className="w-8 h-8 text-earth-400 mx-auto mb-3 group-hover:text-forest-600 transition-colors" />
                  <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                    Learn More
                  </h3>
                  <p className="text-sm text-earth-600 dark:text-earth-300">
                    Understand millet classification, history, and why the UN declared 2023 the International Year of Millets.
                  </p>
                </CardBody>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-700 pt-6 mt-10">
          <p className="text-xs text-earth-400 leading-relaxed max-w-3xl">
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
