import client, { previewClient } from './client'

const getClient = (preview) => (preview ? previewClient : client)

export async function getTestimonials() {
  const results = await getClient().fetch(
    `*[_type == "testimonials"]{headline, name, location, testimonial}`
  )
  return results
}

export async function getHero() {
  const results = await getClient().fetch(
    `*[_type == "banner"][0]{_id, image {asset}, title, subtitle}`
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


