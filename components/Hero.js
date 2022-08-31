import Link from 'next/link'
import Image from 'next/image'
import { imageBuilder } from 'lib/client'

function Hero({ content }) {
  return (
    <div className="relative min-h-[840px] sm:min-h-[950px] xl:min-h-[775px]">
      <Image
        className="min-h-[1200px] w-full object-cover"
        alt="Hero Image"
        src={imageBuilder(content.image).width(1680).height(775).url()}
        layout="fill"
        priority
      />
      <div className="absolute inset-0">
        <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
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
