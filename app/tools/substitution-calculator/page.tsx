import type { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import SubstitutionCalculator from '@/components/ui/SubstitutionCalculator';

export const metadata: Metadata = {
  title: 'Millet Substitution Calculator | Millets Guide',
  description:
    'Find the right millet to replace rice, wheat, or other grains in your recipes. Get exact ratios and cooking tips.',
};

export default function SubstitutionCalculatorPage() {
  return (
    <>
      <Breadcrumb />

      <div className="content-wrapper section-padding">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-100 mb-4">
          Millet Substitution Calculator
        </h1>
        <p className="text-earth-300 max-w-2xl mb-10 leading-relaxed">
          Select a conventional grain and discover which millets can replace it
          in your recipes. Get exact ratios, cooking tips, and the best uses for
          each substitute.
        </p>

        <SubstitutionCalculator />
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
