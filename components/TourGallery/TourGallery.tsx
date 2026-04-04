'use client'

import { useState, useEffect } from 'react'
import styles from './TourGallery.module.css'

type TourGalleryProps = {
  images: string[]
  tourName: string
}

export default function TourGallery({ images, tourName }: TourGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    if (activeIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null)
      if (e.key === 'ArrowRight')
        setActiveIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : i))
      if (e.key === 'ArrowLeft')
        setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i))
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [activeIndex, images.length])

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeIndex])

  const prev = () =>
    setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i))
  const next = () =>
    setActiveIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : i))

  return (
    <>
      <div className={styles.grid}>
        {images.map((src, idx) => (
          <button
            key={idx}
            className={styles.cell}
            onClick={() => setActiveIndex(idx)}
            aria-label={`View photo ${idx + 1} of ${images.length}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${tourName} — photo ${idx + 1}`}
              loading={idx === 0 ? 'eager' : 'lazy'}
              className={styles.thumb}
            />
            <div className={styles.cellOverlay} aria-hidden="true" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className={styles.backdrop}
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${activeIndex + 1} of ${images.length}`}
        >
          <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[activeIndex]}
              alt={`${tourName} — photo ${activeIndex + 1}`}
              className={styles.lightboxImg}
            />

            <button
              className={styles.close}
              onClick={() => setActiveIndex(null)}
              aria-label="Close lightbox"
            >
              ✕
            </button>

            {activeIndex > 0 && (
              <button
                className={`${styles.arrow} ${styles.arrowPrev}`}
                onClick={prev}
                aria-label="Previous photo"
              >
                ‹
              </button>
            )}

            {activeIndex < images.length - 1 && (
              <button
                className={`${styles.arrow} ${styles.arrowNext}`}
                onClick={next}
                aria-label="Next photo"
              >
                ›
              </button>
            )}

            <div className={styles.counter} aria-live="polite">
              {activeIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
