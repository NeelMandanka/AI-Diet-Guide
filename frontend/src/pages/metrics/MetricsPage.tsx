import {
  Activity,
  Flame,
  HeartPulse,
  Scale,
} from "lucide-react";

import Card from "@/components/common/Card";
import HealthTips from "@/components/metrics/HealthTips";
import MacroChart from "@/components/metrics/MacroChart";

import { useMetrics } from "@/hooks/useMetrics";

export default function MetricsPage() {
  const { data, isLoading, isError } =
    useMetrics();

  if (isLoading) {
    return (
      <div className="flex h-72 items-center justify-center">
        <p className="text-slate-500">
          Loading health metrics...
        </p>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex h-72 items-center justify-center">
        <p className="text-red-500">
          Unable to load health metrics.
        </p>
      </div>
    );
  }

  const summaryCards = [
    {
      title: "BMI",
      value: data.bmi.toFixed(1),
      subtitle: data.bmi_category,
      icon: Scale,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      title: "BMR",
      value: Math.round(data.bmr),
      subtitle: "kcal/day",
      icon: HeartPulse,
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
    {
      title: "TDEE",
      value: Math.round(data.tdee),
      subtitle: "kcal/day",
      icon: Activity,
      iconBg: "bg-sky-100",
      iconColor: "text-sky-600",
    },
    {
      title: "Calories",
      value: Math.round(data.calories),
      subtitle: "Daily target",
      icon: Flame,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  const macros = [
    {
      title: "Protein",
      value: `${Math.round(data.protein)} g`,
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      title: "Carbohydrates",
      value: `${Math.round(
        data.carbohydrates
      )} g`,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
    {
      title: "Fat",
      value: `${Math.round(data.fat)} g`,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}

      <section>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Health Metrics
        </h1>

        <p className="mt-2 text-slate-500">
          Review your calculated health metrics,
          calorie requirements, and recommended
          daily macronutrients.
        </p>
      </section>

      {/* Summary */}

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => {
          const Icon = card.icon;

          return (
            <Card key={card.title}>
              <div
                className={`inline-flex rounded-xl p-3 ${card.iconBg}`}
              >
                <Icon
                  size={22}
                  className={card.iconColor}
                />
              </div>

              <p className="mt-5 text-sm text-slate-500">
                {card.title}
              </p>

              <h2 className="mt-1 text-3xl font-bold">
                {card.value}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {card.subtitle}
              </p>
            </Card>
          );
        })}
      </section>

      {/* Nutrition */}

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <h2 className="text-xl font-bold text-slate-900">
            Recommended Daily Macronutrients
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Based on your current calorie target.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {macros.map((macro) => (
              <div
                key={macro.title}
                className={`rounded-2xl ${macro.bg} p-5`}
              >
                <p className="text-sm text-slate-500">
                  {macro.title}
                </p>

                <h3
                  className={`mt-2 text-3xl font-bold ${macro.color}`}
                >
                  {macro.value}
                </h3>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="mb-5 text-xl font-bold">
            Distribution
          </h2>

          <MacroChart
            protein={data.protein}
            carbohydrates={data.carbohydrates}
            fat={data.fat}
          />
        </Card>
      </section>

      {/* Health Tips */}

      <HealthTips bmi={data.bmi} />
    </div>
  );
}