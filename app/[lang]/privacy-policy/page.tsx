import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations, isValidLocale, locales, localeParams, hreflangAlternates } from '@/lib/i18n';
import Breadcrumb from '@/components/layout/Breadcrumb';

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const t = getTranslations(lang);

  return {
    title: `${t.privacyPolicy.title} | ${t.site.siteName}`,
    description: lang === 'te'
      ? 'సింప్లీ మిల్లెట్స్ గోప్యతా విధానం — మేము మీ సమాచారాన్ని ఎలా సేకరిస్తాము, ఉపయోగిస్తాము మరియు భద్రపరుస్తాము.'
      : lang === 'ar'
        ? 'سياسة خصوصية سيمبلي ميليتس — كيف نجمع معلوماتك ونستخدمها ونحميها.'
        : lang === 'fr'
          ? 'Politique de confidentialité de Simply Millets — comment nous collectons, utilisons et protégeons vos informations.'
          : 'Simply Millets privacy policy — how we collect, use, and protect your information.',
    alternates: {
      canonical: `/${lang}/privacy-policy`,
      languages: hreflangAlternates('/privacy-policy'),
    },
  };
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale: Locale = lang;
  const t = getTranslations(locale);
  const p = t.privacyPolicy;

  const sections = [
    { title: p.informationWeCollectTitle, text: p.informationWeCollectText },
    { title: p.howWeUseTitle, text: p.howWeUseText },
    { title: p.cookiesTitle, text: p.cookiesText },
    { title: p.thirdPartyTitle, text: p.thirdPartyText },
    { title: p.dataSecurityTitle, text: p.dataSecurityText },
    { title: p.yourRightsTitle, text: p.yourRightsText },
    { title: p.childrenTitle, text: p.childrenText },
    { title: p.changesTitle, text: p.changesText },
    { title: p.contactTitle, text: p.contactText },
  ];

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
          {p.title}
        </h1>
        <p className="text-sm text-earth-500 dark:text-earth-400 mb-10">
          {p.lastUpdated}
        </p>

        {/* Intro */}
        <p className="text-lg text-earth-700 dark:text-earth-300 max-w-3xl mb-12 leading-relaxed">
          {p.intro}
        </p>

        {/* Policy Sections */}
        <div className="max-w-3xl space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-3">
                {section.title}
              </h2>
              <p className="text-earth-700 dark:text-earth-300 leading-relaxed">
                {section.text}
              </p>
            </section>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6 mt-10">
          <p className="text-xs text-warm-gray dark:text-earth-400 leading-relaxed max-w-3xl">
            <strong>{t.common.disclaimer}:</strong> {t.common.disclaimerText}
          </p>
        </div>
      </div>
    </main>
  );
}
