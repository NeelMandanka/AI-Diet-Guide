import { useState } from "react";

import DietActions from "@/components/diet/DietActions";
import DietHeader from "@/components/diet/DietHeader";
import DietLoading from "@/components/diet/DietLoading";
import EmptyDiet from "@/components/diet/EmptyDiet";
import GroceryList from "@/components/diet/GroceryList";
import MealCard from "@/components/diet/MealCard";
import NutritionSummary from "@/components/diet/NutritionSummary";

import { useGenerateDiet } from "@/hooks/useGenerateDiet";

export default function DietPage() {
  const [generated, setGenerated] =
    useState(false);

  const mutation = useGenerateDiet();

  const generateDiet = async (
    regenerate = false
  ) => {
    await mutation.mutateAsync({
      days: 1,
      regenerate,
    });

    setGenerated(true);
  };

  const handleGenerate = () =>
    generateDiet(false);

  if (mutation.isPending) {
    return <DietLoading />;
  }

  if (!generated) {
    return (
      <EmptyDiet
        onGenerate={handleGenerate}
      />
    );
  }

  if (!mutation.data) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
        <p className="text-slate-600">
          No diet plan available.
        </p>
      </div>
    );
  }

  const plan = mutation.data;

  return (
    <div className="space-y-6">

      <DietHeader plan={plan} />

      <DietActions
        plan={plan}
        loading={mutation.isPending}
        onRegenerate={() =>
          generateDiet(true)
        }
      />

      <NutritionSummary
        meals={plan.meals}
      />

      <section className="space-y-5">
        {plan.meals.map((meal) => (
          <MealCard
            key={meal.id}
            meal={meal}
          />
        ))}
      </section>

      <GroceryList
        items={plan.grocery_items}
      />

    </div>
  );
}