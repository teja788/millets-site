import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Card, CardBody } from '@/components/ui/Card';
import SourceCitation from '@/components/ui/SourceCitation';
import { sources } from '@/data/sources';

export const metadata: Metadata = {
  title: 'About Millets',
  description:
    'Learn about millets — their botanical classification, the International Year of Millets 2023, India as the largest producer, and the mission behind this website.',
};

const keySources = sources.filter((s) =>
  [
    'icmr-nin-ifct-2017',
    'fao-millets-1995',
    'un-iym-2023',
    'india-nutri-cereals',
    'icrisat-millets',
    'saleh-2013',
    'gopalan-nutritive-values',
  ].includes(s.key)
);

export default function AboutPage() {
  return (
    <>
      <Breadcrumb />

      <div className="content-wrapper section-padding">
        {/* Page Title */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-8">
          About Millets
        </h1>

        <div className="max-w-3xl space-y-12">
          {/* What Are Millets */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              What Are Millets?
            </h2>
            <div className="space-y-4 text-earth-600 dark:text-earth-300 leading-relaxed">
              <p>
                Millets are a diverse group of small-seeded cereal grains
                belonging to the family <em>Poaceae</em>. Most cultivated millets
                belong to the tribe <em>Paniceae</em>, though Finger Millet
                (<em>Eleusine coracana</em>) belongs to the subfamily{' '}
                <em>Chloridoideae</em> and Sorghum (<em>Sorghum bicolor</em>)
                belongs to the tribe <em>Andropogoneae</em>.
              </p>
              <p>
                Millets are among the earliest domesticated crops. Archaeological
                evidence from sites like Cishan in northern China dates foxtail
                millet cultivation to approximately 8,000 years ago. In the Indian
                subcontinent, finger millet has been cultivated since at least
                3000 BCE, with evidence found at sites like Hallur in Karnataka.
              </p>
              <p>
                What makes millets remarkable is their ability to grow in marginal
                environments with poor soils and low rainfall, where crops like
                rice and wheat would fail. They are C4 plants (most millets),
                meaning they have a highly efficient photosynthetic pathway that
                allows them to thrive in hot, dry conditions.
              </p>
            </div>
          </section>

          {/* International Year of Millets */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              International Year of Millets 2023
            </h2>
            <div className="space-y-4 text-earth-600 dark:text-earth-300 leading-relaxed">
              <p>
                The United Nations General Assembly declared 2023 as the{' '}
                <strong>International Year of Millets (IYM 2023)</strong>. This
                resolution was proposed by India and supported by 72 nations,
                reflecting a growing global recognition of millets as a solution
                for food security, nutrition, and climate-resilient agriculture.
              </p>
              <p>
                The initiative aimed to raise awareness about the health benefits
                of millets, promote their sustainable production, and inspire
                research and development investments. IYM 2023 saw governments,
                international organizations, farmers, chefs, and consumers come
                together to put millets back on the plate.
              </p>
            </div>
          </section>

          {/* India as Largest Producer */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              India: The World&apos;s Largest Millet Producer
            </h2>
            <div className="space-y-4 text-earth-600 dark:text-earth-300 leading-relaxed">
              <p>
                India is the world&apos;s largest producer of millets, accounting
                for approximately 20% of global production and about 80% of
                Asia&apos;s millet output. The Government of India officially
                renamed millets as <strong>&quot;Nutri-Cereals&quot;</strong> in
                April 2018, through a gazette notification by the Ministry of
                Agriculture, recognizing their superior nutritional value compared
                to staple cereals like rice and wheat.
              </p>
              <p>
                Major millet-producing states include Rajasthan, Maharashtra,
                Karnataka, Andhra Pradesh, Tamil Nadu, Madhya Pradesh, Gujarat,
                and Uttarakhand. Each region has its own traditional millet
                varieties and culinary heritage.
              </p>
            </div>
          </section>

          {/* Classification */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              Major vs. Minor Millets
            </h2>
            <div className="space-y-4 text-earth-600 dark:text-earth-300 leading-relaxed">
              <p>
                Millets are broadly classified into two groups based on their
                grain size and commercial importance:
              </p>

              <Card variant="outlined">
                <CardBody>
                  <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                    Major Millets
                  </h3>
                  <p className="text-sm text-earth-600 dark:text-earth-300 mb-2">
                    These are the most widely cultivated and commercially
                    significant millets. They have larger grain sizes and higher
                    production volumes.
                  </p>
                  <ul className="list-disc list-inside text-sm text-earth-600 dark:text-earth-300 space-y-1">
                    <li>
                      <strong>Sorghum</strong> (<em>Sorghum bicolor</em>) — Jowar
                    </li>
                    <li>
                      <strong>Pearl Millet</strong> (<em>Pennisetum glaucum</em>)
                      — Bajra
                    </li>
                    <li>
                      <strong>Finger Millet</strong> (<em>Eleusine coracana</em>)
                      — Ragi
                    </li>
                  </ul>
                </CardBody>
              </Card>

              <Card variant="outlined">
                <CardBody>
                  <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                    Minor Millets
                  </h3>
                  <p className="text-sm text-earth-600 dark:text-earth-300 mb-2">
                    These are smaller-grained millets, traditionally cultivated as
                    subsistence crops. They are gaining renewed attention for their
                    exceptional nutritional profiles.
                  </p>
                  <ul className="list-disc list-inside text-sm text-earth-600 dark:text-earth-300 space-y-1">
                    <li>
                      <strong>Foxtail Millet</strong> (<em>Setaria italica</em>)
                    </li>
                    <li>
                      <strong>Little Millet</strong> (<em>Panicum sumatrense</em>)
                    </li>
                    <li>
                      <strong>Kodo Millet</strong> (<em>Paspalum scrobiculatum</em>)
                    </li>
                    <li>
                      <strong>Barnyard Millet</strong> (<em>Echinochloa frumentacea</em>)
                    </li>
                    <li>
                      <strong>Proso Millet</strong> (<em>Panicum miliaceum</em>)
                    </li>
                    <li>
                      <strong>Browntop Millet</strong> (<em>Brachiaria ramosa</em>)
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </div>
          </section>

          {/* Naked vs Husked */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              Naked Grains vs. Husked Grains
            </h2>
            <div className="space-y-4 text-earth-600 dark:text-earth-300 leading-relaxed">
              <p>
                Millets can also be classified by their grain structure:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Naked grains</strong> (e.g., Sorghum, Pearl Millet,
                  Finger Millet, Proso Millet): The husk is loosely attached to
                  the grain and separates easily during threshing. These millets
                  can be consumed with minimal processing.
                </li>
                <li>
                  <strong>Husked grains</strong> (e.g., Foxtail Millet, Little
                  Millet, Kodo Millet, Barnyard Millet, Browntop Millet): The
                  husk is tightly bound to the grain and requires mechanical
                  dehulling before consumption. The lack of affordable small-scale
                  dehulling machines was historically a barrier to their wider use.
                </li>
              </ul>
            </div>
          </section>

          {/* About This Website */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              About This Website
            </h2>
            <div className="space-y-4 text-earth-600 dark:text-earth-300 leading-relaxed">
              <p>
                This website exists to provide accurate, comprehensive, and
                accessible information about millets. In an era of health trends
                and superfood marketing, there is a real need for a single,
                well-organized resource that presents millet information based on
                evidence rather than hype.
              </p>
              <p>
                We cover nutrition (sourced from ICMR-NIN and USDA databases),
                traditional recipes, Ayurvedic properties (referenced from
                classical texts like Charaka Samhita and Bhavaprakasha Nighantu),
                cultivation practices, and historical context. We believe that
                understanding millets fully — not just as a health food, but as a
                cultural, ecological, and agricultural treasure — is key to their
                revival.
              </p>
              <Card variant="outlined" className="my-6">
                <CardBody>
                  <p className="font-heading text-lg italic text-earth-700 dark:text-earth-200">
                    &quot;Every fact on this site is sourced from peer-reviewed
                    research, government databases, or classical texts.&quot;
                  </p>
                </CardBody>
              </Card>
              <p>
                We are committed to transparency. Each millet page includes a
                detailed sources section. Nutritional data follows the ICMR-NIN
                Indian Food Composition Tables (2017) as the primary reference.
                Ayurvedic information is attributed to specific classical texts.
                We distinguish between well-established science and preliminary
                evidence.
              </p>
            </div>
          </section>

          {/* Key Sources */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
              Key References
            </h2>
            <ol className="list-decimal list-inside space-y-3">
              {keySources.map((source) => (
                <SourceCitation key={source.key} source={source} />
              ))}
            </ol>
          </section>

          {/* Navigation Links */}
          <section className="pt-4 border-t border-earth-200 dark:border-earth-700">
            <p className="text-earth-600 dark:text-earth-300 mb-4">
              Ready to explore?
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/millets"
                className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
              >
                Browse All Millets
              </Link>
              <Link
                href="/nutrition"
                className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
              >
                Nutrition Comparison
              </Link>
              <Link
                href="/recipes"
                className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
              >
                Recipes
              </Link>
              <Link
                href="/history"
                className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
              >
                History
              </Link>
            </div>
          </section>
        </div>
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
    </>
  );
}
