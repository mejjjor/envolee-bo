"use client";

import Link from "next/link";
import { nav } from "@/routes";
import { useRef } from "react";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavMobile() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const pathname = usePathname();

  const currentRoute = nav.find((navData) => navData.href === pathname);

  const activeLinkRef = useRef<HTMLAnchorElement>(null);

  const [barStyle, setBarStyle] = useState({
    top:
      (activeLinkRef.current?.offsetTop ?? 0) +
      (activeLinkRef.current?.offsetHeight ?? 0) -
      4,
  });

  useEffect(() => {
    if (activeLinkRef.current) {
      const { offsetTop, offsetHeight } = activeLinkRef.current;
      setBarStyle({ top: offsetTop + offsetHeight - 4 });
    }
  }, [pathname]);

  return (
    <div className="flex">
      <button
        className="z-50 mx-2 h-16 w-12"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <div
          className={cn("my-2 h-2 w-full rounded-xl bg-accent transition-all", {
            "translate-y-4 rotate-[45deg] bg-background": isDrawerOpen,
          })}
        />
        <div
          className={cn("my-2 h-2 w-full rounded-xl bg-accent transition-all", {
            "opacity-0": isDrawerOpen,
          })}
        />
        <div
          className={cn("my-2 h-2 w-full rounded-xl bg-accent transition-all", {
            "-translate-y-4 -rotate-[45deg] bg-background": isDrawerOpen,
          })}
        />
      </button>
      <div
        className={cn("absolute left-0 top-0 z-30 hidden h-screen w-screen", {
          block: isDrawerOpen,
        })}
        onClick={() => setIsDrawerOpen(false)}
      />
      <nav
        className={cn(
          "fixed left-[100vw] top-0 z-40 h-screen w-64 bg-accent transition-all",
          {
            "left-[calc(100vw-16rem)]": isDrawerOpen,
          },
        )}
      >
        <div
          className={cn(
            "absolute bottom-24 left-6 h-1 w-52 rounded transition-all duration-300",
            {
              "bg-primary": !currentRoute?.highlight,
              "bg-accent": currentRoute?.highlight,
            },
          )}
          style={{
            top: barStyle.top,
          }}
        />
        <div className="mt-24 flex flex-col gap-6 p-2 text-lg font-bold">
          {nav.map((data) => (
            <Link
              key={data.href}
              href={data.href}
              ref={pathname === data.href ? activeLinkRef : null}
              onClick={() => setIsDrawerOpen(false)}
              className={cn(
                "flex h-8 items-center justify-center whitespace-nowrap px-6",
                {
                  "rounded-lg bg-primary": data.highlight,
                },
              )}
            >
              {data.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
