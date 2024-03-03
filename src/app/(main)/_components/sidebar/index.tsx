import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { Separator } from "@/components/ui/separator";

import CommunityLink from "./community-link";
import DashboardLinks from "./dashboard-links";
import UserAccountPopover from "./user-account-popover";
import SubscriptionMenu from "../subscription/subscription-menu";

type Props = {};

const Sidebar = async (props: Props) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) return null;
  return (
    <aside
      className=" borde-r
    flex h-screen w-72 flex-col
    border-[1px] border-border/40 bg-background/95 p-6 backdrop-blur transition-all supports-[backdrop-filter]:bg-background/60
    "
    >
      <div className="flex flex-1 flex-col gap-3">
        <UserAccountPopover user={user} />
        <Separator />
        <DashboardLinks />
      </div>

      <div className="flex flex-col gap-3">
        <Separator />
        <CommunityLink />
        <Separator />
        <SubscriptionMenu />
      </div>
    </aside>
  );
};

export default Sidebar;
