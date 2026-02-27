import styles from './Skills.module.css'
import { SKILLS } from '../data'

export default function Skills() {
  return (
    <section id="skills" className={`container section`}>
      <div className="fade-in">
        <p className="sec-tag">// skills</p>
        <h2 className="sec-title">A Full-Stack Toolkit</h2>
        <p className="sec-sub">A modern stack for building reliable, scalable, and intelligent systems.</p>
      </div>

      <div className={styles.grid}>
        {SKILLS.map((s, i) => (
          <div
            className={`${styles.card} fade-in`}
            key={s.cat}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <span className={styles.icon}>{s.icon}</span>
            <h3 className={styles.cat}>{s.cat}</h3>
            <div className={styles.tags}>
              {s.tags.map((t) => <span className={styles.tag} key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
