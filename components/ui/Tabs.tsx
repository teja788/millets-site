'use client';

import { useState, useRef, type KeyboardEvent, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultIndex?: number;
  className?: string;
}

export default function Tabs({ tabs, defaultIndex = 0, className = '' }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let newIndex = index;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      newIndex = (index + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      newIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      newIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      newIndex = tabs.length - 1;
    } else {
      return;
    }

    setActiveIndex(newIndex);
    tabRefs.current[newIndex]?.focus();
  };

  return (
    <div className={className}>
      {/* Tab list */}
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="flex border-b border-earth-700 relative"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            role="tab"
            id={`tab-${index}`}
            aria-selected={activeIndex === index}
            aria-controls={`tabpanel-${index}`}
            tabIndex={activeIndex === index ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`
              relative px-4 py-3 text-sm font-medium transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-500 focus-visible:ring-offset-2
              ${
                activeIndex === index
                  ? 'text-earth-100 font-semibold'
                  : 'text-earth-300 hover:text-earth-100'
              }
            `.trim()}
          >
            {tab.label}
            {activeIndex === index && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-earth-500"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab panels */}
      {tabs.map((tab, index) => (
        <div
          key={tab.label}
          role="tabpanel"
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
          hidden={activeIndex !== index}
          tabIndex={0}
          className="pt-4 focus-visible:outline-none"
        >
          {activeIndex === index && tab.content}
        </div>
      ))}
    </div>
  );
}
