'use client';

import { useEffect } from 'react';
import { isRTL } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

export default function LangSetter({ lang }: { lang: Locale }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL(lang) ? 'rtl' : 'ltr';
  }, [lang]);

  return null;
}
