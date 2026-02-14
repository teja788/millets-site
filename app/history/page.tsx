import type { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import TimelineSection from '@/components/sections/TimelineSection';
import SourceCitation from '@/components/ui/SourceCitation';
import { timelineEvents } from '@/data/history-timeline';
import { sources } from '@/data/sources';

export const metadata: Metadata = {
  title: 'History of Millets | Millets Info',
  description:
    'Trace the fascinating 10,000-year journey of millets from the earliest cultivated crops in China to the 2023 International Year of Millets. Discover archaeological evidence, Vedic references, and the modern millet revival.',
};

const relevantSourceKeys = [
  'cishan-archaeology',
  'fuller-2006',
  'weber-1998',
  'fao-millets-1995',
  'hallur-archaeology',
  'sangam-literature',
  'charaka-samhita',
  'un-iym-2023',
  'india-nutri-cereals',
  'icrisat-millets',
];

export default function HistoryPage() {
  const relevantSources = sources.filter((s) => relevantSourceKeys.includes(s.key));

  return (
    <main>
      <Breadcrumb />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-100 mb-6">
          History of Millets
        </h1>

        {/* Intro Section */}
        <div className="max-w-3xl space-y-4 text-earth-200 leading-relaxed mb-12">
          <p>
            Millets are among the earliest cultivated cereal crops in human history. Archaeological
            evidence from the Cishan site in northern China dates foxtail millet cultivation to
            approximately 8700 BCE, making it one of the first grains to be deliberately farmed by
            humans -- predating rice cultivation by several thousand years. Independently, pearl
            millet was domesticated in the Sahel region of West Africa around 4500 BCE, and finger
            millet arose in the Ethiopian highlands around 5000 BCE.
          </p>
          <p>
            On the Indian subcontinent, millets have been cultivated for at least 5,000 years.
            Grains of foxtail millet and browntop millet have been recovered from Indus Valley
            Civilization sites dating to 3300 BCE. By the time of the Vedic period (~1500 BCE),
            millets were well established in Indian agriculture and were mentioned in the Yajurveda
            as &lsquo;Anu&rsquo; (minor grains). Tamil Sangam literature (~300 BCE) extensively
            references millets, with one of the five landscape divisions named &lsquo;Thinai&rsquo;
            after foxtail millet.
          </p>
          <p>
            For millennia, millets were the daily bread of millions across Asia, Africa, and parts
            of Europe. Their extraordinary resilience -- thriving in arid soils, withstanding drought,
            and maturing in as few as 60 days -- made them indispensable to dryland farming
            communities. However, the 20th century brought dramatic changes that pushed millets to
            the margins of global agriculture.
          </p>
        </div>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-earth-100 mb-8 text-center">
            Timeline: 10,000 Years of Millets
          </h2>
          <TimelineSection events={timelineEvents} />
        </section>

        {/* The Green Revolution & Decline */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-100 mb-4">
            The Green Revolution &amp; Decline
          </h2>
          <div className="max-w-3xl space-y-4 text-earth-200 leading-relaxed">
            <p>
              The Green Revolution of the 1960s and 1970s transformed Indian agriculture. Led by
              Dr. M.S. Swaminathan and built upon Norman Borlaug&apos;s high-yield wheat and rice
              varieties, the initiative successfully averted widespread famine and dramatically
              increased food grain production. However, its singular focus on rice and wheat came at
              a steep cost to millet cultivation.
            </p>
            <p>
              Government policies systematically favored rice and wheat through minimum support
              prices (MSP), public procurement systems, and subsidized distribution through the
              Public Distribution System (PDS). Irrigation infrastructure was built primarily for
              water-intensive paddy cultivation. Agricultural research funding flowed
              disproportionately toward rice and wheat improvement, while millet research was
              neglected.
            </p>
            <p>
              The consequences were dramatic. Millets went from covering roughly 37% of India&apos;s
              cereal crop area in the 1960s to under 20% by the early 2000s. Perhaps most
              damagingly, millets became stigmatized as &ldquo;coarse grains&rdquo; and
              &ldquo;poor people&apos;s food,&rdquo; while polished white rice and refined wheat
              flour were seen as markers of prosperity. An entire generation grew up without millets
              on their plates, and traditional knowledge about millet cultivation, processing, and
              cooking began to fade.
            </p>
          </div>
        </section>

        {/* The Revival */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-100 mb-4">
            The Revival
          </h2>
          <div className="max-w-3xl space-y-4 text-earth-200 leading-relaxed">
            <p>
              The 21st century has witnessed a remarkable millet renaissance, driven by growing
              awareness of nutrition, sustainability, and the limitations of monoculture agriculture.
            </p>
            <p>
              In <strong>2018</strong>, the Government of India took a landmark step by officially
              reclassifying millets as <strong>&ldquo;Nutri-Cereals&rdquo;</strong> through a gazette
              notification, recognizing their superior nutritional profile. India declared 2018 as
              the National Year of Millets, launching awareness campaigns and including millets in
              mid-day meal schemes and the Public Distribution System for the first time.
            </p>
            <p>
              In <strong>2021</strong>, India proposed a resolution to the United Nations General
              Assembly to declare 2023 as the International Year of Millets. The resolution was
              adopted with support from 72 countries.
            </p>
            <p>
              The <strong>International Year of Millets (2023)</strong> was a watershed moment.
              India led global campaigns promoting millet consumption, research, and trade. Events
              were held across 100+ countries, millet-based menus appeared at UN cafeterias, and
              awareness of millets as climate-smart, nutritious grains reached an unprecedented
              global audience. Research institutions like ICRISAT intensified work on improved
              varieties, and startups began offering millet-based products ranging from breakfast
              cereals to pasta to cookies.
            </p>
            <p>
              Today, millets stand at the intersection of some of the most pressing global
              challenges -- food security, malnutrition, climate change, and sustainable agriculture.
              Their ancient resilience has become profoundly relevant to the modern world.
            </p>
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
