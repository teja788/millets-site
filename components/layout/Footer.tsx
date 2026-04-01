import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations } from '@/lib/i18n';

export default function Footer({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  const quickLinks = [
    { href: localePath(locale, '/'), label: t.nav.home },
    { href: localePath(locale, '/millets'), label: t.nav.millets },
    { href: localePath(locale, '/recipes'), label: t.nav.recipes },
    { href: localePath(locale, '/nutrition'), label: t.nav.nutrition },
    { href: localePath(locale, '/meal-plans'), label: t.nav.mealPlans },
    { href: localePath(locale, '/buying-guide'), label: t.nav.buyingGuide },
  ];

  const learnMoreLinks = [
    { href: localePath(locale, '/history'), label: t.nav.history },
    ...(locale !== 'fr' ? [{ href: localePath(locale, '/ayurveda'), label: t.nav.ayurveda }] : []),
    ...(locale === 'fr' ? [{ href: localePath(locale, '/culture-africaine-du-mil'), label: 'Culture africaine du mil' }] : []),
    { href: localePath(locale, '/regional-traditions'), label: t.nav.regionalTraditions },
    { href: localePath(locale, '/global-millets'), label: t.nav.globalMillets },
    { href: localePath(locale, '/fermentation'), label: t.nav.fermentation },
    { href: localePath(locale, '/ancient-references'), label: t.nav.ancientReferences },
    { href: localePath(locale, '/sustainability'), label: t.nav.sustainability },
    { href: localePath(locale, '/cooking-guide'), label: t.nav.cookingGuide },
  ];

  const resourceLinks = [
    { href: localePath(locale, '/glossary'), label: t.nav.glossary },
    { href: localePath(locale, '/faq'), label: t.nav.faq },
    { href: localePath(locale, '/myths'), label: t.nav.mythsFacts },
    { href: localePath(locale, '/tools/millet-quiz'), label: t.nav.milletQuiz },
    { href: localePath(locale, '/tools/substitution-calculator'), label: t.nav.substitutionCalculator },
    { href: localePath(locale, '/tools/cooking-timer'), label: t.nav.cookingTimer },
    ...(locale === 'en' ? [{ href: localePath(locale, '/about'), label: t.nav.about }] : []),
    { href: localePath(locale, '/privacy-policy'), label: t.nav.privacyPolicy },
    { href: localePath(locale, '/disclaimer'), label: t.nav.disclaimer },
    ...(locale === 'en' ? [{ href: localePath(locale, '/contact'), label: t.nav.contact }] : []),
    ...(locale === 'fr' ? [
      { href: localePath(locale, '/nutrition-et-sante'), label: 'Nutrition et santé' },
      { href: localePath(locale, '/millet-vs-quinoa'), label: 'Millet vs Quinoa' },
      { href: localePath(locale, '/ou-acheter-du-millet'), label: 'Où acheter du millet' },
    ] : []),
  ];

  return (
    <footer className="border-t border-forest-700 dark:border-earth-700 bg-forest-600 dark:bg-earth-900/50">
      <div className="content-wrapper py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-heading text-lg font-semibold text-forest-100 dark:text-earth-200 mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-forest-200 hover:text-white dark:text-earth-400 dark:hover:text-earth-200 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-forest-100 dark:text-earth-200 mb-4">
              {t.footer.learnMore}
            </h3>
            <ul className="space-y-2">
              {learnMoreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-forest-200 hover:text-white dark:text-earth-400 dark:hover:text-earth-200 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-forest-100 dark:text-earth-200 mb-4">
              {t.footer.resources}
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-forest-200 hover:text-white dark:text-earth-400 dark:hover:text-earth-200 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-forest-500 dark:border-earth-700">
          <p className="text-xs text-forest-200 dark:text-earth-300 leading-relaxed max-w-2xl">
            {t.footer.disclaimer}
          </p>
        </div>
        <div className="mt-4">
          <p className="text-xs text-forest-300 dark:text-earth-400">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
