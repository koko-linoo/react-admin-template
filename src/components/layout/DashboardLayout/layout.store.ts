import { create } from "zustand";

export interface LayoutState {
  opened: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

export const useLayoutStore = create<LayoutState>()((set) => ({
  opened: true,
  openSidebar: () => set(() => ({ opened: true })),
  closeSidebar: () => set(() => ({ opened: false })),
  toggleSidebar: () => set((state) => ({ opened: !state.opened })),
}));
