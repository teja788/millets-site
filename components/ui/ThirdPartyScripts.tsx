'use client';

import { useSyncExternalStore } from 'react';
import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CONSENT_EVENT = 'cookie-consent-change';

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener(CONSENT_EVENT, callback);

  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(CONSENT_EVENT, callback);
  };
}

function getConsentSnapshot() {
  return localStorage.getItem('cookie-consent') === 'accepted';
}

export default function ThirdPartyScripts() {
  const hasConsent = useSyncExternalStore(subscribe, getConsentSnapshot, () => false);

  if (!hasConsent) return null;

  return (
    <>
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="lazyOnload"
          />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5986156458101759"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
    </>
  );
}
