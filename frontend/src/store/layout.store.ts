import { create } from "zustand";

interface LayoutState {
  /* Mobile Navigation */
  mobileSidebarOpen: boolean;

  /* Desktop Sidebar */
  sidebarCollapsed: boolean;

  /* Actions */
  openMobileSidebar: () => void;
  closeMobileSidebar: () => void;
  toggleMobileSidebar: () => void;

  collapseSidebar: () => void;
  expandSidebar: () => void;
  toggleSidebar: () => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  /* State */
  mobileSidebarOpen: false,
  sidebarCollapsed: false,

  /* Mobile Drawer */
  openMobileSidebar: () =>
    set({
      mobileSidebarOpen: true,
    }),

  closeMobileSidebar: () =>
    set({
      mobileSidebarOpen: false,
    }),

  toggleMobileSidebar: () =>
    set((state) => ({
      mobileSidebarOpen: !state.mobileSidebarOpen,
    })),

  /* Desktop Sidebar */
  collapseSidebar: () =>
    set({
      sidebarCollapsed: true,
    }),

  expandSidebar: () =>
    set({
      sidebarCollapsed: false,
    }),

  toggleSidebar: () =>
    set((state) => ({
      sidebarCollapsed: !state.sidebarCollapsed,
    })),
}));