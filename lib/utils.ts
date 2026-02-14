export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function formatCookingTime(mins: number): string {
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

export function formatTimeRange(range: [number, number]): string {
  if (range[0] === range[1]) return formatCookingTime(range[0]);
  return `${formatCookingTime(range[0])} - ${formatCookingTime(range[1])}`;
}

export function percentDV(value: number, dailyValue: number): number {
  return Math.round((value / dailyValue) * 100);
}

export function getMilletImagePlaceholder(milletName: string): string {
  // Returns a warm gradient placeholder color based on the millet name
  const colors: Record<string, string> = {
    'pearl-millet': 'from-amber-200 to-amber-400',
    'finger-millet': 'from-red-200 to-red-400',
    'sorghum': 'from-orange-200 to-orange-400',
    'foxtail-millet': 'from-yellow-200 to-yellow-400',
    'little-millet': 'from-lime-200 to-lime-400',
    'kodo-millet': 'from-emerald-200 to-emerald-400',
    'barnyard-millet': 'from-teal-200 to-teal-400',
    'proso-millet': 'from-cyan-200 to-cyan-400',
    'browntop-millet': 'from-stone-200 to-stone-400',
  };
  return colors[milletName] || 'from-earth-200 to-earth-400';
}
