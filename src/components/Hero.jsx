import styles from './Hero.module.css'
import heroPhoto from '../assets/hero-photo.jpg'

const APOLLO_URL =
  'https://www.apollohospitals.com/doctors/obstetrician-and-gynecologist/bhopal/dr-manupriya-madhavan?utm_campaign=rightchoice-google-reserve&utm_source=google-reserve&utm_medium=1931525415121178175&rwg_token=AFd1xnGVp8-AHEpiFSNvALoCsn8M7kbYC1CfBxUHip0uq4DpAtZjQLIi_fCKBS1lMZKfRL8hzBRBU9p8zfO9rZMf2MeGN7h6jA%3D%3D'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.eyebrow}>
          Fetal Medicine Specialist · Health Tech Innovator · Mother
        </p>
        <h1 className={styles.name}>
          Dr. <em>Manupriya Madhavan</em>
        </h1>
        <p className={styles.subtitle}>
          Where clinical excellence meets the warmth of a mother's heart
        </p>
        <p className={styles.desc}>
          Senior Fetal Medicine Specialist helping families navigate the most important
          journey of their lives — with precision, compassion, and the power of modern AI.
        </p>
        <div className={styles.tags}>
          <span className={`${styles.tag} ${styles.tagSage}`}>Fetal Medicine</span>
          <span className={`${styles.tag} ${styles.tagRose}`}>Maternal Health</span>
          <span className={`${styles.tag} ${styles.tagWarm}`}>AI for Healthcare</span>
          <span className={`${styles.tag} ${styles.tagSage}`}>Apollo Sage Hospital</span>
        </div>
        <div className={styles.btns}>
          <a href="/book" className={styles.btnPrimary}>
            Book Online Consultation
          </a>
          <a href={APOLLO_URL} target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
            Book Clinic Consultation
          </a>
        </div>
        <div className={styles.btnLinks}>
          <a href="/gallery">View Gallery</a>
          <span>·</span>
          <a href="#" target="_blank" rel="noopener noreferrer">Watch Videos</a>
          <span>·</span>
          <a href="/case-scenarios">Case Scenarios</a>
          <span>·</span>
          <a href="/patient-info">Scans &amp; Tests Guide</a>
        </div>
      </div>

      <div className={styles.right}>
        <img
          src={heroPhoto}
          alt="Dr. Manupriya Madhavan, Fetal Medicine Specialist at Apollo Sage Hospital Bhopal"
          className={styles.photo}
        />
        <div className={styles.overlay} />
        <div className={styles.badge1}>
          <div className={styles.badgeNum}>12+</div>
          <div className={styles.badgeLabel}>Years of expertise</div>
        </div>
        <div className={styles.badge2}>
          <div className={styles.badge2Dot} />
          <div>
            <div className={styles.badge2Text}>Apollo Sage Hospital</div>
            <div className={styles.badge2Sub}>Bhopal · Fetal Medicine</div>
          </div>
        </div>
      </div>
    </section>
  )
}
