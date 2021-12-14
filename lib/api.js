import client, { previewClient } from './client'

const getClient = (preview) => (preview ? previewClient : client)

export async function getBanner(preview) {
  const results = await getClient(preview).fetch(`*[_type == "banner"]`)
  // const data = await client.fetch(`*[_type == "carousel"]`);
  return results
}
