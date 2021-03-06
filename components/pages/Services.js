import { useRouter } from 'next/router'
import Image from 'next/image'

const iconItems = [
  { heading: 'Landscape Designing', icon: 'pruning' },
  { heading: 'Plant & Tree Solutions', icon: 'plant' },
  { heading: 'Irrigation System Service and Installation', icon: 'sprinkler' },
  { heading: 'Custom Mowing Design', icon: 'lawn-mower' },
]

function Services() {
  const { push } = useRouter()
  return (
    <section className="grid lg:grid-cols-2 p-4 xl:p-20 my-10 lg:mt-0 bg-white">
      <div className="flex flex-col gap-8 justify-between items-center text-center">
        <h2 className="text-3xl lg:text-5xl text-emerald-700 font-black">
          We offer Hard & Soft Landscape Solutions
        </h2>
        <p className="text-gray-900 lg:text-xl tracking-wide leading-relaxed max-w-xl">
          Whether you're looking for hard or soft landscape solutions, we've got
          you covered. Our services include 3D Image Design and Build, Landscape
          Maintenance Retaining Walls, French Drains, Custom Mowing Design,
          Renovation Irrigation System Service and Installation, and Snow
          Removal and Ice Management.
        </p>
        <button
          onClick={() => push('/contact')}
          className="button mx-auto lg:text-3xl"
        >
          Contact Us
        </button>
      </div>
      <div className="hidden lg:grid grid-cols-2 gap-10">
        {iconItems.map((item) => (
          <div
            key={item.icon}
            className="flex flex-col items-center justify-center shadow p-5"
          >
            <Image
              src={`/images/${item.icon}.png`}
              alt="Icon for Landscape Design"
              height={100}
              width={100}
            />
            <h4 className="w-48 text-center pt-4 text-xl">{item.heading}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
