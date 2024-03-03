import Link from "next/link";

import { Icons } from "@/components/icons";

import Authenticate from "./authenticate";
import MobileNav from "./mobile-nav";
import NavLinks from "./nav";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 h-14 w-full border-b border-border/40 bg-background/95 backdrop-blur transition-all supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-full items-center justify-between">
        <div className="flex h-full items-center gap-x-3">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 font-semibold text-primary"
          >
            <Icons.logo className=" fill-primary text-primary" />
            <span>Smartnote.</span>
          </Link>
          <NavLinks className="hidden lg:flex" />
        </div>
        <Authenticate className="hidden lg:flex" />
        <MobileNav className="flex lg:hidden" />
      </div>
    </header>
  );
};

export default Header;
