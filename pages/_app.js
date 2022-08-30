import 'styles/globals.css'
import { ModalProvider } from 'context/ModalContext'
import Layout from 'components/Layout'
import { LazyMotion, domAnimation } from 'framer-motion'

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
