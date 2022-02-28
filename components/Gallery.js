import { useState } from 'react'
import Card from './Card'
import { motion } from 'framer-motion'

function Gallery({ gallery }) {
  const [images, setImages] = useState(gallery.images)
  const softscapes = gallery.images.filter((img) => img.softscape)
  const hardscapes = gallery.images.filter((img) => img.hardscape)
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  return (
    <div name="gallery" className="relative">
      <div className="px-10 bg-slate-100 pt-10 pb-20 mb-20">
        <div className="relative mx-4 md:mx-28 lg:w-max lg:mx-auto">
          <h2 className="text-5xl z-10 mb-2 font-black text-black font-sans text-center relative">
            Latest Projects
          </h2>
          <div className="border-b-[16px] border-emerald-300 border-opacity-90 absolute w-full bottom-2" />
        </div>
        <ul className="flex justify-center gap-3 lg:gap-10 text-xl py-8 font-semibold">
          <li
            onClick={() => setImages(gallery.images)}
            className={`hover:text-emerald-500 tracking-tight cursor-pointer`}
          >
            All
          </li>
          <li
            onClick={() => setImages(softscapes)}
            className={`hover:text-emerald-500 tracking-tight cursor-pointer`}
          >
            Softscapes
          </li>
          <li
            onClick={() => setImages(hardscapes)}
            className={`hover:text-emerald-500 tracking-tight cursor-pointer`}
          >
            Hardscapes
          </li>
        </ul>
        <div className="flex gap-8 items-center">
          <motion.div className="grid w-full md:grid-cols-3 gap-8">
            {images.slice(0, 6).map((i, idx) => (
              <Card key={i._key} i={i} idx={idx} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
