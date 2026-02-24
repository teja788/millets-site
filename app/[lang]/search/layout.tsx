import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, isValidLocale, locales, hreflangAlternates } from '@/lib/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const t = getTranslations(lang);

  return {
    title: `${t.nav.search} | ${t.site.siteName}`,
    description:
      lang === 'te'
        ? 'చిరుధాన్యాలు, వంటకాలు, FAQ మరియు మరిన్నింటిలో శోధించండి.'
        : 'Search across all millets, recipes, FAQ, and pages.',
    alternates: {
      canonical: `/${lang}/search`,
      languages: hreflangAlternates('/search'),
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
