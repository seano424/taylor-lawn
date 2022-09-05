import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import Meta from './Meta'

function Layout({ children }) {
  return (
    <div>
      <Meta />
      <Header />
      {/* <Sidebar /> */}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
