import { urlFor } from 'lib/client'
import Link from 'next/link'

function Hero({ content }) {
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
          <div className="flex flex-col md:flex-row gap-2 items-center justify-center text-gray-100 text-4xl sm:text-5xl lg:text-7xl font-black">
            <h1>Taylor Lawn & Landscaping L.L.C.</h1>
          </div>

          <p className="text-3xl font-serif lg:text-5xl font-bold text-gray-100 ">
            {subtitle}
          </p>
          <div className="flex flex-col md:flex-row mx-10 gap-3 justify-center">
            <Link href="/contact">
              <a className="rounded-full lg:text-lg px-8 py-3 text-white border-emerald-700 bg-emerald-700 hover:text-slate-50 border hover:border-slate-50 hover:bg-opacity-50 transition duration-300 font-bold">
                Contact us
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-emerald-700 lg:text-lg bg-white rounded-full px-8 py-3 hover:bg-emerald-500 hover:text-white border hover:border-white hover:bg-opacity-50 transition duration-300 font-bold">
                Request an Estimate
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
