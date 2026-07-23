import { useEffect } from "react";

import { authService } from "@/services/auth.service";
import { getAccessToken } from "@/utils/token";
import { useAuthStore } from "@/store/auth.store";

export function useRestoreSession() {
  const setUser = useAuthStore((s) => s.setUser);

  const clearUser = useAuthStore((s) => s.clearUser);

  const setAuthInitialized = useAuthStore(
    (s) => s.setAuthInitialized,
  );

  useEffect(() => {
    const restore = async () => {
      const token = getAccessToken();

      if (!token) {
        setAuthInitialized(true);

        return;
      }

      try {
        const user = await authService.me();

        setUser(user);
      } catch {
        clearUser();
      } finally {
        setAuthInitialized(true);
      }
    };

    restore();
  }, [
    setUser,
    clearUser,
    setAuthInitialized,
  ]);
}