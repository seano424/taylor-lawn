import Head from 'next/head'
import { getBanner } from '../lib/api'
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'

export default function Home({ banner }) {
  return (
    <div>
      <Head>
        <title>Taylor Lawn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Jumbotron banner={banner} />
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const banner = await getBanner(preview)
  return {
    props: { banner: banner[0] },
    revalidate: 1,
  }
}
