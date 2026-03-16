import ImageWithSkeleton from '@/components/ImageWithSkeleton/ImageWithSkeleton'
import styles from './Destinations.module.css'

const destinations = [
  {
    name: 'Vientiane',
    tag: 'CAPITAL CITY · TEMPLES · MEKONG',
    img: 'https://images.unsplash.com/photo-1704212685546-3086abc1e6a1?w=900&q=80',
    featured: true,
  },
  {
    name: 'Luang Prabang',
    tag: 'UNESCO HERITAGE',
    img: 'https://images.unsplash.com/photo-1737037344843-7f6d4867d648?w=600&q=80',
  },
  {
    name: 'Vang Vieng',
    tag: 'KARST MOUNTAINS',
    img: 'https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=600&q=80',
  },
  {
    name: 'Bolaven Plateau',
    tag: 'COFFEE · WATERFALLS',
    img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
  },
  {
    name: '4,000 Islands',
    tag: 'MEKONG DELTA',
    img: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80',
  },
]

export default function Destinations() {
  return (
    <section className={styles.section} id="destinations">
      <div className={styles.intro}>
        <div>
          <div className={styles.eyebrow}>EXPLORE LAOS</div>
          <h2 className={styles.title}>
            Extraordinary<br /><em>Destinations</em>
          </h2>
        </div>
        <p className={styles.desc}>
          Laos holds some of Southeast Asia's most unspoiled landscapes and ancient heritage.
          Our local guides take you beyond the postcard — into village life, sacred temples,
          and cascading jungle waterfalls few travelers ever find.
        </p>
      </div>

      <div className={styles.grid}>
        {destinations.map((d) => (
          <div
            key={d.name}
            className={`${styles.card} ${d.featured ? styles.cardFeatured : ''}`}
          >
            <ImageWithSkeleton
              src={d.img}
              alt={d.name}
              fill
              className={styles.cardImg}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.cardOverlay} />
            <div className={styles.cardContent}>
              <div className={styles.cardName}>{d.name}</div>
              <div className={styles.cardTag}>{d.tag}</div>
            </div>
            <div className={styles.cardArrow}>→</div>
          </div>
        ))}
      </div>
    </section>
  )
}
