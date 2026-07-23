import { Fragment, memo, useCallback } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Activity,
  LogOut,
  UserRound,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { navigation } from "@/constants/navigation";
import { useAuthStore } from "@/store/auth.store";
import { clearTokens } from "@/utils/token";
import { appToast } from "@/utils/toast";

import NavItem from "./NavItem";

interface Props {
  open: boolean;
  onClose: () => void;
}

function MobileSidebar({
  open,
  onClose,
}: Props) {
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

    onClose();
  }, [clearUser, navigate, onClose]);

  const initials =
    user?.name
      ?.trim()
      ?.split(/\s+/)
      ?.map((word: string) => word[0])
      ?.join("")
      ?.slice(0, 2)
      ?.toUpperCase() ?? "U";

  return (
    <Transition.Root
      show={open}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transform transition duration-200"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition duration-150"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="flex h-full w-64 flex-col bg-white shadow-xl">
              {/* Header */}

              <div className="border-b border-slate-200 px-5 py-5">
                <div className="flex items-center justify-between">
                  <Link
                    to="/dashboard"
                    onClick={onClose}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white">
                      <Activity size={20} />
                    </div>

                    <div>
                      <h2 className="text-base font-bold text-slate-900">
                        AI Diet Guide
                      </h2>

                      <p className="text-xs text-slate-500">
                        Nutrition Platform
                      </p>
                    </div>
                  </Link>

                  <button
                    onClick={onClose}
                    className="rounded-lg p-2 hover:bg-slate-100"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Navigation */}

              <nav className="flex-1 overflow-y-auto px-3 py-4">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <div
                      key={item.path}
                      onClick={onClose}
                    >
                      <NavItem
                        {...item}
                        to={item.path}
                      />
                    </div>
                  ))}
                </div>
              </nav>

              {/* Footer */}

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
                    <p className="truncate text-sm font-semibold">
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
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default memo(MobileSidebar);