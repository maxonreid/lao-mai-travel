import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { CONTACT } from '@/lib/contact'
import styles from './Footer.module.css'

export default function Footer() {
  const t = useTranslations('footer')
  const destinations = t.raw('destinations') as string[]
  const tours = t.raw('tours') as string[]

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>

        {/* Brand */}
        <div>
          <div className={styles.brandName}>{t('brandName')}</div>
          <span className={styles.brandSub}>{t('brandSub')}</span>
          <p className={styles.desc}>{t('desc')}</p>
          <div className={styles.socials}>
            {['f', 'ig', 'wa', 'ta'].map((s) => (
              <a key={s} href="#" className={styles.social}>{s}</a>
            ))}
          </div>
        </div>

        {/* Destinations */}
        <div>
          <div className={styles.colTitle}>{t('destinationsTitle')}</div>
          <ul className={styles.links}>
            {destinations.map((d) => (
              <li key={d}><a href="#" className={styles.link}>{d}</a></li>
            ))}
          </ul>
        </div>

        {/* Tours */}
        <div>
          <div className={styles.colTitle}>{t('toursTitle')}</div>
          <ul className={styles.links}>
            {tours.map((tour) => (
              <li key={tour}><a href="#" className={styles.link}>{tour}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className={styles.colTitle}>{t('contactTitle')}</div>
          <div className={styles.contactItem}><span>📍</span><span>{t('address')}</span></div>
          <div className={styles.contactItem}><span>📞</span><a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phone}</a></div>
          <div className={styles.contactItem}><span>✉</span><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
          <div className={styles.contactItem}><span>🕐</span><span>{t('hours')}</span></div>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>{t('copyright', { year: new Date().getFullYear() })}</p>
        <div className={styles.bottomLinks}>
          <Link href="/privacy">{t('privacy')}</Link>
          <Link href="/terms">{t('terms')}</Link>
        </div>
      </div>
    </footer>
  )
}
