import type { Metadata } from 'next'
import Nav          from '@/components/Nav/Nav'
import Hero         from '@/components/Hero/Hero'
import Destinations from '@/components/Destinations/Destinations'
import TourPackages from '@/components/TourPackages/TourPackages'
import Panorama     from '@/components/Panorama/Panorama'
import About        from '@/components/About/About'
import Services     from '@/components/Services/Services'
import Testimonial  from '@/components/Testimonial/Testimonial'
import BookingForm  from '@/components/BookingForm/BookingForm'
import Map          from '@/components/Map/Map'
import Footer       from '@/components/Footer/Footer'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const titles: Record<string, string> = {
    en: 'Discover Authentic Laos Tours & Travel Experiences',
    th: 'ค้นพบประสบการณ์ทัวร์และท่องเที่ยวลาวแท้',
  }

  const descriptions: Record<string, string> = {
    en: 'Explore Laos with local experts. Curated tours from Vientiane to Luang Prabang, cultural experiences, adventure travel, and authentic Lao journeys. Book your dream trip today.',
    th: 'สำรวจลาวกับผู้เชี่ยวชาญท้องถิ่น ทัวร์คัดสรรจากเวียงจันทน์ถึงหลวงพระบาง ประสบการณ์วัฒนธรรม และการเดินทางลาวแท้จริง จองทริปในฝันของคุณวันนี้',
  }

  return {
    title:       titles[locale]       ?? titles.en,
    description: descriptions[locale] ?? descriptions.en,
    alternates: {
      canonical: `https://laomaitravel.com/${locale}`,
      languages: {
        en: 'https://laomaitravel.com/en',
        th: 'https://laomaitravel.com/th',
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
        <Destinations />
        <TourPackages />
        <Panorama />
        <About />
        <Services />
        <Testimonial />
        <BookingForm />
        <Map />
      </main>
      <Footer />
    </>
  )
}
