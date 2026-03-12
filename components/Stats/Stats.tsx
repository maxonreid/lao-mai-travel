import styles from './Stats.module.css'

const stats = [
  { number: '500+', label: 'HAPPY TRAVELERS' },
  { number: '12+',  label: 'DESTINATIONS' },
  { number: '8',    label: 'YEARS EXPERIENCE' },
  { number: '4.9★', label: 'TRIPADVISOR RATING' },
]

export default function Stats() {
  return (
    <div className={styles.strip}>
      {stats.map((s) => (
        <div key={s.label} className={styles.item}>
          <span className={styles.number}>{s.number}</span>
          <span className={styles.label}>{s.label}</span>
        </div>
      ))}
    </div>
  )
}
