import Nav    from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import styles from './terms.module.css'

const sections = [
  {
    title: '1. Booking Procedure',
    list: [
      'A 50% non-refundable deposit is required to confirm a tour booking.',
      'Upon receipt of the deposit, we will issue a written booking confirmation and payment receipt.',
      'Bookings are considered confirmed only after payment has been received.',
      'The remaining balance must be paid no later than 30 days prior to the start date.',
    ],
  },
  {
    title: '2. Payment Terms',
    list: [
      'All rates are quoted in US Dollars (USD) unless otherwise specified.',
      'Prices are quoted net and inclusive of applicable VAT.',
      'Lao Mai Travel reserves the right to adjust prices without prior notice in the event of changes in government taxes, fees, or regulations in Lao PDR.',
      'Payments may be made via bank transfer, cash, or other agreed methods.',
    ],
  },
  {
    title: '3. Price and Product Accuracy',
    list: [
      'Lao Mai Travel strives to ensure accuracy in pricing and service descriptions.',
      'Final rates are confirmed at the time of payment. Any changes resulting from external factors (such as taxes, fees, or transportation costs) will be communicated promptly.',
    ],
  },
  {
    title: '4. Child Policy',
    list: [
      'Children under 10 years old: 25% discount on tour services only.',
      'Children aged 10 years and above: Full adult rate applies.',
      'Accommodation policies for children may vary depending on the hotel.',
    ],
  },
  {
    title: '5. Cancellation Policy',
    note: 'All cancellations must be made in writing and acknowledged by Lao Mai Travel.',
    table: [
      { when: 'Less than 30 days before departure', charge: '50% of total tour cost (100% for hotel bookings)' },
      { when: 'Less than 7 days before departure',  charge: '100% of total tour cost including hotels' },
      { when: 'No-show',                            charge: '100% of all services charged' },
    ],
  },
  {
    title: '6. Travel Insurance',
    text: 'Tour prices do not include travel insurance. We strongly recommend that all travelers obtain comprehensive travel insurance covering:',
    list: [
      'Medical expenses',
      'Emergency evacuation',
      'Trip cancellation or interruption',
      'Travel delays',
      'Loss of personal belongings',
    ],
    note: 'By participating in the tour, clients acknowledge and accept the inherent risks associated with travel and agree that Lao Mai Travel shall not be held liable for incidents beyond its control.',
  },
  {
    title: '7. Complaints and Dispute Resolution',
    subsections: [
      {
        subtitle: 'Immediate Reporting',
        text: 'If you encounter any issues during your trip, please notify us immediately via our emergency contact number or your assigned travel specialist. We will make every effort to resolve the matter promptly.',
      },
      {
        subtitle: 'Post-Trip Complaints',
        text: 'Formal complaints must be submitted in writing within 7 days after completion of the trip.',
      },
    ],
  },
  {
    title: '8. Third-Party Suppliers',
    text: 'Lao Mai Travel collaborates with carefully selected third-party providers, including:',
    list: [
      'Hotels and accommodation providers',
      'Airlines and train operators',
      'Boat and transportation services',
      'Local guides and activity providers',
      'Restaurants and other service suppliers',
    ],
    note: 'While we strive to work with reliable partners, they operate under their own terms and conditions. Lao Mai Travel is not liable for their acts, errors, omissions, delays, or service disruptions. In the event of supplier changes or disruptions, we will endeavour to arrange suitable alternatives but cannot guarantee identical services or be responsible for additional costs incurred.',
  },
  {
    title: '9. Force Majeure',
    text: 'In rare cases of unforeseen circumstances beyond our control — such as severe weather, natural disasters, political unrest, epidemics, or transportation disruptions — Lao Mai Travel may:',
    list: [
      'Offer adjusted travel dates or suitable alternatives',
      'Communicate any additional costs transparently',
    ],
    note: 'While we will make every effort to minimise disruptions, we cannot be held responsible for non-refundable expenses or losses resulting from such events. Travel insurance is strongly recommended.',
  },
  {
    title: '10. Personal Data Protection',
    list: [
      'Your privacy is important to us. All personal information collected is stored securely and used solely for the purpose of arranging and delivering travel services.',
      'Clients may opt out of marketing communications at any time.',
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.eyebrow}>LEGAL</div>
          <h1 className={styles.title}>Terms &amp; <em>Conditions</em></h1>
          <p className={styles.subtitle}>
            Lao Mai Travel and Car Rental Service Sole Co., Ltd. These terms outline our
            mutual responsibilities and are designed to ensure a smooth and enjoyable
            journey for all travellers. By booking our services, you agree to the following terms.
          </p>
        </div>

        <div className={styles.content}>
          {sections.map((s) => (
            <div key={s.title} className={styles.section}>
              <h2 className={styles.sectionTitle}>{s.title}</h2>

              {'text' in s && s.text && <p className={styles.text}>{s.text}</p>}

              {'subsections' in s && s.subsections && s.subsections.map((sub) => (
                <div key={sub.subtitle} className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{sub.subtitle}</h3>
                  <p className={styles.text}>{sub.text}</p>
                </div>
              ))}

              {'table' in s && s.table && (
                <div className={styles.tableWrap}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Timing</th>
                        <th>Cancellation Charge</th>
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

          {/* Acceptance */}
          <div className={styles.acceptance}>
            <div className={styles.acceptanceTitle}>Acceptance of Terms</div>
            <p>
              By booking with Lao Mai Travel, you confirm that you have read, understood,
              and agreed to these Terms &amp; Conditions. For any questions or assistance,
              please <a href="#contact">contact us</a> — we are committed to ensuring your
              travel experience is smooth, safe, and memorable.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
