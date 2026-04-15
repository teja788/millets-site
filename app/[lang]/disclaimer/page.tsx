import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { getTranslations, isValidLocale, localeParams, hreflangAlternates } from '@/lib/i18n';
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
    title: `${t.disclaimerPage.title} | ${t.site.siteName}`,
    description: t.disclaimerPage.intro,
    alternates: {
      canonical: `/${lang}/disclaimer`,
      languages: hreflangAlternates('/disclaimer'),
    },
  };
}

export default async function DisclaimerPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale: Locale = lang;
  const t = getTranslations(locale);
  const d = t.disclaimerPage;

  const sections = [
    { title: d.healthDisclaimerTitle, text: d.healthDisclaimerText },
    { title: d.noEndorsementTitle, text: d.noEndorsementText },
    { title: d.resultsVaryTitle, text: d.resultsVaryText },
    { title: d.consultProfessionalTitle, text: d.consultProfessionalText },
    { title: d.aiDisclosureTitle, text: d.aiDisclosureText },
    { title: d.affiliateDisclosureTitle, text: d.affiliateDisclosureText },
  ];

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
          {d.title}
        </h1>
        <p className="text-sm text-earth-500 dark:text-earth-400 mb-10">
          {d.lastUpdated}
        </p>

        <p className="text-lg text-earth-700 dark:text-earth-300 max-w-3xl mb-12 leading-relaxed">
          {d.intro}
        </p>

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
    </main>
  );
}
