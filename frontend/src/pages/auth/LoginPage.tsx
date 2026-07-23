import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, ShieldCheck } from "lucide-react";

import LoginForm from "@/components/auth/LoginForm";

import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";
import { setTokens } from "@/utils/token";
import { appToast } from "@/utils/toast";

import type { LoginFormValues } from "@/validations/login.schema";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const handleLogin = async (values: LoginFormValues) => {
    try {
      setIsLoading(true);

      const tokens = await authService.login(values);

      setTokens(tokens.access_token, tokens.refresh_token);

      const currentUser = await authService.me();

      setUser(currentUser);

      appToast.success("Welcome back!");

      navigate("/dashboard", {
        replace: true,
      });
    } catch (error) {
      console.error(error);

      appToast.error("Invalid email or password.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-auth min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-10">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">
          {/* Left Section */}

          <section className="hidden lg:flex flex-col justify-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg">
              <Sparkles className="h-7 w-7" />
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900">
              AI Diet
              <span className="block text-emerald-600">
                Guide
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Generate personalized AI-powered diet plans, monitor your
              nutrition, and achieve your health goals through intelligent meal
              recommendations.
            </p>

            <div className="mt-10 flex items-center gap-3 text-slate-600">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />

              <span className="text-sm font-medium">
                Secure authentication • Personalized nutrition • Smart insights
              </span>
            </div>
          </section>

          {/* Right Section */}

          <section className="mx-auto w-full max-w-md">
            <div className="glass shadow-soft rounded-3xl p-8 fade-in">
              <div className="mb-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg lg:hidden">
                  <Sparkles className="h-7 w-7" />
                </div>

                <h2 className="mt-6 text-3xl font-bold text-slate-900">
                  Welcome Back
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Sign in to continue your personalized nutrition journey.
                </p>
              </div>

              <LoginForm
                onSubmit={handleLogin}
                isLoading={isLoading}
              />

              </div>
          </section>
        </div>
      </div>
    </main>
  );
}