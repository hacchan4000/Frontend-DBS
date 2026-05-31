import { NavLink } from 'react-router-dom'
import { USER_NAME } from '../../utils/data'
import { cn } from '../../lib/classNames'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo}>
          Smart Finance
        </NavLink>
        <nav className={styles.nav}>
          <NavLink
            to="/purchases"
            className={({ isActive }) =>
              cn(styles.navLink, isActive && styles.navLinkActive)
            }
          >
            Purchases
          </NavLink>
          <NavLink
            to="/graphs"
            className={({ isActive }) =>
              cn(styles.navLink, isActive && styles.navLinkActive)
            }
          >
            Graphs
          </NavLink>
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