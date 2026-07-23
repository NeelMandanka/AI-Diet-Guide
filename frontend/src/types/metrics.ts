export interface HealthMetrics {
  bmi: number;
  bmi_category: string;
  bmr: number;
  tdee: number;
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
}

export interface ApiResponse<T> {
  message: string;
  data: T;
}