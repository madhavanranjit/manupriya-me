import { useState, useRef, useEffect } from 'react'
import styles from './Contact.module.css'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', reason: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.left} reveal`}>
          <p className={styles.eyebrow}>Get in Touch</p>
          <h2 className={styles.title}>Let's walk this journey together</h2>
          <p className={styles.desc}>
            Whether you're seeking a consultation, a second opinion, or want to
            collaborate on health technology — I'm here. Every conversation starts
            with listening.
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <i className="ti ti-map-pin" aria-hidden="true" />
              <span>Apollo Sage Hospital, Bhopal, MP</span>
            </div>
            <div className={styles.infoItem}>
              <i className="ti ti-brand-instagram" aria-hidden="true" />
              <span>@ManupriyaMD</span>
            </div>
          </div>
          <div className={styles.qrBox}><img src="/review-qr.png" alt="Scan to leave a Google review" className={styles.qrImg} /><span>Scan to share your feedback</span></div>
        </div>

        <div className={`${styles.right} reveal`} style={{ transitionDelay: '0.15s' }}>
          {status === 'success' ? (
            <div className={styles.successMsg}>
              <i className="ti ti-circle-check" aria-hidden="true" />
              <h3>Message received!</h3>
              <p>Thank you for reaching out. I'll get back to you shortly.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className={styles.input}
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                required
              />
              <select
                className={styles.input}
                name="reason"
                value={form.reason}
                onChange={handleChange}
              >
                <option value="">Reason for contact</option>
                <option value="consultation">Clinical consultation</option>
                <option value="second-opinion">Second opinion</option>
                <option value="app-collab">App collaboration</option>
                <option value="media">Media / speaking</option>
              </select>
              <textarea
                className={styles.input}
                name="message"
                rows={4}
                placeholder="Your message..."
                value={form.message}
                onChange={handleChange}
                style={{ resize: 'none' }}
              />
              {status === 'error' && (
                <p className={styles.errorMsg}>Something went wrong. Please try again.</p>
              )}
              <button className={styles.submitBtn} type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
