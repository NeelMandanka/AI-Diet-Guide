import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { dietService } from "@/services/diet.service";

import type {
  DietPlan,
  GenerateDietRequest,
} from "@/types/diet";

export function useGenerateDiet() {
  return useMutation<
    DietPlan,
    Error,
    GenerateDietRequest
  >({
    mutationFn: dietService.generateDiet,

    onSuccess() {
      toast.success("Diet generated successfully!");
    },

    onError(error: any) {
      toast.error(
        error?.response?.data?.detail ??
          "Failed to generate diet."
      );
    },
  });
}