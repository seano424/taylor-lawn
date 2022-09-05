import { m } from 'framer-motion'
import MenuItem from './MenuItem'
import Link from 'next/link'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const header = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const Navigation = ({ open, toggle }) => {
  return (
    <m.ul className={`menu-ul ${!open && 'hidden'}`} variants={variants}>
      <Link href="/" passHref>
        <m.a
          variants={header}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 cursor-pointer flex-wrap rounded-md pb-4 font-sans text-xl font-black uppercase tracking-widest text-sky-900 hover:text-emerald-500"
        >
          Taylor Lawn & Landscaping L.L.C
        </m.a>
      </Link>
      {menuItems.map((item, idx) => (
        <MenuItem toggle={toggle} i={idx} text={item} key={idx} />
      ))}
    </m.ul>
  )
}

export default Navigation

const menuItems = ['about', 'services', 'contact', 'gallery', 'testimonials']
