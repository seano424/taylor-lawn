import { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import Meta from './Meta'

function Layout({ children }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <div>
      <Meta />
      <Header />
      {mounted && <Sidebar />}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
