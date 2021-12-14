import React from 'react'
import Image from 'next/image'
import { urlFor } from '../lib/client'
import { motion } from 'framer-motion'

function Jumbotron({ banner }) {
  const { image, subtitle } = banner

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { ease: 'easeOut', duration: 2 },
    },
  }

  const span = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { ease: 'easeOut', duration: 1 },
    },
  }

  const header1 = {
    hidden: { x: 300, opacity: 0, scale: 0.1 },
    show: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: { ease: 'backInOut', duration: 2 },
    },
  }

  const header2 = {
    hidden: { x: -300, opacity: 0, scale: 0.1 },
    show: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: { ease: 'backInOut', duration: 2 },
    },
  }

  const button1 = {
    hidden: { y: 400 },
    show: {
      y: 0,
      transition: { duration: 1.2, ease: [0.17, 0.67, 0.83, 0.67] },
    },
  }
  const button2 = {
    hidden: { y: 400 },
    show: {
      y: 0,
      transition: { duration: 1.5, ease: [0.17, 0.67, 0.83, 0.67] },
    },
  }

  return (
    <div className="relative h-screen">
      <Image className="object-cover" src={urlFor(image).url()} layout="fill" />
      <div className="absolute flex flex-col w-full h-full items-center justify-center text-center">
        <div className="max-w-7xl inline-flex flex-col gap-7 md:mt-20 lg:mt-64">
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="flex flex-col md:flex-row gap-2 items-center justify-center text-gray-100 text-[2.5rem] lg:text-7xl font-black"
          >
            <motion.h1 variants={header1}>Taylor Lawn</motion.h1>
            <motion.h1 variants={span}>&</motion.h1>
            <motion.h1 variants={header2}>Landscaping</motion.h1>
          </motion.div>

          <h4 className="text-3xl lg:text-5xl font-bold text-gray-100 ">
            {subtitle}
          </h4>
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <motion.button
              initial="hidden"
              animate="show"
              variants={button1}
              className="rounded-full text-lg px-8 py-3 text-white border-white hover:bg-green-600 hover:text-slate-50 border hover:border-slate-50 hover:bg-opacity-50 transition duration-300"
            >
              Contact us
            </motion.button>
            <motion.button
              initial="hidden"
              animate="show"
              variants={button2}
              className="text-green-600 text-lg bg-white rounded-full px-8 py-3 hover:bg-green-600 hover:text-white border hover:border-white hover:bg-opacity-50 transition duration-300"
            >
              Request an Estimate
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
