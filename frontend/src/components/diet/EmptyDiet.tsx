import { memo } from "react";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

interface Props {
  onGenerate: () => void;
}

function EmptyDiet({
  onGenerate,
}: Props) {
  const features = [
    "Personalized meal plan",
    "Calorie & nutrition analysis",
    "Balanced breakfast, lunch & dinner",
    "AI-generated grocery list",
  ];

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      {/* Hero */}

      <div className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-10 text-white">
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-sm font-semibold">
            <Sparkles size={16} />
            AI Powered Nutrition
          </div>

          <h1 className="mt-5 text-3xl font-bold">
            Generate Your Personalized Diet Plan
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-emerald-50">
            Our AI analyzes your profile, health metrics,
            and fitness goals to create a balanced meal
            plan tailored specifically for you.
          </p>
        </div>
      </div>

      {/* Content */}

      <div className="grid gap-8 p-8 lg:grid-cols-[1.3fr_0.7fr]">
        {/* Left */}

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            What you'll receive
          </h2>

          <div className="mt-6 space-y-4">
            {features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                  <CheckCircle2 size={18} />
                </div>

                <span className="text-sm text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
            <Brain size={28} />
          </div>

          <h3 className="mt-5 text-lg font-bold text-slate-900">
            Ready to begin?
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Click the button below and let AI generate
            your personalized nutrition plan in a few
            seconds.
          </p>

          <button
            onClick={onGenerate}
            className="
              mt-6
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-emerald-600
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-emerald-700
            "
          >
            <UtensilsCrossed size={18} />
            Generate Diet Plan
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default memo(EmptyDiet);