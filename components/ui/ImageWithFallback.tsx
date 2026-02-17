'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';

interface ImageWithFallbackProps extends Omit<ImageProps, 'onError'> {
  fallbackColor?: string;
  fallbackText?: string;
}

export default function ImageWithFallback({
  fallbackColor = '#D4A843',
  fallbackText,
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="flex items-center justify-center rounded-lg"
        style={{
          background: `linear-gradient(135deg, ${fallbackColor}22, ${fallbackColor}44)`,
          width: props.width || '100%',
          height: props.height || 300,
          aspectRatio:
            props.width && props.height
              ? `${props.width}/${props.height}`
              : undefined,
        }}
        role="img"
        aria-label={alt}
      >
        <div className="text-center p-4">
          <svg
            className="w-12 h-12 mx-auto mb-2 opacity-30"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ color: fallbackColor }}
          >
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
          {fallbackText && (
            <p className="text-sm opacity-40" style={{ color: fallbackColor }}>
              {fallbackText}
            </p>
          )}
        </div>
      </div>
    );
  }

  return <Image {...props} alt={alt} onError={() => setHasError(true)} />;
}
