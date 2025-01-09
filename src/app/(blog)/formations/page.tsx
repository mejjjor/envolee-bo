import Hero from "@/components/Hero";
import Image from "next/image";
import Title from "@/components/Title";
import PictureParagraph from "@/components/PictureParagraph";
import { getCourses } from "@/api";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { RefreshRouteOnSave } from "@/components/RefreshRouterOnSave";
import { Metadata } from "next";
import { getSeo } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
  const courses = await getCourses({});
  return await getSeo(courses);
}

export const revalidate = 60;

export default async function Courses({
  searchParams,
}: {
  searchParams: Promise<{ draft: string }>;
}) {
  const { draft } = await searchParams;

  const courses = await getCourses({ draft });

  return (
    <>
      <RefreshRouteOnSave />

      <Hero className="overflow-hidden">
        <Image
          className="object-cover"
          src={courses.picture.url ?? ""}
          alt={courses.picture.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </Hero>
      <Title>{courses.title}</Title>
      {courses.content?.map((content, index) => (
        <PictureParagraph
          position={index % 2 ? "right" : "left"}
          key={content.id}
          src={content.picture?.url ?? ""}
          alt={content.picture?.alt}
        >
          <RichText data={content.description} />
        </PictureParagraph>
      ))}
    </>
  );
}
