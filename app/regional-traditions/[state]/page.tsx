import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Utensils, Calendar, BookOpen, Sprout } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Sidebar from '@/components/layout/Sidebar';
import Badge from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import {
  regionalTraditions,
  getRegionalTraditionBySlug,
} from '@/data/regional-traditions';

// ---------------------------------------------------------------------------
// Static Params & Metadata
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return regionalTraditions.map((t) => ({ state: t.slug }));
}

interface PageProps {
  params: Promise<{ state: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state } = await params;
  const tradition = getRegionalTraditionBySlug(state);
  if (!tradition) {
    return { title: 'Tradition Not Found' };
  }
  return {
    title: `${tradition.state} Millet Traditions | Millets Info`,
    description: `${tradition.tagline} Explore the iconic millet dishes, festivals, and cultural practices of ${tradition.state}.`,
  };
}

// ---------------------------------------------------------------------------
// Sidebar sections
// ---------------------------------------------------------------------------

const sidebarSections = [
  { id: 'overview', title: 'Overview' },
  { id: 'dishes', title: 'Iconic Dishes' },
  { id: 'festivals', title: 'Festivals' },
  { id: 'practices', title: 'Traditional Practices' },
  { id: 'related-millets', title: 'Related Millets' },
];

// ---------------------------------------------------------------------------
// Region badge variant helper
// ---------------------------------------------------------------------------

const regionBadgeVariant: Record<string, 'green' | 'orange' | 'blue' | 'red' | 'default'> = {
  'South India': 'green',
  'Western India': 'orange',
  'Northern India': 'blue',
  'Eastern India': 'red',
  'Northeast India': 'default',
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function RegionalTraditionDetailPage({ params }: PageProps) {
  const { state } = await params;
  const tradition = getRegionalTraditionBySlug(state);

  if (!tradition) {
    notFound();
  }

  return (
    <>
      <Breadcrumb />

      {/* Hero Area */}
      <header className="content-wrapper pt-4 pb-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <Badge variant={regionBadgeVariant[tradition.region] || 'default'}>
            {tradition.region}
          </Badge>
          <Badge variant="default" size="sm">
            {tradition.iconicDishes.length} Iconic Dishes
          </Badge>
        </div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-100 mb-2">
          {tradition.state}
        </h1>
        <p className="text-lg italic text-earth-400 mb-4">
          {tradition.tagline}
        </p>
      </header>

      {/* Two-column layout */}
      <div className="content-wrapper flex gap-10 pb-16">
        {/* Main Content */}
        <div className="flex-1 min-w-0 space-y-14">
          {/* ===== Overview ===== */}
          <section id="overview">
            <h2 className="font-heading text-2xl font-bold text-earth-100 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-earth-400" />
              Overview
            </h2>
            <p className="text-earth-300 leading-relaxed mb-6">
              {tradition.description}
            </p>

            {/* Cultural Significance */}
            <Card variant="outlined">
              <CardBody>
                <h3 className="font-heading text-lg font-semibold text-earth-100 mb-3">
                  Cultural Significance
                </h3>
                <p className="text-sm text-earth-300 leading-relaxed">
                  {tradition.culturalSignificance}
                </p>
              </CardBody>
            </Card>

            {/* Quote / Saying */}
            {tradition.famousQuoteOrSaying && (
              <blockquote className="mt-6 border-l-4 border-earth-500 pl-4 py-2">
                <p className="text-earth-300 italic leading-relaxed">
                  {tradition.famousQuoteOrSaying}
                </p>
              </blockquote>
            )}
          </section>

          {/* ===== Iconic Dishes ===== */}
          <section id="dishes">
            <h2 className="font-heading text-2xl font-bold text-earth-100 mb-4 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-earth-400" />
              Iconic Dishes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tradition.iconicDishes.map((dish, index) => (
                <Card key={index} variant="outlined">
                  <CardBody>
                    <h3 className="font-heading text-base font-bold text-earth-100 mb-1">
                      {dish.name}
                    </h3>
                    <Badge variant="default" size="sm" className="mb-3">
                      {dish.millet}
                    </Badge>
                    <p className="text-sm text-earth-300 leading-relaxed">
                      {dish.description}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>

          {/* ===== Festivals ===== */}
          <section id="festivals">
            <h2 className="font-heading text-2xl font-bold text-earth-100 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-earth-400" />
              Festivals &amp; Millet Connections
            </h2>
            <div className="space-y-4">
              {tradition.festivals.map((festival, index) => (
                <Card key={index} variant="outlined">
                  <CardBody>
                    <h3 className="font-heading text-base font-bold text-earth-100 mb-2">
                      {festival.name}
                    </h3>
                    <p className="text-sm text-earth-300 leading-relaxed mb-3">
                      {festival.description}
                    </p>
                    <div className="bg-earth-800 rounded-lg p-3">
                      <p className="text-xs text-earth-400 uppercase tracking-wider font-semibold mb-1">
                        Millet Connection
                      </p>
                      <p className="text-sm text-earth-300 leading-relaxed">
                        {festival.milletConnection}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>

          {/* ===== Traditional Practices ===== */}
          <section id="practices">
            <h2 className="font-heading text-2xl font-bold text-earth-100 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-earth-400" />
              Traditional Practices
            </h2>
            <Card variant="outlined">
              <CardBody>
                <ol className="space-y-3">
                  {tradition.traditionalPractices.map((practice, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-earth-300 leading-relaxed"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-earth-700 text-earth-200 flex items-center justify-center text-xs font-bold mt-0.5">
                        {index + 1}
                      </span>
                      <span>{practice}</span>
                    </li>
                  ))}
                </ol>
              </CardBody>
            </Card>
          </section>

          {/* ===== Related Millets ===== */}
          <section id="related-millets">
            <h2 className="font-heading text-2xl font-bold text-earth-100 mb-4 flex items-center gap-2">
              <Sprout className="w-5 h-5 text-earth-400" />
              Primary Millets
            </h2>
            <div className="flex flex-wrap gap-3">
              {tradition.primaryMillets.map((milletSlug) => {
                const milletName = milletSlug
                  .split('-')
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(' ');
                return (
                  <Link key={milletSlug} href={`/millets/${milletSlug}`}>
                    <Badge
                      variant="green"
                      size="md"
                      className="hover:opacity-80 transition-opacity cursor-pointer"
                    >
                      {milletName}
                    </Badge>
                  </Link>
                );
              })}
            </div>
            <p className="text-xs text-earth-500 mt-3">
              Click any millet to explore its nutrition, recipes, and detailed profile.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <Sidebar sections={sidebarSections} />
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-700 pt-6 mt-10">
          <p className="text-xs text-earth-500 leading-relaxed max-w-3xl">
            <strong>Disclaimer:</strong> This content is created with the assistance of AI and is intended for educational purposes only. While we strive for accuracy, information may contain errors or be incomplete. Always do your own research and consult qualified professionals (nutritionists, doctors, agricultural experts) before making decisions based on this content. This website does not provide medical, nutritional, or agricultural advice.
          </p>
        </div>
      </div>
    </>
  );
}
