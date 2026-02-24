import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Wheat, Users, Globe, Sprout, Music, TrendingUp } from 'lucide-react';
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
  if (lang !== 'fr') return {};

  return {
    title: 'Culture africaine du mil | Simply Millets',
    description:
      'Le mil en Afrique de l\'Ouest : traditions culinaires du Sahel, rôle dans la sécurité alimentaire, variétés régionales, cérémonies et importance économique pour 100 millions de personnes.',
    alternates: {
      canonical: '/fr/culture-africaine-du-mil',
      languages: { fr: '/fr/culture-africaine-du-mil' },
    },
  };
}

export function generateStaticParams() {
  return [{ lang: 'fr' }];
}

const culturalSections = [
  {
    icon: Wheat,
    title: 'Le mil, pilier alimentaire du Sahel',
    content: `Le mil (Pennisetum glaucum), appelé « souna » au Sénégal, « sanyo » au Mali ou « gero » au Niger, est bien plus qu'une simple céréale en Afrique de l'Ouest : c'est le fondement de la sécurité alimentaire pour plus de 100 millions de personnes dans la bande sahélienne. Du Sénégal au Tchad, en passant par le Mali, le Burkina Faso, le Niger et la Guinée, le mil constitue la base de l'alimentation quotidienne.

Contrairement au blé ou au riz, le mil pousse dans des sols pauvres et arides, avec seulement 300 à 500 mm de précipitations annuelles. Cette résilience exceptionnelle en fait la céréale la plus adaptée aux conditions climatiques du Sahel, où les sécheresses sont fréquentes et les terres arables limitées. Selon la FAO, le mil représente entre 30 et 60 % de l'apport calorique quotidien dans les zones rurales sahéliennes.`,
  },
  {
    icon: Users,
    title: 'Le « couscous de mil » : tradition partagée',
    content: `Le couscous de mil (thiéré en wolof, bassi en bambara) est le plat fédérateur de l'Afrique de l'Ouest francophone. Chaque pays, chaque ethnie possède sa propre version :

Au Sénégal, le thiéré se prépare avec du lait sucré et des raisins secs pour le goûter, ou en version salée avec un ragoût de légumes et de viande pour le dîner du vendredi. Au Mali, le bassi accompagne les sauces à base de feuilles de baobab (lalo) ou d'arachide. Au Burkina Faso, le tô de mil — une pâte épaisse servie avec une sauce gombo ou tomate — est le repas quotidien par excellence. Au Niger, le fura — des boules de mil pilé mélangées au lait caillé (nono) — est à la fois boisson et repas.

Cette diversité de préparations reflète la richesse culinaire d'un continent où le mil a été domestiqué il y a plus de 4 500 ans, dans la région du Mali actuel.`,
  },
  {
    icon: Music,
    title: 'Le mil dans les cérémonies et célébrations',
    content: `En Afrique de l'Ouest, le mil occupe une place centrale dans les événements sociaux et religieux :

Lors des baptêmes (ngénté au Sénégal), la bouillie de mil est le premier aliment offert aux invités, symbolisant la prospérité et la bénédiction pour le nouveau-né. Aux mariages, le thiéré ou le lakh (bouillie sucrée au niébé) est servi en grande quantité, représentant l'abondance du foyer.

Pendant le Tamkharite (Achoura), le couscous de mil accompagné de viande est le plat traditionnel partagé entre voisins. Au Sénégal, le ngalakh — une bouillie sucrée à base de mil, de pâte d'arachide et de fruit de baobab — est le dessert incontournable du Vendredi saint et de Pâques, partagé entre familles chrétiennes et musulmanes dans un esprit de fraternité.

Le dolo, une bière de mil brassée artisanalement, est au cœur des cérémonies traditionnelles au Burkina Faso, au Mali et en Côte d'Ivoire. Sa préparation, confiée aux « dolotières » (brasseuses), est un savoir-faire transmis de mère en fille depuis des générations.`,
  },
  {
    icon: Globe,
    title: 'Variétés régionales du mil en Afrique francophone',
    content: `L'Afrique de l'Ouest cultive plusieurs espèces et variétés de mil, chacune adaptée à son terroir :

Le mil à chandelle (Pennisetum glaucum), ou « petit mil », est la variété dominante du Sahel. Cultivé du Sénégal au Tchad, il se décline en centaines de variétés locales sélectionnées par les paysans au fil des siècles : « souna » à cycle court au Sénégal, « sanyo » au Mali, « haïni kiré » au Niger.

Le fonio (Digitaria exilis), surnommé « la graine de l'univers » par les Dogons du Mali, est un millet à très petits grains cultivé en Guinée, au Mali, au Burkina Faso et au Sénégal. Considéré comme le plus ancien grain cultivé d'Afrique, il connaît aujourd'hui un renouveau spectaculaire en France, où il est vendu dans les magasins bio sous l'appellation « fonio ».

Le sorgho (Sorghum bicolor), bien que techniquement distinct des millets, est cultivé et consommé conjointement dans toute la région. Le « gros mil » est la base du tô au Mali et au Burkina Faso.

Le teff (Eragrostis tef), originaire d'Éthiopie, commence à être cultivé expérimentalement au Sahel.`,
  },
  {
    icon: Sprout,
    title: 'Le mil face au changement climatique',
    content: `Dans un Sahel où les températures augmentent 1,5 fois plus vite que la moyenne mondiale, le mil est une arme de résilience alimentaire. Ses atouts face au changement climatique sont multiples :

Il tolère des températures au sol dépassant 45 °C, là où le maïs et le riz échouent. Son cycle de croissance court (60 à 90 jours pour les variétés précoces) permet de s'adapter à des saisons des pluies de plus en plus courtes et imprévisibles. Son système racinaire profond lui permet d'accéder à l'eau en profondeur même en période de stress hydrique.

L'Année internationale du mil, déclarée par les Nations unies en 2023, a mis en lumière le rôle crucial de cette céréale dans l'atteinte des Objectifs de développement durable (ODD), en particulier l'ODD 2 (Faim « zéro ») et l'ODD 13 (Lutte contre le changement climatique).

Des centres de recherche comme l'ICRISAT (Institut international de recherche sur les cultures des zones tropicales semi-arides) travaillent avec les paysans sahéliens pour développer des variétés de mil encore plus résistantes et productives.`,
  },
  {
    icon: TrendingUp,
    title: 'Importance économique pour les familles du Sahel',
    content: `Le mil est le moteur économique des zones rurales sahéliennes. Au Niger, premier producteur mondial de mil avec plus de 3,5 millions de tonnes par an, cette céréale représente près de 65 % de la production céréalière nationale. Au Mali et au Burkina Faso, les chiffres sont comparables.

Pour les petits exploitants — souvent des femmes qui gèrent les parcelles familiales — le mil est à la fois l'aliment de base et la principale source de revenus. La transformation du mil en farine, en couscous ou en bouillie génère des activités économiques tout au long de la chaîne de valeur : meunières, vendeuses de bouillie dans les marchés, brasseuses de dolo.

En France et au Canada, la diaspora ouest-africaine maintient vivante cette culture culinaire. Les épiceries africaines de Paris (Château-Rouge), Marseille, Montréal et Ottawa proposent de la farine de mil, du couscous de mil et du fonio importés du Sénégal et du Mali. Cette demande croissante contribue directement au développement économique des communautés productrices au Sahel.`,
  },
];

const traditionalDishes = [
  {
    name: 'Thiéré',
    origin: 'Sénégal',
    description: 'Couscous de mil cuit à la vapeur, servi au lait sucré ou en version salée avec ragoût de légumes.',
    slug: 'couscous-de-mil-thiere',
  },
  {
    name: 'Tô de mil',
    origin: 'Mali, Burkina Faso',
    description: 'Pâte épaisse de farine de mil servie avec une sauce gombo, arachide ou feuilles de baobab.',
    slug: 'to-de-mil',
  },
  {
    name: 'Bouillie de mil',
    origin: 'Tout le Sahel',
    description: 'Porridge de farine de mil, petit-déjeuner quotidien de millions de Sahéliens.',
    slug: 'bouillie-de-mil',
  },
  {
    name: 'Thiakry / Dégué',
    origin: 'Sénégal, Mali, Côte d\'Ivoire',
    description: 'Dessert de couscous de mil au yaourt sucré, parfumé à la vanille et à la muscade.',
    slug: 'thiakry-degue',
  },
  {
    name: 'Ngalakh',
    origin: 'Sénégal',
    description: 'Bouillie sucrée au mil, pâte d\'arachide et fruit de baobab, partagée à Pâques.',
    slug: 'ngalakh',
  },
  {
    name: 'Fondé',
    origin: 'Sénégal, Mali',
    description: 'Bouillie de mil fermenté, consommée froide en saison chaude.',
    slug: 'fonde-bouillie-fermentee',
  },
  {
    name: 'Lakh',
    origin: 'Sénégal',
    description: 'Bouillie de mil enrichie de pâte de niébé (haricots à œil noir).',
    slug: 'lakh-bouillie-niebe',
  },
  {
    name: 'Fura',
    origin: 'Niger, Nigeria',
    description: 'Boules de mil pilé mélangées au lait caillé (nono), boisson-repas rafraîchissante.',
    slug: 'fura-boules-de-mil',
  },
];

export default async function CultureAfricaineDuMilPage({
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
          Culture africaine du mil
        </h1>

        <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-10">
          <p>
            En Afrique de l&apos;Ouest, le mil n&apos;est pas un simple aliment : c&apos;est le
            fil conducteur d&apos;une civilisation. Du Sénégal au Tchad, cette céréale millénaire
            nourrit, rassemble et fait vivre plus de 100 millions de personnes. Découvrez la
            richesse d&apos;une culture culinaire unique au monde.
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
            Les grands plats traditionnels à base de mil
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {traditionalDishes.map((dish) => (
              <Link key={dish.slug} href={localePath(locale, `/recipes/${dish.slug}`)}>
                <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
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
              </Link>
            ))}
          </div>
        </section>

        {/* Key Figures */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Le mil en chiffres
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: '4 500 ans', label: 'de culture du mil au Sahel', detail: 'Domestiqué au Mali vers 2500 av. J.-C.' },
              { value: '93 pays', label: 'cultivent du mil', detail: 'Source : FAO, 2023' },
              { value: '100 M+', label: 'de personnes nourries', detail: 'Dans la seule bande sahélienne' },
              { value: '300 mm', label: 'de pluie suffisent', detail: 'Contre 1 200 mm pour le riz' },
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
            Pour aller plus loin
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href={localePath(locale, '/recipes')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Recettes de mil
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                Thiéré, bouillie, beignets, ngalakh et autres plats traditionnels
              </p>
            </Link>
            <Link
              href={localePath(locale, '/history')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Histoire des millets
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                De la domestication au Sahel à l&apos;Année internationale du mil
              </p>
            </Link>
            <Link
              href={localePath(locale, '/ou-acheter-du-millet')}
              className="block bg-forest-50 dark:bg-earth-800 rounded-xl p-6 hover:bg-forest-100 dark:hover:bg-earth-700 transition-colors"
            >
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Où acheter du mil
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-400">
                En France, au Canada et en ligne
              </p>
            </Link>
          </div>
        </section>

        {/* Sources */}
        <section className="border-t border-earth-200 dark:border-earth-700 pt-8">
          <h2 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            Sources et références
          </h2>
          <ul className="space-y-2 text-sm text-earth-700 dark:text-earth-300">
            <li>FAO &mdash; &laquo; Sorghum and millets in human nutrition &raquo;, Food and Nutrition Series No. 27 (1995)</li>
            <li>ICRISAT &mdash; Pearl Millet in African Agriculture (2020)</li>
            <li>Nations unies &mdash; Résolution A/RES/75/263 déclarant 2023 Année internationale du mil</li>
            <li>Bezançon G. et al. &mdash; &laquo; Vigna unguiculata et Pennisetum glaucum en Afrique de l&apos;Ouest &raquo;, Cahiers Agricultures (2019)</li>
            <li>FAOSTAT &mdash; Production mondiale de mil, données 2022</li>
          </ul>
        </section>
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6 mt-10">
          <p className="text-xs text-warm-gray dark:text-earth-400 leading-relaxed max-w-3xl">
            Les informations présentées sur cette page sont issues de sources académiques et
            institutionnelles. Elles visent à valoriser le patrimoine culinaire et agricole
            de l&apos;Afrique de l&apos;Ouest sans prétention d&apos;exhaustivité.
          </p>
        </div>
      </div>
    </main>
  );
}
