'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, localePattern, isRTL } from '@/lib/i18n';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface NavLink {
  href: string;
  label: string;
}

interface NavGroup {
  label: string;
  links: NavLink[];
}

type NavItem = NavLink | NavGroup;

function isGroup(item: NavItem): item is NavGroup {
  return 'links' in item;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Navbar({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const t = getTranslations(locale);

  /* ---------------------------------------------------------------- */
  /*  Navigation data (depends on locale & translations)               */
  /* ---------------------------------------------------------------- */

  const navItems: NavItem[] = [
    { href: localePath(locale, '/'), label: t.nav.home },
    { href: localePath(locale, '/millets'), label: t.nav.millets },
    { href: localePath(locale, '/recipes'), label: t.nav.recipes },
    {
      label: t.nav.learn,
      links: [
        { href: localePath(locale, '/nutrition'), label: t.nav.nutrition },
        { href: localePath(locale, '/cooking-guide'), label: t.nav.cookingGuide },
        { href: localePath(locale, '/glossary'), label: t.nav.glossary },
        { href: localePath(locale, '/faq'), label: t.nav.faq },
        { href: localePath(locale, '/myths'), label: t.nav.mythsFacts },
        { href: localePath(locale, '/buying-guide'), label: t.nav.buyingGuide },
      ],
    },
    {
      label: t.nav.culture,
      links: [
        { href: localePath(locale, '/history'), label: t.nav.history },
        { href: localePath(locale, '/ayurveda'), label: t.nav.ayurveda },
        { href: localePath(locale, '/regional-traditions'), label: t.nav.regionalTraditions },
        { href: localePath(locale, '/global-millets'), label: t.nav.globalMillets },
        { href: localePath(locale, '/fermentation'), label: t.nav.fermentation },
        { href: localePath(locale, '/ancient-references'), label: t.nav.ancientReferences },
        { href: localePath(locale, '/sustainability'), label: t.nav.sustainability },
      ],
    },
    {
      label: t.nav.tools,
      links: [
        { href: localePath(locale, '/tools/millet-quiz'), label: t.nav.milletQuiz },
        { href: localePath(locale, '/tools/substitution-calculator'), label: t.nav.substitutionCalculator },
        { href: localePath(locale, '/tools/cooking-timer'), label: t.nav.cookingTimer },
      ],
    },
    ...(locale === 'en' ? [{ href: localePath(locale, '/about'), label: t.nav.about }] : []),
  ];

  /* — shared state — */
  const [scrolled, setScrolled] = useState(false);

  /* — mobile state — */
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMobileGroup, setExpandedMobileGroup] = useState<string | null>(
    null,
  );

  /* — desktop dropdown state — */
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ---------------------------------------------------------------- */
  /*  Helpers                                                          */
  /* ---------------------------------------------------------------- */

  const isActive = useCallback(
    (href: string) => {
      const pathWithoutLocale = pathname.replace(localePattern, '');
      const hrefWithoutLocale = href.replace(localePattern, '');
      if (hrefWithoutLocale === '/' || hrefWithoutLocale === '') return pathWithoutLocale === '/' || pathWithoutLocale === '';
      return pathWithoutLocale.startsWith(hrefWithoutLocale);
    },
    [pathname],
  );

  /** Returns true when ANY child link in a group matches the current path */
  const isGroupActive = useCallback(
    (group: NavGroup) => group.links.some((link) => isActive(link.href)),
    [isActive],
  );

  /* ---------------------------------------------------------------- */
  /*  Effects                                                          */
  /* ---------------------------------------------------------------- */

  useEffect(() => setMounted(true), []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setExpandedMobileGroup(null);
  }, [pathname]);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close desktop dropdown on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Cleanup close timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  /* ---------------------------------------------------------------- */
  /*  Desktop dropdown handlers                                        */
  /* ---------------------------------------------------------------- */

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      closeTimeoutRef.current = null;
    }, 150);
  };

  /* ---------------------------------------------------------------- */
  /*  Mobile group toggle                                              */
  /* ---------------------------------------------------------------- */

  const toggleMobileGroup = (label: string) => {
    setExpandedMobileGroup((prev) => (prev === label ? null : label));
  };

  /* ---------------------------------------------------------------- */
  /*  Theme toggle                                                     */
  /* ---------------------------------------------------------------- */

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  /* ---------------------------------------------------------------- */
  /*  Render                                                           */
  /* ---------------------------------------------------------------- */

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-earth-900/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="content-wrapper flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href={localePath(locale, '/')} className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Simply Millets"
            width={200}
            height={50}
            className="h-12 md:h-14 w-auto"
            priority
          />
        </Link>

        {/* -------------------------------------------------------- */}
        {/*  Desktop Navigation                                       */}
        {/* -------------------------------------------------------- */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            if (!isGroup(item)) {
              /* ---- Direct link ---- */
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-forest-600 dark:text-forest-300 bg-forest-50 dark:bg-earth-700/40'
                      : 'text-earth-800 dark:text-earth-300 hover:text-forest-600 dark:hover:text-forest-300 hover:bg-earth-100 dark:hover:bg-earth-800/40'
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            /* ---- Dropdown group ---- */
            const groupActive = isGroupActive(item);
            const isDropdownOpen = openDropdown === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    groupActive
                      ? 'text-forest-600 dark:text-forest-300 bg-forest-50 dark:bg-earth-700/40'
                      : 'text-earth-800 dark:text-earth-300 hover:text-forest-600 dark:hover:text-forest-300 hover:bg-earth-100 dark:hover:bg-earth-800/40'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-white/95 dark:bg-earth-900/95 backdrop-blur-md border border-earth-200 dark:border-earth-700 rounded-lg shadow-xl py-2 z-50"
                    >
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(link.href)
                              ? 'text-forest-600 dark:text-forest-300 bg-forest-50 dark:bg-earth-700/40'
                              : 'text-earth-800 dark:text-earth-300 hover:text-forest-600 dark:hover:text-forest-300 hover:bg-earth-100 dark:hover:bg-earth-800/40'
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Language Switcher — Desktop */}
          <LanguageSwitcher currentLocale={locale} />

          {/* Theme Toggle — Desktop */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-md text-earth-800 dark:text-earth-300 hover:text-forest-600 dark:hover:text-forest-300 hover:bg-earth-100 dark:hover:bg-earth-800/40 transition-colors"
              aria-label={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          )}
        </div>

        {/* -------------------------------------------------------- */}
        {/*  Mobile Controls                                          */}
        {/* -------------------------------------------------------- */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Language Switcher — Mobile */}
          <LanguageSwitcher currentLocale={locale} />

          {/* Theme Toggle — Mobile */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-earth-800 dark:text-earth-300 hover:text-forest-600 dark:hover:text-forest-300 hover:bg-earth-100 dark:hover:bg-earth-800/40 transition-colors"
              aria-label={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-earth-800 dark:text-earth-300 hover:text-forest-600 dark:hover:text-forest-300 hover:bg-earth-100 dark:hover:bg-earth-800/40 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* ---------------------------------------------------------- */}
      {/*  Mobile Drawer                                              */}
      {/* ---------------------------------------------------------- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: isRTL(locale) ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL(locale) ? '-100%' : '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`fixed top-0 ${isRTL(locale) ? 'left-0' : 'right-0'} h-full w-72 bg-white dark:bg-earth-900 shadow-xl z-50 lg:hidden overflow-y-auto`}
            >
              <div className="flex items-center justify-between p-4 border-b border-earth-200 dark:border-earth-700">
                <span className="font-heading text-lg font-bold text-earth-800 dark:text-forest-200">
                  {t.nav.menu}
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-earth-800 dark:text-earth-300 hover:text-forest-600 dark:hover:text-forest-300 hover:bg-earth-100 dark:hover:bg-earth-800/40 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="p-4 flex flex-col gap-1">
                {navItems.map((item) => {
                  if (!isGroup(item)) {
                    /* ---- Direct link ---- */
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                          isActive(item.href)
                            ? 'text-forest-600 dark:text-forest-300 bg-forest-50 dark:bg-earth-700/40'
                            : 'text-earth-800 dark:text-earth-300 hover:text-forest-600 dark:hover:text-forest-300 hover:bg-earth-100 dark:hover:bg-earth-800/40'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  /* ---- Accordion group ---- */
                  const isMobileExpanded =
                    expandedMobileGroup === item.label;

                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() => toggleMobileGroup(item.label)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-base font-medium transition-colors ${
                          isGroupActive(item)
                            ? 'text-forest-600 dark:text-forest-300 bg-forest-50 dark:bg-earth-700/40'
                            : 'text-earth-800 dark:text-earth-300 hover:text-forest-600 dark:hover:text-forest-300 hover:bg-earth-100 dark:hover:bg-earth-800/40'
                        }`}
                        aria-expanded={isMobileExpanded}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isMobileExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-6 py-1 space-y-1">
                              {item.links.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className={`block px-4 py-2 rounded-md text-sm transition-colors ${
                                    isActive(link.href)
                                      ? 'text-forest-600 dark:text-forest-300 bg-forest-50 dark:bg-earth-700/40'
                                      : 'text-earth-800 dark:text-earth-300 hover:text-forest-600 dark:hover:text-forest-300 hover:bg-earth-100 dark:hover:bg-earth-800/40'
                                  }`}
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
