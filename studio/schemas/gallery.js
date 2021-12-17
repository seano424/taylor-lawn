export default {
  title: 'Gallery',
  name: 'gallery',
  type: 'document',
  fields: [
    {
      title: 'Gallery Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Feature Image',
      name: 'featureImage',
      type: 'image',
      description: 'Image for the thumbnail in this studio ',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'images' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featureImage',
    },
  },
}
