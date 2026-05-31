import type { ReactNode } from 'react'
import { cn } from '../../lib/classNames'
import styles from './Card.module.css'

type CardVariant =
  | 'default'
  | 'thisWeek'
  | 'aiPrediction'
  | 'addPurchase'
  | 'latestPurchase'
  | 'graphsAi'

interface CardProps {
  children: ReactNode
  blur?: boolean
  variant?: CardVariant
}

const variantClass: Record<CardVariant, string | undefined> = {
  default: undefined,
  thisWeek: styles.cardThisWeek,
  aiPrediction: styles.cardAiPrediction,
  addPurchase: styles.cardAddPurchase,
  latestPurchase: styles.cardLatestPurchase,
  graphsAi: styles.cardGraphsAi,
}

export function Card({ children, blur = true, variant = 'default' }: CardProps) {
  return (
    <div
      className={cn(
        styles.card,
        blur && styles.cardBlurred,
        variantClass[variant],
      )}
    >
      {children}
    </div>
  )
}