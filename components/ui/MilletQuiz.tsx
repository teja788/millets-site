'use client';

import { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, RotateCcw, Sparkles } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { getTranslations, localePath } from '@/lib/i18n';

// ---- Types ----

interface QuizOption {
  label: string;
  millets: string[];
}

interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

interface MilletInfo {
  slug: string;
  name: string;
  tagline: string;
}

// ---- Data ----

const milletInfo: Record<string, Record<Locale, MilletInfo>> = {
  'finger-millet': {
    en: { slug: 'finger-millet', name: 'Finger Millet (Ragi)', tagline: 'The calcium champion among cereals' },
    te: { slug: 'finger-millet', name: 'రాగులు (Ragi)', tagline: 'తృణధాన్యాలలో కాల్షియం ఛాంపియన్' },
    ar: { slug: 'finger-millet', name: 'دخن الإصبع (راغي)', tagline: 'بطل الكالسيوم بين الحبوب' },
    fr: { slug: 'finger-millet', name: 'Éleusine (Mil rouge)', tagline: 'Le champion du calcium parmi les céréales' },
    de: { slug: 'finger-millet', name: 'Fingerhirse (Ragi)', tagline: 'Der Kalzium-Champion unter den Getreiden' },
  },
  'pearl-millet': {
    en: { slug: 'pearl-millet', name: 'Pearl Millet (Bajra)', tagline: 'The iron-rich powerhouse grain' },
    te: { slug: 'pearl-millet', name: 'సజ్జలు (Bajra)', tagline: 'ఇనుము అధికంగా ఉన్న శక్తి ధాన్యం' },
    ar: { slug: 'pearl-millet', name: 'الدخن اللؤلؤي (باجرا)', tagline: 'حبوب غنية بالحديد وعالية الطاقة' },
    fr: { slug: 'pearl-millet', name: 'Mil à chandelle (Petit mil)', tagline: 'La céréale riche en fer et pleine d\'énergie' },
    de: { slug: 'pearl-millet', name: 'Perlhirse (Bajra)', tagline: 'Das eisenreiche Kraftkorn' },
  },
  'sorghum': {
    en: { slug: 'sorghum', name: 'Sorghum (Jowar)', tagline: 'The versatile everyday millet' },
    te: { slug: 'sorghum', name: 'జొన్నలు (Jowar)', tagline: 'బహుముఖ రోజువారీ చిరుధాన్యం' },
    ar: { slug: 'sorghum', name: 'الذرة الرفيعة (جوار)', tagline: 'الدخن اليومي متعدد الاستخدامات' },
    fr: { slug: 'sorghum', name: 'Sorgho (Gros mil)', tagline: 'Le millet polyvalent du quotidien' },
    de: { slug: 'sorghum', name: 'Sorghum (Jowar)', tagline: 'Die vielseitige Alltagshirse' },
  },
  'foxtail-millet': {
    en: { slug: 'foxtail-millet', name: 'Foxtail Millet (Kangni)', tagline: 'The quick-cooking, protein-rich grain' },
    te: { slug: 'foxtail-millet', name: 'కొర్రలు (Kangni)', tagline: 'త్వరగా వండే, ప్రోటీన్ అధిక ధాన్యం' },
    ar: { slug: 'foxtail-millet', name: 'دخن ذيل الثعلب (كانغني)', tagline: 'حبوب سريعة الطهي وغنية بالبروتين' },
    fr: { slug: 'foxtail-millet', name: 'Millet des oiseaux', tagline: 'La céréale riche en protéines à cuisson rapide' },
    de: { slug: 'foxtail-millet', name: 'Kolbenhirse (Kangni)', tagline: 'Das schnell kochende, proteinreiche Korn' },
  },
  'little-millet': {
    en: { slug: 'little-millet', name: 'Little Millet (Samai)', tagline: 'The mild, easy rice alternative' },
    te: { slug: 'little-millet', name: 'సామలు (Samai)', tagline: 'సులభమైన బియ్యం ప్రత్యామ్నాయం' },
    ar: { slug: 'little-millet', name: 'الدخن الصغير (ساماي)', tagline: 'بديل الأرز السهل واللطيف' },
    fr: { slug: 'little-millet', name: 'Petit millet', tagline: 'L\'alternative douce et facile au riz' },
    de: { slug: 'little-millet', name: 'Kleine Hirse (Samai)', tagline: 'Die milde, einfache Reisalternative' },
  },
  'kodo-millet': {
    en: { slug: 'kodo-millet', name: 'Kodo Millet (Kodon)', tagline: 'The high-fiber, low-GI grain' },
    te: { slug: 'kodo-millet', name: 'అరికెలు (Kodon)', tagline: 'అధిక ఫైబర్, తక్కువ GI ధాన్యం' },
    ar: { slug: 'kodo-millet', name: 'دخن كودو (كودون)', tagline: 'حبوب عالية الألياف ومنخفضة المؤشر الجلايسيمي' },
    fr: { slug: 'kodo-millet', name: 'Millet kodo', tagline: 'La céréale riche en fibres à faible indice glycémique' },
    de: { slug: 'kodo-millet', name: 'Kodohirse (Kodon)', tagline: 'Das ballaststoffreiche Korn mit niedrigem GI' },
  },
  'barnyard-millet': {
    en: { slug: 'barnyard-millet', name: 'Barnyard Millet (Sanwa)', tagline: 'The low-calorie fasting grain' },
    te: { slug: 'barnyard-millet', name: 'ఊదలు (Sanwa)', tagline: 'తక్కువ కేలరీల ఉపవాస ధాన్యం' },
    ar: { slug: 'barnyard-millet', name: 'دخن الحظيرة (سانوا)', tagline: 'حبوب الصيام منخفضة السعرات' },
    fr: { slug: 'barnyard-millet', name: 'Millet japonais', tagline: 'La céréale légère et pauvre en calories' },
    de: { slug: 'barnyard-millet', name: 'Japanische Hirse (Sanwa)', tagline: 'Das kalorienarme Fastenkorn' },
  },
  'proso-millet': {
    en: { slug: 'proso-millet', name: 'Proso Millet (Chena)', tagline: 'The protein-packed quick grower' },
    te: { slug: 'proso-millet', name: 'వరిగెలు (Chena)', tagline: 'ప్రోటీన్ అధికంగా ఉన్న వేగంగా పెరిగే ధాన్యం' },
    ar: { slug: 'proso-millet', name: 'الدخن العادي (تشينا)', tagline: 'حبوب سريعة النمو وغنية بالبروتين' },
    fr: { slug: 'proso-millet', name: 'Millet commun', tagline: 'La céréale riche en protéines à croissance rapide' },
    de: { slug: 'proso-millet', name: 'Rispenhirse (Chena)', tagline: 'Der proteinreiche Schnellwachser' },
  },
  'browntop-millet': {
    en: { slug: 'browntop-millet', name: 'Browntop Millet (Korle)', tagline: 'The fiber king of millets' },
    te: { slug: 'browntop-millet', name: 'అండుకొర్రలు (Korle)', tagline: 'చిరుధాన్యాలలో ఫైబర్ రాజు' },
    ar: { slug: 'browntop-millet', name: 'دخن القمة البنية (كورلي)', tagline: 'ملك الألياف بين أنواع الدخن' },
    fr: { slug: 'browntop-millet', name: 'Millet brun', tagline: 'Le roi des fibres parmi les millets' },
    de: { slug: 'browntop-millet', name: 'Brauntop-Hirse (Korle)', tagline: 'Der Ballaststoff-König unter den Hirsen' },
  },
};

function getQuestions(t: ReturnType<typeof getTranslations>): QuizQuestion[] {
  return [
    {
      question: t.quiz.q1,
      options: [
        { label: t.quiz.q1o1, millets: ['finger-millet'] },
        { label: t.quiz.q1o2, millets: ['pearl-millet', 'foxtail-millet'] },
        { label: t.quiz.q1o3, millets: ['barnyard-millet', 'foxtail-millet'] },
        { label: t.quiz.q1o4, millets: ['browntop-millet', 'barnyard-millet'] },
        { label: t.quiz.q1o5, millets: ['little-millet', 'kodo-millet', 'sorghum'] },
      ],
    },
    {
      question: t.quiz.q2,
      options: [
        { label: t.quiz.q2o1, millets: ['little-millet', 'foxtail-millet', 'barnyard-millet'] },
        { label: t.quiz.q2o2, millets: ['finger-millet'] },
        { label: t.quiz.q2o3, millets: ['pearl-millet', 'sorghum'] },
        { label: t.quiz.q2o4, millets: ['kodo-millet', 'proso-millet', 'browntop-millet'] },
      ],
    },
    {
      question: t.quiz.q3,
      options: [
        { label: t.quiz.q3o1, millets: ['little-millet', 'foxtail-millet'] },
        { label: t.quiz.q3o2, millets: ['barnyard-millet', 'kodo-millet', 'proso-millet', 'sorghum'] },
        { label: t.quiz.q3o3, millets: ['pearl-millet', 'finger-millet', 'browntop-millet'] },
      ],
    },
    {
      question: t.quiz.q4,
      options: [
        { label: t.quiz.q4o1, millets: ['finger-millet', 'pearl-millet'] },
        { label: t.quiz.q4o2, millets: ['foxtail-millet', 'little-millet', 'sorghum'] },
        { label: t.quiz.q4o3, millets: ['finger-millet', 'sorghum'] },
        { label: t.quiz.q4o4, millets: ['finger-millet', 'pearl-millet'] },
      ],
    },
  ];
}

// ---- Component ----

export default function MilletQuiz({ locale = 'en' }: { locale?: Locale }) {
  const t = getTranslations(locale);
  const questions = useMemo(() => getQuestions(t), [t]);

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = useCallback(
    (optionIndex: number) => {
      const newAnswers = [...answers, optionIndex];
      setAnswers(newAnswers);

      if (currentStep < questions.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setShowResults(true);
      }
    },
    [answers, currentStep, questions.length],
  );

  const recommendations = useMemo(() => {
    if (!showResults) return [];

    // Tally up scores for each millet
    const scores: Record<string, number> = {};
    answers.forEach((optionIndex, questionIndex) => {
      const millets = questions[questionIndex].options[optionIndex].millets;
      millets.forEach((slug) => {
        scores[slug] = (scores[slug] || 0) + 1;
      });
    });

    // Sort by score descending and take top 3
    return Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([slug, score]) => ({ ...milletInfo[slug][locale], score }))
      .filter(Boolean);
  }, [showResults, answers, questions, locale]);

  const resetQuiz = useCallback(() => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResults(false);
  }, []);

  const slideVariants = {
    enter: { x: 80, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -80, opacity: 0 },
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress indicator */}
      {!showResults && (
        <div className="flex items-center justify-center gap-2 mb-8">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index < currentStep
                  ? 'w-8 bg-forest-500'
                  : index === currentStep
                    ? 'w-10 bg-forest-600 dark:bg-forest-400'
                    : 'w-8 bg-earth-200 dark:bg-earth-700'
              }`}
            />
          ))}
        </div>
      )}

      <div className="relative overflow-hidden min-h-[340px]">
        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key={`question-${currentStep}`}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* Step label */}
              <p className="text-sm font-medium text-forest-600 dark:text-forest-300 mb-2 text-center">
                {currentStep + 1} / {questions.length}
              </p>

              {/* Question */}
              <h3 className="font-heading text-xl md:text-2xl font-bold text-earth-800 dark:text-earth-100 mb-6 text-center">
                {questions[currentStep].question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="w-full text-left px-5 py-4 rounded-xl border border-earth-200 dark:border-earth-700 bg-white dark:bg-earth-800 text-earth-700 dark:text-earth-200 hover:border-forest-400 hover:bg-forest-50 dark:hover:border-forest-500 dark:hover:bg-forest-900/20 hover:shadow-sm transition-all group"
                  >
                    <span className="flex items-center justify-between">
                      <span className="font-medium">{option.label}</span>
                      <ChevronRight className="w-4 h-4 text-earth-300 dark:text-earth-600 group-hover:text-forest-500 dark:group-hover:text-forest-400 transition-colors" />
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* Results header */}
              <div className="text-center mb-6">
                <Sparkles className="w-8 h-8 text-forest-500 mx-auto mb-2" />
                <h3 className="font-heading text-xl md:text-2xl font-bold text-earth-800 dark:text-earth-100 mb-1">
                  {t.quiz.yourResult}
                </h3>
                <p className="text-sm text-earth-500 dark:text-earth-400">
                  {t.quiz.subtitle}
                </p>
              </div>

              {/* Recommendation cards */}
              <div className="space-y-3 mb-8">
                {recommendations.map((millet, index) => (
                  <motion.div
                    key={millet.slug}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.35 }}
                  >
                    <Link
                      href={localePath(locale, `/millets/${millet.slug}`)}
                      className="flex items-center gap-4 px-5 py-4 rounded-xl border border-earth-200 dark:border-earth-700 bg-white dark:bg-earth-800 hover:border-forest-400 hover:shadow-md dark:hover:border-forest-500 transition-all group"
                    >
                      {/* Rank badge */}
                      <span
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          index === 0
                            ? 'bg-forest-100 text-forest-700 dark:bg-forest-900/50 dark:text-forest-300'
                            : 'bg-earth-100 text-earth-600 dark:bg-earth-700 dark:text-earth-300'
                        }`}
                      >
                        {index + 1}
                      </span>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-heading font-semibold text-earth-800 dark:text-earth-100 group-hover:text-forest-700 dark:group-hover:text-forest-400 transition-colors">
                          {millet.name}
                        </h4>
                        <p className="text-sm text-earth-500 dark:text-earth-400 truncate">
                          {millet.tagline}
                        </p>
                      </div>

                      <ChevronRight className="w-5 h-5 text-earth-300 dark:text-earth-600 group-hover:text-forest-500 dark:group-hover:text-forest-400 transition-colors flex-shrink-0" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Retake button */}
              <div className="text-center">
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-earth-200 dark:border-earth-700 text-earth-600 dark:text-earth-300 hover:bg-earth-100 dark:hover:bg-earth-800 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  {t.quiz.tryAgain}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
