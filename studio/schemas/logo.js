export default {
  name: 'logo',
  title: 'Logo',
  type: 'document',
  fields: [
    {
      name: 'name',
      description: "This line isn't required.",
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
