import { useState, useRef } from 'react'
import Image from 'next/image'
import { imageBuilder } from '../lib/client'
import { m, AnimatePresence } from 'framer-motion'

function GalleryCard({ i, idx }) {
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
      <m.button
        aria-label="Gallery Images"
        variants={item}
        initial="hidden"
        animate="visible"
        onClick={() => handleShowModal(i, idx)}
        layoutId={i}
        className={`group cursor-pointer  ${clickedIdx === idx && 'z-10'}`}
      >
        <Image
          className="rounded object-cover transition duration-200 ease-linear group-hover:scale-105"
          src={imageBuilder(i.image).width(440).height(300).fit('crop').url()}
          alt="Landscaping image"
          height={300}
          width={440}
        />
      </m.button>
      <AnimatePresence>
        {open && (
          <m.div
            layoutId={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            transition={{ duration: 0.25, delay: 0.25 }}
            style={{ pointerEvents: 'auto' }}
            ref={containerRef}
            onClick={() => handleShowModal(i, idx)}
            className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-white bg-opacity-90"
          >
            <m.div className="fixed top-1/2 left-1/2 z-20 h-1/2 w-2/3 max-w-screen-lg -translate-y-1/2 -translate-x-1/2 transform rounded border-8 border-black text-white  md:h-5/6">
              <Image
                className="rounded object-cover"
                src={imageBuilder(i.image).url()}
                height={750}
                width={1000}
                layout="fill"
              />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default GalleryCard
