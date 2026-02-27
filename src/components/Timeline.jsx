import { useEffect, useRef } from 'react'
import styles from './Timeline.module.css'
import { TIMELINE } from '../data'

export default function Timeline() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add(styles.visible)
      }),
      { threshold: 0.15 }
    )
    const items = ref.current?.querySelectorAll(`.${styles.item}`)
    items?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`container section`}>
      <div className="fade-in">
        <p className="sec-tag">// journey</p>
        <h2 className="sec-title">A Roadmap of Growth</h2>
        <p className="sec-sub">A journey driven by curiosity, consistency, and building.</p>
      </div>

      <div className={styles.timeline} ref={ref}>
        {TIMELINE.map((item, i) => (
          <div
            className={styles.item}
            key={item.year}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <div className={styles.dot} />
            <p className={styles.year}>{item.year}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}