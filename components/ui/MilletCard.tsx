'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Millet } from '@/lib/types';
import Badge from '@/components/ui/Badge';

interface MilletCardProps {
  millet: Millet;
}

const milletGradients: Record<string, string> = {
  'pearl-millet': 'from-amber-600 via-yellow-700 to-amber-800',
  'finger-millet': 'from-red-800 via-red-700 to-rose-900',
  'sorghum': 'from-amber-700 via-orange-600 to-yellow-800',
  'foxtail-millet': 'from-yellow-600 via-amber-500 to-yellow-700',
  'little-millet': 'from-lime-700 via-green-600 to-emerald-800',
  'kodo-millet': 'from-stone-600 via-amber-700 to-stone-700',
  'barnyard-millet': 'from-emerald-700 via-teal-600 to-green-800',
  'proso-millet': 'from-yellow-500 via-amber-400 to-orange-600',
  'browntop-millet': 'from-amber-800 via-yellow-900 to-stone-800',
};

const defaultGradient = 'from-earth-400 via-earth-500 to-earth-700';

export default function MilletCard({ millet }: MilletCardProps) {
  const [imgError, setImgError] = useState(false);
  const gradient = milletGradients[millet.slug] || defaultGradient;
  const hasImage = millet.images?.grain && !imgError;

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(44, 24, 16, 0.15)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="w-full"
    >
      <Link href={`/millets/${millet.slug}`} className="block">
        <div className="bg-earth-800 rounded-xl overflow-hidden card-shadow">
          {/* Image area */}
          <div className={`relative h-48 overflow-hidden ${hasImage ? '' : `bg-gradient-to-br ${gradient}`}`}>
            {hasImage ? (
              <Image
                src={millet.images.grain}
                alt={`${millet.name} grains`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/30"
                >
                  <path d="M2 22 16 8" />
                  <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
                  <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
                  <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
                  <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
                  <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
                  <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
                  <path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
                </svg>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
            {/* Category badge overlay */}
            <div className="absolute top-3 right-3 flex gap-2">
              <Badge
                variant={millet.category === 'major' ? 'green' : 'orange'}
                size="sm"
              >
                {millet.category === 'major' ? 'Major Millet' : 'Minor Millet'}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="px-5 py-4">
            <h3 className="font-heading text-lg font-bold text-earth-100 mb-0.5">
              {millet.name}
            </h3>
            <p className="text-sm italic text-earth-400 mb-1">
              {millet.scientificName}
            </p>
            {millet.commonName && (
              <p className="text-sm text-earth-300 mb-2">
                ({millet.commonName})
              </p>
            )}
            <p className="text-sm text-earth-300 line-clamp-2 mb-3">
              {millet.tagline}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {millet.isGlutenFree && (
                <Badge variant="blue" size="sm">
                  Gluten-Free
                </Badge>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
