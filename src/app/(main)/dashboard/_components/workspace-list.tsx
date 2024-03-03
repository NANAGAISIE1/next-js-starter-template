"use client";
import { Preloaded, usePreloadedQuery } from "convex/react";
import { useState } from "react";

import EmptyState from "./empty-state";
import { useWorkspaceModal } from "./states/create-workspace";
import { api } from "../../../../../convex/_generated/api";

type Props = {
  preloaded: Preloaded<typeof api.workspace.getAll>;
};

const WorkspaceList = ({ preloaded }: Props) => {
  const [empty, setIsEmpty] = useState(false);
  const toggle = useWorkspaceModal((state) => state.toggle);
  const query = usePreloadedQuery(preloaded);
  if (!query) {
    setIsEmpty(true);
  }
  return (
    <div>
      {empty ? (
        <EmptyState entityTitle="workspace" onClick={toggle} />
      ) : (
        <div>Hello world</div>
      )}
    </div>
  );
};

export default WorkspaceList;
