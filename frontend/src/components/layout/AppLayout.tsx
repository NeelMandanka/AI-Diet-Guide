import { useEffect } from "react";
import {
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";

import Header from "./Header";
import MobileSidebar from "./MobileSidebar";
import Sidebar from "./Sidebar";

import { useLayoutStore } from "@/store/layout.store";
import { useProfile } from "@/hooks/useProfile";

export default function AppLayout() {
  const { pathname } = useLocation();

  const { data: profile, isLoading } =
    useProfile();

  const mobileSidebarOpen = useLayoutStore(
    (state) => state.mobileSidebarOpen
  );

  const closeMobileSidebar = useLayoutStore(
    (state) => state.closeMobileSidebar
  );

  useEffect(() => {
    closeMobileSidebar();
  }, [pathname, closeMobileSidebar]);

  // Wait until profile request completes
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent" />
          <p className="mt-4 text-slate-500">
            Loading your profile...
          </p>
        </div>
      </div>
    );
  }

  const isProfilePage =
    pathname === "/profile";

  // New user → force profile setup
  if (profile === null && !isProfilePage) {
    return (
      <Navigate
        to="/profile"
        replace
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <MobileSidebar
        open={mobileSidebarOpen}
        onClose={closeMobileSidebar}
      />

      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}

        <aside
          className="
            hidden
            lg:fixed
            lg:inset-y-0
            lg:left-0
            lg:z-40
            lg:flex
            lg:w-64
            lg:flex-col
            lg:border-r
            lg:border-slate-200
            lg:bg-white
          "
        >
          <Sidebar />
        </aside>

        {/* Content */}

        <div className="flex min-h-screen flex-1 flex-col lg:ml-64">
          <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
            <Header />
          </header>

          <main
            id="main-content"
            className="flex-1 overflow-x-hidden"
          >
            <div className="mx-auto w-full max-w-7xl px-5 py-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}