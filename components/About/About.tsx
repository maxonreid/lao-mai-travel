import Image from 'next/image'
import styles from './About.module.css'

const features = [
  {
    icon: '🧭',
    title: 'EXPERT LOCAL GUIDES',
    desc: 'All guides are certified, locally born, and speak English and Lao fluently. They know the stories behind every stone.',
  },
  {
    icon: '✦',
    title: 'TAILORED ITINERARIES',
    desc: 'Every journey is crafted around your pace, interests, and travel style — never a cookie-cutter group tour.',
  },
  {
    icon: '🌿',
    title: 'RESPONSIBLE TRAVEL',
    desc: 'We partner with local communities, support sustainable practices, and ensure your visit creates a positive impact.',
  },
]

export default function About() {
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
          <div className={styles.imgAccent}>
            <Image
              src="https://images.unsplash.com/photo-1441632260885-881646a7fd4d?w=400&q=80"
              alt="Laos landscape"
              fill
              className={styles.img}
              sizes="25vw"
            />
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeNum}>8+</span>
            <span className={styles.badgeLabel}>YEARS OF<br />EXCELLENCE</span>
          </div>
        </div>

        {/* Text */}
        <div className={styles.text}>
          <div className={styles.eyebrow}>WHO WE ARE</div>
          <h2 className={styles.title}>
            Local Knowledge,<br /><em>World-Class</em> Service
          </h2>
          <p className={styles.body}>
            Lao Mai Travel was founded by Lath and Mai with a single belief: the best way to
            experience Laos is through the eyes of someone who grew up here. We don't just
            show you the sights — we share our home.
          </p>
          <ul className={styles.features}>
            {features.map((f) => (
              <li key={f.title} className={styles.feature}>
                <div className={styles.featureIcon}>{f.icon}</div>
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
