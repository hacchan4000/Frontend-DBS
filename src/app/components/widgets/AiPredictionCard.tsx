'use client'

import { formatCurrency } from '../../../utils/format'
import { aiPrediction } from '../../../utils/data'
import styles from './AiPredictionCard.module.css'
import { useRouter } from 'next/navigation'
import Card from '../atoms/Card'
import Button from '../atoms/Button'


export function AiPredictionCard() {
  const router = useRouter()
  return (
    <Card variant="aiPrediction">
      <div>
        <h2 className={styles.title}>AI Prediction</h2>
        <p className={styles.description}>
          Next month, you will spend a total of
        </p>
      </div>
      <p className={styles.amount}>{formatCurrency(aiPrediction)}</p>
      <Button variant="white" fullWidth shape="pill" onClick={()=>{router.push('/predict')}}>
        Upload Transaction
      </Button>
    </Card>
  )
}