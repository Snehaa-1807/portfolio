import styles from './Hero.module.css'
import { LINKS } from '../data'

const BADGES = [
  'B.Tech IoT Engineering',
  'Full Stack Developer',
  'AI Systems Builder',
  'Open to Opportunities',
]

export default function Hero() {
  return (
    <section id="home" className={styles.section}>
      <div className={`container ${styles.grid}`}>

        {/* ── Left: Text ── */}
        <div className={styles.left}>
          <div className={styles.tag}>
            <span className={styles.tagDot} />
            AI-Native Portfolio
          </div>

          <h1 className={styles.name}>
            Sneha <span className={styles.nameAccent}>Narwaria</span>
          </h1>

          <p className={styles.sub}>
            Building scalable web platforms and intelligent IoT systems with
            modern full stack and embedded technologies.
          </p>

          <p className={styles.role}>
            Full Stack Developer · IoT Engineer · AI-Integrated Systems Builder
          </p>

          <p className={styles.highlight}>
            Precise in execution. Reliable in production. Built for real-world impact.
          </p>

          <div className={styles.btns}>
            <a href="#work" className="btn-primary">View Flagship Work →</a>
            <a href="#contact" className="btn-ghost">Contact</a>
            <a
              href="/Sneha Narwaria Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              📄 View Resume
            </a>
          </div>
        </div>

        {/* ── Right: Portrait Card ── */}
        <div className={styles.card}>
          <div className={styles.cardGlow} />

          {/* Avatar with initials */}
          <div className={styles.avatar}>SN</div>

          <p className={styles.cardName}>Sneha Narwaria</p>
          <p className={styles.cardTitle}>Full Stack · IoT Engineer</p>

          <div className={styles.badges}>
            {BADGES.map((b) => (
              <div className={styles.badge} key={b}>
                <span className={styles.badgeDot} />
                {b}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}