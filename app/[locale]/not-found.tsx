import Image              from 'next/image'
import { useTranslations } from 'next-intl'
import { Link }            from '@/i18n/navigation'
import Nav                 from '@/components/Nav/Nav'
import styles              from './not-found.module.css'

export default function NotFoundPage() {
  const t = useTranslations('notFound')

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.bg}>
          <Image
            src="/img/not-found/nam-ha-national-protected-area.jpeg"
            alt={t('imageAlt')}
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className={styles.content}>
          <div className={styles.eyebrow}>{t('eyebrow')}</div>
          <h1 className={styles.title}>
            {t('titleLine1')} <em>{t('titleLine2')}</em>
          </h1>
          <p className={styles.subtitle}>{t('subtitle')}</p>
          <p className={styles.body}>{t('body')}</p>
          <Link href="/" className={styles.cta}>
            {t('cta')}
          </Link>
        </div>
      </main>
    </>
  )
}
