'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, isValidLocale } from '@/lib/i18n';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const params = useParams();
  const lang = (params?.lang as string) || 'en';
  const locale: Locale = isValidLocale(lang) ? lang : 'en';
  const t = getTranslations(locale);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-earth-900 dark:bg-earth-950 border-t border-earth-700 p-4 shadow-lg">
      <div className="content-wrapper flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <p className="text-sm text-earth-200 leading-relaxed flex-1">
          {t.cookieConsent.message}{' '}
          <Link
            href={localePath(locale, '/privacy-policy')}
            className="underline text-forest-400 hover:text-forest-300"
          >
            {t.cookieConsent.learnMore}
          </Link>
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-1.5 text-sm text-earth-300 hover:text-white border border-earth-600 rounded-md transition-colors"
          >
            {t.cookieConsent.decline}
          </button>
          <button
            onClick={accept}
            className="px-4 py-1.5 text-sm text-white bg-forest-700 hover:bg-forest-600 rounded-md transition-colors"
          >
            {t.cookieConsent.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
