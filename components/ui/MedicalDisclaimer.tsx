import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations } from '@/lib/i18n';

interface MedicalDisclaimerProps {
  locale: Locale;
  context?: 'health' | 'ayurveda';
}

export default function MedicalDisclaimer({
  locale,
  context = 'health',
}: MedicalDisclaimerProps) {
  const t = getTranslations(locale);
  const text = context === 'ayurveda'
    ? t.medicalDisclaimer.ayurveda
    : t.medicalDisclaimer.health;

  return (
    <div className="bg-earth-100 dark:bg-earth-800/50 border border-earth-200 dark:border-earth-700 rounded-lg p-3 mb-6">
      <div className="flex items-start gap-2">
        <svg
          className="w-4 h-4 text-earth-500 dark:text-earth-400 flex-shrink-0 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
        <p className="text-xs text-earth-600 dark:text-earth-300 leading-relaxed">
          {text}{' '}
          <Link
            href={localePath(locale, '/disclaimer')}
            className="text-forest-700 dark:text-forest-400 underline hover:text-forest-900 dark:hover:text-forest-300"
          >
            {t.medicalDisclaimer.readMore}
          </Link>
        </p>
      </div>
    </div>
  );
}
