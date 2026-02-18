import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AlertTriangle } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, isValidLocale, locales } from '@/lib/i18n';
import { getAyurvedaData, getMilletBySlugLocale } from '@/lib/i18n-data';
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
    title: `${t.ayurvedaPage.title} | ${t.site.siteName}`,
    description:
      lang === 'te'
        ? 'ఆయుర్వేదంలో చిరుధాన్యాల వర్గీకరణను త్రిణ ధాన్యంగా, దోష-నిర్దిష్ట సిఫార్సులు, ఋతుచర్య మరియు సాంప్రదాయ తయారీ పద్ధతులను అన్వేషించండి.'
        : 'Explore the Ayurvedic classification of millets as Trina Dhanya, dosha-specific recommendations, seasonal eating guidelines (Ritucharya), and traditional preparation methods.',
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, localePath(l, '/ayurveda')])
      ),
    },
  };
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'te' }];
}

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

const relevantSourceKeys = [
  'charaka-samhita',
  'sushruta-samhita',
  'bhavaprakasha',
  'ashtanga-hridaya',
  'ayurveda-mahodadhi',
];

export default async function AyurvedaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale: Locale = lang;
  const t = getTranslations(locale);
  const ayurvedaPageData = getAyurvedaData(locale);
  const relevantSources = sources.filter((s) => relevantSourceKeys.includes(s.key));

  function MilletLink({ slug }: { slug: string }) {
    const millet = getMilletBySlugLocale(slug, locale);
    if (!millet) return <span className="text-warm-gray dark:text-earth-400">{slug}</span>;
    return (
      <Link
        href={localePath(locale, `/millets/${millet.slug}`)}
        className="text-earth-700 dark:text-earth-300 hover:text-earth-800 dark:hover:text-earth-100 underline underline-offset-2 transition-colors"
      >
        {millet.name}
      </Link>
    );
  }

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-6">
          {t.ayurvedaPage.title}
        </h1>

        {/* Intro Section */}
        <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-10">
          <p>{ayurvedaPageData.generalClassification}</p>
        </div>

        {/* Classical Quote */}
        <TestimonialOrQuote
          quote={
            locale === 'te'
              ? 'త్రిణ ధాన్య (గడ్డి ధాన్యాలు) లఘు (తేలిక), రూక్ష (శుష్క), మరియు కషాయ (వగరు). ఇవి కఫ మరియు మేద (కొవ్వు కణజాలం) తగ్గిస్తాయి, అగ్ని (జీర్ణశక్తి) ను పెంచుతాయి, మరియు ఆమ (జీవక్రియ విషపదార్థాలు) ఉన్న పరిస్థితులలో ప్రయోజనకరం.'
              : 'Trina Dhanya (grass grains) are Laghu (light), Ruksha (dry), and Kashaya (astringent). They pacify Kapha and Meda (fat tissue), kindle Agni (digestive fire), and are beneficial in conditions of Ama (metabolic toxins).'
          }
          attribution="Charaka Samhita, Sutra Sthana"
          source={
            locale === 'te'
              ? 'అధ్యాయం 27 - అన్నపానవిధి అధ్యాయ (ఆహారం మరియు పానీయాల వర్గీకరణ)'
              : 'Chapter 27 - Annapanavidhi Adhyaya (Classification of Food and Drink)'
          }
          className="mb-12"
        />

        {/* Dosha Guide */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            {t.ayurvedaPage.doshaGuide}
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
                  <h3 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100">
                    {guide.dosha}{' '}
                    {locale === 'te' ? 'దోషం' : 'Dosha'}
                  </h3>
                </div>

                <p className="text-earth-800 dark:text-earth-200 leading-relaxed mb-6">{guide.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Recommended */}
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-green-400 mb-2 text-sm uppercase tracking-wide">
                      {t.ayurvedaPage.recommended}
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
                      {t.ayurvedaPage.moderate}
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
                      <p className="text-warm-gray dark:text-earth-400 text-sm italic">
                        {locale === 'te' ? 'ఏమీ పేర్కొనబడలేదు' : 'None specified'}
                      </p>
                    )}
                  </div>

                  {/* Avoid */}
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-red-400 mb-2 text-sm uppercase tracking-wide">
                      {t.ayurvedaPage.avoid}
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
                      <p className="text-warm-gray dark:text-earth-400 text-sm italic">
                        {locale === 'te'
                          ? 'ఏమీ లేవు -- చాలా చిరుధాన్యాలు అనుకూలం'
                          : 'None -- most millets are suitable'}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seasonal Eating (Ritucharya) */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            {locale === 'te'
              ? 'ఋతువుల ఆధారంగా ఆహారం (ఋతుచర్య)'
              : 'Seasonal Eating (Ritucharya)'}
          </h2>
          <p className="text-earth-800 dark:text-earth-200 leading-relaxed mb-6 max-w-3xl">
            {locale === 'te'
              ? 'ఆయుర్వేదం దోష సమతుల్యతను నిలబెట్టడానికి ఆహారాన్ని ఋతువులకు అనుగుణంగా మార్చాలని నొక్కి చెబుతుంది (ఋతుచర్య). వివిధ చిరుధాన్యాలు వాటి స్వాభావిక గుణాల ఆధారంగా వివిధ ఋతువులలో సిఫార్సు చేయబడతాయి.'
              : 'Ayurveda emphasizes aligning diet with the seasons (Ritucharya) to maintain doshic balance. Different millets are recommended during different seasons based on their inherent properties.'}
          </p>

          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>
                  {locale === 'te' ? 'ఋతువు' : 'Season'}
                </TableHeaderCell>
                <TableHeaderCell>
                  {locale === 'te' ? 'నెలలు' : 'Months'}
                </TableHeaderCell>
                <TableHeaderCell>
                  {locale === 'te' ? 'సిఫార్సు చిరుధాన్యాలు' : 'Recommended Millets'}
                </TableHeaderCell>
                <TableHeaderCell className="hidden md:table-cell">
                  {locale === 'te' ? 'కారణం' : 'Reasoning'}
                </TableHeaderCell>
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
                        const millet = getMilletBySlugLocale(slug, locale);
                        return millet ? (
                          <Link
                            key={slug}
                            href={localePath(locale, `/millets/${millet.slug}`)}
                            className="text-sm text-earth-700 dark:text-earth-300 hover:text-earth-800 dark:hover:text-earth-100 underline underline-offset-2"
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
              <div key={season.season} className="bg-forest-50 dark:bg-earth-800 rounded-lg p-4">
                <h4 className="font-semibold text-earth-800 dark:text-earth-100 mb-1">{season.season}</h4>
                <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed">{season.reasoning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Preparation Methods */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            {locale === 'te'
              ? 'ఆయుర్వేదం చిరుధాన్యాలను ఎలా తయారు చేయాలని సిఫార్సు చేస్తుంది'
              : 'How Ayurveda Recommends Preparing Millets'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                {locale === 'te' ? 'నానబెట్టడం (భావన)' : 'Soaking (Bhavana)'}
              </h3>
              <p className="text-earth-700 dark:text-earth-300 leading-relaxed text-sm">
                {locale === 'te'
                  ? 'వంట చేయడానికి ముందు 6-8 గంటలు చిరుధాన్యాలను నానబెట్టడం జీర్ణసామర్థ్యాన్ని పెంచుతుంది మరియు గురు (భారీ) గుణాన్ని తగ్గిస్తుంది. నానబెట్టడం ఫైటిక్ ఆమ్లం వంటి వ్యతిరేక పోషక కారకాలను తగ్గించడానికి కూడా సహాయపడుతుంది.'
                  : 'Soaking millets for 6-8 hours before cooking enhances digestibility and reduces Guru (heavy) quality. This is especially recommended for Vata types, as soaked grains become easier on the digestive system. Soaking also helps reduce anti-nutritional factors like phytic acid.'}
              </p>
            </div>

            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                {locale === 'te' ? 'నేయితో వంట (స్నేహ పాకం)' : 'Cooking with Ghee (Sneha Paka)'}
              </h3>
              <p className="text-earth-700 dark:text-earth-300 leading-relaxed text-sm">
                {locale === 'te'
                  ? 'ఆయుర్వేదం చిరుధాన్యాలను నేయి (స్వచ్ఛమైన నెయ్యి) తో వండమని బలంగా సిఫార్సు చేస్తుంది. నేయి చిరుధాన్యాల స్వాభావిక రూక్ష (శుష్క) గుణాన్ని సమతుల్యం చేస్తుంది, వాటిని మరింత పోషకంగా చేస్తుంది.'
                  : 'Ayurveda strongly recommends cooking millets with ghee (clarified butter). Ghee counterbalances the inherently Ruksha (dry) quality of millets, making them more nourishing and less Vata-aggravating. Even a teaspoon of ghee transforms the doshic effect of millet preparations.'}
              </p>
            </div>

            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                {locale === 'te' ? 'జీర్ణ మసాలాలు కలపడం (దీపన ద్రవ్యం)' : 'Adding Digestive Spices (Deepana Dravya)'}
              </h3>
              <p className="text-earth-700 dark:text-earth-300 leading-relaxed text-sm">
                {locale === 'te'
                  ? 'జీలకర్ర (జీరకం), అల్లం (శుంఠి), మిరియాలు (మరిచ), అజ్వైన్ (యవని), మరియు ఇంగువ (హింగు) వంటి మసాలాలు సాంప్రదాయకంగా చిరుధాన్యాల వంటకాలకు చేర్చబడతాయి. ఈ దీపన మరియు పాచన మసాలాలు అగ్నిని ప్రజ్వలింపజేస్తాయి.'
                  : 'Spices like cumin (Jeeraka), ginger (Shunthi), black pepper (Maricha), ajwain (Yavani), and asafoetida (Hingu) are traditionally added to millet dishes. These Deepana (appetite-stimulating) and Pachana (digestive) spices kindle Agni and ensure the nutrients from millets are properly assimilated.'}
              </p>
            </div>

            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                {locale === 'te' ? 'పులియబెట్టడం (సంధానీయ)' : 'Fermentation (Sandhaniya)'}
              </h3>
              <p className="text-earth-700 dark:text-earth-300 leading-relaxed text-sm">
                {locale === 'te'
                  ? 'దోస మరియు ఇడ్లీ పిండి, అంబలి (పులియబెట్టిన గంజి), మరియు కూజ్ (పులియబెట్టిన పానీయం) వంటి పులియబెట్టిన చిరుధాన్యాల వంటకాలు ఆయుర్వేదంలో విలువైనవి. పులియబెట్టడం లఘు గుణాన్ని పెంచుతుంది, ఖనిజాల జీవ లభ్యతను మెరుగుపరుస్తుంది.'
                  : 'Fermented millet preparations like dosa and idli batter, ambali (fermented porridge), and koozh (fermented drink) are valued in Ayurveda. Fermentation increases the Laghu (light) quality, enhances bioavailability of minerals, and creates beneficial probiotics that support Agni and gut health.'}
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
                  {locale === 'te' ? 'ముఖ్యమైన గమనిక' : 'Important Disclaimer'}
                </h3>
                <p className="text-orange-200 leading-relaxed">
                  {ayurvedaPageData.disclaimer}
                </p>
              </div>
            </div>
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
