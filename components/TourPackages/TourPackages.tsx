'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import styles from './TourPackages.module.css'

type Day = { title: string; body: string }

type TourMessage = {
  region: string
  province: string
  name: string
  highlight: string
  duration: string
  departure: string
  days: Day[]
  includes: string[]
  excludes: string[]
}

type TourAsset = {
  img: string
  gallery: string[]
}

const tourAssets: TourAsset[] = [
  {
    img: '/img/destinations/houaphanh/cave-entrance.jpg',
    gallery: [
      '/img/hidden-legacy-houaphanh/caves-entrance.jpg',
      '/img/hidden-legacy-houaphanh/caves-inside-2-people.webp',
      '/img/hidden-legacy-houaphanh/caves-inside.jpeg',
      '/img/hidden-legacy-houaphanh/monument.jpeg',
    ],
  },
  {
    img: '/img/hidden-tribes-of-northern-phongsaly/2-young-women.jpeg',
    gallery: [
      '/img/hidden-tribes-of-northern-phongsaly/2-old-women.jpeg',
      '/img/hidden-tribes-of-northern-phongsaly/4-older-women.jpeg',
      '/img/hidden-tribes-of-northern-phongsaly/older-woman-1.jpeg',
      '/img/hidden-tribes-of-northern-phongsaly/older-woman-2.jpeg',
      '/img/hidden-tribes-of-northern-phongsaly/older-woman-3.jpeg',
      '/img/hidden-tribes-of-northern-phongsaly/woman-alone.jpeg',
      '/img/hidden-tribes-of-northern-phongsaly/younger-woman-1.jpeg',
      '/img/hidden-tribes-of-northern-phongsaly/younger-woman-2.jpeg',
    ],
  },
  {
    img: '/img/discover-the-hidden-villages-of-oudomxay-akha-&-hmong-day-tour/group-trekking.jpeg',
    gallery: [
      '/img/discover-the-hidden-villages-of-oudomxay-akha-&-hmong-day-tour/man-trekking.jpeg',
      '/img/discover-the-hidden-villages-of-oudomxay-akha-&-hmong-day-tour/trekking-road-2-buffaloes.jpeg',
      '/img/discover-the-hidden-villages-of-oudomxay-akha-&-hmong-day-tour/woman-trekking.jpeg',
    ],
  },
  {
    img: '/img/wild-thrill-trails-camping-&-homestay/tourists-with-villager-women.jpeg',
    gallery: [
      '/img/wild-thrill-trails-camping-&-homestay/tourists-outside-village-house.jpeg',
      '/img/wild-thrill-trails-camping-&-homestay/tourists-practicing-crossbow-shooting.jpeg',
      '/img/wild-thrill-trails-camping-&-homestay/village-houses.jpeg',
      '/img/wild-thrill-trails-camping-&-homestay/village-house.jpeg',
      '/img/wild-thrill-trails-camping-&-homestay/village-house-2.jpeg',
      '/img/wild-thrill-trails-camping-&-homestay/bed-inside-village-house.jpeg',
    ],
  },
  {
    img: '/img/destinations/bolaven-plateau/waterfall-in-the-bolaven-plateau.jpeg',
    gallery: [],
  },
]

export default function TourPackages() {
  const t = useTranslations('packages')
  const tourMessages = t.raw('tours') as TourMessage[]

  const tours = tourMessages.map((msg, i) => ({ ...msg, ...tourAssets[i] }))

  const [open, setOpen] = useState<number | null>(null)
  const [slides, setSlides] = useState<Record<number, number>>({})

  const toggle = (i: number) => setOpen(open === i ? null : i)

  const slide = (tourIdx: number, delta: number, total: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setSlides(prev => {
      const current = prev[tourIdx] ?? 0
      return { ...prev, [tourIdx]: (current + delta + total) % total }
    })
  }

  return (
    <section className={styles.section} id="packages">
      <div className={styles.header}>
        <div>
          <div className={styles.eyebrow}>{t('eyebrow')}</div>
          <h2 className={styles.title}>
            {t('titlePrefix')} <em>{t('titleEm')}</em>
          </h2>
        </div>
        <p className={styles.intro}>
          {t('intro')}
        </p>
      </div>

      <div className={styles.list}>
        {tours.map((tour, i) => {
          const currentSlide = slides[i] ?? 0

          return (
            <div key={tour.name} className={styles.item}>

              {/* ── Collapsed / always-visible row ── */}
              <button
                className={`${styles.row} ${open === i ? styles.rowOpen : ''}`}
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <div className={styles.thumb}>
                  <Image
                    src={tour.img}
                    alt={tour.name}
                    fill
                    className={styles.thumbImg}
                    sizes="(max-width: 768px) 100vw, 260px"
                  />
                </div>

                <div className={styles.info}>
                  <span className={styles.region}>{tour.region} &mdash; {tour.province}</span>
                  <span className={styles.name}>{tour.name}</span>
                  <span className={styles.highlight}>{tour.highlight}</span>
                  <span className={styles.duration}>{tour.duration}</span>
                </div>

                <div className={styles.toggleBtn} aria-hidden="true">
                  <span className={open === i ? styles.minus : styles.plus} />
                </div>
              </button>

              {/* ── Expanded body ── */}
              <div className={`${styles.body} ${open === i ? styles.bodyOpen : ''}`}>

                <div className={styles.bodyInner}>

                  {/* Days */}
                  <div className={styles.days}>
                    <div className={styles.colLabel}>{t('itinerary')}</div>
                    {tour.days.map((d) => (
                      <div key={d.title} className={styles.day}>
                        <div className={styles.dayTitle}>{d.title}</div>
                        <p className={styles.dayBody}>{d.body}</p>
                      </div>
                    ))}
                    <div className={styles.departure}>
                      <span>{t('departureReturn')}</span> {tour.departure}
                    </div>
                  </div>

                  {/* Includes / Excludes */}
                  <div className={styles.meta}>
                    <div className={styles.metaBlock}>
                      <div className={styles.colLabel}>{t('priceIncludes')}</div>
                      <ul className={styles.metaList}>
                        {tour.includes.map((item) => (
                          <li key={item} className={styles.metaInclude}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.metaBlock}>
                      <div className={styles.colLabel}>{t('priceExcludes')}</div>
                      <ul className={styles.metaList}>
                        {tour.excludes.map((item) => (
                          <li key={item} className={styles.metaExclude}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <a href="#contact" className={styles.cta}>{t('enquire')}</a>
                  </div>

                </div>
              </div>

            </div>
          )
        })}
      </div>
    </section>
  )
}
