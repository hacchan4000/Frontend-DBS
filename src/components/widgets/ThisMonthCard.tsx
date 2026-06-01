import { SectionTitle } from '../ui/SectionTitle'
import { CategoryLegend } from './CategoryLegend'
import { formatCurrency } from '../../lib/format'
import { monthlyBreakdown, monthlyTotal } from '../../utils/data'
import styles from './ThisMonthCard.module.css'

export function ThisMonthCard() {
  return (
    <div className={styles.card}>
      <SectionTitle title="This Month" href="/graphs" />
      <div className={styles.body}>
        <div className={styles.totalPanel}>
          <p className={styles.totalText}>
            <span className={styles.totalLead}>You spent a total of</span>
            <span className={styles.totalAmount}>{formatCurrency(monthlyTotal)}</span>
          </p>
        </div>
        <div className={styles.legendWrap}>
          <CategoryLegend items={monthlyBreakdown} />
        </div>
      </div>
    </div>
  )
}