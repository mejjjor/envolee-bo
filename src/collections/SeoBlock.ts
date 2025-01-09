import { Block } from "payload";

const SeoBlock: Block = {
  slug: "Seo",
  labels: {
    singular: "Référencement",
    plural: "Référencements",
  },
  imageURL: "/icons/globe.svg",
  imageAltText: "Référencement",
  fields: [
    {
      name: "title",
      label: "titre",
      type: "text",
      defaultValue: "",
    },
    {
      name: "description",
      label: "déscription",
      type: "text",
      defaultValue: "",
    },
  ],
};

export default SeoBlock;
