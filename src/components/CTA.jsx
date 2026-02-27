import styles from './CTA.module.css'
import { LINKS } from '../data'

export default function CTA() {
  return (
    <div className={`container`} style={{ paddingBottom: 'var(--sec-py)' }}>
      <div className={`${styles.box} fade-in`}>
        <div className={styles.glow} />
        <h2 className={styles.title}>Ready to Turn Ideas into Reality?</h2>
        <p className={styles.sub}>Let's build systems that don't just look good — they work at scale.</p>
        <div className={styles.btns}>
          <a href={LINKS.github}  target="_blank" rel="noopener noreferrer" className="btn-primary">View GitHub →</a>
{/*          <a href={LINKS.resume}  target="_blank" rel="noopener noreferrer" className="btn-ghost">Download Resume</a>*/}          <a href="#contact" className="btn-ghost">Contact Me</a>
        </div>
        <p className={styles.note}>// systems that scale · code that ships · ideas that matter</p>
      </div>
    </div>
  )
}
