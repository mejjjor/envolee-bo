import { Block } from "payload";

const ContentBlock: Block = {
  slug: "Content",
  labels: {
    singular: "Contenu",
    plural: "Contenus",
  },
  imageURL: "/icons/text.svg",
  imageAltText: "Contenu",
  fields: [
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
    },
  ],
};

export default ContentBlock;
