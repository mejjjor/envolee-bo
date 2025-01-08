import Hero from "@/components/Hero";
import Image from "next/image";
import Title from "@/components/Title";
import PictureParagraph from "@/components/PictureParagraph";
import { getCourses } from "@/api";
import { RichText } from "@payloadcms/richtext-lexical/react";

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
      <Hero className="overflow-hidden">
        <Image
          src={courses.picture.url ?? ""}
          fill
          className="object-cover"
          alt={courses.picture.alt}
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
