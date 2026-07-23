import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function HistorySearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative max-w-md">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Search diet plans..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          rounded-xl
          border
          border-slate-200
          bg-white
          py-3
          pl-11
          pr-4
          text-sm
          placeholder:text-slate-400
          transition
          focus:border-emerald-500
          focus:outline-none
          focus:ring-2
          focus:ring-emerald-100
        "
      />
    </div>
  );
}