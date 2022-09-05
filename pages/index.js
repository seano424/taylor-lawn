import { getHomePageContent } from 'lib/api'
import dynamic from 'next/dynamic'
const Hero = dynamic(() => import('@/components/Hero'))
const Testimonials = dynamic(() => import('@/components/pages/Testimonials'))
const Gallery = dynamic(() => import('@/components/pages/Gallery'))
const Services = dynamic(() => import('@/components/pages/Services'))
const About = dynamic(() => import('@/components/pages/About'))

export default function Home({ data }) {
  const { gallery, about, hero, testimonials } = data

  return (
    <>
      <Hero content={hero} />
      <Services />
      <About content={about} />
      <Gallery content={gallery} limit={6} />
      <Testimonials limit={3} content={testimonials} />
    </>
  )
}

export async function getStaticProps() {
  const data = await getHomePageContent()
  return {
    props: { data },
    revalidate: 60,
  }
}
