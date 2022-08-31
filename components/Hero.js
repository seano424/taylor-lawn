import Link from 'next/link'
import Image from 'next/image'
import { imageBuilder } from 'lib/client'

function Hero({ content }) {
  return (
    <div className="relative min-h-[600px]">
      <Image
        className="min-h-[1200px] w-full object-cover"
        alt="Hero Image"
        src={imageBuilder(content.image).width(1680).height(600).url()}
        width="1680"
        height="730"
        layout="fixed"
        priority
      />
      <div className="absolute inset-0">
        <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
          <h1 className="h1">{content.title}</h1>
          <p className="h4">{content.subtitle}</p>
          <div className="mx-10 flex flex-col justify-center gap-3 md:flex-row">
            <Link href="/contact">
              <a className="button 5 transform bg-white text-emerald-700 shadow-2xl transition duration-300 hover:bg-emerald-700 hover:text-white">
                Request an Estimate Today!
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
