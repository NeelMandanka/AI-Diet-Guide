import { useQuery } from "@tanstack/react-query";

import { historyService } from "@/services/history.service";

export function useDietHistory() {
  return useQuery({
    queryKey: ["diet-history"],
    queryFn: historyService.getHistory,
  });
}