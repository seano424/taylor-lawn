import React from 'react'
import Testimonial from './Testimonial'

function Testimonials({ testimonials, limit }) {
  const length = limit ? limit : testimonials.length
  return (
    <section name="testimonials" className="pb-20">
      <h2 className="text-5xl mb-2 font-black text-emerald-500 font-sans text-center py-10">
        Testimonials
      </h2>
      <div className="grid lg:grid-cols-3 gap-8 mx-4 justify-center lg:mx-20">
        {testimonials.slice(0, length).map((testimonial) => (
          <Testimonial key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials

// flex-wrap overflow-scroll flex-col items-center scrollbar-hide
