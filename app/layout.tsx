import type { Metadata, Viewport } from 'next';
import {
  Playfair_Display,
  Source_Sans_3,
  Noto_Sans_Telugu,
  Noto_Sans_Arabic,
  Noto_Sans_Devanagari,
} from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/styles/globals.css';
import { siteUrl } from '@/lib/site-url';
import ThirdPartyScripts from '@/components/ui/ThirdPartyScripts';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const notoTelugu = Noto_Sans_Telugu({
  subsets: ['telugu'],
  variable: '--font-telugu',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-hindi',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Millets Guide - Ancient Grains, Timeless Nourishment',
    template: '%s | Millets Guide',
  },
  description:
    'A comprehensive guide to millets - nutrition, recipes, history, Ayurveda, and sustainable farming, with references to published and institutional sources.',
  keywords: [
    'millets',
    'bajra',
    'ragi',
    'jowar',
    'foxtail millet',
    'nutrition',
    'recipes',
    'ayurveda',
    'gluten free grains',
    'ancient grains',
    'Indian millets',
  ],
  openGraph: {
    siteName: 'Simply Millets',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Simply Millets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.webp'],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Millets Guide',
  },
  other: {
    'google-adsense-account': 'ca-pub-5986156458101759',
  },
};

export const viewport: Viewport = {
  themeColor: '#5B8C5A',
};

// The root layout sits above the [lang] segment, so it cannot read the active
// locale from route params. Previously it read the locale from request headers
// (set by middleware), but `headers()` opts the ENTIRE app out of static
// generation — forcing every page to render dynamically with
// `Cache-Control: no-store` and no CDN caching. We now render a static default
// and let the client-side <LangSetter> (in app/[lang]/layout.tsx) apply the
// correct lang/dir per locale. The locale signal for SEO is carried by the
// hreflang tags and URL structure, which remain per-locale correct.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${playfair.variable} ${sourceSans.variable} ${notoTelugu.variable} ${notoArabic.variable} ${notoDevanagari.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased">
        <ThirdPartyScripts />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
