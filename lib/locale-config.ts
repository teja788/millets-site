import type { Locale } from './i18n';

export interface LocaleExclusiveNavItem {
  section: 'learn' | 'culture';
  href: string;
  label: string;
}

export interface LocaleFeatureConfig {
  /** If false, Ayurveda nav link is hidden and /ayurveda redirects to healthPageRedirect */
  hasAyurveda: boolean;
  /** Redirect target for /ayurveda (null = no redirect) */
  healthPageRedirect: string | null;
  /** Which NamesTable to render on millet detail pages */
  namesTable: 'french' | 'german' | null;
  /** Right-to-left locale */
  isRTL: boolean;
  /** Nav items injected into Navbar dropdowns for this locale */
  exclusiveNavItems: LocaleExclusiveNavItem[];
}

export const localeFeatures: Record<Locale, LocaleFeatureConfig> = {
  en: {
    hasAyurveda: true,
    healthPageRedirect: null,
    namesTable: null,
    isRTL: false,
    exclusiveNavItems: [],
  },
  te: {
    hasAyurveda: true,
    healthPageRedirect: null,
    namesTable: null,
    isRTL: false,
    exclusiveNavItems: [],
  },
  ar: {
    hasAyurveda: true,
    healthPageRedirect: null,
    namesTable: null,
    isRTL: true,
    exclusiveNavItems: [],
  },
  fr: {
    hasAyurveda: false,
    healthPageRedirect: '/fr/nutrition-et-sante',
    namesTable: 'french',
    isRTL: false,
    exclusiveNavItems: [
      { section: 'learn', href: '/nutrition-et-sante', label: 'Nutrition et santé' },
      { section: 'learn', href: '/millet-vs-quinoa', label: 'Millet vs Quinoa' },
      { section: 'learn', href: '/ou-acheter-du-millet', label: 'Où acheter du millet' },
      { section: 'culture', href: '/culture-africaine-du-mil', label: 'Culture africaine du mil' },
    ],
  },
  de: {
    hasAyurveda: false,
    healthPageRedirect: '/de/ernaehrung-und-gesundheit',
    namesTable: 'german',
    isRTL: false,
    exclusiveNavItems: [
      { section: 'learn', href: '/ernaehrung-und-gesundheit', label: 'Ernährung und Gesundheit' },
      { section: 'learn', href: '/hirse-vs-quinoa', label: 'Hirse vs Quinoa' },
      { section: 'learn', href: '/wo-hirse-kaufen', label: 'Wo Hirse kaufen' },
      { section: 'culture', href: '/hirse-in-der-deutschen-kueche', label: 'Hirse in der deutschen Küche' },
    ],
  },
  hi: {
    hasAyurveda: true,
    healthPageRedirect: null,
    namesTable: null,
    isRTL: false,
    exclusiveNavItems: [],
  },
};
