import type { Purchase } from '../../utils/data'
import { formatCurrency } from '../../lib/format'
import { CategoryIcon } from './CategoryIcon'
import { Divider } from './Divider'
import styles from './PurchaseRow.module.css'

interface PurchaseRowProps {
  purchase: Purchase
  showDivider?: boolean
}

export function PurchaseRow({ purchase, showDivider = true }: PurchaseRowProps) {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.leading}>
          <CategoryIcon category={purchase.category} />
          <div className={styles.details}>
            <p className={styles.name}>{purchase.name}</p>
            <p className={styles.date}>{purchase.date}</p>
          </div>
        </div>
        <p className={styles.amount}>{formatCurrency(purchase.amount)}</p>
      </div>
      {showDivider && <Divider indent />}
    </>
  )
}