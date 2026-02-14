import Link from 'next/link';
import { Wheat } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="content-wrapper text-center max-w-lg mx-auto py-20">
        {/* Icon */}
        <Wheat className="w-16 h-16 text-earth-300 dark:text-earth-600 mx-auto mb-6" />

        {/* 404 Label */}
        <p className="text-6xl font-heading font-bold text-earth-300 dark:text-earth-600 mb-4">
          404
        </p>

        {/* Heading */}
        <h1 className="font-heading text-3xl font-bold text-earth-800 dark:text-earth-100 mb-3">
          Page Not Found
        </h1>

        {/* Subtext */}
        <p className="text-earth-600 dark:text-earth-300 mb-8 leading-relaxed">
          Looks like this grain got lost in the field. The page you are looking
          for does not exist or may have been moved.
        </p>

        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-earth-500 hover:bg-earth-600 text-white font-medium px-6 py-3 transition-colors mb-8"
        >
          Back to Home
        </Link>

        {/* Popular Sections */}
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6">
          <p className="text-sm text-earth-500 dark:text-earth-400 mb-4">
            Or explore these popular sections:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/millets"
              className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
            >
              Millets
            </Link>
            <Link
              href="/recipes"
              className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
            >
              Recipes
            </Link>
            <Link
              href="/nutrition"
              className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
            >
              Nutrition
            </Link>
            <Link
              href="/faq"
              className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 font-medium underline transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
