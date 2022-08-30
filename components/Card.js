import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { urlFor } from '../lib/client'
import { m, AnimatePresence } from 'framer-motion'
function Card({ i, idx }) {
  const [open, setOpen] = useState(false)
  const [clickedIdx, setClickedIdx] = useState(0)
  const containerRef = useRef()

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
      <m.div
        variants={item}
        initial="hidden"
        animate="visible"
        onClick={() => handleShowModal(i, idx)}
        layoutId={i}
        className={`group relative h-40 w-full cursor-pointer shadow-lg sm:h-48 md:h-52 lg:h-64 xl:h-72 ${
          clickedIdx === idx && 'z-10'
        }`}
      >
        <Image
          className="rounded object-cover transition duration-200 ease-linear group-hover:scale-105"
          src={urlFor(i.image).url()}
          alt="Landscaping image"
          layout="fill"
        />
        <div className="absolute h-full w-full transition duration-200 ease-linear group-hover:bg-gray-100 group-hover:bg-opacity-5 group-hover:shadow-xl" />
      </m.div>
      <AnimatePresence>
        {open && (
          <m.div
            layoutId={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            transition={{ duration: 0.25, delay: 0.25 }}
            style={{ pointerEvents: 'auto' }}
            style={{ pointerEvents: 'auto' }}
            ref={containerRef}
            onClick={() => handleShowModal(i, idx)}
            className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-white bg-opacity-90"
          >
            <m.div className="fixed left-1/2 top-16 z-20 h-5/6 w-full max-w-screen-lg -translate-x-1/2 transform rounded border-8 border-black text-white">
              <Image
                className="rounded object-cover"
                src={urlFor(i.image).url()}
                layout="fill"
              />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Card
