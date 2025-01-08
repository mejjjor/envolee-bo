import type { GlobalConfig } from "payload";

export const HoneysPage: GlobalConfig = {
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
      name: "honeys",
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
