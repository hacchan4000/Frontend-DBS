import styles from './AuthDecorations.module.css'

const GRAPHS_BG = '/GraphsBG.png'
const CARDS_BG = '/CardsBG.png'

export function AuthDecorations() {
  return (
    <div className={styles.root} aria-hidden>
      <img
        className={styles.graphsBg}
        src={GRAPHS_BG}
        alt=""
        width={189}
        height={1024}
        decoding="async"
      />
      <img
        className={styles.cardsBg}
        src={CARDS_BG}
        alt=""
        width={527}
        height={1024}
        decoding="async"
      />
    </div>
  )
}