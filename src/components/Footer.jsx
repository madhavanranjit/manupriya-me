import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>manupriya<span>.me</span></div>
        <p className={styles.copy}>© 2026 Dr. Manupriya Madhavan · Apollo Sage Hospital, Bhopal</p>
        <a href="https://share.google/qbYX6HPzK5OyHpIo7" target="_blank" rel="noopener noreferrer" className={styles.reviewBtn}><i className="ti ti-star-filled" aria-hidden="true" /> Leave a Google Review</a>
        <div className={styles.links}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="ti ti-brand-linkedin" aria-hidden="true" /> LinkedIn
          </a>
          <a href="https://instagram.com/DrManupriyaFetalMedicine" target="_blank" rel="noopener noreferrer">
            <i className="ti ti-brand-instagram" aria-hidden="true" /> Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="ti ti-brand-twitter" aria-hidden="true" /> Twitter
          </a>
          <a href="https://youtube.com/@DrManupriyaFetalMedicine" target="_blank" rel="noopener noreferrer">
            <i className="ti ti-brand-youtube" aria-hidden="true" /> YouTube
          </a>
        </div>
      </div>
    </footer>
  )
}
