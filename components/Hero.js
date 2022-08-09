import { urlFor } from 'lib/client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { span, container, header1, header2 } from 'lib/framer'

function Hero({ content }) {
  const { push } = useRouter()
  const { image, subtitle } = content

  return (
    <div name="top" className="relative h-screen">
      <img 
        className="object-cover absolute h-screen w-screen" 
        alt="Hero Image"
        src={urlFor(image).url()} 
        layout="fill" 
      />
      <div className="absolute flex flex-col w-full h-full items-center justify-center text-center lg:-top-12">
        <div className="max-w-7xl inline-flex flex-col gap-7">
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="flex flex-col md:flex-row gap-2 items-center justify-center text-gray-100 text-4xl sm:text-5xl lg:text-7xl font-black"
          >
            <motion.h1 variants={header1}>Taylor Lawn</motion.h1>
            <motion.h1 variants={span}>&</motion.h1>
            <motion.h1 variants={header2}>Landscaping L.L.C.</motion.h1>
          </motion.div>

          <p className="text-3xl font-serif lg:text-5xl font-bold text-gray-100 ">
            {subtitle}
          </p>
          <div
            className="flex flex-col md:flex-row mx-10 gap-3 justify-center"
          >
            <button
              onClick={() => push('/contact')}
              className="rounded-full lg:text-lg px-8 py-3 text-white border-emerald-700 bg-emerald-700 hover:text-slate-50 border hover:border-slate-50 hover:bg-opacity-50 transition duration-300 font-bold"
            >
              Contact us
            </button>
            <button
              onClick={() => push('/contact')}
              className="text-emerald-700 lg:text-lg bg-white rounded-full px-8 py-3 hover:bg-emerald-500 hover:text-white border hover:border-white hover:bg-opacity-50 transition duration-300 font-bold"
            >
              Request an Estimate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
