import api from "@/api/axios";
import type {
  ApiResponse,
  UserProfile,
} from "@/types/profile";

export const profileService = {
  async getProfile() {
    const response =
      await api.get<ApiResponse<UserProfile>>(
        "/profile"
      );

    return response.data.data;
  },

  async createProfile(
    data: Omit<
      UserProfile,
      | "id"
      | "user_id"
      | "created_at"
      | "updated_at"
    >
  ) {
    const response =
      await api.post<UserProfile>(
        "/profile",
        data
      );

    return response.data;
  },

  async updateProfile(
    data: Partial<UserProfile>
  ) {
    const response =
      await api.patch<UserProfile>(
        "/profile",
        data
      );

    return response.data;
  },

  async getWeightHistory() {
    const response =
      await api.get("/profile/weight-history");

    return response.data;
  },

  async addWeight(weight_kg: number) {
    const response =
      await api.post(
        "/profile/weight",
        {
          weight_kg,
        }
      );

    return response.data;
  },
};