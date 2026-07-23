import api from "@/api/axios";

import type {
  ApiResponse,
  Dashboard,
} from "@/types/dashboard";

export const dashboardService = {
  async getDashboard(): Promise<Dashboard> {
    const response =
      await api.get<ApiResponse<Dashboard>>(
        "/dashboard"
      );

    return response.data.data;
  },
};