import React from 'react'
import Testimonial from './Testimonial'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import 'swiper/css/keyboard';

function Testimonials({ testimonials }) {
  return (
     <section name="testimonials" className='flex flex-col mb-20'>
       <div className='relative'>
        <h2 className="text-5xl z-10 mb-2 font-black text-black font-sans text-center relative">
          What Our Clients Say
        </h2>
        <div className='border-b-[16px] border-emerald-300 border-opacity-90 mx-auto w-[32rem] relative -top-6 z-0'/>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Keyboard]} 
        keyboard={{ enabled: true }}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
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
