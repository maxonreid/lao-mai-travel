import Image from 'next/image'
import styles from './FounderCard.module.css'

interface Props {
  variant: 'compact' | 'full'
  name?: string
  role?: string
}

export default function FounderCard({
  variant,
  name = 'Latsamy SENGPHOMMACHANH',
  role = 'Founder & Managing Director',
}: Props) {
  if (variant === 'compact') {
    return (
      <div className={styles.compact}>
        <Image
          src="/img/about/mr-lath-founder.jpeg"
          alt="Founder Mr. Lath"
          fill
          className={styles.img}
          sizes="(max-width: 640px) 45vw, 180px"
        />
        <span className={styles.founderLabel}>{name} · Founder</span>
      </div>
    )
  }

  return (
    <div className={styles.full}>
      <div className={styles.imgWrap}>
        <Image
          src="/img/about/mr-lath-founder.jpeg"
          alt="Latsamy SENGPHOMMACHANH — Founder & Managing Director"
          fill
          className={styles.img}
          sizes="(max-width: 768px) 80vw, 300px"
        />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.role}>{role}</span>
      </div>
    </div>
  )
}
