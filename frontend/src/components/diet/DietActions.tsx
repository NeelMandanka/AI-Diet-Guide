import { toast } from "react-hot-toast";
import {
  Clipboard,
  Download,
  Printer,
  RefreshCw,
} from "lucide-react";

import type { DietPlan } from "@/types/diet";
import { downloadDietPDF } from "@/utils/pdf";

interface Props {
  plan: DietPlan;
  loading: boolean;
  onRegenerate: () => void;
}

export default function DietActions({
  plan,
  loading,
  onRegenerate,
}: Props) {
  const handlePrint = () => {
    window.print();
  };

  const handleCopy = async () => {
    const text = `
${plan.title}

Goal: ${plan.goal}

${plan.meals
  .map(
    (meal) => `
${meal.meal_type}

${meal.title}

Calories: ${meal.calories}
Protein: ${meal.protein} g
Carbs: ${meal.carbohydrates} g
Fat: ${meal.fat} g

Recipe:
${meal.recipe}
`
  )
  .join("\n")}
`;

    await navigator.clipboard.writeText(text);

    toast.success("Diet copied to clipboard.");
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Diet Actions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Regenerate, export, print, or share your
            personalized meal plan.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={onRegenerate}
            disabled={loading}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-emerald-600
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-emerald-700
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            <RefreshCw
              size={18}
              className={
                loading ? "animate-spin" : ""
              }
            />
            Regenerate
          </button>

          <button
            onClick={handlePrint}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-200
              bg-white
              px-5
              py-3
              text-sm
              font-medium
              text-slate-700
              transition
              hover:bg-slate-50
            "
          >
            <Printer size={18} />
            Print
          </button>

          <button
            onClick={() => downloadDietPDF(plan)}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-200
              bg-white
              px-5
              py-3
              text-sm
              font-medium
              text-slate-700
              transition
              hover:bg-slate-50
            "
          >
            <Download size={18} />
            PDF
          </button>

          <button
            onClick={handleCopy}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-200
              bg-white
              px-5
              py-3
              text-sm
              font-medium
              text-slate-700
              transition
              hover:bg-slate-50
            "
          >
            <Clipboard size={18} />
            Copy
          </button>
        </div>
      </div>
    </section>
  );
}