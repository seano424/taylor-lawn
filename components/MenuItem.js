import * as React from 'react'
import { motion } from 'framer-motion'
import { scrollTo } from '../utils/scrollTo'

const variants = {
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

const colors = [
  '#1e6091',
  '#1a759f',
  '#34a0a4',
  '#52b69a',
  '#76c893',
  '#99d98c',
]

const MenuItem = ({ i, text, toggle }) => {
  const style = {
    color: `${colors[i]}`,
    '&:hover': { background: colors[i] },
  }
  const handleClick = (text) => {
    scrollTo(text)
    toggle()
  }
  return (
    <motion.li
      className="menu-li"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className={`rounded-md flex-1 py-1 hover:text-emerald-500 uppercase font-bold tracking-widest`}
        style={style}
      >
        <a onClick={() => handleClick(text)}>{text}</a>
      </div>
    </motion.li>
  )
}

export default MenuItem
