import { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import emailjs from 'emailjs-com'
import { FaClock, FaPhone, FaSearchLocation, FaMailBulk } from 'react-icons/fa'

import Modal from '../Modal'

function Contact() {
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)
  return (
    <>
      <Modal open={open} setOpen={setOpen} />
      <section className="py-base grid gap-10 bg-gray-50/25 lg:grid-cols-2 xl:px-36">
        <article className="text-emerald-700">
          <div className="flex flex-col items-center gap-4 text-3xl font-black xl:text-5xl">
            <h2>Contact details</h2>
            <p className="text-base font-normal text-gray-600">
              TXT or CALL for a free estimate today
            </p>
            <a className="font-serif" href="tel:+1-913-206-7214">
              (913) 206 7214
            </a>
          </div>
          <div className="my-10 mx-6 grid items-center gap-4 text-center text-lg md:grid-cols-2 lg:m-12 lg:gap-10 lg:text-left">
            <div className="flex flex-col items-center">
              <FaSearchLocation className="w-6 md:w-12" />
              <p>Location</p>
              <p className="text-gray-600">Merriam, Kansas</p>
            </div>
            <div className=" flex flex-col items-center">
              <FaPhone className="w-6 md:w-12" />
              <p>Call Us</p>
              <a className="text-gray-600" href="tel:+1-913-206-7214">
                (913) 206 7214
              </a>
            </div>
            <div className="flex flex-col items-center">
              <FaMailBulk className="w-6 md:w-12" />
              <a
                className="text-gray-600"
                href="mailto:taylorlawn@hotmail.com?subject=Hello Taylor Lawn and Landscaping!"
              >
                Write to Us
              </a>
            </div>
            <div className="flex flex-col items-center gap-1">
              <FaClock className="w-6 md:w-12" />
              <p>Working Hours</p>
              <p className="text-gray-600">Monday - Friday:</p>
              <span>8:00-5:00</span>
              <p className="text-gray-600">Saturday:</p>
              <span>10:30-2:00</span>
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
          <Form className="mx-auto flex max-w-sm flex-col gap-4  px-3 sm:mx-0 sm:max-w-full">
            <h2 className="mb-4 text-5xl font-black text-emerald-700">
              Have a question?
            </h2>
            <label className="font-thin text-gray-900" htmlFor="name">
              Your Name (Required)
            </label>
            <Field
              id="name"
              aria-labelledby="name"
              className="rounded-md border-gray-300 outline-none focus:border-emerald-500 focus:ring-0"
              name="name"
              type="text"
            />

            <label className="font-thin text-gray-900" htmlFor="email">
              Email (Required)
            </label>
            <Field
              id="email"
              aria-labelledby="email"
              className="rounded-md border-gray-300 outline-none focus:border-emerald-500 focus:ring-0"
              name="email"
              type="email"
            />

            <label className="font-thin text-gray-900" htmlFor="subject">
              Subject
            </label>
            <Field
              id="subject"
              aria-labelledby="subject"
              className="rounded-md border-gray-300 outline-none focus:border-emerald-500 focus:ring-0"
              name="subject"
              type="text"
            />

            <label className="font-thin text-gray-900" htmlFor="message">
              Message
            </label>

            <textarea
              aria-labelledby="message"
              className="w-full rounded-md border border-gray-300 outline-none focus:border-emerald-500 focus:ring-0"
              name="message"
              id="message"
              cols="30"
              rows="6"
              required
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></textarea>

            <button className="button text-lg" type="submit">
              Send
            </button>
          </Form>
        </Formik>
      </section>
    </>
  )
}

export default Contact
