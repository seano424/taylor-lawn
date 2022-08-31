import Image from 'next/image'
import Link from 'next/link'

const iconItems = [
  { heading: 'Landscape Designing', icon: 'pruning' },
  { heading: 'Plant & Tree Solutions', icon: 'plant' },
  { heading: 'Irrigation System Service and Installation', icon: 'sprinkler' },
  { heading: 'Custom Mowing Design', icon: 'lawn-mower' },
]

function Services() {
  return (
    <section className="py-base grid gap-10 bg-white p-10 lg:mt-0 lg:grid-cols-2 xl:p-20">
      <div className="flex flex-col justify-center gap-8">
        <h2 className="text-3xl font-black text-emerald-700 lg:text-5xl">
          We offer Hard & Soft Landscape Solutions
        </h2>
        <p className="tracking-wide text-gray-900 lg:text-xl">
          Whether you're looking for hard or soft landscape solutions, we've got
          you covered. Our services include 3D Image Design and Build, Landscape
          Maintenance Retaining Walls, French Drains, Custom Mowing Design,
          Renovation Irrigation System Service and Installation, and Snow
          Removal and Ice Management.
        </p>
        <Link href="/contact">
          <a className="button w-max 2xl:text-3xl">Contact Us To Learn More</a>
        </Link>
      </div>
      <div className="hidden grid-cols-2 gap-10 lg:grid">
        {iconItems.map((item) => (
          <div
            key={item.icon}
            className="flex flex-col items-center justify-center rounded-lg p-5 shadow-lg"
          >
            <Image
              src={`/images/${item.icon}.png`}
              alt="Icon for Landscape Design"
              height={100}
              width={100}
            />
            <h4 className="w-48 pt-4 text-center text-xl">{item.heading}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
