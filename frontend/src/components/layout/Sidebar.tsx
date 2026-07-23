import { memo, useCallback } from "react";
import {
  Activity,
  LogOut,
  UserRound,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { navigation } from "@/constants/navigation";
import { useAuthStore } from "@/store/auth.store";
import { clearTokens } from "@/utils/token";
import { appToast } from "@/utils/toast";

import NavItem from "./NavItem";

function Sidebar() {
  const navigate = useNavigate();

  const user = useAuthStore((state: any) => state.user);

  const clearUser = useAuthStore(
    (state: any) => state.clearUser
  );

  const handleLogout = useCallback(() => {
    clearTokens();

    clearUser?.();

    appToast.success("Logged out successfully.");

    navigate("/login", {
      replace: true,
    });
  }, [clearUser, navigate]);

  const initials =
    user?.name
      ?.trim()
      ?.split(/\s+/)
      ?.map((word: string) => word[0])
      ?.join("")
      ?.slice(0, 2)
      ?.toUpperCase() ?? "U";

  return (
    <aside className="flex h-full flex-col bg-white">
      {/* Logo */}

      <div className="border-b border-slate-200 px-5 py-5">
        <Link
          to="/dashboard"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-md">
            <Activity size={20} />
          </div>

          <div>
            <h1 className="text-base font-bold text-slate-900">
              AI Diet Guide
            </h1>

            <p className="text-xs text-slate-500">
              Personalized Nutrition
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
          Navigation
        </p>

        <div className="space-y-1">
          {navigation.map((item) => (
            <NavItem
              key={item.path}
              {...item}
              to={item.path}
            />
          ))}
        </div>
      </nav>

      {/* User */}

      <div className="border-t border-slate-200 p-4">
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 text-sm font-semibold text-white">
            {user?.name ? (
              initials
            ) : (
              <UserRound size={18} />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-slate-900">
              {user?.name ?? "User"}
            </p>

            <p className="truncate text-xs text-slate-500">
              {user?.email}
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="
            mt-3
            flex
            h-10
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-red-50
            text-sm
            font-semibold
            text-red-600
            transition
            hover:bg-red-100
          "
        >
          <LogOut size={16} />
          Logout
        </button>

        <p className="mt-4 text-center text-[11px] text-slate-400">
          AI Diet Guide v1.0.0
        </p>
      </div>
    </aside>
  );
}

export default memo(Sidebar);