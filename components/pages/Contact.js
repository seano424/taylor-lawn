import { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import emailjs from 'emailjs-com'
import { FaClock, FaPhone, FaSearchLocation, FaMailBulk } from 'react-icons/fa'

import Modal from '../Modal'

const informationDetails = [
  {
    icon: <FaSearchLocation className="w-6 md:w-12" />,
    title: 'Location',
    subtitle: 'Merriam, Kansas',
    link: {},
  },
  {
    icon: <FaPhone className="w-6 md:w-12" />,
    title: 'Call Us',
    subtitle: '',
    link: {
      url: 'tel:+1-913-206-7214',
      title: '(913) 206 7214',
    },
  },
  {
    icon: <FaMailBulk className="w-6 md:w-12" />,
    title: 'taylorlawn@hotmail.com',
    subtitle: '',
    link: {
      url: 'mailto:taylorlawn@hotmail.com?subject=Hello Taylor Lawn and Landscaping!',
      title: 'Email Us!',
    },
  },
  {
    icon: <FaClock className="w-6 md:w-12" />,
    title: 'Working Ours',
    subtitle: '',
    richText: (
      <p>
        M-F: 8am - 5pm <br /> Saturday: 10:30am - 2pm
      </p>
    ),
    link: {},
  },
]

function Contact() {
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)
  return (
    <>
      <Modal open={open} setOpen={setOpen} />
      <section className="py-base grid gap-10 bg-gray-50/25 text-emerald-700 lg:grid-cols-2 xl:px-36">
        <div>
          <div className="flex flex-col items-center gap-4 text-3xl font-black xl:text-5xl">
            <h2>Contact details</h2>
            <p className="text-base font-normal text-gray-600">
              TXT or CALL for a free estimate today
            </p>
            <a className="font-serif" href="tel:+1-913-206-7214">
              (913) 206 7214
            </a>
          </div>
          <div className="my-5 mx-auto grid max-w-sm items-center gap-10 text-center text-lg sm:max-w-lg sm:grid-cols-2 md:my-10 lg:m-12 lg:max-w-full lg:text-left">
            {informationDetails.map((info) => (
              <div key={info.title} className="flex flex-col items-center">
                {info.icon}
                {info.title && <p>{info.title}</p>}
                {info.subtitle && (
                  <p className="text-gray-600">{info.subtitle}</p>
                )}
                {info.link && (
                  <a className="text-gray-600" href={info.link.url}>
                    {info.link.title}
                  </a>
                )}
                {info.richText && (
                  <div className="text-center">{info.richText}</div>
                )}
              </div>
            ))}
          </div>
        </div>
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
          <Form className="container mx-auto flex max-w-sm flex-col gap-4 px-3 sm:max-w-lg lg:mx-0 lg:max-w-full">
            <h2 className="mb-4 text-center text-5xl font-black text-emerald-700 sm:text-left">
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
