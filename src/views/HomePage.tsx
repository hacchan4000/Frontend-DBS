import { AddPurchaseCard } from '../components/widgets/AddPurchaseCard'
import { AiPredictionCard } from '../components/widgets/AiPredictionCard'
import { LatestPurchaseCard } from '../components/widgets/LatestPurchaseCard'
import { ThisMonthCard } from '../components/widgets/ThisMonthCard'
import { ThisWeekCard } from '../components/widgets/ThisWeekCard'
import { USER_NAME } from '../utils/data'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageBackground} aria-hidden />
      <div className={styles.content}>
        <div className={styles.greetingBlock}>
          <h1 className={styles.greetingTitle}>hello, {USER_NAME}</h1>
          <p className={styles.greetingSubtitle}>
            Your expenses are according to budget so far.
          </p>
        </div>

        <div className={styles.widgetContainer}>
          <div className={styles.widgetStack}>
            <div className={styles.widgetRow}>
              <ThisWeekCard />
              <ThisMonthCard />
            </div>
            <div className={styles.widgetRow}>
              <LatestPurchaseCard />
              <div className={styles.widgetColumn}>
                <AiPredictionCard />
                <AddPurchaseCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
