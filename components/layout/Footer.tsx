import Link from 'next/link';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/millets', label: 'Millets' },
  { href: '/recipes', label: 'Recipes' },
  { href: '/nutrition', label: 'Nutrition' },
  { href: '/meal-plans', label: 'Meal Plans' },
  { href: '/buying-guide', label: 'Buying Guide' },
];

const learnMoreLinks = [
  { href: '/history', label: 'History' },
  { href: '/ayurveda', label: 'Ayurveda' },
  { href: '/regional-traditions', label: 'Regional Traditions' },
  { href: '/global-millets', label: 'Global Millets' },
  { href: '/fermentation', label: 'Fermentation' },
  { href: '/ancient-references', label: 'Ancient References' },
  { href: '/sustainability', label: 'Sustainability' },
  { href: '/cooking-guide', label: 'Cooking Guide' },
];

const resourceLinks = [
  { href: '/glossary', label: 'Glossary' },
  { href: '/faq', label: 'FAQ' },
  { href: '/myths', label: 'Myths & Facts' },
  { href: '/tools/millet-quiz', label: 'Millet Quiz' },
  { href: '/tools/substitution-calculator', label: 'Substitution Calculator' },
  { href: '/tools/cooking-timer', label: 'Cooking Timer' },
  { href: '/about', label: 'About' },
];

export default function Footer() {
  return (
    <footer className="border-t border-earth-200 dark:border-earth-700 bg-earth-100/50 dark:bg-earth-900/50">
      <div className="content-wrapper py-12 md:py-16">
        {/* Three-column link grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-earth-800 dark:text-earth-200 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-earth-600 hover:text-earth-800 dark:text-earth-400 dark:hover:text-earth-200 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Learn More */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-earth-800 dark:text-earth-200 mb-4">
              Learn More
            </h3>
            <ul className="space-y-2">
              {learnMoreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-earth-600 hover:text-earth-800 dark:text-earth-400 dark:hover:text-earth-200 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-earth-800 dark:text-earth-200 mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-earth-600 hover:text-earth-800 dark:text-earth-400 dark:hover:text-earth-200 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-8 border-t border-earth-200 dark:border-earth-700">
          <p className="text-xs text-earth-500 dark:text-earth-400 leading-relaxed max-w-2xl">
            Nutrition data sourced from ICMR-NIN Indian Food Composition Tables
            (2017) and USDA FoodData Central.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-4">
          <p className="text-xs text-earth-400 dark:text-earth-500">
            &copy; 2024 Millets Guide. Built with care for accurate, sourced
            information.
          </p>
        </div>
      </div>
    </footer>
  );
}
