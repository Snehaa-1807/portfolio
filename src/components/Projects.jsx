import styles from './Projects.module.css'
import { PROJECTS } from '../data'

export default function Projects() {
  return (
    <section id="work" className={`container section`}>
      <div className="fade-in">
        <p className="sec-tag">// portfolio</p>
        <h2 className="sec-title">Flagship Projects</h2>
        <p className="sec-sub">Production-grade work across web, IoT, and AI domains.</p>
      </div>

      <div className={styles.grid}>
        {PROJECTS.map((p, i) => (
          <a
            className={`${styles.card} fade-in`}
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <div className={styles.header}>
              <div className={styles.icon}>{p.icon}</div>
              <span className={styles.arrow}>↗</span>
            </div>
            <h3 className={styles.name}>{p.name}</h3>
            <p className={styles.desc}>{p.desc}</p>
            <div className={styles.tags}>
              {p.tags.map((t) => <span className={styles.tag} key={t}>{t}</span>)}
            </div>
            <span className={styles.viewLink}>View Project →</span>
          </a>
        ))}
      </div>
    </section>
  )
}
