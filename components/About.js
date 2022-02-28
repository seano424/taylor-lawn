import SanityBlockContent from '@sanity/block-content-to-react'
import { imageBuilder } from '../lib/client'
import Image from 'next/image'

function About({ about }) {
  const { bio1, bio2, image } = about
  return (
    <div name="about" className="p-10 lg:p-20 text-center bg-gray-50 text-lg">
      <div className="pb-8 md:pb-16 flex flex-col gap-6">
        <h1 className="text-4xl md:text-6xl font-black text-emerald-500 ">
          Taylor Lawn & Landscaping, L.L.C.
        </h1>
        <h2 className="text-2xl text-gray-900 md:text-4xl font-bold font-sans italic">
          "The True Green Thumb!"
        </h2>
      </div>
      <div className="flex flex-col-reverse lg:grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-4 text-gray-800">
          <h4 className="text-xl font-bold">About our company</h4>
          <SanityBlockContent blocks={bio1} />
          <SanityBlockContent blocks={bio2} />
          <h4 className="text-xl font-bold">Office Hours</h4>
          <p>Monday - Friday 8:00 am to 5:00pm</p>
          <p>Saturday - 10:30 am to 2:00 pm</p>
        </div>
        <div className="relative h-64 lg:h-full w-full shadow-xl">
          <Image
            alt="About Page Image"
            className="object-cover object-bottom rounded-lg "
            src={imageBuilder(image).url()}
            layout="fill"
            priority={true}
          />
        </div>
      </div>
    </div>
  )
}

export default About
