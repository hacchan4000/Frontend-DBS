import { PurchaseItem } from '@/model/Purchase'
import type { Purchase } from '../../../utils/data'
import { formatCurrency } from '../../../utils/format'
import { CategoryIcon } from './CategoryIcon'
import { Divider } from './Divider'
import styles from './PurchaseRow.module.css'

interface PurchaseRowProps {
  purchase: PurchaseItem
  showDivider?: boolean
}

export function PurchaseRow({ purchase, showDivider = true }: PurchaseRowProps) {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.leading}>
          <CategoryIcon category={purchase.category} />
          <div className={styles.details}>
            <p className={styles.name}>{purchase.title}</p>
            <p className={styles.date}>{purchase.date}</p>
          </div>
        </div>
        <p className={styles.amount}>{formatCurrency(purchase.price)}</p>
      </div>
      {showDivider && <Divider indent />}
    </>
  )
}