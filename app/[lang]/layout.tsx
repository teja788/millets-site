import { notFound } from 'next/navigation';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';
import LangSetter from '@/components/ui/LangSetter';
import { isValidLocale, localeParams } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

export function generateStaticParams() {
  return localeParams();
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;

  return (
    <ThemeProvider>
      <LangSetter lang={locale} />
      <ScrollProgress />
      <Navbar locale={locale} />
      <main className={`pt-16 md:pt-18${locale === 'te' ? ' font-telugu' : locale === 'ar' ? ' font-arabic' : ''}`}>
        {children}
      </main>
      <Footer locale={locale} />
      <BackToTop />
    </ThemeProvider>
  );
}
