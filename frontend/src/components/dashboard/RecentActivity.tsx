import { memo } from "react";
import {
  Activity,
  CalendarDays,
  Scale,
  TrendingUp,
} from "lucide-react";

import Card from "@/components/common/Card";
import type { DashboardWeightLog } from "@/types/dashboard";

interface RecentActivityProps {
  recentWeightLogs: DashboardWeightLog[];
}

function RecentActivity({
  recentWeightLogs,
}: RecentActivityProps) {
  return (
    <Card className="overflow-hidden p-0">
      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Recent Activity
          </h2>

          <p className="text-sm text-slate-500">
            Latest weight records.
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
          <Activity
            size={18}
            className="text-emerald-600"
          />
        </div>
      </div>

      {/* Empty */}

      {recentWeightLogs.length === 0 ? (
        <div className="flex flex-col items-center px-6 py-12 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100">
            <Scale
              size={24}
              className="text-emerald-600"
            />
          </div>

          <h3 className="mt-4 text-base font-semibold text-slate-900">
            No Activity Yet
          </h3>

          <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
            Start logging your weight to track your
            health journey.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-slate-100">
          {recentWeightLogs.map((log, index) => (
            <div
              key={`${log.logged_at}-${index}`}
              className="
                flex
                items-center
                gap-4
                px-6
                py-4
                transition
                hover:bg-slate-50
              "
            >
              {/* Icon */}

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <Scale size={20} />
              </div>

              {/* Content */}

              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-900">
                  Weight Updated
                </h3>

                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={14} />

                    {new Date(
                      log.logged_at
                    ).toLocaleDateString(undefined, {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>

                  <span className="flex items-center gap-1">
                    <TrendingUp size={14} />
                    Progress
                  </span>
                </div>
              </div>

              {/* Weight */}

              <div className="text-right">
                <p className="text-xl font-bold text-slate-900">
                  {log.weight_kg}
                </p>

                <p className="text-xs text-slate-500">
                  kg
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

export default memo(RecentActivity);