export interface UserProfile {
  id: number;
  user_id: number;
  age: number;
  gender: "male" | "female" | "other";
  height_cm: number;
  weight_kg: number;
  activity_level:
    | "sedentary"
    | "light"
    | "moderate"
    | "active"
    | "very_active";
  goal:
    | "lose_weight"
    | "maintain"
    | "gain_muscle";
  created_at: string;
  updated_at: string;
}

export interface WeightLog {
  id: number;
  user_id: number;
  weight_kg: number;
  logged_at: string;
}

export interface ApiResponse<T> {
  message: string;
  data: T;
}