import { getTestimonials } from '../lib/api'
import Testimonials from '../components/pages/Testimonials'

export default function Home({ testimonials }) {
  return <Testimonials content={testimonials} />
}

export async function getStaticProps({ preview = false }) {
  const testimonials = await getTestimonials(preview)
  return {
    props: { testimonials },
    revalidate: 100000,
  }
}
