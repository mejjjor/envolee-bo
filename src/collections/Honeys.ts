import type { CollectionConfig } from 'payload'

export const Honeys: CollectionConfig = {
  access: {
    read: () => true,
  },
  versions: {
    maxPerDoc: 10,
  },
  slug: 'honeys',
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
      name: 'id',
      label: "url",
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      label: "déscription",
      type: 'richText',
    },
    {
      name: 'flowers',
      label: "fleurs",
      type: 'relationship',
      relationTo: 'flowers',
      hasMany: true
    },
  ]
}
