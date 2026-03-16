import Link from 'next/link'
import styles from './Footer.module.css'

const destinations = ['Vientiane', 'Luang Prabang', 'Vang Vieng', 'Bolaven Plateau', '4,000 Islands']
const tours        = ['Day Tours', '2-Day Tours', 'Grand Laos Tours', 'Custom Itineraries', 'Group Tours']

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>

        {/* Brand */}
        <div>
          <div className={styles.brandName}>LAO MAI TRAVEL</div>
          <span className={styles.brandSub}>YOUR TRUSTED LOCAL TRAVEL PARTNER LAOS</span>
          <p className={styles.desc}>
            Crafting authentic Laos experiences since 2017. Local expertise,
            world-class service, responsible travel.
          </p>
          <div className={styles.socials}>
            {['f', 'ig', 'wa', 'ta'].map((s) => (
              <a key={s} href="#" className={styles.social}>{s}</a>
            ))}
          </div>
        </div>

        {/* Destinations */}
        <div>
          <div className={styles.colTitle}>DESTINATIONS</div>
          <ul className={styles.links}>
            {destinations.map((d) => (
              <li key={d}><a href="#" className={styles.link}>{d}</a></li>
            ))}
          </ul>
        </div>

        {/* Tours */}
        <div>
          <div className={styles.colTitle}>TOURS</div>
          <ul className={styles.links}>
            {tours.map((t) => (
              <li key={t}><a href="#" className={styles.link}>{t}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className={styles.colTitle}>CONTACT</div>
          <div className={styles.contactItem}><span>📍</span><span>Ban Viengkham, Sikhottabong District, Vientiane Capital</span></div>
          <div className={styles.contactItem}><span>📞</span><a href="tel:+85620786906388">+856 20 7869 0388</a></div>
          <div className={styles.contactItem}><span>✉</span><a href="mailto:info@laomaitravel.com">info@laomaitravel.com</a></div>
          <div className={styles.contactItem}><span>🕐</span><span>Mon–Sat · 8:00–18:00</span></div>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Lao Mai Travel. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <Link href="/privacy">Privacy Policy</Link>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
