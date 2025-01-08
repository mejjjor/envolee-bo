import { FC, ReactElement } from "react";
import { cn } from "@/utils/cn";

const Hero: FC<{ className?: string; children: ReactElement }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative mb-8 flex h-60 justify-center rounded-3xl bg-white shadow-sm lg:mb-16 lg:h-[500px]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Hero;
