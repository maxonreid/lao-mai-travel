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

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoText}>LAO MAI TRAVEL</div>
        <span className={styles.logoSub}>YOUR TRUSTED LOCAL TRAVEL PARTNER LAOS</span>
      </Link>

      <ul className={styles.links}>
        {navLinks.map((l) => (
          <li key={l.label}>
            <a href={l.href} className={styles.link}>{l.label}</a>
          </li>
        ))}
      </ul>

      <div className={styles.right}>
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
        <a href="#contact" className={styles.cta}>BOOK NOW</a>
      </div>
    </nav>
  )
}
