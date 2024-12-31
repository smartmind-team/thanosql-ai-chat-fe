import { create } from 'zustand';

interface OverlayStore {
  isSideNavOpen: boolean;
  isOpenItemPanel: boolean;
  isFixedSideNav: boolean;
  setIsSideNavOpen: (isSideNavOpen: boolean) => void;
  toggleItemPanel: () => void;
  toggleFixedSideNav: () => void;
}

export const useOverlayStore = create<OverlayStore>((set, get) => ({
  isSideNavOpen: false,
  isOpenItemPanel: false,
  isFixedSideNav: false,
  setIsSideNavOpen: isSideNavOpen => set({ isSideNavOpen }),
  toggleItemPanel: () => set(state => ({ isOpenItemPanel: !state.isOpenItemPanel })),
  toggleFixedSideNav: () => {
    set(state => {
      const newFixed = !state.isFixedSideNav;
      return {
        isFixedSideNav: newFixed,
        isSideNavOpen: newFixed,
      };
    });
  },
}));
