import { Link } from 'react-router-dom'
import styles from './SectionTitle.module.css'

interface SectionTitleProps {
  title: string
  to?: string
}

export function SectionTitle({ title, to }: SectionTitleProps) {
  const content = (
    <>
      <h2 className={styles.title}>{title}</h2>
      {to && <img src="/Button-Arrow.png" alt="" className={styles.icon} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={styles.link}>
        {content}
      </Link>
    )
  }

  return <div className={styles.wrapper}>{content}</div>
}
