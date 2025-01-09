import type { CollectionConfig } from "payload";

export const Honeys: CollectionConfig = {
  access: {
    read: () => true,
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  admin: {
    livePreview: {
      url: (data) => {
        const url = new URL(data.req.headers.get("referer") ?? "");

        return `${url.origin}/miels?draft=true`;
      },
    },
    useAsTitle: "title",
  },
  slug: "honeys",
  labels: {
    singular: {
      fr: "Miel",
    },
    plural: {
      fr: "Miels",
    },
  },
  dbName: "honeys",
  fields: [
    {
      name: "title",
      label: "titre",
      type: "text",
      required: true,
    },

    {
      name: "picture",
      label: "image",
      type: "relationship",
      relationTo: "media",
      required: true,
    },
    {
      name: "available",
      label: "disponible",
      type: "checkbox",
      required: true,
    },
    {
      name: "description",
      label: "déscription",
      type: "richText",
    },
    {
      name: "weight",
      label: "poids",
      type: "text",
    },
    {
      name: "price",
      label: "prix",
      type: "text",
    },
    {
      name: "flowers",
      label: "fleurs",
      type: "relationship",
      relationTo: "flowers",
      hasMany: true,
    },
  ],
};
