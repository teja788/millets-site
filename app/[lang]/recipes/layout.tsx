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
    title: `${t.recipesPage.title} | ${t.site.siteName}`,
    description: t.recipesPage.description,
    alternates: {
      canonical: `/${lang}/recipes`,
      languages: hreflangAlternates('/recipes'),
    },
  };
}

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
