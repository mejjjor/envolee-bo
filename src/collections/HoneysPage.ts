import type { GlobalConfig } from "payload";

export const HoneysPage: GlobalConfig = {
  access: {
    read: () => true,
  },
  admin: {
    livePreview: {
      url: () => {
        return `${process.env.FRONTOFFICE_URL}/miels&draft=true`;
      },
    },
  },
  slug: "honeyPage",
  label: {
    fr: "Miels",
  },
  dbName: "honeyPage",
  fields: [
    {
      name: "title",
      label: {
        fr: "Titre",
      },
      type: "text",
      required: true,
      maxLength: 100,
    },
    {
      name: "picture",
      label: {
        fr: "Image",
      },
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "miel",
      label: "liste des miels",
      type: "array",
      fields: [
        {
          name: "available",
          label: "Visible",
          type: "checkbox",
          required: true,
        },
        {
          name: "honey",
          label: "Miel",
          type: "relationship",
          relationTo: "honeys",
          required: true,
        },
      ],
    },
  ],
};
