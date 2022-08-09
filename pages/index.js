import { getTestimonials, getHero, getAbout, getGallery } from 'lib/api'
import Hero from 'components/Hero'
import Testimonials from '@/components/pages/Testimonials'
import Contact from '@/components/pages/Contact'
import Gallery from '@/components/pages/Gallery'
import Services from '@/components/pages/Services'
import About from '@/components/pages/About'

export default function Home({ gallery, about, testimonials, hero }) {
  console.log('Hello from Taylor Lawn & Landscaping!');
  return (
    <>
      <Hero content={hero} />
      <About content={about} />
      <Services />
      <Gallery content={gallery} />
      <Testimonials limit={3} content={testimonials} />
      <Contact />
    </>
  )
}

export async function getStaticProps() {
  const gallery = await getGallery()
  const about = await getAbout()
  const testimonials = await getTestimonials()
  const hero = await getHero()
  return {
    props: { testimonials, about, gallery, hero },
    revalidate: 1,
  }
}
