
import Header from './Header'
import Meta from './Meta'

function Layout({ children }) {
  return (
    <div>
      <Meta/>
      <Header />
      <main className="relative">{children}</main>
    </div>
  )
}

export default Layout
