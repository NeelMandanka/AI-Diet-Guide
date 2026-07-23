import {
  Calendar,
  Clock,
  FileText,
} from "lucide-react";

import type { DietPlan } from "@/types/diet";

interface Props {
  plans: DietPlan[];
}

export default function HistoryStats({
  plans,
}: Props) {
  const totalPlans = plans.length;

  const thisMonth = plans.filter((plan) => {
    const created = new Date(plan.created_at);
    const now = new Date();

    return (
      created.getMonth() === now.getMonth() &&
      created.getFullYear() === now.getFullYear()
    );
  }).length;

  const latest =
    plans[0]
      ? new Date(plans[0].created_at).toLocaleDateString()
      : "-";

  const stats = [
    {
      label: "Total Plans",
      value: totalPlans,
      icon: FileText,
    },
    {
      label: "This Month",
      value: thisMonth,
      icon: Calendar,
    },
    {
      label: "Latest Plan",
      value: latest,
      icon: Clock,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map(({ label, value, icon: Icon }) => (
        <div
          key={label}
          className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
            <Icon size={20} />
          </div>

          <div>
            <p className="text-xs text-slate-500">
              {label}
            </p>

            <p className="text-lg font-semibold text-slate-900">
              {value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}