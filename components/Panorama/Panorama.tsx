'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import styles from './Panorama.module.css'

export default function Panorama() {
  const t = useTranslations('panorama')
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId: number
    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const el = bgRef.current
        if (!el) return
        const rect = el.parentElement!.getBoundingClientRect()
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
        const shift = (progress - 0.5) * 60
        el.style.transform = `scale(1.04) translateY(${shift}px)`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <div ref={bgRef} className={styles.bg} />
      <div className={styles.gradient} />
      <div className={styles.content}>
        <div className={styles.eyebrow}>{t('eyebrow')}</div>
        <div className={styles.headline}>
          {t('headlineLine1')} <em>{t('headlineEm')}</em> {t('headlineLine2')}
        </div>
        <div className={styles.dividerLine} />
      </div>
    </div>
  )
}
