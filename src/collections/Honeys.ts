import type { CollectionConfig, Block } from 'payload'
import slugify from 'slugify'

export const Honeys: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    livePreview: {
      url: ({ data }) => {
        return `${process.env.FRONTOFFICE_URL}/miels`
      },
    },
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
  dbName: 'honeys',
  fields: [
    {
      name: 'title',
      label: 'titre',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'url',
      type: 'text',
      hooks: {
        beforeValidate: [
          ({ value }) => {
            if (value) {
              return slugify(value.trim().toLowerCase())
            }
            return value
          },
        ],
      },
    },
    {
      name: 'picture',
      label: 'image',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'description',
      label: 'déscription',
      type: 'richText',
    },
    {
      name: 'weight',
      label: 'poids',
      type: 'text',
    },
    {
      name: 'price',
      label: 'prix',
      type: 'text',
    },
    {
      name: 'flowers',
      label: 'fleurs',
      type: 'relationship',
      relationTo: 'flowers',
      hasMany: true,
    },
  ],
}
