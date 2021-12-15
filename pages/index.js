import { getBanner } from '../lib/api'
import Layout from '../components/Layout'
import Jumbotron from '../components/Jumbotron'

export default function Home({ banner }) {
  return (
    <Layout>
      <Jumbotron banner={banner} />
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const banner = await getBanner(preview)
  return {
    props: { banner: banner[0] },
    revalidate: 1,
  }
}
