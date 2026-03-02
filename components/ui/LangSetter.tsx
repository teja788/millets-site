'use client';

import { useEffect } from 'react';
import type { Locale } from '@/lib/i18n';
import { localeFeatures } from '@/lib/locale-config';

export default function LangSetter({ lang }: { lang: Locale }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = localeFeatures[lang].isRTL ? 'rtl' : 'ltr';
  }, [lang]);

  return null;
}
