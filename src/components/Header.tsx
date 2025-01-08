"use client";
import { routes } from "@/routes";
import Logo from "./Logo";
import NavDesktop from "./Nav/NavDesktop";
import NavMobile from "./Nav/NavMobile";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 box-content hidden h-16 justify-between pb-4 pt-4 lg:flex lg:pb-0">
        <Link href={routes.home}>
          <Logo logoClassName="w-32" withAnimate={pathname !== routes.home} />
        </Link>
        <NavDesktop />
      </header>
      <header className="my-2 flex justify-end lg:hidden">
        {pathname !== routes.home && (
          <Logo className="h-16" logoClassName="w-32" />
        )}
        <NavMobile />
      </header>
      <div className="sticky top-0 z-10 hidden h-24 w-full bg-background backdrop-blur-[1px] lg:block" />
    </>
  );
};

export default Header;
