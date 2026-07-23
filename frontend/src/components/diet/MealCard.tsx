import {
  Beef,
  Droplets,
  Flame,
  UtensilsCrossed,
  Wheat,
} from "lucide-react";

import type { Meal } from "@/types/diet";

interface Props {
  meal: Meal;
}

const mealTypeColor: Record<string, string> = {
  Breakfast: "bg-yellow-100 text-yellow-700",
  Lunch: "bg-emerald-100 text-emerald-700",
  Dinner: "bg-indigo-100 text-indigo-700",
  Snack: "bg-pink-100 text-pink-700",
  Snacks: "bg-pink-100 text-pink-700",
};

export default function MealCard({ meal }: Props) {
  const badge =
    mealTypeColor[meal.meal_type] ??
    "bg-slate-100 text-slate-700";

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      {/* Header */}

      <div className="border-b border-slate-200 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${badge}`}
          >
            {meal.meal_type}
          </span>

          <div className="flex items-center gap-2 rounded-xl bg-orange-50 px-3 py-2">
            <Flame
              size={18}
              className="text-orange-600"
            />

            <span className="text-sm font-semibold">
              {meal.calories} kcal
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
            <UtensilsCrossed size={26} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {meal.title}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              AI-generated balanced meal
            </p>
          </div>
        </div>
      </div>

      {/* Nutrition */}

      <div className="grid grid-cols-3 gap-4 p-6">
        <div className="rounded-xl bg-red-50 p-4 text-center">
          <Beef
            size={20}
            className="mx-auto mb-2 text-red-600"
          />

          <p className="text-xs text-slate-500">
            Protein
          </p>

          <p className="mt-1 text-lg font-bold">
            {meal.protein} g
          </p>
        </div>

        <div className="rounded-xl bg-yellow-50 p-4 text-center">
          <Wheat
            size={20}
            className="mx-auto mb-2 text-yellow-600"
          />

          <p className="text-xs text-slate-500">
            Carbs
          </p>

          <p className="mt-1 text-lg font-bold">
            {meal.carbohydrates} g
          </p>
        </div>

        <div className="rounded-xl bg-blue-50 p-4 text-center">
          <Droplets
            size={20}
            className="mx-auto mb-2 text-blue-600"
          />

          <p className="text-xs text-slate-500">
            Fat
          </p>

          <p className="mt-1 text-lg font-bold">
            {meal.fat} g
          </p>
        </div>
      </div>

      {/* Recipe */}

      <div className="border-t border-slate-200 p-6">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          Preparation
        </h3>

        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="whitespace-pre-line text-sm leading-7 text-slate-600">
            {meal.recipe}
          </p>
        </div>
      </div>
    </article>
  );
}