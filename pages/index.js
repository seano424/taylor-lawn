import { getContent, getTestimonials } from '../lib/api'
import Layout from '../components/Layout'
import Jumbotron from '../components/Jumbotron'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Services from '../components/Services'

export default function Home({ content, testimonials }) {
  const banner = content.find((item) => item._type === 'banner')
  const about = content.find((item) => item._type === 'about')
  const gallery = content.find((item) => item._type === 'gallery')
  return (
    <Layout>
      <Jumbotron banner={banner} />
      {/* CTA Section */}
      <About about={about} />
      <Services />
      {/* Services */}
      <Gallery gallery={gallery} />
      <Testimonials limit={3} testimonials={testimonials} />
      <Contact />
      <Footer />
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
