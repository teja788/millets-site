import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, isValidLocale, locales, localeParams } from '@/lib/i18n';
import { getMillets } from '@/lib/i18n-data';
import Breadcrumb from '@/components/layout/Breadcrumb';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from '@/components/ui/Table';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const t = getTranslations(lang);

  return {
    title: `${t.nav.cookingGuide} | ${t.site.siteName}`,
    description:
      lang === 'te'
        ? 'చిరుధాన్యాలను వండడానికి సంపూర్ణ గైడ్: నీటి నిష్పత్తులు, నానబెట్టే సమయాలు, వంట పద్ధతులు, యాంటీన్యూట్రియెంట్లను తగ్గించడం, నిల్వ మరియు ప్రత్యామ్నాయ చిట్కాలు.'
        : 'Complete guide to cooking millets: water ratios, soaking times, cooking methods (stovetop, pressure cooker, rice cooker), reducing antinutrients, storage, and substitution tips.',
    alternates: {
      canonical: `/${lang}/cooking-guide`,
      languages: Object.fromEntries(
        locales.map((l) => [l, localePath(l, '/cooking-guide')])
      ),
    },
  };
}

export function generateStaticParams() {
  return localeParams();
}

export default async function CookingGuidePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale: Locale = lang;
  const t = getTranslations(locale);
  const millets = getMillets(locale);

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-6">
          {t.nav.cookingGuide}
        </h1>
        <p className="text-lg text-earth-700 dark:text-earth-300 max-w-3xl mb-12 leading-relaxed">
          {locale === 'te'
            ? 'ఇంట్లో చిరుధాన్యాలను తయారు చేయడం గురించి మీరు తెలుసుకోవలసిన ప్రతిదీ -- నీటి నిష్పత్తులు మరియు నానబెట్టే సమయాల నుండి వంట పద్ధతులు మరియు నిల్వ వరకు. మీరు మొదటిసారి చిరుధాన్యాల వంట చేసేవారైనా లేదా మీ టెక్నిక్‌ను మెరుగుపరచుకోవాలనుకున్నా, ఈ గైడ్ అన్ని అవసరాలను కవర్ చేస్తుంది.'
            : 'Everything you need to know about preparing millets at home -- from water ratios and soaking times to cooking methods and storage. Whether you are a first-time millet cook or looking to refine your technique, this guide covers all the essentials.'}
        </p>

        {/* Water-to-Millet Ratios */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            {locale === 'te' ? 'నీరు-చిరుధాన్యం నిష్పత్తులు' : 'Water-to-Millet Ratios'}
          </h2>
          <p className="text-earth-800 dark:text-earth-200 leading-relaxed mb-6 max-w-3xl">
            {locale === 'te'
              ? 'చిరుధాన్యాలు వండడంలో నీటి నిష్పత్తి సరిగ్గా ఉండటం అత్యంత ముఖ్యమైన దశ. ఎక్కువ నీరు వాటిని మెత్తగా చేస్తుంది; తక్కువ నీరు వాటిని గట్టిగా ఉంచుతుంది.'
              : 'Getting the water ratio right is the most important step in cooking millets. Too much water makes them mushy; too little leaves them crunchy.'}
          </p>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>
                  {locale === 'te' ? 'చిరుధాన్యం' : 'Millet'}
                </TableHeaderCell>
                <TableHeaderCell>{t.milletDetail.waterRatio}</TableHeaderCell>
                <TableHeaderCell>{t.milletDetail.soakingTime}</TableHeaderCell>
                <TableHeaderCell>{t.milletDetail.cookingTime}</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {millets.map((millet) => (
                <TableRow key={millet.slug}>
                  <TableCell className="font-medium whitespace-nowrap">
                    {millet.name}
                  </TableCell>
                  <TableCell>{millet.cooking.waterRatio}</TableCell>
                  <TableCell>{millet.cooking.soakingTime}</TableCell>
                  <TableCell>{millet.cooking.cookingTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        {/* Soaking Guide */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            {locale === 'te' ? 'నానబెట్టే గైడ్' : 'Soaking Guide'}
          </h2>
          <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-6">
            <p>
              {locale === 'te' ? (
                <>
                  <strong>చిరుధాన్యాలను ఎందుకు నానబెట్టాలి?</strong> నానబెట్టడం రెండు ముఖ్యమైన
                  ఉద్దేశ్యాలను నెరవేరుస్తుంది: ఇది వ్యతిరేక పోషక కారకాలను (ముఖ్యంగా ఫైటిక్
                  ఆమ్లం, సరైన నానబెట్టడంతో 20-50% తగ్గించవచ్చు) తగ్గిస్తుంది మరియు వేగవంతమైన,
                  సమానమైన వంటకు ధాన్యాన్ని మెత్తగా చేస్తుంది.
                </>
              ) : (
                <>
                  <strong>Why soak millets?</strong> Soaking serves two important purposes: it reduces
                  anti-nutritional factors (particularly phytic acid, which can be reduced by 20-50%
                  with proper soaking) and it softens the grain for faster, more even cooking. Phytic
                  acid binds to minerals like iron, calcium, and zinc, reducing their bioavailability.
                  Soaking frees these minerals for better absorption.
                </>
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                {locale === 'te' ? 'త్వరిత నానబెట్టడం (30 ని - 2 గంటలు)' : 'Quick Soak (30 min - 2 hours)'}
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed mb-3">
                {locale === 'te'
                  ? 'చాలా చిన్న చిరుధాన్యాలకు అనుకూలం: కొర్రలు, సామలు, ఆరికెలు, ఊదలు, అండు కొర్రలు మరియు వరిగలు. బాగా కడిగి, గది ఉష్ణోగ్రత నీటిలో నానబెట్టి, వంట చేయడానికి ముందు నీరు వంపేయండి.'
                  : 'Suitable for most small millets: foxtail, little, kodo, barnyard, browntop, and proso millet. Rinse thoroughly, soak in room temperature water, then drain before cooking.'}
              </p>
            </div>
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                {locale === 'te' ? 'దీర్ఘకాలం నానబెట్టడం (6-8 గంటలు / రాత్రంతా)' : 'Long Soak (6-8 hours / overnight)'}
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed mb-3">
                {locale === 'te'
                  ? 'మొత్తం ధాన్యంగా వండేటప్పుడు జొన్నలు మరియు సజ్జలకు సిఫార్సు చేయబడింది. గరిష్ట ఫైటిక్ ఆమ్లం తగ్గింపు కోరుకుంటే కూడా సిఫార్సు చేయబడింది. రాత్రంతా నానబెట్టి, నీరు వంపేసి, వంట చేయడానికి ముందు కడగండి.'
                  : 'Recommended for whole grain sorghum and pearl millet when cooking as whole grains (not flour). Also recommended if you want maximum phytic acid reduction. Soak overnight, drain, and rinse before cooking.'}
              </p>
            </div>
          </div>
          <div className="mt-4 max-w-3xl">
            <h4 className="font-semibold text-earth-800 dark:text-earth-100 mb-2">
              {locale === 'te' ? 'నానబెట్టే చిట్కాలు' : 'Soaking Tips'}
            </h4>
            <ul className="space-y-2 text-earth-800 dark:text-earth-200 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-warm-gray dark:text-earth-400 flex-shrink-0">&#8226;</span>
                {locale === 'te'
                  ? 'ఎల్లప్పుడూ నానబెట్టిన నీటిని పారేసి, వంట చేయడానికి ముందు చిరుధాన్యాన్ని కడగండి.'
                  : 'Always discard the soaking water and rinse the millet before cooking.'}
              </li>
              <li className="flex items-start gap-3">
                <span className="text-warm-gray dark:text-earth-400 flex-shrink-0">&#8226;</span>
                {locale === 'te'
                  ? 'నానబెట్టే నీటికి ఒక టేబుల్ స్పూన్ నిమ్మరసం లేదా ఆపిల్ సైడర్ వెనిగర్ కలపడం ఫైటిక్ ఆమ్లం తగ్గింపును మరింత మెరుగుపరుస్తుంది.'
                  : 'Adding a tablespoon of lemon juice or apple cider vinegar to the soaking water can further enhance phytic acid reduction.'}
              </li>
              <li className="flex items-start gap-3">
                <span className="text-warm-gray dark:text-earth-400 flex-shrink-0">&#8226;</span>
                {locale === 'te'
                  ? 'వేడి వాతావరణంలో, పులియడం నిరోధించడానికి ఫ్రిజ్‌లో నానబెట్టండి (దోస పిండికి పులియడం కావాలంటే తప్ప).'
                  : 'In hot weather, soak in the refrigerator to prevent fermentation (unless fermentation is desired, as for dosa batter).'}
              </li>
            </ul>
          </div>
        </section>

        {/* Cooking Methods */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            {locale === 'te' ? 'వంట పద్ధతులు' : 'Cooking Methods'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cream dark:bg-earth-800 rounded-xl card-shadow p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-3">
                {locale === 'te' ? 'స్టవ్ టాప్' : 'Stovetop'}
              </h3>
              <ol className="space-y-2 text-earth-800 dark:text-earth-200 text-sm list-decimal list-inside">
                {locale === 'te' ? (
                  <>
                    <li>చిరుధాన్యాన్ని బాగా కడిగి నీరు వంపేయండి.</li>
                    <li>భారీ అడుగు గిన్నెలో తగిన మొత్తంలో నీటిని మరిగించండి.</li>
                    <li>చిరుధాన్యం మరియు చిటికెడు ఉప్పు వేయండి. ఒకసారి కలపండి.</li>
                    <li>వేడిని అతి తక్కువకు తగ్గించి గట్టిగా మూత పెట్టండి.</li>
                    <li>సిఫార్సు చేసిన సమయం వరకు మూత తీయకుండా వండండి.</li>
                    <li>వేడి ఆపి, 5 నిమిషాలు మూత తీయకుండా ఉంచి, ఫోర్క్‌తో తేలికగా విప్పండి.</li>
                  </>
                ) : (
                  <>
                    <li>Rinse and drain the millet thoroughly.</li>
                    <li>Bring the appropriate amount of water to a rolling boil in a heavy-bottomed pot.</li>
                    <li>Add the millet and a pinch of salt. Stir once.</li>
                    <li>Reduce heat to the lowest setting and cover tightly.</li>
                    <li>Cook for the recommended time without lifting the lid.</li>
                    <li>Turn off heat, let rest covered for 5 minutes, then fluff with a fork.</li>
                  </>
                )}
              </ol>
            </div>
            <div className="bg-cream dark:bg-earth-800 rounded-xl card-shadow p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-3">
                {locale === 'te' ? 'ప్రెషర్ కుక్కర్' : 'Pressure Cooker'}
              </h3>
              <ol className="space-y-2 text-earth-800 dark:text-earth-200 text-sm list-decimal list-inside">
                {locale === 'te' ? (
                  <>
                    <li>చిరుధాన్యాన్ని కడిగి నీరు వంపేయండి.</li>
                    <li>ప్రెషర్ కుక్కర్‌లో చిరుధాన్యం, నీరు (అదే నిష్పత్తి) మరియు ఉప్పు వేయండి.</li>
                    <li>మూత మూసి మధ్యస్థ వేడిపై 2-3 విజిల్స్ వండండి.</li>
                    <li>వేడి ఆపి ఒత్తిడి సహజంగా తగ్గనివ్వండి (బలవంతంగా తెరవకండి).</li>
                    <li>మూత తెరిచి ఫోర్క్‌తో తేలికగా విప్పండి.</li>
                  </>
                ) : (
                  <>
                    <li>Rinse and drain the millet.</li>
                    <li>Add millet, water (same ratio), and salt to the pressure cooker.</li>
                    <li>Close the lid and cook on medium heat for 2-3 whistles.</li>
                    <li>Turn off heat and let pressure release naturally (do not force open).</li>
                    <li>Open the lid and fluff gently with a fork.</li>
                  </>
                )}
              </ol>
              <p className="text-xs text-warm-gray dark:text-earth-400 mt-3 italic">
                {locale === 'te'
                  ? 'ప్రెషర్ వంట వేగవంతమైనది మరియు సజ్జలు మరియు జొన్నలకు ముఖ్యంగా బాగా పని చేస్తుంది.'
                  : 'Pressure cooking is faster and works especially well for pearl millet and sorghum.'}
              </p>
            </div>
            <div className="bg-cream dark:bg-earth-800 rounded-xl card-shadow p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-3">
                {locale === 'te' ? 'రైస్ కుక్కర్' : 'Rice Cooker'}
              </h3>
              <ol className="space-y-2 text-earth-800 dark:text-earth-200 text-sm list-decimal list-inside">
                {locale === 'te' ? (
                  <>
                    <li>చిరుధాన్యాన్ని కడిగి నీరు వంపేయండి.</li>
                    <li>రైస్ కుక్కర్ గిన్నెలో చిరుధాన్యం మరియు నీరు సిఫార్సు నిష్పత్తిలో వేయండి.</li>
                    <li>చిటికెడు ఉప్పు మరియు ఒక టీస్పూన్ నూనె లేదా నెయ్యి వేయండి.</li>
                    <li>మూత మూసి సాధారణ వంట చక్రం ప్రారంభించండి.</li>
                    <li>కుక్కర్ &ldquo;వార్మ్&rdquo;కు మారిన తర్వాత, 10 నిమిషాలు ఉంచండి.</li>
                    <li>తెరిచి ఫోర్క్‌తో విప్పండి. వడ్డించండి.</li>
                  </>
                ) : (
                  <>
                    <li>Rinse and drain the millet.</li>
                    <li>Add millet and water to the rice cooker bowl at the recommended ratio.</li>
                    <li>Add a pinch of salt and a teaspoon of oil or ghee.</li>
                    <li>Close the lid and start the regular cook cycle.</li>
                    <li>Once the cooker switches to &ldquo;warm,&rdquo; let it rest for 10 minutes.</li>
                    <li>Open and fluff with a fork. Serve.</li>
                  </>
                )}
              </ol>
              <p className="text-xs text-warm-gray dark:text-earth-400 mt-3 italic">
                {locale === 'te'
                  ? 'కొర్రలు, సామలు, ఊదలు మరియు ఆరికెలకు బాగా పని చేస్తుంది.'
                  : 'Works well for foxtail, little, barnyard, and kodo millets.'}
              </p>
            </div>
          </div>
        </section>

        {/* Reducing Antinutrients */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            {locale === 'te' ? 'యాంటీన్యూట్రియెంట్లను తగ్గించడం' : 'Reducing Antinutrients'}
          </h2>
          <p className="text-earth-800 dark:text-earth-200 leading-relaxed mb-6 max-w-3xl">
            {locale === 'te'
              ? 'చిరుధాన్యాలలో ఫైటిక్ ఆమ్లం మరియు టానిన్లు ఉంటాయి, ఇవి ఖనిజాల శోషణను తగ్గిస్తాయి. ఈ సాధారణ సాంప్రదాయ ప్రాసెసింగ్ పద్ధతులు ఈ సమ్మేళనాలను గణనీయంగా తగ్గిస్తాయి:'
              : 'Millets contain phytic acid and tannins that can reduce mineral absorption. These simple traditional processing methods significantly reduce these compounds:'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                {locale === 'te' ? 'నానబెట్టడం' : 'Soaking'}
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                {locale === 'te'
                  ? '6-8 గంటలు చిరుధాన్యాలను నానబెట్టడం ఫైటిక్ ఆమ్లాన్ని 20-50% తగ్గిస్తుంది. నీరు ధాన్యం స్వంత ఫైటేజ్ ఎంజైమ్‌లను ఉత్తేజపరుస్తుంది. ఎల్లప్పుడూ నానబెట్టిన నీటిని పారేయండి.'
                  : 'Soaking millets for 6-8 hours reduces phytic acid content by 20-50%. The water activates the grain\'s own phytase enzymes, which break down phytic acid. Always discard the soaking water.'}
              </p>
            </div>
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                {locale === 'te' ? 'మొలకెత్తించడం' : 'Germination / Sprouting'}
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                {locale === 'te'
                  ? '24-48 గంటలు చిరుధాన్యాలను మొలకెత్తించడం అత్యంత ప్రభావవంతమైన పద్ధతులలో ఒకటి. ఇది ఫైటిక్ ఆమ్లాన్ని 60-70% వరకు తగ్గిస్తుంది, అదే సమయంలో విటమిన్ C, B విటమిన్లు మరియు మొత్తం ప్రోటీన్ జీర్ణసామర్థ్యాన్ని పెంచుతుంది.'
                  : 'Sprouting millets for 24-48 hours is one of the most effective methods. It can reduce phytic acid by up to 60-70% while also increasing vitamin C, B vitamins, and overall protein digestibility. Finger millet (ragi) sprouts particularly well.'}
              </p>
            </div>
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                {locale === 'te' ? 'పులియబెట్టడం' : 'Fermentation'}
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                {locale === 'te'
                  ? 'దోస/ఇడ్లీ పిండి, అంబలి మరియు కూజ్ వంటి సాంప్రదాయ పులియబెట్టిన వంటకాలు యాంటీన్యూట్రియెంట్లను గణనీయంగా తగ్గిస్తాయి. 12-24 గంటల పులియబెట్టడం ఫైటిక్ ఆమ్లాన్ని 50-75% తగ్గిస్తుంది.'
                  : 'Traditional fermented preparations like dosa/idli batter (using millet instead of rice), ambali, and koozh dramatically reduce antinutrients. Fermentation for 12-24 hours can reduce phytic acid by 50-75% while adding beneficial probiotics.'}
              </p>
            </div>
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                {locale === 'te' ? 'వేయించడం / పొడి వేయించడం' : 'Roasting / Dry Toasting'}
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                {locale === 'te'
                  ? 'వంట చేయడానికి ముందు చిరుధాన్యాలను పొడిగా వేయించడం టానిన్లను తగ్గిస్తుంది మరియు వాటి గోధుమ రుచిని పెంచుతుంది. ఇది అనేక సాంప్రదాయ రెసిపీలలో (ఉదా., కొర్రలతో ఉప్మా లేదా బిర్యానీ చేయడానికి ముందు వేయించడం) సాధారణ పద్ధతి.'
                  : 'Dry roasting millets before cooking reduces tannins and also enhances their nutty flavor. This is a common practice in many traditional recipes (e.g., roasting foxtail millet before making upma or biryani).'}
              </p>
            </div>
          </div>
        </section>

        {/* Storage Guide */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            {locale === 'te' ? 'నిల్వ గైడ్' : 'Storage Guide'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cream dark:bg-earth-800 rounded-xl card-shadow p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                {locale === 'te' ? 'వండని చిరుధాన్యాలు' : 'Uncooked Millets'}
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed mb-2">
                {locale === 'te'
                  ? 'సూర్యరశ్మికి దూరంగా చల్లని, పొడి ప్రదేశంలో గాలి చొరబడని కంటైనర్‌లలో నిల్వ చేయండి.'
                  : 'Store in airtight containers in a cool, dry place away from direct sunlight.'}
              </p>
              <p className="font-medium text-earth-800 dark:text-earth-100">
                {locale === 'te' ? 'షెల్ఫ్ లైఫ్: 6-12 నెలలు' : 'Shelf life: 6-12 months'}
              </p>
            </div>
            <div className="bg-cream dark:bg-earth-800 rounded-xl card-shadow p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                {locale === 'te' ? 'వండిన చిరుధాన్యాలు' : 'Cooked Millets'}
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed mb-2">
                {locale === 'te'
                  ? 'ఫ్రిజ్‌లో మూసిన కంటైనర్‌లలో నిల్వ చేయండి. ఎక్కువ కాలం నిల్వ కోసం భాగాల పరిమాణ బ్యాగ్‌లలో ఫ్రీజ్ చేయవచ్చు.'
                  : 'Store in sealed containers in the refrigerator. Can also be frozen in portion-sized bags for longer storage.'}
              </p>
              <p className="font-medium text-earth-800 dark:text-earth-100">
                {locale === 'te' ? 'ఫ్రిజ్: 3-5 రోజులు / ఫ్రీజర్: 3 నెలల వరకు' : 'Fridge: 3-5 days / Freezer: up to 3 months'}
              </p>
            </div>
            <div className="bg-cream dark:bg-earth-800 rounded-xl card-shadow p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                {locale === 'te' ? 'చిరుధాన్యం పిండి' : 'Millet Flour'}
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed mb-2">
                {locale === 'te'
                  ? 'ఫ్రిజ్‌లో గాలి చొరబడని కంటైనర్‌లలో నిల్వ చేయండి, ఎందుకంటే పిండిలోని బహిర్గత నూనెలు మొత్తం ధాన్యాల కంటే వేగంగా చెడిపోతాయి.'
                  : 'Store in airtight containers in the refrigerator, as the exposed oils in flour can turn rancid faster than whole grains.'}
              </p>
              <p className="font-medium text-earth-800 dark:text-earth-100">
                {locale === 'te' ? 'షెల్ఫ్ లైఫ్: 2-3 నెలలు (ఫ్రిజ్‌లో)' : 'Shelf life: 2-3 months (refrigerated)'}
              </p>
            </div>
          </div>
        </section>

        {/* Substitution Guide */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            {locale === 'te' ? 'ప్రత్యామ్నాయ గైడ్' : 'Substitution Guide'}
          </h2>
          <p className="text-earth-800 dark:text-earth-200 leading-relaxed mb-6 max-w-3xl">
            {locale === 'te'
              ? 'చిరుధాన్యాలు అనేక వంటకాలలో సాధారణ ధాన్యాలను భర్తీ చేయగలవు. ఏ చిరుధాన్యాలు ఉత్తమ ప్రత్యామ్నాయాలుగా పని చేస్తాయో ఈ గైడ్ చూడండి:'
              : 'Millets can replace common grains in many dishes. Here is a guide to which millets work best as substitutes:'}
          </p>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>
                  {locale === 'te' ? 'చిరుధాన్యం' : 'Millet'}
                </TableHeaderCell>
                <TableHeaderCell>
                  {locale === 'te' ? 'దీనికి ఉత్తమ ప్రత్యామ్నాయం' : 'Best Substitute For'}
                </TableHeaderCell>
                <TableHeaderCell className="hidden md:table-cell">
                  {locale === 'te' ? 'గమనికలు' : 'Notes'}
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  {locale === 'te' ? 'కొర్రలు' : 'Foxtail Millet'}
                </TableCell>
                <TableCell>{locale === 'te' ? 'బియ్యం' : 'Rice'}</TableCell>
                <TableCell className="hidden md:table-cell text-sm">
                  {locale === 'te'
                    ? 'ఆకృతిలో బియ్యానికి అత్యంత సమీపం. బిర్యానీ, ఫ్రైడ్ రైస్, ఉప్మా, పులావ్‌లో వాడండి.'
                    : 'Closest to rice in texture. Use in biryani, fried rice, upma, pulao.'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  {locale === 'te' ? 'సామలు' : 'Little Millet'}
                </TableCell>
                <TableCell>{locale === 'te' ? 'బియ్యం' : 'Rice'}</TableCell>
                <TableCell className="hidden md:table-cell text-sm">
                  {locale === 'te'
                    ? 'చాలా తేలికపాటి, తటస్థ రుచి. ఉత్తమ రోజువారీ బియ్యం ప్రత్యామ్నాయం. పొంగల్, పెరుగన్నంలో అద్భుతం.'
                    : 'Very mild, neutral flavor. Best everyday rice replacement. Excellent in pongal, curd rice.'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  {locale === 'te' ? 'ఊదలు' : 'Barnyard Millet'}
                </TableCell>
                <TableCell>{locale === 'te' ? 'బియ్యం' : 'Rice'}</TableCell>
                <TableCell className="hidden md:table-cell text-sm">
                  {locale === 'te'
                    ? 'అతి తక్కువ కేలరీల చిరుధాన్యం. సాధారణ ఉపవాస ఆహార ప్రత్యామ్నాయం. ఖిచ్డి మరియు పులావ్‌లో పని చేస్తుంది.'
                    : 'Lowest calorie millet. Common fasting food substitute. Works in khichdi and pulao.'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  {locale === 'te' ? 'సజ్జల పిండి' : 'Pearl Millet (flour)'}
                </TableCell>
                <TableCell>{locale === 'te' ? 'గోధుమ పిండి (రొట్టెలు)' : 'Wheat flour (rotis)'}</TableCell>
                <TableCell className="hidden md:table-cell text-sm">
                  {locale === 'te'
                    ? 'మట్టి వాసనతో వెచ్చని రొట్టెలు చేస్తుంది. సజ్జ రొట్టెకు ఉత్తమం. మొదట్లో గోధుమ పిండితో కలపండి.'
                    : 'Makes earthy, warming flatbreads. Best for bajra roti. Combine with wheat flour initially.'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  {locale === 'te' ? 'జొన్న పిండి' : 'Sorghum (flour)'}
                </TableCell>
                <TableCell>{locale === 'te' ? 'గోధుమ పిండి (రొట్టెలు, బ్రెడ్‌లు)' : 'Wheat flour (rotis, breads)'}</TableCell>
                <TableCell className="hidden md:table-cell text-sm">
                  {locale === 'te'
                    ? 'తేలికపాటి, గోధుమ రుచి. అద్భుతమైన భాకరీ, దోస చేస్తుంది మరియు బేకింగ్‌లో వాడవచ్చు.'
                    : 'Mild, nutty flavor. Makes excellent bhakri, dosa, and can be used in baking.'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  {locale === 'te' ? 'రాగి పిండి' : 'Finger Millet (flour)'}
                </TableCell>
                <TableCell>{locale === 'te' ? 'గోధుమ / బియ్యం పిండి' : 'Wheat / rice flour'}</TableCell>
                <TableCell className="hidden md:table-cell text-sm">
                  {locale === 'te'
                    ? 'ముదురు, ప్రత్యేక రుచి. గంజి, ముద్ద, దోస, కుకీలు మరియు హల్వాకు ఉత్తమం.'
                    : 'Dark, distinctive flavor. Best for porridge, mudde, dosa, cookies, and halwa.'}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Pro Tips */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            {locale === 'te' ? 'ప్రో చిట్కాలు' : 'Pro Tips'}
          </h2>
          <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6 max-w-3xl">
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-earth-800 dark:text-earth-200">
                <span className="w-6 h-6 rounded-full bg-earth-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  1
                </span>
                <span className="leading-relaxed">
                  {locale === 'te' ? (
                    <>
                      <strong>రెసిస్టెంట్ స్టార్చ్ కోసం వండిన చిరుధాన్యాన్ని చల్లబరచండి:</strong> వండిన
                      చిరుధాన్యాన్ని తినడానికి ముందు చల్లబరచడం రెసిస్టెంట్ స్టార్చ్ కంటెంట్‌ను
                      పెంచుతుంది, ఇది ప్రభావవంతమైన గ్లైసెమిక్ ఇండెక్స్‌ను తగ్గిస్తుంది.
                    </>
                  ) : (
                    <>
                      <strong>Cool cooked millet for resistant starch:</strong> Letting cooked millet
                      cool before eating increases resistant starch content, which lowers the effective
                      glycemic index and feeds beneficial gut bacteria. This is especially useful for
                      people managing blood sugar.
                    </>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-3 text-earth-800 dark:text-earth-200">
                <span className="w-6 h-6 rounded-full bg-earth-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  2
                </span>
                <span className="leading-relaxed">
                  {locale === 'te' ? (
                    <>
                      <strong>గోధుమ రుచి కోసం వంట చేయడానికి ముందు వేయించండి:</strong> నీరు వేయడానికి
                      ముందు 3-4 నిమిషాలు చిరుధాన్యాలను పొడిగా వేయించండి. ఇది ఆహ్లాదకరమైన, గోధుమ వాసనను
                      తీసుకువస్తుంది మరియు ధాన్యాలు వేరు వేరుగా ఉండటానికి సహాయపడుతుంది.
                    </>
                  ) : (
                    <>
                      <strong>Toast before cooking for nuttier flavor:</strong> Dry roast millets in a
                      pan for 3-4 minutes before adding water. This brings out a pleasant, nutty aroma
                      and also helps the grains stay separate rather than becoming mushy.
                    </>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-3 text-earth-800 dark:text-earth-200">
                <span className="w-6 h-6 rounded-full bg-earth-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  3
                </span>
                <span className="leading-relaxed">
                  {locale === 'te' ? (
                    <>
                      <strong>వంట చేసేటప్పుడు కొద్దిగా నూనె వేయండి:</strong> వంట నీటికి అర టీస్పూన్
                      నెయ్యి లేదా నూనె కలపడం చిరుధాన్యాలు అంటుకోకుండా ఉండటానికి మరియు ఆహ్లాదకరమైన
                      మెరుపును ఇవ్వడానికి సహాయపడుతుంది.
                    </>
                  ) : (
                    <>
                      <strong>Add a pinch of oil while cooking:</strong> Adding half a teaspoon of ghee
                      or oil to the cooking water prevents millets from sticking together and gives them
                      a pleasant sheen. This is especially helpful for foxtail and little millet.
                    </>
                  )}
                </span>
              </li>
            </ul>
          </div>
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
