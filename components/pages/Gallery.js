import { useState } from 'react'
import Card from '../Card'
import { m } from 'framer-motion'

function Gallery({ content }) {
  const [images, setImages] = useState(content.images)
  const softscapes = content.images.filter((img) => img.softscape)
  const hardscapes = content.images.filter((img) => img.hardscape)

  return (
    <div name="gallery" className="relative">
      <div className="mb-20 bg-slate-100 px-10 pt-10 pb-20">
        <div className="relative mx-4 md:mx-28 lg:mx-auto lg:w-max">
          <h2 className="relative z-10 mb-2 text-center font-sans text-5xl font-black text-black">
            Latest Projects
          </h2>
          <div className="absolute bottom-2 w-full border-b-[16px] border-emerald-300 border-opacity-90" />
        </div>
        <ul className="flex justify-center gap-3 py-8 text-xl font-semibold lg:gap-10">
          <li
            onClick={() => setImages(gallery.images)}
            className={`cursor-pointer tracking-tight hover:text-emerald-500`}
          >
            All
          </li>
          <li
            onClick={() => setImages(softscapes)}
            className={`cursor-pointer tracking-tight hover:text-emerald-500`}
          >
            Softscapes
          </li>
          <li
            onClick={() => setImages(hardscapes)}
            className={`cursor-pointer tracking-tight hover:text-emerald-500`}
          >
            Hardscapes
          </li>
        </ul>
        <div className="flex items-center gap-8">
          <m.div className="grid w-full gap-8 md:grid-cols-3">
            {images.slice(0, 6).map((i, idx) => (
              <Card key={i._key} i={i} idx={idx} />
            ))}
          </m.div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
