'use client'

import { CategoryLegend } from '@/app/components/widgets/CategoryLegend'
import { WeekChartBars } from '@/app/components/ui/WeekChartBars'
import { formatCurrency } from '@/utils/format'
import {
  aiPrediction,
  monthlyBreakdown,
  monthlyTotal,
  weeklyTotal,
} from '@/utils/data'
import { cn } from '@/utils/classNames'
import styles from '../components/ui/GraphsPage.module.css'
import Card from '../components/atoms/Card'
import Button from '../components/atoms/Button'

const weeklyRanges = [
  { label: '27 April - 3 May', amount: weeklyTotal },
  { label: '4 May - 10 May', amount: 280_000 },
  { label: '11 May - 17 May', amount: 310_000 },
]

export default function GraphsPage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Graphs</h1>
          <div className={styles.monthControls}>
            <button
              type="button"
              className={styles.calendarButton}
              aria-label="Open calendar"
            >
              <img
                src="/Button-Calendar.png"
                alt="Calendar"
                className={styles.calendarIcon}
              />
            </button>
            <div className={styles.monthPicker}>
              <button type="button" className={styles.monthNavButton} aria-label="Previous month">
                <img
                  src="/ArrowLeft.png"
                  alt="Previous month"
                  className={cn(styles.monthNavIcon, styles.monthNavIconPrev)}
                />
              </button>
              <span>May 2026</span>
              <button type="button" className={styles.monthNavButton} aria-label="Next month">
                <img
                  src="/ArrowRight.png"
                  alt="Next month"
                  className={styles.monthNavIcon}
                />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.sections}>
          <div className={styles.topRow}>
            <div className={styles.monthlyCard}>
              <h2 className={styles.monthlyTitle}>Monthly</h2>
              <div className={styles.monthlyBody}>
                <div className={styles.monthlyTotalPanel}>
                  <p className={styles.monthlyTotalText}>
                    <span className={styles.monthlyTotalLead}>You spent a total of</span>
                    <span className={styles.monthlyTotalAmount}>
                      {formatCurrency(monthlyTotal)}
                    </span>
                  </p>
                </div>
                <CategoryLegend items={monthlyBreakdown} />
              </div>
            </div>

            <Card variant="graphsAi">
              <div>
                <h2 className={styles.aiTitle}>AI Prediction</h2>
                <p className={styles.aiDescription}>
                  Next month, you will spend a total of
                </p>
              </div>
              <p className={styles.aiAmount}>{formatCurrency(aiPrediction)}</p>
              <Button variant="white" fullWidth shape="pill">
                Upload Transaction
              </Button>
            </Card>
          </div>

          <div className={styles.weeklyCard}>
            <h2 className={styles.weeklyTitle}>Weekly</h2>
            <div className={styles.weeklyGrid}>
              {weeklyRanges.map((week) => (
                <div key={week.label} className={styles.weekBlock}>
                  <p className={styles.weekLabel}>{week.label}</p>
                  <p className={styles.weekAmount}>{formatCurrency(week.amount)}</p>
                  <div className={styles.weekChart}>
                    <WeekChartBars />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}