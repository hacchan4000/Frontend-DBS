import React from 'react'
import { formatCurrency } from '../../utils/format'
import { monthlyBreakdown, monthlyTotal } from '../../utils/data'
import { SectionTitle } from '@/app/components/ui/SectionTitle'
import { CategoryLegend } from '@/app/components/widgets/CategoryLegend'
import { weeklyTotal } from '../../utils/data'
import { WeekChartBars } from '@/app/components/ui/WeekChartBars'
import Card from '../components/atoms/Card'


function Monthly() {
  return (
    <Card>
      <SectionTitle title="This Month" href="/graphs" />
      <div className='flex flex-1 flex-col gap-4 sm:flex-row sm:items-center'>
        <div className='flex items-end w-[100%] max-w-[287px] h-[206px] p-5 rounded-xl overflow-hidden bg-gradient-to-br from-[#323643] via-[rgba(44,47,62,0.7)] to-[#323643]'>
          <p className='m-0 font-semibold bg-linear-to-r from-white via-[#d7d7d7] to-white bg-transparent bg-clip-text'>
            <span className='block text-2xl'>You spent a total of</span>
            <span className='block text-4xl'>{formatCurrency(monthlyTotal)}</span>
          </p>
        </div>
        <div className='flex-1 min-w-0'>
          <CategoryLegend items={monthlyBreakdown} />
        </div>
      </div>
    </Card>
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