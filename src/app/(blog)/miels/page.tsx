// import Link from 'next/link'

import Hero from "@/components/Hero";
import Image from "next/image";
import Title from "@/components/Title";
import PageClient from "./PageClient";
import { Flower } from "@/payload-types";
import { RefreshRouteOnSave } from "@/components/RefreshRouterOnSave";
import { getHoneys } from "@/api";

// export const dynamic = 'force-dynamic';
export const revalidate = 60;
// export const experimental_ppr = true

export default async function Honeys({
  searchParams,
}: {
  searchParams: Promise<{ draft: string }>;
}) {
  const { draft } = await searchParams;

  const honeys = await getHoneys({ draft });

  // const honeys = await API.getHoneys();

  const flowersList = honeys.content?.reduce<string[]>((acc, honey) => {
    acc.push(
      ...(honey.honey.flowers?.map((flower) => (flower as Flower).name) ?? []),
    );

    return acc;
  }, []);

  const flowers = new Array(...new Set(flowersList));
  flowers.unshift("Toutes");

  return (
    <>
      <RefreshRouteOnSave />

      <Hero className="overflow-hidden">
        <Image
          src={honeys.picture.url ?? ""}
          fill
          className="object-cover"
          alt={honeys.picture.alt}
        />
      </Hero>
      <Title>{honeys.title}</Title>

      <PageClient
        honeys={honeys.content?.map((content) => content.honey) ?? []}
        flowers={flowers}
      />
    </>
  );
}
