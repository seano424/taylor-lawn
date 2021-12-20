import { StarIcon } from '@heroicons/react/solid'
import SanityBlockContent from '@sanity/block-content-to-react'

function Testimonial(item) {
  const { headline, location, name, testimonial } = item.testimonial
  return (
    <article className="flex flex-col gap-4 justify-between items-center text-center bg-slate-50 p-20 rounded-md">
      {/* Top of Card */}
      <div className=" flex flex-col items-center gap-2">
        <h3 className="text-2xl h-16">"{headline}"</h3>
        <div className="flex my-6">
          <StarIcon className="h-6 text-emerald-500" />
          <StarIcon className="h-6 text-emerald-500" />
          <StarIcon className="h-6 text-emerald-500" />
          <StarIcon className="h-6 text-emerald-500" />
          <StarIcon className="h-6 text-emerald-500" />
        </div>
        <SanityBlockContent className="" blocks={testimonial} />
      </div>

      {/* Bottom of Card */}
      <div className="">
        <p>{name}</p>
        <p>{location}</p>
      </div>
    </article>
  )
}

export default Testimonial
