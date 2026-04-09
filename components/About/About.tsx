import Image from 'next/image'
import { useTranslations } from 'next-intl'
import styles from './About.module.css'
import FounderCard from '@/components/FounderCard/FounderCard'

const featureIcons = ['🧭', '✦', '🌿']

export default function About() {
  const t = useTranslations('about')
  const features = t.raw('features') as Array<{ title: string; desc: string }>

  return (
    <section className={styles.section} id="about">
      <div className={styles.bgLandscape} />

      <div className={styles.inner}>
        {/* Images */}
        <div className={styles.imgWrap}>
          <div className={styles.imgMain}>
            <Image
              src="https://images.unsplash.com/photo-1723622688505-3efc54d4dbae?w=700&q=80"
              alt="Laos temple"
              fill
              className={styles.img}
              sizes="40vw"
            />
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeNum}>{t('badgeNum')}</span>
            <span className={styles.badgeLabel}>
              {t('badgeLabel').split('\n').map((line, i) => (
                <span key={i}>{i > 0 && <br />}{line}</span>
              ))}
            </span>
          </div>
        </div>

        {/* Text */}
        <div className={styles.text}>
          <div className={styles.eyebrow}>{t('eyebrow')}</div>
          <div className={styles.titleWrap}>
            <h2 className={styles.title}>
              {t('titleLine1')}<br /><em>{t('titleLine2')}</em>
            </h2>

              {/* Founder picture */}
            {/* <div className={styles.imgAccent}>
              <FounderCard variant="compact" />
            </div> */}

          </div>
          <p className={styles.body}>{t('body')}</p>
          <ul className={styles.features}>
            {features.map((f, i) => (
              <li key={f.title} className={styles.feature}>
                <div className={styles.featureIcon}>{featureIcons[i]}</div>
                <div>
                  <div className={styles.featureTitle}>{f.title}</div>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
