"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { dashboardNavLinks } from "@/constants/dashboard-nav-links";

type Props = {};

const DashboardLinks = (props: Props) => {
  const pathname = usePathname();
  return (
    <NavigationMenu
      className="max-w-full items-start justify-start"
      orientation="vertical"
    >
      <ul className="m-0 h-full w-full max-w-full space-y-3">
        {dashboardNavLinks.map((link, index) => (
          <>
            <NavigationMenuItem key={index} className="w-full justify-start">
              <Link
                href={link.path}
                className={buttonVariants({
                  variant:
                    pathname === link.path || pathname === link.secondpath
                      ? "default"
                      : "ghost",
                  className: "w-full !justify-start",
                })}
              >
                <link.icon className="mr-3 h-4 w-4" />
                {link.name}
              </Link>
            </NavigationMenuItem>
          </>
        ))}
      </ul>
    </NavigationMenu>
  );
};

export default DashboardLinks;
