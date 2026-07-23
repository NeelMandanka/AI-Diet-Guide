import { createBrowserRouter, Navigate } from "react-router-dom";

import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";

import DashboardPage from "@/pages/dashboard/DashboardPage";
import MetricsPage from "@/pages/metrics/MetricsPage";
import DietPage from "@/pages/diet/DietPage";
import HistoryPage from "@/pages/history/HistoryPage";
import HistoryDetailPage from "@/pages/history/HistoryDetailPage";

// Remove this if you no longer want Weekly Diet UI
// import WeeklyDietPage from "@/pages/weeklyDiet/WeeklyDietPage";
import ProfilePage from "@/pages/profile/ProfilePage";
import SettingsPage from "@/pages/settings/SettingsPage";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import PublicRoute from "@/components/auth/PublicRoute";
import AppLayout from "@/components/layout/AppLayout";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },

  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },

  {
    path: "/register",
    element: (
      <PublicRoute>
        <RegisterPage />
      </PublicRoute>
    ),
  },

  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),

    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },

      {
        path: "/metrics",
        element: <MetricsPage />,
      },

      {
        path: "/diet",
        element: <DietPage />,
      },

      {
        path: "/history",
        element: <HistoryPage />,
      },

      {
        path: "/history/:id",
        element: <HistoryDetailPage />,
      },

      // Uncomment only if keeping Weekly Diet UI
      /*
      {
        path: "/weekly-diet",
        element: <WeeklyDietPage />,
      },
      */

      // We'll add these next
      {
        path: "/profile",
        element: <ProfilePage />,
      },

      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },

  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);