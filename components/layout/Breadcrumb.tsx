'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

const slugToName: Record<string, string> = {
  about: 'About',
  millets: 'Millets',
  recipes: 'Recipes',
  nutrition: 'Nutrition',
  history: 'History',
  ayurveda: 'Ayurveda',
  sustainability: 'Sustainability',
  'cooking-guide': 'Cooking Guide',
  glossary: 'Glossary',
  faq: 'FAQ',
  search: 'Search',
  'regional-traditions': 'Regional Traditions',
  'global-millets': 'Global Millets',
  fermentation: 'Fermentation',
  'ancient-references': 'Ancient References',
  myths: 'Myths & Facts',
  tools: 'Tools',
  'millet-quiz': 'Millet Quiz',
  'substitution-calculator': 'Substitution Calculator',
  'cooking-timer': 'Cooking Timer',
  'meal-plans': 'Meal Plans',
  'buying-guide': 'Buying Guide',
};

function formatSegment(segment: string): string {
  if (slugToName[segment]) return slugToName[segment];

  // Fallback: capitalize each word and replace hyphens with spaces
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function Breadcrumb() {
  const pathname = usePathname();

  // Don't render breadcrumb on homepage
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = formatSegment(segment);
    const isLast = index === segments.length - 1;

    return { href, label, isLast };
  });

  return (
    <nav aria-label="Breadcrumb" className="content-wrapper py-3">
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        {/* Home link */}
        <li className="flex items-center">
          <Link
            href="/"
            className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 transition-colors"
          >
            Home
          </Link>
        </li>

        {crumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center">
            <ChevronRight className="w-3.5 h-3.5 text-earth-400 dark:text-earth-500 mx-1 flex-shrink-0" />
            {crumb.isLast ? (
              <span className="text-earth-600 dark:text-earth-300 font-medium">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 transition-colors"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
