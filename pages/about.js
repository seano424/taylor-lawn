import { getAbout } from 'lib/api'
import About from '@/components/pages/About'

export default function AboutPage({content}) {
  return <About content={content} />
}

export async function getStaticProps() {
  const content = await getAbout()
  return {
    props: { content },
    revalidate: 1,
  }
}