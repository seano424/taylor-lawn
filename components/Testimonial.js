import { StarIcon } from '@heroicons/react/solid'
import SanityBlockContent from '@sanity/block-content-to-react'

function Testimonial(item) {
  const { headline, location, name, testimonial } = item.testimonial
  return (
    <section className="flex flex-col font-serif text-center p-10 shadow-xl bg-gray-50 max-w-5xl mx-auto rounded-md mb-12">
      <div className='h-40 flex flex-col justify-center'>
        <h3 className="text-3xl font-bold mb-4">{headline}</h3>
        <p className='font-black'>{name}</p>
        <p className='font-black'>{location}</p>
        <div className="flex justify-center mt-4">
          <StarIcon className="h-6 text-emerald-300" />
          <StarIcon className="h-6 text-emerald-300" />
          <StarIcon className="h-6 text-emerald-300" />
          <StarIcon className="h-6 text-emerald-300" />
          <StarIcon className="h-6 text-emerald-300" />
        </div>
      </div>
      <div className='flex-1 flex flex-col justify-center mt-6'>
        <div className='text-lg flex'>
          <span className='text-9xl text-gray-200'>〝</span>
          <div className='z-50 relative max-w-xl'>
          <SanityBlockContent blocks={testimonial} />

          </div>
          <span className='text-9xl text-gray-200'>〞</span>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
