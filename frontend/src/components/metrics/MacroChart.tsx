import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

interface Props {
  protein: number;
  carbohydrates: number;
  fat: number;
}

const COLORS = [
  "#16A34A",
  "#3B82F6",
  "#F59E0B",
];

export default function MacroChart({
  protein,
  carbohydrates,
  fat,
}: Props) {
  const data = [
    {
      name: "Protein",
      value: protein,
      color: COLORS[0],
    },
    {
      name: "Carbohydrates",
      value: carbohydrates,
      color: COLORS[1],
    },
    {
      name: "Fat",
      value: fat,
      color: COLORS[2],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={55}
              outerRadius={95}
              paddingAngle={4}
              stroke="none"
            >
              {data.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={entry.color}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value: any) => [
                `${Math.round(Number(value ?? 0))} g`,
                "Amount",
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}

      <div className="space-y-3">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <span className="font-medium text-slate-700">
                {item.name}
              </span>
            </div>

            <span className="font-semibold text-slate-900">
              {Math.round(item.value)} g
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}