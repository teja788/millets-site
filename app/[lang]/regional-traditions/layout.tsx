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
    title: `${t.regionalPage.title} | ${t.site.siteName}`,
    description:
      lang === 'te'
        ? 'భారతదేశంలోని వివిధ రాష్ట్రాల చిరుధాన్యాల సంప్రదాయాలు, ప్రసిద్ధ వంటకాలు మరియు పండుగలు.'
        : 'Explore the iconic dishes, festivals, and living practices that keep millet traditions alive across India.',
    alternates: {
      canonical: `/${lang}/regional-traditions`,
      languages: hreflangAlternates('/regional-traditions'),
    },
  };
}

export default function RegionalTraditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
