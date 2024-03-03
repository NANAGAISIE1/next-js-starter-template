"use client";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { userAccountMenu } from "@/constants/user-account-menu";
import { cn } from "@/lib/utils";

import UserAvatar from "./user-avatar";

type Props = {
  user: KindeUser;
};

function UserAccountPopover({ user }: Props) {
  const { picture, email, given_name, family_name } = user;

  return (
    <Popover>
      <PopoverTrigger
        className={buttonVariants({
          variant: "ghost",
          className: "!justify-start",
        })}
      >
        <UserAvatar imageUrl={picture || ""} name={given_name as string} />
        <span className={cn("ml-2 block")}>{email}</span>
      </PopoverTrigger>
      <PopoverContent
        className="flex w-full max-w-fit items-center justify-center"
        side="bottom"
        align="center"
      >
        <NavigationMenu className="w-full">
          <NavigationMenuList className="m-0 w-full flex-col items-start space-y-3 p-0">
            {userAccountMenu.map((menu, index) => (
              <>
                <NavigationMenuItem key={index} className="w-full">
                  <Link
                    href={menu.path}
                    className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground"
                  >
                    <menu.icon className="h-4 w-4" />
                    <p className="!m-0">{menu.name}</p>
                  </Link>
                </NavigationMenuItem>
                <Separator />
              </>
            ))}
            <NavigationMenuItem className="w-full" key={Date.now()}>
              <LogoutLink className="flex w-full items-center gap-3 rounded-md px-3 py-2 font-semibold hover:bg-destructive hover:text-destructive-foreground">
                <LogOut className="h-4 w-4" />
                <p className="!m-0">Log out</p>
              </LogoutLink>
            </NavigationMenuItem>
            <Separator />
            <NavigationMenuItem key={Date.now()}>
              {user && (
                <div className="mt-2 flex items-center gap-2">
                  <UserAvatar
                    imageUrl={picture || ""}
                    name={given_name as string}
                  />
                  <div className="flex flex-col">
                    <p className="!mt-0 font-bold">
                      {given_name} {family_name}
                    </p>
                    <p className="!mt-0 text-muted-foreground">{user?.email}</p>
                  </div>
                </div>
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </PopoverContent>
    </Popover>
  );
}

export default UserAccountPopover;
