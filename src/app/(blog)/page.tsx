import Logo from "@/components/Logo";
import Hero from "@/components/Hero";
import PictureParagraph from "@/components/PictureParagraph";

import Title from "@/components/Title";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { RefreshRouteOnSave } from "@/components/RefreshRouterOnSave";
import { getHome } from "@/api";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ draft: string }>;
}) {
  const { draft } = await searchParams;

  const home = await getHome({ draft });

  return (
    <>
      <RefreshRouteOnSave />
      <Hero>
        <Logo
          withSub
          withAnimate
          className="items-center justify-center"
          logoClassName="w-full h-60 lg:h-96"
        />
      </Hero>
      <Title>{home.title}</Title>
      <PictureParagraph
        src={home.picture.url ?? ""}
        alt={home.picture.alt}
        position="right"
      >
        <RichText data={home.description} />
      </PictureParagraph>
    </>
  );
}
