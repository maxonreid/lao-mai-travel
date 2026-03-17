'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import styles from './DestinationModal.module.css'

interface Destination {
  name: string
  tag: string
  description: string
  img: string
}

interface Props {
  destination: Destination
  cta: string
  onClose: () => void
}

export default function DestinationModal({ destination, cta, onClose }: Props) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.panel} onClick={e => e.stopPropagation()}>

        {/* Image */}
        <div className={styles.imgWrap}>
          <Image
            src={destination.img}
            alt={destination.name}
            fill
            className={styles.img}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className={styles.imgGradient} />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>
          <div className={styles.tag}>{destination.tag}</div>
          <h2 className={styles.name}>{destination.name}</h2>
          <p className={styles.description}>{destination.description}</p>
          <a href="#contact" className={styles.cta} onClick={onClose}>
            {cta}
          </a>
        </div>

      </div>
    </div>
  )
}
