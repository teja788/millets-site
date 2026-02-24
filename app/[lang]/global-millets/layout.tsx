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
    title: `${t.globalPage.title} | ${t.site.siteName}`,
    description:
      lang === 'te'
        ? 'ప్రపంచవ్యాప్తంగా చిరుధాన్యాల చరిత్ర మరియు సంస్కృతిని అన్వేషించండి.'
        : lang === 'fr'
          ? 'Découvrez comment différentes cultures à travers le monde ont cultivé, cuisiné et célébré les millets au fil de l\'histoire.'
          : 'Explore how different cultures across the world have cultivated, cooked, and celebrated millets throughout history.',
    alternates: {
      canonical: `/${lang}/global-millets`,
      languages: hreflangAlternates('/global-millets'),
    },
  };
}

export default function GlobalMilletsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
