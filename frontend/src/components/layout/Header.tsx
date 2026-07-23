import { memo, useMemo } from "react";
import {
  Bell,
  ChevronDown,
  Menu,
  UserRound,
} from "lucide-react";
import { useLocation } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";
import { useLayoutStore } from "@/store/layout.store";

const PAGE_INFO: Record<
  string,
  {
    title: string;
    subtitle: string;
  }
> = {
  "/dashboard": {
    title: "Dashboard",
    subtitle: "Monitor your health journey.",
  },
  "/profile": {
    title: "Profile",
    subtitle: "Manage your profile.",
  },
  "/metrics": {
    title: "Health Metrics",
    subtitle: "Track your progress.",
  },
  "/diet": {
    title: "Generate Diet",
    subtitle: "Create your AI meal plan.",
  },
  "/weekly-diet": {
    title: "Weekly Diet",
    subtitle: "Weekly nutrition planning.",
  },
  "/history": {
    title: "Diet History",
    subtitle: "Review previous diet plans.",
  },
  "/settings": {
    title: "Settings",
    subtitle: "Manage preferences.",
  },
};

function Header() {
  const { pathname } = useLocation();
  const { user } = useAuth();

  const openMobileSidebar = useLayoutStore(
    (state) => state.openMobileSidebar
  );

  const page =
    PAGE_INFO[pathname] ?? {
      title: "AI Diet Guide",
      subtitle: "AI Nutrition Platform",
    };

  const initials = useMemo(() => {
    if (!user?.name) return "U";

    return user.name
      .trim()
      .split(/\s+/)
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }, [user?.name]);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-5">
        {/* Left */}

        <div className="flex items-center gap-3">
          <button
            onClick={openMobileSidebar}
            className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
          >
            <Menu size={20} />
          </button>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              {page.title}
            </h1>

            <p className="hidden text-xs text-slate-500 md:block">
              {page.subtitle}
            </p>
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-2">
          <button
            className="
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              bg-white
              transition
              hover:bg-slate-50
            "
          >
            <Bell size={18} />

            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <button
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-200
              bg-white
              p-2
              pl-2
              pr-3
              transition
              hover:bg-slate-50
            "
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 text-sm font-semibold text-white">
              {user?.name ? (
                initials
              ) : (
                <UserRound size={18} />
              )}
            </div>

            <div className="hidden text-left lg:block">
              <p className="max-w-32 truncate text-sm font-semibold">
                {user?.name ?? "User"}
              </p>

              <p className="max-w-32 truncate text-xs text-slate-500">
                {user?.email}
              </p>
            </div>

            <ChevronDown
              size={16}
              className="hidden text-slate-400 lg:block"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);