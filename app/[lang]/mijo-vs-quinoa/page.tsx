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
  if (lang !== 'es') return {};

  return {
    title: 'Mijo vs Quinoa: comparación completa | Simply Millets',
    description:
      '¿Mijos o quinoa? Comparación nutricional, ecológica, económica y culinaria. Descubre por qué los mijos son una alternativa local y sostenible a la quinoa.',
    alternates: {
      canonical: '/es/mijo-vs-quinoa',
      languages: { es: '/es/mijo-vs-quinoa' },
    },
  };
}

export function generateStaticParams() {
  return [{ lang: 'es' }];
}

const nutritionComparison = [
  { nutrient: 'Calorías (kcal)', millet: '329–378', quinoa: '368', winner: 'equal' },
  { nutrient: 'Proteínas (g)', millet: '7,7–12,5', quinoa: '14,1', winner: 'quinoa' },
  { nutrient: 'Fibra (g)', millet: '8,0–12,5', quinoa: '7,0', winner: 'millet' },
  { nutrient: 'Calcio (mg)', millet: '31–344', quinoa: '47', winner: 'millet' },
  { nutrient: 'Hierro (mg)', millet: '2,8–4,4', quinoa: '4,6', winner: 'equal' },
  { nutrient: 'Magnesio (mg)', millet: '82–242', quinoa: '197', winner: 'equal' },
  { nutrient: 'Zinc (mg)', millet: '1,7–3,1', quinoa: '3,1', winner: 'equal' },
  { nutrient: 'Índice glucémico', millet: '54–68', quinoa: '53', winner: 'equal' },
  { nutrient: 'Sin gluten', millet: 'Sí ✓', quinoa: 'Sí ✓', winner: 'equal' },
];

const advantages = [
  {
    icon: Leaf,
    title: 'Huella de carbono',
    millet: 'Los mijos necesitan poca agua (300-500 mm de lluvia) y crecen en suelos pobres sin fertilizantes químicos. Cultivo local posible en Europa, África y Asia.',
    quinoa: 'La quinoa importada de Perú y Bolivia genera emisiones de transporte significativas. La fuerte demanda mundial ha provocado una subida de precios para las poblaciones andinas.',
    verdict: 'Los mijos tienen una huella de carbono de 3 a 5 veces inferior gracias a la producción local y al bajo consumo de agua.',
  },
  {
    icon: Euro,
    title: 'Precio',
    millet: '3 a 6 € el kg en tiendas ecológicas (España). 80 a 150 MXN el kg en tiendas orgánicas (México).',
    quinoa: '8 a 15 € el kg en España. 150 a 300 MXN el kg en México. La quinoa producida en Perú y Bolivia viaja más de 10 000 km hasta España.',
    verdict: 'Los mijos son de 2 a 3 veces más baratos que la quinoa y más accesibles en todo el mundo hispanohablante.',
  },
  {
    icon: Droplet,
    title: 'Consumo de agua',
    millet: '300 a 500 mm de precipitaciones son suficientes. Resistentes a la sequía, adaptados al cambio climático.',
    quinoa: 'Necesita de 400 a 800 mm. Más exigente en agua que los mijos, sobre todo en cultivo irrigado.',
    verdict: 'Los mijos están entre los cereales más eficientes en el uso del agua a nivel mundial.',
  },
  {
    icon: ChefHat,
    title: 'Versatilidad culinaria',
    millet: 'Risotto, cuscús, tortitas, pan, gachas, atole, postres. Harina apta para creps y repostería sin gluten.',
    quinoa: 'Ensaladas, guarniciones, sopas, hamburguesas vegetarianas. Menos versátil en repostería.',
    verdict: 'Los mijos ofrecen una diversidad culinaria superior gracias a 9 variedades con texturas distintas.',
  },
];

export default async function MijoVsQuinoaPage({
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
          Mijo vs Quinoa
        </h1>

        <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-10">
          <p>
            La quinoa se ha convertido en el emblema de los &laquo;superalimentos&raquo; en España
            y Latinoamérica. Sin embargo, los mijos &mdash; cultivados desde hace más de 8 000 años
            en África y Asia &mdash; ofrecen un perfil nutricional comparable, e incluso superior en
            ciertos nutrientes, con un impacto medioambiental mucho menor y un precio más asequible.
            Es especialmente relevante que la quinoa se produce en Perú y Bolivia, países
            hispanohablantes, pero los mijos son igualmente nutritivos y más sostenibles.
          </p>
        </div>

        {/* Nutrition Comparison Table */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Comparación nutricional por 100 g
          </h2>
          <p className="text-sm text-earth-600 dark:text-earth-400 mb-4">
            Valores para los mijos: rango que cubre las 9 variedades. Fuentes: USDA FoodData Central, BEDCA.
          </p>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Nutriente</TableHeaderCell>
                <TableHeaderCell>Mijos (9 variedades)</TableHeaderCell>
                <TableHeaderCell>Quinoa</TableHeaderCell>
                <TableHeaderCell className="hidden md:table-cell">Veredicto</TableHeaderCell>
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
                    {row.winner === 'millet' && <Badge variant="green" size="sm">Mijos</Badge>}
                    {row.winner === 'quinoa' && <Badge variant="blue" size="sm">Quinoa</Badge>}
                    {row.winner === 'equal' && <Badge variant="default" size="sm">Equivalente</Badge>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-4 bg-forest-50 dark:bg-earth-800 rounded-lg p-4 max-w-3xl">
            <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed">
              <strong>Punto clave:</strong> La quinoa domina en proteínas (14,1 g vs 7,7-12,5 g),
              pero la eleusine (ragi) supera ampliamente a la quinoa en calcio (344 mg vs 47 mg, es decir,
              7 veces más). Los mijos también aportan más fibra. En general, los perfiles son
              complementarios, pero los mijos cubren más necesidades a menor coste.
            </p>
          </div>
        </section>

        {/* Detailed Comparison Cards */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6">
            Más allá de la nutrición
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
                        Mijos
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
                      <strong>Veredicto:</strong> {item.verdict}
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
                Conclusión: ¿por qué no ambos?
              </h2>
              <p className="text-earth-700 dark:text-earth-300 leading-relaxed mb-4">
                Los mijos y la quinoa son dos familias de cereales excepcionales. En lugar de enfrentarlos,
                lo ideal es integrar ambos en una alimentación variada. Sin embargo, si busca una opción
                más accesible, más local y más respetuosa con el medio ambiente, los mijos son una
                elección difícil de superar.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={localePath(locale, '/millets')}
                  className="inline-flex items-center px-4 py-2 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors text-sm font-medium"
                >
                  Descubrir los 9 mijos
                </Link>
                <Link
                  href={localePath(locale, '/donde-comprar-mijo')}
                  className="inline-flex items-center px-4 py-2 bg-earth-200 dark:bg-earth-700 text-earth-800 dark:text-earth-200 rounded-lg hover:bg-earth-300 dark:hover:bg-earth-600 transition-colors text-sm font-medium"
                >
                  Dónde comprar mijo en España y Latinoamérica
                </Link>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Sources */}
        <section className="border-t border-earth-200 dark:border-earth-700 pt-8">
          <h2 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            Fuentes y referencias
          </h2>
          <ul className="space-y-2 text-sm text-earth-700 dark:text-earth-300">
            <li>USDA FoodData Central &mdash; Quinoa, uncooked (SR Legacy, 2019)</li>
            <li>BEDCA &mdash; Base de Datos Española de Composición de Alimentos (2024)</li>
            <li>Saleh ASM et al. &mdash; &laquo;Millet grains: nutritional quality, processing, and potential health benefits&raquo; (2013)</li>
            <li>FAO &mdash; &laquo;Sorghum and millets in human nutrition&raquo; (1995)</li>
            <li>MITECO &mdash; Huella de carbono del transporte de alimentos importados (España)</li>
          </ul>
        </section>
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6 mt-10">
          <p className="text-xs text-warm-gray dark:text-earth-400 leading-relaxed max-w-3xl">
            <strong>Aviso:</strong> Los datos nutricionales presentados son valores medios
            obtenidos de fuentes científicas. Los valores reales pueden variar según el origen,
            la variedad y el modo de preparación.
          </p>
        </div>
      </div>
    </main>
  );
}
