import type { ReactNode } from 'react';

interface QuickFactBoxProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  unit?: string;
  className?: string;
}

export default function QuickFactBox({
  icon,
  label,
  value,
  unit,
  className = '',
}: QuickFactBoxProps) {
  return (
    <div
      className={`bg-earth-100 dark:bg-earth-800 rounded-lg p-4 flex items-center gap-4 ${className}`}
    >
      <div className="flex-shrink-0 text-earth-500 dark:text-earth-400">{icon}</div>
      <div>
        <p className="text-sm text-earth-600 dark:text-earth-300">{label}</p>
        <p className="font-heading text-2xl text-earth-800 dark:text-earth-100">
          {value}
          {unit && <span className="text-sm text-earth-500 dark:text-earth-400 ml-1">{unit}</span>}
        </p>
      </div>
    </div>
  );
}
