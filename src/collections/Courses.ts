import type { GlobalConfig } from "payload";
import ContentBlock from "./ContentBlock";

export const Courses: GlobalConfig = {
  access: {
    read: () => true,
  },
  admin: {
    livePreview: {
      url: () => {
        return `${process.env.FRONTOFFICE_URL}/formations`;
      },
    },
  },
  slug: "course",
  label: {
    fr: "Formation",
  },
  dbName: "course",
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
      name: "content",
      labels: {
        singular: {
          fr: "Bloc de contenu",
        },
        plural: {
          fr: "Blocs de contenu",
        },
      },
      type: "blocks",
      blocks: [ContentBlock],
    },
  ],
};
