import {
  AlertTriangle,
  CheckCircle2,
  HeartPulse,
} from "lucide-react";

import Card from "@/components/common/Card";

interface Props {
  bmi: number;
}

export default function HealthTips({
  bmi,
}: Props) {
  let status = "Healthy Weight";
  let tip =
    "Maintain your current lifestyle with balanced nutrition, regular exercise, and adequate hydration.";
  let color =
    "text-emerald-600";
  let bg =
    "bg-emerald-100";
  let Icon = CheckCircle2;

  if (bmi < 18.5) {
    status = "Underweight";
    tip =
      "Increase your calorie intake with nutrient-rich foods and include strength training to build healthy body mass.";
    color = "text-amber-600";
    bg = "bg-amber-100";
    Icon = AlertTriangle;
  } else if (bmi >= 25) {
    status = "Overweight";
    tip =
      "Focus on portion control, regular physical activity, and a balanced diet to gradually reach a healthier weight.";
    color = "text-orange-600";
    bg = "bg-orange-100";
    Icon = HeartPulse;
  }

  return (
    <Card>
      <div className="flex items-start gap-4">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${bg}`}
        >
          <Icon
            size={26}
            className={color}
          />
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-bold text-slate-900">
            Health Recommendation
          </h2>

          <p
            className={`mt-2 text-sm font-semibold ${color}`}
          >
            {status}
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            {tip}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Current BMI
        </h3>

        <p className="mt-2 text-3xl font-bold text-slate-900">
          {bmi.toFixed(1)}
        </p>
      </div>
    </Card>
  );
}