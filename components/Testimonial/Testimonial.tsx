import styles from './Testimonial.module.css'

export default function Testimonial() {
  return (
    <div className={styles.section}>
      <div className={styles.bgLandscape} />
      <div className={styles.quoteBg}>&ldquo;</div>

      <div className={styles.inner}>
        <div className={styles.divider}><div className={styles.diamond} /></div>
        <div className={styles.stars}>★★★★★</div>
        <p className={styles.text}>
          &ldquo;Lao Mai Travel gave us an experience beyond anything we expected. Our guide&apos;s
          knowledge was extraordinary — every day felt like a private discovery.
          This is how Laos should be seen.&rdquo;
        </p>
        <div className={styles.author}>SOPHIE &amp; MARC DUBOIS · PARIS, FRANCE</div>
        <div className={styles.divider}><div className={styles.diamond} /></div>
      </div>
    </div>
  )
}
