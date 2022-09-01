import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaFacebook,
  FaClock,
  FaPhone,
  FaSearchLocation,
  FaMailBulk,
} from 'react-icons/fa'

const links = [
  {
    url: '/',
    title: 'Home',
  },
  {
    url: '/services',
    title: 'Services',
  },
  {
    url: '/about',
    title: 'About',
  },
  {
    url: '/gallery',
    title: 'Gallery',
  },
  {
    url: '/testimonials',
    title: 'Testimonials',
  },
  {
    url: '/contact',
    title: 'Contact',
  },
]

function Header() {
  const { route } = useRouter()
  return (
    <nav className="sticky top-0 left-0 z-50 hidden w-full items-center gap-10 bg-white px-8 py-3 lg:flex 2xl:px-20">
      {/* Logo*/}
      <Link href="/">
        <a>
          <Image
            className="hidden cursor-pointer lg:flex"
            src="/images/logo.jpg"
            alt="Logo To Homepage"
            height={161}
            width={256}
          />
        </a>
      </Link>

      <div className="flex w-full flex-col">
        {/* Top Navigation */}
        <div className="hidden w-full gap-8 border-b border-opacity-40 py-4 text-sm font-thin text-emerald-500 lg:flex 2xl:text-base">
          <div className="flex w-full items-center justify-between  space-x-12">
            <div className="flex items-center gap-2 text-black">
              <FaPhone className="h-6" />
              <a className="font-black 2xl:text-2xl" href="tel:+1-913-206-7214">
                (913) 206 7214
              </a>
            </div>
            <div className="hidden items-center gap-4 font-bold xl:flex">
              <FaClock className="h-6 w-6" />
              <div className="flex flex-col">
                <p>Mon - Fri: 8:00-5:00</p>
                <p>Sat: 10:30-2:00</p>
              </div>
            </div>
            <Link href="mailto:taylorlawn@hotmail.com?subject=Hello Taylor Lawn and Landscaping!">
              <a className="flex items-center gap-2 font-bold text-black">
                <FaMailBulk className="h-6" />
                taylorlawn@hotmail.com
              </a>
            </Link>
            <Link href="https://goo.gl/maps/w3Upyszi2aBZSDgi9">
              <a target="_blank" className="flex items-center gap-2">
                <FaSearchLocation className="h-6" />
                <span className="hidden font-black 2xl:block">
                  Kansas City Metro Area
                </span>
                <span className="font-black 2xl:hidden">Greater KC Area</span>
              </a>
            </Link>
            <Link href="https://www.facebook.com/TaylorLawnandLandscaping">
              <a rel="noopener" className="flex gap-2" target="_blank">
                <FaFacebook className="h-6 w-6" />
              </a>
            </Link>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="relative hidden flex-1 items-center justify-between gap-8 pt-6 font-serif text-lg text-gray-800 lg:flex">
          {links.map((link) => (
            <Link key={link.title} href={link.url}>
              <a
                className={`${
                  route === link.url ? 'font-black text-emerald-500' : ''
                } hover:text-emerald-500`}
              >
                {link.title}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <a className="rounded-full bg-emerald-500 py-2 px-6 text-[15px] font-thin tracking-wide text-white">
              Free Quote
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
