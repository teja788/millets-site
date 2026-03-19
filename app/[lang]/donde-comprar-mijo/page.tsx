import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Store, ShoppingCart, Globe, MapPin } from 'lucide-react';
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
  if (lang !== 'es') return {};

  return {
    title: 'Dónde comprar mijo en España y Latinoamérica | Simply Millets',
    description:
      'Guía completa para comprar mijo, harina de mijo y copos de mijo en España (herbolarios, tiendas ecológicas) y en México y Latinoamérica. Precios, variedades y consejos.',
    alternates: {
      canonical: '/es/donde-comprar-mijo',
      languages: { es: '/es/donde-comprar-mijo' },
    },
  };
}

export function generateStaticParams() {
  return [{ lang: 'es' }];
}

const spainStores = [
  {
    name: 'Herbolarios',
    examples: 'Herbolario Navarro, herbolarios locales, herboristerías de barrio',
    products: 'Mijo decorticado, harina de mijo, copos de mijo',
    priceRange: '4 a 7 \u20AC / kg',
    note: 'Los herbolarios son una excelente opción para encontrar mijo ecológico a buen precio. Pregunte por mijo decorticado o harina de mijo.',
  },
  {
    name: 'Tiendas ecológicas',
    examples: 'Veritas, tiendas eco locales, cooperativas de consumo',
    products: 'Mijo decorticado bio, harina de mijo, copos de mijo, sorgo',
    priceRange: '5 a 9 \u20AC / kg',
    note: 'Buena selección de productos ecológicos certificados. Busque en la sección de cereales y granos integrales.',
  },
  {
    name: 'Supermercados',
    examples: 'Carrefour Bio, El Corte Inglés gourmet, Mercadona (sección eco)',
    products: 'Mijo decorticado (sección bio), a veces harina de mijo',
    priceRange: '5 a 8 \u20AC / kg',
    note: 'Disponibilidad variable según la tienda. Busque en la sección de cereales ecológicos o productos sin gluten.',
  },
  {
    name: 'Tiendas en línea (España)',
    examples: 'Amazon.es, iHerb, tiendas especializadas en alimentación ecológica',
    products: 'Gama completa: granos, harina, copos, sorgo',
    priceRange: '4 a 9 \u20AC / kg',
    note: 'Ideal para variedades difíciles de encontrar. Compare siempre los precios por kilo.',
  },
];

const latamStores = [
  {
    name: 'Tiendas orgánicas (México)',
    examples: 'Chedraui orgánico, tiendas en Polanco, Condesa y Roma (CDMX)',
    products: 'Mijo decorticado, harina de mijo, mezclas de cereales',
    priceRange: '80 a 150 MXN / kg',
    note: 'Las tiendas orgánicas de las grandes ciudades mexicanas ofrecen cada vez más variedades de mijo. Busque en la sección de granos y semillas.',
  },
  {
    name: 'Amazon México',
    examples: 'Amplia variedad de marcas nacionales e importadas',
    products: 'Mijo decorticado, harina de mijo, copos de mijo',
    priceRange: '100 a 200 MXN / kg',
    note: 'Gran variedad disponible con envío a todo México. Revise las opiniones y compare marcas.',
  },
  {
    name: 'Mercados y tianguis',
    examples: 'Mercados en CDMX, Guadalajara, Oaxaca y otras ciudades',
    products: 'Mijo en grano, a veces harina de mijo',
    priceRange: '50 a 120 MXN / kg',
    note: 'Los mejores precios se encuentran en mercados locales y tianguis orgánicos. Pregunte por mijo o mijo perla.',
  },
  {
    name: 'Latinoamérica en general',
    examples: 'Mercados orgánicos en Buenos Aires, Bogotá, Lima, Santiago',
    products: 'Mijo decorticado, harina de mijo',
    priceRange: 'Variable según el país',
    note: 'En las grandes capitales latinoamericanas, los mercados orgánicos y las tiendas de productos naturales son el mejor punto de partida.',
  },
];

const productTypes = [
  {
    name: 'Mijo decorticado (granos enteros)',
    description: 'Granos de mijo listos para cocinar. La forma más común y versátil.',
    uses: 'Risotto, pilaf, gachas, ensaladas, guarnición',
    varieties: 'Mijo común (proso), mijo perla (bajra)',
  },
  {
    name: 'Harina de mijo',
    description: 'Harina fina sin gluten, perfecta para repostería y gachas.',
    uses: 'Creps, pan, bizcochos, gachas, tortitas',
    varieties: 'Harina de mijo perla, harina de eleusine (ragi), harina de sorgo',
  },
  {
    name: 'Copos de mijo',
    description: 'Granos de mijo aplanados y precocidos, similares a los copos de avena.',
    uses: 'Porridge rápido, muesli, granola',
    varieties: 'Copos de mijo común',
  },
];

export default async function DondeComprarMijoPage({
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
          Dónde comprar mijo
        </h1>

        <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-10">
          <p>
            Ya sea en España o en Latinoamérica, encontrar mijo es más fácil de lo que parece.
            Desde herbolarios y tiendas ecológicas hasta supermercados y tiendas en línea, aquí
            tiene su guía completa para comprar mijo, harina de mijo y copos de mijo al mejor precio.
          </p>
        </div>

        {/* Spain Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-forest-600 dark:text-forest-400 flex-shrink-0" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              Comprar mijo en España
            </h2>
          </div>
          <div className="space-y-4">
            {spainStores.map((store) => (
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
                  <strong>Establecimientos:</strong> {store.examples}
                </p>
                <p className="text-sm text-earth-600 dark:text-earth-400 mb-2">
                  <strong>Productos:</strong> {store.products}
                </p>
                <p className="text-sm text-earth-700 dark:text-earth-300 bg-white/50 dark:bg-earth-700/50 rounded-lg p-3">
                  {store.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mexico / LATAM Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-forest-600 dark:text-forest-400 flex-shrink-0" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              Comprar mijo en México y Latinoamérica
            </h2>
          </div>
          <div className="space-y-4">
            {latamStores.map((store) => (
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
                  <strong>Establecimientos:</strong> {store.examples}
                </p>
                <p className="text-sm text-earth-600 dark:text-earth-400 mb-2">
                  <strong>Productos:</strong> {store.products}
                </p>
                <p className="text-sm text-earth-700 dark:text-earth-300 bg-white/50 dark:bg-earth-700/50 rounded-lg p-3">
                  {store.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Guide */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <ShoppingCart className="w-6 h-6 text-forest-600 dark:text-forest-400 flex-shrink-0" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              ¿Qué productos comprar?
            </h2>
          </div>
          <div className="space-y-4">
            {productTypes.map((product) => (
              <Card key={product.name}>
                <CardBody>
                  <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed mb-2">
                    {product.description}
                  </p>
                  <p className="text-sm text-earth-600 dark:text-earth-400 mb-1">
                    <strong>Usos:</strong> {product.uses}
                  </p>
                  <p className="text-sm text-earth-600 dark:text-earth-400">
                    <strong>Variedades disponibles:</strong> {product.varieties}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* Conservation Tips */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Store className="w-6 h-6 text-forest-600 dark:text-forest-400 flex-shrink-0" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              Consejos de conservación
            </h2>
          </div>
          <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6 md:p-8 max-w-3xl">
            <ul className="space-y-3 text-earth-700 dark:text-earth-300">
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>Granos enteros:</strong> de 6 a 12 meses en un recipiente hermético, protegido de la luz y la humedad.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>Harina de mijo:</strong> de 3 a 4 meses a temperatura ambiente, 6 meses en el refrigerador. La harina se enrancia más rápido que los granos.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">&bull;</span>
                <span><strong>Copos de mijo:</strong> de 6 a 12 meses en un recipiente hermético y seco. Ideal para porridge rápido y granola.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Links to related pages */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Para saber más
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href={localePath(locale, '/cooking-guide')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Guía de cocción
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                Cómo cocinar, remojar y preparar cada tipo de mijo
              </p>
            </Link>
            <Link
              href={localePath(locale, '/recipes')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Recetas
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                Recetas deliciosas a base de mijo para toda la familia
              </p>
            </Link>
            <Link
              href={localePath(locale, '/mijo-en-la-cocina-hispanica')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                El mijo en la cocina hispánica
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                Tradiciones culinarias y patrimonio gastronómico
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
