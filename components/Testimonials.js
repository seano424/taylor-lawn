import React from 'react'
import Testimonial from './Testimonial'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Keyboard } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/keyboard'

function Testimonials({ testimonials }) {
  return (
    <section name="testimonials" className="flex flex-col gap-8 my-20">
      <div className="relative mx-4 md:mx-28 lg:w-max lg:mx-auto">
        <h2 className="text-5xl z-10 mb-2 font-black text-black font-sans text-center relative">
          What Our Clients Say
        </h2>
        <div className="border-b-[16px] border-emerald-300 border-opacity-90 absolute w-full bottom-2" />
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Keyboard]}
        keyboard={{ enabled: true }}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        className="mt-10"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <Testimonial testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials

// flex-wrap overflow-scroll flex-col items-center scrollbar-hide
