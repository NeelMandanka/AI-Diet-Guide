import { memo } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  CalendarDays,
  Clock3,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

import Card from "@/components/common/Card";

const actions = [
  {
    title: "Generate Diet",
    description: "Create a personalized AI meal plan.",
    icon: UtensilsCrossed,
    to: "/diet",
    color: "bg-emerald-100 text-emerald-600",
    badge: "AI",
  },
  {
    title: "Weekly Planner",
    description: "Generate your weekly meal schedule.",
    icon: CalendarDays,
    to: "/weekly-diet",
    color: "bg-sky-100 text-sky-600",
    badge: "7 Days",
  },
  {
    title: "Health Metrics",
    description: "Track BMI, calories and weight.",
    icon: Activity,
    to: "/metrics",
    color: "bg-orange-100 text-orange-600",
    badge: "Track",
  },
  {
    title: "Diet History",
    description: "View previous AI diet plans.",
    icon: Clock3,
    to: "/history",
    color: "bg-violet-100 text-violet-600",
    badge: "History",
  },
];

function QuickActions() {
  return (
    <Card className="overflow-hidden p-0">
      {/* Header */}

      <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
          <Sparkles
            size={18}
            className="text-emerald-600"
          />
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Quick Actions
          </h2>

          <p className="text-sm text-slate-500">
            Jump into your most-used features.
          </p>
        </div>
      </div>

      {/* Grid */}

      <div className="grid gap-4 p-6 md:grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.to}
              className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                transition
                hover:-translate-y-1
                hover:border-emerald-300
                hover:shadow-lg
              "
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${action.color}`}
                >
                  <Icon size={20} />
                </div>

                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                  {action.badge}
                </span>
              </div>

              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {action.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {action.description}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-medium text-emerald-600">
                  Open
                </span>

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </Card>
  );
}

export default memo(QuickActions);