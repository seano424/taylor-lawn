import Head from 'next/head'
import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Taylor Lawn & Landscaping</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
