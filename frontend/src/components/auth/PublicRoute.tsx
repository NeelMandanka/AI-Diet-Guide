import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { Activity, Loader2 } from "lucide-react";

import { useAuth } from "@/hooks/useAuth";

interface Props {
  children: ReactNode;
}

export default function PublicRoute({
  children,
}: Props) {
  const {
    isAuthenticated,
    authInitialized,
  } = useAuth();

  if (!authInitialized) {
    return (
      <main
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6"
        aria-busy="true"
        aria-live="polite"
      >
        {/* Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-emerald-200/40 blur-[130px]" />

          <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-cyan-200/30 blur-[130px]" />
        </div>

        <section className="relative w-full max-w-md rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
          {/* Brand */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-xl shadow-emerald-500/20">
            <Activity
              size={34}
              className="text-white"
            />
          </div>

          {/* Loader */}
          <div className="mt-8 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">
              <Loader2
                size={28}
                className="animate-spin text-emerald-600"
              />
            </div>
          </div>

          {/* Text */}
          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
            Preparing Your Session
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            Checking your authentication status and preparing a
            secure experience.
          </p>
        </section>
      </main>
    );
  }

  if (isAuthenticated) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  return <>{children}</>;
}