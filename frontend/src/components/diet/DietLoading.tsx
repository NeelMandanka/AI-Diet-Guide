import {
  Brain,
  LoaderCircle,
  Sparkles,
} from "lucide-react";

export default function DietLoading() {
  const steps = [
    "Analyzing your health profile",
    "Calculating calorie requirements",
    "Balancing macronutrients",
    "Creating personalized meals",
    "Preparing grocery list",
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-8 animate-pulse">
      {/* AI Status */}

      <section className="overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-500 to-green-600 text-white">
        <div className="p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
              <Brain size={28} />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <Sparkles size={18} />

                <span className="text-sm font-semibold">
                  AI Nutrition Engine
                </span>
              </div>

              <h1 className="mt-2 text-3xl font-bold">
                Generating Your Personalized Diet Plan
              </h1>

              <p className="mt-2 text-emerald-100">
                This usually takes around 10–20 seconds.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {steps.map((step) => (
              <div
                key={step}
                className="flex items-center gap-3"
              >
                <LoaderCircle className="h-5 w-5 animate-spin" />

                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Skeleton */}

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <div className="h-12 w-12 rounded-xl bg-slate-200" />

            <div className="mt-5 h-4 w-24 rounded bg-slate-200" />

            <div className="mt-3 h-8 w-28 rounded bg-slate-300" />

            <div className="mt-3 h-4 w-36 rounded bg-slate-200" />
          </div>
        ))}
      </div>

      {/* Meal Cards */}

      <div className="grid gap-6 lg:grid-cols-2">
        {[1, 2, 3, 4].map((meal) => (
          <div
            key={meal}
            className="rounded-3xl border border-slate-200 bg-white"
          >
            <div className="border-b border-slate-200 p-6">
              <div className="flex justify-between">
                <div className="h-7 w-24 rounded-full bg-slate-200" />

                <div className="h-8 w-24 rounded-xl bg-slate-200" />
              </div>

              <div className="mt-6 h-8 w-52 rounded bg-slate-300" />
            </div>

            <div className="grid grid-cols-3 gap-4 p-6">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="rounded-xl bg-slate-100 p-4"
                >
                  <div className="mx-auto h-6 w-6 rounded-full bg-slate-200" />

                  <div className="mx-auto mt-3 h-4 w-16 rounded bg-slate-200" />

                  <div className="mx-auto mt-3 h-6 w-12 rounded bg-slate-300" />
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 p-6 space-y-3">
              <div className="h-4 w-full rounded bg-slate-200" />
              <div className="h-4 w-11/12 rounded bg-slate-200" />
              <div className="h-4 w-10/12 rounded bg-slate-200" />
              <div className="h-4 w-8/12 rounded bg-slate-200" />
            </div>
          </div>
        ))}
      </div>

      {/* Grocery List */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <div className="mb-6 h-7 w-44 rounded bg-slate-300" />

        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-xl border border-slate-200 p-4"
            >
              <div className="h-5 w-40 rounded bg-slate-200" />

              <div className="h-5 w-16 rounded bg-slate-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}