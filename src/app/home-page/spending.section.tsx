import React from 'react'
import { formatCurrency } from '../../utils/format'
import { monthlyBreakdown, monthlyTotal } from '../../utils/data'
import { SectionTitle } from '@/app/components/ui/SectionTitle'
import { CategoryLegend } from '@/app/components/widgets/CategoryLegend'
import { weeklyTotal } from '../../utils/data'
import { WeekChartBars } from '@/app/components/ui/WeekChartBars'
import styles from './ThisMonthCard.module.css'
import Card from '../components/atoms/Card'


function Monthly() {
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

const Weekly = () => {
  return (
      <Card variant="thisWeek">
        <div>
          <SectionTitle title="This Week" href="/graphs" />
          <div className='mt-2 text-3xl font-semibold text-[#bababa]'>
            <p>You spent a total of</p>
            <p className='text-white'>{formatCurrency(weeklyTotal)}</p>
          </div>
        </div>
        <WeekChartBars />
      </Card>
    )
}

const Spending = () => {
  return (
    <div className='flex w-[100%] flex-col items-center justify-center gap-10 xl:flex-row'>
      <Weekly />
      <Monthly />
    </div>
  )
}

export default Spending