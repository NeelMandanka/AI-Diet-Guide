import api from "@/api/axios";

import type {
  ApiResponse,
  DietPlan,
} from "@/types/diet";

export const historyService = {
  async getHistory(): Promise<DietPlan[]> {
    const response =
      await api.get<ApiResponse<DietPlan[]>>(
        "/diet"
      );

    return response.data.data;
  },

  async getLatest(): Promise<DietPlan> {
    const response =
      await api.get<ApiResponse<DietPlan>>(
        "/diet/latest"
      );

    return response.data.data;
  },

  async getPlan(
    id: number
  ): Promise<DietPlan> {
    const response =
      await api.get<ApiResponse<DietPlan>>(
        `/diet/${id}`
      );

    return response.data.data;
  },

  async deletePlan(id: number) {
    await api.delete(`/diet/${id}`);
  },
};