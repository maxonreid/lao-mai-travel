import Image from 'next/image'
import { useTranslations } from 'next-intl'
import styles from './Services.module.css'

const serviceAssets = [
  { icon: '🏨', img: '/img/services/accommodation.jpg',  alt: 'Accommodation in Laos' },
  { icon: '🎫', img: '/img/services/ticketing.jpeg',     alt: 'Ticketing services' },
  { icon: '🚐', img: '/img/services/transportation.png', alt: 'Transportation in Laos' },
]

export default function Services() {
  const t = useTranslations('services')
  const items = t.raw('items') as Array<{ title: string; desc: string }>

  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>

        <div className={styles.header}>
          <div className={styles.eyebrow}>{t('eyebrow')}</div>
          <h2 className={styles.title}>
            {t('titleLine1')} <em>{t('titleLine2')}</em>
          </h2>
          <p className={styles.intro}>{t('intro')}</p>
        </div>

        <ul className={styles.grid}>
          {items.map((item, i) => (
            <li key={item.title} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image
                  src={serviceAssets[i].img}
                  alt={serviceAssets[i].alt}
                  fill
                  className={styles.img}
                  sizes="(max-width: 860px) 90vw, 33vw"
                />
                <div className={styles.imgOverlay} />
              </div>
              <div className={styles.cardBody}>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <div className={styles.cardRule} />
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
