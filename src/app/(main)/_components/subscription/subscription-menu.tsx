"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import { useSubscriptionModal } from "./states/subscription-modal-state";

type Props = {};

const SubscriptionMenu = (props: Props) => {
  const toggleSubscriptionModal = useSubscriptionModal(
    (state) => state.onOpenChange,
  );
  return (
    <div>
      <Progress value={33} />
      <p className="!m-0">
        <strong>2</strong> out of <strong>8</strong> files used.
        <br />
        <Button
          variant={"link"}
          className="p-0 text-foreground"
          onClick={toggleSubscriptionModal}
        >
          <strong>Upgrade</strong>
        </Button>{" "}
        your plan for unlimited access.
      </p>
    </div>
  );
};

export default SubscriptionMenu;
