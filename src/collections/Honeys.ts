import type { CollectionConfig } from 'payload'

export const Honeys: CollectionConfig = {
  access: {
    read: () => true,
  },
  slug: 'miels',
  labels: {
    singular: {
      fr: 'Miel',
    },
    plural: {
      fr: 'Miels',
    },
  },
  dbName: "honeys",
  fields: [
    {
      name: 'title',
      label: "titre",
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: "déscription",
      type: 'richText',
    }
  ]
}
