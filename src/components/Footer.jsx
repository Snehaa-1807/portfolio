import styles from './Footer.module.css'
import { LINKS } from '../data'

const NAV = ['Home', 'Work', 'About', 'Contact']
const SOCIALS = [
  { icon: '⚡', label: 'GitHub',   href: LINKS.github },
  { icon: '💼', label: 'LinkedIn', href: LINKS.linkedin },
  { icon: '✉️', label: 'Email',    href: LINKS.email },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        <div>
          <p className={styles.brand}>Sneha Narwaria</p>
          <p className={styles.copy}>© 2025 · Designed & built with a focus on real-world impact.</p>
        </div>

        <nav className={styles.nav}>
          {NAV.map((l) => (
            <a href={`#${l.toLowerCase()}`} key={l}>{l}</a>
          ))}
        </nav>

        <div className={styles.socials}>
          {SOCIALS.map(({ icon, label, href }) => (
            <a
              className={styles.social}
              href={href}
              title={label}
              key={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}
