import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import Meta from './Meta'
import { useRouter } from 'next/router'

function Layout({ children }) {
  const { route } = useRouter()
  return (
    <div>
      <Meta />
      <Header />
      <Sidebar />
      <main className={`${route !== '/' && 'lg:mt-56'}`}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
