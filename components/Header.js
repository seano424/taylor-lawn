import { useRouter } from 'next/router'
import Image from 'next/image'
import {
  FaFacebook,
  FaClock,
  FaPhone,
  FaSearchLocation,
  FaMailBulk,
} from 'react-icons/fa'
import Sidebar from './Sidebar'

function Header() {
  const { route, push } = useRouter()
  return (
    <nav>
      <div className="absolute z-50 lg:hidden">
        <Sidebar />
      </div>
      <div className="sticky top-0 left-0 z-50 hidden w-full bg-white px-8 py-3 lg:block 2xl:px-20">
        <div className="flex items-center">
          {/* Logo*/}
          <section className="hidden cursor-pointer lg:flex">
            <Image
              onClick={() => push('/')}
              src="/images/logo.jpg"
              height={188}
              width={300}
            />
          </section>
          {/* Navbar Section Right */}
          <section className="ml-10 w-full">
            <div className="hidden w-full gap-8 border-b border-opacity-40 py-4 text-sm font-thin text-emerald-500 lg:flex 2xl:text-base">
              <div className="flex w-full items-center justify-between  space-x-12">
                <div className="flex items-center gap-2 text-black">
                  <FaPhone className="h-6" />
                  <a
                    className="font-black 2xl:text-2xl"
                    href="tel:+1-913-206-7214"
                  >
                    (913) 206 7214
                  </a>
                </div>
                <div className="hidden items-center gap-4 font-bold xl:flex">
                  <FaClock className="h-6 w-6" />
                  <div class="flex flex-col">
                    <p>Mon - Fri: 8:00-5:00</p>
                    <p>Sat: 10:30-2:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-bold text-black">
                  <FaMailBulk className="h-6" />
                  <a href="mailto:taylorlawn@hotmail.com?subject=Hello Taylor Lawn and Landscaping!">
                    taylorlawn@hotmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FaSearchLocation className="h-6" />
                  <span className="22xl:block hidden font-black">
                    Kansas City Metro Area
                  </span>
                  <span className="22xl:hidden font-black">KCMO</span>
                </div>
                <a
                  rel="noopener"
                  className="flex gap-2"
                  target="_blank"
                  href="https://www.facebook.com/TaylorLawnandLandscaping"
                >
                  <FaFacebook className="h-6 w-6" />
                </a>
              </div>
            </div>
            <nav className="relative flex items-center pt-6 text-lg text-gray-800">
              <ul className="hidden flex-1 items-center justify-between gap-8 font-serif lg:flex">
                <a
                  href="/"
                  className={`${
                    route === '/' ? 'font-black text-emerald-500' : ''
                  } hover:text-emerald-500`}
                >
                  Home
                </a>
                <a
                  href="/about"
                  className={`${
                    route === '/about' ? 'font-black text-emerald-500' : ''
                  } hover:text-emerald-500`}
                >
                  About
                </a>
                <a
                  href="/services"
                  className={`${
                    route === '/services' ? 'font-black text-emerald-500' : ''
                  } hover:text-emerald-500`}
                >
                  Service
                </a>
                <a
                  href="/gallery"
                  className={`${
                    route === '/gallery' ? 'font-black text-emerald-500' : ''
                  } hover:text-emerald-500`}
                >
                  Gallery
                </a>
                <a
                  href="/testimonials"
                  className={`${
                    route === '/testimonials'
                      ? 'font-black text-emerald-500'
                      : ''
                  } hover:text-emerald-500`}
                >
                  Testimonials
                </a>
                <a
                  href="/contact"
                  className={`${
                    route === '/contact' ? 'font-black text-emerald-500' : ''
                  } hover:text-emerald-500`}
                >
                  Contact
                </a>

                <button
                  onClick={() => push('/contact')}
                  className="rounded-full bg-emerald-500 py-2 px-6 text-[15px] font-thin tracking-wide text-white"
                >
                  Free Quote
                </button>
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </nav>
  )
}

export default Header
