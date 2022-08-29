import Link from 'next/link'

function Hero() {
  return (
    <div className="relative">
      <img
        className="w-full object-cover"
        alt="Hero Image"
        src="/images/hero.jpeg"
        layout="fill"
        sizes="(min-width: 75em) 100vw,
            90vw"
      />
      <div className="absolute inset-0 border-8">
        <h1 className="text-4xl font-black text-gray-100 md:text-6xl 2xl:text-7xl">
          Taylor Lawn & Landscaping L.L.C.
        </h1>

        <p className="font-serif text-3xl font-bold text-gray-100 lg:text-5xl ">
          The True Green Thumb
        </p>
        <div className="mx-10 flex flex-col justify-center gap-3 md:flex-row">
          <Link href="/contact">
            <a className="rounded-full border border-emerald-700 bg-emerald-700 px-8 py-3 font-bold text-white transition duration-300 hover:border-slate-50 hover:bg-opacity-50 hover:text-slate-50 lg:text-lg">
              Contact us
            </a>
          </Link>
          <Link href="/contact">
            <a className="rounded-full border bg-white px-8 py-3 font-bold text-emerald-700 transition duration-300 hover:border-white hover:bg-emerald-500 hover:bg-opacity-50 hover:text-white lg:text-lg">
              Request an Estimate
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
