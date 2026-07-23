import { memo } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

function ErrorState({
  title = "Something went wrong",
  description = "An unexpected error occurred while processing your request. Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <section
      role="alert"
      aria-live="assertive"
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-red-200
        bg-white
        px-6
        py-16
        text-center
        shadow-sm
        transition-all
        duration-300
        hover:shadow-lg
        sm:px-10
        sm:py-20
      "
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-red-100/40 blur-3xl" />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Icon */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-red-50 to-red-100 ring-8 ring-red-50 shadow-sm">
          <AlertTriangle
            size={40}
            strokeWidth={2}
            className="text-red-600"
            aria-hidden="true"
          />
        </div>

        {/* Title */}
        <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
          {description}
        </p>

        {/* Retry Button */}
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-red-600
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-red-600/20
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-red-700
              hover:shadow-xl
              hover:shadow-red-600/30
              focus:outline-none
              focus:ring-4
              focus:ring-red-500/20
              active:scale-95
            "
          >
            <RotateCcw size={17} />
            Try Again
          </button>
        )}
      </div>
    </section>
  );
}

export default memo(ErrorState);