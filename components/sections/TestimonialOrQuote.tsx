interface TestimonialOrQuoteProps {
  quote: string;
  attribution: string;
  source?: string;
  className?: string;
}

export default function TestimonialOrQuote({
  quote,
  attribution,
  source,
  className = '',
}: TestimonialOrQuoteProps) {
  return (
    <blockquote
      className={`relative bg-earth-100/50 dark:bg-earth-800/50 rounded-xl p-8 border-l-4 border-earth-400 dark:border-earth-600 overflow-hidden ${className}`}
    >
      {/* Decorative large quote mark */}
      <svg
        className="absolute top-4 left-4 w-16 h-16 opacity-[0.10] pointer-events-none"
        viewBox="0 0 64 64"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M14.4 44.8C11.2 44.8 8.53333 43.7333 6.4 41.6C4.26667 39.4667 3.2 36.8 3.2 33.6C3.2 30.1333 4.13333 26.6667 6 23.2C7.86667 19.7333 10.4 16.5333 13.6 13.6L19.2 18.4C16.5333 20.8 14.6667 23.0667 13.6 25.2C12.5333 27.3333 12 29.3333 12 31.2C12 31.7333 12.1333 32.2667 12.4 32.8C13.2 32.2667 14.2667 32 15.6 32C17.6 32 19.3333 32.7333 20.8 34.2C22.2667 35.6 23 37.3333 23 39.4C23 41.2 22.2667 42.8 20.8 44C19.4 44.5333 17.2 44.8 14.4 44.8ZM38.4 44.8C35.2 44.8 32.5333 43.7333 30.4 41.6C28.2667 39.4667 27.2 36.8 27.2 33.6C27.2 30.1333 28.1333 26.6667 30 23.2C31.8667 19.7333 34.4 16.5333 37.6 13.6L43.2 18.4C40.5333 20.8 38.6667 23.0667 37.6 25.2C36.5333 27.3333 36 29.3333 36 31.2C36 31.7333 36.1333 32.2667 36.4 32.8C37.2 32.2667 38.2667 32 39.6 32C41.6 32 43.3333 32.7333 44.8 34.2C46.2667 35.6 47 37.3333 47 39.4C47 41.2 46.2667 42.8 44.8 44C43.4 44.5333 41.2 44.8 38.4 44.8Z"
          className="text-earth-500"
        />
      </svg>

      {/* Quote text */}
      <p className="relative z-10 font-heading text-xl italic text-earth-700 dark:text-earth-200 leading-relaxed mb-4">
        {quote}
      </p>

      {/* Attribution */}
      <footer className="relative z-10">
        <p className="text-sm text-earth-500 dark:text-earth-400 font-medium">
          &mdash; {attribution}
        </p>
        {source && (
          <p className="text-xs text-earth-400 dark:text-earth-300 italic mt-1">{source}</p>
        )}
      </footer>
    </blockquote>
  );
}
