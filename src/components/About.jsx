import { useEffect, useRef } from 'react'
import styles from './About.module.css'

const stats = [
  { num: '5000+', label: 'Families guided through high-risk pregnancies' },
  { num: '2', label: 'AI health apps in active development' },
  { num: 'AIIMS', label: 'Trained at premier national institute' },
  { num: 'Apollo', label: 'Senior Specialist, Apollo Sage Bhopal' },
]

export default function About() {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.grid}>
        <div className={`${styles.text} reveal`}>
          <p className="section-eyebrow">My Story</p>
          <h2 className="section-title">
            A physician, an<br /><em>innovator</em>, a mother
          </h2>
          <p>
            I've spent over a decade standing with families at the intersection of hope
            and complexity — delivering diagnoses, navigating uncertainty, and guiding
            mothers through the most profound chapters of their lives.
          </p>
          <p>
            Beyond the clinic, I believe technology should serve humanity. I build
            AI-powered tools that extend care beyond hospital walls — making expert
            guidance accessible, decisions smarter, and outcomes better for families
            everywhere.
          </p>
          <p>
            As a mother myself, I understand what it means to carry both the weight
            of knowledge and the depth of love for a child. That perspective shapes
            everything I do — in the clinic, and in the apps I build.
          </p>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((s, i) => (
            <div key={i} className={`${styles.statCard} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
