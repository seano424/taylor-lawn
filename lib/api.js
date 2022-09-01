import client, { previewClient } from './client'

const getClient = (preview) => (preview ? previewClient : client)

export async function getTestimonials() {
  const results = await getClient().fetch(
    `*[_type == "testimonials"]{headline, name, location, testimonial}`
  )
  return results
}

export async function getAbout() {
  const results = await getClient().fetch(`*[_type == "about"][0]`)
  return results
}

export async function getGallery() {
  const results = await getClient().fetch(`*[_type == "gallery"][0]{images}`)
  return results
}

export async function getLogo() {
  const results = await getClient().fetch(`*[_type == "logo"][0]{image}`)
  return results
}

export async function getAll() {
  const data = await getClient().fetch(
    `*[_type in ["about", "gallery", "hero", "testimonials", "banner"]]`
  )

  const about = data.find((data) => data._type === 'about')
  const gallery = data.find((data) => data._type === 'gallery')
  const hero = data.find((data) => data._type === 'banner')
  const testimonials = data.filter((data) => data._type === 'testimonials')

  return { gallery, about, hero, testimonials }
}
