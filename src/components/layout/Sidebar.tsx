'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../../lib/classNames'
import styles from './Sidebar.module.css'

const items = [
  {
    href: '/graphs',
    label: 'Graphs',
    lightIcon: '/Button-Graphs_Light.png',
    darkIcon: '/Button-Graphs_Dark.png',
  },
  {
    href: '/purchases',
    label: 'Purchases',
    lightIcon: '/Button-Purchases_Light.png',
    darkIcon: '/Button-Purchases_Dark.png',
  },
  {
    href: '/subscriptions',
    label: 'Subscriptions',
    lightIcon: '/Button-Subscriptions_Light.png',
    darkIcon: '/Button-Subscriptions_Dark.png',
  },
] as const

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {items.map(({ href, label, lightIcon, darkIcon }) => {
          const isActive =
            pathname === href || pathname.startsWith(`${href}/`)

          return (
            <Link key={href} href={href}>
              <div
                className={cn(
                  styles.navLink,
                  isActive && styles.navLinkActive,
                )}
              >
                <img
                  src={isActive ? lightIcon : darkIcon}
                  alt=""
                  className={styles.navIcon}
                />
                <span>{label}</span>
              </div>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
