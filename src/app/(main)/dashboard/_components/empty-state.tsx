"use client";
import { Plus } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

type Props = {
  entityTitle: string;
  onClick?: () => void;
};

const EmptyState = ({ entityTitle, onClick }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Image
        src="/illustrations/empty-state-light.svg"
        alt="empty"
        height={600}
        width={600}
        className="hidden dark:flex"
      />
      <Image
        src="/illustrations/empty-state-dark.svg"
        alt="empty"
        height={600}
        width={600}
        className="flex dark:hidden"
      />
      <h1>Nothing to display over here</h1>
      <h3>Create a new {entityTitle} to get started</h3>
      <Button onClick={onClick}>
        <p className="!mt-0">Create {entityTitle}</p>
        <Plus className="ml-3 h-4 w-4" />
      </Button>
    </div>
  );
};

export default EmptyState;
