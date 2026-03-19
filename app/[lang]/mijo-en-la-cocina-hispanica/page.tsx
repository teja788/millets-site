import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Wheat, Users, Globe, Sprout, ChefHat, TrendingUp } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { localePath, isValidLocale } from '@/lib/i18n';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Card, CardBody } from '@/components/ui/Card';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== 'es') return {};

  return {
    title: 'Mijo en la cocina hispánica | Simply Millets',
    description:
      'El mijo en la tradición culinaria española y latinoamericana: gachas, fusión indo-hispánica, superalimento moderno y futuro sostenible.',
    alternates: {
      canonical: '/es/mijo-en-la-cocina-hispanica',
      languages: { es: '/es/mijo-en-la-cocina-hispanica' },
    },
  };
}

export function generateStaticParams() {
  return [{ lang: 'es' }];
}

const culturalSections = [
  {
    icon: Wheat,
    title: 'El mijo en la historia de la Península Ibérica',
    content: `El mijo (Panicum miliaceum) tiene una historia milenaria en la Península Ibérica. Los romanos ya cultivaban mijo en Hispania, donde era un cereal básico para las legiones y la población rural. Durante la Edad Media, el mijo fue un cultivo fundamental en el norte de España, especialmente en Galicia, Asturias y el País Vasco, donde las condiciones climáticas húmedas favorecían su crecimiento.

En Castilla y Extremadura, las gachas de mijo eran el alimento cotidiano de pastores y campesinos. El mijo aparece mencionado en documentos medievales como parte del diezmo agrícola y en las ordenanzas de precios de los mercados castellanos. Con la llegada del maíz desde América en el siglo XVI, el mijo fue gradualmente desplazado, pero su huella permanece en la toponimia española: pueblos como Mijo (Asturias), Milheirós (Galicia) y Millanes (Extremadura) atestiguan su importancia histórica.`,
  },
  {
    icon: Users,
    title: 'Las gachas: tradición española milenaria',
    content: `Las gachas son uno de los platos más antiguos de la cocina española y originalmente se preparaban con harina de mijo. Esta tradición pervive en varias regiones:

En Andalucía, las gachas manchegas se elaboran con harina, agua, aceite de oliva y sal, y se sirven como desayuno o merienda. En Extremadura, las gachas de pastor combinan harina con grasa de cerdo y pimentón, un plato reconfortante para las frías noches de trashumancia. En La Mancha, las gachas dulces llevan miel, anís y canela, una versión festiva que se prepara en fiestas y celebraciones.

Aunque hoy en día las gachas se preparan mayoritariamente con harina de trigo o de almortas, la tradición original usaba mijo. Recuperar las gachas de mijo es reconectar con las raíces culinarias más profundas de España, añadiendo además los beneficios nutricionales de un cereal sin gluten y rico en minerales.`,
  },
  {
    icon: Globe,
    title: 'El mijo en Latinoamérica',
    content: `Aunque el maíz domina la cocina latinoamericana, el mijo tiene un potencial enorme en la región. La tradición de la tortilla, el atole y las arepas demuestra que los cereales molidos son la base de la alimentación de cientos de millones de personas desde México hasta Argentina.

En México, el atole de mijo es una variación nutritiva del atole tradicional de maíz, con un perfil nutricional superior en calcio y fibra. En la cocina andina de Perú, Bolivia y Ecuador, donde la quinoa es reina, el mijo puede complementar la dieta como cereal alternativo de bajo coste. En Argentina y Uruguay, los movimientos de alimentación saludable están incorporando el mijo en ensaladas, guisos y preparaciones vegetarianas.

El potencial del mijo en Latinoamérica es inmenso: su resistencia a la sequía lo hace ideal para regiones áridas de México, el noreste de Brasil y la Patagonia, mientras que su versatilidad culinaria permite integrarlo en las tradiciones gastronómicas locales sin romper con la identidad cultural.`,
  },
  {
    icon: Sprout,
    title: 'El mijo como superalimento moderno',
    content: `En España y México, el movimiento de alimentación saludable ha redescubierto el mijo como un superalimento accesible. A diferencia de la quinoa o las semillas de chía, que requieren importación desde zonas lejanas, el mijo puede cultivarse localmente en climas mediterráneos y semiáridos.

Las tiendas ecológicas españolas como Veritas y los herbolarios ofrecen cada vez más variedades de mijo: decorticado, en copos y en harina. En México, las tiendas orgánicas de CDMX, Guadalajara y Monterrey incluyen el mijo entre sus cereales premium. La comunidad celíaca ha adoptado el mijo como alternativa segura al trigo, y los nutricionistas lo recomiendan por su bajo índice glucémico y su riqueza en magnesio.

Las redes sociales y los blogs de cocina saludable en español están impulsando el interés por el mijo, con recetas que van desde bowls energéticos hasta hamburguesas vegetales, pasando por postres sin gluten y papillas para bebés.`,
  },
  {
    icon: ChefHat,
    title: 'Fusión indo-hispánica',
    content: `La cocina india utiliza los mijos desde hace milenios: el ragi dosa del sur de India, el bajra roti de Rajastán o el jowar bhakri de Maharashtra son preparaciones cotidianas para cientos de millones de personas. Esta riqueza culinaria ofrece una oportunidad única de fusión con la cocina hispánica.

Las especias compartidas entre ambas tradiciones —comino, cilantro, pimentón, cúrcuma— facilitan la creación de platos fusión. Un risotto de mijo con azafrán y especias indias, una paella de mijo con verduras al estilo del khichdi, o unas tortitas de ragi con salsa romesco son ejemplos de cómo ambas tradiciones pueden enriquecerse mutuamente.

En ciudades como Madrid, Barcelona, Ciudad de México y Buenos Aires, los restaurantes de fusión están empezando a explorar estas combinaciones, creando una nueva cocina que honra tanto la tradición hispánica como la sabiduría culinaria india.`,
  },
  {
    icon: TrendingUp,
    title: 'El futuro del mijo en el mundo hispanohablante',
    content: `El mijo se encuentra en un momento de inflexión en el mundo hispanohablante. Varios factores convergen para impulsar su adopción:

La crisis climática hace del mijo un cultivo estratégico: necesita un 70 % menos de agua que el arroz y tolera suelos pobres y temperaturas extremas. España, con su clima cada vez más árido, podría beneficiarse enormemente del cultivo de mijo como alternativa al trigo y al maíz. En Latinoamérica, las regiones semiáridas de México, Brasil y Argentina son candidatas ideales para la producción de mijo.

La Unión Europea y la FAO promueven activamente la diversificación de cereales, y el Año Internacional del Mijo declarado por las Naciones Unidas en 2023 ha dado visibilidad global a este cereal olvidado. El mercado de productos sin gluten, en constante crecimiento en España y Latinoamérica, representa otra oportunidad para el mijo.

Con más de 500 millones de hispanohablantes en el mundo, el potencial de mercado es enorme. El mijo no es solo un cereal del pasado: es un alimento del futuro.`,
  },
];

const traditionalDishes = [
  {
    name: 'Gachas de mijo',
    origin: 'España (Castilla, Andalucía, Extremadura)',
    description: 'Plato tradicional de harina de mijo cocida con agua, aceite y sal. Base de la alimentación campesina durante siglos.',
  },
  {
    name: 'Paella de mijo',
    origin: 'Fusión mediterránea',
    description: 'Versión nutritiva de la paella valenciana sustituyendo el arroz por mijo decorticado. Rico en fibra y sin gluten.',
  },
  {
    name: 'Tortillas de mijo',
    origin: 'Fusión mexicana',
    description: 'Tortillas elaboradas con harina de mijo, una alternativa sin gluten a las tortillas de maíz o trigo.',
  },
  {
    name: 'Atole de mijo',
    origin: 'Fusión mexicana',
    description: 'Bebida caliente y reconfortante de harina de mijo con canela, vainilla y piloncillo.',
  },
  {
    name: 'Empanadas de mijo',
    origin: 'Fusión argentina',
    description: 'Masa de mijo rellena de carne, verduras o queso. Horneadas o fritas según la tradición regional.',
  },
  {
    name: 'Sopa de mijo',
    origin: 'España / Latinoamérica',
    description: 'Sopa reconfortante con granos de mijo, verduras de temporada y hierbas aromáticas.',
  },
  {
    name: 'Ensalada mediterránea de mijo',
    origin: 'España',
    description: 'Mijo cocido con tomate, pepino, aceitunas, aceite de oliva virgen extra y hierbas frescas.',
  },
  {
    name: 'Budín de mijo',
    origin: 'España / Latinoamérica',
    description: 'Postre cremoso de mijo cocido en leche con canela, vainilla y miel. Sin gluten y nutritivo.',
  },
];

export default async function MijoEnLaCocinaHispanicaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang) || lang !== 'es') notFound();

  const locale: Locale = lang;

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-6">
          Mijo en la cocina hispánica
        </h1>

        <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-10">
          <p>
            El mijo no es un recién llegado a la cocina hispánica: fue un cereal fundamental
            en la Península Ibérica durante siglos, desde la Hispania romana hasta la España
            medieval. Hoy, este grano ancestral vuelve a la mesa como superalimento moderno,
            con un potencial enorme tanto en España como en toda Latinoamérica.
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
            Platos tradicionales e ideas de fusión
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
            El mijo en cifras
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: '8 000+ años', label: 'de cultivo del mijo', detail: 'Domesticado en Asia y África hace milenios' },
              { value: '93 países', label: 'cultivan mijo', detail: 'Fuente: FAO, 2023' },
              { value: '300 mm', label: 'de lluvia son suficientes', detail: 'Frente a 1 200 mm para el arroz' },
              { value: '500 M+', label: 'de hispanohablantes', detail: 'Un mercado enorme por descubrir' },
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
            Para saber más
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href={localePath(locale, '/recipes')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Recetas de mijo
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                Gachas, risotto, tortitas, postres y mucho más
              </p>
            </Link>
            <Link
              href={localePath(locale, '/history')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Historia de los mijos
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                De la domesticación antigua al Año Internacional del Mijo
              </p>
            </Link>
            <Link
              href={localePath(locale, '/donde-comprar-mijo')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Dónde comprar mijo
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                En España, México y toda Latinoamérica
              </p>
            </Link>
          </div>
        </section>

        {/* Sources */}
        <section className="border-t border-earth-200 dark:border-earth-700 pt-8">
          <h2 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            Fuentes y referencias
          </h2>
          <ul className="space-y-2 text-sm text-earth-700 dark:text-earth-300">
            <li>FAO &mdash; &laquo;Sorghum and millets in human nutrition&raquo;, Food and Nutrition Series No. 27 (1995)</li>
            <li>ICRISAT &mdash; Pearl Millet: Biology and Genetic Improvement (2020)</li>
            <li>Naciones Unidas &mdash; Resolución A/RES/75/263 declarando 2023 Año Internacional del Mijo</li>
            <li>Peña-Chocarro L. &amp; Zapata L. &mdash; &laquo;Crop diversity in Neolithic Iberia&raquo;, Vegetation History and Archaeobotany (2003)</li>
            <li>FAOSTAT &mdash; Producción mundial de mijo, datos 2022</li>
          </ul>
        </section>
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6 mt-10">
          <p className="text-xs text-warm-gray dark:text-earth-400 leading-relaxed max-w-3xl">
            La información presentada en esta página procede de fuentes académicas e
            institucionales. Su objetivo es valorizar el patrimonio culinario y agrícola
            del mundo hispanohablante sin pretensión de exhaustividad.
          </p>
        </div>
      </div>
    </main>
  );
}
