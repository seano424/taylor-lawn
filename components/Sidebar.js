import { useRef, useState } from 'react'
import { m } from 'framer-motion'
import useDimensions from '../hooks/use-dimension'
import MenuToggle from './MenuToggle'
import Navigation from './Navigation'
import useOutsideClick from '../hooks/use-outside-click'
import Link from 'next/link'
import Image from 'next/image'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  useOutsideClick(containerRef, () => {
    setOpen(false)
  })

  return (
    <m.nav
      className="nav absolute inset-0 z-50 lg:hidden"
      initial={false}
      animate={open ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <m.div className="background" variants={sidebar} />
      <Navigation
        open={open}
        toggle={() => setOpen((prevState) => !prevState)}
      />
      <MenuToggle toggle={() => setOpen((prevState) => !prevState)} />
      <Link href="/">
        <a className="fixed right-4 top-5">
          <Image
            className="cursor-pointer lg:hidden"
            src="/images/logo.jpg"
            alt="Logo and Link To Homepage"
            height={80}
            width={125}
          />
        </a>
      </Link>
    </m.nav>
  )
}

export default Sidebar
