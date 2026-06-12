import { purchases2, subscriptions } from '../../utils/data'
import { cn } from '../../utils/classNames'
import styles from './LatestPurchaseCard.module.css'
import Card from '../components/atoms/Card'
import { SectionTitle } from '@/app/components/ui/SectionTitle'
import { PurchaseRow } from '@/app/components/ui/PurchaseRow'
import { SubscriptionRow } from '@/app/components/ui/SubscriptionRow'
import { usePurchase } from '@/hooks/usePurchase'

export function Purchases() { // Latest purchases
  const { purchases } = usePurchase();
  console.log(purchases)
  const latestPurchases = purchases2.slice(0, 4)
  const reminderSubs = subscriptions.slice(0, 4)

  const listBlock = 'flex flex-col gap-2 mt-3 pt-2 pr-4 pb-2 pl-2 rounded-[8px] bg-[#323643]'

  return (
    <Card variant="latestPurchase">
      <SectionTitle title="Latest Purchase" href="/purchases" />
      <div className={listBlock}>
        {latestPurchases.map((purchase, index) => (
          <PurchaseRow
            key={purchase.id}
            purchase={purchase}
            showDivider={index < latestPurchases.length - 1}
          />
        ))}
      </div>

      <div className='mt-4'>
        <SectionTitle title="Subscription Reminder" href="/subscriptions" />
      </div>
      <div className={cn(listBlock, 'pl-4 pr-4')}>
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