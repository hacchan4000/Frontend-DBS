import { SubscriptionItem } from '@/model/Subscription'
import { formatCurrency } from '../../../utils/format'
import { Divider } from './Divider'
import styles from './SubscriptionRow.module.css'

interface SubscriptionRowProps {
  subscription: SubscriptionItem
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
          <p className={styles.name}>{subscription.title}</p>
          <p className={styles.dueDate}>{subscription.subscription_end_date}</p>
        </div>
        <p className={styles.amount}>{formatCurrency(subscription.price)}</p>
      </div>
      {showDivider && <Divider />}
    </>
  )
}