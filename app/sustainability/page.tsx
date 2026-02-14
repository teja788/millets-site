import type { Metadata } from 'next';
import { Droplets, Thermometer, Footprints, Sprout, TreePine, Users, Globe } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import QuickFactBox from '@/components/ui/QuickFactBox';
import SourceCitation from '@/components/ui/SourceCitation';
import { sources } from '@/data/sources';

export const metadata: Metadata = {
  title: 'Millets & Sustainability | Millets Info',
  description:
    'Discover why millets are climate-smart crops: low water use, drought tolerance, carbon efficiency, soil health benefits, and alignment with UN Sustainable Development Goals.',
};

const relevantSourceKeys = [
  'fao-millets-1995',
  'icrisat-millets',
  'un-iym-2023',
  'saleh-2013',
];

export default function SustainabilityPage() {
  const relevantSources = sources.filter((s) => relevantSourceKeys.includes(s.key));

  return (
    <main>
      <Breadcrumb />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-100 mb-6">
          Millets &amp; Sustainability
        </h1>

        {/* Intro */}
        <div className="max-w-3xl space-y-4 text-earth-200 leading-relaxed mb-12">
          <p>
            In an era of climate change, water scarcity, and growing populations, millets represent
            one of agriculture&apos;s most promising solutions. These ancient grains are inherently
            climate-smart crops -- they require minimal water, tolerate extreme heat, grow in poor
            soils, and have a significantly lower carbon footprint compared to major cereals like
            rice and wheat. The United Nations declared 2023 as the International Year of Millets
            precisely because these grains sit at the intersection of food security, nutrition, and
            environmental sustainability.
          </p>
        </div>

        {/* Water Efficiency */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <Droplets className="w-7 h-7 text-blue-600" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-100">
              Water Efficiency
            </h2>
          </div>
          <p className="text-earth-200 leading-relaxed mb-6 max-w-3xl">
            Millets are among the most water-efficient cereal crops on the planet. While paddy rice
            requires flood irrigation and enormous water volumes, millets thrive on rainfall alone in
            semi-arid regions, making them ideal for water-scarce environments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <QuickFactBox
              icon={<Droplets className="w-6 h-6" />}
              label="Millets"
              value="300-500"
              unit="liters/kg"
            />
            <QuickFactBox
              icon={<Droplets className="w-6 h-6" />}
              label="Wheat"
              value="~1,500"
              unit="liters/kg"
            />
            <QuickFactBox
              icon={<Droplets className="w-6 h-6" />}
              label="Rice (paddy)"
              value="3,000-5,000"
              unit="liters/kg"
            />
          </div>
          <p className="text-sm text-earth-400 italic">
            Source: FAO, Water footprint of crop production; ICRISAT Smart Food initiative.
          </p>
        </section>

        {/* Climate Resilience */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <Thermometer className="w-7 h-7 text-orange-600" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-100">
              Climate Resilience
            </h2>
          </div>
          <p className="text-earth-200 leading-relaxed mb-6 max-w-3xl">
            Millets are extraordinarily resilient crops that can withstand conditions that would
            devastate rice or wheat. This makes them increasingly important as climate change
            intensifies droughts, heatwaves, and weather unpredictability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-100 mb-2">
                Drought Tolerance
              </h3>
              <p className="text-earth-200 text-sm leading-relaxed">
                Millets can survive and produce grain with as little as 300-400mm of annual
                rainfall, compared to rice which requires 1,200mm+. Pearl millet is cultivated in
                some of India&apos;s driest regions with less than 350mm of rain.
              </p>
            </div>
            <div className="bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-100 mb-2">
                Heat Tolerance
              </h3>
              <p className="text-earth-200 text-sm leading-relaxed">
                Pearl millet can tolerate temperatures up to 42 degrees C and still produce viable
                grain. Most millets are C4 photosynthesis plants, giving them inherent advantages
                in hot, high-light environments.
              </p>
            </div>
            <div className="bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-100 mb-2">
                Short Growing Season
              </h3>
              <p className="text-earth-200 text-sm leading-relaxed">
                Most millets mature in 60-90 days, compared to 120-150 days for rice. This short
                duration reduces exposure to weather risks, allows multiple cropping cycles, and
                provides farmers with faster returns.
              </p>
            </div>
          </div>
          <p className="text-sm text-earth-400 italic mt-4">
            Source: ICRISAT research on climate-smart agriculture; FAO Sorghum and Millets in
            Human Nutrition (1995).
          </p>
        </section>

        {/* Carbon Footprint */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <Footprints className="w-7 h-7 text-earth-300" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-100">
              Carbon Footprint
            </h2>
          </div>
          <p className="text-earth-200 leading-relaxed mb-4 max-w-3xl">
            Millets have a significantly lower carbon footprint compared to rice and wheat due to
            several factors:
          </p>
          <ul className="max-w-3xl space-y-3 text-earth-200 mb-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-earth-400 flex-shrink-0 mt-2" />
              <span>
                <strong>No paddy methane emissions:</strong> Unlike rice paddies, which produce
                approximately 1.5% of global greenhouse gas emissions through anaerobic methane
                release, millets are grown in dry or rainfed conditions that produce negligible
                methane.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-earth-400 flex-shrink-0 mt-2" />
              <span>
                <strong>Minimal fertilizer input:</strong> Millets grow well in nutrient-poor soils
                with little to no chemical fertilizer, reducing both production costs and
                nitrous oxide emissions from synthetic nitrogen.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-earth-400 flex-shrink-0 mt-2" />
              <span>
                <strong>No irrigation energy:</strong> Since millets are predominantly rainfed,
                they avoid the energy consumption associated with pumping groundwater or running
                canal irrigation systems.
              </span>
            </li>
          </ul>
          <p className="text-sm text-earth-400 italic">
            Source: ICRISAT Smart Food; studies on GHG emissions from rice paddies (IPCC).
          </p>
        </section>

        {/* Soil Health */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <Sprout className="w-7 h-7 text-green-600" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-100">
              Soil Health
            </h2>
          </div>
          <p className="text-earth-200 leading-relaxed mb-4 max-w-3xl">
            Millets contribute positively to soil health, unlike many intensive cereal crops that
            deplete soil nutrients over time.
          </p>
          <ul className="max-w-3xl space-y-3 text-earth-200 mb-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 mt-2" />
              <span>
                Millet roots add organic matter to the soil, improving soil structure, water
                retention capacity, and microbial activity.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 mt-2" />
              <span>
                Millets are excellent rotation crops. Alternating millets with legumes or other
                cereals breaks pest and disease cycles, reduces the need for chemical pesticides,
                and restores soil fertility.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 mt-2" />
              <span>
                Many millets can grow in marginal, degraded, or acidic soils where other crops
                fail, effectively bringing unproductive land into cultivation without deforestation.
              </span>
            </li>
          </ul>
          <p className="text-sm text-earth-400 italic">
            Source: FAO Sorghum and Millets in Human Nutrition; ICRISAT soil health research.
          </p>
        </section>

        {/* Biodiversity */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <TreePine className="w-7 h-7 text-green-700" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-100">
              Biodiversity
            </h2>
          </div>
          <p className="text-earth-200 leading-relaxed mb-4 max-w-3xl">
            The diversity within the millet family is itself a powerful tool for agricultural
            resilience and biodiversity conservation.
          </p>
          <div className="bg-earth-800 rounded-xl p-6 max-w-3xl mb-4">
            <p className="text-earth-200 leading-relaxed">
              With <strong>9+ commonly cultivated varieties</strong> -- pearl millet, finger millet,
              foxtail millet, sorghum, little millet, kodo millet, barnyard millet, proso millet,
              and browntop millet -- millets preserve agricultural biodiversity in stark contrast
              to the monoculture dominance of just 2-3 rice and wheat varieties that cover most of
              India&apos;s farmland. Each millet variety is adapted to different agro-climatic zones,
              ensuring crops can be grown across diverse geographies. This diversity acts as a
              natural insurance policy against crop failures from pests, diseases, or climate shocks.
            </p>
          </div>
          <p className="text-sm text-earth-400 italic">
            Source: FAO International Year of Millets 2023; ICRISAT genebank collections.
          </p>
        </section>

        {/* Supporting Small Farmers */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-7 h-7 text-earth-300" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-100">
              Supporting Small Farmers
            </h2>
          </div>
          <p className="text-earth-200 leading-relaxed mb-4 max-w-3xl">
            Millets are uniquely suited to smallholder farming in developing nations:
          </p>
          <ul className="max-w-3xl space-y-3 text-earth-200 mb-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-earth-400 flex-shrink-0 mt-2" />
              <span>
                They grow in marginal conditions -- poor soils, low rainfall, high temperatures --
                where rice and wheat cannot be cultivated economically.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-earth-400 flex-shrink-0 mt-2" />
              <span>
                Low input requirements (minimal fertilizer, pesticides, and irrigation) make millets
                affordable for resource-poor farmers who cannot invest in expensive inputs.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-earth-400 flex-shrink-0 mt-2" />
              <span>
                Millets support dryland farming communities across Rajasthan, Maharashtra,
                Karnataka, Tamil Nadu, Andhra Pradesh, and the tribal regions of central India --
                areas home to some of India&apos;s most vulnerable populations.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-earth-400 flex-shrink-0 mt-2" />
              <span>
                Growing demand for millets as health foods creates new market opportunities and
                better prices for small farmers who have traditionally grown these crops.
              </span>
            </li>
          </ul>
          <p className="text-sm text-earth-400 italic">
            Source: ICRISAT Smart Food initiative; FAO.
          </p>
        </section>

        {/* UN SDGs */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-7 h-7 text-blue-700" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-100">
              UN Sustainable Development Goals
            </h2>
          </div>
          <p className="text-earth-200 leading-relaxed mb-6 max-w-3xl">
            Millets directly contribute to multiple United Nations Sustainable Development Goals:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-earth-800 rounded-xl p-6 border-l-4 border-green-500">
              <h3 className="font-heading text-lg font-bold text-earth-100 mb-1">
                SDG 2: Zero Hunger
              </h3>
              <p className="text-earth-200 text-sm leading-relaxed">
                Millets provide affordable, nutrient-dense food that can be grown locally in
                food-insecure regions. Their high iron, calcium, and protein content directly
                addresses hidden hunger (micronutrient deficiencies). Their short growing season
                means faster food availability after planting.
              </p>
            </div>
            <div className="bg-earth-800 rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="font-heading text-lg font-bold text-earth-100 mb-1">
                SDG 13: Climate Action
              </h3>
              <p className="text-earth-200 text-sm leading-relaxed">
                As climate-resilient crops with low water needs, heat tolerance, and minimal carbon
                footprint, millets are natural climate adaptation and mitigation tools. Promoting
                millets reduces agriculture&apos;s contribution to greenhouse gas emissions while
                building food system resilience against climate shocks.
              </p>
            </div>
            <div className="bg-earth-800 rounded-xl p-6 border-l-4 border-orange-500">
              <h3 className="font-heading text-lg font-bold text-earth-100 mb-1">
                SDG 15: Life on Land
              </h3>
              <p className="text-earth-200 text-sm leading-relaxed">
                Millets improve soil health, support biodiversity through diverse varieties, and
                can be grown on degraded lands without requiring deforestation or ecosystem
                destruction. Their low-input nature reduces chemical pollution of soils and
                waterways.
              </p>
            </div>
          </div>
          <p className="text-sm text-earth-400 italic mt-4">
            Source: UN FAO International Year of Millets 2023; UN SDG framework.
          </p>
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
          <p className="text-xs text-earth-500 leading-relaxed max-w-3xl">
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
