import * as React from 'react'
import { motion } from 'framer-motion'
import MenuItem from './MenuItem'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const Navigation = () => (
  <motion.ul className="menu-ul" variants={variants}>
    {menuItems.map((item, idx) => (
      <MenuItem i={idx} text={item} key={idx} />
    ))}
  </motion.ul>
)

export default Navigation

const menuItems = [
  'home',
  'about',
  'services',
  'contact',
  'gallery',
  'testimonials',
]
