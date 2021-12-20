import React from 'react'
import Testimonial from './Testimonial'

function Testimonials({ testimonials }) {
  console.log('testimonials', testimonials)

  return (
    <section className="flex flex-col gap-8 items-center py-20 px-10">
      <h2 className="text-5xl mb-2 font-black text-emerald-500 font-sans">
        Testimonials
      </h2>
      <div className="grid lg:grid-cols-2 gap-12">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
