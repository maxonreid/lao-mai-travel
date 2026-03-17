import Image from 'next/image'
import { useTranslations } from 'next-intl'
import styles from './Testimonial.module.css'

export default function Testimonial() {
  const t = useTranslations('testimonial')

  return (
    <div className={styles.section}>
      <div className={styles.bgLandscape} />
      <div className={styles.quoteBg}>&ldquo;</div>

      <div className={styles.inner}>
        <div className={styles.divider}><div className={styles.diamond} /></div>
        <div className={styles.stars}>★★★★★</div>
        <p className={styles.text}>&ldquo;{t('quote')}&rdquo;</p>
        <div className={styles.authorWrap}>
          <div className={styles.authorImage}>
            <Image
              src="/img/testimonials/maximiliano-brito-torres.jpeg"
              alt="Maximiliano Brito Torrres"
              fill
              className={styles.avatar}
              sizes="(max-width: 640px) 88px, 104px"
            />
          </div>
          <div className={styles.author}>{t('author')}</div>
        </div>
        <div className={styles.divider}><div className={styles.diamond} /></div>
      </div>
    </div>
  )
}
