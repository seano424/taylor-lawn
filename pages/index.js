import Head from 'next/head'
import { getBanner } from '../lib/api'
import { urlFor } from '../lib/client'
import Image from 'next/image'
import Navbar from '../components/Navbar'

export default function Home({ banner }) {
  console.log(banner)
  const { image, subtitle, title } = banner[0]

  return (
    <div>
      <Head>
        <title>Taylor Lawn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="relative h-screen">
        <Image
          className="object-cover"
          src={urlFor(image).url()}
          layout="fill"
        />
        <div className="absolute flex flex-col w-full h-full items-center justify-center text-center">
          <div className="max-w-7xl inline-flex flex-col gap-7 mt-64">
            <h1 className="text-gray-100 text-7xl font-bold ">{title}</h1>
            <h4 className="text-5xl font-bold text-gray-100 ">{subtitle}</h4>
            <div className="flex gap-3 justify-center">
              <button className="rounded-full text-lg px-8 py-3 text-white border border-white">
                About us
              </button>
              <button className="text-green-600 text-lg bg-white rounded-full px-8 py-3">
                Request an Estimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const banner = await getBanner(preview)
  return {
    props: { banner },
    revalidate: 1,
  }
}
