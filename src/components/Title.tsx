import { FC, PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mt-4 inline-block lg:mt-8">
      <h2 className={`whitespace-nowrap text-3xl`}>{children}</h2>
      <div
        className={cn("m-2 ml-0 h-2 w-[80%] rounded-md bg-secondary", {
          "w-32": !children,
        })}
      />
    </div>
  );
};

export default Title;
