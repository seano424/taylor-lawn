import { useState, useEffect } from 'react'

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
    url: '/gallery',
    title: 'Gallery',
  },
  {
    url: '/about',
    title: 'About',
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
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`backdrop-contrast-110 fixed top-0 left-0 z-50 hidden w-full items-center gap-10 bg-white px-8 pt-3 filter transition-all duration-300 ease-linear lg:flex 2xl:px-20 ${
        scrollPosition > 50
          ? 'bg-opacity-100 text-black'
          : 'bg-opacity-0 text-white'
      }`}
    >
      {/* Logo*/}
      <Link href="/">
        <a aria-label="Logo To Homepage">
          <Image
            className="hidden cursor-pointer lg:flex"
            src="/images/logo.jpg"
            height={188}
            width={300}
          />
        </a>
      </Link>

      <div className="flex w-full flex-col">
        {/* Top Navigation */}
        <div
          className={`hidden w-full gap-8 border-b border-opacity-40 py-4 text-sm font-thin lg:flex 2xl:text-base ${
            scrollPosition > 50 && 'text-emerald-500'
          }`}
        >
          <div className="flex w-full items-center justify-end  space-x-12">
            <div className="flex items-center gap-2">
              <a
                className="flex items-center gap-2 font-black 2xl:text-2xl"
                href="tel:+1-913-206-7214"
              >
                Call Us Today!
                <FaPhone className="h-5 w-5 rotate-90 transform" />
                (913) 206 7214
              </a>
            </div>
            <Link href="https://www.facebook.com/TaylorLawnandLandscaping">
              <a rel="noopener" className="flex gap-2" target="_blank">
                <FaFacebook className="h-6 w-6" />
              </a>
            </Link>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="relative hidden flex-1 items-center justify-between pt-6 font-serif text-lg lg:flex">
          {links.map((link) => (
            <Link key={link.title} href={link.url}>
              <a
                className={`font-black ${
                  scrollPosition > 50
                    ? 'hover:text-slate-700'
                    : 'hover:text-slate-200'
                }`}
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
