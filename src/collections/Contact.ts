import type { GlobalConfig } from "payload";

export const Contact: GlobalConfig = {
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

        return `${url.origin}/contact?draft=true`;
      },
    },
  },
  slug: "contact",
  label: {
    fr: "Contact",
  },
  dbName: "contact",
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
  ],
};
