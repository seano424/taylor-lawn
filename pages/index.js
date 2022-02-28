import { useEffect, useState } from 'react'
import { getContent, getTestimonials } from '../lib/api'
import Layout from '../components/Layout'
import Jumbotron from '../components/Jumbotron'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Services from '../components/Services'
import { scrollTo } from '../utils/scrollTo'

export default function Home({ content, testimonials }) {
  const banner = content.find((item) => item._type === 'banner')
  const about = content.find((item) => item._type === 'about')
  const gallery = content.find((item) => item._type === 'gallery')

  // const [y, setY] = useState(null)
  // const [showScroll, setShowScroll] = useState(false)

  // const handleNavigation = (e) => {
  //   const window = e.currentTarget
  //   if (y > window.scrollY) {
  //     window.scrollY === 0 && setShowScroll(false)
  //   } else if (y < window.scrollY) {
  //     window.scrollY > 257 && setShowScroll(true)
  //   }
  //   setY(window.scrollY)
  // }

  // useEffect(() => {
  //   setY(window.scrollY)
  // }, [])

  // useEffect(() => {
  //   window.addEventListener('scroll', (e) => handleNavigation(e))

  //   return () => {
  //     // return a cleanup function to unregister our function since its gonna run multiple times
  //     window.removeEventListener('scroll', (e) => handleNavigation(e))
  //   }
  // }, [y])

  return (
    <Layout>
      {/* <Jumbotron banner={banner} /> */}
      {/* <About about={about} /> */}
      <Services />
      {/* <Gallery gallery={gallery} /> */}
      {/* <Testimonials limit={3} testimonials={testimonials} /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const content = await getContent(preview)
  const testimonials = await getTestimonials(preview)
  return {
    props: { content: content, testimonials },
    revalidate: 1,
  }
}
