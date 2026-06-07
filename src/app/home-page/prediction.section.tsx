'use client'

import { useRouter } from 'next/navigation'
import Card from '../components/atoms/Card'
import Button from '../components/atoms/Button'
import { formatCurrency } from '@/utils/format'
import { aiPrediction } from '@/utils/data'


export function Prediction() {
  const router = useRouter()
  return (
    <Card variant="aiPrediction">
      <div>
        <h2 className='m-0 text-4xl font-semibold'>AI Prediction</h2>
        <p className='mt-2 text-xl text-[#bababa]'>
          Next month, you will spend a total of
        </p>
      </div>
      <p className='m-0 text-2xl font-semibold'>{formatCurrency(aiPrediction)}</p>
      <Button variant="white" fullWidth shape="pill" onClick={()=>{router.push('/predict')}}>
        Upload Transaction
      </Button>
    </Card>
  )
}