import { memo } from "react";
import clsx from "clsx";

interface LoadingSkeletonProps {
  rows?: number;
  className?: string;
}

function LoadingSkeleton({
  rows = 4,
  className,
}: LoadingSkeletonProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading content"
      className={clsx("space-y-4", className)}
    >
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className={clsx(
            "relative h-5 overflow-hidden rounded-xl bg-slate-200",
            "before:absolute before:inset-0",
            "before:-translate-x-full before:animate-[shimmer_1.6s_infinite]",
            "before:bg-gradient-to-r before:from-transparent before:via-white/70 before:to-transparent",
            index === rows - 1 ? "w-3/4" : "w-full"
          )}
        />
      ))}

      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default memo(LoadingSkeleton);