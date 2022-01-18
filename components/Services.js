import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'

const iconItems = [
  {heading: 'Landscape Designing', icon: 'pruning'}, 
  {heading: 'Plant & Tree Solutions', icon: 'plant'}, 
  {heading: 'Irrigation System Service and Installation', icon: 'sprinkler'}, 
  {heading: 'Custom Mowing Design', icon: 'lawn-mower'}, 
]

function Services() {
  const { push } = useRouter()
  return (
    <section className="grid lg:grid-cols-2 p-20">
      <div className="flex flex-col justify-between gap-4 ">
        <h2 className="text-5xl text-emerald-500 font-black">
          We offer Hard & Soft Landscape Solutions
        </h2>
        <p className="text-gray-700 text-xl tracking-wide leading-relaxed max-w-xl">
          Whether you're looking for hard or soft landscape solutions, we've got
          you covered. Our services include 3D Image Design and Build, Landscape
          Maintenance Retaining Walls, French Drains, Custom Mowing Design,
          Renovation Irrigation System Service and Installation, and Snow
          Removal and Ice Management.
        </p>
        <button
          onClick={() => push('/contact')}
          className="bg-emerald-500 text-white w-40 rounded-md py-2 text-xl"
        >
          Contact Us
        </button>
      </div>
      <div className="hidden lg:grid grid-cols-2 gap-10">
        {iconItems.map(item => (
          <div key={item.icon} className="flex flex-col items-center justify-center shadow p-5">
            <Image
              src={`/images/${ item.icon }.png`}
              alt="Icon for Landscape Design"
              height={100}
              width={100}
            />
            <h4 className=" w-48 text-center pt-4 text-xl">
              { item.heading }
            </h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
