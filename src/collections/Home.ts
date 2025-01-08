import type { GlobalConfig } from "payload";

export const Home: GlobalConfig = {
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
      url: () => {
        return `${process.env.FRONTOFFICE_URL}?draft=true`;
      },
    },
  },
  slug: "home",
  label: {
    fr: "Accueil",
  },
  dbName: "home",
  fields: [
    {
      name: "title",
      label: "Titre",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "déscription",
      type: "richText",
      required: true,
    },
    {
      name: "picture",
      label: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
