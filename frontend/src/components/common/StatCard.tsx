import { memo } from "react";
import type { LucideIcon } from "lucide-react";

import Card from "./Card";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

function StatCard({
  title,
  value,
  icon: Icon,
}: StatCardProps) {
  return (
    <Card
      className="
        group
        cursor-default
        transition-all
        duration-300
        hover:-translate-y-1
      "
    >
      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {title}
          </p>

          <h2 className="mt-4 truncate text-4xl font-bold tracking-tight text-slate-900">
            {value}
          </h2>

          <div className="mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 opacity-80 transition-all duration-300 group-hover:w-28" />
        </div>

        <div
          className="
            flex
            h-16
            w-16
            shrink-0
            items-center
            justify-center
            rounded-3xl
            bg-gradient-to-br
            from-emerald-500
            to-green-600
            text-white
            shadow-lg
            shadow-emerald-500/20
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:rotate-3
          "
        >
          <Icon
            size={28}
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>
      </div>
    </Card>
  );
}

export default memo(StatCard);