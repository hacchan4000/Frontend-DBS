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
  thisWeek: 'flex flex-col justify-between w-[100%] max-w-[300px] h-[300px]',
  aiPrediction: 'flex flex-col justify-between w-[100%] max-w-[300px] h-[319px]',
  addPurchase: 'flex flex-col items-end justify-between w-[100%] max-w-[300px] h-[300px] transition-shadow duration-200 ease-linear hover:shadow-[0_0_0_2px_rgb(0_156_255_/_0.4)]',
  latestPurchase: 'w-[100%] max-w-[660px]',
  graphsAi: 'flex flex-col justify-between w-[100%] max-w-[297px] md:shrink-0',
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
