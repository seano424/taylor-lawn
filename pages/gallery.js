import { getContent } from '../lib/api'
import Layout from '../components/Layout'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

export default function Home({ content }) {
  const gallery = content.find((item) => item._type === 'gallery')
  return (
    <Layout>
      <div className="relative lg:top-40">
        <Gallery gallery={gallery} />
        <Footer />
      </div>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const content = await getContent(preview)
  return {
    props: { content: content },
    revalidate: 1,
  }
}
