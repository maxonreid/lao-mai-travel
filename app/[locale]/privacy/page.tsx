import Nav    from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import styles from './privacy.module.css'

const sections = [
  {
    title: '1. Information We Collect',
    content: null,
    subsections: [
      {
        subtitle: 'Personal Information',
        text: 'You provide this information voluntarily when making an inquiry or booking. It may include:',
        list: [
          'Full name',
          'Contact details (email, phone, WhatsApp)',
          'Nationality and passport information (when required for bookings)',
          'Travel dates and preferences',
          'Payment information',
        ],
      },
      {
        subtitle: 'Website Usage Information',
        text: 'When you visit our website, we may collect general data such as:',
        list: [
          'Pages viewed',
          'Time spent on the site',
          'Browser or device type',
          'Cookies and usage data',
        ],
        note: 'This information does not personally identify you and is used to improve our website.',
      },
    ],
  },
  {
    title: '2. How We Use Your Information',
    text: 'The information we collect is used only for the following purposes:',
    list: [
      'To process bookings, secure accommodation, and arrange travel itineraries',
      'Booking accommodation, transport, and activities',
      'To send promotional offers, newsletters, and updates about our services (with your consent)',
      'Communicating with you before and during your trip',
      'Meeting legal or regulatory requirements and ensuring the safety of our clients',
    ],
    note: 'We do not sell or rent your personal information.',
  },
  {
    title: '3. Sharing Your Information',
    text: 'We respect your privacy and only share your information when necessary:',
    list: [
      'Hotels and accommodation providers',
      'Transport companies (airlines, trains, etc.)',
      'Local guides and activity providers',
      'Government authorities (for permits or immigration)',
    ],
    note: 'These partners are required to use your information only for service purposes.',
  },
  {
    title: '4. External Websites',
    text: 'Our website may contain links to third-party websites. Lao Mai Travel is not responsible for the privacy practices or content of those sites.',
  },
  {
    title: '5. Cookies',
    text: 'We may use cookies to improve your browsing experience and analyse website traffic. You can disable cookies in your browser settings if you prefer.',
  },
  {
    title: '6. Data Protection',
    text: 'We take data security seriously and implement measures to protect your personal information:',
    list: [
      'Encryption — Sensitive data such as payment details is encrypted during transmission.',
      'Access Control — Only authorised personnel have access to your personal information.',
      'Regular Audits — We conduct regular security reviews to safeguard your data.',
    ],
  },
  {
    title: '7. Legal Requirements',
    text: 'We may disclose personal information if required by law, legal process, or government authorities, or to protect the rights and safety of our company and clients.',
  },
  {
    title: '8. Your Rights',
    text: 'You may request to:',
    list: [
      'Access the personal information we hold about you',
      'Correct inaccurate information',
      'Withdraw consent for marketing communications',
      'Request deletion of your data where permitted by law',
    ],
  },
  {
    title: '9. Changes to This Policy',
    text: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page.',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.eyebrow}>LEGAL</div>
          <h1 className={styles.title}>Privacy <em>Policy</em></h1>
          <p className={styles.subtitle}>
            Lao Mai Travel values your privacy and is committed to protecting your personal
            information. By using our website or booking with us, you agree to this policy.
          </p>
        </div>

        <div className={styles.content}>
          {sections.map((s) => (
            <div key={s.title} className={styles.section}>
              <h2 className={styles.sectionTitle}>{s.title}</h2>

              {s.text && <p className={styles.text}>{s.text}</p>}

              {'subsections' in s && s.subsections && s.subsections.map((sub) => (
                <div key={sub.subtitle} className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{sub.subtitle}</h3>
                  {sub.text && <p className={styles.text}>{sub.text}</p>}
                  <ul className={styles.list}>
                    {sub.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  {'note' in sub && sub.note && (
                    <p className={styles.note}>{sub.note}</p>
                  )}
                </div>
              ))}

              {'list' in s && s.list && (
                <ul className={styles.list}>
                  {s.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}

              {'note' in s && s.note && (
                <p className={styles.note}>{s.note}</p>
              )}
            </div>
          ))}

          {/* Contact section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Contact Us</h2>
            <p className={styles.text}>
              If you have any questions or requests regarding this Privacy Policy or your
              personal data, please contact:
            </p>
            <div className={styles.contactBlock}>
              <div className={styles.contactName}>Lao Mai Travel</div>
              <div className={styles.contactItem}>
                <span>📍</span>
                <span>Ban Viengkham, Sikhottabong District, Vientiane Capital</span>
              </div>
              <div className={styles.contactItem}>
                <span>📞</span>
                <a href="tel:+85620786906388">+856 20 7869 0388</a>
              </div>
              <div className={styles.contactItem}>
                <span>✉</span>
                <a href="mailto:info@laomaitravel.com">info@laomaitravel.com</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
