import { getPayload } from "payload";
import config from "@/payload.config";
import { Flower, Honey, Media } from "@/payload-types";

// const apiUrl = `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api`;

// async function getHoneys(isDraft?: boolean) {
//   const url = `${apiUrl}/honeys?depth=1&isDraft=${isDraft}`;
//   const response = await fetch(url);
//   return await response.json();
// }

// async function getTitles(isDraft?: boolean) {
//   const url = `${apiUrl}/globals/titles?isDraft=${isDraft}`;
//   const response = await fetch(url);
//   return await response.json();
// }

// async function getHome(isDraft?: boolean) {
//   const url = `${apiUrl}/globals/home?isDraft=${isDraft}`;
//   const response = await fetch(url);
//   return await response.json();
// }

// const API: IAPI = {
//   getHoneys,
//   getTitles,
//   getHome,
// };

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
    content: honeys.miel?.map((content) => ({
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
