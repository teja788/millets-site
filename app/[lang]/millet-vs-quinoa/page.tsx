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
  if (lang !== 'fr') return {};

  return {
    title: 'Millet vs Quinoa : comparaison complète | Simply Millets',
    description:
      'Millets ou quinoa ? Comparaison nutritionnelle, écologique, économique et culinaire. Découvrez pourquoi les millets sont une alternative locale et durable au quinoa.',
    alternates: {
      canonical: '/fr/millet-vs-quinoa',
      languages: { fr: '/fr/millet-vs-quinoa' },
    },
  };
}

export function generateStaticParams() {
  return [{ lang: 'fr' }];
}

const nutritionComparison = [
  { nutrient: 'Calories (kcal)', millet: '329–378', quinoa: '368', winner: 'equal' },
  { nutrient: 'Protéines (g)', millet: '7,7–12,5', quinoa: '14,1', winner: 'quinoa' },
  { nutrient: 'Fibres (g)', millet: '8,0–12,5', quinoa: '7,0', winner: 'millet' },
  { nutrient: 'Calcium (mg)', millet: '31–344', quinoa: '47', winner: 'millet' },
  { nutrient: 'Fer (mg)', millet: '2,8–4,4', quinoa: '4,6', winner: 'equal' },
  { nutrient: 'Magnésium (mg)', millet: '82–242', quinoa: '197', winner: 'equal' },
  { nutrient: 'Zinc (mg)', millet: '1,7–3,1', quinoa: '3,1', winner: 'equal' },
  { nutrient: 'Indice glycémique', millet: '54–68', quinoa: '53', winner: 'equal' },
  { nutrient: 'Sans gluten', millet: 'Oui ✓', quinoa: 'Oui ✓', winner: 'equal' },
];

const advantages = [
  {
    icon: Leaf,
    title: 'Empreinte carbone',
    millet: 'Les millets nécessitent peu d\'eau (300-500 mm de pluie) et poussent en sols pauvres sans engrais chimiques. Culture locale possible en Europe et en Afrique.',
    quinoa: 'Le quinoa importé du Pérou/Bolivie génère des émissions de transport significatives. La forte demande mondiale a entraîné une hausse des prix pour les populations andines.',
    verdict: 'Les millets ont une empreinte carbone 3 à 5 fois inférieure grâce à la production locale et à la faible consommation d\'eau.',
  },
  {
    icon: Euro,
    title: 'Prix',
    millet: '3 à 6 € le kg en magasin bio (France). 1 à 3 € le kg en épicerie africaine.',
    quinoa: '6 à 12 € le kg en magasin bio. Le quinoa français reste rare et cher (8 à 15 € le kg).',
    verdict: 'Les millets sont 2 à 3 fois moins chers que le quinoa, et plus accessibles.',
  },
  {
    icon: Droplet,
    title: 'Consommation d\'eau',
    millet: '300 à 500 mm de précipitations suffisent. Résistants à la sécheresse, adaptés au changement climatique.',
    quinoa: 'Nécessite 400 à 800 mm. Plus exigeant en eau que les millets, surtout en culture irriguée.',
    verdict: 'Les millets sont parmi les céréales les plus économes en eau au monde.',
  },
  {
    icon: ChefHat,
    title: 'Polyvalence culinaire',
    millet: 'Risotto, couscous, galettes, pain, porridge, bouillie, bière (dolo), desserts. Farine adaptée aux crêpes et pâtisseries sans gluten.',
    quinoa: 'Salades, accompagnements, soupes, burgers végétariens. Moins versatile en pâtisserie.',
    verdict: 'Les millets offrent une diversité culinaire supérieure grâce à 9 variétés aux textures distinctes.',
  },
];

export default async function MilletVsQuinoaPage({
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
          Millet vs Quinoa
        </h1>

        <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-10">
          <p>
            Le quinoa est devenu l&apos;emblème des &laquo; super-aliments &raquo; en France.
            Pourtant, les millets — cultivés depuis plus de 8 000 ans en Afrique et en Asie —
            offrent un profil nutritionnel comparable, voire supérieur pour certains nutriments,
            avec un impact environnemental bien moindre et un prix plus accessible.
          </p>
        </div>

        {/* Nutrition Comparison Table */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Comparaison nutritionnelle pour 100 g
          </h2>
          <p className="text-sm text-earth-600 dark:text-earth-400 mb-4">
            Valeurs pour les millets : fourchette couvrant les 9 variétés. Sources : USDA FoodData Central, Table Ciqual ANSES.
          </p>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Nutriment</TableHeaderCell>
                <TableHeaderCell>Millets (9 variétés)</TableHeaderCell>
                <TableHeaderCell>Quinoa</TableHeaderCell>
                <TableHeaderCell className="hidden md:table-cell">Verdict</TableHeaderCell>
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
                    {row.winner === 'millet' && <Badge variant="green" size="sm">Millets</Badge>}
                    {row.winner === 'quinoa' && <Badge variant="blue" size="sm">Quinoa</Badge>}
                    {row.winner === 'equal' && <Badge variant="default" size="sm">Équivalent</Badge>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-4 bg-forest-50 dark:bg-earth-800 rounded-lg p-4 max-w-3xl">
            <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed">
              <strong>Point clé :</strong> Le quinoa domine en protéines (14,1 g vs 7,7-12,5 g),
              mais l&apos;éleusine (ragi) écrase le quinoa en calcium (344 mg vs 47 mg — soit 7 fois plus).
              Les millets offrent aussi davantage de fibres. Au global, les profils sont complémentaires,
              mais les millets couvrent plus de besoins à moindre coût.
            </p>
          </div>
        </section>

        {/* Detailed Comparison Cards */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Au-delà de la nutrition
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
                        Millets
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
                      <strong>Verdict :</strong> {item.verdict}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <Card>
            <CardBody>
              <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
                Conclusion : pourquoi pas les deux ?
              </h2>
              <p className="text-earth-700 dark:text-earth-300 leading-relaxed mb-4">
                Les millets et le quinoa sont deux familles de céréales exceptionnelles. Plutôt que de les opposer,
                l&apos;idéal est de les intégrer tous deux dans une alimentation variée. Cependant, si vous cherchez
                une option plus accessible, plus locale et plus respectueuse de l&apos;environnement, les millets
                sont un choix difficile à battre.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={localePath(locale, '/millets')}
                  className="inline-flex items-center px-4 py-2 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors text-sm font-medium"
                >
                  Découvrir les 9 millets
                </Link>
                <Link
                  href={localePath(locale, '/buying-guide')}
                  className="inline-flex items-center px-4 py-2 bg-earth-200 dark:bg-earth-700 text-earth-800 dark:text-earth-200 rounded-lg hover:bg-earth-300 dark:hover:bg-earth-600 transition-colors text-sm font-medium"
                >
                  Où acheter des millets en France
                </Link>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Sources */}
        <section className="border-t border-earth-200 dark:border-earth-700 pt-8">
          <h2 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            Sources et références
          </h2>
          <ul className="space-y-2 text-sm text-earth-700 dark:text-earth-300">
            <li>USDA FoodData Central — Quinoa, uncooked (SR Legacy, 2019)</li>
            <li>ANSES — Table de composition nutritionnelle Ciqual (2024)</li>
            <li>Saleh ASM et al. — &laquo; Millet grains: nutritional quality, processing, and potential health benefits &raquo; (2013)</li>
            <li>FAO — &laquo; Sorghum and millets in human nutrition &raquo; (1995)</li>
            <li>ADEME — Base Carbone, émissions liées au transport des denrées alimentaires</li>
          </ul>
        </section>
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6 mt-10">
          <p className="text-xs text-warm-gray dark:text-earth-400 leading-relaxed max-w-3xl">
            <strong>Avertissement :</strong> Les données nutritionnelles présentées sont des valeurs moyennes
            issues de sources scientifiques. Les valeurs réelles peuvent varier selon l&apos;origine, la variété
            et le mode de préparation.
          </p>
        </div>
      </div>
    </main>
  );
}
