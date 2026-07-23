import { memo, type ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({
  children,
  className,
}: CardProps) {
  return (
    <section
      className={clsx(
        "relative overflow-hidden rounded-3xl",
        "border border-slate-200/80",
        "bg-white",
        "shadow-sm",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1",
        "hover:border-emerald-200",
        "hover:shadow-xl hover:shadow-slate-200/50",
        "before:absolute before:inset-x-0 before:top-0 before:h-px",
        "before:bg-gradient-to-r before:from-transparent before:via-emerald-400/40 before:to-transparent",
        "p-6 sm:p-7 lg:p-8",
        className
      )}
    >
      {children}
    </section>
  );
}

export default memo(Card);