import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Services from '../components/pages/Services'

export default function Home() {
  return (
    <Layout>
      <div className="relative lg:top-40">
        <Services />
        <Footer />
      </div>
    </Layout>
  )
}
