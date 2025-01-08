import Hero from "@/components/Hero";
import Image from "next/image";
import Title from "@/components/Title";
import PictureParagraph from "@/components/PictureParagraph";
import { getFarming } from "@/api";
import { RichText } from "@payloadcms/richtext-lexical/react";

export const revalidate = 60;

export default async function Courses({
  searchParams,
}: {
  searchParams: Promise<{ draft: string }>;
}) {
  const { draft } = await searchParams;

  const farming = await getFarming({ draft });

  return (
    <>
      <Hero className="overflow-hidden">
        <Image
          src={farming.picture.url ?? ""}
          alt={farming.picture.alt}
          fill
          className="object-cover"
        />
      </Hero>
      <Title>{farming.title}</Title>

      {farming.content?.map((content, index) => (
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
