import { weekChartHeights } from '../../utils/data'
import { cn } from '../../utils/classNames'
import styles from './WeekChartBars.module.css'

const fillClasses = [
  styles.fill0,
  styles.fill1,
  styles.fill2,
  styles.fill3,
  styles.fill4,
  styles.fill5,
  styles.fill6,
]

export function WeekChartBars() {
  return (
    <div className={styles.chart}>
      {weekChartHeights.map((height, index) => {
        const fill = Math.round((height / 125) * 100)
        return (
          <div key={index} className={styles.column}>
            <div className={styles.track} />
            <div
              className={cn(styles.fill, fillClasses[index])}
              style={{ height: `${fill}%` }}
            />
          </div>
        )
      })}
    </div>
  )
}