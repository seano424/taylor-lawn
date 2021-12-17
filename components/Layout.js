import { useContext } from 'react'
import Head from 'next/head'
import Header from './Header'
import { ModalContext } from '../context/ModalContext'

function Layout({ children }) {
  const { showModal } = useContext(ModalContext)
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
