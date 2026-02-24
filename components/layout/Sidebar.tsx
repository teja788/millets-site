'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { isValidLocale, getTranslations } from '@/lib/i18n';

interface Section {
  id: string;
  title: string;
}

interface SidebarProps {
  sections: Section[];
}

export default function Sidebar({ sections }: SidebarProps) {
  const params = useParams();
  const locale: Locale = isValidLocale(params.lang as string) ? (params.lang as Locale) : 'en';
  const t = getTranslations(locale);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first entry that is intersecting
        const intersecting = entries.filter((entry) => entry.isIntersecting);
        if (intersecting.length > 0) {
          // Pick the one closest to the top of the viewport
          const closest = intersecting.reduce((prev, curr) => {
            return prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr;
          });
          setActiveId(closest.target.id);
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    );

    const elements: Element[] = [];
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sections]);

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarOffset,
        behavior: 'smooth',
      });
    }
  }, []);

  if (sections.length === 0) return null;

  return (
    <aside className="hidden md:block sticky top-24 self-start w-56 lg:w-64 shrink-0">
      <nav aria-label="Table of contents">
        <h4 className="font-heading text-sm font-semibold text-earth-800 dark:text-earth-200 uppercase tracking-wider mb-3">
          {t.common.onThisPage}
        </h4>
        <ul className="space-y-0.5">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <button
                  onClick={() => handleClick(section.id)}
                  className={`w-full text-left px-3 py-1.5 text-sm rounded-r-md border-l-2 transition-all duration-200 ${
                    isActive
                      ? 'border-earth-500 text-earth-800 bg-earth-100/60 font-medium dark:text-earth-100 dark:bg-earth-800/40'
                      : 'border-transparent text-earth-500 hover:text-earth-700 hover:border-earth-300 dark:text-earth-400 dark:hover:text-earth-200 dark:hover:border-earth-600'
                  }`}
                >
                  {section.title}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
