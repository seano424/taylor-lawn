import React from 'react'
import Testimonial from './Testimonial'

function Testimonials({ testimonials }) {
  console.log('testimonials', testimonials)

  return (
    <div>
      <h2 className="text-5xl mb-2 font-black text-emerald-500 font-sans text-center py-10">
        Testimonials
      </h2>
      <section className="flex flex-wrap overflow-scroll flex-col items-center scrollbar-hide">
        <div className="flex gap-8 pb-20 px-10">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial._id} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Testimonials
