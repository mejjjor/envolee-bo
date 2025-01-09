import { metadata as metadataRoot } from "@/app/(blog)/layout";
import { IDataSeo } from "@/types";

export const getSeo = (data: IDataSeo) => {
  const metadata = { ...metadataRoot };
  if (data.seo?.length) {
    if (data.seo[0].title) {
      metadata.title = data.seo[0].title;
    }
    if (data.seo[0].description) {
      metadata.description = data.seo[0].description;
    }
  }

  return metadata;
};
