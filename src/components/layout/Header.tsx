'use client'

import { AppNavLink } from '../ui/AppNavLink'
import { USER_NAME } from '../../utils/data'
import { cn } from '../../utils/classNames'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <AppNavLink href="/" className={styles.logo} exact>
          Smart Finance
        </AppNavLink>
        <nav className={styles.nav}>
          <AppNavLink
            href="/purchases"
            className={(isActive) =>
              cn(styles.navLink, isActive && styles.navLinkActive)
            }
          >
            Purchases
          </AppNavLink>
          <AppNavLink
            href="/graphs"
            className={(isActive) =>
              cn(styles.navLink, isActive && styles.navLinkActive)
            }
          >
            Graphs
          </AppNavLink>
          <a href="#about" className={styles.aboutLink}>
            About Us
          </a>
          <div className={styles.avatar} title={USER_NAME} aria-hidden>
            {USER_NAME.charAt(0)}
          </div>
        </nav>
      </div>
    </header>
  )
}
