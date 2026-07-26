import { useEffect, useRef } from 'react'
import styles from './Apps.module.css'

const apps = [
  {
    id: 'maatri',
    icon: 'ti-heart',
    name: 'Maatri AI',
    tagline: 'Mother & newborn health, reimagined',
    desc: 'A compassionate companion for mothers and newborns — tracking health milestones, providing expert guidance, and empowering women to take charge of their wellbeing.',
    features: [
      'Maternal health tracking through pregnancy & postpartum',
      'Newborn milestone monitoring with AI insights',
      "Women's empowerment through health education",
      'Expert-backed guidance from Dr. Manupriya Madhavan',
    ],
    pill: 'Coming Soon',
    pillClass: 'pillSage',
    storeLink: null,
  },
  {
    id: 'defe',
    icon: 'ti-temperature',
    name: 'Defervescence AI',
    tagline: 'Smarter fever tracking for families',
    desc: 'An AI-powered fever tracker that transforms raw temperature readings into meaningful, shareable charts — helping parents stay calm and doctors make better decisions, faster.',
    features: [
      'Voice & manual fever entry with AI analysis',
      'Auto-generated fever progression charts',
      'Shareable PDF reports for doctors',
      'Pattern detection and fever trend insights',
    ],
    pill: 'Play Store',
    pillClass: 'pillRose',
    storeLink: 'https://play.google.com',
    pageLink: '/defervescence',
  },
]

export default function Apps() {
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
    <section id="apps" className={styles.apps} ref={ref}>
      <div className={styles.inner}>
        <div className="reveal">
          <p className="section-eyebrow">Health Tech</p>
          <h2 className="section-title">Apps built with <em>heart</em></h2>
        </div>

        <div className={styles.grid}>
          {apps.map((app, i) => (
            <div key={app.id} className={`${styles.card} reveal`} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className={`${styles.cardHeader} ${styles[`header_${app.id}`]}`}>
                <div className={`${styles.appLogo} ${styles[`logo_${app.id}`]}`}>
                  <i className={`ti ${app.icon}`} aria-hidden="true" />
                </div>
                <p className={styles.appName}>{app.name}</p>
                <p className={styles.appTagline}>{app.tagline}</p>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.appDesc}>{app.desc}</p>
                <ul className={styles.features}>
                  {app.features.map((f, j) => (
                    <li key={j}>
                      <i className="ti ti-check" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className={styles.cardFooter}>
                  <span className={`${styles.pill} ${styles[app.pillClass]}`}>
                    {app.pill}
                  </span>
                  {app.pageLink && (
                    <a href={app.pageLink} className={styles.storeLink}>
                      Learn more <i className="ti ti-arrow-right" aria-hidden="true" />
                    </a>
                  )}
                  {app.storeLink && !app.pageLink && (
                    <a href={app.storeLink} target="_blank" rel="noopener noreferrer" className={styles.storeLink}>
                      Download <i className="ti ti-arrow-right" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
