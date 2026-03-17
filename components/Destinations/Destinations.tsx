'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import ImageWithSkeleton from '@/components/ImageWithSkeleton/ImageWithSkeleton'
import DestinationModal from './DestinationModal'
import styles from './Destinations.module.css'

const destinationImages = [
  { img: 'https://images.unsplash.com/photo-1704212685546-3086abc1e6a1?w=900&q=80', featured: true },
  { img: 'https://images.unsplash.com/photo-1737037344843-7f6d4867d648?w=600&q=80' },
  { img: 'https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=600&q=80' },
  { img: '/img/destinations/bolaven-plateau/bolaven-plateau-trail.jpg' },
  { img: '/img/destinations/4000-islands/4000-islands-SI-PHAN-DON.jpg' },
]

interface Destination {
  name: string
  tag: string
  description: string
  img: string
  featured?: boolean
}

export default function Destinations() {
  const t = useTranslations('destinations')
  const items = t.raw('items') as Array<{ name: string; tag: string; description: string }>

  const destinations: Destination[] = items.map((item, i) => ({
    ...item,
    ...destinationImages[i],
  }))

  const [selected, setSelected] = useState<Destination | null>(null)

  return (
    <section className={styles.section} id="destinations">
      <div className={styles.intro}>
        <div>
          <div className={styles.eyebrow}>{t('eyebrow')}</div>
          <h2 className={styles.title}>
            {t('titleLine1')}<br /><em>{t('titleLine2')}</em>
          </h2>
        </div>
        <p className={styles.desc}>{t('desc')}</p>
      </div>

      <div className={styles.grid}>
        {destinations.map((d) => (
          <button
            key={d.name}
            className={`${styles.card} ${d.featured ? styles.cardFeatured : ''}`}
            onClick={() => setSelected(d)}
            aria-label={`Learn more about ${d.name}`}
          >
            <ImageWithSkeleton
              src={d.img}
              alt={d.name}
              fill
              className={styles.cardImg}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.cardOverlay} />
            <div className={styles.cardContent}>
              <div className={styles.cardName}>{d.name}</div>
              <div className={styles.cardTag}>{d.tag}</div>
            </div>
            <div className={styles.cardArrow}>→</div>
          </button>
        ))}
      </div>

      {selected && (
        <DestinationModal
          destination={selected}
          cta={t('modalCta')}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}
