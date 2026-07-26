import styles from './Hero.module.css'
import heroPhoto from '../assets/hero-photo.jpg'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

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
          <button className={styles.btnPrimary} onClick={() => scrollTo('contact')}>
            Book Consultation
          </button>
          <button className={styles.btnOutline} onClick={() => scrollTo('apps')}>
            Explore My Work
          </button>
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
