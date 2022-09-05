import dynamic from 'next/dynamic'
import { getGallery } from 'lib/api'
const Gallery = dynamic(() => import('@/components/pages/Gallery'))

export default function Home({ content }) {
  return <Gallery content={content} />
}

export async function getStaticProps() {
  const content = await getGallery()
  return {
    props: { content },
    revalidate: 60,
  }
}
