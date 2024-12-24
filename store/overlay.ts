import { create } from 'zustand';

interface OverlayStore {
  isSideNavOpen: boolean;
  isOpenItemPanel: boolean;
  isFixedSideNav: boolean;
  setIsSideNavOpen: (isSideNavOpen: boolean) => void;
  setIsOpenItemPanel: (isOpenItemPanel: boolean) => void;
  handleFixedSideNav: () => void;
}

export const useOverlayStore = create<OverlayStore>((set, get) => ({
  isSideNavOpen: false,
  isOpenItemPanel: false,
  isFixedSideNav: false,
  setIsSideNavOpen: isSideNavOpen => set({ isSideNavOpen }),
  setIsOpenItemPanel: isOpenItemPanel => set({ isOpenItemPanel }),
  handleFixedSideNav: () => {
    set(state => {
      const newFixed = !state.isFixedSideNav;
      return {
        isFixedSideNav: newFixed,
        isSideNavOpen: newFixed,
      };
    });
  },
}));
