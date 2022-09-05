import { useEffect, useState } from 'react'
import { getHomePageContent } from 'lib/api'
import Hero from '@/components/Hero'
import Testimonials from '@/components/pages/Testimonials'
import Gallery from '@/components/pages/Gallery'
import Services from '@/components/pages/Services'
import About from '@/components/pages/About'

export default function Home({ data }) {
  const { gallery, about, hero, testimonials } = data
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    data && setIsLoading(false)
  }, [data])

  if (isLoading) {
    return <></>
  }

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
