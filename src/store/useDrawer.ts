import { create } from "zustand";

export const useDrawer = create((set) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open })),
}));
