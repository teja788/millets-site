import { majorMillets } from './millets-major';
import { minorMillets } from './millets-minor';
import type { Millet } from '@/lib/types';

export const millets: Millet[] = [...majorMillets, ...minorMillets];

export function getMilletBySlug(slug: string): Millet | undefined {
  return millets.find(m => m.slug === slug);
}

export function getMilletsByCategory(category: 'major' | 'minor'): Millet[] {
  return millets.filter(m => m.category === category);
}
