import {
  AppWindow,
  Database,
  Layers,
  Server,
} from "lucide-react";

export default function AppInfoCard() {
  const items = [
    {
      label: "Application",
      value: "AI Diet Guide",
      icon: AppWindow,
    },
    {
      label: "Version",
      value: "1.0",
      icon: Layers,
    },
    {
      label: "Frontend",
      value: "React 19",
      icon: AppWindow,
    },
    {
      label: "Backend",
      value: "FastAPI",
      icon: Server,
    },
    {
      label: "Database",
      value: "PostgreSQL",
      icon: Database,
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-slate-900">
        Application Information
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Basic details about the application and technology stack.
      </p>

      <div className="mt-6 divide-y divide-slate-100">
        {items.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center justify-between py-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                <Icon size={18} />
              </div>

              <span className="text-sm font-medium text-slate-600">
                {label}
              </span>
            </div>

            <span className="text-sm font-semibold text-slate-900">
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}