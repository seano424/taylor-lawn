import Footer from './Footer'
import Header from './Header'
import Meta from './Meta'
import dynamic from 'next/dynamic'
// const Sidebar = dynamic(() => import('./Sidebar'))
import Sidebar from './Sidebar'

function Layout({ children }) {
  return (
    <div>
      <Meta />
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
