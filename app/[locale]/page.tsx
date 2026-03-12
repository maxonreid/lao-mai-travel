import Nav          from '@/components/Nav/Nav'
import Hero         from '@/components/Hero/Hero'
import Stats        from '@/components/Stats/Stats'
import Destinations from '@/components/Destinations/Destinations'
import Tours        from '@/components/Tours/Tours'
import Panorama     from '@/components/Panorama/Panorama'
import About        from '@/components/About/About'
import Testimonial  from '@/components/Testimonial/Testimonial'
import BookingForm  from '@/components/BookingForm/BookingForm'
import Footer       from '@/components/Footer/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Destinations />
        <Tours />
        <Panorama />
        <About />
        <Testimonial />
        <BookingForm />
      </main>
      <Footer />
    </>
  )
}
