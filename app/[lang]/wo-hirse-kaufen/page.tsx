import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Store, ShoppingCart, Globe, MapPin, ShieldCheck, Lightbulb } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { localePath, isValidLocale } from '@/lib/i18n';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Card, CardBody } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== 'de') return {};

  return {
    title: 'Wo Hirse kaufen \u2014 Einkaufsf\u00FChrer f\u00FCr Deutschland, \u00D6sterreich und die Schweiz | Simply Millets',
    description:
      'Einkaufsf\u00FChrer f\u00FCr Hirse im DACH-Raum: Reformhaus, DM, Alnatura, Denn\u2019s, Online-Shops. Preise, Bio-Siegel und Tipps zur Lagerung.',
    alternates: {
      canonical: '/de/wo-hirse-kaufen',
      languages: { de: '/de/wo-hirse-kaufen' },
    },
  };
}

export function generateStaticParams() {
  return [{ lang: 'de' }];
}

const deutschlandStores = [
  {
    name: 'Reformhaus',
    examples: 'Reformhaus, Vitalia',
    products: 'Hirsek\u00F6rner (bio), Hirseflocken, Hirsemehl, Braunhirse (gemahlen), Hirsekeimling-Pulver',
    priceRange: '2\u20134 \u20AC / 500 g',
    note: 'Gute Beratung und Spezialprodukte wie Braunhirse und Hirsekeimlinge. Fragen Sie nach regionaler Hirse aus deutschem Anbau.',
  },
  {
    name: 'DM drogerie markt',
    examples: 'DM Bio Eigenmarke',
    products: 'Hirsek\u00F6rner, Hirseflocken (Bio-Eigenmarke)',
    priceRange: '2\u20134 \u20AC / 500 g',
    note: 'Die DM-Bio-Eigenmarke bietet Goldenhirse zu konkurrenzlosen Preisen. In fast jeder Filiale erh\u00E4ltlich.',
  },
  {
    name: 'Alnatura',
    examples: 'Alnatura Super Natur Markt',
    products: 'Hirsek\u00F6rner, Hirseflocken, Hirsemehl, Hirsegrie\u00DF',
    priceRange: '2\u20134 \u20AC / 500 g',
    note: 'Breites Hirse-Sortiment in Bio-Qualit\u00E4t. Die Alnatura-Eigenmarke ist preiswert und in allen Filialen verf\u00FCgbar.',
  },
  {
    name: 'Denn\u2019s Biomarkt',
    examples: 'Denn\u2019s Biomarkt (deutschlandweit)',
    products: 'Hirsek\u00F6rner, Hirsemehl, Hirseflocken, Hirsegrie\u00DF, Braunhirse, Fonio',
    priceRange: '2\u20134 \u20AC / 500 g',
    note: 'Gr\u00F6\u00DFtes Bio-Sortiment. Auch seltene Sorten wie Fonio und Teff erh\u00E4ltlich.',
  },
  {
    name: 'Basic Bio',
    examples: 'Basic Bio Superm\u00E4rkte',
    products: 'Hirsek\u00F6rner, Hirseflocken, Hirsemehl',
    priceRange: '2\u20134 \u20AC / 500 g',
    note: 'Regionale Bio-Supermarktkette mit guter Hirse-Auswahl. Vor allem in S\u00FCddeutschland vertreten.',
  },
  {
    name: 'REWE Bio / Edeka Bio',
    examples: 'REWE, Edeka (Bio-Abteilung)',
    products: 'Hirsek\u00F6rner (bio), gelegentlich Hirseflocken',
    priceRange: '2\u20134 \u20AC / 500 g',
    note: 'Begrenzte Auswahl, aber in fast jedem Ort verf\u00FCgbar. Suchen Sie im Regal \u201EGetreide und H\u00FClsenfr\u00FCchte\u201C.',
  },
];

const oesterreichStores = [
  {
    name: 'Billa Plus',
    examples: 'Ja! Nat\u00FCrlich Bio-Eigenmarke',
    products: 'Hirsek\u00F6rner (bio), Hirseflocken',
    priceRange: '2\u20134 \u20AC / 500 g',
    note: 'Die Ja! Nat\u00FCrlich Bio-Eigenmarke f\u00FChrt Goldenhirse und Hirseflocken zu fairen Preisen.',
  },
  {
    name: 'DM \u00D6sterreich',
    examples: 'DM Bio Eigenmarke',
    products: 'Hirsek\u00F6rner, Hirseflocken',
    priceRange: '2\u20134 \u20AC / 500 g',
    note: 'Gleiche g\u00FCnstige DM-Bio-Produkte wie in Deutschland. In jeder gr\u00F6\u00DFeren Filiale erh\u00E4ltlich.',
  },
  {
    name: 'Denn\u2019s Biomarkt',
    examples: 'Denn\u2019s Bio (in ganz \u00D6sterreich)',
    products: 'Hirsek\u00F6rner, Hirsemehl, Hirseflocken, Hirsegrie\u00DF, Braunhirse',
    priceRange: '2\u20134 \u20AC / 500 g',
    note: 'Gr\u00F6\u00DFtes Bio-Sortiment in \u00D6sterreich. Regionale Hirse aus steirischem und burgenl\u00E4ndischem Anbau verf\u00FCgbar.',
  },
  {
    name: 'Reformh\u00E4user',
    examples: 'Reformhaus, Naturkostl\u00E4den',
    products: 'Hirsek\u00F6rner, Hirsemehl, Braunhirse, Spezialartikel',
    priceRange: '3\u20135 \u20AC / 500 g',
    note: 'Beste Beratung und Spezialprodukte. Fragen Sie nach Hirse aus \u00F6sterreichischem Anbau.',
  },
  {
    name: 'Bauernm\u00E4rkte',
    examples: 'Naschmarkt (Wien), Gr\u00FCner Markt (Graz), Bauernm\u00E4rkte regional',
    products: 'Hirsek\u00F6rner aus regionalem Anbau, teilweise Hirsemehl',
    priceRange: '3\u20135 \u20AC / 500 g',
    note: 'Direkt vom Erzeuger! Besonders in der Steiermark und im Burgenland findet man regionale Hirse.',
  },
];

const schweizStores = [
  {
    name: 'Coop Naturaplan',
    examples: 'Coop (alle Filialen, Bio-Abteilung)',
    products: 'Hirsek\u00F6rner (bio), Hirseflocken',
    priceRange: '4\u20136 CHF / 500 g',
    note: 'Die Naturaplan-Eigenmarke f\u00FChrt Schweizer Bio-Hirse. Achten Sie auf das Knospe-Bio-Siegel.',
  },
  {
    name: 'Migros Bio',
    examples: 'Migros (Bio-Abteilung)',
    products: 'Hirsek\u00F6rner (bio), Hirseflocken',
    priceRange: '4\u20136 CHF / 500 g',
    note: 'Die Alnatura-Produkte sind auch bei Migros erh\u00E4ltlich. Bio-Hirse in der Abteilung \u201EGetreide und H\u00FClsenfr\u00FCchte\u201C.',
  },
  {
    name: 'Reformh\u00E4user',
    examples: 'M\u00FCller Reformhaus, EGK Reformh\u00E4user',
    products: 'Hirsek\u00F6rner, Hirsemehl, Hirseflocken, Braunhirse, Hirsegrie\u00DF',
    priceRange: '5\u20138 CHF / 500 g',
    note: 'Beste Beratung und Spezialprodukte. Fragen Sie nach B\u00FCndner Hirsemus-Mischungen und regionalen Schweizer Hirseprodukten.',
  },
  {
    name: 'Bauernm\u00E4rkte',
    examples: 'Wochenm\u00E4rkte in Z\u00FCrich, Bern, Basel, Luzern',
    products: 'Hirsek\u00F6rner aus Schweizer Anbau',
    priceRange: '5\u20138 CHF / 500 g',
    note: 'Direkt vom Schweizer Bauernhof. Begrenzte Verf\u00FCgbarkeit, aber h\u00F6chste Frische und Transparenz.',
  },
];

const onlineShops = [
  {
    name: 'Amazon.de',
    url: 'amazon.de',
    note: 'Gr\u00F6\u00DFte Auswahl, schnelle Lieferung. Vergleichen Sie den Kilopreis und achten Sie auf Bio-Zertifizierung.',
  },
  {
    name: 'Alnatura Online-Shop',
    url: 'alnatura-shop.de',
    note: 'Alle Alnatura-Hirseprodukte direkt nach Hause. Bio-Qualit\u00E4t garantiert.',
  },
  {
    name: 'KoRo Drogerie',
    url: 'korodrogerie.de',
    note: 'Spezialist f\u00FCr Gro\u00DFpackungen. Hirse im Vorteilspack ab 1 kg \u2014 oft der g\u00FCnstigste Kilopreis.',
  },
  {
    name: 'Rapunzel Naturkost',
    url: 'rapunzel.de',
    note: 'Bio-Pionier seit 1974. Hochwertige Hirsek\u00F6rner und -flocken in Demeter- und Bioland-Qualit\u00E4t.',
  },
  {
    name: 'mymuesli',
    url: 'mymuesli.com',
    note: 'Individuelle M\u00FCsli-Mischungen mit Hirseflocken. Ideal zum Ausprobieren.',
  },
];

const bioSiegel = [
  {
    name: 'EU-Bio-Logo',
    description: 'Das gr\u00FCne Blatt-Logo ist EU-weit Pflicht f\u00FCr alle Bio-Produkte. Mindeststandard: 95 % Bio-Zutaten, keine chemischen Pflanzenschutzmittel, keine Gentechnik.',
    level: 'Basis',
  },
  {
    name: 'Demeter',
    description: 'Biodynamischer Anbau nach Rudolf Steiner. Strengste Bio-Zertifizierung \u2014 ber\u00FCcksichtigt kosmische Rhythmen, Tierwohl und geschlossene Betriebskreisl\u00E4ufe. Deutlich strenger als EU-Bio.',
    level: 'Premium',
  },
  {
    name: 'Bioland',
    description: 'Gr\u00F6\u00DFter Bio-Verband Deutschlands. Strenger als EU-Bio bei Tierhaltung, D\u00FCngung und Verarbeitung. Der gesamte Betrieb muss bio sein (keine Teilumstellung).',
    level: 'Premium',
  },
  {
    name: 'Naturland',
    description: 'Internationaler Bio-Verband mit hohen Standards. Ber\u00FCcksichtigt auch Sozialstandards und faire Arbeitsbedingungen. Strenger als EU-Bio, besonders bei Verarbeitung.',
    level: 'Premium',
  },
];

export default async function WoHirseKaufenPage({
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
          Wo Hirse kaufen
        </h1>

        <p className="font-heading text-lg text-earth-600 dark:text-earth-400 mb-4">
          Einkaufsf&uuml;hrer f&uuml;r Deutschland, &Ouml;sterreich und die Schweiz
        </p>

        <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-10">
          <p>
            Ob in Deutschland, &Ouml;sterreich oder der Schweiz &mdash; Hirse ist leichter zu finden, als
            man denkt. Von Reformh&auml;usern &uuml;ber Bio-Superm&auml;rkte und Drogerien bis hin zu
            Online-Shops: Hier finden Sie Ihren umfassenden Einkaufsf&uuml;hrer f&uuml;r Hirse
            zum besten Preis.
          </p>
        </div>

        {/* Deutschland Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-forest-600 dark:text-forest-400 flex-shrink-0" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              Deutschland
            </h2>
          </div>
          <p className="text-sm text-earth-600 dark:text-earth-400 mb-4">
            Typische Preise: 2&ndash;4&nbsp;&euro; pro 500 g
          </p>
          <div className="space-y-4">
            {deutschlandStores.map((store) => (
              <div
                key={store.name}
                className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100">
                    {store.name}
                  </h3>
                  <Badge variant="green" size="sm">{store.priceRange}</Badge>
                </div>
                <p className="text-sm text-earth-600 dark:text-earth-400 mb-2">
                  <strong>Gesch&auml;fte:</strong> {store.examples}
                </p>
                <p className="text-sm text-earth-600 dark:text-earth-400 mb-2">
                  <strong>Produkte:</strong> {store.products}
                </p>
                <p className="text-sm text-earth-700 dark:text-earth-300 bg-white/50 dark:bg-earth-700/50 rounded-lg p-3">
                  {store.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Oesterreich Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-forest-600 dark:text-forest-400 flex-shrink-0" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              &Ouml;sterreich
            </h2>
          </div>
          <div className="space-y-4">
            {oesterreichStores.map((store) => (
              <div
                key={store.name}
                className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100">
                    {store.name}
                  </h3>
                  <Badge variant="green" size="sm">{store.priceRange}</Badge>
                </div>
                <p className="text-sm text-earth-600 dark:text-earth-400 mb-2">
                  <strong>Gesch&auml;fte:</strong> {store.examples}
                </p>
                <p className="text-sm text-earth-600 dark:text-earth-400 mb-2">
                  <strong>Produkte:</strong> {store.products}
                </p>
                <p className="text-sm text-earth-700 dark:text-earth-300 bg-white/50 dark:bg-earth-700/50 rounded-lg p-3">
                  {store.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Schweiz Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-forest-600 dark:text-forest-400 flex-shrink-0" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              Schweiz
            </h2>
          </div>
          <p className="text-sm text-earth-600 dark:text-earth-400 mb-4">
            Preise in CHF
          </p>
          <div className="space-y-4">
            {schweizStores.map((store) => (
              <div
                key={store.name}
                className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100">
                    {store.name}
                  </h3>
                  <Badge variant="green" size="sm">{store.priceRange}</Badge>
                </div>
                <p className="text-sm text-earth-600 dark:text-earth-400 mb-2">
                  <strong>Gesch&auml;fte:</strong> {store.examples}
                </p>
                <p className="text-sm text-earth-600 dark:text-earth-400 mb-2">
                  <strong>Produkte:</strong> {store.products}
                </p>
                <p className="text-sm text-earth-700 dark:text-earth-300 bg-white/50 dark:bg-earth-700/50 rounded-lg p-3">
                  {store.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Online-Shops Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-forest-600 dark:text-forest-400 flex-shrink-0" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              Online-Shops
            </h2>
          </div>
          <div className="space-y-4">
            {onlineShops.map((shop) => (
              <div
                key={shop.name}
                className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100">
                    {shop.name}
                  </h3>
                  <Badge variant="default" size="sm">{shop.url}</Badge>
                </div>
                <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed">
                  {shop.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bio-Siegel verstehen */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-6 h-6 text-forest-600 dark:text-forest-400 flex-shrink-0" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              Bio-Siegel verstehen
            </h2>
          </div>
          <div className="space-y-4">
            {bioSiegel.map((siegel) => (
              <Card key={siegel.name}>
                <CardBody>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100">
                      {siegel.name}
                    </h3>
                    <Badge
                      variant={siegel.level === 'Premium' ? 'green' : 'default'}
                      size="sm"
                    >
                      {siegel.level}
                    </Badge>
                  </div>
                  <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed">
                    {siegel.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* Tipps */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-6 h-6 text-forest-600 dark:text-forest-400 flex-shrink-0" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              Tipps f&uuml;r den Einkauf und die Lagerung
            </h2>
          </div>
          <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6 md:p-8 max-w-3xl">
            <ul className="space-y-3 text-earth-700 dark:text-earth-300">
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>Auf Mindesthaltbarkeitsdatum achten:</strong> Hirse kann ranzig werden. Pr&uuml;fen Sie das MHD und bevorzugen Sie frische Ware mit langem Resthaltbarkeitsdatum.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>Luftdichte Lagerung:</strong> Bewahren Sie Hirsek&ouml;rner und -flocken in einem verschlossenen Glasbeh&auml;lter oder Vorratsdose auf &mdash; gesch&uuml;tzt vor Licht, W&auml;rme und Feuchtigkeit.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>Vorrat f&uuml;r 2&ndash;3 Monate:</strong> Ganze K&ouml;rner halten 6&ndash;12 Monate, aber kaufen Sie am besten nur einen Vorrat f&uuml;r 2&ndash;3 Monate. Mehl und Flocken verbrauchen Sie idealerweise schneller.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>Regionale Produkte bevorzugen:</strong> Hirse aus deutschem, &ouml;sterreichischem oder Schweizer Anbau hat k&uuml;rzere Transportwege und unterst&uuml;tzt die lokale Landwirtschaft. Achten Sie auf Herkunftsangaben.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Aufbewahrungstipps */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Store className="w-6 h-6 text-forest-600 dark:text-forest-400 flex-shrink-0" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              Aufbewahrungstipps
            </h2>
          </div>
          <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6 md:p-8 max-w-3xl">
            <ul className="space-y-3 text-earth-700 dark:text-earth-300">
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>Ganze K&ouml;rner:</strong> 6 bis 12 Monate in einem luftdichten Beh&auml;lter, gesch&uuml;tzt vor Licht und Feuchtigkeit.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>Hirsemehl:</strong> 3 bis 4 Monate bei Raumtemperatur, 6 Monate im K&uuml;hlschrank. Mehl wird schneller ranzig als ganze K&ouml;rner.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>Hirseflocken:</strong> 4 bis 6 Monate in einem verschlossenen Beh&auml;lter. Nach dem &Ouml;ffnen z&uuml;gig verbrauchen.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>Fonio:</strong> 12 Monate und mehr in einem Glasgef&auml;&szlig; oder luftdichten Beutel. Sehr lagerstabil dank niedrigem Fettgehalt.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Links to related pages */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Weiterlesen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href={localePath(locale, '/cooking-guide')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Kochanleitung
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                Kochen, einweichen und zubereiten: Anleitung f&uuml;r jede Hirseart
              </p>
            </Link>
            <Link
              href={localePath(locale, '/recipes')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Rezepte
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                Hirsebrei, Bratlinge, Auflauf und weitere traditionelle Rezepte
              </p>
            </Link>
            <Link
              href={localePath(locale, '/hirse-vs-quinoa')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Hirse vs Quinoa
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                Warum Hirse die nachhaltigere Wahl f&uuml;r DACH-Verbraucher ist
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
