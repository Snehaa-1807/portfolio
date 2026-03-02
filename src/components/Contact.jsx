import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'
import { LINKS } from '../data'

const EMAILJS_SERVICE_ID  = 'service_rb9enpj'   // Email Services tab
const EMAILJS_TEMPLATE_ID = 'template_oi1gf0h'  // Email Templates tab
const EMAILJS_PUBLIC_KEY  = 'qWQiXAgrXCdpTJeZ0'
const CONTACT_LINKS = [
  { icon: '⚡', label: 'github.com/Snehaa-1807',                  href: LINKS.github },
  { icon: '💼', label: 'linkedin.com/in/sneha-narwaria-18a56b291', href: LINKS.linkedin },
  { icon: '✉️', label: 'snehanarwaria2@gmail.com',                 href: LINKS.email },
]

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm]       = useState({ from_name: '', from_email: '', message: '' })
  const [status, setStatus]   = useState('idle') // idle | sending | success | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ from_name: '', from_email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
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

          {status === 'success' ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✓</div>
              <p className={styles.successTitle}>Message Sent!</p>
              <p className={styles.successSub}>Thanks! I'll reply to your email within 24 hours.</p>
            </div>
          ) : (
            <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>

              <div className={styles.group}>
                <label htmlFor="from_name">Name</label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder="Your name"
                  value={form.from_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.group}>
                <label htmlFor="from_email">Email</label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.from_email}
                  onChange={handleChange}
                  required
                />
              </div>

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

              {status === 'error' && (
                <p className={styles.errMsg}>
                  ⚠ Something went wrong. Please try emailing me directly at snehanarwaria2@gmail.com
                </p>
              )}

              <button
                type="submit"
                className="btn-primary"
                disabled={status === 'sending'}
                style={{ cursor: 'none', alignSelf: 'flex-start' }}
              >
                {status === 'sending'
                  ? <><span className={styles.spinner} /> Sending...</>
                  : 'Send Message →'
                }
              </button>

              <p className={styles.note}>I usually reply within 24 hours.</p>
            </form>
          )}

        </div>
      </div>
    </section>
  )
}