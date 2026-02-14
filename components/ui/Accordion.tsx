'use client';

import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export default function Accordion({
  items,
  allowMultiple = false,
  className = '',
}: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) {
          next.clear();
        }
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className={className}>
      {items.map((item, index) => {
        const isOpen = openIndices.has(index);

        return (
          <div key={index} className="border-b border-earth-200 dark:border-earth-700">
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="
                flex w-full items-center justify-between
                font-heading text-lg text-earth-800 dark:text-earth-100
                hover:text-earth-600 dark:hover:text-earth-300 cursor-pointer
                py-4 transition-colors
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-earth-500 focus-visible:ring-offset-2
              "
            >
              <span>{item.title}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="flex-shrink-0 ml-4"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key={`content-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="text-earth-700 dark:text-earth-200 pb-4">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
