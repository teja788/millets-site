import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/layout/Breadcrumb';
import type { Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/i18n';

export function generateStaticParams() {
  return [{ lang: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== 'en') return {};
  const t = getTranslations('en');
  return {
    title: `${t.contactPage.title} | ${t.site.siteName}`,
    description: t.contactPage.description,
    alternates: {
      canonical: '/en/contact',
      languages: {
        en: '/en/contact',
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (lang !== 'en') notFound();

  const locale = 'en' as Locale;
  const t = getTranslations(locale);
  const c = t.contactPage;

  return (
    <>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper section-padding">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
          {c.title}
        </h1>
        <p className="text-lg text-earth-600 dark:text-earth-300 mb-10 max-w-2xl leading-relaxed">
          {c.description}
        </p>

        <div className="max-w-2xl space-y-8">
          <div className="rounded-xl border border-earth-200 dark:border-earth-700 bg-earth-50 dark:bg-earth-800/40 p-6">
            <h2 className="font-heading text-xl font-semibold text-earth-800 dark:text-earth-100 mb-3">
              {c.emailLabel}
            </h2>
            <a
              href={`mailto:${c.email}`}
              className="text-forest-600 dark:text-forest-400 hover:text-forest-800 dark:hover:text-forest-200 text-lg font-medium underline underline-offset-4 transition-colors"
            >
              {c.email}
            </a>
          </div>

          <p className="text-earth-600 dark:text-earth-300 leading-relaxed">
            {c.message}
          </p>
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
    </>
  );
}
