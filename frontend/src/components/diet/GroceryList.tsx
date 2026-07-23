import { useState } from "react";
import {
  CheckCircle2,
  ShoppingCart,
} from "lucide-react";

import type { GroceryItem } from "@/types/diet";

interface Props {
  items: GroceryItem[];
}

export default function GroceryList({
  items,
}: Props) {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };

  const completed = checkedItems.length;
  const progress =
    items.length === 0
      ? 0
      : (completed / items.length) * 100;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white">
      {/* Header */}

      <div className="border-b border-slate-200 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
              <ShoppingCart size={26} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Grocery List
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {items.length} ingredients to buy
              </p>
            </div>
          </div>

          <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            {completed}/{items.length} Completed
          </div>
        </div>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all duration-300"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {/* Items */}

      <div className="divide-y divide-slate-100">
        {items.map((item) => {
          const checked =
            checkedItems.includes(item.id);

          return (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                toggleItem(item.id)
              }
              className="
                flex
                w-full
                items-center
                justify-between
                gap-4
                p-5
                text-left
                transition-colors
                hover:bg-slate-50
              "
            >
              <div className="flex items-center gap-4">
                <CheckCircle2
                  size={24}
                  className={
                    checked
                      ? "text-emerald-600"
                      : "text-slate-300"
                  }
                />

                <div>
                  <p
                    className={`font-semibold transition ${
                      checked
                        ? "text-slate-400 line-through"
                        : "text-slate-900"
                    }`}
                  >
                    {item.item_name}
                  </p>
                </div>
              </div>

              <span
                className="
                  rounded-full
                  bg-slate-100
                  px-3
                  py-1
                  text-sm
                  font-medium
                  text-slate-700
                "
              >
                {item.quantity}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}