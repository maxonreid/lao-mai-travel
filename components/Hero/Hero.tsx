import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero section">
      <div className={styles.heroBg} role="presentation" />

      <div className={styles.content}>
        <p className={styles.eyebrow}>VIENTIANE, LAOS</p>

        <h1 className={styles.title}>
          Discover the<br />
          <em>Soul of Laos</em>
        </h1>

        <p className={styles.subtitle}>Authentic journeys, trusted local expertise</p>

        <p className={styles.body}>
          From the golden temples of Vientiane to the misty highlands of the north,
          Lao Mai Travel crafts immersive experiences that connect you with the true
          heart of Laos — its people, landscapes, and living traditions.
        </p>

        <nav className={styles.actions} aria-label="Primary actions">
          <a href="#tours" className={styles.btnPrimary}>EXPLORE TOURS</a>
          <a href="#contact" className={styles.btnGhost}>PLAN YOUR TRIP</a>
        </nav>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span className={styles.scrollLabel}>SCROLL</span>
      </div>
    </section>
  )
}
