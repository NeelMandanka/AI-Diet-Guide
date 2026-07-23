import api from "@/api/axios";
import type {
  ApiResponse,
  HealthMetrics,
} from "@/types/metrics";

export const metricsService = {
  async getMetrics(): Promise<HealthMetrics> {
    const response =
      await api.get<ApiResponse<HealthMetrics>>(
        "/metrics"
      );

    return response.data.data;
  },
};