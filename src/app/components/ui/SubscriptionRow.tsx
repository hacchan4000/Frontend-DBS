import type { Subscription } from '../../../utils/data'
import { formatCurrency } from '../../../utils/format'
import { Divider } from './Divider'
import styles from './SubscriptionRow.module.css'

interface SubscriptionRowProps {
  subscription: Subscription
  showDivider?: boolean
}

export function SubscriptionRow({
  subscription,
  showDivider = true,
}: SubscriptionRowProps) {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.details}>
          <p className={styles.name}>{subscription.name}</p>
          <p className={styles.dueDate}>{subscription.dueDate}</p>
        </div>
        <p className={styles.amount}>{formatCurrency(subscription.amount)}</p>
      </div>
      {showDivider && <Divider />}
    </>
  )
}