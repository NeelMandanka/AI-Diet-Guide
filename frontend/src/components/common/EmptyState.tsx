import { memo, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: ReactNode;
}

function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <section
      role="status"
      aria-live="polite"
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-dashed
        border-slate-300
        bg-white
        px-6
        py-16
        text-center
        shadow-sm
        transition-all
        duration-300
        hover:border-emerald-300
        hover:shadow-lg
        sm:px-10
        sm:py-20
      "
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-emerald-100/30 blur-3xl" />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Icon */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-50 to-green-100 ring-8 ring-emerald-50 shadow-sm">
          <Icon
            size={40}
            strokeWidth={2}
            className="text-emerald-600"
            aria-hidden="true"
          />
        </div>

        {/* Title */}
        <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
          {description}
        </p>

        {/* Action */}
        {action && (
          <div className="mt-8 flex items-center justify-center">
            {action}
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(EmptyState);