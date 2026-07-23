import { memo } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";

interface Props {
  to: string;
  label: string;
  icon: React.ElementType;
  collapsed?: boolean;
}

function NavItem({
  to,
  label,
  icon: Icon,
  collapsed = false,
}: Props) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        clsx(
          "group relative flex items-center overflow-hidden rounded-xl transition-all duration-200",
          collapsed
            ? "h-11 w-11 justify-center"
            : "h-11 gap-3 px-3",
          isActive
            ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-md shadow-emerald-500/20"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        )
      }
    >
      {({ isActive }) => (
        <>
          {/* Active Indicator */}

          <span
            className={clsx(
              "absolute inset-y-2 left-0 w-1 rounded-r-full transition",
              isActive
                ? "bg-white"
                : "bg-transparent"
            )}
          />

          {/* Icon */}

          <div
            className={clsx(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition",
              isActive
                ? "bg-white/15 text-white"
                : "bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-600"
            )}
          >
            <Icon
              size={18}
              strokeWidth={2}
            />
          </div>

          {!collapsed && (
            <>
              <span className="flex-1 truncate text-sm font-medium">
                {label}
              </span>

              <ChevronRight
                size={16}
                className={clsx(
                  "transition-all duration-200",
                  isActive
                    ? "opacity-100"
                    : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                )}
              />
            </>
          )}
        </>
      )}
    </NavLink>
  );
}

export default memo(NavItem);