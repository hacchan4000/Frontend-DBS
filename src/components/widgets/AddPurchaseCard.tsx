import { Card } from '../ui/Card'
import styles from './AddPurchaseCard.module.css'

export function AddPurchaseCard() {
  return (
    <Card variant="addPurchase">
      <p className={styles.prompt}>Add your purchases here!</p>
      <button type="button" className={styles.addButton} aria-label="Add purchase">
        <span className={styles.addText}>Add</span>
        <span className="sr-only">Add</span>
      </button>
    </Card>
  )
}