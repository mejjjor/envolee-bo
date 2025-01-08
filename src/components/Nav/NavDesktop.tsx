"use client";

import Link from "next/link";
import { nav } from "@/routes";
import { useRef } from "react";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ACTIVE_LINK_CONST = 8;

export default function NavDesktop() {
  const pathname = usePathname();

  const currentRoute = nav.find((navData) => navData.href === pathname);

  const activeLinkRef = useRef<HTMLAnchorElement>(null);
  const [barStyle, setBarStyle] = useState({
    width: activeLinkRef.current?.offsetWidth ?? 0,
    left: activeLinkRef.current?.offsetLeft ?? 0,
  });

  useEffect(() => {
    if (activeLinkRef.current) {
      const { offsetWidth, offsetLeft } = activeLinkRef.current;
      setBarStyle({ width: offsetWidth, left: offsetLeft });
    }
  }, [pathname]);

  return (
    <nav className="relative z-30 flex">
      <div
        className={cn(
          "absolute bottom-2 h-1 rounded transition-all duration-300",
          {
            "bg-accent": !currentRoute?.highlight,
            "bg-primary": currentRoute?.highlight,
          },
        )}
        style={{
          width: barStyle.width - ACTIVE_LINK_CONST * 2,
          left: barStyle.left + ACTIVE_LINK_CONST,
        }}
      />
      {nav.map((data) => (
        <Link
          key={data.href}
          href={data.href}
          ref={pathname === data.href ? activeLinkRef : null}
          className={cn(
            "flex items-center justify-center whitespace-nowrap px-6",
            {
              "rounded-lg bg-accent": data.highlight,
            },
          )}
        >
          {data.label}
        </Link>
      ))}
    </nav>
  );
}
