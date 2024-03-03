import { create } from "zustand";

type SubscriptionState = {
  open: boolean;
  onOpenChange: () => void;
};

export const useSubscriptionModal = create<SubscriptionState>((set) => ({
  open: false,
  onOpenChange: () => set((state) => ({ open: !state.open })),
}));
