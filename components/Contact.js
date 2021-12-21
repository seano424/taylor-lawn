import { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import emailjs from 'emailjs-com'
import {
  LocationMarkerIcon,
  PhoneIcon,
  ClockIcon,
  MailIcon,
} from '@heroicons/react/outline'
import Modal from './Modal'

function Contact() {
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)
  return (
    <>
      <Modal open={open} setOpen={setOpen} />
      <section className="grid lg:grid-cols-2 gap-10 xl:px-36 py-20 bg-gray-50">
        <article className="items-center text-emerald-500 flex flex-col gap-4">
          <h2 className="text-5xl font-black">Contact details</h2>
          <p className="text-gray-600">TXT or CALL for a free estimate today</p>
          <h2 className="text-5xl font-black">913-206-7214</h2>
          <div className="contact-icons flex items-center justify-center flex-wrap gap-10 py-8">
            <div className="w-56 sm:w-64 lg:w-56  flex flex-col items-center">
              <LocationMarkerIcon className="w-12" />
              <h4>Location</h4>
              <p className="text-gray-600">Merriam, Kansas</p>
            </div>
            <div className="w-56 sm:w-64 lg:w-56  flex flex-col items-center">
              <PhoneIcon className="w-12" />
              <h4>Call Us</h4>
              <p className="text-gray-600">913-206-7214</p>
            </div>
            <div className="w-56 sm:w-64 lg:w-56  flex flex-col items-center">
              <MailIcon className="w-12" />
              <h4>Write to Us</h4>
              <p className="text-gray-600">taylorlawn@hotmail.com</p>
            </div>
            <div className="w-56 sm:w-64 lg:w-56  flex flex-col items-center">
              <ClockIcon className="w-12" />
              <h4>Working Hours</h4>
              <p className="text-gray-600">Monday - Friday: 8:00-5:00</p>
              <p className="text-gray-600">Saturday: 10:30-2:00</p>
            </div>
          </div>
        </article>
        <Formik
          initialValues={{ name: '', email: '', subject: '', message: '' }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            subject: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
          })}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              setOpen(true)
              actions.setSubmitting(false)
            }, 400)
            emailjs.send(
              'service_f2ppr16',
              'template_cauvbxi',
              {
                name: values.name,
                email: values.email,
                subject: values.subject,
                message: values.message,
              },
              'user_RZe3wfpwRqUFxAV07nmSv'
            )
            actions.resetForm()
            setValue('')
          }}
        >
          <Form className="flex flex-col gap-2 mx-10 lg:mx-0">
            <h2 className="text-5xl mb-4 text-emerald-500 font-black">
              Have a question?
            </h2>
            <label className="text-gray-700 font-thin" htmlFor="name">
              Your Name (Required)
            </label>
            <Field
              className="border-gray-300 rounded-md focus:ring-0 focus:border-emerald-500 outline-none"
              name="name"
              type="text"
            />

            <label className="text-gray-700 font-thin" htmlFor="email">
              Email (Required)
            </label>
            <Field
              className="border-gray-300 rounded-md focus:ring-0 focus:border-emerald-500 outline-none"
              name="email"
              type="email"
            />

            <label className="text-gray-700 font-thin" htmlFor="subject">
              Subject
            </label>
            <Field
              className="border-gray-300 rounded-md focus:ring-0 focus:border-emerald-500 outline-none"
              name="subject"
              type="text"
            />

            <label className="text-gray-700 font-thin" htmlFor="message">
              Message
            </label>

            <textarea
              className="border border-gray-300 rounded-md focus:ring-0 focus:border-emerald-500 outline-none w-full"
              name="message"
              id="message"
              cols="30"
              rows="6"
              required
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></textarea>

            <button
              className="bg-emerald-500 text-white w-40 rounded-md py-2 text-lg"
              type="submit"
            >
              Send
            </button>
          </Form>
        </Formik>
      </section>
    </>
  )
}

export default Contact
