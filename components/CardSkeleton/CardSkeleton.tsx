import styles from './CardSkeleton.module.css'

interface CardSkeletonProps {
  count?: number
  variant?: 'destination' | 'tour' | 'testimonial'
}

export default function CardSkeleton({ count = 3, variant = 'tour' }: CardSkeletonProps) {
  return (
    <div className={styles.grid}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`${styles.card} ${styles[variant]}`}>
          <div className={styles.imageSkeleton} />
          <div className={styles.content}>
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={`${styles.line} ${styles.short}`} />
          </div>
        </div>
      ))}
    </div>
  )
}
