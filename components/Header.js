import { useRouter } from 'next/router'
import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
  ClockIcon,
} from '@heroicons/react/solid'
import { FaFacebook } from 'react-icons/fa'
import Image from 'next/image'
import Sidebar from './Sidebar'
import { scrollTo } from '../utils/scrollTo'

function Header() {
  const { route } = useRouter()
  return (
    <>
      <div className="z-50 absolute  lg:hidden">
        <Sidebar />
      </div>
      <div className="hidden lg:inline-flex absolute z-10 w-full bg-white px-8 xl:px-20 py-3">
        <div className="flex items-center">
          {/* Image Section Left*/}
          <section className="hidden lg:inline-flex">
            <Image src="/logo.webp" height={150} width={200} />
          </section>
          {/* Navbar Section Right */}
          <section className="w-full ml-10">
            <div className="hidden lg:flex justify-between w-full gap-8 border-b border-opacity-40  py-4 text-emerald-500 font-thin">
              <div className="flex items-center space-x-12">
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-6" />
                  <span>(913) 206 7214</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-6" />
                  <span>Mon - Fri: 8:00-5:00/ Sat: 10:30-2:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="h-6" />
                  <span>taylorlawn@hotmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <LocationMarkerIcon className="h-6" />
                  <span>Kansas City Metro Area</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  target="_blank"
                  href="https://www.facebook.com/TaylorLawnandLandscaping"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
              </div>
            </div>
            <nav className="flex items-center relative text-gray-800 text-lg pt-6">
              {/* <div className="flex w-80">
          <a href="/" className="text-xl text-emerald-500">
            Taylor Lawn & Landscaping
          </a>
        </div> */}

              <ul className="hidden lg:flex gap-8 items-center flex-1 justify-between">
                <a href="/" className={route === '/' && 'text-emerald-500'}>
                  Home
                </a>
                <a
                  className={route === '/about' && 'text-emerald-500'}
                  href="/about"
                >
                  About
                </a>
                <a
                  className={route === '/services' && 'text-emerald-500'}
                  href="/"
                >
                  Services
                </a>
                <a
                  className={route === '/gallery' && 'text-emerald-500'}
                  href="/gallery"
                >
                  Gallery
                </a>
                <a
                  className={route === '/testimonials' && 'text-emerald-500'}
                  href="/testimonials"
                >
                  Testimonials
                </a>
                <a
                  className={route === '/contact' && 'text-emerald-500'}
                  href="/contact"
                >
                  Contact
                </a>
                <button className="bg-emerald-500 text-white font-thin rounded-full py-2 px-6 text-[15px] tracking-wide">
                  Free Quote
                </button>
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </>
  )
}

export default Header
