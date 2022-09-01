import { FaStar } from 'react-icons/fa'
import SanityBlockContent from '@sanity/block-content-to-react'

function Testimonial(props) {
  const { headline, location, name, testimonial } = props.testimonial
  return (
    <section className="mx-auto flex max-w-5xl flex-col rounded-md text-center font-serif lg:mb-12">
      <div className="flex flex-col justify-center lg:h-40">
        <h3 className="mb-4 text-3xl font-bold">{headline}</h3>
        <p className="font-black">{name}</p>
        <p className="font-black">{location}</p>
        <div className="mt-4 flex justify-center">
          <FaStar className="h-6 text-emerald-300" />
          <FaStar className="h-6 text-emerald-300" />
          <FaStar className="h-6 text-emerald-300" />
          <FaStar className="h-6 text-emerald-300" />
          <FaStar className="h-6 text-emerald-300" />
        </div>
      </div>
      <div className="mt-6 flex">
        <div className="flex text-lg">
          <span className="text-gray-200 lg:text-9xl">〝</span>
          <div className="relative z-50 max-w-xl">
            <SanityBlockContent blocks={testimonial} />
          </div>
          <span className="text-gray-200 lg:text-9xl">〞</span>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
