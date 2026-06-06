
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  border?: boolean;
  shadow?: boolean;
  bgColor?:
    | 'liquid-glass'
    | 'dark-grey'
    | 'semiTransparent'
    | 'secondary'
    | 'primary';
  className?: string;
  onClick?: () => void;
  variant?: ''
  | 'default'
  | 'thisWeek'
  | 'aiPrediction'
  | 'addPurchase'
  | 'latestPurchase'
  | 'graphsAi'
}

const Card = ({
  children,
  bgColor = 'liquid-glass',
  border = false,
  shadow = false,
  className = '',
  onClick,
  variant = ''
}: CardProps) => {
  const styles: string[] = ['p-6', 'rounded-2xl'];

  if (bgColor === 'liquid-glass') styles.push(
    'bg-black/15',
    'backdrop-blur-xl',
    'backdrop-saturate-150',
    'border border-white/20',
    'shadow-lg'
  );;
  if (bgColor === 'secondary') styles.push('bg-secondary');
  if (bgColor === 'dark-grey') styles.push('bg-[#2B2B2F]');
  if (bgColor === 'semiTransparent') styles.push('bg-white/20');
  if (bgColor === 'primary') styles.push('bg-primary');
  if (border) styles.push('border-3', 'border-[var(--color-primary)]');

  if (shadow) styles.push('shadow-md');

  if (className) styles.push(className);

  if (variant) {
    
  }
  return (
    <div onClick={onClick} className={styles.join(' ')}>
      {children}
    </div>
  );
};

export default Card;
