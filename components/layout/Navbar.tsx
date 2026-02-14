'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

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
/*  Navigation data                                                    */
/* ------------------------------------------------------------------ */

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/millets', label: 'Millets' },
  { href: '/recipes', label: 'Recipes' },
  {
    label: 'Learn',
    links: [
      { href: '/nutrition', label: 'Nutrition' },
      { href: '/cooking-guide', label: 'Cooking Guide' },
      { href: '/glossary', label: 'Glossary' },
      { href: '/faq', label: 'FAQ' },
      { href: '/myths', label: 'Myths & Facts' },
      { href: '/buying-guide', label: 'Buying Guide' },
    ],
  },
  {
    label: 'Culture',
    links: [
      { href: '/history', label: 'History' },
      { href: '/ayurveda', label: 'Ayurveda' },
      { href: '/regional-traditions', label: 'Regional Traditions' },
      { href: '/global-millets', label: 'Global Millets' },
      { href: '/fermentation', label: 'Fermentation' },
      { href: '/ancient-references', label: 'Ancient References' },
      { href: '/sustainability', label: 'Sustainability' },
    ],
  },
  {
    label: 'Tools',
    links: [
      { href: '/tools/millet-quiz', label: 'Millet Quiz' },
      { href: '/tools/substitution-calculator', label: 'Substitution Calculator' },
      { href: '/tools/cooking-timer', label: 'Cooking Timer' },
    ],
  },
  { href: '/about', label: 'About' },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  const pathname = usePathname();

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
      if (href === '/') return pathname === '/';
      return pathname.startsWith(href);
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
  /*  Render                                                           */
  /* ---------------------------------------------------------------- */

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-earth-900/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="content-wrapper flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-xl md:text-2xl font-bold text-earth-100 hover:text-earth-300 transition-colors"
        >
          Millets Guide
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
                      ? 'text-earth-100 bg-earth-700/40'
                      : 'text-earth-300 hover:text-earth-100 hover:bg-earth-800/40'
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
                      ? 'text-earth-100 bg-earth-700/40'
                      : 'text-earth-300 hover:text-earth-100 hover:bg-earth-800/40'
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
                      className="absolute top-full left-0 mt-1 w-56 bg-earth-900/95 backdrop-blur-md border border-earth-700 rounded-lg shadow-xl py-2 z-50"
                    >
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(link.href)
                              ? 'text-earth-100 bg-earth-700/40'
                              : 'text-earth-300 hover:text-earth-100 hover:bg-earth-800/40'
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
        </div>

        {/* -------------------------------------------------------- */}
        {/*  Mobile Controls                                          */}
        {/* -------------------------------------------------------- */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-earth-300 hover:text-earth-100 hover:bg-earth-800/40 transition-colors"
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
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-72 bg-earth-900 shadow-xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between p-4 border-b border-earth-700">
                <span className="font-heading text-lg font-bold text-earth-100">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-earth-300 hover:text-earth-100 hover:bg-earth-800/40 transition-colors"
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
                            ? 'text-earth-100 bg-earth-700/40'
                            : 'text-earth-300 hover:text-earth-100 hover:bg-earth-800/40'
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
                            ? 'text-earth-100 bg-earth-700/40'
                            : 'text-earth-300 hover:text-earth-100 hover:bg-earth-800/40'
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
                                      ? 'text-earth-100 bg-earth-700/40'
                                      : 'text-earth-300 hover:text-earth-100 hover:bg-earth-800/40'
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
