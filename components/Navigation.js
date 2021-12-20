import * as React from 'react'
import { motion } from 'framer-motion'
import MenuItem from './MenuItem'
import { useRouter } from 'next/router'

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
  const router = useRouter()

  const handleHeader = () => {
    router.push('/')
    toggle()
  }

  return (
    <motion.ul className={`menu-ul ${!open && 'hidden'}`} variants={variants}>
      <motion.h1
        onClick={handleHeader}
        variants={header}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-md flex-1 py-4 text-lg text-sky-900 hover:text-emerald-500 uppercase font-black tracking-widest font-sans cursor-pointer"
      >
        Taylor Lawn & Landscaping
      </motion.h1>
      {menuItems.map((item, idx) => (
        <MenuItem toggle={toggle} i={idx} text={item} key={idx} />
      ))}
    </motion.ul>
  )
}

export default Navigation

const menuItems = ['about', 'services', 'contact', 'gallery', 'testimonials']
