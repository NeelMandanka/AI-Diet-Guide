import { memo } from "react";

function SkeletonBlock({
  className,
}: {
  className: string;
}) {
  return (
    <div
      className={`animate-pulse rounded-2xl bg-zinc-200 ${className}`}
    />
  );
}

function DashboardSkeleton() {
  return (
    <section
      role="status"
      aria-label="Loading dashboard"
      aria-live="polite"
      className="space-y-8"
    >
      {/* Header */}
      <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <SkeletonBlock className="mb-4 h-10 w-72" />
        <SkeletonBlock className="h-5 w-96 max-w-full" />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4"
            >
              <div className="mb-5 flex items-start justify-between">
                <SkeletonBlock className="h-4 w-20" />
                <SkeletonBlock className="h-10 w-10 rounded-xl" />
              </div>

              <SkeletonBlock className="h-7 w-24" />
            </div>
          ))}
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-5 flex items-start justify-between">
              <div className="space-y-3">
                <SkeletonBlock className="h-4 w-24" />
                <SkeletonBlock className="h-8 w-28" />
              </div>

              <SkeletonBlock className="h-14 w-14 rounded-2xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Main Cards */}
      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <SkeletonBlock className="mb-6 h-6 w-40" />

          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <SkeletonBlock
                key={index}
                className="h-5 w-full"
              />
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <SkeletonBlock className="mb-6 h-6 w-40" />

          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <SkeletonBlock
                key={index}
                className="h-5 w-full"
              />
            ))}
          </div>
        </div>
      </div>

      <span className="sr-only">
        Loading dashboard...
      </span>
    </section>
  );
}

export default memo(DashboardSkeleton);