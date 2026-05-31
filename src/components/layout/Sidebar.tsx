import { NavLink } from 'react-router-dom'
import { cn } from '../../lib/classNames'
import styles from './Sidebar.module.css'

const items = [
  {
    to: '/graphs',
    label: 'Graphs',
    lightIcon: '/Button-Graphs_Light.png',
    darkIcon: '/Button-Graphs_Dark.png',
  },
  {
    to: '/purchases',
    label: 'Purchases',
    lightIcon: '/Button-Purchases_Light.png',
    darkIcon: '/Button-Purchases_Dark.png',
  },
  {
    to: '/subscriptions',
    label: 'Subscriptions',
    lightIcon: '/Button-Subscriptions_Light.png',
    darkIcon: '/Button-Subscriptions_Dark.png',
  },
] as const

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {items.map(({ to, label, lightIcon, darkIcon }) => (
          <NavLink key={to} to={to}>
            {({ isActive }) => (
              <div
                className={cn(
                  styles.navLink,
                  isActive && styles.navLinkActive
                )}
            >
              <img
                src={isActive ? lightIcon : darkIcon}
                alt=""
                className={styles.navIcon}
              />
              <span>{label}</span>
            </div>
          )}
        </NavLink>
      ))}
      </nav>
    </aside>
  )
}