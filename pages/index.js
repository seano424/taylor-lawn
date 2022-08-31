import { getHomePageContent } from 'lib/api'
import Hero from '@/components/Hero'
import Testimonials from '@/components/pages/Testimonials'
import Contact from '@/components/pages/Contact'
import Gallery from '@/components/pages/Gallery'
import Services from '@/components/pages/Services'
import About from '@/components/pages/About'

export default function Home({ home }) {
  const { gallery, about, hero, testimonials } = home
  return (
    <>
      <Hero content={hero} />
      <Services />
      <About content={about} />
      <Gallery content={gallery} />
      {/* <Testimonials limit={3} content={testimonials} /> */}
      {/* <Contact /> */}
    </>
  )
}

export async function getStaticProps() {
  const home = await getHomePageContent()
  return {
    props: { home },
    revalidate: 100000,
  }
}
