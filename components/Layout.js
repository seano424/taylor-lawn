import Head from 'next/head'
import Header from './Header'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Taylor Lawn & Landscaping</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="relative">{children}</main>
    </div>
  )
}

export default Layout
