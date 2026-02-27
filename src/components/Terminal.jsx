import styles from './Terminal.module.css'

const TAGS = ['Production-Ready', 'Full Stack', 'IoT Engineer', 'B.Tech', 'AI Enthusiast', 'Open Source']

export default function Terminal() {
  return (
    <div className={`container section`}>
      <div className={styles.grid}>

        {/* Terminal window */}
        <div className={`${styles.term} fade-in`}>
          <div className={styles.bar}>
            <span className={styles.dot} /><span className={styles.dot} /><span className={styles.dot} />
            <span className={styles.label}>sneha@portfolio ~ zsh</span>
          </div>
          <div className={styles.body}>
            <Line prompt="$ " cmd="whoami" />
            <Line out="Sneha Narwaria" />
            <Line out="> Full Stack Developer | IoT Engineer" hl />
            <br />
            <Line prompt="$ " cmd="focus --current" />
            <Line out="Building scalable web apps, smart IoT systems," />
            <Line out="and AI-powered tools that work in production." />
            <br />
            <Line prompt="$ " cmd="stack --list" />
            <Line out="[ React, Node.js, ESP32, Python, Firebase... ]" />
            <br />
            <Line prompt="$ " cmd="status" />
            <Line out="> Available for projects & collaborations" hl />
            <div className={styles.line}>
              <span className={styles.prompt}>$ </span>
              <span className={styles.cursor} />
            </div>
          </div>
        </div>

        {/* Side text */}
        <div className={`${styles.side} fade-in`} style={{ transitionDelay: '0.15s' }}>
          <h2>Engineer by skill.<br />Builder by mindset.</h2>
          <p>
            I don't just write code — I architect systems. Every project is built
            with production reliability, clean abstractions, and real-world
            constraints in mind.
          </p>
          <p>Focused on the intersection of hardware, software, and intelligence.</p>
          <div className={styles.tags}>
            {TAGS.map((t) => <span className={styles.tag} key={t}>{t}</span>)}
          </div>
        </div>

      </div>
    </div>
  )
}

function Line({ prompt, cmd, out, hl }) {
  return (
    <div className={styles.line}>
      {prompt && <span className={styles.prompt}>{prompt}</span>}
      {cmd    && <span className={styles.cmd}>{cmd}</span>}
      {out    && <span className={hl ? styles.hl : styles.out}>{out}</span>}
    </div>
  )
}
