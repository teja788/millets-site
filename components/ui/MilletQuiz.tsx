'use client';

import { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, RotateCcw, Sparkles } from 'lucide-react';

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

const milletInfo: Record<string, MilletInfo> = {
  'finger-millet': { slug: 'finger-millet', name: 'Finger Millet (Ragi)', tagline: 'The calcium champion among cereals' },
  'pearl-millet': { slug: 'pearl-millet', name: 'Pearl Millet (Bajra)', tagline: 'The iron-rich powerhouse grain' },
  'sorghum': { slug: 'sorghum', name: 'Sorghum (Jowar)', tagline: 'The versatile everyday millet' },
  'foxtail-millet': { slug: 'foxtail-millet', name: 'Foxtail Millet (Kangni)', tagline: 'The quick-cooking, protein-rich grain' },
  'little-millet': { slug: 'little-millet', name: 'Little Millet (Samai)', tagline: 'The mild, easy rice alternative' },
  'kodo-millet': { slug: 'kodo-millet', name: 'Kodo Millet (Kodon)', tagline: 'The high-fiber, low-GI grain' },
  'barnyard-millet': { slug: 'barnyard-millet', name: 'Barnyard Millet (Sanwa)', tagline: 'The low-calorie fasting grain' },
  'proso-millet': { slug: 'proso-millet', name: 'Proso Millet (Chena)', tagline: 'The protein-packed quick grower' },
  'browntop-millet': { slug: 'browntop-millet', name: 'Browntop Millet (Korle)', tagline: 'The fiber king of millets' },
};

const questions: QuizQuestion[] = [
  {
    question: "What's your primary health goal?",
    options: [
      { label: 'Stronger bones & calcium', millets: ['finger-millet'] },
      { label: 'Better blood sugar control', millets: ['barnyard-millet', 'foxtail-millet'] },
      { label: 'More protein & energy', millets: ['foxtail-millet', 'proso-millet', 'pearl-millet'] },
      { label: 'Weight management & fiber', millets: ['browntop-millet', 'barnyard-millet'] },
      { label: 'General wellness', millets: ['little-millet', 'kodo-millet', 'sorghum'] },
    ],
  },
  {
    question: 'What texture do you prefer?',
    options: [
      { label: 'Smooth, like porridge', millets: ['finger-millet'] },
      { label: 'Fluffy, like rice', millets: ['little-millet', 'foxtail-millet', 'barnyard-millet'] },
      { label: 'Dense, like flatbread dough', millets: ['pearl-millet', 'sorghum'] },
      { label: 'Light & dry', millets: ['kodo-millet', 'proso-millet', 'browntop-millet'] },
    ],
  },
  {
    question: 'How much time do you have to cook?',
    options: [
      { label: '15 minutes or less', millets: ['little-millet', 'foxtail-millet'] },
      { label: '20-30 minutes', millets: ['barnyard-millet', 'kodo-millet', 'proso-millet', 'sorghum'] },
      { label: "I don't mind longer prep", millets: ['pearl-millet', 'finger-millet', 'browntop-millet'] },
    ],
  },
  {
    question: 'What meal are you planning?',
    options: [
      { label: 'Breakfast', millets: ['finger-millet', 'pearl-millet'] },
      { label: 'Lunch / Dinner main', millets: ['foxtail-millet', 'little-millet', 'sorghum'] },
      { label: 'Snack or dessert', millets: ['finger-millet', 'sorghum'] },
      { label: 'A drink', millets: ['finger-millet', 'pearl-millet'] },
    ],
  },
];

// ---- Component ----

export default function MilletQuiz() {
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
    [answers, currentStep],
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
      .map(([slug, score]) => ({ ...milletInfo[slug], score }))
      .filter(Boolean);
  }, [showResults, answers]);

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
              <p className="text-sm font-medium text-forest-600 dark:text-forest-400 mb-2 text-center">
                Step {currentStep + 1} of {questions.length}
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
                  Your Millet Matches
                </h3>
                <p className="text-sm text-earth-500 dark:text-earth-400">
                  Based on your preferences, here are our top recommendations.
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
                      href={`/millets/${millet.slug}`}
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
                  Retake Quiz
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
