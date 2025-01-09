import { getPayload } from "payload";
import config from "@/payload.config";
import { Flower, Media } from "@/payload-types";

export const getHome = async ({ draft }: { draft?: string }) => {
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

export const getHoneys = async ({ draft }: { draft?: string }) => {
  const payload = await getPayload({ config });

  const honeysPage = await payload.findGlobal({
    slug: "honeyPage",
    depth: 1,
    draft: !!draft,
  });

  const honeys = await payload.find({
    collection: "honeys",
    depth: 1,
    draft: !!draft,
    limit: 100,
  });

  return {
    ...honeysPage,
    picture: honeysPage.picture as Media,
    honeys: honeys.docs
      .filter((honey) => honey.available)
      .map((honey) => ({
        ...honey,
        flowers: honey.flowers?.map((flower) => flower as Flower),
        picture: honey.picture as Media,
      })),
  };
};

export const getCourses = async ({ draft }: { draft?: string }) => {
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

export const getFarming = async ({ draft }: { draft?: string }) => {
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

export const getContact = async ({ draft }: { draft?: string }) => {
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
