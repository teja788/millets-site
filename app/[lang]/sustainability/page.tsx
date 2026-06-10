import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Droplets, Thermometer, Footprints, Sprout, TreePine, Users, Globe } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import PageBanner from '@/components/sections/PageBanner';
import QuickFactBox from '@/components/ui/QuickFactBox';
import SourceCitation from '@/components/ui/SourceCitation';
import { sources } from '@/data/sources';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, isValidLocale, localeParams, hreflangAlternates } from '@/lib/i18n';

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const t = getTranslations(lang);
  return {
    title: `${t.sustainabilityPage.title} | ${t.site.siteName}`,
    description:
      lang === 'te'
        ? 'చిరుధాన్యాలు ఎందుకు వాతావరణ-స్మార్ట్ పంటలో తెలుసుకోండి: తక్కువ నీటి వాడకం, కరువు తట్టుకోవడం, కార్బన్ సామర్థ్యం, నేల ఆరోగ్యం మరియు UN సుస్థిర అభివృద్ధి లక్ష్యాలు.'
        : lang === 'fr'
          ? 'Découvrez pourquoi les millets sont des cultures climato-intelligentes : faible consommation d\'eau, tolérance à la sécheresse, empreinte carbone réduite et bienfaits pour les sols.'
          : lang === 'de'
            ? 'Warum Hirse nachhaltig ist: Wassereffizienz, Klimaresilienz, CO₂-Fußabdruck, Bodengesundheit und Biodiversität.'
            : 'Discover why millets are climate-smart crops: low water use, drought tolerance, carbon efficiency, soil health benefits, and alignment with UN Sustainable Development Goals.',
    alternates: {
      canonical: `/${lang}/sustainability`,
      languages: hreflangAlternates('/sustainability'),
    },
  };
}

const relevantSourceKeys = [
  'fao-millets-1995',
  'icrisat-millets',
  'un-iym-2023',
  'saleh-2013',
];

export default async function SustainabilityPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale = lang as Locale;

  const t = getTranslations(locale);
  const relevantSources = sources.filter((s) => relevantSourceKeys.includes(s.key));

  return (
    <main>
      <Breadcrumb locale={locale} />
      <PageBanner src="/images/hero/hero-sustainability.webp" alt={t.sustainabilityPage.title} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-6">
          {t.sustainabilityPage.title}
        </h1>

        {/* Intro */}
        <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-12">
          <p>
            {locale === 'te'
              ? 'వాతావరణ మార్పు, నీటి కొరత మరియు పెరుగుతున్న జనాభా యుగంలో, చిరుధాన్యాలు వ్యవసాయంలో అత్యంత ఆశాజనక పరిష్కారాలలో ఒకటిగా నిలుస్తున్నాయి.'
              : locale === 'fr'
                ? 'À l\'ère du changement climatique, de la raréfaction de l\'eau et de la croissance démographique, les millets représentent l\'une des solutions les plus prometteuses de l\'agriculture. Ces céréales ancestrales sont intrinsèquement climato-intelligentes : elles nécessitent peu d\'eau, tolèrent la chaleur extrême, poussent dans des sols pauvres et ont une empreinte carbone nettement inférieure à celle du riz et du blé. L\'ONU a déclaré 2023 Année internationale des millets précisément parce que ces céréales se situent au carrefour de la sécurité alimentaire, de la nutrition et de la durabilité environnementale.'
                : locale === 'de'
                  ? 'Hirse zählt zu den nachhaltigsten Getreidesorten weltweit. Im Vergleich zu Reis und Weizen zeigen sie beeindruckende Vorteile in fünf Schlüsselbereichen.'
                  : <>In an era of climate change, water scarcity, and growing populations, millets represent
            one of agriculture&apos;s most promising solutions. These ancient grains are inherently
            climate-smart crops -- they require minimal water, tolerate extreme heat, grow in poor
            soils, and have a significantly lower carbon footprint compared to major cereals like
            rice and wheat. The United Nations declared 2023 as the International Year of Millets
            precisely because these grains sit at the intersection of food security, nutrition, and
            environmental sustainability.</>}
          </p>
        </div>

        {/* Water Efficiency */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <Droplets className="w-7 h-7 text-blue-600" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              {locale === 'te' ? 'నీటి సామర్థ్యం' : locale === 'fr' ? 'Efficacité hydrique' : locale === 'de' ? 'Wassereffizienz' : 'Water Efficiency'}
            </h2>
          </div>
          <p className="text-earth-800 dark:text-earth-200 leading-relaxed mb-6 max-w-3xl">
            {locale === 'te'
              ? 'చిరుధాన్యాలు భూమిపై అత్యంత నీటి-సమర్థవంతమైన ధాన్యపు పంటలలో ఒకటి.'
              : locale === 'fr'
                ? 'Les millets comptent parmi les cultures céréalières les plus économes en eau de la planète. Alors que le riz paddy nécessite une irrigation par inondation et des volumes d\'eau énormes, les millets prospèrent avec la seule eau de pluie dans les régions semi-arides, ce qui les rend idéaux pour les environnements où l\'eau manque.'
                : locale === 'de'
                  ? 'Hirse benötigt deutlich weniger Wasser als Reis und Weizen und ist damit ideal für wasserarme Regionen.'
                  : <>Millets are among the most water-efficient cereal crops on the planet. While paddy rice
            requires flood irrigation and enormous water volumes, millets thrive on rainfall alone in
            semi-arid regions, making them ideal for water-scarce environments.</>}
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
          <p className="text-sm text-warm-gray dark:text-earth-400 italic">
            Source: FAO, Water footprint of crop production; ICRISAT Smart Food initiative.
          </p>
        </section>

        {/* Climate Resilience */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <Thermometer className="w-7 h-7 text-orange-600" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              {locale === 'te' ? 'వాతావరణ స్థితిస్థాపకత' : locale === 'fr' ? 'Résilience climatique' : locale === 'de' ? 'Klimaresilienz' : 'Climate Resilience'}
            </h2>
          </div>
          <p className="text-earth-800 dark:text-earth-200 leading-relaxed mb-6 max-w-3xl">
            {locale === 'te'
              ? 'చిరుధాన్యాలు అసాధారణంగా స్థితిస్థాపకమైన పంటలు, వరి లేదా గోధుమలను నాశనం చేసే పరిస్థితులను తట్టుకోగలవు.'
              : locale === 'fr'
                ? 'Les millets sont des cultures extraordinairement résilientes qui peuvent supporter des conditions qui dévasteraient le riz ou le blé. Cela les rend de plus en plus importants à mesure que le changement climatique intensifie les sécheresses, les canicules et l\'imprévisibilité météorologique.'
                : locale === 'de'
                  ? 'Hirse gedeiht unter extremen Bedingungen, unter denen andere Kulturen versagen würden.'
                  : <>Millets are extraordinarily resilient crops that can withstand conditions that would
            devastate rice or wheat. This makes them increasingly important as climate change
            intensifies droughts, heatwaves, and weather unpredictability.</>}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                {locale === 'te' ? 'కరువు తట్టుకోవడం' : locale === 'fr' ? 'Tolérance à la sécheresse' : locale === 'de' ? 'Trockenheitstoleranz' : 'Drought Tolerance'}
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                {locale === 'te'
                  ? 'చిరుధాన్యాలు 300-400 మి.మీ. వార్షిక వర్షపాతంతో బతికి ధాన్యం ఉత్పత్తి చేయగలవు.'
                  : locale === 'fr'
                    ? 'Les millets peuvent survivre et produire des grains avec seulement 300-400 mm de précipitations annuelles, contre 1 200 mm ou plus pour le riz. Le mil à chandelle est cultivé dans certaines des régions les plus sèches d\'Afrique et d\'Inde avec moins de 350 mm de pluie.'
                    : locale === 'de'
                      ? 'Übersteht 2–3 Wochen ohne Regen dank tiefem Wurzelsystem und effizienter Wassernutzung.'
                      : <>Millets can survive and produce grain with as little as 300-400mm of annual
                rainfall, compared to rice which requires 1,200mm+. Pearl millet is cultivated in
                some of India&apos;s driest regions with less than 350mm of rain.</>}
              </p>
            </div>
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                {locale === 'te' ? 'వేడి తట్టుకోవడం' : locale === 'fr' ? 'Tolérance à la chaleur' : locale === 'de' ? 'Hitzetoleranz' : 'Heat Tolerance'}
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                {locale === 'te'
                  ? 'సజ్జలు 42 డిగ్రీల సెల్సియస్ వరకు ఉష్ణోగ్రతలను తట్టుకుని ధాన్యం ఉత్పత్తి చేయగలవు.'
                  : locale === 'fr'
                    ? 'Le mil à chandelle peut tolérer des températures allant jusqu\'à 42 °C et produire encore des grains viables. La plupart des millets sont des plantes à photosynthèse C4, ce qui leur confère des avantages inhérents dans les environnements chauds et lumineux.'
                    : locale === 'de'
                      ? 'Wächst bei Temperaturen von 25–35 °C und übersteht kurzzeitig bis zu 45 °C.'
                      : <>Pearl millet can tolerate temperatures up to 42 degrees C and still produce viable
                grain. Most millets are C4 photosynthesis plants, giving them inherent advantages
                in hot, high-light environments.</>}
              </p>
            </div>
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                {locale === 'te' ? 'తక్కువ పెరుగుదల కాలం' : locale === 'fr' ? 'Cycle de culture court' : locale === 'de' ? 'Kurze Vegetationsperiode' : 'Short Growing Season'}
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                {locale === 'te'
                  ? 'చాలా చిరుధాన్యాలు 60-90 రోజులలో పక్వానికి వస్తాయి, వరికి 120-150 రోజులు పడుతుంది.'
                  : locale === 'fr'
                    ? 'La plupart des millets arrivent à maturité en 60 à 90 jours, contre 120 à 150 jours pour le riz. Cette courte durée réduit l\'exposition aux risques météorologiques, permet des cycles de culture multiples et offre aux agriculteurs des retours plus rapides.'
                    : locale === 'de'
                      ? 'Viele Hirsesorten reifen in 60–90 Tagen und ermöglichen Zweitkulturen in einer Saison.'
                      : <>Most millets mature in 60-90 days, compared to 120-150 days for rice. This short
                duration reduces exposure to weather risks, allows multiple cropping cycles, and
                provides farmers with faster returns.</>}
              </p>
            </div>
          </div>
          <p className="text-sm text-warm-gray dark:text-earth-400 italic mt-4">
            Source: ICRISAT research on climate-smart agriculture; FAO Sorghum and Millets in
            Human Nutrition (1995).
          </p>
        </section>

        {/* Carbon Footprint */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <Footprints className="w-7 h-7 text-earth-700 dark:text-earth-300" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              {locale === 'te' ? 'కార్బన్ పాదముద్ర' : locale === 'fr' ? 'Empreinte carbone' : locale === 'de' ? 'CO₂-Fußabdruck' : 'Carbon Footprint'}
            </h2>
          </div>
          <p className="text-earth-800 dark:text-earth-200 leading-relaxed mb-4 max-w-3xl">
            {locale === 'te'
              ? 'చిరుధాన్యాలు వరి మరియు గోధుమలతో పోలిస్తే గణనీయంగా తక్కువ కార్బన్ పాదముద్రను కలిగి ఉన్నాయి:'
              : locale === 'fr'
                ? 'Les millets ont une empreinte carbone nettement inférieure à celle du riz et du blé grâce à plusieurs facteurs :'
                : locale === 'de'
                  ? 'Hirseanbau hat einen deutlich geringeren CO₂-Fußabdruck als konventioneller Reis- und Weizenanbau.'
                  : 'Millets have a significantly lower carbon footprint compared to rice and wheat due to several factors:'}
          </p>
          <ul className="max-w-3xl space-y-3 text-earth-800 dark:text-earth-200 mb-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-earth-400 flex-shrink-0 mt-2" />
              <span>
                {locale === 'te'
                  ? <><strong>వరి పొలాల మీథేన్ ఉద్గారాలు లేవు:</strong> వరి పొలాల వలె కాకుండా, చిరుధాన్యాలు పొడి లేదా వర్షాధార పరిస్థితులలో పెరుగుతాయి.</>
                  : locale === 'fr'
                    ? <><strong>Pas d&apos;émissions de méthane des rizières :</strong> Contrairement aux rizières, qui produisent environ 1,5 % des émissions mondiales de gaz à effet de serre par libération anaérobie de méthane, les millets sont cultivés dans des conditions sèches ou pluviales qui produisent un méthane négligeable.</>
                    : locale === 'de'
                      ? 'Kein gefluteter Anbau nötig — vermeidet die Methanemissionen von Nassreisfeldern.'
                      : <><strong>No paddy methane emissions:</strong> Unlike rice paddies, which produce
                approximately 1.5% of global greenhouse gas emissions through anaerobic methane
                release, millets are grown in dry or rainfed conditions that produce negligible
                methane.</>}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-earth-400 flex-shrink-0 mt-2" />
              <span>
                {locale === 'te'
                  ? <><strong>కనిష్ట ఎరువు అవసరం:</strong> చిరుధాన్యాలు పోషకాలు తక్కువగా ఉన్న నేలల్లో తక్కువ రసాయన ఎరువులతో బాగా పెరుగుతాయి.</>
                  : locale === 'fr'
                    ? <><strong>Apport minimal en engrais :</strong> Les millets poussent bien dans des sols pauvres en nutriments avec peu ou pas d&apos;engrais chimiques, réduisant à la fois les coûts de production et les émissions de protoxyde d&apos;azote liées à l&apos;azote synthétique.</>
                    : locale === 'de'
                      ? 'Weniger Kunstdünger nötig — Hirse ist effizient in der Nährstoffaufnahme und verträgt nährstoffarme Böden.'
                      : <><strong>Minimal fertilizer input:</strong> Millets grow well in nutrient-poor soils
                with little to no chemical fertilizer, reducing both production costs and
                nitrous oxide emissions from synthetic nitrogen.</>}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-earth-400 flex-shrink-0 mt-2" />
              <span>
                {locale === 'te'
                  ? <><strong>నీటిపారుదల శక్తి అవసరం లేదు:</strong> చిరుధాన్యాలు ప్రధానంగా వర్షాధారంగా ఉన్నందున, భూగర్భ జలాల పంపింగ్ శక్తిని నివారిస్తాయి.</>
                  : locale === 'fr'
                    ? <><strong>Pas d&apos;énergie d&apos;irrigation :</strong> Les millets étant principalement cultivés sous pluie, ils évitent la consommation d&apos;énergie liée au pompage des eaux souterraines ou à l&apos;exploitation des systèmes d&apos;irrigation par canaux.</>
                    : locale === 'de'
                      ? 'Geringer Maschineneinsatz — traditioneller Hirseanbau hat einen minimalen Energiebedarf.'
                      : <><strong>No irrigation energy:</strong> Since millets are predominantly rainfed,
                they avoid the energy consumption associated with pumping groundwater or running
                canal irrigation systems.</>}
              </span>
            </li>
          </ul>
          <p className="text-sm text-warm-gray dark:text-earth-400 italic">
            Source: ICRISAT Smart Food; studies on GHG emissions from rice paddies (IPCC).
          </p>
        </section>

        {/* Soil Health */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <Sprout className="w-7 h-7 text-green-600" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              {locale === 'te' ? 'నేల ఆరోగ్యం' : locale === 'fr' ? 'Santé des sols' : locale === 'de' ? 'Bodengesundheit' : 'Soil Health'}
            </h2>
          </div>
          <p className="text-earth-800 dark:text-earth-200 leading-relaxed mb-4 max-w-3xl">
            {locale === 'te'
              ? 'చిరుధాన్యాలు నేల ఆరోగ్యానికి సానుకూలంగా దోహదపడతాయి, తీవ్రమైన ధాన్యపు పంటల వలె కాకుండా.'
              : locale === 'fr'
                ? 'Les millets contribuent positivement à la santé des sols, contrairement à de nombreuses cultures céréalières intensives qui appauvrissent les sols au fil du temps.'
                : locale === 'de'
                  ? 'Hirse fördert aktiv die Bodengesundheit und kann degradierte Böden rehabilitieren.'
                  : 'Millets contribute positively to soil health, unlike many intensive cereal crops that deplete soil nutrients over time.'}
          </p>
          <ul className="max-w-3xl space-y-3 text-earth-800 dark:text-earth-200 mb-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 mt-2" />
              <span>
                {locale === 'te'
                  ? 'చిరుధాన్య వేర్లు నేలకు సేంద్రియ పదార్థాన్ని జోడిస్తాయి, నేల నిర్మాణం మరియు సూక్ష్మజీవి చర్యను మెరుగుపరుస్తాయి.'
                  : locale === 'fr'
                    ? 'Les racines des millets ajoutent de la matière organique au sol, améliorant sa structure, sa capacité de rétention d\'eau et son activité microbienne.'
                    : locale === 'de'
                      ? 'Tiefe Wurzeln lockern verdichtete Böden auf und verbessern die Durchlässigkeit.'
                      : <>Millet roots add organic matter to the soil, improving soil structure, water
                retention capacity, and microbial activity.</>}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 mt-2" />
              <span>
                {locale === 'te'
                  ? 'చిరుధాన్యాలు అద్భుతమైన భ్రమణ పంటలు. పప్పుధాన్యాలు లేదా ఇతర ధాన్యాలతో మార్చడం తెగుళ్ల చక్రాలను విచ్ఛిన్నం చేస్తుంది.'
                  : locale === 'fr'
                    ? 'Les millets sont d\'excellentes cultures de rotation. L\'alternance des millets avec des légumineuses ou d\'autres céréales rompt les cycles de ravageurs et de maladies, réduit le besoin de pesticides chimiques et restaure la fertilité des sols.'
                    : locale === 'de'
                      ? 'Hinterlässt nach der Ernte organisches Material, das die Bodenstruktur verbessert.'
                      : <>Millets are excellent rotation crops. Alternating millets with legumes or other
                cereals breaks pest and disease cycles, reduces the need for chemical pesticides,
                and restores soil fertility.</>}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 mt-2" />
              <span>
                {locale === 'te'
                  ? 'అనేక చిరుధాన్యాలు సన్నబడిన, క్షీణించిన లేదా ఆమ్ల నేలల్లో పెరగగలవు, అటవీ నిర్మూలన లేకుండా భూమిని సాగులోకి తీసుకురావగలవు.'
                  : locale === 'fr'
                    ? 'De nombreux millets peuvent pousser dans des sols marginaux, dégradés ou acides où d\'autres cultures échouent, mettant ainsi des terres improductives en culture sans déforestation.'
                    : locale === 'de'
                      ? 'Ideal für Fruchtfolgen — unterbricht Schädlingszyklen und bindet Stickstoff.'
                      : <>Many millets can grow in marginal, degraded, or acidic soils where other crops
                fail, effectively bringing unproductive land into cultivation without deforestation.</>}
              </span>
            </li>
          </ul>
          <p className="text-sm text-warm-gray dark:text-earth-400 italic">
            Source: FAO Sorghum and Millets in Human Nutrition; ICRISAT soil health research.
          </p>
        </section>

        {/* Biodiversity */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <TreePine className="w-7 h-7 text-green-700" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              {locale === 'te' ? 'జీవవైవిధ్యం' : locale === 'fr' ? 'Biodiversité' : locale === 'de' ? 'Biodiversität' : 'Biodiversity'}
            </h2>
          </div>
          <p className="text-earth-800 dark:text-earth-200 leading-relaxed mb-4 max-w-3xl">
            {locale === 'te'
              ? 'చిరుధాన్య కుటుంబంలోని వైవిధ్యం వ్యవసాయ స్థితిస్థాపకత మరియు జీవవైవిధ్య సంరక్షణకు శక్తివంతమైన సాధనం.'
              : locale === 'fr'
                ? 'La diversité au sein de la famille des millets est elle-même un outil puissant pour la résilience agricole et la conservation de la biodiversité.'
                : locale === 'de'
                  ? 'Hirseanbau fördert die biologische Vielfalt in landwirtschaftlichen Ökosystemen.'
                  : 'The diversity within the millet family is itself a powerful tool for agricultural resilience and biodiversity conservation.'}
          </p>
          <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6 max-w-3xl mb-4">
            <p className="text-earth-800 dark:text-earth-200 leading-relaxed">
              {locale === 'te'
                ? <><strong>9+ సాధారణంగా సాగు చేయబడే రకాలతో</strong> — సజ్జలు, రాగులు, కొర్రలు, జొన్నలు, సామలు, అరికెలు, ఊదలు, వరిగెలు మరియు అండుకొర్రలు — చిరుధాన్యాలు వ్యవసాయ జీవవైవిధ్యాన్ని సంరక్షిస్తాయి.</>
                : locale === 'fr'
                  ? <>Avec <strong>plus de 9 variétés couramment cultivées</strong> — mil à chandelle, éleusine, millet des oiseaux, sorgho, petit mil, kodo, millet japonais, millet commun et browntop — les millets préservent la biodiversité agricole en contraste frappant avec la domination monoculturelle de seulement 2-3 variétés de riz et de blé. Chaque variété de millet est adaptée à des zones agroclimatiques différentes, garantissant que des cultures peuvent être produites dans des géographies diversifiées. Cette diversité agit comme une assurance naturelle contre les pertes de récoltes dues aux ravageurs, aux maladies ou aux chocs climatiques.</>
                  : locale === 'de'
                    ? 'Über 6.000 Hirsesorten weltweit bewahren genetische Vielfalt, die für die Ernährungssicherheit entscheidend ist.'
                    : <>With <strong>9+ commonly cultivated varieties</strong> -- pearl millet, finger millet,
              foxtail millet, sorghum, little millet, kodo millet, barnyard millet, proso millet,
              and browntop millet -- millets preserve agricultural biodiversity in stark contrast
              to the monoculture dominance of just 2-3 rice and wheat varieties that cover most of
              India&apos;s farmland. Each millet variety is adapted to different agro-climatic zones,
              ensuring crops can be grown across diverse geographies. This diversity acts as a
              natural insurance policy against crop failures from pests, diseases, or climate shocks.</>}
            </p>
          </div>
          <p className="text-sm text-warm-gray dark:text-earth-400 italic">
            Source: FAO International Year of Millets 2023; ICRISAT genebank collections.
          </p>
        </section>

        {/* Supporting Small Farmers */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-7 h-7 text-earth-700 dark:text-earth-300" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              Supporting Small Farmers
            </h2>
          </div>
          <p className="text-earth-800 dark:text-earth-200 leading-relaxed mb-4 max-w-3xl">
            Millets are uniquely suited to smallholder farming in developing nations:
          </p>
          <ul className="max-w-3xl space-y-3 text-earth-800 dark:text-earth-200 mb-4">
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
          <p className="text-sm text-warm-gray dark:text-earth-400 italic">
            Source: ICRISAT Smart Food initiative; FAO.
          </p>
        </section>

        {/* UN SDGs */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-7 h-7 text-blue-700" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              UN Sustainable Development Goals
            </h2>
          </div>
          <p className="text-earth-800 dark:text-earth-200 leading-relaxed mb-6 max-w-3xl">
            Millets directly contribute to multiple United Nations Sustainable Development Goals:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6 border-l-4 border-green-500">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-1">
                SDG 2: Zero Hunger
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                Millets provide affordable, nutrient-dense food that can be grown locally in
                food-insecure regions. Their high iron, calcium, and protein content directly
                addresses hidden hunger (micronutrient deficiencies). Their short growing season
                means faster food availability after planting.
              </p>
            </div>
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-1">
                SDG 13: Climate Action
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                As climate-resilient crops with low water needs, heat tolerance, and minimal carbon
                footprint, millets are natural climate adaptation and mitigation tools. Promoting
                millets reduces agriculture&apos;s contribution to greenhouse gas emissions while
                building food system resilience against climate shocks.
              </p>
            </div>
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6 border-l-4 border-orange-500">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-1">
                SDG 15: Life on Land
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                Millets improve soil health, support biodiversity through diverse varieties, and
                can be grown on degraded lands without requiring deforestation or ecosystem
                destruction. Their low-input nature reduces chemical pollution of soils and
                waterways.
              </p>
            </div>
          </div>
          <p className="text-sm text-warm-gray dark:text-earth-400 italic mt-4">
            Source: UN FAO International Year of Millets 2023; UN SDG framework.
          </p>
        </section>

        {/* Sources */}
        <section className="border-t border-earth-200 dark:border-earth-700 pt-8">
          <h2 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            {t.common.sources} &amp; References
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
