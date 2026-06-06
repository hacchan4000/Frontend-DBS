'use client'

import type { ReactNode } from 'react'
import { cn } from '../../utils/classNames'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import styles from './AppLayout.module.css'

interface AppLayoutProps {
  variant?: 'home' | 'dashboard'
  showSidebar?: boolean
  children: ReactNode
}

export function AppLayout({
  variant = 'dashboard',
  showSidebar = false,
  children,
}: AppLayoutProps) {
  const isHome = variant === 'home'

  return (
    <div
      className={cn(
        styles.shell,
        isHome ? styles.shellHome : styles.shellDashboard,
      )}
    >
      <Header />
      <div className={styles.body}>
        {showSidebar && <Sidebar />}
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  )
}
