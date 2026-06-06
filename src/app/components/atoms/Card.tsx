import { cn } from '@/utils/classNames';
import React from 'react';

type CardVariant =
  | 'default'
  | 'thisWeek'
  | 'aiPrediction'
  | 'addPurchase'
  | 'latestPurchase'
  | 'graphsAi'

interface CardProps {
  children: React.ReactNode;
  border?: boolean;
  shadow?: boolean;
  blur?: boolean;
  bgColor?:
    | 'liquid-glass'
    | 'dark-grey'
    | 'semiTransparent'
    | 'secondary'
    | 'primary';
  className?: string;
  onClick?: () => void;
  variant?: CardVariant;
}

const variantClass: Record< CardVariant, string | undefined> = {
  default: undefined,
  thisWeek: 'styles.cardThisWeek',
  aiPrediction: 'styles.cardAiPrediction',
  addPurchase: 'styles.cardAddPurchase',
  latestPurchase: 'styles.cardLatestPurchase',
  graphsAi: 'styles.cardGraphsAi',
}

const Card = ({
  children,
  bgColor = 'liquid-glass',
  border = false,
  shadow = false,
  blur = true,
  className,
  onClick,
  variant = 'default',
}: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'p-6 rounded-2xl',
        
        bgColor === 'liquid-glass' &&
          'bg-black/15 backdrop-saturate-150 border border-white/20',

        blur && 'backdrop-blur-xl',

        bgColor === 'secondary' && 'bg-secondary',
        bgColor === 'dark-grey' && 'bg-[#2B2B2F]',
        bgColor === 'semiTransparent' && 'bg-white/20',
        bgColor === 'primary' && 'bg-primary',

        border && 'border-3 border-[var(--color-primary)]',

        shadow && 'shadow-md',

        variantClass[variant],

        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
