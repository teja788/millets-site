'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { TimelineEvent } from '@/lib/types';

interface TimelineSectionProps {
  events: TimelineEvent[];
}

function TimelineItem({
  event,
  index,
}: {
  event: TimelineEvent;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-start md:items-center gap-4 md:gap-0 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -40 : 40 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        className={`flex-1 md:w-[calc(50%-2rem)] ${
          isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
        }`}
      >
        <div className="bg-cream dark:bg-earth-800 rounded-xl p-5 card-shadow">
          <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-1">
            {event.title}
          </h3>
          <p className="text-sm text-earth-600 dark:text-earth-300 leading-relaxed">
            {event.description}
          </p>
          {event.region && (
            <span className="inline-block mt-2 text-xs font-medium bg-earth-100 dark:bg-earth-700 text-earth-600 dark:text-earth-300 px-2 py-0.5 rounded-full">
              {event.region}
            </span>
          )}
        </div>
      </motion.div>

      {/* Center dot and year badge (desktop) */}
      <div className="hidden md:flex flex-col items-center z-10 flex-shrink-0 w-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <span className="bg-earth-500 text-white rounded-full px-4 py-1 text-sm font-bold whitespace-nowrap">
            {event.year}
          </span>
        </motion.div>
      </div>

      {/* Year badge (mobile, shown inline) */}
      <div className="md:hidden absolute -left-1 top-0 flex-shrink-0">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-earth-500 text-white rounded-full px-3 py-0.5 text-xs font-bold"
        >
          {event.year}
        </motion.span>
      </div>

      {/* Empty spacer for desktop alternating layout */}
      <div className="hidden md:block flex-1 md:w-[calc(50%-2rem)]" />
    </div>
  );
}

export default function TimelineSection({ events }: TimelineSectionProps) {
  return (
    <div className="relative">
      {/* Vertical connecting line (desktop) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 border-l-2 border-dashed border-earth-300" />

      {/* Vertical connecting line (mobile) */}
      <div className="md:hidden absolute left-3 top-0 bottom-0 w-px border-l-2 border-dashed border-earth-300" />

      {/* Timeline events */}
      <div className="space-y-8 md:space-y-12 pl-10 md:pl-0">
        {events.map((event, index) => (
          <TimelineItem key={`${event.year}-${index}`} event={event} index={index} />
        ))}
      </div>
    </div>
  );
}
