import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        manupriya<span>.me</span>
      </div>

      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <button onClick={() => scrollTo('about')}>About</button>
        <button onClick={() => scrollTo('expertise')}>Expertise</button>
        <a href="/patient-info" className={styles.navLink}>Patient Info</a>
        <a href="/maatriai" className={styles.navLink}>MaatriAI</a>
        <button onClick={() => scrollTo('contact')}>Contact</button>
      </div>

      <a
        href="https://www.apollohospitals.com/doctors/obstetrician-and-gynecologist/bhopal/dr-manupriya-madhavan?utm_campaign=rightchoice-google-reserve&utm_source=google-reserve&utm_medium=1931525415121178175&rwg_token=AFd1xnGVp8-AHEpiFSNvALoCsn8M7kbYC1CfBxUHip0uq4DpAtZjQLIi_fCKBS1lMZKfRL8hzBRBU9p8zfO9rZMf2MeGN7h6jA%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cta}
      >
        Book Consultation
      </a>

      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <i className={menuOpen ? 'ti ti-x' : 'ti ti-menu-2'}></i>
      </button>
    </nav>
  )
}
