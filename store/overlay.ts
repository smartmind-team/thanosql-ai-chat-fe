import { create } from "zustand";

interface OverlayStore {
  isSideNavOpen: boolean;
  isOpenItemPanel: boolean;
  isFixedSideNav: boolean;
  setIsSideNavOpen: (isSideNavOpen: boolean) => void;
  setIsOpenItemPanel: (isOpenItemPanel: boolean) => void;
  handleFixedSideNav: () => void;
  //   setIsFixedSideNav: (callback: (prev: boolean) => boolean) => void;
}

export const useOverlayStore = create<OverlayStore>((set, get) => ({
  isSideNavOpen: false,
  isOpenItemPanel: false,
  isFixedSideNav: false,
  setIsSideNavOpen: (isSideNavOpen) => set({ isSideNavOpen }),
  setIsOpenItemPanel: (isOpenItemPanel) => set({ isOpenItemPanel }),
  //   setIsFixedSideNav: (value) =>
  //     set((state) => ({
  //       isFixedSideNav:
  //         typeof value === "function" ? value(state.isFixedSideNav) : value,
  //     })),
  handleFixedSideNav: () => {
    set((state) => {
      const newFixed = !state.isFixedSideNav;
      return {
        isFixedSideNav: newFixed,
        isSideNavOpen: newFixed, // isSideNavOpen 상태도 업데이트
      };
    });
  },
}));
