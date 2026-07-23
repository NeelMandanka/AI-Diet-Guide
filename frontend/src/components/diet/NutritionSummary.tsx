import {
  Beef,
  Droplets,
  Flame,
  Wheat,
} from "lucide-react";

import type { Meal } from "@/types/diet";

interface Props {
  meals: Meal[];
}

export default function NutritionSummary({
  meals,
}: Props) {
  const totals = meals.reduce(
    (acc, meal) => ({
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      carbohydrates:
        acc.carbohydrates + meal.carbohydrates,
      fat: acc.fat + meal.fat,
    }),
    {
      calories: 0,
      protein: 0,
      carbohydrates: 0,
      fat: 0,
    }
  );

  const cards = [
    {
      title: "Calories",
      value: `${totals.calories} kcal`,
      subtitle: "Daily energy intake",
      icon: Flame,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      title: "Protein",
      value: `${totals.protein} g`,
      subtitle: "Supports muscle recovery",
      icon: Beef,
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      title: "Carbohydrates",
      value: `${totals.carbohydrates} g`,
      subtitle: "Primary energy source",
      icon: Wheat,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
    {
      title: "Fat",
      value: `${totals.fat} g`,
      subtitle: "Healthy daily fats",
      icon: Droplets,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
  ];

  return (
    <section>
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-900">
          Nutrition Summary
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Daily nutritional breakdown for your
          personalized meal plan.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div
                className={`inline-flex rounded-xl p-3 ${card.bg}`}
              >
                <Icon
                  size={22}
                  className={card.color}
                />
              </div>

              <p className="mt-5 text-sm font-medium text-slate-500">
                {card.title}
              </p>

              <h3 className="mt-1 text-3xl font-bold text-slate-900">
                {card.value}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {card.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}