import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Database, Download, ExternalLink } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { openMilletReference } from '@/data/open-millet-reference';

export const metadata: Metadata = {
  title: 'Open Millet Names Reference',
  description:
    'An openly licensed, field-level reference for scientific names, selected synonyms, vernacular names, source records, and provenance for millets and sorghum.',
  alternates: {
    canonical: '/en/open-millet-reference',
    languages: { en: '/en/open-millet-reference', 'x-default': '/en/open-millet-reference' },
  },
};

export function generateStaticParams() {
  return [{ lang: 'en' }];
}

export default async function OpenMilletReferencePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== 'en') notFound();

  return (
    <main>
      <Breadcrumb locale="en" />
      <div className="content-wrapper py-10 md:py-14">
        <header className="max-w-4xl mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-forest-100 dark:bg-forest-900/40 px-3 py-1 text-sm font-medium text-forest-700 dark:text-forest-300 mb-4">
            <Database className="h-4 w-4" />
            Open data · {openMilletReference.license.shortName}
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-5">
            Open Millet Names Reference
          </h1>
          <p className="text-lg text-earth-700 dark:text-earth-300 leading-relaxed max-w-3xl">
            A small, auditable dataset for the crop names used on Simply Millets. Each record links
            directly to its source and keeps accepted scientific names separate from familiar
            synonyms and recorded vernacular names.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              href="/api/open-millet-reference"
              className="inline-flex items-center gap-2 rounded-lg bg-forest-600 px-4 py-2.5 text-white font-medium hover:bg-forest-700 transition-colors"
            >
              <Download className="h-4 w-4" />
              View or download JSON
            </Link>
            <a
              href={openMilletReference.source.datasetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-earth-300 dark:border-earth-700 px-4 py-2.5 text-earth-700 dark:text-earth-200 hover:bg-earth-50 dark:hover:bg-earth-800 transition-colors"
            >
              Source dataset
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </header>

        <section className="grid md:grid-cols-2 gap-5 mb-12" aria-labelledby="scope-heading">
          <div className="rounded-xl border border-earth-200 dark:border-earth-700 bg-white dark:bg-earth-800 p-6">
            <h2 id="scope-heading" className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100 mb-3">
              Included
            </h2>
            <ul className="space-y-2 text-earth-700 dark:text-earth-300">
              {openMilletReference.scope.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
          <div className="rounded-xl border border-earth-200 dark:border-earth-700 bg-white dark:bg-earth-800 p-6">
            <h2 className="font-heading text-xl font-bold text-earth-800 dark:text-earth-100 mb-3">
              Deliberately excluded
            </h2>
            <ul className="space-y-2 text-earth-700 dark:text-earth-300">
              {openMilletReference.exclusions.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
        </section>

        <section aria-labelledby="records-heading">
          <div className="mb-6">
            <h2 id="records-heading" className="font-heading text-3xl font-bold text-earth-800 dark:text-earth-100">
              Records
            </h2>
            <p className="mt-2 text-earth-600 dark:text-earth-400">
              Source accessed {openMilletReference.accessedOn}. A blank language is preferable to an inferred translation.
            </p>
          </div>

          <div className="space-y-5">
            {openMilletReference.records.map((record) => (
              <article key={record.slug} className="rounded-xl border border-earth-200 dark:border-earth-700 bg-white dark:bg-earth-800 p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100">
                        {record.commonName}
                      </h3>
                      {record.group === 'sorghum' && (
                        <span className="rounded-full bg-amber-100 dark:bg-amber-900/30 px-2.5 py-1 text-xs font-medium text-amber-800 dark:text-amber-300">
                          Sorghum — listed separately
                        </span>
                      )}
                    </div>
                    <p className="text-earth-700 dark:text-earth-200">
                      Accepted name: <em className="font-medium">{record.acceptedScientificName}</em>
                    </p>
                    <p className="mt-1 text-sm text-earth-600 dark:text-earth-400">
                      Familiar synonym: {record.familiarSynonyms.join('; ')}
                    </p>
                  </div>
                  <a
                    href={record.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-forest-700 dark:text-forest-300 hover:underline"
                  >
                    GBIF taxon {record.gbifTaxonKey}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {record.selectedRecordedNames.map((name) => (
                    <span key={`${name.language}-${name.value}`} className="rounded-lg bg-earth-50 dark:bg-earth-900 px-3 py-2 text-sm text-earth-700 dark:text-earth-300">
                      <span className="font-medium">{name.language}:</span> {name.value}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-xl bg-earth-50 dark:bg-earth-900 p-6 md:p-8" aria-labelledby="reuse-heading">
          <h2 id="reuse-heading" className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-3">
            Provenance and reuse
          </h2>
          <p className="text-earth-700 dark:text-earth-300 leading-relaxed">
            This compilation is released under{' '}
            <a className="underline" href={openMilletReference.license.url} target="_blank" rel="noopener noreferrer">
              {openMilletReference.license.name}
            </a>. Taxonomic records are attributed to{' '}
            <a className="underline" href={openMilletReference.source.datasetUrl} target="_blank" rel="noopener noreferrer">
              {openMilletReference.source.publisher}, {openMilletReference.source.dataset}
            </a>. Reusers should preserve each taxon key, source link, licence, and access date. This is an automated
            source compilation; it does not claim manual or expert review.
          </p>
          <p className="mt-4 text-sm text-earth-600 dark:text-earth-400">
            Suggested attribution: “Simply Millets Open Names Reference, version {openMilletReference.version},
            derived from GBIF records, {openMilletReference.license.shortName}.”
          </p>
          <div className="mt-5">
            <Link href="/en/contact" className="text-forest-700 dark:text-forest-300 font-medium hover:underline">
              Report a source mismatch
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
