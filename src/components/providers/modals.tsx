import { useEffect, useState } from "react";

import SubscriptionModal from "@/app/(main)/_components/subscription/subscription-modal";
import CreateWorkspaceModal from "@/app/(main)/dashboard/_components/create-workspace-modal";

type Props = {};

const Modals = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return;
  return (
    <>
      <SubscriptionModal />
      <CreateWorkspaceModal />
    </>
  );
};

export default Modals;
