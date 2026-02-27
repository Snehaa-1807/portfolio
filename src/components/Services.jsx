import styles from './Services.module.css'
import { SERVICES } from '../data'

export default function Services() {
  return (
    <div className={`container section`}>
      <div className="fade-in">
        <p className="sec-tag">// services</p>
        <h2 className="sec-title">What I Build</h2>
        <p className="sec-sub">From concept to deployment — I build complete, production-ready products.</p>
      </div>

      <div className={styles.grid}>
        {SERVICES.map((s, i) => (
          <div
            className={`${styles.card} fade-in`}
            key={s.name}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <span className={styles.emoji}>{s.emoji}</span>
            <h3 className={styles.name}>{s.name}</h3>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
