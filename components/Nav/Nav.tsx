'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Nav.module.css'

const navLinks = [
  { label: 'DESTINATIONS', href: '#destinations' },
  { label: 'TOURS',        href: '#tours' },
  { label: 'ABOUT',        href: '#about' },
  { label: 'CONTACT',      href: '#contact' },
]

export default function Nav() {
  const [locale, setLocale] = useState<'EN' | 'ລາວ'>('EN')
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoText}>LAO MAI TRAVEL</div>
        <span className={styles.logoSub}>YOUR TRUSTED LOCAL TRAVEL PARTNER LAOS</span>
      </Link>

      {/* Mobile Nav: hamburger toggle button (shown on small screens) */}
      <button 
        className={styles.hamburger}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className={mobileOpen ? styles.hamburgerOpen : ''}></span>
        <span className={mobileOpen ? styles.hamburgerOpen : ''}></span>
        <span className={mobileOpen ? styles.hamburgerOpen : ''}></span>
      </button>

      {/* Desktop Nav: primary links (becomes slide-out menu content on mobile) */}
      <ul className={`${styles.links} ${mobileOpen ? styles.linksOpen : ''}`}>
        {navLinks.map((l) => (
          <li key={l.label}>
            <a 
              href={l.href} 
              className={styles.link}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Nav: language switcher + CTA (also shown in mobile menu when open) */}
      <div className={`${styles.right} ${mobileOpen ? styles.rightOpen : ''}`}>
        <div className={styles.langSwitcher}>
          {(['EN', 'ລາວ'] as const).map((lang) => (
            <button
              key={lang}
              className={`${styles.langBtn} ${locale === lang ? styles.langBtnActive : ''}`}
              onClick={() => setLocale(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
        <a href="#contact" className={styles.cta} onClick={() => setMobileOpen(false)}>BOOK NOW</a>
      </div>
    </nav>
  )
}
