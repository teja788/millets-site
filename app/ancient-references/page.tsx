import type { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Card, CardBody } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { ancientReferences } from '@/data/ancient-references';

export const metadata: Metadata = {
  title: 'Ancient References to Millets | Millets Guide',
  description:
    'Literary and archaeological evidence of millets in ancient texts from around the world.',
};

export default function AncientReferencesPage() {
  return (
    <main>
      <Breadcrumb />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-100 mb-6">
          Millets in Ancient Texts &amp; Traditions
        </h1>

        {/* Intro */}
        <div className="max-w-3xl space-y-4 text-earth-200 leading-relaxed mb-12">
          <p>
            Millets are among the oldest cultivated crops in human history, with archaeological
            evidence of domestication stretching back 8,000-10,000 years in both China and
            Africa. Far from being forgotten crops, millets were documented extensively in the
            sacred hymns of the Vedas, the poetry of ancient Tamil Sangam literature, the oracle
            bone inscriptions of Shang Dynasty China, the agricultural treatises of Rome, and the
            scriptures of the Hebrew Bible. These references reveal that millets were not merely
            survival food but were woven into the religious, cultural, literary, and economic
            fabric of civilizations across the ancient world.
          </p>
        </div>

        {/* Timeline-style Cards */}
        <div className="space-y-6 max-w-4xl">
          {ancientReferences.map((ref) => (
            <Card key={ref.id} variant="outlined">
              <CardBody>
                {/* Header: Text name, period, language */}
                <div className="flex flex-wrap items-start gap-3 mb-4">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <BookOpen className="w-5 h-5 text-earth-400 flex-shrink-0" />
                    <h2 className="font-heading text-xl font-bold text-earth-100">
                      {ref.text}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Badge variant="orange" size="sm">
                      {ref.period}
                    </Badge>
                    <Badge variant="default" size="sm">
                      {ref.language}
                    </Badge>
                  </div>
                </div>

                {/* Original Quote (if exists) */}
                {ref.originalQuote && (
                  <blockquote className="border-l-4 border-earth-600 pl-4 italic text-earth-300 my-3">
                    &ldquo;{ref.originalQuote}&rdquo;
                  </blockquote>
                )}

                {/* Translation */}
                <p className="text-earth-200 text-sm leading-relaxed mb-4">
                  {ref.translation}
                </p>

                {/* Millet Mentioned */}
                <div className="flex items-start gap-2 mb-4">
                  <span className="text-sm font-semibold text-earth-300 whitespace-nowrap">
                    Millet Mentioned:
                  </span>
                  <span className="text-sm text-earth-100 font-medium">
                    {ref.milletMentioned}
                  </span>
                </div>

                {/* Significance */}
                <div className="bg-earth-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-earth-300 uppercase tracking-wider mb-1">
                    Significance
                  </h3>
                  <p className="text-earth-200 text-sm leading-relaxed">
                    {ref.significance}
                  </p>
                </div>

                {/* Source */}
                <p className="text-xs text-earth-400 italic mt-3">
                  Source: {ref.source}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-700 pt-6 mt-10">
          <p className="text-xs text-earth-400 leading-relaxed max-w-3xl">
            <strong>Disclaimer:</strong> This content is created with the assistance of AI and is intended for educational purposes only. While we strive for accuracy, information may contain errors or be incomplete. Always do your own research and consult qualified professionals (nutritionists, doctors, agricultural experts) before making decisions based on this content. This website does not provide medical, nutritional, or agricultural advice.
          </p>
        </div>
      </div>
    </main>
  );
}
