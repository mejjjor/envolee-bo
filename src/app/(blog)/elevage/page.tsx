import Hero from "@/components/Hero";
import Image from "next/image";
import Title from "@/components/Title";
import PictureParagraph from "@/components/PictureParagraph";
import { getFarming } from "@/api";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { getSeo } from "@/utils/seo";

const farming = await getFarming({});
const metadata = getSeo(farming);
export { metadata };

export const revalidate = 60;

export default async function Farming({
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
          className="object-cover"
          src={farming.picture.url ?? ""}
          alt={farming.picture.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
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
