import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
  ClockIcon,
} from '@heroicons/react/solid'

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-8 flex-wrap justify-between py-10 px-10 xl:px-20">
      {/* Contact Us */}
      <article className="flex flex-col mb-6 md:w-80 lg:w-max xl:w-64">
        <h2 className="text-2xl mb-6 font-black">Contact Us</h2>
        <div className="flex items-center gap-2 mb-4">
          <PhoneIcon className="h-6 w-6 text-emerald-500" />
          <a
            className="text-gray-700 hover:text-emerald-500"
            href="tel:+1-913-206-7214"
          >
            (913) 206 7214
          </a>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <MailIcon className="h-6 w-6 text-emerald-500" />
          <a
            className="hover:text-emerald-500"
            href="mailto:taylorlawn@hotmail.com?subject=Hello Taylor Lawn and Landscaping!"
          >
            taylorlawn@hotmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <LocationMarkerIcon className="h-6 w-6 text-emerald-500" />
          <p className="text-gray-700">Merriam, KS 66203</p>
        </div>
      </article>

      {/* About Us */}
      <article className="hidden sm:flex flex-col mb-6  md:w-80 lg:w-max xl:w-64">
        <h2 className="text-2xl mb-6 font-black">About Us</h2>
        <a
          href="/"
          className="text-gray-700 mb-4 border-b hover:text-emerald-500"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-gray-700 mb-4 border-b hover:text-emerald-500"
        >
          About
        </a>
        <a
          href="/contact"
          className="text-gray-700 mb-4 border-b hover:text-emerald-500"
        >
          Contact
        </a>
      </article>

      {/* Popular Services */}
      <article className="flex flex-col mb-6 md:w-80 lg:w-max xl:w-64">
        <h2 className="text-2xl mb-6 font-black">Popular Services</h2>
        <p className="text-gray-700 mb-4 border-b">Lawn Mowing</p>
        <p className="text-gray-700 mb-4 border-b">Hedge Cutting</p>
        <p className="text-gray-700 mb-4 border-b">Seasonal Flower Planting</p>
        <p className="text-gray-700 mb-4 border-b">Garden Remodeling</p>
      </article>

      {/* Emergency Service */}
      <article className="flex flex-col mb-6 md:w-80 lg:w-max xl:w-64">
        <h2 className="text-2xl mb-6 font-black">Emergency Service</h2>
        <div className="flex items-center gap-2 mb-4">
          <PhoneIcon className="h-6 w-6 text-emerald-500" />
          <a className="text-gray-700" href="tel:+1-913-206-7214">
            (913) 206 7214
          </a>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <ClockIcon className="h-6 w-6 text-emerald-500" />

          <p className="text-gray-700 ">
            Mon - Fri: 8:00-5:00/ Sat: 10:30-2:00
          </p>
        </div>
      </article>
    </footer>
  )
}

export default Footer
