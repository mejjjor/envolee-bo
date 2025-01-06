import type { GlobalConfig } from 'payload'

export const Titles: GlobalConfig = {
  access: {
    read: () => true,
  },
  admin: {
    livePreview: {
      url: ({ data }) => {
        return `${process.env.FRONTOFFICE_URL}`
      },
    },
  },
  slug: 'titles',
  label: {
    fr: 'Titres',
  },
  dbName: 'titles',
  fields: [
    {
      name: 'honeyTitle',
      type: 'group',
      label: {
        fr: 'Miels',
      },
      fields: [
        {
          name: 'title',
          label: {
            fr: 'Titre',
          },
          type: 'text',
          required: true,
          maxLength: 100,
        },
        {
          name: 'picture',
          label: {
            fr: 'Image',
          },
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'courseTitle',
      type: 'group',
      label: {
        fr: 'Formations',
      },
      fields: [
        {
          name: 'title',
          label: {
            fr: 'Titre',
          },
          type: 'text',
          required: true,
          maxLength: 100,
        },
        {
          name: 'picture',
          label: {
            fr: 'Image',
          },
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
