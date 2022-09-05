import client, { previewClient } from './client'

const getClient = (preview) => (preview ? previewClient : client)

const aboutQuery = `*[_type == "about"][0]{bio1, bio2, image}`
const testimonialsQuery = `*[_type == "testimonials"]{headline, name, location, testimonial}`
const galleryQuery = `*[_type == "gallery"][0]{images}`
const heroQuery = `*[_type == "banner"][0]{image, title, subtitle, cta {url, title}}`

export async function getTestimonials() {
  return await getClient().fetch(testimonialsQuery)
}

export async function getAbout() {
  return await getClient().fetch(aboutQuery)
}

export async function getGallery() {
  return await getClient().fetch(galleryQuery)
}

export async function getHomePageContent() {
  const gallery = await getClient().fetch(galleryQuery)
  const about = await getClient().fetch(aboutQuery)
  const hero = await getClient().fetch(heroQuery)
  const testimonials = await getClient().fetch(testimonialsQuery)
  return { gallery, about, hero, testimonials }
}
