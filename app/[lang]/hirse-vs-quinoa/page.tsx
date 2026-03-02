import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Leaf, Euro, Droplet, ChefHat } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { localePath, isValidLocale } from '@/lib/i18n';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Card, CardBody } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
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
  if (lang !== 'de') return {};

  return {
    title: 'Hirse vs Quinoa: Ein Vergleich für bewusste Verbraucher | Simply Millets',
    description:
      'Hirse oder Quinoa? Umfassender Vergleich von Nährwerten, Preis, CO2-Fußabdruck und Verfügbarkeit. Erfahren Sie, warum Hirse die nachhaltigere Wahl für DACH-Verbraucher ist.',
    alternates: {
      canonical: '/de/hirse-vs-quinoa',
      languages: { de: '/de/hirse-vs-quinoa' },
    },
  };
}

export function generateStaticParams() {
  return [{ lang: 'de' }];
}

const nutritionComparison = [
  { nutrient: 'Kalorien (kcal)', millet: '329–378', quinoa: '368', winner: 'equal' },
  { nutrient: 'Protein (g)', millet: '7,7–12,5', quinoa: '14,1', winner: 'quinoa' },
  { nutrient: 'Ballaststoffe (g)', millet: '8,0–12,5', quinoa: '7,0', winner: 'millet' },
  { nutrient: 'Calcium (mg)', millet: '31–344', quinoa: '47', winner: 'millet' },
  { nutrient: 'Eisen (mg)', millet: '2,8–4,4', quinoa: '4,6', winner: 'equal' },
  { nutrient: 'Magnesium (mg)', millet: '82–242', quinoa: '197', winner: 'equal' },
  { nutrient: 'Zink (mg)', millet: '1,7–3,1', quinoa: '3,1', winner: 'equal' },
  { nutrient: 'Glykämischer Index', millet: '54–68', quinoa: '53', winner: 'equal' },
  { nutrient: 'Glutenfrei', millet: 'Ja \u2713', quinoa: 'Ja \u2713', winner: 'equal' },
];

const overviewComparison = [
  { category: 'Preis', millet: '~2\u20133 \u20AC/kg', quinoa: '8\u201312 \u20AC/kg', winner: 'millet' },
  { category: 'CO\u2082-Fu\u00DFabdruck', millet: 'Regional (DACH)', quinoa: 'Import aus S\u00FCdamerika', winner: 'millet' },
  { category: 'Verf\u00FCgbarkeit', millet: 'Reformhaus / Bio-Laden', quinoa: '\u00DCberall', winner: 'quinoa' },
];

const advantages = [
  {
    icon: Leaf,
    title: 'CO\u2082-Fu\u00DFabdruck',
    millet: 'Hirse ben\u00F6tigt wenig Wasser (300\u2013500 mm Niederschlag) und gedeiht auf kargen B\u00F6den ohne Kunstd\u00FCnger. Regionaler Anbau in Deutschland, \u00D6sterreich und der Schweiz ist m\u00F6glich und nimmt zu.',
    quinoa: 'Quinoa wird \u00FCberwiegend aus Peru und Bolivien importiert, was erhebliche Transportemissionen verursacht. Die steigende Nachfrage hat die Preise f\u00FCr die andine Bev\u00F6lkerung in die H\u00F6he getrieben.',
    verdict: 'Hirse hat einen 3- bis 5-mal niedrigeren CO\u2082-Fu\u00DFabdruck dank regionaler Produktion und geringem Wasserverbrauch.',
  },
  {
    icon: Euro,
    title: 'Preis',
    millet: 'Etwa 2 bis 3 \u20AC pro kg im Reformhaus oder Bio-Laden. Im Gro\u00DFgebinde noch g\u00FCnstiger.',
    quinoa: '8 bis 12 \u20AC pro kg im Bio-Laden. Deutscher Quinoa-Anbau bleibt selten und teuer.',
    verdict: 'Hirse ist etwa 3- bis 4-mal g\u00FCnstiger als Quinoa \u2014 ein erheblicher Unterschied im Alltag.',
  },
  {
    icon: Droplet,
    title: 'Wasserverbrauch',
    millet: '300 bis 500 mm Niederschlag gen\u00FCgen. Trockenheitsresistent und ideal f\u00FCr den Klimawandel geeignet.',
    quinoa: 'Ben\u00F6tigt 400 bis 800 mm. Anspruchsvoller beim Wasserverbrauch, besonders bei Bew\u00E4sserungsanbau.',
    verdict: 'Hirse geh\u00F6rt zu den wassersparendsten Getreiden der Welt.',
  },
  {
    icon: ChefHat,
    title: 'Kulinarische Vielfalt',
    millet: 'Hirsebrei, Risotto, Bratlinge, Brot, Porridge, Aufl\u00E4ufe, Desserts. Mehl eignet sich f\u00FCr glutenfreies Backen und Pfannkuchen.',
    quinoa: 'Salate, Beilagen, Suppen, vegetarische Burger. Weniger vielseitig in der Backstube.',
    verdict: 'Hirse bietet dank 9 verschiedener Sorten mit unterschiedlichen Texturen eine gr\u00F6\u00DFere kulinarische Vielfalt.',
  },
];

export default async function HirseVsQuinoaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang) || lang !== 'de') notFound();

  const locale: Locale = lang;

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-6">
          Hirse vs Quinoa: Ein Vergleich f&uuml;r bewusste Verbraucher
        </h1>

        <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-10">
          <p>
            Quinoa gilt in Deutschland als das Superfood schlechthin. Doch Hirse &mdash; seit
            Jahrtausenden in Europa, Asien und Afrika angebaut &mdash; bietet ein vergleichbares,
            teils sogar besseres N&auml;hrstoffprofil, bei deutlich geringerem &ouml;kologischem
            Fu&szlig;abdruck und einem wesentlich g&uuml;nstigeren Preis.
          </p>
        </div>

        {/* Overview Comparison Table */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Auf einen Blick
          </h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Kategorie</TableHeaderCell>
                <TableHeaderCell>Hirse</TableHeaderCell>
                <TableHeaderCell>Quinoa</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {overviewComparison.map((row) => (
                <TableRow key={row.category}>
                  <TableCell className="font-medium">{row.category}</TableCell>
                  <TableCell>
                    <span className={row.winner === 'millet' ? 'font-bold text-forest-600 dark:text-forest-400' : ''}>
                      {row.millet}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={row.winner === 'quinoa' ? 'font-bold text-forest-600 dark:text-forest-400' : ''}>
                      {row.quinoa}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        {/* Nutrition Comparison Table */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            N&auml;hrwertvergleich pro 100 g
          </h2>
          <p className="text-sm text-earth-600 dark:text-earth-400 mb-4">
            Werte f&uuml;r Hirse: Spanne &uuml;ber alle 9 Sorten. Quellen: DGE-N&auml;hrwerttabelle, USDA FoodData Central, Bundeslebensmittelschl&uuml;ssel (BLS).
          </p>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>N&auml;hrstoff</TableHeaderCell>
                <TableHeaderCell>Hirse (9 Sorten)</TableHeaderCell>
                <TableHeaderCell>Quinoa</TableHeaderCell>
                <TableHeaderCell className="hidden md:table-cell">Ergebnis</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {nutritionComparison.map((row) => (
                <TableRow key={row.nutrient}>
                  <TableCell className="font-medium">{row.nutrient}</TableCell>
                  <TableCell>
                    <span className={row.winner === 'millet' ? 'font-bold text-forest-600 dark:text-forest-400' : ''}>
                      {row.millet}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={row.winner === 'quinoa' ? 'font-bold text-forest-600 dark:text-forest-400' : ''}>
                      {row.quinoa}
                    </span>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {row.winner === 'millet' && <Badge variant="green" size="sm">Hirse</Badge>}
                    {row.winner === 'quinoa' && <Badge variant="blue" size="sm">Quinoa</Badge>}
                    {row.winner === 'equal' && <Badge variant="default" size="sm">Gleichwertig</Badge>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-4 bg-forest-50 dark:bg-earth-800 rounded-lg p-4 max-w-3xl">
            <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed">
              <strong>Wichtig:</strong> Quinoa hat mehr Protein (14,1 g vs 7,7&ndash;12,5 g),
              doch Fingerhirse (Ragi) &uuml;bertrifft Quinoa beim Calcium mit 344 mg vs 47 mg &mdash; das
              ist 7-mal mehr. Hirse liefert zudem mehr Ballaststoffe. Insgesamt erg&auml;nzen sich die
              Profile, aber Hirse deckt mehr N&auml;hrstoffe zu einem g&uuml;nstigeren Preis ab.
            </p>
          </div>
        </section>

        {/* Detailed Comparison Cards */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            &Uuml;ber die N&auml;hrwerte hinaus
          </h2>
          <div className="space-y-6">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-forest-600 dark:text-forest-400 flex-shrink-0" />
                    <h3 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100">
                      {item.title}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-earth-800 dark:text-earth-200 mb-1 uppercase tracking-wide">
                        Hirse
                      </p>
                      <p className="text-earth-700 dark:text-earth-300 text-sm leading-relaxed">
                        {item.millet}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-earth-800 dark:text-earth-200 mb-1 uppercase tracking-wide">
                        Quinoa
                      </p>
                      <p className="text-earth-700 dark:text-earth-300 text-sm leading-relaxed">
                        {item.quinoa}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/50 dark:bg-earth-700/50 rounded-lg p-3">
                    <p className="text-sm text-earth-800 dark:text-earth-200">
                      <strong>Fazit:</strong> {item.verdict}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Warum Hirse die bessere Wahl sein kann */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Warum Hirse die bessere Wahl sein kann
          </h2>
          <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6 md:p-8 max-w-3xl">
            <ul className="space-y-3 text-earth-700 dark:text-earth-300">
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>Regionale Produktion:</strong> Hirse wird zunehmend in Bayern, Brandenburg und der Steiermark angebaut &mdash; kurze Transportwege, frische Ware.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>Niedrigerer CO&#8322;-Fu&szlig;abdruck:</strong> Kein &Uuml;berseetransport aus S&uuml;damerika, geringer Wasserverbrauch, wenig D&uuml;nger n&ouml;tig.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>G&uuml;nstigerer Preis:</strong> Hirse kostet etwa 2&ndash;3&nbsp;&euro;/kg, Quinoa dagegen 8&ndash;12&nbsp;&euro;/kg &mdash; ein erheblicher Unterschied im Alltag.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>Vergleichbare N&auml;hrwerte:</strong> Bei den meisten Mikron&auml;hrstoffen steht Hirse dem Quinoa in nichts nach &mdash; bei Calcium und Ballaststoffen sogar vorne.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>Kulturelles Erbe:</strong> Hirsebrei war jahrhundertelang ein Grundnahrungsmittel in Mitteleuropa. Die R&uuml;ckkehr zur Hirse ist auch eine R&uuml;ckkehr zu unseren Wurzeln.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Wo Quinoa punktet */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Wo Quinoa punktet
          </h2>
          <div className="bg-white dark:bg-earth-800 rounded-xl p-6 md:p-8 max-w-3xl border border-earth-200 dark:border-earth-700">
            <ul className="space-y-3 text-earth-700 dark:text-earth-300">
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>Vollst&auml;ndiges Protein:</strong> Quinoa enth&auml;lt alle 9 essentiellen Aminos&auml;uren in ausgewogenem Verh&auml;ltnis &mdash; ein Vorteil besonders f&uuml;r Veganer und Vegetarier.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>Mehr Forschung:</strong> Es gibt deutlich mehr klinische Studien zu Quinoa als zu den meisten Hirsesorten. Die wissenschaftliche Datenlage ist umfangreicher.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>Etablierter Markt:</strong> Quinoa ist in jedem Supermarkt erh&auml;ltlich &mdash; von REWE &uuml;ber Edeka bis Aldi. Hirse findet man eher im Reformhaus oder Bio-Laden.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Fazit */}
        <section className="mb-12">
          <Card>
            <CardBody>
              <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
                Fazit
              </h2>
              <p className="text-earth-700 dark:text-earth-300 leading-relaxed mb-4">
                Beide Getreide sind wertvoll und verdienen einen Platz in einer abwechslungsreichen
                Ern&auml;hrung. Doch f&uuml;r DACH-Verbraucher, die Wert auf Nachhaltigkeit, regionalen
                Einkauf und ein gutes Preis-Leistungs-Verh&auml;ltnis legen, gewinnt Hirse klar bei
                Nachhaltigkeit und Preis. Sie ist g&uuml;nstiger, &ouml;kologischer und bietet
                vergleichbare N&auml;hrwerte &mdash; mit dem Bonus einer jahrtausendealten
                mitteleurop&auml;ischen Tradition.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={localePath(locale, '/millets')}
                  className="inline-flex items-center px-4 py-2 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors text-sm font-medium"
                >
                  Alle 9 Hirsesorten entdecken
                </Link>
                <Link
                  href={localePath(locale, '/wo-hirse-kaufen')}
                  className="inline-flex items-center px-4 py-2 bg-earth-200 dark:bg-earth-700 text-earth-800 dark:text-earth-200 rounded-lg hover:bg-earth-300 dark:hover:bg-earth-600 transition-colors text-sm font-medium"
                >
                  Wo Hirse kaufen im DACH-Raum
                </Link>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Sources */}
        <section className="border-t border-earth-200 dark:border-earth-700 pt-8">
          <h2 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            Quellen und Referenzen
          </h2>
          <ul className="space-y-2 text-sm text-earth-700 dark:text-earth-300">
            <li>USDA FoodData Central &mdash; Quinoa, uncooked (SR Legacy, 2019)</li>
            <li>DGE &mdash; Deutsche Gesellschaft f&uuml;r Ern&auml;hrung, N&auml;hrwerttabellen (2024)</li>
            <li>Bundeslebensmittelschl&uuml;ssel (BLS) &mdash; Max Rubner-Institut</li>
            <li>Saleh ASM et al. &mdash; &bdquo;Millet grains: nutritional quality, processing, and potential health benefits&ldquo; (2013)</li>
            <li>FAO &mdash; &bdquo;Sorghum and millets in human nutrition&ldquo; (1995)</li>
            <li>Umweltbundesamt &mdash; CO&#8322;-Emissionen im Lebensmitteltransport, Daten 2023</li>
          </ul>
        </section>
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6 mt-10">
          <p className="text-xs text-warm-gray dark:text-earth-400 leading-relaxed max-w-3xl">
            <strong>Hinweis:</strong> Die dargestellten N&auml;hrwertdaten sind Durchschnittswerte
            aus wissenschaftlichen Quellen. Die tats&auml;chlichen Werte k&ouml;nnen je nach Herkunft, Sorte
            und Zubereitungsart abweichen.
          </p>
        </div>
      </div>
    </main>
  );
}
