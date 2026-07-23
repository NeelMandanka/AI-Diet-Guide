import type { ApiResponse } from "./diet";

export type { ApiResponse };

export interface DashboardUser {
  id: number;
  name: string;
  email: string;
}

export interface DashboardProfile {
  age: number;
  gender: string;
  height_cm: number;
  weight_kg: number;
  activity_level: string;
  goal: string;
}

export interface DashboardMetrics {
  bmi: number;
  bmi_category: string;
  bmr: number;
  tdee: number;
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
}

export interface DashboardWeightLog {
  weight_kg: number;
  logged_at: string;
}

export interface Dashboard {
  user: DashboardUser;
  profile: DashboardProfile;
  metrics: DashboardMetrics;
  recent_weight_logs: DashboardWeightLog[];
}