"use client";

import Honey from "@/components/Honey";
import { FC, useState } from "react";
import { cn } from "@/utils/cn";
import { getHoneys } from "@/api";

// export const dynamic = 'force-dynamic';
export const revalidate = 60;
// export const experimental_ppr = true

const HoneysClient: FC<{
  honeys: Awaited<ReturnType<typeof getHoneys>>;
  flowers: string[];
}> = ({ honeys, flowers }) => {
  const [currentFilter, setCurrentFilter] = useState("Toutes");
  return (
    <>
      <div>
        <div className="mb-4 mt-8 lg:text-xl">Filtrer par fleurs :</div>
        <div className="mb-8 flex flex-wrap gap-2">
          {flowers.map((flower) => (
            <div
              className={cn(
                "cursor-pointer rounded-lg bg-accent/40 p-2 px-4 text-xs lg:text-sm",
                {
                  "bg-accent/70": flower === currentFilter,
                },
              )}
              key={flower}
              onClick={() => {
                setCurrentFilter(flower);
              }}
            >
              {flower}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 sm:mt-8 sm:gap-16">
        {honeys.honeys
          ?.filter(
            (honey) =>
              currentFilter === "Toutes" ||
              honey.flowers?.find((flower) => flower.name === currentFilter),
          )
          .map((honey) => (
            <Honey
              key={honey.id}
              title={honey.title}
              picture={honey.picture.url ?? ""}
              pictureAlt={honey.picture.alt}
              weight={honey.weight ?? ""}
              price={honey.price ?? ""}
              flowers={honey.flowers?.map((flower) => flower.name) ?? []}
            />
          ))}
      </div>
    </>
  );
};

export default HoneysClient;
