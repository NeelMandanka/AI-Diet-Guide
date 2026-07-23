import { Settings } from "lucide-react";

import AppInfoCard from "@/components/settings/AppInfoCard";
import SecurityCard from "@/components/settings/SecurityCard";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      {/* Header */}

      <section className="rounded-3xl border border-slate-200 bg-white p-7">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
            <Settings size={20} />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Settings
            </h1>

            <p className="mt-2 text-slate-500">
              Manage your account, security, and application preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Settings */}

      <div className="space-y-5">
        <SecurityCard />

        <AppInfoCard />
      </div>
    </div>
  );
}