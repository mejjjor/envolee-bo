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
            className="h-full w-auto object-contain"
            src={withSub ? logoSub : logo}
            alt="logo lenvolé"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>
        <div className="absolute h-full animate-flyzindex">
          <Image
            className={cn("h-full w-auto object-contain", {
              "animate-fly": withAnimate,
            })}
            src={nuee}
            alt="nuee lenvolé"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Logo;
