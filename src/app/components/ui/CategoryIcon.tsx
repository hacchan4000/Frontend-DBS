import type { Category } from '../../../utils/data'
import { categoryConfig } from '../../../utils/categories'
import styles from './CategoryIcon.module.css'

interface CategoryIconProps {
  category: Category
  className?: string
}

export function CategoryIcon({ category, className }: CategoryIconProps) {
  const { iconSrc, label } = categoryConfig[category]

  return (
    <img
      src={iconSrc}
      alt=""
      className={className ?? styles.icon}
      title={label}
    />
  )
}