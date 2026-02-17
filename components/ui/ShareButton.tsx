'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ShareButtonProps {
  title: string;
  slug: string;
}

function isMobile() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function handleRecipeShare(title: string, slug: string) {
  const url = `${window.location.origin}/recipes/${slug}`;
  const text = `Check out this ${title} recipe on Simply Millets!\n${url}`;

  // Only use native share on mobile — on desktop go straight to WhatsApp
  if (isMobile() && navigator.share) {
    navigator.share({ title, text, url }).catch(() => {
      // User cancelled — do nothing
    });
  } else {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  }
}

export default function ShareButton({ title, slug }: ShareButtonProps) {
  return (
    <button
      onClick={() => handleRecipeShare(title, slug)}
      className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-lg border-2 border-forest-600 text-forest-400 hover:bg-forest-600 hover:text-white transition font-medium cursor-pointer"
    >
      <ShareIcon size={16} />
      Share Recipe
    </button>
  );
}

export function FloatingShareButton({ title, slug }: ShareButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={() => handleRecipeShare(title, slug)}
          className="fixed bottom-20 right-6 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-forest-600 hover:bg-forest-700 text-white shadow-lg hover:shadow-xl transition-colors cursor-pointer"
          aria-label="Share this recipe"
          title="Share this recipe"
        >
          <ShareIcon size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function ShareIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  );
}
