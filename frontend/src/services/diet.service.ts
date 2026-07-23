import api from "@/api/axios";

import type {
  ApiResponse,
  DietPlan,
  GenerateDietRequest,
} from "@/types/diet";

export const dietService = {
  async generateDiet(
    payload: GenerateDietRequest
  ): Promise<DietPlan> {
    const response =
      await api.post<ApiResponse<DietPlan>>(
        "/diet/generate",
        payload
      );

    return response.data.data;
  },
};