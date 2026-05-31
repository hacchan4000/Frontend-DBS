'use client';
import { motion } from 'framer-motion';

interface ButtonProps {
  label?: React.ReactNode; // can be text or icon
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'blue';
  variant?: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
  type?: 'button' | 'submit';
  className?: string;
}

const Button = ({
  label,
  onClick,
  prefix,
  suffix,
  color = 'primary',
  variant = 'contained',
  disabled = false,
  type = 'button',
  className,
}: ButtonProps) => {
  const containedPrimary = 'bg-primary enabled:hover:bg-primary/80 text-white';
  const containedSecondary =
    'bg-secondary enabled:hover:bg-board-gray/80 text-white';
  const containedBlue = 'bg-blue-400 enabled:hover:bg-blue-400/80 text-white';

  const outlined = 'border bg-transparent';
  const outlinedPrimary = `text-primary border-primary enabled:hover:bg-primary enabled:hover:text-white`;
  const outlinedSecondary = `text-secondary border-secondary enabled:hover:bg-secondary enabled:hover:text-white`;

  const textPrimary = 'text-primary enabled:hover:text-primary/80';
  const textSecondary = 'text-secondary enabled:hover:text-secondary/80';

  const styles: string[] = [];

  if (variant === 'contained') {
    if (color === 'primary') styles.push(containedPrimary);
    if (color === 'secondary') styles.push(containedSecondary);
    if (color === 'blue') styles.push(containedBlue);
  }

  if (variant === 'outlined') {
    styles.push(outlined);
    if (color === 'primary') styles.push(outlinedPrimary);
    if (color === 'secondary') styles.push(outlinedSecondary);
  }

  if (variant === 'text') {
    if (color === 'primary') styles.push(textPrimary);
    if (color === 'secondary') styles.push(textSecondary);
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ duration: 0.15, ease: 'easeInOut' }}
      className={[
        'flex items-center justify-center rounded-full px-4 py-2',
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        styles.join(' '),
        className,
      ].join(' ')}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {prefix && <span className="mr-2">{prefix}</span>}
      {label && <span>{label}</span>} {/* Can be icon or text */}
      {suffix && <span className="ml-2">{suffix}</span>}
    </motion.button>
  );
};

export default Button;
