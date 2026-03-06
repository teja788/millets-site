import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Playfair_Display, Source_Sans_3, Noto_Sans_Telugu, Noto_Sans_Arabic, Noto_Sans_Devanagari } from 'next/font/google';
import '@/styles/globals.css';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
  metadataBase: new URL('https://simplymillets.com'),
  title: {
    default: 'Millets Guide - Ancient Grains, Timeless Nourishment',
    template: '%s | Millets Guide',
  },
  description:
    'A comprehensive, evidence-based guide to millets — nutrition, recipes, history, Ayurveda, and sustainable farming. Every fact sourced and verified.',
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
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Millets Guide',
  },
};

export const viewport: Viewport = {
  themeColor: '#5B8C5A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} ${notoTelugu.variable} ${notoArabic.variable} ${notoDevanagari.variable}`}
      suppressHydrationWarning
    >
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
