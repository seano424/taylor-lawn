import React from 'react'
import SanityBlockContent from '@sanity/block-content-to-react'
import { imageBuilder } from '../lib/client'
import Image from 'next/image'

function About({ about }) {
  console.log(about)
  const { bio1, bio2, image } = about
  return (
    <div name="about" className="px-20 py-20 text-center bg-gray-50">
      <div className="pb-8 md:pb-16 flex flex-col gap-6">
        <h1 className="text-4xl md:text-6xl font-black text-green-900 ">
          Taylor Lawn & Landscaping, L.L.C.
        </h1>
        <h2 className="text-2xl text-gray-900 md:text-4xl font-bold font-sans italic">
          "The True Green Thumb!"
        </h2>
      </div>
      <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-bold">About our company</h4>
          <SanityBlockContent blocks={bio1} />
          <SanityBlockContent blocks={bio2} />
          <h4 className="text-xl font-bold">Office Hours</h4>
          <p>Monday - Friday 8:00 am to 5:00pm</p>
          <p>Saturday - 10:30 am to 2:00 pm</p>
        </div>
        <div className="relative h-44 md:h-full w-full shadow-xl">
          <Image
            className="object-cover rounded-lg "
            src={imageBuilder(image).url()}
            layout="fill"
          />
        </div>
      </div>
    </div>
  )
}

export default About
