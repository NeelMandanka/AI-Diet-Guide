import {
  CalendarDays,
  Sparkles,
  Target,
} from "lucide-react";

import type { DietPlan } from "@/types/diet";

interface Props {
  plan: DietPlan;
}

export default function DietHeader({
  plan,
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white">
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-white to-white" />

      <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="relative p-7">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700">
          <Sparkles size={14} />
          AI Generated Diet Plan
        </div>

        <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
          {plan.title}
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
          Your personalized nutrition plan has been
          generated based on your health profile,
          dietary goals, and lifestyle information.
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <Target size={18} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Goal
              </p>

              <p className="text-sm font-semibold text-slate-900">
                {plan.goal}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
              <CalendarDays size={18} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Generated On
              </p>
              <p className="text-sm font-semibold text-slate-900">
                {new Date(
                  plan.created_at
                ).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}