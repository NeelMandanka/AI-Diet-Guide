import api from "@/api/axios";

import type {
  LoginRequest,
  RefreshTokenRequest,
  RegisterRequest,
  TokenResponse,
  User,
} from "@/types/auth";

export const authService = {
  async register(data: RegisterRequest): Promise<User> {
    const response = await api.post<User>(
      "/auth/register",
      data,
    );

    return response.data;
  },

  async login(data: LoginRequest): Promise<TokenResponse> {
    const formData = new URLSearchParams();

    formData.append("username", data.email);
    formData.append("password", data.password);

    const response = await api.post<TokenResponse>(
      "/auth/login",
      formData,
      {
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
      },
    );

    return response.data;
  },

  async me(): Promise<User> {
    const response = await api.get<User>(
      "/auth/me",
    );

    return response.data;
  },

  async refresh(
    data: RefreshTokenRequest,
  ): Promise<TokenResponse> {
    const response = await api.post<TokenResponse>(
      "/auth/refresh",
      data,
    );

    return response.data;
  },
};