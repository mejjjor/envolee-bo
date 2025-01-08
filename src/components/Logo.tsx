import Image from "next/image";

import logo from "@/../public/logo.png";
import logoSub from "@/../public/logo_sub.png";
import nuee from "@/../public/nuee.png";
import { FC } from "react";
import { cn } from "@/utils/cn";

const Logo: FC<{
  className?: string;
  logoClassName: string;
  withSub?: boolean;
  withAnimate?: boolean;
}> = ({ className, logoClassName, withSub, withAnimate }) => {
  return (
    <div className={cn("flex h-full w-full", className)}>
      <div className={cn("relative flex justify-center", logoClassName)}>
        <div className="absolute h-full">
          <Image
            src={withSub ? logoSub : logo}
            alt="logo lenvolé"
            className="h-full w-auto object-contain"
            priority
          />
        </div>
        <div className="animate-flyzindex absolute h-full">
          <Image
            src={nuee}
            alt="nuee lenvolé"
            className={cn("h-full w-auto object-contain", {
              "animate-fly": withAnimate,
            })}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Logo;
