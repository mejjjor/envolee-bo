import Image from "next/image";
import { FC, ReactElement, PropsWithChildren } from "react";

const PictureParagraph: FC<{
  src: string;
  alt: string;
  position?: "left" | "right";
  children: ReactElement;
}> = ({ children, src, alt, position = "left" }) => {
  return (
    <div className="my-8 flex min-h-[400px] flex-col gap-8 lg:my-16 lg:flex-row lg:gap-16">
      {position === "right" && <ChildrenWrapper>{children}</ChildrenWrapper>}
      <div className="flex items-center justify-center lg:w-[50%]">
        <div className="relative flex h-[300px] w-full max-w-[600px] overflow-hidden rounded-xl lg:h-[400px]">
          <Image
            className="self-center object-cover"
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>
      </div>
      <div className="flex self-center lg:hidden">{children}</div>
      {position === "left" && <ChildrenWrapper>{children}</ChildrenWrapper>}
    </div>
  );
};

const ChildrenWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="hidden self-center lg:flex lg:w-[50%]">{children}</div>
  );
};

export default PictureParagraph;
