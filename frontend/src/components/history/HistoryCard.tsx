import { Link } from "react-router-dom";
import {
  CalendarDays,
  Eye,
  Target,
  Trash2,
} from "lucide-react";

import type { DietPlan } from "@/types/diet";

interface Props {
  plan: DietPlan;
  onDelete: (id: number) => void;
}

export default function HistoryCard({
  plan,
  onDelete,
}: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-md">
      {/* Left */}

      <div className="min-w-0 flex-1">
        <h2 className="truncate text-lg font-semibold text-slate-900">
          {plan.title}
        </h2>

        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1">
            <Target size={16} className="text-emerald-600" />
            {plan.goal}
          </span>

          <span className="flex items-center gap-1">
            <CalendarDays size={16} className="text-sky-600" />
            {new Date(plan.created_at).toLocaleDateString()}
          </span>

          <span>{plan.meals.length} Meals</span>
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center gap-2">
        <Link
          to={`/history/${plan.id}`}
          className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
        >
          <Eye size={16} />
          View
        </Link>

        <button
          onClick={() => onDelete(plan.id)}
          className="rounded-lg border border-red-200 bg-red-50 p-2 text-red-600 hover:bg-red-100"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}