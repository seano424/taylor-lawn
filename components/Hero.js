import Link from 'next/link'
import Image from 'next/image'

function Hero() {
  return (
    <div className="relative h-[600px] ">
      <Image
        className="h-full w-full object-cover"
        alt="Hero Image"
        src="/images/hero.jpeg"
        layout="fill"
        priority
        sizes="(min-width: 75em) 100vw,
            90vw"
      />
      <div className="absolute inset-0">
        <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
          <h1 className="h1">Taylor Lawn & Landscaping L.L.C.</h1>
          <h4 className="h4">The True Green Thumb</h4>
          <div className="mx-10 flex flex-col justify-center gap-3 md:flex-row">
            <Link href="/contact">
              <a className="button">Contact us</a>
            </Link>
            <Link href="/contact">
              <a className="button bg-white text-emerald-700 transition duration-300 hover:border-emerald-700 hover:bg-emerald-700 hover:text-white">
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
