'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './TourPackages.module.css'

type Day = { title: string; body: string }

type Tour = {
  region: string
  province: string
  name: string
  highlight: string
  duration: string
  departure: string
  img: string
  gallery: string[]
  days: Day[]
  includes: string[]
  excludes: string[]
}

const tours: Tour[] = [
  {
    region: 'Northeastern Laos',
    province: 'Huaphanh Province',
    name: 'Hidden Legacy Houaphanh',
    highlight: 'Discover history, ethnic culture, and mountain life in Laos\u2019 remote highlands',
    duration: '3 DAYS \u00B7 2 NIGHTS',
    departure: 'Xam Neua (Sam Neua) — daily flight from Vientiane (11:20\u201312:20)',
    img: '/img/hidden-legacy-houaphanh/caves-entrance-sunlight.jpg',
    gallery: [
      '/img/hidden-legacy-houaphanh/caves-entrance.jpg',
      '/img/hidden-legacy-houaphanh/caves-inside-2-people.webp',
      '/img/hidden-legacy-houaphanh/caves-inside.jpeg',
      '/img/hidden-legacy-houaphanh/monument.jpeg',
    ],
    days: [
      {
        title: 'Day 1 \u2013 Arrival in Xam Neua',
        body: 'Welcome to the remote capital of Houaphanh, a strategic stronghold where future leaders of Laos operated during the Secret War. Today, Xam Neua remains one of the most authentic provincial towns in the country. Overnight in Xam Neua.',
      },
      {
        title: 'Day 2 \u2013 Viengxay: The Underground Capital',
        body: 'Discover the hidden underground capital of Laos at Viengxay Caves, where thousands of people lived inside limestone caves during the Secret War. Explore residences of revolutionary leaders, underground hospitals, meeting rooms, and living quarters — uncovering the remarkable story of resilience that shaped modern Laos. Overnight in Xam Neua.',
      },
      {
        title: 'Day 3 \u2013 Departure back to Vientiane',
        body: 'Leisure time or visit Xam Neua morning market for souvenirs and photography. Reflect on the journey through Houaphanh\u2019s hidden landscapes and cultures before your departure from Sam Neua Airport.',
      },
    ],
    includes: [
      'Accommodation at hotels/homestays as specified',
      'Professional tour guide in selected language',
      'All transportation as stated in the itinerary',
      'Meals from lunch on Day 1 to lunch on the final day',
      'Entrance fees to all sites mentioned',
      'Government tax',
    ],
    excludes: [
      'Gratuities for guide, driver, porter, and hotel staff',
      'Meals not specified in the itinerary',
      'International and domestic airfare',
      'Optional tours and activities',
      'Visa fees and travel insurance',
      'Personal expenses',
    ],
  },
  {
    region: 'Northern Laos',
    province: 'Phongsaly Province',
    name: 'Hidden Tribes of Northern Phongsaly',
    highlight: 'Explore Tai Lue, Akha, Haw, Phounoy, Yao and more across the remote mountains of northern Laos',
    duration: '3 DAYS \u00B7 2 NIGHTS',
    departure: 'Your hotel in Phongsaly Town',
    img: '/img/hidden-tribes-of-northern-phongsaly/2-young-women.jpeg',
    gallery: [
      '/img/hidden-tribes-of-northern-phongsaly/2-old-women.jpeg',
      '/img/hidden-tribes-of-northern-phongsaly/4-older-women.jpeg',
      '/img/hidden-tribes-of-northern-phongsaly/older-woman-1.jpeg',
      '/img/hidden-tribes-of-northern-phongsaly/older-woman-2.jpeg',
      '/img/hidden-tribes-of-northern-phongsaly/older-woman-3.jpeg',
      '/img/hidden-tribes-of-northern-phongsaly/woman-alone.jpeg',
      '/img/hidden-tribes-of-northern-phongsaly/younger-woman-1.jpeg',
      '/img/hidden-tribes-of-northern-phongsaly/younger-woman-2.jpeg',
    ],
    days: [
      {
        title: 'Day 1 \u2013 Phongsaly \u2192 Boun Neua \u2192 Hill Tribe Villages \u2192 Ban Tha',
        body: 'Depart from Phongsaly and drive north toward remote mountainous areas with impressive views. Visit Ban Ngai Neua, a traditional Tai Lue village known for its distinctive wooden houses. Continue to Akha villages including Pang Hok, observing unique customs, and a village shared by Haw (Hor) and Akha communities. Overnight homestay at Ban Tha with a local family.',
      },
      {
        title: 'Day 2 \u2013 Ban Tha \u2192 Ou Tai \u2192 Hill Tribe Villages \u2192 Ou Neua',
        body: 'Continue north through some of the highest mountains in the region. Stop at Yao (Mien) and Kher communities to learn about traditional lifestyles. Enjoy panoramic views over the Yot Ou area before reaching Ou Neua for the night at a local guesthouse.',
      },
      {
        title: 'Day 3 \u2013 Ou Neua \u2192 Tai Neua Villages \u2192 Return to Phongsaly',
        body: 'Explore villages around Ou Neua including Tai Neua ethnic communities. Begin the return journey to Phongsaly, stopping for additional village visits and beautiful northern landscapes. Arrive back in Phongsaly in the late afternoon.',
      },
    ],
    includes: [
      'Accommodation at hotels/homestays/campsites as specified',
      'Professional tour guide in selected language',
      'All transportation as stated in the itinerary',
      'Meals from lunch on Day 1 to lunch on the final day',
      'Entrance fees to all sites mentioned',
      'Government tax',
    ],
    excludes: [
      'Gratuities for guide, driver, porter, and hotel staff',
      'Meals not specified in the itinerary',
      'International airfare',
      'Optional tours and activities',
      'Visa fees and travel insurance',
      'Personal expenses',
    ],
  },
  {
    region: 'Northern Laos',
    province: 'Oudomxay Province',
    name: 'Hidden Villages of Oudomxay \u2013 Akha & Hmong Day Tour',
    highlight: 'Sacred temples, natural hot springs, Akha handicrafts, a French airfield viewpoint, and a remote Hmong mountain village',
    duration: '1 DAY',
    departure: 'Your hotel in Oudomxay Town',
    img: '/img/discover-the-hidden-villages-of-oudomxay-akha-&-hmong-day-tour/group-trekking.jpeg',
    gallery: [
      '/img/discover-the-hidden-villages-of-oudomxay-akha-&-hmong-day-tour/man-trekking.jpeg',
      '/img/discover-the-hidden-villages-of-oudomxay-akha-&-hmong-day-tour/trekking-road-2-buffaloes.jpeg',
      '/img/discover-the-hidden-villages-of-oudomxay-akha-&-hmong-day-tour/woman-trekking.jpeg',
    ],
    days: [
      {
        title: 'Full Day \u2013 Muang La, Akha Village & Hmong Village',
        body: 'Scenic drive to Muang La to visit the sacred Phasingkham Buddha Temple and soak in rejuvenating natural hot springs. Continue to the Akha village of Kok Mai Ngai — walk through the village discovering daily life, traditional textiles, embroidery, and blacksmithing. Take in stunning valley views from the old French airfield. On the return, explore a remote Hmong village perched high in the mountains, step inside a local home (with permission), and enjoy genuine interactions with local families.',
      },
    ],
    includes: [
      'Professional tour guide in selected language',
      'All transportation as stated in the itinerary',
      'Lunch',
      'Entrance fees to all sites mentioned',
      'Government tax',
    ],
    excludes: [
      'Gratuities for guide, driver, porter, and hotel staff',
      'Meals not specified in the itinerary',
      'International airfare',
      'Optional tours and activities',
      'Visa fees and travel insurance',
      'Personal expenses',
    ],
  },
  {
    region: 'Northern Laos',
    province: 'Luang Namtha Province',
    name: 'Wild Thrill Trails \u2013 Camping & Homestay',
    highlight: 'Trek the pristine Nam Ha NPA, camp by the river, and stay in a remote Khmu village across three days of immersive jungle life',
    duration: '3 DAYS \u00B7 2 NIGHTS',
    departure: 'Your hotel in Luang Namtha Town',
    img: '/img/wild-thrill-trails-camping-&-homestay/tourists-with-villager-women.jpeg',
    gallery: [
      '/img/wild-thrill-trails-camping-&-homestay/tourists-outside-village-house.jpeg',
      '/img/wild-thrill-trails-camping-&-homestay/tourists-practicing-crossbow-shooting.jpeg',
      '/img/wild-thrill-trails-camping-&-homestay/village-houses.jpeg',
      '/img/wild-thrill-trails-camping-&-homestay/village-house.jpeg',
      '/img/wild-thrill-trails-camping-&-homestay/village-house-2.jpeg',
      '/img/wild-thrill-trails-camping-&-homestay/bed-inside-village-house.jpeg',
    ],
    days: [
      {
        title: 'Day 1 \u2013 Luang Namtha \u2192 Ban Chaleunsouk \u2192 Wild Banana Camp',
        body: 'Meet your local guide at Ban Chaleunsouk and trek through farmland valleys and up a steep mountain, followed by a scenic ridge walk. Continue through dense canopy forest to reach Wild Banana Camp beside a peaceful river. Enjoy a nearby waterfall for bathing. In the evening, cook traditional Lao food with your guide, with an optional night walk for wildlife spotting.',
      },
      {
        title: 'Day 2 \u2013 Wild Banana Camp \u2192 Remote Khmu Village Homestay',
        body: 'Explore an unfrequented jungle trail once used by hunters. Cross streams and hills through pristine forest with chances to spot wildlife, before arriving at a remote Khmu village. Stay overnight with a local family — interact with locals, play with children, or swim in the Nam Ha River.',
      },
      {
        title: 'Day 3 \u2013 Khmu Village \u2192 Doi Lakkham \u2192 Luang Namtha',
        body: 'Depart after breakfast prepared by your host family. Trek through stunning jungle with towering 70-metre trees and abundant wildlife — birds, squirrels, monkeys, and civets. Reach the mountain peak before descending to Doi Lakkham, then return to Luang Namtha.',
      },
    ],
    includes: [
      'Accommodation at hotels/homestays/campsites as specified',
      'Professional tour guide in selected language',
      'All transportation as stated in the itinerary',
      'Meals from lunch on Day 1 to lunch on the final day',
      'Entrance fees to all sites mentioned',
      'Government tax',
    ],
    excludes: [
      'Gratuities for guide, driver, porter, and hotel staff',
      'Meals not specified in the itinerary',
      'International airfare',
      'Optional tours and activities',
      'Visa fees and travel insurance',
      'Personal expenses',
    ],
  },
  {
    region: 'Southern Laos',
    province: 'Pakse, Champasak Province',
    name: 'Bolaven Plateau Homestay Trek',
    highlight: 'Coffee plantations, dramatic waterfalls, limestone cliffs, a village homestay with Baci ceremony, and an optional 300 m zipline above the twin falls',
    duration: '2 DAYS \u00B7 1 NIGHT',
    departure: 'Your hotel in Pakse Town',
    img: '/img/bolaven-plateau-homestay/couple-waterfall-behind.jfif',
    gallery: [],
    days: [
      {
        title: 'Day 1 \u2013 Pakse \u2192 Bolaven Plateau \u2192 Tad Fane \u2192 Ban Nong Luang',
        body: 'Drive up to the scenic Bolaven Plateau past coffee and tea plantations. Trek from Ban Hue Jiet Village through the Dan Sinxai limestone area to Champi Waterfall for a picnic lunch and swim. In the afternoon, visit the famous 220 m Tad Fane and Tad Yeung waterfalls before transferring to Ban Nong Luang for a homestay dinner and traditional Baci ceremony.\n\nOptional: Tad Fane Zipline — soar 300 m above the twin waterfalls, the highest zipline in Laos (USD 40/person).',
      },
      {
        title: 'Day 2 \u2013 Ban Nong Luang \u2192 Dan Noy \u2192 Tad Chet Chanh \u2192 Pakse',
        body: 'Hike to Dan Noy limestone cliffs overlooking Dong Hua Sao National Protected Area and a rare 1,000-year-old rosewood tree. Continue to Tad Chet Zun (7-level falls) and Tad Suea Waterfall through jungle rich with wild herbs and orchids. Take in vistas of the Champasak area and the Mekong River before returning to Pakse. (~2 hrs transfer + 5 hrs trekking)',
      },
    ],
    includes: [
      'Accommodation at hotels/homestays/campsites as specified',
      'Professional tour guide in selected language',
      'All transportation as stated in the itinerary',
      'Meals from lunch on Day 1 to lunch on the final day',
      'Entrance fees to all sites mentioned',
      'Government tax',
    ],
    excludes: [
      'Gratuities for guide, driver, porter, and hotel staff',
      'Meals not specified in the itinerary',
      'International airfare',
      'Optional activities (e.g. zipline USD 40/person)',
      'Visa fees and travel insurance',
      'Personal expenses',
    ],
  },
]

export default function TourPackages() {
  const [open, setOpen] = useState<number | null>(null)
  const [slides, setSlides] = useState<Record<number, number>>({})

  const toggle = (i: number) => setOpen(open === i ? null : i)

  const slide = (tourIdx: number, delta: number, total: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setSlides(prev => {
      const current = prev[tourIdx] ?? 0
      return { ...prev, [tourIdx]: (current + delta + total) % total }
    })
  }

  return (
    <section className={styles.section} id="packages">
      <div className={styles.header}>
        <div>
          <div className={styles.eyebrow}>SIGNATURE ITINERARIES</div>
          <h2 className={styles.title}>
            Our <em>Tour Packages</em>
          </h2>
        </div>
        <p className={styles.intro}>
          Off-the-beaten-path journeys through Laos&rsquo; most extraordinary provinces.
          Each itinerary is led by expert local guides and shaped around authentic encounters
          with culture, nature, and community.
        </p>
      </div>

      <div className={styles.list}>
        {tours.map((t, i) => {
          const currentSlide = slides[i] ?? 0

          return (
            <div key={t.name} className={styles.item}>

              {/* ── Collapsed / always-visible row ── */}
              <button
                className={`${styles.row} ${open === i ? styles.rowOpen : ''}`}
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <div className={styles.thumb}>
                  <Image
                    src={t.img}
                    alt={t.name}
                    fill
                    className={styles.thumbImg}
                    sizes="(max-width: 768px) 100vw, 260px"
                  />
                </div>

                <div className={styles.info}>
                  <span className={styles.region}>{t.region} &mdash; {t.province}</span>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.highlight}>{t.highlight}</span>
                  <span className={styles.duration}>{t.duration}</span>
                </div>

                <div className={styles.toggleBtn} aria-hidden="true">
                  <span className={open === i ? styles.minus : styles.plus} />
                </div>
              </button>

              {/* ── Expanded body ── */}
              <div className={`${styles.body} ${open === i ? styles.bodyOpen : ''}`}>

                {/* Gallery slider — only if photos exist */}
                {t.gallery.length > 0 && (
                  <div className={styles.slider}>
                    <div className={styles.sliderTrack}>
                      <Image
                        key={`${i}-${currentSlide}`}
                        src={t.gallery[currentSlide]}
                        alt={`${t.name} photo ${currentSlide + 1}`}
                        fill
                        className={styles.sliderImg}
                        sizes="100vw"
                      />
                    </div>

                    <button
                      className={`${styles.arrow} ${styles.arrowPrev}`}
                      onClick={(e) => slide(i, -1, t.gallery.length, e)}
                      aria-label="Previous photo"
                    >
                      &#8592;
                    </button>
                    <button
                      className={`${styles.arrow} ${styles.arrowNext}`}
                      onClick={(e) => slide(i, 1, t.gallery.length, e)}
                      aria-label="Next photo"
                    >
                      &#8594;
                    </button>

                    <div className={styles.sliderCount}>
                      {currentSlide + 1} / {t.gallery.length}
                    </div>
                  </div>
                )}

                <div className={styles.bodyInner}>

                  {/* Days */}
                  <div className={styles.days}>
                    <div className={styles.colLabel}>Itinerary</div>
                    {t.days.map((d) => (
                      <div key={d.title} className={styles.day}>
                        <div className={styles.dayTitle}>{d.title}</div>
                        <p className={styles.dayBody}>{d.body}</p>
                      </div>
                    ))}
                    <div className={styles.departure}>
                      <span>Departure &amp; Return:</span> {t.departure}
                    </div>
                  </div>

                  {/* Includes / Excludes */}
                  <div className={styles.meta}>
                    <div className={styles.metaBlock}>
                      <div className={styles.colLabel}>Price Includes</div>
                      <ul className={styles.metaList}>
                        {t.includes.map((item) => (
                          <li key={item} className={styles.metaInclude}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.metaBlock}>
                      <div className={styles.colLabel}>Price Excludes</div>
                      <ul className={styles.metaList}>
                        {t.excludes.map((item) => (
                          <li key={item} className={styles.metaExclude}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <a href="#contact" className={styles.cta}>Enquire About This Tour</a>
                  </div>

                </div>
              </div>

            </div>
          )
        })}
      </div>
    </section>
  )
}
