import { useEffect, useRef } from 'react'
import styles from './Expertise.module.css'

const services = [
  {
    icon: 'ti-heart-rate-monitor',
    title: 'Fetal Anomaly Scans',
    desc: 'Comprehensive mid-trimester and first-trimester screening with detailed structural evaluation and counselling.',
  },
  {
    icon: 'ti-dna-2',
    title: 'Genetic Testing & Counselling',
    desc: 'NIPT, amniocentesis, CVS — guiding families through complex genetic decisions with clarity and empathy.',
  },
  {
    icon: 'ti-report-medical',
    title: 'High-Risk Pregnancy Management',
    desc: 'Expert monitoring and intervention for IUGR, twin pregnancies, and complex maternal-fetal conditions.',
  },
  {
    icon: 'ti-baby-carriage',
    title: 'Fetal Doppler Studies',
    desc: 'Advanced Doppler assessment of fetal circulation and placental function for optimal timing of care.',
  },
  {
    icon: 'ti-microscope',
    title: 'Invasive Fetal Procedures',
    desc: 'Skilled in amniocentesis, CVS, and fetal blood sampling with high-precision ultrasound guidance.',
  },
  {
    icon: 'ti-robot',
    title: 'AI-Assisted Diagnostics',
    desc: 'Integrating cutting-edge AI tools to enhance diagnostic accuracy and improve patient outcomes at scale.',
  },
]

export default function Expertise() {
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

  return (
    <section id="expertise" className={styles.expertise} ref={ref}>
      <div className={styles.inner}>
        <div className="reveal">
          <p className="section-eyebrow">Clinical Expertise</p>
          <h2 className="section-title">Specialized care for <em>every stage</em></h2>
        </div>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={i} className={`${styles.card} reveal`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className={styles.iconBox}>
                <i className={`ti ${s.icon}`} aria-hidden="true" />
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
