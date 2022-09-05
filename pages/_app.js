import 'styles/globals.css'
import { ModalProvider } from 'context/ModalContext'
import 'swiper/css/bundle'
import { LazyMotion, domAnimation } from 'framer-motion'
import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <LazyMotion features={domAnimation}>
      <ModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ModalProvider>
    </LazyMotion>
  )
}

export default MyApp
