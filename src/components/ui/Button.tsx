import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/classNames'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'white'
  fullWidth?: boolean
  shape?: 'default' | 'pill'
}

export function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  shape = 'default',
  className,
  ...props
}: ButtonProps) {
  const variantClass = {
    primary: styles.buttonPrimary,
    ghost: styles.buttonGhost,
    white: styles.buttonWhite,
  }[variant]

  return (
    <button
      type="button"
      className={cn(
        styles.button,
        variantClass,
        fullWidth && styles.buttonFullWidth,
        shape === 'pill' && styles.buttonPill,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}