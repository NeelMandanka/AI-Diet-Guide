import { AlertTriangle } from "lucide-react";

interface Props {
  open: boolean;
  loading?: boolean;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteDialog({
  open,
  loading = false,
  title,
  onConfirm,
  onCancel,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-xl">
        {/* Header */}

        <div className="flex items-center gap-4 border-b border-slate-200 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
            <AlertTriangle size={24} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Delete Diet Plan
            </h2>

            <p className="text-sm text-slate-500">
              This action cannot be undone.
            </p>
          </div>
        </div>

        {/* Body */}

        <div className="p-6">
          <p className="text-sm leading-6 text-slate-600">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-slate-900">
              "{title}"
            </span>
            ?
          </p>
        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 border-t border-slate-200 p-6">
          <button
            onClick={onCancel}
            disabled={loading}
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}