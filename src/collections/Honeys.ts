import type { CollectionConfig } from 'payload'

export const Honeys: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    livePreview: {
      url: ({
        data,
        locale
      }) => {
        console.log(data, locale)
        return `${process.env.FRONTOFFICE_URL}/miels/${data.id}?isDraft=true`
      }
    }
  },
  versions: {
    maxPerDoc: 10,
    drafts: {
      autosave: {
        interval: 200,
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
