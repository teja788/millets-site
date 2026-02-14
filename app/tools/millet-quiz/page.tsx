import type { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import MilletQuiz from '@/components/ui/MilletQuiz';

export const metadata: Metadata = {
  title: 'Millet Quiz | Millets Guide',
  description:
    'Answer a few questions to find the perfect millet for your health goals, taste preferences, and cooking style.',
};

export default function MilletQuizPage() {
  return (
    <>
      <Breadcrumb />

      <div className="content-wrapper section-padding">
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-100 mb-4">
            Which Millet Should You Try?
          </h1>
          <p className="text-earth-300 max-w-2xl mx-auto leading-relaxed">
            Answer four quick questions about your health goals, taste
            preferences, and cooking habits. We&apos;ll recommend the millets
            that are the best fit for you.
          </p>
        </div>

        <MilletQuiz />
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
    </>
  );
}
