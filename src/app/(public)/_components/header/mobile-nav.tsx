"use client";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Authenticate from "./authenticate";
import { navigationLinks } from "../../../../constants/navigation-links";

const SheetList = () => {
  return (
    <ul className="flex flex-col gap-4 p-4">
      {navigationLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={buttonVariants({
              variant: "ghost",
            })}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const MobileNav = ({ className }: { className?: string }) => {
  return (
    <Sheet>
      <SheetTrigger className={className}>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Smartnote.</SheetTitle>
        </SheetHeader>
        <SheetList />
        <Separator />
        <Authenticate className={"mt-3 flex-col gap-y-3"} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
