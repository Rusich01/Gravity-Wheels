import { create } from "zustand";

type TabType = "login" | "register";

interface ModalState {
  isOpenSign: boolean;
  isOpenCart: boolean;
  activeTab: TabType;

  // function
  openSign: VoidFunction;
  closeSign: VoidFunction;
  setActiveTab: (tab: TabType) => void;

  openCart: VoidFunction;
  closeCart: VoidFunction;
}

export const useAuthModal = create<ModalState>((set) => ({
  isOpenCart: false,
  isOpenSign: false,
  activeTab: "login",

  // function

  openSign: () => set({ isOpenSign: true }),
  closeSign: () => set({ isOpenSign: false }),
  setActiveTab: (tab) => set({ activeTab: tab }),

  // Cart view
  openCart: () => set({ isOpenCart: true }),
  closeCart: () => set({ isOpenCart: false }),
}));
