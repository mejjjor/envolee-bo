export type IDataSeo = {
  seo?:
    | {
        title?: string | null;
        description?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: "Seo";
      }[]
    | null
    | undefined;
} & Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
