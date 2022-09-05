import client, { previewClient } from './client'

const getClient = (preview) => (preview ? previewClient : client)

export async function getTestimonials() {
  const testimonialsQuery = `*[_type == "testimonials"]{headline, name, location, testimonial}`
  return await getClient().fetch(testimonialsQuery)
}

export async function getAbout() {
  const aboutQuery = `*[_type == "about"][0]{bio1, bio2, image}`
  return await getClient().fetch(aboutQuery)
}

export async function getGallery() {
  const galleryQuery = `*[_type == "gallery"][0]{images}`
  return await getClient().fetch(galleryQuery)
}

export async function getHomePageContent() {
  const query = `
    {
      "gallery": *[_type == "gallery"][0] { images },
      "about": *[_type == "about"][0] { bio1, bio2, image },
      "hero": *[_type == "banner"][0] { _id, image, title, subtitle, cta { url, title } },
      "testimonials": *[_type == "testimonials"] { headline, name, location, testimonial },
    }
  `

  const { gallery, about, hero, testimonials } = await client.fetch(query)

  return { gallery, about, hero, testimonials }
}
