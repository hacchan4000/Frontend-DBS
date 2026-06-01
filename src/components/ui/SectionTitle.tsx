import Link from 'next/link'
import styles from './SectionTitle.module.css'

interface SectionTitleProps {
  title: string
  href?: string
}

export function SectionTitle({ title, href }: SectionTitleProps) {
  const content = (
    <>
      <h2 className={styles.title}>{title}</h2>
      {href && <img src="/Button-Arrow.png" alt="" className={styles.icon} />}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={styles.link}>
        {content}
      </Link>
    )
  }

  return <div className={styles.wrapper}>{content}</div>
}
