import { useTranslations } from 'next-intl'
import styles from './Hero.module.css'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section className={styles.hero} aria-label="Hero section">
      <div className={styles.heroBg} role="presentation" />

      <div className={styles.content}>
        <p className={styles.eyebrow}>{t('eyebrow')}</p>

        <h1 className={styles.title}>
          {t('titleLine1')}<br />
          <em>{t('titleLine2')}</em>
        </h1>

        <p className={styles.subtitle}>{t('subtitle')}</p>

        <p className={styles.body}>{t('body')}</p>

        <nav className={styles.actions} aria-label="Primary actions">
          <a href="#packages" className={styles.btnPrimary}>{t('exploreTours')}</a>
          <a href="#contact" className={styles.btnGhost}>{t('planTrip')}</a>
        </nav>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span className={styles.scrollLabel}>{t('scroll')}</span>
      </div>
    </section>
  )
}
