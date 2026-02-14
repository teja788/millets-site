import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Accordion from '@/components/ui/Accordion';
import { faqItems } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Millets Info',
  description:
    'Find answers to common questions about millets: nutrition, cooking, health benefits, Ayurvedic properties, and more.',
};

const categoryOrder = ['General', 'Nutrition', 'Cooking', 'Health', 'Ayurveda'];

export default function FAQPage() {
  // Group FAQ items by category
  const groupedFAQs = categoryOrder
    .map((category) => ({
      category,
      items: faqItems.filter((item) => item.category === category),
    }))
    .filter((group) => group.items.length > 0);

  // Build JSON-LD structured data for FAQPage schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <main>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-100 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-earth-300 max-w-3xl mb-10 leading-relaxed">
          Answers to the most common questions about millets -- from nutrition and cooking to
          health benefits and Ayurvedic perspectives.
        </p>

        {/* FAQ Groups */}
        <div className="space-y-10 max-w-3xl">
          {groupedFAQs.map((group) => (
            <section key={group.category}>
              <h2 className="font-heading text-2xl font-bold text-earth-100 mb-4">
                {group.category}
              </h2>
              <Accordion
                items={group.items.map((item) => ({
                  title: item.question,
                  content: (
                    <p className="text-earth-200 leading-relaxed">{item.answer}</p>
                  ),
                }))}
                allowMultiple
              />
            </section>
          ))}
        </div>

        {/* Explore More */}
        <div className="mt-14 bg-earth-800 rounded-xl p-8 max-w-3xl">
          <h2 className="font-heading text-xl font-bold text-earth-100 mb-3">
            Still have questions? Explore our detailed guides:
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/cooking-guide"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-earth-500 text-white font-medium hover:bg-earth-600 transition"
            >
              Cooking Guide
            </Link>
            <Link
              href="/nutrition"
              className="inline-flex items-center px-5 py-2.5 rounded-lg border-2 border-earth-500 text-earth-400 font-medium hover:bg-earth-500 hover:text-white transition"
            >
              Nutrition
            </Link>
            <Link
              href="/ayurveda"
              className="inline-flex items-center px-5 py-2.5 rounded-lg border-2 border-earth-500 text-earth-400 font-medium hover:bg-earth-500 hover:text-white transition"
            >
              Ayurveda
            </Link>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-700 pt-6 mt-10">
          <p className="text-xs text-earth-500 leading-relaxed max-w-3xl">
            <strong>Disclaimer:</strong> This content is created with the
            assistance of AI and is intended for educational purposes only. While
            we strive for accuracy, information may contain errors or be
            incomplete. Always do your own research and consult qualified
            professionals (nutritionists, doctors, agricultural experts) before
            making decisions based on this content. This website does not provide
            medical, nutritional, or agricultural advice.
          </p>
        </div>
      </div>
    </main>
  );
}
