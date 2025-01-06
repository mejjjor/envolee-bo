import type { GlobalConfig } from 'payload'
import slugify from 'slugify'
import ContentBlock from './ContentBlock'

export const Courses: GlobalConfig = {
  access: {
    read: () => true,
  },
  admin: {
    livePreview: {
      url: ({ data }) => {
        return `${process.env.FRONTOFFICE_URL}/formations`
      },
    },
  },
  slug: 'course',
  label: {
    fr: 'Formation',
  },
  dbName: 'course',
  fields: [
    {
      name: 'content',
      labels: {
        singular: {
          fr: 'Bloc de contenu',
        },
        plural: {
          fr: 'Blocs de contenu',
        },
      },
      type: 'blocks',
      blocks: [ContentBlock],
    },
  ],
}
