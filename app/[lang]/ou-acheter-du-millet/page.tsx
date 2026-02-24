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
  if (lang !== 'fr') return {};

  return {
    title: 'Où acheter du millet en France et au Canada | Simply Millets',
    description:
      'Guide complet pour acheter du millet, du fonio et de la farine de mil en France (Biocoop, épiceries africaines) et au Canada (Bulk Barn, magasins bio). Prix, variétés et conseils.',
    alternates: {
      canonical: '/fr/ou-acheter-du-millet',
      languages: { fr: '/fr/ou-acheter-du-millet' },
    },
  };
}

export function generateStaticParams() {
  return [{ lang: 'fr' }];
}

const franceStores = [
  {
    name: 'Magasins bio',
    examples: 'Biocoop, La Vie Claire, Naturalia, Bio c\' Bon',
    products: 'Millet décortiqué, farine de millet, flocons de millet, fonio',
    priceRange: '4 à 7 \u20AC / kg',
    note: 'Le rayon « céréales en vrac » est souvent le moins cher. Demandez le millet décortiqué ou les flocons.',
  },
  {
    name: 'Épiceries africaines',
    examples: 'Château-Rouge (Paris 18e), marché de Noailles (Marseille), quartiers afro de Lyon et Bordeaux',
    products: 'Farine de mil, couscous de mil (thiéré/dégué), mil en grains, fonio',
    priceRange: '2 à 4 \u20AC / kg',
    note: 'Les meilleurs prix et le plus grand choix. Demandez « farine de mil » ou « soungouf » (farine de mil en wolof).',
  },
  {
    name: 'Grande distribution',
    examples: 'Carrefour Bio, Auchan Bio, Leclerc, Monoprix',
    products: 'Millet décortiqué (rayon bio), parfois fonio',
    priceRange: '5 à 8 \u20AC / kg',
    note: 'Disponibilité variable selon les magasins. Cherchez au rayon « céréales et légumineuses bio ».',
  },
  {
    name: 'Boutiques en ligne (France)',
    examples: 'Greenweez, Kazidomi, La Fourche, Amazon',
    products: 'Gamme complète : grains, farine, flocons, fonio, sorgho',
    priceRange: '4 à 9 \u20AC / kg',
    note: 'Pratique pour les variétés difficiles à trouver (fonio, sorgho). Comparez les prix au kilo.',
  },
];

const canadaStores = [
  {
    name: 'Bulk Barn',
    examples: 'Plus de 300 magasins au Canada',
    products: 'Millet décortiqué en vrac, flocons de millet',
    priceRange: '4 à 6 CAD / kg',
    note: 'Le meilleur rapport qualité-prix. Achetez en vrac pour économiser.',
  },
  {
    name: 'Épiceries santé',
    examples: 'Rachelle-Béry (Québec), Avril Supermarché Santé, Tau',
    products: 'Millet bio, farine de millet, flocons',
    priceRange: '5 à 8 CAD / kg',
    note: 'Bonne sélection de produits bio certifiés. Rayon « céréales et grains entiers ».',
  },
  {
    name: 'Épiceries africaines',
    examples: 'Quartier Parc-Extension (Montréal), quartier Vanier (Ottawa), quartier Jane-Finch (Toronto)',
    products: 'Farine de mil, couscous de mil, fonio, mil en grains',
    priceRange: '3 à 5 CAD / kg',
    note: 'Les mêmes produits qu\'en Afrique de l\'Ouest, importés du Sénégal et du Mali.',
  },
  {
    name: 'Supermarchés',
    examples: 'Provigo, IGA, Metro (rayon bio), Loblaws',
    products: 'Millet décortiqué bio (marques Bob\'s Red Mill, GoGo Quinoa)',
    priceRange: '6 à 10 CAD / kg',
    note: 'Disponibilité limitée. Cherchez au rayon des grains entiers ou du sans gluten.',
  },
];

const productTypes = [
  {
    name: 'Millet décortiqué (grains entiers)',
    description: 'Grains de millet prêts à cuire. La forme la plus courante et la plus polyvalente.',
    uses: 'Risotto, pilaf, porridge, salades, accompagnement',
    varieties: 'Millet commun (proso), millet perlé (chandelle)',
  },
  {
    name: 'Farine de millet / farine de mil',
    description: 'Farine fine sans gluten, parfaite pour la pâtisserie et les bouillies.',
    uses: 'Crêpes, pain, gâteaux, bouillie, galettes',
    varieties: 'Farine de mil (perlé), farine d\'éleusine (ragi), farine de sorgho',
  },
  {
    name: 'Couscous de mil (thiéré / dégué)',
    description: 'Grains de mil roulés et séchés, spécifiques à la cuisine ouest-africaine.',
    uses: 'Thiéré, thiakry, ngalakh',
    varieties: 'Couscous de mil à chandelle (le plus courant)',
  },
  {
    name: 'Fonio',
    description: 'Micro-grain africain en plein essor. Cuit en 5 minutes, naturellement sans gluten.',
    uses: 'Taboulé, pilaf, salades, accompagnement',
    varieties: 'Fonio blanc (Digitaria exilis)',
  },
  {
    name: 'Flocons de millet',
    description: 'Grains de millet aplatis et précuits, comme des flocons d\'avoine.',
    uses: 'Porridge express, muesli, granola',
    varieties: 'Flocons de millet commun',
  },
];

export default async function OuAcheterDuMilletPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang) || lang !== 'fr') notFound();

  const locale: Locale = lang;

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-6">
          Où acheter du millet
        </h1>

        <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-10">
          <p>
            Que vous soyez en France ou au Canada, trouver du millet est plus facile qu&apos;on ne le pense.
            Des magasins bio aux épiceries africaines, en passant par la grande distribution et les
            boutiques en ligne, voici votre guide complet pour acheter du millet, du fonio et de la
            farine de mil au meilleur prix.
          </p>
        </div>

        {/* France Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-forest-600 dark:text-forest-400 flex-shrink-0" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              Acheter du millet en France
            </h2>
          </div>
          <div className="space-y-4">
            {franceStores.map((store) => (
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
                  <strong>Enseignes :</strong> {store.examples}
                </p>
                <p className="text-sm text-earth-600 dark:text-earth-400 mb-2">
                  <strong>Produits :</strong> {store.products}
                </p>
                <p className="text-sm text-earth-700 dark:text-earth-300 bg-white/50 dark:bg-earth-700/50 rounded-lg p-3">
                  {store.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Canada Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-forest-600 dark:text-forest-400 flex-shrink-0" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100">
              Acheter du millet au Canada
            </h2>
          </div>
          <div className="space-y-4">
            {canadaStores.map((store) => (
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
                  <strong>Enseignes :</strong> {store.examples}
                </p>
                <p className="text-sm text-earth-600 dark:text-earth-400 mb-2">
                  <strong>Produits :</strong> {store.products}
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
              Quels produits acheter ?
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
                    <strong>Utilisations :</strong> {product.uses}
                  </p>
                  <p className="text-sm text-earth-600 dark:text-earth-400">
                    <strong>Variétés disponibles :</strong> {product.varieties}
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
              Conseils de conservation
            </h2>
          </div>
          <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6 md:p-8 max-w-3xl">
            <ul className="space-y-3 text-earth-700 dark:text-earth-300">
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">•</span>
                <span><strong>Grains entiers :</strong> 6 à 12 mois dans un récipient hermétique, à l&apos;abri de la lumière et de l&apos;humidité.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">•</span>
                <span><strong>Farine de millet :</strong> 3 à 4 mois à température ambiante, 6 mois au réfrigérateur. La farine rancit plus vite que les grains.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">•</span>
                <span><strong>Couscous de mil séché :</strong> 12 mois et plus dans un sac hermétique dans un placard sec.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 dark:text-forest-400 mt-1">•</span>
                <span><strong>Fonio :</strong> 12 mois dans un bocal en verre ou un sac hermétique. Très stable grâce à sa faible teneur en matières grasses.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Links to related pages */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Pour aller plus loin
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href={localePath(locale, '/cooking-guide')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Guide de cuisson
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                Comment cuire, tremper et préparer chaque type de millet
              </p>
            </Link>
            <Link
              href={localePath(locale, '/recipes')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Recettes
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                13 recettes françaises et ouest-africaines à base de millet
              </p>
            </Link>
            <Link
              href={localePath(locale, '/culture-africaine-du-mil')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Culture africaine du mil
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                Traditions culinaires et patrimoine sahélien
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
