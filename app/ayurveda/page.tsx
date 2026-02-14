import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import TestimonialOrQuote from '@/components/sections/TestimonialOrQuote';
import SourceCitation from '@/components/ui/SourceCitation';
import Badge from '@/components/ui/Badge';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from '@/components/ui/Table';
import { ayurvedaPageData } from '@/data/ayurveda';
import { getMilletBySlug } from '@/data/millets';
import { sources } from '@/data/sources';

export const metadata: Metadata = {
  title: 'Millets in Ayurveda | Millets Info',
  description:
    'Explore the Ayurvedic classification of millets as Trina Dhanya, dosha-specific recommendations, seasonal eating guidelines (Ritucharya), and traditional preparation methods.',
};

const doshaColors: Record<string, string> = {
  Vata: 'bg-blue-900/30 border-blue-700',
  Pitta: 'bg-red-900/30 border-red-700',
  Kapha: 'bg-green-900/30 border-green-700',
};

const doshaBadgeVariant: Record<string, 'blue' | 'red' | 'green'> = {
  Vata: 'blue',
  Pitta: 'red',
  Kapha: 'green',
};

function MilletLink({ slug }: { slug: string }) {
  const millet = getMilletBySlug(slug);
  if (!millet) return <span className="text-earth-400">{slug}</span>;
  return (
    <Link
      href={`/millets/${millet.slug}`}
      className="text-earth-300 hover:text-earth-100 underline underline-offset-2 transition-colors"
    >
      {millet.name}
    </Link>
  );
}

const relevantSourceKeys = [
  'charaka-samhita',
  'sushruta-samhita',
  'bhavaprakasha',
  'ashtanga-hridaya',
  'ayurveda-mahodadhi',
];

export default function AyurvedaPage() {
  const relevantSources = sources.filter((s) => relevantSourceKeys.includes(s.key));

  return (
    <main>
      <Breadcrumb />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-100 mb-6">
          Millets in Ayurveda
        </h1>

        {/* Intro Section */}
        <div className="max-w-3xl space-y-4 text-earth-200 leading-relaxed mb-10">
          <p>{ayurvedaPageData.generalClassification}</p>
        </div>

        {/* Classical Quote */}
        <TestimonialOrQuote
          quote="Trina Dhanya (grass grains) are Laghu (light), Ruksha (dry), and Kashaya (astringent). They pacify Kapha and Meda (fat tissue), kindle Agni (digestive fire), and are beneficial in conditions of Ama (metabolic toxins)."
          attribution="Charaka Samhita, Sutra Sthana"
          source="Chapter 27 - Annapanavidhi Adhyaya (Classification of Food and Drink)"
          className="mb-12"
        />

        {/* Dosha Guide */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-100 mb-6">
            Dosha Guide
          </h2>
          <div className="space-y-8">
            {ayurvedaPageData.doshaGuide.map((guide) => (
              <div
                key={guide.dosha}
                className={`rounded-xl border-2 p-6 md:p-8 ${doshaColors[guide.dosha] || 'bg-earth-800 border-earth-200'}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant={doshaBadgeVariant[guide.dosha] || 'default'} size="md">
                    {guide.dosha}
                  </Badge>
                  <h3 className="font-heading text-xl font-bold text-earth-100">
                    {guide.dosha} Dosha
                  </h3>
                </div>

                <p className="text-earth-200 leading-relaxed mb-6">{guide.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Recommended */}
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-green-400 mb-2 text-sm uppercase tracking-wide">
                      Recommended
                    </h4>
                    <ul className="space-y-1">
                      {guide.recommended.map((slug) => (
                        <li key={slug}>
                          <MilletLink slug={slug} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Moderate */}
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-400 mb-2 text-sm uppercase tracking-wide">
                      In Moderation
                    </h4>
                    {guide.moderate.length > 0 ? (
                      <ul className="space-y-1">
                        {guide.moderate.map((slug) => (
                          <li key={slug}>
                            <MilletLink slug={slug} />
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-earth-400 text-sm italic">None specified</p>
                    )}
                  </div>

                  {/* Avoid */}
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-red-400 mb-2 text-sm uppercase tracking-wide">
                      Limit or Avoid
                    </h4>
                    {guide.avoid.length > 0 ? (
                      <ul className="space-y-1">
                        {guide.avoid.map((slug) => (
                          <li key={slug}>
                            <MilletLink slug={slug} />
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-earth-400 text-sm italic">None -- most millets are suitable</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seasonal Eating (Ritucharya) */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-100 mb-6">
            Seasonal Eating (Ritucharya)
          </h2>
          <p className="text-earth-200 leading-relaxed mb-6 max-w-3xl">
            Ayurveda emphasizes aligning diet with the seasons (Ritucharya) to maintain doshic
            balance. Different millets are recommended during different seasons based on their
            inherent properties.
          </p>

          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Season</TableHeaderCell>
                <TableHeaderCell>Months</TableHeaderCell>
                <TableHeaderCell>Recommended Millets</TableHeaderCell>
                <TableHeaderCell className="hidden md:table-cell">Reasoning</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ayurvedaPageData.seasonalGuide.map((season) => (
                <TableRow key={season.season}>
                  <TableCell className="font-medium whitespace-nowrap">
                    {season.season}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-sm">
                    {season.months}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {season.recommended.map((slug) => {
                        const millet = getMilletBySlug(slug);
                        return millet ? (
                          <Link
                            key={slug}
                            href={`/millets/${millet.slug}`}
                            className="text-sm text-earth-300 hover:text-earth-100 underline underline-offset-2"
                          >
                            {millet.name}
                          </Link>
                        ) : null;
                      })}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-sm leading-relaxed">
                    {season.reasoning}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Mobile: Show reasoning below each season as expandable cards */}
          <div className="md:hidden mt-6 space-y-4">
            {ayurvedaPageData.seasonalGuide.map((season) => (
              <div key={season.season} className="bg-earth-800 rounded-lg p-4">
                <h4 className="font-semibold text-earth-100 mb-1">{season.season}</h4>
                <p className="text-sm text-earth-300 leading-relaxed">{season.reasoning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Preparation Methods */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-100 mb-6">
            How Ayurveda Recommends Preparing Millets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-100 mb-2">
                Soaking (Bhavana)
              </h3>
              <p className="text-earth-300 leading-relaxed text-sm">
                Soaking millets for 6-8 hours before cooking enhances digestibility and reduces
                Guru (heavy) quality. This is especially recommended for Vata types, as soaked
                grains become easier on the digestive system. Soaking also helps reduce
                anti-nutritional factors like phytic acid.
              </p>
            </div>

            <div className="bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-100 mb-2">
                Cooking with Ghee (Sneha Paka)
              </h3>
              <p className="text-earth-300 leading-relaxed text-sm">
                Ayurveda strongly recommends cooking millets with ghee (clarified butter). Ghee
                counterbalances the inherently Ruksha (dry) quality of millets, making them more
                nourishing and less Vata-aggravating. Even a teaspoon of ghee transforms the
                doshic effect of millet preparations.
              </p>
            </div>

            <div className="bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-100 mb-2">
                Adding Digestive Spices (Deepana Dravya)
              </h3>
              <p className="text-earth-300 leading-relaxed text-sm">
                Spices like cumin (Jeeraka), ginger (Shunthi), black pepper (Maricha), ajwain
                (Yavani), and asafoetida (Hingu) are traditionally added to millet dishes. These
                Deepana (appetite-stimulating) and Pachana (digestive) spices kindle Agni and
                ensure the nutrients from millets are properly assimilated.
              </p>
            </div>

            <div className="bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-100 mb-2">
                Fermentation (Sandhaniya)
              </h3>
              <p className="text-earth-300 leading-relaxed text-sm">
                Fermented millet preparations like dosa and idli batter, ambali (fermented
                porridge), and koozh (fermented drink) are valued in Ayurveda. Fermentation
                increases the Laghu (light) quality, enhances bioavailability of minerals, and
                creates beneficial probiotics that support Agni and gut health.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-12">
          <div className="bg-orange-900/30 border-2 border-orange-700 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading text-lg font-bold text-orange-300 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-orange-200 leading-relaxed">
                  {ayurvedaPageData.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sources */}
        <section className="border-t border-earth-700 pt-8">
          <h2 className="font-heading text-xl font-bold text-earth-100 mb-4">
            Sources &amp; References
          </h2>
          <ol className="space-y-3 list-decimal list-inside">
            {relevantSources.map((source) => (
              <SourceCitation key={source.key} source={source} />
            ))}
          </ol>
        </section>
      </div>

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
    </main>
  );
}
