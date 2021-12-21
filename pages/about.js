import { getContent } from '../lib/api'
import Layout from '../components/Layout'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home({ content }) {
  const about = content.find((item) => item._type === 'about')
  return (
    <Layout>
      <div className="relative lg:top-40">
        <About about={about} />
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
