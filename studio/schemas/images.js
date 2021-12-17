// The schema of the Milestone object-type
export default {
  name: 'images',
  title: 'Images',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Is this a softscape',
      name: 'softscape',
      description: 'not required but useful for gallery',
      type: 'boolean',
    },
    {
      title: 'Is this a hardscape',
      name: 'hardscape',
      description: 'not required but useful for gallery',
      type: 'boolean',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'not required',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      description: 'not required',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
}
