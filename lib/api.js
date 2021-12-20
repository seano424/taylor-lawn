import client, { previewClient } from './client'

const getClient = (preview) => (preview ? previewClient : client)

export async function getContent(preview) {
  const results = await getClient(preview).fetch(
    `*[_type == "banner" || _type == "about" || _type == "gallery"]`
  )
  return results
}

export async function getTestimonials(preview) {
  const results = await getClient(preview).fetch(`*[_type == 'testimonials']`)
  return results
}
