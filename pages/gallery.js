import { getGallery } from 'lib/api'
import Gallery from '@/components/pages/Gallery'

export default function Home({ content }) {
  return <Gallery content={content} />
}

export async function getStaticProps() {
  const content = await getGallery()
  return {
    props: { content },
    revalidate: 1,
  }
}
