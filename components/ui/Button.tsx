import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

export const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-earth-500 hover:bg-earth-600 text-white',
  secondary:
    'border-2 border-earth-500 text-earth-500 dark:text-earth-200 dark:border-earth-400 hover:bg-earth-500 hover:text-white',
  ghost: 'hover:bg-earth-100 dark:hover:bg-earth-800 text-earth-700 dark:text-earth-200',
  link: 'text-earth-500 dark:text-earth-300 underline hover:text-earth-600 dark:hover:text-forest-300',
};

export const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5',
  lg: 'px-7 py-3.5 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        rounded-lg transition
        disabled:opacity-50 disabled:cursor-not-allowed
        font-medium
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
