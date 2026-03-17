import { useTranslations } from 'next-intl'
import Nav    from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import styles from './terms.module.css'

type Subsection = {
  subtitle: string
  text: string
}

type TableRow = {
  when: string
  charge: string
}

type Section = {
  title: string
  text?: string
  list?: string[]
  note?: string
  subsections?: Subsection[]
  table?: TableRow[]
}

export default function TermsPage() {
  const t = useTranslations('terms')
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
                  <p className={styles.text}>{sub.text}</p>
                </div>
              ))}

              {s.table && (
                <div className={styles.tableWrap}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>{t('tableHeaderTiming')}</th>
                        <th>{t('tableHeaderCharge')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.map((row) => (
                        <tr key={row.when}>
                          <td>{row.when}</td>
                          <td>{row.charge}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {s.list && (
                <ul className={styles.list}>
                  {s.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}

              {s.note && <p className={styles.note}>{s.note}</p>}
            </div>
          ))}

          {/* Acceptance */}
          <div className={styles.acceptance}>
            <div className={styles.acceptanceTitle}>{t('acceptanceTitle')}</div>
            <p>{t('acceptanceBody')}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
