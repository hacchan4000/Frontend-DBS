import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'
import { WeekChartBars } from './WeekChartBars'
import { formatCurrency } from '../../lib/format'
import { weeklyTotal } from '../../utils/data'
import styles from './ThisWeekCard.module.css'

export function ThisWeekCard() {
  return (
    <Card variant="thisWeek">
      <div>
        <SectionTitle title="This Week" to="/graphs" />
        <div className={styles.summary}>
          <p>You spent a total of</p>
          <p className={styles.summaryAmount}>{formatCurrency(weeklyTotal)}</p>
        </div>
      </div>
      <WeekChartBars />
    </Card>
  )
}