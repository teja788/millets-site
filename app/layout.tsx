import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';
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

export const metadata: Metadata = {
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
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Millets Guide',
  },
};

export const viewport: Viewport = {
  themeColor: '#5E4A26',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable}`}
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
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main className="pt-16 md:pt-18">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
