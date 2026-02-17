'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { variantStyles, sizeStyles } from '@/components/ui/Button';

interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

interface HeroProps {
  title: string;
  subtitle: string;
  ctaButtons?: CTAButton[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function Hero({ title, subtitle, ctaButtons }: HeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[50vh] md:min-h-[70vh] flex items-center grain-texture">
      {/* Decorative organic shapes */}
      <svg
        className="absolute top-0 right-0 w-64 h-64 opacity-[0.06] pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill="#5B8C5A"
          d="M42.7,-62.3C54.5,-55.5,63.1,-42.7,68.5,-28.6C73.9,-14.5,76.1,0.9,72.4,14.6C68.7,28.2,59.1,40.1,47.3,49.2C35.5,58.3,21.5,64.6,6.2,66.7C-9.1,68.8,-25.7,66.7,-39.3,59.1C-52.9,51.5,-63.5,38.4,-69.1,23.3C-74.7,8.2,-75.3,-8.9,-69.6,-23.3C-63.9,-37.7,-51.9,-49.4,-38.6,-55.5C-25.3,-61.6,-10.7,-62.1,2.8,-65.8C16.3,-69.5,30.9,-69.1,42.7,-62.3Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-48 h-48 opacity-[0.05] pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill="#2D5016"
          d="M38.5,-49.6C51.1,-44.2,63.2,-34.3,67.9,-21.5C72.6,-8.7,69.9,7,63.4,19.8C56.9,32.6,46.6,42.5,34.8,50.1C23,57.7,9.7,63,-3.3,67.2C-16.3,71.4,-29,74.5,-40.2,69C-51.4,63.5,-61.1,49.4,-66.3,34.6C-71.5,19.8,-72.2,4.3,-68.4,-9.5C-64.6,-23.3,-56.3,-35.4,-45.2,-41.4C-34.1,-47.4,-20.2,-47.3,-7.1,-48.2C6,-49.1,25.9,-55,38.5,-49.6Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg
        className="absolute top-1/3 left-[10%] w-32 h-32 opacity-[0.04] pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill="#D4A843"
          d="M47.3,-57.2C59.8,-51.7,67.5,-35.7,70.4,-19.4C73.3,-3.1,71.4,13.5,64.1,27.1C56.8,40.7,44.1,51.3,29.8,57.8C15.5,64.3,-0.4,66.7,-16.2,63.7C-32,60.7,-47.7,52.3,-57.3,39.4C-66.9,26.5,-70.4,9.1,-67.8,-6.8C-65.2,-22.7,-56.5,-37.1,-44.4,-42.8C-32.3,-48.5,-16.8,-45.5,0.6,-46.2C18,-46.9,34.8,-62.7,47.3,-57.2Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Content */}
      <div className="content-wrapper w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h1
            variants={childVariants}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-earth-800 dark:text-earth-100 mb-6"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="text-xl text-earth-800 dark:text-earth-300 mb-8 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {ctaButtons && ctaButtons.length > 0 && (
            <motion.div
              variants={childVariants}
              className="flex flex-wrap gap-4"
            >
              {ctaButtons.map((cta) => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className={`inline-flex items-center justify-center rounded-lg transition font-medium ${variantStyles[cta.variant]} ${sizeStyles.lg}`}
                >
                  {cta.label}
                </Link>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
