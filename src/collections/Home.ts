import type { GlobalConfig } from 'payload'
import slugify from 'slugify'

export const Home: GlobalConfig = {
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
  slug: 'home',
  label: {
    fr: 'Accueil',
  },
  dbName: 'home',
  fields: [
    {
      name: 'title',
      label: 'Titre',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'déscription',
      type: 'richText',
      required: true,
    },
    {
      name: 'picture',
      label: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
