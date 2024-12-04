import type { CollectionConfig } from 'payload'

export const Flowers: CollectionConfig = {
  access: {
    read: () => true,
  },
  versions: {
    maxPerDoc: 10,
  },
  admin: {
    useAsTitle: "name"
  },
  slug: 'flowers',
  labels: {
    singular: {
      fr: 'Fleur',
    },
    plural: {
      fr: 'Fleurs',
    },
  },
  dbName: "flowers",
  fields: [
    {
      name: 'name',
      label: "nom",
      type: 'text',
      required: true,
    }
  ]
}
