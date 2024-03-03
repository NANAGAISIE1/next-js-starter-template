import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { preloadQuery } from "convex/nextjs";

import { api } from "../../../../../convex/_generated/api";
import WorkspaceList from "../_components/workspace-list";

type Props = {};

const DashboardPage = async (props: Props) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const preloadedWorkspaceQuery = await preloadQuery(api.workspace.getAll, {
    kindeId: user?.id as string,
  });
  return (
    <section>
      <WorkspaceList preloaded={preloadedWorkspaceQuery} />
    </section>
  );
};

export default DashboardPage;
