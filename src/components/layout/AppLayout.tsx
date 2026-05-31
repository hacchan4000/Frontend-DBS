import { Outlet } from 'react-router-dom'
import { cn } from '../../lib/classNames'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import styles from './AppLayout.module.css'

interface AppLayoutProps {
  variant?: 'home' | 'dashboard'
  showSidebar?: boolean
}

export function AppLayout({
  variant = 'dashboard',
  showSidebar = false,
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
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}