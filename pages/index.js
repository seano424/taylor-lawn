import { getBanner } from '../lib/api'
import Layout from '../components/Layout'
import Jumbotron from '../components/Jumbotron'
import About from '../components/About'
import Gallery from '../components/Gallery'

export default function Home({ content }) {
  const banner = content.find((item) => item._type === 'banner')
  const about = content.find((item) => item._type === 'about')
  const gallery = content.find((item) => item._type === 'gallery')
  console.log(gallery)
  return (
    <Layout>
      <Jumbotron banner={banner} />
      {/* CTA Section */}
      <About about={about} />
      {/* Services */}
      {/* Gallery */}
      <Gallery gallery={gallery} />
      {/* Testimonials */}
      <div className="bg-red-100 h-[900px] w-full" />
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const content = await getBanner(preview)
  return {
    props: { content: content },
    revalidate: 1,
  }
}
