import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck, Sparkles } from "lucide-react";

import RegisterForm from "@/components/auth/RegisterForm";

import { authService } from "@/services/auth.service";
import { appToast } from "@/utils/toast";

import type { RegisterFormValues } from "@/validations/register.schema";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (
    values: RegisterFormValues,
  ) => {
    try {
      setIsLoading(true);

      await authService.register(values);

      appToast.success(
        "Your account has been created successfully."
      );

      navigate("/login", {
        replace: true,
      });
    } catch (error: any) {
      console.error(error);

      appToast.error(
        error?.response?.data?.detail ??
          "Registration failed."
      );
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
              Start Your
              <span className="block text-emerald-600">
                Health Journey
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Create your AI Diet Guide account to receive personalized meal
              plans, nutrition insights, health tracking, and AI-powered
              recommendations tailored to your lifestyle.
            </p>

            <div className="mt-10 flex items-center gap-3 text-slate-600">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />

              <span className="text-sm font-medium">
                Secure account • Personalized nutrition • Smart recommendations
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
                  Create Account
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Join AI Diet Guide and begin your personalized nutrition
                  journey.
                </p>
              </div>

              <RegisterForm
                isLoading={isLoading}
                onSubmit={handleRegister}
              />

              <p className="mt-8 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-emerald-600 transition hover:text-emerald-700"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}