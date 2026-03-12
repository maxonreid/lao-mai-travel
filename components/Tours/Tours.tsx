import styles from './Tours.module.css'

const tours = [
  {
    icon: '🏯',
    duration: 'HALF DAY · FULL DAY',
    name: 'Day Tours',
    desc: "Perfect introductions to Laos. Explore Vientiane's golden temples, riverside markets, and hidden local gems with an expert guide by your side.",
    price: 'From $35',
    unit: '/ person',
  },
  {
    icon: '🌄',
    duration: '2 DAYS · 1 NIGHT',
    name: 'Weekend Escapes',
    desc: 'Venture deeper — into the limestone caves of Vang Vieng or the sacred Buddha Park. A perfect weekend adventure with curated accommodation.',
    price: 'From $120',
    unit: '/ person',
  },
  {
    icon: '✦',
    duration: '5–14 DAYS',
    name: 'Grand Laos Tours',
    desc: 'The complete Laos experience — north to south, river to plateau. Bespoke itineraries tailored to your pace, interests, and sense of adventure.',
    price: 'From $450',
    unit: '/ person',
  },
]

export default function Tours() {
  return (
    <section className={styles.section} id="tours">
      <div className={styles.eyebrow}>CURATED EXPERIENCES</div>
      <h2 className={styles.title}>
        Our <em>Tour Packages</em>
      </h2>

      <div className={styles.grid}>
        {tours.map((t) => (
          <div key={t.name} className={styles.card}>
            <span className={styles.icon}>{t.icon}</span>
            <span className={styles.duration}>{t.duration}</span>
            <div className={styles.name}>{t.name}</div>
            <p className={styles.desc}>{t.desc}</p>
            <div className={styles.price}>
              {t.price} <span>{t.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
