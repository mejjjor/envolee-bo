import type { GlobalConfig } from "payload";
import SeoBlock from "./SeoBlock";

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
      url: (data) => {
        const url = new URL(data.req.headers.get("referer") ?? "");

        return `${url.origin}?draft=true`;
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
    {
      name: "seo",
      labels: {
        singular: {
          fr: "Référencement",
        },
        plural: {
          fr: "Référencements",
        },
      },
      type: "blocks",
      required: true,
      maxRows: 1,
      blocks: [SeoBlock],
    },
  ],
};
