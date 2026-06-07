import type { ReactNode } from 'react'
import { PageToolbar } from './PageToolbar'
import styles from './ListPanel.module.css'

interface ListPanelProps {
  title: string
  children: ReactNode
  searchValue?: string
  onSearchChange?: (value: string) => void
  onAdd?: () => void
}

export function ListPanel({
  title,
  children,
  searchValue,
  onSearchChange,
  onAdd,
}: ListPanelProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <PageToolbar
            searchValue={searchValue}
            onSearchChange={onSearchChange}
            onAdd={onAdd}
          />
        </div>
        <div className={styles.panel}>{children}</div>
      </div>
    </section>
  )
}