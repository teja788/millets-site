'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Millet } from '@/lib/types';
import MilletCard from '@/components/ui/MilletCard';

interface MilletGridProps {
  millets: Millet[];
  columns?: 2 | 3 | 4;
}

const columnClasses: Record<2 | 3 | 4, string> = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function MilletGrid({ millets, columns = 3 }: MilletGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`grid grid-cols-1 md:grid-cols-2 ${columnClasses[columns]} gap-6`}
    >
      {millets.map((millet) => (
        <motion.div key={millet.slug} variants={cardVariants}>
          <MilletCard millet={millet} />
        </motion.div>
      ))}
    </motion.div>
  );
}
