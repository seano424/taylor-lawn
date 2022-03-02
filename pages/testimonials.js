import { getTestimonials } from '../lib/api'
import Layout from '../components/Layout'
import Testimonials from '../components/pages/Testimonials'
import Footer from '../components/Footer'

export default function Home({ testimonials }) {
  return (
    <Layout>
      <div className="relative lg:top-40">
        <Testimonials content={testimonials} />
        <Footer />
      </div>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const testimonials = await getTestimonials(preview)
  return {
    props: { testimonials },
    revalidate: 1,
  }
}
