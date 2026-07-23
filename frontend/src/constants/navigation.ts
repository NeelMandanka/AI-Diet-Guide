import {
  LayoutDashboard,
  Activity,
  Utensils,
  History,
  User,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    label: "Metrics",
    path: "/metrics",
    icon: Activity,
  },
  {
    label: "Generate Diet",
    path: "/diet",
    icon: Utensils,
  },
  {
    label: "Diet History",
    path: "/history",
    icon: History,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];