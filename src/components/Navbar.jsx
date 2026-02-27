import styles from './Navbar.module.css'
import { LINKS } from '../data'

const NAV_ITEMS = ['Home', 'Work', 'Skills', 'About', 'Contact']

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.logo}>SN/</span>

        <ul className={styles.links}>
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        <a href={LINKS.email} className={styles.hire}>Hire Me</a>
      </div>
    </nav>
  )
}
