import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Wheat, MapPin, History, ChefHat } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { localePath, isValidLocale, getTranslations, hreflangAlternates } from '@/lib/i18n';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Card, CardBody } from '@/components/ui/Card';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== 'de') return {};

  const t = getTranslations('de');

  return {
    title: `Hirse in der deutschen Küche | ${t.site.siteName}`,
    description:
      'Hirse in der deutschen Küche: Von mittelalterlichem Hirsebrei über regionale Traditionen bis zur modernen Bio-Küche. Geschichte, Rezepte und Wiederentdeckung.',
    alternates: {
      canonical: '/de/hirse-in-der-deutschen-kueche',
      languages: hreflangAlternates('/hirse-in-der-deutschen-kueche'),
    },
  };
}

export function generateStaticParams() {
  return [{ lang: 'de' }];
}

const culturalSections = [
  {
    icon: Wheat,
    title: 'Hirsebrei — Das vergessene Grundnahrungsmittel',
    content: `Hirsebrei war über Jahrhunderte das Alltagsgericht der einfachen Leute in Mitteleuropa. Schon in der Bronzezeit — das belegen archäologische Funde an den Pfahlbauten am Bodensee und Zürichsee — wurde Hirse in der Region angebaut und verzehrt. Die ältesten Hirsekörner aus dem Alpenraum sind über 4.000 Jahre alt.

In Bayern und Österreich war der „Brein" (wie der Hirsebrei im Dialekt heißt) bis ins 18. Jahrhundert das Grundnahrungsmittel schlechthin. Hirse war günstiger als Weizen, anspruchsloser im Anbau und lieferte zuverlässig Erträge — selbst in trockenen Sommern. Der Brei wurde mit Milch, Butter oder Schmalz zubereitet und zu jeder Tageszeit gegessen: morgens dünn als Suppe, mittags fest als Beilage, abends süß mit Honig.

Auch in Norddeutschland, Sachsen und der Lausitz war Hirse weit verbreitet. In vielen Regionen galt der Spruch: „Wer Hirse sät, hat immer zu essen." Hirse war das Korn der Bauern und Handwerker — nahrhaft, ertragreich und genügsam.`,
  },
  {
    icon: MapPin,
    title: 'Regionale Hirse-Traditionen',
    content: `Die deutschsprachige Hirseküche ist überraschend vielfältig, denn jede Region hat ihre eigene Tradition:

Bayern: Der Hirseauflauf und der klassische Hirsebrei mit Milch und Zimt sind bis heute in manchen Wirtshäusern zu finden. In Niederbayern wurde Hirse traditionell als Festtagsspeise bei Hochzeiten und Taufen gereicht. Schwaben: Die historischen Hirsefelder der Schwäbischen Alb sind legendär. Hirsemehlknödel und Hirsefladen gehörten zur bäuerlichen Alltagskost. Tirol: Die Hirseknödel (Hirsenocken) sind ein traditionelles Gericht der Tiroler Bergbauern — gehaltvoll, sättigend und aus wenigen Zutaten zubereitet.

Schweiz: Das Hirsemus — ein cremiger Hirsebrei mit Rahm — war im Mittelland und in der Ostschweiz ein Standardgericht. Lausitz: Die Sorben pflegen bis heute lebendige Hirsetraditionen. Hirsegerichte begleiten sorbische Feste und Bräuche. Franken: Die Hirsesuppe, oft mit Wurzelgemüse und Speck, war ein typisches Wintergericht in fränkischen Bauernstuben.`,
  },
  {
    icon: History,
    title: 'Der Niedergang und die Wiederentdeckung',
    content: `Im 17. und 18. Jahrhundert verdrängten Kartoffel und Mais die Hirse aus den deutschen Küchen. Die Kartoffel lieferte höhere Erträge pro Fläche, und der aus Amerika importierte Mais wurde in Süddeutschland als „Welschkorn" populär. Innerhalb weniger Generationen verschwand die Hirse fast vollständig aus dem Anbau und dem Speiseplan.

Doch das alte Sprichwort „Wer Hirse sät, hat immer zu essen" behielt seine Wahrheit. Ein lebendiges Zeugnis der Hirsetradition ist der Basler Hirsmontag: Im Juni 1576 transportierten Zürcher Ruderer einen Topf heißen Hirsebrei auf dem Wasserweg von Zürich nach Basel — in weniger als einem Tag. Dieses Ereignis symbolisiert die enge Verbindung zwischen den Schweizer Städten und wird noch heute gefeiert.

Seit den 1990er-Jahren erlebt Hirse eine bemerkenswerte Renaissance. Die Bio-Bewegung in Deutschland, Österreich und der Schweiz hat das vergessene Korn als nährstoffreiches, glutenfreies und klimaresistentes Getreide wiederentdeckt. Landwirte in Brandenburg, Bayern und der Steiermark bauen wieder vermehrt Hirse an — unterstützt von Forschungsprogrammen der Universität Hohenheim und anderen Agrarhochschulen.`,
  },
  {
    icon: ChefHat,
    title: 'Moderne deutsche Hirseküche',
    content: `Heute verbindet die deutsche Hirseküche Tradition und Innovation. Bio-Pioniere wie Alnatura und Rapunzel Naturkost haben Hirse als eines der ersten wiederentdeckten Urgetreide in ihre Sortimente aufgenommen. In Bio-Supermärkten, Reformhäusern und zunehmend auch in konventionellen Supermärkten sind Hirseflocken, Hirsemehl und Hirsekörner erhältlich.

Die Universität Hohenheim forscht aktiv an Hirseanbau unter mitteleuropäischen Bedingungen und an der Züchtung neuer, ertragreicher Sorten. Startups und Manufakturen experimentieren mit Hirsedrinks (als Milchalternative), Hirsenudeln, Hirseburger-Patties und sogar Hirsebier.

In der gehobenen Gastronomie taucht Hirse als Risotto-Alternative, als Salatbasis oder in Desserts auf. Food-Blogs und Kochbücher widmen dem Urgetreide eigene Kapitel. Die Kombination aus Nachhaltigkeit, Glutenfreiheit und Nährstoffreichtum macht Hirse zum Trendkorn der modernen deutschen Küche.`,
  },
];

const traditionalDishes = [
  {
    name: 'Hirsebrei',
    origin: 'Bayern, Österreich',
    description: 'Klassischer Brei aus Goldhirse mit Milch, Butter und Zimt — das Grundgericht der mitteleuropäischen Hirsetradition.',
  },
  {
    name: 'Hirseauflauf',
    origin: 'Bayern',
    description: 'Süßer oder herzhafter Auflauf aus gekochter Hirse mit Eiern, Milch und je nach Region Äpfeln oder Käse.',
  },
  {
    name: 'Hirseknödel',
    origin: 'Tirol, Südtirol',
    description: 'Gehaltvolle Knödel aus Hirsegrieß, Eiern und Gewürzen — ein traditionelles Bergbauernessen.',
  },
  {
    name: 'Hirsemus',
    origin: 'Schweiz',
    description: 'Cremiger Hirsebrei mit Rahm, typisch für die Deutschschweiz und das Mittelland.',
  },
  {
    name: 'Hirsesuppe',
    origin: 'Franken, Sachsen',
    description: 'Herzhafte Suppe mit Hirse, Wurzelgemüse und Speck — ein klassisches Wintergericht.',
  },
  {
    name: 'Hirsefladen',
    origin: 'Schwaben',
    description: 'Flache Bratlinge aus gekochter Hirse, oft mit Kräutern gewürzt und in Schmalz gebraten.',
  },
];

export default async function HirseInDerDeutschenKuechePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang) || lang !== 'de') notFound();

  const locale: Locale = lang;
  const t = getTranslations(locale);

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-6">
          {t.breadcrumb['hirse-in-der-deutschen-kueche']}
        </h1>

        <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-10">
          <p>
            Hirse war jahrhundertelang ein Grundnahrungsmittel in Mitteleuropa &mdash; lange bevor
            Kartoffel und Mais die Felder eroberten. Von den bronzezeitlichen Pfahlbauten am
            Bodensee bis zur modernen Bio-K&uuml;che: Entdecken Sie die faszinierende Geschichte
            und die kulinarische Vielfalt der Hirse im deutschsprachigen Raum.
          </p>
        </div>

        {/* Cultural Sections */}
        <div className="space-y-10 mb-12">
          {culturalSections.map((section) => {
            const Icon = section.icon;
            return (
              <section key={section.title}>
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-7 h-7 text-forest-600 dark:text-forest-400 flex-shrink-0" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
                    {section.title}
                  </h2>
                </div>
                <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6 md:p-8">
                  {section.content.split('\n\n').map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-earth-700 dark:text-earth-300 leading-relaxed mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Traditional Dishes */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Traditionelle Hirsegerichte
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {traditionalDishes.map((dish) => (
              <Card key={dish.name} className="h-full">
                <CardBody>
                  <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-1">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-forest-600 dark:text-forest-400 font-medium mb-2">
                    {dish.origin}
                  </p>
                  <p className="text-sm text-earth-600 dark:text-earth-400 leading-relaxed">
                    {dish.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Figures */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Hirse in Zahlen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: '4.000+ Jahre', label: 'Hirseanbau in Mitteleuropa', detail: 'Bronzezeitliche Funde am Bodensee' },
              { value: '1576', label: 'Basler Hirsmontag', detail: 'Heißer Hirsebrei von Zürich nach Basel' },
              { value: '70 %', label: 'weniger Wasser als Reis', detail: 'Ideal für trockene Sommer' },
              { value: '100 %', label: 'glutenfrei', detail: 'Alle Hirsearten sind glutenfrei' },
            ].map((stat) => (
              <Card key={stat.label}>
                <CardBody className="text-center">
                  <p className="text-3xl font-bold text-forest-600 dark:text-forest-400 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-earth-800 dark:text-earth-200 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-xs text-earth-500 dark:text-earth-400">
                    {stat.detail}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* Links to related pages */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Weiterlesen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href={localePath(locale, '/recipes')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Hirse-Rezepte
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                Hirsebrei, Hirseauflauf, Hirseknödel und weitere traditionelle und moderne Rezepte
              </p>
            </Link>
            <Link
              href={localePath(locale, '/wo-hirse-kaufen')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Wo Hirse kaufen
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                Bio-Supermärkte, Reformhäuser und Online-Shops in Deutschland, Österreich und der Schweiz
              </p>
            </Link>
            <Link
              href={localePath(locale, '/ernaehrung-und-gesundheit')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Ernährung &amp; Gesundheit
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                Nährstoffprofile, Gesundheitsvorteile und wissenschaftliche Studien zu Hirse
              </p>
            </Link>
          </div>
        </section>

        {/* Sources */}
        <section className="border-t border-earth-200 dark:border-earth-700 pt-8">
          <h2 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            Quellen und Referenzen
          </h2>
          <ul className="space-y-2 text-sm text-earth-700 dark:text-earth-300">
            <li>Universität Hohenheim &mdash; Forschungsprojekt &bdquo;Hirse in Mitteleuropa&ldquo; (laufend)</li>
            <li>Körber-Grohne, U. &mdash; &bdquo;Nutzpflanzen in Deutschland von der Vorgeschichte bis heute&ldquo;, Theiss Verlag (1995)</li>
            <li>Zohary, D. &amp; Hopf, M. &mdash; &bdquo;Domestication of Plants in the Old World&ldquo;, Oxford University Press (2012)</li>
            <li>Vereinte Nationen &mdash; Resolution A/RES/75/263, Internationales Jahr der Hirse 2023</li>
            <li>Schweizerisches Nationalmuseum &mdash; &bdquo;Der Basler Hirsmontag: Geschichte eines Brauchs&ldquo;</li>
          </ul>
        </section>
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6 mt-10">
          <p className="text-xs text-warm-gray dark:text-earth-400 leading-relaxed max-w-3xl">
            Die Informationen auf dieser Seite basieren auf historischen und wissenschaftlichen
            Quellen. Sie dienen der Darstellung des kulinarischen und landwirtschaftlichen Erbes
            Mitteleuropas und erheben keinen Anspruch auf Vollständigkeit.
          </p>
        </div>
      </div>
    </main>
  );
}
