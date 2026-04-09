import Image from 'next/image'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Nav    from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import FounderCard from '@/components/FounderCard/FounderCard'
import { CONTACT } from '@/lib/contact'
import styles from './company-profile.module.css'

type ServiceGroup = { title: string; items: string[] }

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const titles: Record<string, string> = {
    en: 'Company Profile — Lao Mai Travel and Car Rental Service Sole Co., Ltd.',
    th: 'โปรไฟล์บริษัท — บริษัท ลาว เมย์ ทราเวล แอนด์ คาร์ เรนทัล เซอร์วิส จำกัด',
  }
  return {
    title: titles[locale] ?? titles.en,
    alternates: {
      canonical: `https://laomaitravel.com/${locale}/company-profile`,
      languages: {
        en: 'https://laomaitravel.com/en/company-profile',
        th: 'https://laomaitravel.com/th/company-profile',
      },
    },
  }
}

export default function CompanyProfilePage() {
  const t = useTranslations('companyProfile')
  const serviceGroups = t.raw('serviceGroups') as ServiceGroup[]

  return (
    <>
      <Nav />
      <main className={styles.main}>

        {/* ── Hero ── */}
        <div className={styles.hero}>
          <Image
            src="/img/destinations/bolaven-plateau/bolaven-plateau-trail.jpg"
            alt="Bolaven Plateau trail — Laos"
            fill
            priority
            className={styles.heroImg}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>{t('eyebrow')}</div>
            <h1 className={styles.title}>
              {t('titleLine1')} <em>{t('titleLine2')}</em>
            </h1>
            <p className={styles.companyFull}>{t('companyFull')}</p>
            <p className={styles.subtitle}>{t('subtitle')}</p>
          </div>
        </div>

        <div className={styles.content}>

          {/* ── About Us + Founder ── */}
          <section className={styles.aboutSection}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>{t('aboutTitle')}</h2>
              <p className={styles.text}>{t('aboutBody')}</p>

              <h2 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>{t('teamTitle')}</h2>
              <p className={styles.text}>{t('founderBio')}</p>
            </div>

            {/* FOnuder Card Picture */}
            {/* <FounderCard variant="full" name={t('founderName')} role={t('founderRole')} /> */}

          </section>

          {/* ── Photo Strip ── */}
          <div className={styles.photoStrip}>
            {[
              { src: '/img/tourpackages/hidden-tribes-of-northern-phongsaly/2-young-women.jpeg', alt: 'Local women in northern Phongsaly' },
              { src: '/img/tourpackages/wild-thrill-trails-camping-&-homestay/tourists-with-villager-women.jpeg', alt: 'Tourists with village women' },
              { src: '/img/tourpackages/discover-the-hidden-villages-of-oudomxay-akha-&-hmong-day-tour/group-trekking.jpeg', alt: 'Group trekking in Oudomxay' },
              { src: '/img/tourpackages/hidden-legacy-houaphanh/caves-entrance-sunlight.jpg', alt: 'Cave entrance in Houaphanh' },
            ].map(({ src, alt }) => (
              <div key={src} className={styles.photoCell}>
                <Image src={src} alt={alt} fill className={styles.photoImg} sizes="(max-width: 600px) 50vw, 25vw" />
              </div>
            ))}
          </div>

          {/* ── Mission & Vision ── */}
          <section className={styles.mvSection}>
            <div className={styles.mvCard}>
              <div className={styles.mvLabel}>{t('missionTitle')}</div>
              <p className={styles.mvText}>{t('missionBody')}</p>
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvLabel}>{t('visionTitle')}</div>
              <p className={styles.mvText}>{t('visionBody')}</p>
            </div>
          </section>

          {/* ── Services ── */}
          <section className={styles.servicesSection}>
            <h2 className={styles.sectionTitle}>{t('servicesTitle')}</h2>

            <div className={styles.serviceImgRow}>
              {[
                { src: '/img/services/accommodation.jpg', label: 'Accommodation' },
                { src: '/img/services/ticketing.jpeg', label: 'Ticketing' },
                { src: '/img/services/transportation.jpeg', label: 'Transportation' },
              ].map(({ src, label }) => (
                <div key={label} className={styles.serviceImgCell}>
                  <div className={styles.serviceImgWrap}>
                    <Image src={src} alt={label} fill className={styles.serviceImg} sizes="(max-width: 600px) 100vw, 33vw" />
                  </div>
                  <span className={styles.serviceImgLabel}>{label}</span>
                </div>
              ))}
            </div>

            <div className={styles.serviceGrid}>
              {serviceGroups.map((group, i) => (
                <div key={group.title} className={styles.serviceGroup}>
                  <div className={styles.serviceNum}>0{i + 1}</div>
                  <div className={styles.serviceGroupTitle}>{group.title}</div>
                  <ul className={styles.serviceList}>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ── Tagline ── */}
          <div className={styles.taglineBox}>
            <p className={styles.tagline}>{t('tagline')}</p>
          </div>

          {/* ── Contact ── */}
          <section className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>{t('contactTitle')}</h2>
            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <span>📍</span><span>{t('address')}</span>
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
            <div className={styles.directorCard}>
              <span className={styles.directorName}>{t('contactName')}</span>
              <span className={styles.directorRole}>{t('contactRole')}</span>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
