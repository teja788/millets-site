import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, isValidLocale, locales } from '@/lib/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const t = getTranslations(lang);

  return {
    title: `${t.mealPlan.title} | ${t.site.siteName}`,
    description:
      lang === 'te'
        ? 'వివిధ ఆహార లక్ష్యాల కోసం చిరుధాన్యాల ఆధారిత 7-రోజుల భోజన ప్రణాళికలు.'
        : 'Ready-to-follow 7-day meal plans designed around millets for different dietary goals.',
    alternates: {
      canonical: `/${lang}/meal-plans`,
      languages: Object.fromEntries(
        locales.map((l) => [l, localePath(l, '/meal-plans')])
      ),
    },
  };
}

export default function MealPlansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
