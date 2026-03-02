import styles from './About.module.css'

const STATS = [
  { num: '8+', label: 'Projects Built' },
  { num: '2+', label: 'Years Experience' },
  { num: '4+', label: 'Tech Domains' },
  { num: '∞',  label: 'Curiosity' },
]

export default function About() {
  return (
    <section id="about" className={`container section`}>
      <div className={styles.grid}>

        {/* Visual — initials block, no photo */}
        <div className={`${styles.visual} fade-in`}>
          <div className={styles.visualGlow} />
          <span className={styles.initials}>SN</span>
        </div>

        {/* Text */}
        <div>
          <div className="fade-in">
            <p className="sec-tag">// about</p>
            <h2 className="sec-title">Engineer by Training.<br />Product Builder by Passion.</h2>
          </div>

          <div className={styles.text}>
            <p className="fade-in" style={{ transitionDelay: '0.1s' }}>
              I'm a <strong>B.Tech IoT engineer</strong> and full stack developer focused on
              building real-world systems that combine software, hardware, and intelligent automation.
            </p>
            <p className="fade-in" style={{ transitionDelay: '0.18s' }}>
              I enjoy turning ideas into scalable, reliable, and impactful products — from firmware
              on a microcontroller to a React dashboard in the browser.
            </p>
            <p className="fade-in" style={{ transitionDelay: '0.25s' }}>
              Every system I build is designed to work at scale, not just look good in demos.
            </p>
          </div>

          <div className={`${styles.stats} fade-in`} style={{ transitionDelay: '0.32s' }}>
            {STATS.map(({ num, label }) => (
              <div className={styles.statBox} key={label}>
                <span className={styles.statNum}>{num}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}