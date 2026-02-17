import type { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from '@/components/ui/Table';
import { millets } from '@/data/millets';

export const metadata: Metadata = {
  title: 'Cooking Guide | Millets Info',
  description:
    'Complete guide to cooking millets: water ratios, soaking times, cooking methods (stovetop, pressure cooker, rice cooker), reducing antinutrients, storage, and substitution tips.',
};

export default function CookingGuidePage() {
  return (
    <main>
      <Breadcrumb />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-6">
          Cooking Guide
        </h1>
        <p className="text-lg text-earth-700 dark:text-earth-300 max-w-3xl mb-12 leading-relaxed">
          Everything you need to know about preparing millets at home -- from water ratios and
          soaking times to cooking methods and storage. Whether you are a first-time millet cook
          or looking to refine your technique, this guide covers all the essentials.
        </p>

        {/* Water-to-Millet Ratios */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            Water-to-Millet Ratios
          </h2>
          <p className="text-earth-800 dark:text-earth-200 leading-relaxed mb-6 max-w-3xl">
            Getting the water ratio right is the most important step in cooking millets. Too much
            water makes them mushy; too little leaves them crunchy.
          </p>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Millet</TableHeaderCell>
                <TableHeaderCell>Water Ratio</TableHeaderCell>
                <TableHeaderCell>Soaking Time</TableHeaderCell>
                <TableHeaderCell>Cooking Time</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {millets.map((millet) => (
                <TableRow key={millet.slug}>
                  <TableCell className="font-medium whitespace-nowrap">
                    {millet.name}
                  </TableCell>
                  <TableCell>{millet.cooking.waterRatio}</TableCell>
                  <TableCell>{millet.cooking.soakingTime}</TableCell>
                  <TableCell>{millet.cooking.cookingTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        {/* Soaking Guide */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            Soaking Guide
          </h2>
          <div className="max-w-3xl space-y-4 text-earth-800 dark:text-earth-200 leading-relaxed mb-6">
            <p>
              <strong>Why soak millets?</strong> Soaking serves two important purposes: it reduces
              anti-nutritional factors (particularly phytic acid, which can be reduced by 20-50%
              with proper soaking) and it softens the grain for faster, more even cooking. Phytic
              acid binds to minerals like iron, calcium, and zinc, reducing their bioavailability.
              Soaking frees these minerals for better absorption.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Quick Soak (30 min - 2 hours)
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed mb-3">
                Suitable for most small millets: foxtail, little, kodo, barnyard, browntop, and
                proso millet. Rinse thoroughly, soak in room temperature water, then drain before
                cooking.
              </p>
            </div>
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Long Soak (6-8 hours / overnight)
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed mb-3">
                Recommended for whole grain sorghum and pearl millet when cooking as whole grains
                (not flour). Also recommended if you want maximum phytic acid reduction. Soak
                overnight, drain, and rinse before cooking.
              </p>
            </div>
          </div>
          <div className="mt-4 max-w-3xl">
            <h4 className="font-semibold text-earth-800 dark:text-earth-100 mb-2">Soaking Tips</h4>
            <ul className="space-y-2 text-earth-800 dark:text-earth-200 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-warm-gray dark:text-earth-400 flex-shrink-0">&#8226;</span>
                Always discard the soaking water and rinse the millet before cooking.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-warm-gray dark:text-earth-400 flex-shrink-0">&#8226;</span>
                Adding a tablespoon of lemon juice or apple cider vinegar to the soaking water
                can further enhance phytic acid reduction.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-warm-gray dark:text-earth-400 flex-shrink-0">&#8226;</span>
                In hot weather, soak in the refrigerator to prevent fermentation (unless
                fermentation is desired, as for dosa batter).
              </li>
            </ul>
          </div>
        </section>

        {/* Cooking Methods */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            Cooking Methods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cream dark:bg-earth-800 rounded-xl card-shadow p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-3">
                Stovetop
              </h3>
              <ol className="space-y-2 text-earth-800 dark:text-earth-200 text-sm list-decimal list-inside">
                <li>Rinse and drain the millet thoroughly.</li>
                <li>Bring the appropriate amount of water to a rolling boil in a heavy-bottomed pot.</li>
                <li>Add the millet and a pinch of salt. Stir once.</li>
                <li>Reduce heat to the lowest setting and cover tightly.</li>
                <li>Cook for the recommended time without lifting the lid.</li>
                <li>Turn off heat, let rest covered for 5 minutes, then fluff with a fork.</li>
              </ol>
            </div>
            <div className="bg-cream dark:bg-earth-800 rounded-xl card-shadow p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-3">
                Pressure Cooker
              </h3>
              <ol className="space-y-2 text-earth-800 dark:text-earth-200 text-sm list-decimal list-inside">
                <li>Rinse and drain the millet.</li>
                <li>Add millet, water (same ratio), and salt to the pressure cooker.</li>
                <li>Close the lid and cook on medium heat for 2-3 whistles.</li>
                <li>Turn off heat and let pressure release naturally (do not force open).</li>
                <li>Open the lid and fluff gently with a fork.</li>
              </ol>
              <p className="text-xs text-warm-gray dark:text-earth-400 mt-3 italic">
                Pressure cooking is faster and works especially well for pearl millet and sorghum.
              </p>
            </div>
            <div className="bg-cream dark:bg-earth-800 rounded-xl card-shadow p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-3">
                Rice Cooker
              </h3>
              <ol className="space-y-2 text-earth-800 dark:text-earth-200 text-sm list-decimal list-inside">
                <li>Rinse and drain the millet.</li>
                <li>Add millet and water to the rice cooker bowl at the recommended ratio.</li>
                <li>Add a pinch of salt and a teaspoon of oil or ghee.</li>
                <li>Close the lid and start the regular cook cycle.</li>
                <li>Once the cooker switches to &ldquo;warm,&rdquo; let it rest for 10 minutes.</li>
                <li>Open and fluff with a fork. Serve.</li>
              </ol>
              <p className="text-xs text-warm-gray dark:text-earth-400 mt-3 italic">
                Works well for foxtail, little, barnyard, and kodo millets.
              </p>
            </div>
          </div>
        </section>

        {/* Reducing Antinutrients */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            Reducing Antinutrients
          </h2>
          <p className="text-earth-800 dark:text-earth-200 leading-relaxed mb-6 max-w-3xl">
            Millets contain phytic acid and tannins that can reduce mineral absorption. These
            simple traditional processing methods significantly reduce these compounds:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Soaking
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                Soaking millets for 6-8 hours reduces phytic acid content by 20-50%. The water
                activates the grain&apos;s own phytase enzymes, which break down phytic acid.
                Always discard the soaking water.
              </p>
            </div>
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Germination / Sprouting
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                Sprouting millets for 24-48 hours is one of the most effective methods. It can
                reduce phytic acid by up to 60-70% while also increasing vitamin C, B vitamins,
                and overall protein digestibility. Finger millet (ragi) sprouts particularly well.
              </p>
            </div>
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Fermentation
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                Traditional fermented preparations like dosa/idli batter (using millet instead of
                rice), ambali, and koozh dramatically reduce antinutrients. Fermentation for 12-24
                hours can reduce phytic acid by 50-75% while adding beneficial probiotics.
              </p>
            </div>
            <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Roasting / Dry Toasting
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed">
                Dry roasting millets before cooking reduces tannins and also enhances their nutty
                flavor. This is a common practice in many traditional recipes (e.g., roasting
                foxtail millet before making upma or biryani).
              </p>
            </div>
          </div>
        </section>

        {/* Storage Guide */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            Storage Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cream dark:bg-earth-800 rounded-xl card-shadow p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Uncooked Millets
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed mb-2">
                Store in airtight containers in a cool, dry place away from direct sunlight.
              </p>
              <p className="font-medium text-earth-800 dark:text-earth-100">
                Shelf life: 6-12 months
              </p>
            </div>
            <div className="bg-cream dark:bg-earth-800 rounded-xl card-shadow p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Cooked Millets
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed mb-2">
                Store in sealed containers in the refrigerator. Can also be frozen in portion-sized
                bags for longer storage.
              </p>
              <p className="font-medium text-earth-800 dark:text-earth-100">
                Fridge: 3-5 days / Freezer: up to 3 months
              </p>
            </div>
            <div className="bg-cream dark:bg-earth-800 rounded-xl card-shadow p-6">
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-2">
                Millet Flour
              </h3>
              <p className="text-earth-800 dark:text-earth-200 text-sm leading-relaxed mb-2">
                Store in airtight containers in the refrigerator, as the exposed oils in flour can
                turn rancid faster than whole grains.
              </p>
              <p className="font-medium text-earth-800 dark:text-earth-100">
                Shelf life: 2-3 months (refrigerated)
              </p>
            </div>
          </div>
        </section>

        {/* Substitution Guide */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            Substitution Guide
          </h2>
          <p className="text-earth-800 dark:text-earth-200 leading-relaxed mb-6 max-w-3xl">
            Millets can replace common grains in many dishes. Here is a guide to which millets
            work best as substitutes:
          </p>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Millet</TableHeaderCell>
                <TableHeaderCell>Best Substitute For</TableHeaderCell>
                <TableHeaderCell className="hidden md:table-cell">Notes</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Foxtail Millet</TableCell>
                <TableCell>Rice</TableCell>
                <TableCell className="hidden md:table-cell text-sm">
                  Closest to rice in texture. Use in biryani, fried rice, upma, pulao.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Little Millet</TableCell>
                <TableCell>Rice</TableCell>
                <TableCell className="hidden md:table-cell text-sm">
                  Very mild, neutral flavor. Best everyday rice replacement. Excellent in pongal, curd rice.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Barnyard Millet</TableCell>
                <TableCell>Rice</TableCell>
                <TableCell className="hidden md:table-cell text-sm">
                  Lowest calorie millet. Common fasting food substitute. Works in khichdi and pulao.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Pearl Millet (flour)</TableCell>
                <TableCell>Wheat flour (rotis)</TableCell>
                <TableCell className="hidden md:table-cell text-sm">
                  Makes earthy, warming flatbreads. Best for bajra roti. Combine with wheat flour initially.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sorghum (flour)</TableCell>
                <TableCell>Wheat flour (rotis, breads)</TableCell>
                <TableCell className="hidden md:table-cell text-sm">
                  Mild, nutty flavor. Makes excellent bhakri, dosa, and can be used in baking.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Finger Millet (flour)</TableCell>
                <TableCell>Wheat / rice flour</TableCell>
                <TableCell className="hidden md:table-cell text-sm">
                  Dark, distinctive flavor. Best for porridge, mudde, dosa, cookies, and halwa.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Pro Tips */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-earth-800 dark:text-earth-100 mb-4">
            Pro Tips
          </h2>
          <div className="bg-forest-50 dark:bg-earth-800 rounded-xl p-6 max-w-3xl">
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-earth-800 dark:text-earth-200">
                <span className="w-6 h-6 rounded-full bg-earth-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  1
                </span>
                <span className="leading-relaxed">
                  <strong>Cool cooked millet for resistant starch:</strong> Letting cooked millet
                  cool before eating increases resistant starch content, which lowers the effective
                  glycemic index and feeds beneficial gut bacteria. This is especially useful for
                  people managing blood sugar.
                </span>
              </li>
              <li className="flex items-start gap-3 text-earth-800 dark:text-earth-200">
                <span className="w-6 h-6 rounded-full bg-earth-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  2
                </span>
                <span className="leading-relaxed">
                  <strong>Toast before cooking for nuttier flavor:</strong> Dry roast millets in a
                  pan for 3-4 minutes before adding water. This brings out a pleasant, nutty aroma
                  and also helps the grains stay separate rather than becoming mushy.
                </span>
              </li>
              <li className="flex items-start gap-3 text-earth-800 dark:text-earth-200">
                <span className="w-6 h-6 rounded-full bg-earth-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  3
                </span>
                <span className="leading-relaxed">
                  <strong>Add a pinch of oil while cooking:</strong> Adding half a teaspoon of ghee
                  or oil to the cooking water prevents millets from sticking together and gives them
                  a pleasant sheen. This is especially helpful for foxtail and little millet.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6 mt-10">
          <p className="text-xs text-warm-gray dark:text-earth-400 leading-relaxed max-w-3xl">
            <strong>Disclaimer:</strong> This content is created with the
            assistance of AI and is intended for educational purposes only. While
            we strive for accuracy, information may contain errors or be
            incomplete. Always do your own research and consult qualified
            professionals (nutritionists, doctors, agricultural experts) before
            making decisions based on this content. This website does not provide
            medical, nutritional, or agricultural advice.
          </p>
        </div>
      </div>
    </main>
  );
}
