export default {
  name: 'banner',
  title: 'The Big Homepage Image and Title',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'object',
      description: 'CTA is Call To Action. Just a fancy name for button haha.',
      fields: [
        {
          name: 'url',
          title: 'URL',
          description:
            'This will be where the CTA or button links to on your page! For example: /contact is the contact page.',
          type: 'string',
        },
        {
          name: 'title',
          title: 'CTA Title',
          description: 'What do you want your button to say?',
          type: 'string',
        },
      ],
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
      title: 'title',
      media: 'image',
    },
  },
}
