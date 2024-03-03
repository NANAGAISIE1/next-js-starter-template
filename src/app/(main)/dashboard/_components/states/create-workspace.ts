import { create } from "zustand";

type CreateWorkspaceModalState = {
  open: boolean;
  toggle: () => void;
};

export const useWorkspaceModal = create<CreateWorkspaceModalState>((set) => ({
  open: false,
  toggle: () => set((state) => ({ open: !state.open })),
}));
