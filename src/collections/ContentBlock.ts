import { Block } from "payload";

const ContentBlock: Block = {
  slug: "Content", // required
  labels: {
    singular: "Un bloc de contenu",
    plural: "Des blocs de contenu",
  },
  imageURL: "https://img.icons8.com/hatch/64/content.png",
  imageAltText: "Un bloc de contenu",
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
