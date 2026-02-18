import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, isValidLocale, locales } from '@/lib/i18n';
import { getTimelineEvents } from '@/lib/i18n-data';
import Breadcrumb from '@/components/layout/Breadcrumb';
import TimelineSection from '@/components/sections/TimelineSection';
import SourceCitation from '@/components/ui/SourceCitation';
import { sources } from '@/data/sources';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const t = getTranslations(lang);

  return {
    title: `${t.historyPage.title} | ${t.site.siteName}`,
    description:
      lang === 'te'
        ? '10,000 సంవత్సరాల చిరుధాన్యాల ప్రయాణాన్ని తెలుసుకోండి — చైనాలో తొలి సాగు నుండి 2023 అంతర్జాతీయ చిరుధాన్యాల సంవత్సరం వరకు.'
        : 'Trace the fascinating 10,000-year journey of millets from the earliest cultivated crops in China to the 2023 International Year of Millets. Discover archaeological evidence, Vedic references, and the modern millet revival.',
    alternates: {
      canonical: `/${lang}/history`,
      languages: Object.fromEntries(
        locales.map((l) => [l, localePath(l, '/history')])
      ),
    },
  };
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'te' }];
}

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

export default async function HistoryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale: Locale = lang;
  const t = getTranslations(locale);
  const timelineEvents = getTimelineEvents(locale);
  const relevantSources = sources.filter((s) => relevantSourceKeys.includes(s.key));

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-6">
          {t.historyPage.title}
        </h1>

        {/* Intro Section */}
        <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-12">
          {locale === 'te' ? (
            <>
              <p>
                చిరుధాన్యాలు మానవ చరిత్రలో అత్యంత ప్రాచీన ధాన్యపు పంటలలో ఒకటి. ఉత్తర చైనాలోని
                సిషాన్ ప్రదేశం నుండి లభించిన పురావస్తు ఆధారాలు కొర్రల సాగును సుమారు క్రీ.పూ. 8700
                నాటిదిగా నిర్ధారిస్తాయి, ఇది బియ్యం సాగు కంటే అనేక వేల సంవత్సరాలు ముందు.
                స్వతంత్రంగా, పశ్చిమ ఆఫ్రికాలోని సహెల్ ప్రాంతంలో సజ్జలు క్రీ.పూ. 4500 నాటికి,
                ఇథియోపియన్ ఎత్తిపల్లాలలో రాగి క్రీ.పూ. 5000 నాటికి సాగు చేయబడ్డాయి.
              </p>
              <p>
                భారత ఉపఖండంలో, చిరుధాన్యాలు కనీసం 5,000 సంవత్సరాలుగా సాగు చేయబడుతున్నాయి.
                సింధు నాగరికత స్థలాల నుండి క్రీ.పూ. 3300 నాటి కొర్రలు మరియు అండు కొర్రల
                గింజలు కనుగొనబడ్డాయి. వేద కాలం నాటికి (~క్రీ.పూ. 1500), చిరుధాన్యాలు భారతీయ
                వ్యవసాయంలో స్థిరపడ్డాయి మరియు యజుర్వేదంలో &lsquo;అణు&rsquo; (చిన్న ధాన్యాలు)గా
                ప్రస్తావించబడ్డాయి.
              </p>
              <p>
                వేల సంవత్సరాలుగా, ఆసియా, ఆఫ్రికా మరియు ఐరోపాలోని కొన్ని ప్రాంతాలలో కోట్ల మంది
                ప్రజలకు చిరుధాన్యాలు ప్రధాన ఆహారంగా ఉన్నాయి. వాటి అసాధారణ తట్టుకునే సామర్థ్యం --
                శుష్క నేలల్లో బాగా పెరగడం, కరువును తట్టుకోవడం మరియు కేవలం 60 రోజుల్లో పండటం --
                వాటిని శుష్క భూమి వ్యవసాయ సమాజాలకు అత్యంత అవసరమైనవిగా చేసింది.
              </p>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-8 text-center">
            {locale === 'te'
              ? 'టైమ్‌లైన్: 10,000 సంవత్సరాల చిరుధాన్యాలు'
              : 'Timeline: 10,000 Years of Millets'}
          </h2>
          <TimelineSection events={timelineEvents} />
        </section>

        {/* The Green Revolution & Decline */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            {locale === 'te'
              ? 'హరిత విప్లవం & క్షీణత'
              : 'The Green Revolution & Decline'}
          </h2>
          <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed">
            {locale === 'te' ? (
              <>
                <p>
                  1960 మరియు 1970 దశకాల హరిత విప్లవం భారతీయ వ్యవసాయాన్ని మార్చివేసింది. డా. M.S.
                  స్వామినాథన్ నేతృత్వంలో మరియు నార్మన్ బోర్లాగ్ యొక్క అధిక దిగుబడి గోధుమ మరియు
                  బియ్యం రకాల ఆధారంగా, ఈ చొరవ విస్తృత కరువును విజయవంతంగా నివారించింది. అయితే,
                  బియ్యం మరియు గోధుమలపై దాని ఏకైక దృష్టి చిరుధాన్యాల సాగుకు భారీ నష్టం కలిగించింది.
                </p>
                <p>
                  ప్రభుత్వ విధానాలు కనీస మద్దతు ధర (MSP), ప్రజా సేకరణ వ్యవస్థలు మరియు ప్రజా
                  పంపిణీ వ్యవస్థ (PDS) ద్వారా సబ్సిడీతో కూడిన పంపిణీ ద్వారా బియ్యం మరియు
                  గోధుమలకు అనుకూలంగా ఉన్నాయి.
                </p>
                <p>
                  పరిణామాలు తీవ్రంగా ఉన్నాయి. 1960లలో భారతదేశంలోని ధాన్యపు పంట విస్తీర్ణంలో
                  సుమారు 37% ఉన్న చిరుధాన్యాలు 2000ల ప్రారంభంలో 20% కంటే తక్కువకు తగ్గిపోయాయి.
                  చిరుధాన్యాలు &ldquo;ముతక ధాన్యాలు&rdquo; మరియు &ldquo;పేదవారి ఆహారం&rdquo;గా
                  ముద్ర వేయబడ్డాయి.
                </p>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </section>

        {/* The Revival */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            {locale === 'te' ? 'పునరుజ్జీవనం' : 'The Revival'}
          </h2>
          <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed">
            {locale === 'te' ? (
              <>
                <p>
                  21వ శతాబ్దం పోషణ, సుస్థిరత మరియు ఏకపంట వ్యవసాయ పరిమితుల పట్ల పెరుగుతున్న
                  అవగాహనతో అద్భుతమైన చిరుధాన్యాల పునరుజ్జీవనానికి సాక్ష్యమిచ్చింది.
                </p>
                <p>
                  <strong>2018</strong>లో, భారత ప్రభుత్వం చిరుధాన్యాలను అధికారికంగా
                  <strong>&ldquo;న్యూట్రి-సీరియల్స్&rdquo;</strong>గా పునర్వర్గీకరించడం ద్వారా
                  ఒక చారిత్రక అడుగు వేసింది. భారతదేశం 2018ను జాతీయ చిరుధాన్యాల సంవత్సరంగా
                  ప్రకటించింది.
                </p>
                <p>
                  <strong>2021</strong>లో, 2023ను అంతర్జాతీయ చిరుధాన్యాల సంవత్సరంగా ప్రకటించాలని
                  భారతదేశం ఐక్యరాజ్యసమితి సాధారణ సభకు తీర్మానం ప్రతిపాదించింది. 72 దేశాల
                  మద్దతుతో ఈ తీర్మానం ఆమోదించబడింది.
                </p>
                <p>
                  <strong>అంతర్జాతీయ చిరుధాన్యాల సంవత్సరం (2023)</strong> ఒక మలుపు సమయం.
                  భారతదేశం చిరుధాన్యాల వినియోగం, పరిశోధన మరియు వాణిజ్యాన్ని ప్రోత్సహిస్తూ
                  ప్రపంచ ప్రచారాలకు నాయకత్వం వహించింది. 100+ దేశాలలో కార్యక్రమాలు నిర్వహించబడ్డాయి.
                </p>
                <p>
                  నేడు, చిరుధాన్యాలు ఆహార భద్రత, పోషకాహార లోపం, వాతావరణ మార్పు మరియు సుస్థిర
                  వ్యవసాయం వంటి అత్యంత ఒత్తిడి చేసే ప్రపంచ సవాళ్ల కూడలిలో నిలబడి ఉన్నాయి.
                </p>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </section>

        {/* Sources */}
        <section className="border-t border-earth-200 dark:border-earth-700 pt-8">
          <h2 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            {locale === 'te' ? 'మూలాలు & సూచనలు' : 'Sources & References'}
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
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6 mt-10">
          <p className="text-xs text-warm-gray dark:text-earth-400 leading-relaxed max-w-3xl">
            <strong>{t.common.disclaimer}:</strong> {t.common.disclaimerText}
          </p>
        </div>
      </div>
    </main>
  );
}
