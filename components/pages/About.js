import SanityBlockContent from '@sanity/block-content-to-react'
import { imageBuilder } from 'lib/client'
import Image from 'next/image'

export default function About({ content }) {
  const { bio1, bio2, image } = content
  return (
    <section>
      <div className="bg-gray-50 p-10 text-center text-lg lg:p-20">
        <div className="flex flex-col gap-6 pb-8 md:pb-16">
          <h1 className="text-4xl font-black text-emerald-700 md:text-6xl ">
            About Us
          </h1>
          <p className="font-sans text-2xl font-bold italic text-gray-900 md:text-4xl">
            Taylor Lawn & Landscaping, L.L.C. <br />
            "The True Green Thumb!"
          </p>
        </div>
        <div className="flex grid-cols-2 flex-col-reverse gap-10 lg:grid">
          <div className="flex flex-col gap-4 text-gray-800">
            <h3 className="text-xl font-bold">About our company</h3>
            <SanityBlockContent blocks={bio1} />
            <SanityBlockContent blocks={bio2} />
            <h3 className="text-xl font-bold">Office Hours</h3>
            <p>Monday - Friday 8:00 am to 5:00pm</p>
            <p>Saturday - 10:30 am to 2:00 pm</p>
          </div>
          <Image
            alt="About Page Image"
            className="rounded-lg object-cover object-bottom "
            src={imageBuilder(image).width(740).height(472).fit('crop').url()}
            height="472"
            width="740"
          />
        </div>
      </div>
    </section>
  )
}
