import { useMemo, useState } from "react";

import HistoryCard from "@/components/history/HistoryCard";
import HistorySearch from "@/components/history/HistorySearch";
import HistoryStats from "@/components/history/HistoryStats";
import DeleteDialog from "@/components/history/DeleteDialog";
import EmptyState from "@/components/common/EmptyState";

import { useDeleteDiet } from "@/hooks/useDeleteDiet";
import { useDietHistory } from "@/hooks/useDietHistory";

import type { DietPlan } from "@/types/diet";
import { Utensils } from "lucide-react";

export default function HistoryPage() {
  const { data = [], isLoading } = useDietHistory();

  const deleteMutation = useDeleteDiet();

  const [search, setSearch] = useState("");

  const [selectedPlan, setSelectedPlan] =
    useState<DietPlan | null>(null);

  const filteredPlans = useMemo(() => {
    return data.filter((plan) =>
      `${plan.title} ${plan.goal}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [data, search]);

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <DeleteDialog
        open={!!selectedPlan}
        loading={deleteMutation.isPending}
        title={selectedPlan?.title ?? ""}
        onCancel={() => setSelectedPlan(null)}
        onConfirm={() => {
          if (!selectedPlan) return;

          deleteMutation.mutate(selectedPlan.id, {
            onSuccess: () => {
              setSelectedPlan(null);
            },
          });
        }}
      />

      <div className="mx-auto max-w-7xl space-y-8">
        <h1 className="text-2xl font-bold">
          Diet History
        </h1>

        <HistoryStats plans={data} />

        <HistorySearch
          value={search}
          onChange={setSearch}
        />

        {filteredPlans.length === 0 ? (
          <div className="rounded-xl border bg-white p-7 text-center">
            <h2 className="text-xl font-semibold">
              <EmptyState
                icon={Utensils}
                title="No Diet Plans Yet"
                description="Generate your first personalized diet plan."
              />
            </h2>

            <p className="mt-2 text-gray-500">
              Try another search or generate a new diet plan.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredPlans.map((plan) => (
              <HistoryCard
                key={plan.id}
                plan={plan}
                onDelete={() => setSelectedPlan(plan)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}