import type { Metadata } from 'next';
import { isValidLocale, hreflangAlternates } from '@/lib/i18n';

export function generateStaticParams() {
  return [{ lang: 'de' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang) || lang !== 'de') return {};

  return {
    title: 'Ernährung und Gesundheit: Hirse | Simply Millets',
    description:
      'Wissenschaftlich fundierte Gesundheitsvorteile der Hirse: Herzgesundheit, Diabetes-Prävention, Gewichtsmanagement, glutenfrei. Daten von DGE, BfR, EFSA und DZG.',
    alternates: {
      canonical: '/de/ernaehrung-und-gesundheit',
      languages: hreflangAlternates('/ernaehrung-und-gesundheit'),
    },
  };
}

export default function ErnaehrungUndGesundheitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
