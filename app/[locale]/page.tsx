import type { Metadata } from 'next'
import Nav          from '@/components/Nav/Nav'
import Hero         from '@/components/Hero/Hero'
import Stats        from '@/components/Stats/Stats'
import Destinations from '@/components/Destinations/Destinations'
import Tours        from '@/components/Tours/Tours'
import TourPackages from '@/components/TourPackages/TourPackages'
import Panorama     from '@/components/Panorama/Panorama'
import About        from '@/components/About/About'
import Testimonial  from '@/components/Testimonial/Testimonial'
import BookingForm  from '@/components/BookingForm/BookingForm'
import Map          from '@/components/Map/Map'
import Footer       from '@/components/Footer/Footer'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    en: 'Discover Authentic Laos Tours & Travel Experiences',
    lo: 'ຄົ້ນພົບປະສົບການທ່ອງທ່ຽວລາວແທ້'
  }
  
  const descriptions = {
    en: 'Explore Laos with local experts. Curated tours from Vientiane to Luang Prabang, cultural experiences, adventure travel, and authentic Lao journeys. Book your dream trip today.',
    lo: 'ສໍາຫຼວດລາວກັບຜູ້ຊ່ຽວຊານທ້ອງຖິ່ນ. ທົວທັດທີ່ຄັດສັນຈາກນະຄອນຫຼວງວຽງຈັນໄປຫຼວງພະບາງ, ປະສົບການວັດທະນະທໍາ.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://laomaitravel.com/${locale}`,
      languages: {
        en: 'https://laomaitravel.com/en',
        lo: 'https://laomaitravel.com/lo',
      },
    },
  }
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <main itemScope itemType="https://schema.org/WebPage">
        <Hero />
        {/* <Stats /> */}
        <Destinations />
        {/* <Tours /> */}
        <TourPackages />
        <Panorama />
        <About />
        <Testimonial />
        <BookingForm />
        <Map />
      </main>
      <Footer />
    </>
  )
}
