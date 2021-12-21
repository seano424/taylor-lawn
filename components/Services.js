import React from 'react'

function Services() {
  return (
    <section className="grid grid-cols-2 py-20 px-32">
      <article className="flex flex-col justify-between gap-4 ">
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
        <button className="bg-emerald-500 text-white w-40 rounded-md py-2 text-xl">
          Contact Us
        </button>
      </article>
      <article className="grid grid-cols-2 gap-8 mx-auto">
        <div className="flex flex-col items-center justify-center shadow p-5 max-w-max">
          <img
            className="h-20"
            src="/images/pruning.png"
            alt="Icon for Landscape Design"
          />
          <h4 className=" w-48 text-center pt-4 text-xl">
            Landscape Designing
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center shadow p-5 max-w-max">
          <img
            className="h-20 "
            src="/images/plant.png"
            alt="Icon for Landscape Design"
          />
          <h4 className=" w-48 text-center pt-4 text-xl">
            Plant & Tree Solutions
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center shadow p-5 max-w-max">
          <img
            className="h-20"
            src="/images/sprinkler.png"
            alt="Icon for Landscape Design"
          />
          <h4 className=" w-48 text-center pt-4 text-xl">
            Irrigation System Service and Installation
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center shadow p-5 max-w-max">
          <img
            className="h-20"
            src="/images/lawn-mower.png"
            alt="Icon for Landscape Design"
          />
          <h4 className=" w-48 text-center pt-4 text-xl">
            Custom Mowing Design
          </h4>
        </div>
      </article>
    </section>
  )
}

export default Services
