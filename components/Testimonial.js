import { StarIcon } from '@heroicons/react/solid'
import SanityBlockContent from '@sanity/block-content-to-react'

function Testimonial(item) {
  const { headline, location, name, testimonial } = item.testimonial
  return (
    <div className=" w-96 text-center bg-slate-50 p-10 rounded-md">
      <div>
        <h3 className="text-2xl">"{headline}"</h3>
        <div className="flex justify-center my-6">
          <StarIcon className="h-6 text-emerald-500" />
          <StarIcon className="h-6 text-emerald-500" />
          <StarIcon className="h-6 text-emerald-500" />
          <StarIcon className="h-6 text-emerald-500" />
          <StarIcon className="h-6 text-emerald-500" />
        </div>
      </div>
      <SanityBlockContent className="" blocks={testimonial} />
      <p>{name}</p>
      <p>{location}</p>
    </div>
  )
}

export default Testimonial
