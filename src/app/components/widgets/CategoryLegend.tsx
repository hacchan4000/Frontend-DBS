import type { Category, CategoryBreakdown } from '../../../utils/data'
import { formatCurrency } from '../../../utils/format'
import { cn } from '../../../utils/classNames'
import styles from './CategoryLegend.module.css'

const dotClassByCategory: Record<Category, string> = {
  'food-drinks': styles.dotFoodDrinks,
  shopping: styles.dotShopping,
  entertainment: styles.dotEntertainment,
  subscription: styles.dotSubscription,
}

interface CategoryLegendProps {
  items: CategoryBreakdown[]
}

export function CategoryLegend({ items }: CategoryLegendProps) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.category} className={styles.item}>
          <span className={cn(styles.dot, dotClassByCategory[item.category])} />
          <p className={styles.text}>
            <span className={styles.amount}>{formatCurrency(item.amount)} </span>
            <span className={styles.label}>on {item.label}</span>
          </p>
        </li>
      ))}
    </ul>
  )
}