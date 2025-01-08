import { getPayload } from "payload";
import config from "@/payload.config";
import { Flower, Honey, Media } from "@/payload-types";

export const getHome = async ({ draft }: { draft: string }) => {
  const payload = await getPayload({ config });

  const home = await payload.findGlobal({
    slug: "home",
    depth: 1,
    draft: !!draft,
  });

  return {
    ...home,
    picture: home.picture as Media,
  };
};

export const getHoneys = async ({ draft }: { draft: string }) => {
  const payload = await getPayload({ config });

  const honeys = await payload.findGlobal({
    slug: "honeyPage",
    depth: 2,
    draft: !!draft,
  });

  const data = {
    ...honeys,
    content: honeys.honeys?.map((content) => ({
      ...content,
      honey: content.honey as Honey,
    })),
    picture: honeys.picture as Media,
  };

  return {
    ...data,
    content: data.content
      ?.filter((content) => content.available)
      .map((content) => ({
        ...content,
        honey: {
          ...content.honey,
          flowers: content.honey.flowers?.map((flower) => flower as Flower),
          picture: content.honey.picture as Media,
        },
      })),
  };
};

export const getCourses = async ({ draft }: { draft: string }) => {
  const payload = await getPayload({ config });

  const courses = await payload.findGlobal({
    slug: "course",
    depth: 1,
    draft: !!draft,
  });

  return {
    ...courses,
    picture: courses.picture as Media,
    content: courses.content?.map((content) => ({
      ...content,
      picture: content.picture as Media,
    })),
  };
};

export const getFarming = async ({ draft }: { draft: string }) => {
  const payload = await getPayload({ config });

  const courses = await payload.findGlobal({
    slug: "farming",
    depth: 1,
    draft: !!draft,
  });

  return {
    ...courses,
    picture: courses.picture as Media,
    content: courses.content?.map((content) => ({
      ...content,
      picture: content.picture as Media,
    })),
  };
};

export const getContact = async ({ draft }: { draft: string }) => {
  const payload = await getPayload({ config });

  const contact = await payload.findGlobal({
    slug: "contact",
    depth: 1,
    draft: !!draft,
  });

  return {
    ...contact,
    picture: contact.picture as Media,
  };
};
