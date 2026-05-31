import type { ReactNode } from 'react'
import { AuthDecorations } from './AuthDecorations'
import styles from './AuthShell.module.css'

interface AuthShellProps {
  greeting: string
  children: ReactNode
}

export function AuthShell({ greeting, children }: AuthShellProps) {
  return (
    <div className={styles.page}>
      <AuthDecorations />
      <div className={styles.content}>
        <div className={styles.panelBackdrop} />
        <p className={styles.greeting}>{greeting}</p>
        <div className={styles.formPanel}>{children}</div>
      </div>
    </div>
  )
}