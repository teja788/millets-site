import type { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CookingTimer from '@/components/ui/CookingTimer';

export const metadata: Metadata = {
  title: 'Millet Cooking Timer | Millets Guide',
  description:
    'Interactive cooking timer with presets for each millet variety. Includes water ratios and soaking times.',
};

export default function CookingTimerPage() {
  return (
    <>
      <Breadcrumb />

      <div className="content-wrapper section-padding">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-100 mb-4">
          Millet Cooking Timer
        </h1>
        <p className="text-earth-300 max-w-2xl mb-10 leading-relaxed">
          Select a millet to see its water ratio, soaking time, and cooking
          time. Use the built-in timer to cook your millets to perfection.
        </p>

        <CookingTimer />
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-700 pt-6 mt-10">
          <p className="text-xs text-earth-400 leading-relaxed max-w-3xl">
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
