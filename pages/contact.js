import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <Layout>
      <div className="relative lg:top-40">
        <Contact />
        <Footer />
      </div>
    </Layout>
  )
}
