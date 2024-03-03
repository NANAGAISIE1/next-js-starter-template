"use client";
import { Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";

type Props = {};

const CommunityLink = (props: Props) => {
  const pathname = usePathname();
  return (
    <Link
      href={"/community"}
      className={buttonVariants({
        variant: pathname === "/community" ? "default" : "ghost",
        className: "w-full !justify-start",
      })}
    >
      <Globe className="mr-3 h-4 w-4" />
      Community
    </Link>
  );
};

export default CommunityLink;
