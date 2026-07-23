import { memo, useMemo } from "react";
import {
  Activity,
  ArrowRight,
  Flame,
  HeartPulse,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";
import type { Dashboard } from "@/types/dashboard";

interface DashboardHeaderProps {
  dashboard: Dashboard;
}

function DashboardHeader({
  dashboard,
}: DashboardHeaderProps) {
  const { user } = useAuth();

  const greeting = useMemo(() => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";

    return "Good Evening";
  }, []);

  const metrics = [
    {
      label: "Goal",
      value: dashboard.profile.goal,
      icon: Target,
    },
    {
      label: "BMI",
      value: dashboard.metrics.bmi.toFixed(1),
      icon: Activity,
    },
    {
      label: "Calories",
      value: `${Math.round(
        dashboard.metrics.calories
      )} kcal`,
      icon: Flame,
    },
    {
      label: "Status",
      value: dashboard.metrics.bmi_category,
      icon: HeartPulse,
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white">
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-white" />

      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="relative grid gap-8 p-6 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">

        {/* Left */}

        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700">
            <Sparkles size={14} />
            AI Powered Nutrition
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
            {greeting},{" "}
            <span className="text-emerald-600">
              {user?.name?.split(" ")[0] ?? "User"}
            </span>
            👋
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
            Stay on track with your nutrition goals.
            Generate personalized meal plans, monitor
            your progress, and build healthier habits
            every day.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/diet"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Generate Diet

              <ArrowRight size={16} />
            </Link>

            <Link
              to="/metrics"
              className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-600"
            >
              Update Metrics
            </Link>
          </div>
        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-3">
          {metrics.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                p-4
                transition
                hover:border-emerald-300
                hover:bg-white
              "
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                <Icon size={18} />
              </div>

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                {label}
              </p>

              <p className="mt-1 text-lg font-bold text-slate-900">
                {value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default memo(DashboardHeader);