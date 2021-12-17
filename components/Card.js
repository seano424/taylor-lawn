import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { urlFor } from '../lib/client'
import { motion, AnimatePresence } from 'framer-motion'
import { useDisableBodyScroll } from '../hooks/use-disable-body'
function Card({ i, idx, variants }) {
  const [open, setOpen] = useState(false)
  const [clickedIdx, setClickedIdx] = useState(0)
  const containerRef = useRef()
  // useDisableBodyScroll(open)

  const handleShowModal = (i, idx) => {
    setOpen((prevState) => !prevState)
    setClickedIdx(idx)
    setTimeout(() => {
      setClickedIdx(null)
    }, 500)
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <>
      <motion.div
        variants={item}
        initial="hidden"
        animate="visible"
        onClick={() => handleShowModal(i, idx)}
        layoutId={i}
        className={`relative h-40 sm:h-48 md:h-52 lg:h-64 xl:h-72 w-full shadow-lg cursor-pointer group ${
          clickedIdx === idx && 'z-10'
        }`}
      >
        <Image
          className="rounded object-cover"
          src={urlFor(i.image).url()}
          layout="fill"
        />
        <div className="absolute h-full w-full group-hover:bg-lime-300 group-hover:bg-opacity-20 group-hover:shadow-lg transition duration-200" />
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            transition={{ duration: 0.25, delay: 0.25 }}
            style={{ pointerEvents: 'auto' }}
            style={{ pointerEvents: 'auto' }}
            ref={containerRef}
            onClick={() => handleShowModal(i, idx)}
            className="bg-white bg-opacity-90 fixed top-0 left-0 right-0 bottom-0 z-50"
          >
            <motion.div className="fixed left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg z-20 top-16 text-white h-5/6 border-8 border-black rounded">
              <Image
                className="rounded object-cover"
                src={urlFor(i.image).url()}
                layout="fill"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Card
