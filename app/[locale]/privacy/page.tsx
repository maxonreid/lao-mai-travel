import { useTranslations } from 'next-intl'
import Nav    from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import { CONTACT } from '@/lib/contact'
import styles from './privacy.module.css'

type Subsection = {
  subtitle: string
  text: string
  list?: string[]
  note?: string
}

type Section = {
  title: string
  text?: string
  list?: string[]
  note?: string
  subsections?: Subsection[]
}

export default function PrivacyPage() {
  const t = useTranslations('privacy')
  const sections = t.raw('sections') as Section[]

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.eyebrow}>{t('eyebrow')}</div>
          <h1 className={styles.title}>{t('titleLine1')} <em>{t('titleLine2')}</em></h1>
          <p className={styles.subtitle}>{t('subtitle')}</p>
        </div>

        <div className={styles.content}>
          {sections.map((s) => (
            <div key={s.title} className={styles.section}>
              <h2 className={styles.sectionTitle}>{s.title}</h2>

              {s.text && <p className={styles.text}>{s.text}</p>}

              {s.subsections && s.subsections.map((sub) => (
                <div key={sub.subtitle} className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{sub.subtitle}</h3>
                  {sub.text && <p className={styles.text}>{sub.text}</p>}
                  {sub.list && (
                    <ul className={styles.list}>
                      {sub.list.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                  {sub.note && <p className={styles.note}>{sub.note}</p>}
                </div>
              ))}

              {s.list && (
                <ul className={styles.list}>
                  {s.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}

              {s.note && <p className={styles.note}>{s.note}</p>}
            </div>
          ))}

          {/* Contact section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('contactSectionTitle')}</h2>
            <p className={styles.text}>{t('contactSectionIntro')}</p>
            <div className={styles.contactBlock}>
              <div className={styles.contactName}>{t('contactName')}</div>
              <div className={styles.contactItem}>
                <span>📍</span>
                <span>{t('contactAddress')}</span>
              </div>
              <div className={styles.contactItem}>
                <span>📞</span>
                <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phone}</a>
              </div>
              <div className={styles.contactItem}>
                <span>✉</span>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
