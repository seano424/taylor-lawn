import { useState } from 'react'
import GalleryCard from '../GalleryCard'
import { m } from 'framer-motion'
import Link from 'next/link'

function Gallery({ content, limit }) {
  const [images, setImages] = useState(content.images)
  const softscapes = content.images.filter((img) => img.softscape)
  const hardscapes = content.images.filter((img) => img.hardscape)
  const filter = [
    {
      name: 'All',
      filter: content.images,
    },
    {
      name: 'Softscapes',
      filter: softscapes,
    },
    {
      name: 'Hardscapes',
      filter: hardscapes,
    },
  ]
  return (
    <div className="py-base relative bg-slate-100 px-10">
      {/* Heading */}

      <div className="relative mx-4 md:mx-28 lg:mx-auto lg:w-max">
        <h2 className="relative z-10 mb-2 text-center font-sans text-5xl font-black text-black">
          Latest Projects
        </h2>
        <span className="absolute bottom-2 w-full border-b-[16px] border-emerald-300 border-opacity-90" />
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-3 py-8 text-xl font-semibold lg:gap-10">
        {filter.map((item) => (
          <button
            key={item.name}
            onClick={() => setImages(item.filter)}
            className="tracking-tight hover:text-emerald-500"
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="flex items-center gap-8">
        <m.div className="grid w-full gap-8 md:grid-cols-3">
          {images.slice(0, limit || images.length).map((i, idx) => (
            <GalleryCard key={i._key} i={i} idx={idx} />
          ))}
        </m.div>
      </div>

      {limit && (
        <div className="mt-10 flex justify-center">
          <Link href="/gallery">
            <a className="button">See More Of Our Work!</a>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Gallery
