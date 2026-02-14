import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Globe, Utensils, Clock, BookOpen, TrendingUp } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Sidebar from '@/components/layout/Sidebar';
import Badge from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import {
  globalMilletRegions,
  getGlobalMilletRegionBySlug,
} from '@/data/global-millets';

// ---------------------------------------------------------------------------
// Static Params & Metadata
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return globalMilletRegions.map((r) => ({ region: r.slug }));
}

interface PageProps {
  params: Promise<{ region: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region } = await params;
  const data = getGlobalMilletRegionBySlug(region);
  if (!data) {
    return { title: 'Region Not Found' };
  }
  return {
    title: `${data.region} — Millets Around the World | Millets Info`,
    description: `${data.tagline} Explore the millet heritage of ${data.region}, including iconic foods, history, and cultural significance.`,
  };
}

// ---------------------------------------------------------------------------
// Sidebar sections
// ---------------------------------------------------------------------------

const sidebarSections = [
  { id: 'overview', title: 'Overview' },
  { id: 'foods', title: 'Iconic Foods' },
  { id: 'history', title: 'History' },
  { id: 'culture', title: 'Cultural Significance' },
  { id: 'modern-status', title: 'Modern Status' },
];

// ---------------------------------------------------------------------------
// Continent badge variant helper
// ---------------------------------------------------------------------------

const continentBadgeVariant: Record<string, 'green' | 'orange' | 'blue' | 'red' | 'default'> = {
  Africa: 'orange',
  Asia: 'green',
  'Asia/Europe': 'blue',
  Europe: 'red',
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function GlobalMilletRegionDetailPage({ params }: PageProps) {
  const { region } = await params;
  const data = getGlobalMilletRegionBySlug(region);

  if (!data) {
    notFound();
  }

  return (
    <>
      <Breadcrumb />

      {/* Hero Area */}
      <header className="content-wrapper pt-4 pb-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <Badge variant={continentBadgeVariant[data.continent] || 'default'}>
            {data.continent}
          </Badge>
          <Badge variant="default" size="sm">
            {data.countries.length}{' '}
            {data.countries.length === 1 ? 'Country' : 'Countries'}
          </Badge>
        </div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-100 mb-2">
          {data.region}
        </h1>
        <p className="text-lg italic text-earth-400 mb-3">
          {data.tagline}
        </p>
        <p className="text-sm text-earth-400">
          <span className="font-medium text-earth-300">Countries:</span>{' '}
          {data.countries.join(', ')}
        </p>
      </header>

      {/* Two-column layout */}
      <div className="content-wrapper flex gap-10 pb-16">
        {/* Main Content */}
        <div className="flex-1 min-w-0 space-y-14">
          {/* ===== Overview ===== */}
          <section id="overview">
            <h2 className="font-heading text-2xl font-bold text-earth-100 mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-earth-400" />
              Overview
            </h2>
            <p className="text-earth-300 leading-relaxed mb-6">
              {data.description}
            </p>

            {/* Key Fact Card */}
            <Card variant="outlined">
              <CardBody>
                <p className="text-xs text-earth-400 uppercase tracking-wider font-semibold mb-2">
                  Key Fact
                </p>
                <p className="text-sm text-earth-200 leading-relaxed font-medium">
                  {data.keyFact}
                </p>
              </CardBody>
            </Card>

            {/* Primary Millets */}
            <div className="mt-6">
              <p className="text-xs text-earth-400 uppercase tracking-wider font-semibold mb-2">
                Primary Millets
              </p>
              <div className="flex flex-wrap gap-2">
                {data.primaryMillets.map((millet) => (
                  <Badge key={millet} variant="green" size="sm">
                    {millet}
                  </Badge>
                ))}
              </div>
            </div>
          </section>

          {/* ===== Iconic Foods ===== */}
          <section id="foods">
            <h2 className="font-heading text-2xl font-bold text-earth-100 mb-4 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-earth-400" />
              Iconic Foods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.iconicFoods.map((food, index) => (
                <Card key={index} variant="outlined">
                  <CardBody>
                    <h3 className="font-heading text-base font-bold text-earth-100 mb-1">
                      {food.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="blue" size="sm">
                        {food.country}
                      </Badge>
                      <Badge variant="default" size="sm">
                        {food.millet}
                      </Badge>
                    </div>
                    <p className="text-sm text-earth-300 leading-relaxed">
                      {food.description}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>

          {/* ===== Historical Highlights ===== */}
          <section id="history">
            <h2 className="font-heading text-2xl font-bold text-earth-100 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-earth-400" />
              Historical Highlights
            </h2>
            <div className="space-y-4">
              {data.historicalHighlights.map((highlight, index) => (
                <Card key={index} variant="outlined">
                  <CardBody>
                    <div className="flex items-start gap-4">
                      {/* Timeline indicator */}
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-earth-500 mt-1" />
                        {index < data.historicalHighlights.length - 1 && (
                          <div className="w-0.5 flex-1 bg-earth-700 mt-1" />
                        )}
                      </div>
                      <div>
                        <Badge variant="default" size="sm" className="mb-2">
                          {highlight.period}
                        </Badge>
                        <h3 className="font-heading text-base font-bold text-earth-100 mb-2">
                          {highlight.title}
                        </h3>
                        <p className="text-sm text-earth-300 leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>

          {/* ===== Cultural Significance ===== */}
          <section id="culture">
            <h2 className="font-heading text-2xl font-bold text-earth-100 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-earth-400" />
              Cultural Significance
            </h2>
            <Card variant="outlined">
              <CardBody>
                <p className="text-sm text-earth-300 leading-relaxed">
                  {data.culturalSignificance}
                </p>
              </CardBody>
            </Card>
          </section>

          {/* ===== Modern Status ===== */}
          <section id="modern-status">
            <h2 className="font-heading text-2xl font-bold text-earth-100 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-earth-400" />
              Modern Status
            </h2>
            <Card variant="outlined">
              <CardBody>
                <p className="text-sm text-earth-300 leading-relaxed">
                  {data.modernStatus}
                </p>
              </CardBody>
            </Card>
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
