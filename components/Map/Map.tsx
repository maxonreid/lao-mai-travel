import { useTranslations } from 'next-intl'
import { CONTACT } from '@/lib/contact'
import styles from './Map.module.css'

export default function Map() {
  const t = useTranslations('map')

  return (
    <section className={styles.section}>

      <div className={styles.info}>
        <div className={styles.eyebrow}>{t('eyebrow')}</div>
        <h2 className={styles.title}>{t('titlePrefix')} <em>{t('titleEm')}</em></h2>
        <div className={styles.details}>
          <div className={styles.item}>
            <span>📍</span>
            <span>{t('address')}</span>
          </div>
          <div className={styles.item}>
            <span>📞</span>
            <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phone}</a>
          </div>
          <div className={styles.item}>
            <span>✉</span>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
          <div className={styles.item}>
            <span>🕐</span>
            <span>{t('hours')}</span>
          </div>
        </div>
        <a
          href="https://maps.app.goo.gl/632LB8BxXL5WaVKb9"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.directions}
        >
          {t('directions')}
        </a>
      </div>

      <div className={styles.mapWrap}>
        <iframe
          src="https://maps.google.com/maps?q=18.029567,102.513433&z=17&output=embed"
          title="Lao Mai Travel office location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.iframe}
        />
      </div>

    </section>
  )
}
