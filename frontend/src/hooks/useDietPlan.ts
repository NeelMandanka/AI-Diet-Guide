import { useQuery } from "@tanstack/react-query";

import { historyService } from "@/services/history.service";

export function useDietPlan(id?: number) {
  return useQuery({
    queryKey: ["diet-plan", id],
    queryFn: () => historyService.getPlan(id!),
    enabled: !!id,
  });
}