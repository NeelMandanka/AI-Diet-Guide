import { Lock, ShieldCheck } from "lucide-react";

export default function SecurityCard() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
          <Lock size={22} />
        </div>

        <div className="flex-1">
          <h2 className="text-lg font-semibold text-slate-900">
            Security
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Keep your account secure. Password management and
            additional security features will be available in a
            future update.
          </p>

          <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
            <ShieldCheck
              size={18}
              className="text-emerald-600"
            />

            <span className="text-sm font-medium text-emerald-700">
              Your account is currently protected.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}