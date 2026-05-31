import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'
import { PurchaseRow } from '../ui/PurchaseRow'
import { SubscriptionRow } from '../ui/SubscriptionRow'
import { purchases, subscriptions } from '../../utils/data'
import { cn } from '../../lib/classNames'
import styles from './LatestPurchaseCard.module.css'

export function LatestPurchaseCard() {
  const latestPurchases = purchases.slice(0, 4)
  const reminderSubs = subscriptions.slice(0, 4)

  return (
    <Card variant="latestPurchase">
      <SectionTitle title="Latest Purchase" to="/purchases" />
      <div className={styles.listBlock}>
        {latestPurchases.map((purchase, index) => (
          <PurchaseRow
            key={purchase.id}
            purchase={purchase}
            showDivider={index < latestPurchases.length - 1}
          />
        ))}
      </div>

      <div className={styles.sectionSpacer}>
        <SectionTitle title="Subscription Reminder" to="/subscriptions" />
      </div>
      <div className={cn(styles.listBlock, styles.listBlockSubscriptions)}>
        {reminderSubs.map((sub, index) => (
          <SubscriptionRow
            key={sub.id}
            subscription={sub}
            showDivider={index < reminderSubs.length - 1}
          />
        ))}
      </div>
    </Card>
  )
}