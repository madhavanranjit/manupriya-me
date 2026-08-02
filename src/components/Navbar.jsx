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
        <a href="/patient-info" className={styles.navHighlight}>Patient Info</a>
        <a href="/gallery" className={styles.navLink}>Gallery</a>
        <a href="/maatriai" className={styles.navLink}>MaatriAI</a>
        <button onClick={() => scrollTo('contact')}>Contact</button>
        <a href="https://share.google/qbYX6HPzK5OyHpIo7" target="_blank" rel="noopener noreferrer" className={styles.navHighlight}>Feedback</a>
      </div>

      <a href="/book" className={styles.cta}>
        Book Online
      </a>

      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <i className={menuOpen ? 'ti ti-x' : 'ti ti-menu-2'}></i>
      </button>
    </nav>
  )
}
