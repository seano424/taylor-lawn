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
        <article className="text-emerald-500">
          <div className="flex flex-col gap-4 items-center text-3xl xl:text-5xl font-black">
            <h2>Contact details</h2>
            <p className="text-gray-600 font-normal text-base">
              TXT or CALL for a free estimate today
            </p>
            <a className="font-serif" href="tel:+1-913-206-7214">
              (913) 206 7214
            </a>
          </div>
          <div className="contact-icons text-sm sm:text-lg grid grid-cols-2 gap-4 lg:gap-10 my-10 mx-6 lg:m-12 items-center text-center lg:text-left">
            <div className="flex flex-col items-center">
              <LocationMarkerIcon className="w-12" />
              <h4>Location</h4>
              <p className="text-gray-600">Merriam, Kansas</p>
            </div>
            <div className=" flex flex-col items-center">
              <PhoneIcon className="w-12" />
              <h4>Call Us</h4>
              <a className="text-gray-600" href="tel:+1-913-206-7214">
                (913) 206 7214
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MailIcon className="w-12" />
              <h4>Write to Us</h4>
              <a
                className="text-gray-600 text-xs sm:text-base"
                href="mailto:taylorlawn@hotmail.com?subject=Hello Taylor Lawn and Landscaping!"
              >
                taylorlawn@hotmail.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <ClockIcon className="w-12" />
              <h4>Working Hours</h4>
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
          <Form className="flex flex-col gap-4 mx-10 lg:mx-0">
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
