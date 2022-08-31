import { FaClock, FaPhone, FaSearchLocation, FaMailBulk } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="py-base flex flex-col flex-wrap justify-between gap-8 px-10 md:flex-row xl:px-20">
      {/* Contact Us */}
      <article className="mb-6 flex flex-col md:w-80 lg:w-max xl:w-64">
        <h2 className="mb-6 text-2xl font-black">Contact Us</h2>
        <div className="mb-4 flex items-center gap-2">
          <FaPhone className="h-6 w-6 text-emerald-500" />
          <a
            className="text-gray-700 hover:text-emerald-500"
            href="tel:+1-913-206-7214"
          >
            (913) 206 7214
          </a>
        </div>
        <div className="mb-4 flex items-center gap-2">
          <FaMailBulk className="h-6 w-6 text-emerald-500" />
          <a
            className="hover:text-emerald-500"
            href="mailto:taylorlawn@hotmail.com?subject=Hello Taylor Lawn and Landscaping!"
          >
            taylorlawn@hotmail.com
          </a>
        </div>
        <div className="mb-4 flex items-center gap-2">
          <FaSearchLocation className="h-6 w-6 text-emerald-500" />
          <p className="text-gray-700">Merriam, KS 66203</p>
        </div>
      </article>

      {/* About Us */}
      <article className="mb-6 hidden flex-col sm:flex  md:w-80 lg:w-max xl:w-64">
        <h2 className="mb-6 text-2xl font-black">About Us</h2>
        <a
          href="/"
          className="mb-4 border-b text-gray-700 hover:text-emerald-500"
        >
          Home
        </a>
        <a
          href="/about"
          className="mb-4 border-b text-gray-700 hover:text-emerald-500"
        >
          About
        </a>
        <a
          href="/contact"
          className="mb-4 border-b text-gray-700 hover:text-emerald-500"
        >
          Contact
        </a>
      </article>

      {/* Popular Services */}
      <article className="mb-6 flex flex-col md:w-80 lg:w-max xl:w-64">
        <h2 className="mb-6 text-2xl font-black">Popular Services</h2>
        <p className="mb-4 border-b text-gray-700">Lawn Mowing</p>
        <p className="mb-4 border-b text-gray-700">Hedge Cutting</p>
        <p className="mb-4 border-b text-gray-700">Seasonal Flower Planting</p>
        <p className="mb-4 border-b text-gray-700">Garden Remodeling</p>
      </article>

      {/* Emergency Service */}
      <article className="mb-6 flex flex-col md:w-80 lg:w-max xl:w-64">
        <h2 className="mb-6 text-2xl font-black">Emergency Service</h2>
        <div className="mb-4 flex items-center gap-2">
          <FaPhone className="h-6 w-6 text-emerald-500" />
          <a className="text-gray-700" href="tel:+1-913-206-7214">
            (913) 206 7214
          </a>
        </div>
        <div className="mb-4 flex items-center gap-2">
          <FaClock className="h-6 w-6 text-emerald-500" />

          <p className="text-gray-700 ">
            Mon - Fri: 8:00-5:00/ Sat: 10:30-2:00
          </p>
        </div>
      </article>
    </footer>
  )
}

export default Footer
