import styles from './Map.module.css'

export default function Map() {
  return (
    <section className={styles.section}>

      <div className={styles.info}>
        <div className={styles.eyebrow}>FIND US</div>
        <h2 className={styles.title}>Our <em>Office</em></h2>
        <div className={styles.details}>
          <div className={styles.item}>
            <span>📍</span>
            <span>Ban Viengkham, Sikhottabong District,<br />Vientiane Capital, Lao PDR</span>
          </div>
          <div className={styles.item}>
            <span>📞</span>
            <a href="tel:+85620786906388">+856 20 7869 0388</a>
          </div>
          <div className={styles.item}>
            <span>✉</span>
            <a href="mailto:info@laomaitravel.com">info@laomaitravel.com</a>
          </div>
          <div className={styles.item}>
            <span>🕐</span>
            <span>Mon – Sat &nbsp;·&nbsp; 08:00 – 18:00</span>
          </div>
        </div>
        <a
          href="https://maps.app.goo.gl/632LB8BxXL5WaVKb9"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.directions}
        >
          Get Directions →
        </a>
      </div>

      <div className={styles.mapWrap}>
        <iframe
          src="https://maps.google.com/maps?q=18.029567,102.513433&z=17&output=embed"
          title="Lao Mai Travel office location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.iframe}
        />
      </div>

    </section>
  )
}
