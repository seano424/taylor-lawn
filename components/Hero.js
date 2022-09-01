import Link from 'next/link'
import Image from 'next/image'
import { imageBuilder } from 'lib/client'

function Hero({ content }) {
  return (
    <div className="relative min-h-[600px] 2xl:h-[775px]">
      <Image
        className="w-full object-cover"
        alt="Hero Image"
        src={imageBuilder(content.image).width(1680).height(775).url()}
        layout="fill"
        priority
      />
      {/* Overlay, Text, & CTA */}
      <div className="absolute inset-0 bg-black/20">
        <div className="py-base flex h-full flex-col items-center justify-center gap-5 text-center">
          <h1 className="h1">{content.title}</h1>
          <p className="h4">{content.subtitle}</p>
          <div className="m-5 flex flex-col justify-center gap-3 md:flex-row lg:m-10">
            <Link href={content.cta.url ?? '/contact'}>
              <a className="button 5 transform bg-white text-emerald-700 shadow-2xl transition duration-300 hover:bg-emerald-700 hover:text-white">
                {content.cta.title ?? 'Request an Estimate Today!'}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
