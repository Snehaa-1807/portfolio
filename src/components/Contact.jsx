import { useState } from 'react'
import styles from './Contact.module.css'
import { LINKS } from '../data'

const CONTACT_LINKS = [
  { icon: '⚡', label: 'github.com/sneha-narwaria',     href: LINKS.github },
  { icon: '💼', label: 'linkedin.com/in/sneha-narwaria', href: LINKS.linkedin },
  { icon: '✉️', label: 'snehanarwaria2@gmail.com',              href: LINKS.email },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className={`container section`}>
      <div className={styles.grid}>

        {/* Left */}
        <div>
          <div className="fade-in">
            <p className="sec-tag">// contact</p>
            <h2 className={styles.heading}>
              Let's Build Something<br />
              <span style={{ color: 'var(--accent)' }}>Powerful</span>
            </h2>
            <p className={styles.sub}>
              Have an idea, project, or collaboration in mind? I'd love to hear about it.
            </p>
          </div>

          <div className={`${styles.links} fade-in`} style={{ transitionDelay: '0.12s' }}>
            {CONTACT_LINKS.map((l) => (
              <a className={styles.link} href={l.href} key={l.label} target="_blank" rel="noopener noreferrer">
                <span className={styles.linkIcon}>{l.icon}</span>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="fade-in" style={{ transitionDelay: '0.18s' }}>
          {sent ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✓</div>
              <p className={styles.successTitle}>Message Sent!</p>
              <p className={styles.successSub}>I usually reply within 24 hours.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              {[
                { label: 'Name',  name: 'name',  type: 'text',  ph: 'Your name' },
                { label: 'Email', name: 'email', type: 'email', ph: 'your@email.com' },
              ].map((f) => (
                <div className={styles.group} key={f.name}>
                  <label htmlFor={f.name}>{f.label}</label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    placeholder={f.ph}
                    value={form[f.name]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}
              <div className={styles.group}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or idea..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn-primary" style={{ cursor: 'none', alignSelf: 'flex-start' }}>
                Send Message →
              </button>
              <p className={styles.note}>I usually reply within 24 hours.</p>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
