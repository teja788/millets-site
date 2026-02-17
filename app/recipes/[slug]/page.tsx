import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Clock, Timer, Users, ChefHat, Lightbulb } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Badge from '@/components/ui/Badge';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import PrintButton from '@/components/ui/PrintButton';
import ShareButton, { FloatingShareButton } from '@/components/ui/ShareButton';
import { recipes, getRecipeBySlug } from '@/data/recipes';
import { getMilletBySlug } from '@/data/millets';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) return { title: 'Recipe Not Found' };

  const url = `/recipes/${recipe.slug}`;

  return {
    title: `${recipe.title} | Millet Recipes`,
    description: recipe.description,
    openGraph: {
      title: recipe.title,
      description: recipe.description,
      url,
      type: 'article',
      ...(recipe.imageFile && {
        images: [{ url: recipe.imageFile, width: 800, height: 600, alt: recipe.title }],
      }),
    },
    twitter: {
      card: recipe.imageFile ? 'summary_large_image' : 'summary',
      title: recipe.title,
      description: recipe.description,
      ...(recipe.imageFile && { images: [recipe.imageFile] }),
    },
  };
}

const difficultyVariant: Record<string, 'green' | 'orange' | 'red'> = {
  easy: 'green',
  medium: 'orange',
  advanced: 'red',
};

const categoryGradients: Record<string, string> = {
  breakfast: 'from-orange-500 via-amber-500 to-yellow-600',
  lunch: 'from-green-600 via-emerald-500 to-teal-600',
  dinner: 'from-indigo-600 via-purple-500 to-violet-600',
  snack: 'from-rose-500 via-pink-500 to-red-500',
  dessert: 'from-pink-400 via-rose-400 to-fuchsia-500',
  drink: 'from-cyan-500 via-sky-500 to-blue-500',
  bread: 'from-amber-700 via-yellow-600 to-orange-700',
};

const defaultGradient = 'from-earth-400 via-earth-500 to-earth-700';

export default async function RecipeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  const relatedMillets = recipe.millets
    .map((milletSlug) => getMilletBySlug(milletSlug))
    .filter(Boolean);

  return (
    <main>
      <FloatingShareButton title={recipe.title} slug={recipe.slug} />
      <Breadcrumb />

      <article className="content-wrapper py-8">
        {/* Recipe Header */}
        <div className="mb-8">
          {/* Recipe Image / Gradient Fallback */}
          <div
            className={`relative w-full h-64 md:h-80 rounded-xl mb-6 overflow-hidden bg-gradient-to-br ${categoryGradients[recipe.category] || defaultGradient}`}
          >
            {recipe.imageFile ? (
              <ImageWithFallback
                src={recipe.imageFile}
                alt={recipe.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                fallbackColor="#C4A35A"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/25"
                >
                  <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                  <line x1="6" y1="17" x2="18" y2="17" />
                </svg>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant={difficultyVariant[recipe.difficulty]} size="md">
              {recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}
            </Badge>
            <Badge variant="blue" size="md">
              {recipe.cuisine}
            </Badge>
            <Badge variant="default" size="md">
              {recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}
            </Badge>
          </div>

          <h1 className="font-heading text-3xl md:text-4xl font-bold text-earth-100 mb-3">
            {recipe.title}
          </h1>
          <p className="text-lg text-earth-300 leading-relaxed max-w-3xl">
            {recipe.description}
          </p>
        </div>

        {/* Info Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-earth-800 rounded-lg p-4 flex items-center gap-3">
            <Clock className="w-5 h-5 text-earth-400 flex-shrink-0" />
            <div>
              <p className="text-xs text-earth-400 uppercase tracking-wide">Prep Time</p>
              <p className="font-heading text-lg text-earth-100">{recipe.prepTime}</p>
            </div>
          </div>
          <div className="bg-earth-800 rounded-lg p-4 flex items-center gap-3">
            <Timer className="w-5 h-5 text-earth-400 flex-shrink-0" />
            <div>
              <p className="text-xs text-earth-400 uppercase tracking-wide">Cook Time</p>
              <p className="font-heading text-lg text-earth-100">{recipe.cookTime}</p>
            </div>
          </div>
          <div className="bg-earth-800 rounded-lg p-4 flex items-center gap-3">
            <Users className="w-5 h-5 text-earth-400 flex-shrink-0" />
            <div>
              <p className="text-xs text-earth-400 uppercase tracking-wide">Servings</p>
              <p className="font-heading text-lg text-earth-100">{recipe.servings}</p>
            </div>
          </div>
          <div className="bg-earth-800 rounded-lg p-4 flex items-center gap-3">
            <ChefHat className="w-5 h-5 text-earth-400 flex-shrink-0" />
            <div>
              <p className="text-xs text-earth-400 uppercase tracking-wide">Difficulty</p>
              <p className="font-heading text-lg text-earth-100 capitalize">{recipe.difficulty}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Ingredients */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-earth-100 mb-4">
                Ingredients
              </h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ing, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-earth-200"
                  >
                    <span className="w-2 h-2 rounded-full bg-earth-400 flex-shrink-0 mt-2" />
                    <span>
                      <span className="font-medium">{ing.item}</span>
                      <span className="text-earth-400"> &mdash; {ing.quantity}</span>
                      {ing.isOptional && (
                        <span className="ml-2 text-xs text-earth-400 italic">(optional)</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Instructions */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-earth-100 mb-4">
                Instructions
              </h2>
              <ol className="space-y-4">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-earth-500 text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <p className="text-earth-200 leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Tips */}
            {recipe.tips.length > 0 && (
              <section className="bg-earth-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-earth-300" />
                  <h2 className="font-heading text-xl font-bold text-earth-100">
                    Tips
                  </h2>
                </div>
                <ul className="space-y-2">
                  {recipe.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3 text-earth-200">
                      <span className="text-earth-400 flex-shrink-0 mt-0.5">&#8226;</span>
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Nutrition Per Serving */}
            {recipe.nutritionPerServing && (
              <div className="bg-cream dark:bg-earth-800 rounded-xl card-shadow p-6">
                <h3 className="font-heading text-lg font-bold text-earth-100 mb-4">
                  Nutrition Per Serving
                </h3>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-earth-800 rounded-lg p-3">
                    <p className="font-heading text-2xl text-earth-100">
                      {recipe.nutritionPerServing.calories}
                    </p>
                    <p className="text-xs text-earth-400">Calories</p>
                  </div>
                  <div className="bg-earth-800 rounded-lg p-3">
                    <p className="font-heading text-2xl text-earth-100">
                      {recipe.nutritionPerServing.protein_g}g
                    </p>
                    <p className="text-xs text-earth-400">Protein</p>
                  </div>
                  <div className="bg-earth-800 rounded-lg p-3">
                    <p className="font-heading text-2xl text-earth-100">
                      {recipe.nutritionPerServing.fiber_g}g
                    </p>
                    <p className="text-xs text-earth-400">Fiber</p>
                  </div>
                </div>
              </div>
            )}

            {/* Related Millets */}
            {relatedMillets.length > 0 && (
              <div className="bg-cream dark:bg-earth-800 rounded-xl card-shadow p-6">
                <h3 className="font-heading text-lg font-bold text-earth-100 mb-3">
                  Millet Used
                </h3>
                <div className="space-y-2">
                  {relatedMillets.map((millet) =>
                    millet ? (
                      <Link
                        key={millet.slug}
                        href={`/millets/${millet.slug}`}
                        className="flex items-center gap-2 text-earth-300 hover:text-earth-100 transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-earth-400" />
                        <span className="font-medium">{millet.name}</span>
                        <span className="text-earth-400 text-sm">({millet.commonName})</span>
                      </Link>
                    ) : null,
                  )}
                </div>
              </div>
            )}

            {/* Tags */}
            {recipe.tags.length > 0 && (
              <div className="bg-cream dark:bg-earth-800 rounded-xl card-shadow p-6">
                <h3 className="font-heading text-lg font-bold text-earth-100 mb-3">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map((tag) => (
                    <Badge key={tag} variant="default" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Share & Print */}
            <div className="space-y-3">
              <ShareButton title={recipe.title} slug={recipe.slug} />
              <PrintButton />
            </div>
          </aside>
        </div>
      </article>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-700 pt-6 mt-10">
          <p className="text-xs text-earth-400 leading-relaxed max-w-3xl">
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
