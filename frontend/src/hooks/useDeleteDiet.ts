import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { historyService } from "@/services/history.service";

export function useDeleteDiet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: historyService.deletePlan,

    onSuccess() {
      toast.success("Diet deleted.");

      queryClient.invalidateQueries({
        queryKey: ["diet-history"],
      });
    },

    onError() {
      toast.error("Unable to delete diet.");
    },
  });
}