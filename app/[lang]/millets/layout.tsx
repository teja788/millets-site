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
    title: `${t.milletsPage.title} | ${t.site.siteName}`,
    description: t.milletsPage.description,
    alternates: {
      canonical: `/${lang}/millets`,
      languages: Object.fromEntries(
        locales.map((l) => [l, localePath(l, '/millets')])
      ),
    },
  };
}

export default function MilletsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
