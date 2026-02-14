import { type ReactNode } from 'react';

type CardVariant = 'default' | 'elevated' | 'outlined';

interface CardProps {
  variant?: CardVariant;
  className?: string;
  children: ReactNode;
}

interface CardSectionProps {
  className?: string;
  children: ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-cream dark:bg-earth-800 rounded-xl card-shadow',
  elevated: 'bg-cream dark:bg-earth-800 rounded-xl shadow-elevated',
  outlined: 'bg-cream dark:bg-earth-800 rounded-xl border border-earth-200 dark:border-earth-700',
};

export function Card({ variant = 'default', className = '', children }: CardProps) {
  return (
    <div className={`overflow-hidden ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ className = '', children }: CardSectionProps) {
  return <div className={`px-6 pt-6 ${className}`}>{children}</div>;
}

export function CardBody({ className = '', children }: CardSectionProps) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
}

export function CardFooter({ className = '', children }: CardSectionProps) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}
