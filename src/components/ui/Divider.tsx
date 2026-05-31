import styles from './Divider.module.css'

export function Divider({ indent = false }: { indent?: boolean }) {
  if (indent) {
    return (
      <div className={styles.dividerIndented}>
        <div className={styles.dividerIndentedShort} />
        <div className={styles.dividerIndentedLong} />
      </div>
    )
  }

  return <div className={styles.divider} />
}