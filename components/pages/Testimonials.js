import Testimonial from '../Testimonial'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Keyboard } from 'swiper'
import 'swiper/css/bundle'

function Testimonials({ content }) {
  return (
    <section name="testimonials" className="my-20 flex flex-col gap-8 lg:m-20">
      <div className="relative mx-4 md:mx-28 lg:mx-auto lg:w-max">
        <h2 className="relative z-10 mb-2 text-center font-sans text-5xl font-black text-black">
          What Our Clients Say
        </h2>
        <div className="absolute bottom-2 w-full border-b-[16px] border-emerald-300 border-opacity-90" />
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Keyboard]}
        keyboard={{ enabled: true }}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        className="mt-10"
      >
        {content.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <Testimonial testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials
