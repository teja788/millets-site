'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, Droplets, Timer, CookingPot } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardBody } from '@/components/ui/Card';
import { millets } from '@/data/millets';

function parseMinutes(timeStr: string): number {
  const match = timeStr.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 15;
}

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function CookingTimer() {
  const [selectedMillet, setSelectedMillet] = useState('');
  const [timerMode, setTimerMode] = useState<'cooking' | 'soaking'>('cooking');
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const millet = millets.find((m) => m.slug === selectedMillet);

  const startTimer = useCallback((minutes: number) => {
    const secs = minutes * 60;
    setTotalSeconds(secs);
    setRemainingSeconds(secs);
    setIsRunning(false);
    setIsComplete(false);
  }, []);

  // Set timer when millet or mode changes
  useEffect(() => {
    if (!millet) return;
    if (timerMode === 'cooking') {
      startTimer(parseMinutes(millet.cooking.cookingTime));
    } else {
      const soakStr = millet.cooking.soakingTime;
      if (soakStr.toLowerCase().includes('no') || soakStr.toLowerCase().includes('optional')) {
        startTimer(0);
      } else {
        const hours = soakStr.match(/(\d+)/);
        startTimer(hours ? parseInt(hours[1], 10) * 60 : 30);
      }
    }
  }, [millet, timerMode, startTimer]);

  // Countdown logic
  useEffect(() => {
    if (isRunning && remainingSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsComplete(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, remainingSeconds]);

  const toggleRunning = () => {
    if (remainingSeconds <= 0) return;
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setRemainingSeconds(totalSeconds);
    setIsComplete(false);
  };

  const progress =
    totalSeconds > 0 ? ((totalSeconds - remainingSeconds) / totalSeconds) * 100 : 0;

  const circumference = 2 * Math.PI * 90;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="space-y-8">
      {/* Millet selection */}
      <div className="max-w-md">
        <label
          htmlFor="millet-select"
          className="block text-sm font-medium text-earth-700 dark:text-earth-300 mb-2"
        >
          Select a millet
        </label>
        <select
          id="millet-select"
          value={selectedMillet}
          onChange={(e) => setSelectedMillet(e.target.value)}
          className="w-full px-4 py-3 bg-white dark:bg-earth-800 border border-earth-200 dark:border-earth-700 rounded-lg text-earth-800 dark:text-earth-100 focus:outline-none focus:ring-2 focus:ring-earth-500 transition-colors"
        >
          <option value="">Choose a millet...</option>
          {millets.map((m) => (
            <option key={m.slug} value={m.slug}>
              {m.name}
            </option>
          ))}
        </select>
      </div>

      {millet ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cooking Info */}
          <Card variant="outlined">
            <CardBody>
              <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-4">
                {millet.name} — Cooking Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Droplets className="w-5 h-5 text-warm-gray dark:text-earth-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-warm-gray dark:text-earth-400 uppercase tracking-wider">
                      Water Ratio
                    </p>
                    <p className="text-earth-800 dark:text-earth-100 font-medium">
                      {millet.cooking.waterRatio}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Timer className="w-5 h-5 text-warm-gray dark:text-earth-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-warm-gray dark:text-earth-400 uppercase tracking-wider">
                      Soaking Time
                    </p>
                    <p className="text-earth-800 dark:text-earth-100 font-medium">
                      {millet.cooking.soakingTime}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CookingPot className="w-5 h-5 text-warm-gray dark:text-earth-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-warm-gray dark:text-earth-400 uppercase tracking-wider">
                      Cooking Time
                    </p>
                    <p className="text-earth-800 dark:text-earth-100 font-medium">
                      {millet.cooking.cookingTime}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mode toggle */}
              <div className="flex gap-2 mt-6">
                <Button
                  variant={timerMode === 'cooking' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setTimerMode('cooking')}
                >
                  Cooking
                </Button>
                <Button
                  variant={timerMode === 'soaking' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setTimerMode('soaking')}
                >
                  Soaking
                </Button>
              </div>
            </CardBody>
          </Card>

          {/* Timer display */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-52 h-52 mb-6">
              {/* Background circle */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  className="text-earth-200 dark:text-earth-700"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className={`transition-all duration-1000 ${
                    isComplete ? 'text-forest-400' : 'text-warm-gray dark:text-earth-400'
                  }`}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span
                  className={`font-heading text-4xl font-bold ${
                    isComplete ? 'text-forest-400' : 'text-earth-800 dark:text-earth-100'
                  }`}
                >
                  {formatTime(remainingSeconds)}
                </span>
                <span className="text-xs text-warm-gray dark:text-earth-400 uppercase tracking-wider mt-1">
                  {timerMode === 'cooking' ? 'Cooking' : 'Soaking'}
                </span>
              </div>
            </div>

            {isComplete && (
              <p className="text-forest-400 font-medium mb-4">
                Done! Your {millet.name} is ready.
              </p>
            )}

            {/* Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleRunning}
                disabled={totalSeconds === 0}
                className="w-14 h-14 rounded-full bg-earth-200 dark:bg-earth-700 hover:bg-earth-300 dark:hover:bg-earth-600 text-earth-800 dark:text-earth-100 flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label={isRunning ? 'Pause' : 'Play'}
              >
                {isRunning ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6 ml-0.5" />
                )}
              </button>
              <button
                onClick={resetTimer}
                className="w-10 h-10 rounded-full bg-earth-100 dark:bg-earth-800 hover:bg-earth-200 dark:hover:bg-earth-700 text-earth-700 dark:text-earth-300 flex items-center justify-center transition-colors"
                aria-label="Reset"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <Timer className="w-12 h-12 text-earth-600 mx-auto mb-4" />
          <p className="text-warm-gray dark:text-earth-400">
            Select a millet above to see cooking info and start the timer.
          </p>
        </div>
      )}
    </div>
  );
}
