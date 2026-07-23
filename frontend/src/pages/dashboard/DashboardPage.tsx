import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSkeleton from "@/components/dashboard/DashboardSkeleton";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import ErrorState from "@/components/common/ErrorState";

import { useDashboard } from "@/hooks/useDashboard";

export default function DashboardPage() {
  const {
    data: dashboard,
   isLoading,
    isError,
  } = useDashboard();

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (isError || !dashboard) {
    return (
      <ErrorState description="Unable to load your dashboard." />
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome + Stats */}
      <DashboardHeader dashboard={dashboard} />

      {/* Bottom Grid */}
      <div className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
        <QuickActions />

        <RecentActivity
          recentWeightLogs={dashboard.recent_weight_logs}
        />
      </div>
    </div>
  );
}