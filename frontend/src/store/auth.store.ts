import { create } from "zustand";

import type { User } from "@/types/auth";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;

  authInitialized: boolean;

  setUser: (user: User | null) => void;

  clearUser: () => void;

  setAuthInitialized: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  isAuthenticated: false,

  authInitialized: false,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),

  clearUser: () =>
    set({
      user: null,
      isAuthenticated: false,
      authInitialized: true,
    }),

  setAuthInitialized: (value) =>
    set({
      authInitialized: value,
    }),
}));