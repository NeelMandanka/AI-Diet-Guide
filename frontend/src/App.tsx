import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";

import { appRouter } from "@/routes";
import { useRestoreSession } from "@/hooks/useRestoreSession";

export default function App() {
  useRestoreSession();

  useEffect(() => {
    document.title = "AI Diet Guide";
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <RouterProvider router={appRouter} />
    </div>
  );
}