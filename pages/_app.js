import 'styles/globals.css'
import 'react-multi-carousel/lib/styles.css'
import { ModalProvider } from 'context/ModalContext'
import 'swiper/css/bundle'
import Layout from 'components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModalProvider>
  )
}

export default MyApp
