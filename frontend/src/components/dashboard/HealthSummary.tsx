import { memo } from "react";
import {
  Activity,
  Droplets,
  Flame,
  Target,
  TrendingUp,
  Weight,
} from "lucide-react";

import type { Dashboard } from "@/types/dashboard";

interface Props {
  dashboard: Dashboard;
}

function HealthSummary({ dashboard }: Props) {
  const currentWeight =
    (dashboard.metrics as { weight?: number }).weight ??
    (dashboard.profile as { weight?: number }).weight;

  const cards = [
    {
      title: "Current Weight",
      value: currentWeight ? `${currentWeight} kg` : "N/A",
      subtitle: "Latest recorded weight",
      icon: Weight,
      color: "emerald",
    },
    {
      title: "BMI",
      value: dashboard.metrics.bmi.toFixed(1),
      subtitle: dashboard.metrics.bmi_category,
      icon: Activity,
      color: "blue",
    },
    {
      title: "Daily Calories",
      value: `${Math.round(dashboard.metrics.calories)}`,
      subtitle: "Recommended intake",
      icon: Flame,
      color: "orange",
    },
    {
      title: "Goal",
      value: dashboard.profile.goal,
      subtitle: "Current fitness target",
      icon: Target,
      color: "violet",
    },
  ];

  const colorClasses = {
    emerald: {
      bg: "bg-emerald-100",
      text: "text-emerald-600",
    },
    blue: {
      bg: "bg-sky-100",
      text: "text-sky-600",
    },
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-600",
    },
    violet: {
      bg: "bg-violet-100",
      text: "text-violet-600",
    },
  };

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;
        const colors =
          colorClasses[
            card.color as keyof typeof colorClasses
          ];

        return (
          <article
            key={card.title}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              transition
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {card.title}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  {card.value}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {card.subtitle}
                </p>
              </div>

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${colors.bg} ${colors.text}`}
              >
                <Icon size={20} />
              </div>
            </div>
          </article>
        );
      })}

      <article className="rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-500 to-green-600 p-5 text-white md:col-span-2 xl:col-span-4">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp size={18} />

              <h3 className="text-lg font-semibold">
                Health Insight
              </h3>
            </div>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-emerald-50">
              Your recommended calorie intake is{" "}
              <strong>
                {Math.round(
                  dashboard.metrics.calories
                )}{" "}
                kcal/day
              </strong>
              . Stay consistent with your nutrition plan,
              log your weight regularly, and regenerate
              your AI diet whenever your health metrics
              change.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur">
            <Droplets size={20} />

            <div>
              <p className="text-xs uppercase tracking-wider text-emerald-100">
                Daily Reminder
              </p>

              <p className="font-semibold">
                Drink 2–3L of water 💧
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default memo(HealthSummary);