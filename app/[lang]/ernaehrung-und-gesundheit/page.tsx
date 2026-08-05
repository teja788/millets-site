'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Activity, Scale, Wheat, Pill } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { localePath, isValidLocale, getTranslations } from '@/lib/i18n';
import Breadcrumb from '@/components/layout/Breadcrumb';
import MedicalDisclaimer from '@/components/ui/MedicalDisclaimer';
import { Card, CardBody } from '@/components/ui/Card';

/* ------------------------------------------------------------------ */
/*  Static generation helpers – exported from a separate server file   */
/*  Since this is 'use client', metadata must be handled in layout or  */
/*  via a parallel server component. We keep generateStaticParams here */
/*  because Next.js still picks it up from client pages.               */
/* ------------------------------------------------------------------ */

const healthBenefits = [
  {
    icon: Heart,
    title: 'Herzgesundheit',
    description:
      'Perlhirse liefert 242\u00A0mg Magnesium pro 100\u00A0g \u2014 ein essenzielles Mineral für die Regulierung des Herzrhythmus. Kalium und lösliche Ballaststoffe senken den LDL-Cholesterinspiegel laut Metaanalysen im Journal of the American Heart Association um 5 bis 10\u00A0%. Die Deutsche Gesellschaft für Ernährung (DGE) empfiehlt eine tägliche Magnesiumzufuhr von 300\u2013400\u00A0mg, die mit einer Portion Hirse bereits zur Hälfte gedeckt wird.',
    millets: ['Perlhirse', 'Fingerhirse (Ragi)'],
    color: 'text-red-500',
  },
  {
    icon: Activity,
    title: 'Blutzucker-Management',
    description:
      'Hirsearten besitzen einen niedrigen glykämischen Index (GI 52\u201368), der die Kohlenhydrataufnahme verlangsamt und Blutzuckerspitzen vermeidet. Klinische Studien zeigen eine Senkung des HbA1c-Werts um 0,3 bis 0,5\u00A0% über 3 Monate, wenn weißer Reis durch Hirse ersetzt wird. BfR-Studien (Bundesinstitut für Risikobewertung) bestätigen die positiven Effekte von Vollkornhirse auf die Insulinsensitivität. Die DGE empfiehlt Vollkorngetreide als Grundlage der Ernährung zur Typ-2-Diabetes-Prävention.',
    millets: ['Fingerhirse', 'Perlhirse', 'Kolbenhirse', 'Kodohirse'],
    color: 'text-amber-500',
  },
  {
    icon: Scale,
    title: 'Gewichtsmanagement',
    description:
      'Hirse zeichnet sich durch einen hohen Ballaststoffgehalt von 8\u201312\u00A0g pro 100\u00A0g aus, der ein langanhaltendes Sättigungsgefühl fördert. Bei einer niedrigen Kaloriendichte (329\u2013378\u00A0kcal/100\u00A0g) und langsamer Kohlenhydratfreisetzung bleibt der Blutzucker stabil. Kodohirse, reich an unlöslichen Ballaststoffen (9\u00A0g/100\u00A0g), beschleunigt die Verdauung und verringert die Fettaufnahme.',
    millets: ['Rispenhirse', 'Kodohirse', 'Braunhirse', 'Kolbenhirse'],
    color: 'text-teal-500',
  },
  {
    icon: Wheat,
    title: 'Glutenfreie Ernährung',
    description:
      'Alle Hirsearten sind von Natur aus glutenfrei \u2014 im Gegensatz zu Weizen, Gerste und Roggen. Sie stellen eine sichere und nährstoffreiche Alternative für Menschen mit Zöliakie oder nicht-zöliakischer Glutensensitivität (NCGS) dar. Die Deutsche Zöliakie-Gesellschaft (DZG) empfiehlt Hirse ausdrücklich als Teil einer glutenfreien Ernährung. Die EFSA hat die glutenfreie Kennzeichnung für alle Hirsearten bestätigt (EU-Verordnung Nr.\u00A0828/2014).',
    millets: ['Alle Hirsearten'],
    color: 'text-green-500',
  },
  {
    icon: Pill,
    title: 'Mineralstoffe und Vitamine',
    description:
      'Fingerhirse ist das kalziumreichste Getreide überhaupt: 344\u00A0mg pro 100\u00A0g \u2014 fast dreimal so viel wie Kuhmilch (120\u00A0mg). Hirse liefert zudem bedeutende Mengen an Eisen, Zink, Phosphor und B-Vitaminen (Thiamin, Riboflavin, Niacin). Die EFSA hat Health Claims für den Beitrag von Magnesium und Eisen aus Getreidequellen zur normalen Muskelfunktion und zur Verringerung von Müdigkeit zugelassen.',
    millets: ['Fingerhirse (Ragi)', 'Perlhirse', 'Sorghum'],
    color: 'text-purple-500',
  },
];

const nutritionFacts = [
  { label: 'Proteine', value: '7\u201312,5\u00A0g / 100\u00A0g', note: 'Vergleichbar mit Vollkornweizen' },
  { label: 'Ballaststoffe', value: '8\u201312,5\u00A0g / 100\u00A0g', note: '20\u00D7 mehr als weißer Reis' },
  { label: 'Kalzium', value: 'Bis zu 344\u00A0mg / 100\u00A0g', note: 'Fingerhirse: 3\u00D7 so viel wie Milch' },
  { label: 'Eisen', value: 'Bis zu 4,4\u00A0mg / 100\u00A0g', note: 'Sorghum: deckt 25\u00A0% der DGE-Empfehlung' },
  { label: 'Magnesium', value: 'Bis zu 242\u00A0mg / 100\u00A0g', note: 'Perlhirse: 60\u00A0% der DGE-Empfehlung' },
  { label: 'Glykämischer Index', value: '52\u201368', note: 'Niedrig bis mittel (vs.\u00A073 für weißen Reis)' },
];

/* Framer Motion animation variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function ErnaehrungUndGesundheitPage() {
  const params = useParams();
  const lang = params.lang as string;

  if (!isValidLocale(lang) || lang !== 'de') {
    // Dynamic import not needed; Next.js handles 404 on the client
    return null;
  }

  const locale: Locale = lang;
  const t = getTranslations(locale);

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            {t.breadcrumb['ernaehrung-und-gesundheit']}
          </h1>

          <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-10">
            <p>
              Hirse wird von der Weltgesundheitsorganisation (WHO), der Europäischen Behörde für
              Lebensmittelsicherheit (EFSA) und der FAO als Getreide mit hohem Nährwert anerkannt.
              Diese Seite fasst die aktuellsten wissenschaftlichen Erkenntnisse zu den
              gesundheitlichen Vorteilen der Hirse zusammen &mdash; gestützt auf klinische Studien,
              die Referenzwerte der DGE und Daten des Bundeslebensmittelschlüssels (BLS).
            </p>
          </div>
        </motion.div>

        <MedicalDisclaimer locale={locale} />

        {/* Key Nutrition Facts */}
        <section className="mb-12">
          <motion.h2
            className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInVariants}
          >
            Nährwerte im Überblick
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
          >
            {nutritionFacts.map((fact) => (
              <motion.div key={fact.label} variants={itemVariants}>
                <Card>
                  <CardBody>
                    <p className="text-sm font-medium text-earth-600 dark:text-earth-400 uppercase tracking-wide mb-1">
                      {fact.label}
                    </p>
                    <p className="text-2xl font-bold text-earth-800 dark:text-earth-100 mb-1">
                      {fact.value}
                    </p>
                    <p className="text-sm text-earth-600 dark:text-earth-400">
                      {fact.note}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Health Benefits */}
        <section className="mb-12">
          <motion.h2
            className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInVariants}
          >
            Gesundheitliche Vorteile
          </motion.h2>
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
          >
            {healthBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6 md:p-8"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className={`w-6 h-6 ${benefit.color} flex-shrink-0`} />
                    <h3 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-earth-700 dark:text-earth-300 leading-relaxed mb-3">
                    {benefit.description}
                  </p>
                  <p className="text-sm text-earth-600 dark:text-earth-400">
                    <strong>Relevante Hirsearten:</strong> {benefit.millets.join(', ')}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Recommendations from health authorities */}
        <section className="mb-12">
          <motion.h2
            className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInVariants}
          >
            Empfehlungen der Gesundheitsbehörden
          </motion.h2>
          <motion.div
            className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6 md:p-8 max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInVariants}
          >
            <p className="text-earth-700 dark:text-earth-300 leading-relaxed mb-4">
              Die Deutsche Gesellschaft für Ernährung (DGE) empfiehlt Vollkorngetreide bei jeder
              Mahlzeit als Grundlage einer gesunden Ernährung. Hirse &mdash; von Natur aus ein
              Vollkorn und reich an Ballaststoffen &mdash; erfüllt diese Empfehlung in idealer Weise.
            </p>
            <ul className="space-y-2 text-earth-700 dark:text-earth-300">
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>DGE:</strong> Empfiehlt Vollkorngetreide bei jeder Mahlzeit und eine ballaststoffreiche Ernährung (mindestens 30&nbsp;g/Tag)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>BfR:</strong> Studien des Bundesinstituts für Risikobewertung bestätigen den positiven Einfluss von Vollkornhirse auf Insulinsensitivität und Lipidprofile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>EFSA:</strong> Glutenfreie Kennzeichnung für alle Hirsearten gültig; Health Claims für Magnesium und Eisen aus Getreidequellen zugelassen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>DZG:</strong> Die Deutsche Zöliakie-Gesellschaft empfiehlt Hirse als sicheres glutenfreies Getreide für Zöliakie-Betroffene</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>WHO:</strong> Diversifizierung der Getreidequellen empfohlen zur Verbesserung der Mikronährstoffversorgung weltweit</span>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Links to related pages */}
        <section className="mb-12">
          <motion.h2
            className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInVariants}
          >
            Weiterlesen
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Link
                href={localePath(locale, '/nutrition')}
                className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors h-full"
              >
                <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                  Nährwertvergleich
                </h3>
                <p className="text-sm text-earth-600 dark:text-earth-400">
                  Tabellen und Grafiken: alle 9 Hirsearten im Vergleich mit Reis und Weizen
                </p>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                href={localePath(locale, '/hirse-vs-quinoa')}
                className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors h-full"
              >
                <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                  Hirse vs. Quinoa
                </h3>
                <p className="text-sm text-earth-600 dark:text-earth-400">
                  Nährwert-, Umwelt- und Preisvergleich
                </p>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Sources */}
        <motion.section
          className="border-t border-earth-200 dark:border-earth-700 pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInVariants}
        >
          <h2 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            Quellen und Literatur
          </h2>
          <ul className="space-y-2 text-sm text-earth-700 dark:text-earth-300">
            <li>DGE &mdash; Deutsche Gesellschaft für Ernährung: Referenzwerte für die Nährstoffzufuhr (2024)</li>
            <li>Bundeslebensmittelschlüssel (BLS) &mdash; Max Rubner-Institut, Nährwertdatenbank</li>
            <li>BfR &mdash; Bundesinstitut für Risikobewertung: Stellungnahmen zu Vollkorngetreide und Stoffwechsel</li>
            <li>EFSA &mdash; Europäische Behörde für Lebensmittelsicherheit: Zugelassene Health Claims (Verordnung EG Nr.&nbsp;1924/2006)</li>
            <li>DZG &mdash; Deutsche Zöliakie-Gesellschaft: Lebensmittelverzeichnis glutenfreie Produkte</li>
            <li>USDA FoodData Central &mdash; U.S. Department of Agriculture (2019)</li>
            <li>Saleh ASM et al. &mdash; &bdquo;Millet grains: nutritional quality, processing, and potential health benefits&ldquo;, Comprehensive Reviews in Food Science and Food Safety (2013)</li>
            <li>Devi PB et al. &mdash; &bdquo;Health benefits of finger millet polyphenols and dietary fiber&ldquo;, Journal of Food Science and Technology (2014)</li>
            <li>Kam J et al. &mdash; &bdquo;Dietary interventions for type 2 diabetes: how millet comes to help&ldquo;, Frontiers in Plant Science (2016)</li>
            <li>FAO &mdash; Sorghum and millets in human nutrition, Food and Nutrition Series No.&nbsp;27 (1995)</li>
          </ul>
        </motion.section>
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6 mt-10">
          <p className="text-xs text-warm-gray dark:text-earth-400 leading-relaxed max-w-3xl">
            <strong>Hinweis:</strong> Die Informationen auf dieser Seite dienen ausschließlich
            der allgemeinen Information und ersetzen keine ärztliche Beratung. Konsultieren Sie
            einen qualifizierten Arzt oder Ernährungsberater, bevor Sie Ihre Ernährung umstellen.
          </p>
        </div>
      </div>
    </main>
  );
}
