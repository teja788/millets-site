'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, localePattern } from '@/lib/i18n';

function formatSegment(segment: string, slugMap: Record<string, string>): string {
  if (slugMap[segment]) return slugMap[segment];
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function Breadcrumb({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const t = getTranslations(locale);

  // Strip locale prefix and don't render on homepage
  const pathWithoutLocale = pathname.replace(localePattern, '') || '/';
  if (pathWithoutLocale === '/') return null;

  const segments = pathWithoutLocale.split('/').filter(Boolean);
  const nonLinkableParents = new Set(['/tools']);

  const crumbs = segments.map((segment, index) => {
    const href = localePath(locale, '/' + segments.slice(0, index + 1).join('/'));
    const label = formatSegment(segment, t.breadcrumb);
    const isLast = index === segments.length - 1;
    return { href, label, isLast };
  });

  return (
    <nav aria-label="Breadcrumb" className="content-wrapper py-3">
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        <li className="flex items-center">
          <Link
            href={localePath(locale, '/')}
            className="text-earth-500 hover:text-earth-700 dark:text-earth-400 dark:hover:text-earth-200 transition-colors"
          >
            {t.breadcrumb.home}
          </Link>
        </li>
        {crumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center">
            <ChevronRight className="w-3.5 h-3.5 text-earth-400 dark:text-earth-300 mx-1 flex-shrink-0 rtl:rotate-180" />
            {crumb.isLast || nonLinkableParents.has(crumb.href.replace(localePattern, '')) ? (
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
