import elevage from "@/../public/elevage.jpg";
import bugfast from "@/../public/bugfast.jpg";

import Hero from "@/components/Hero";
import Image from "next/image";
import Title from "@/components/Title";
import PictureParagraph from "@/components/PictureParagraph";

export const revalidate = 60;

export default async function Courses() {
  return (
    <>
      <Hero className="overflow-hidden">
        <Image
          src={elevage}
          className="h-auto w-screen object-cover"
          priority
          alt="miels"
        />
      </Hero>
      <Title>Elevage</Title>
      <PictureParagraph src={bugfast} alt="zzz">
        <div>
          Bugfast c est trop bien. um iaculis in ut velit. Curabitur erat ipsum,
          scelerisque et massa a, faucibus porta turpis. Sed ultrices ex ut
          velit lacinia molestie. Etiam turpis diam, congue non tortor ut,
          feugiat convallis neque. Nulla pre.
          <br />
          <div className="inline-block cursor-pointer rounded-lg bg-accent/40 p-2 px-4">
            Prix: 20€
          </div>
        </div>
      </PictureParagraph>
    </>
  );
}
