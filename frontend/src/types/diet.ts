export interface Meal {
  id: number;
  meal_type: string;
  title: string;
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  recipe: string;
  meal_order: number;
}

export interface GroceryItem {
  id: number;
  item_name: string;
  quantity: string;
}

export interface DietPlan {
  id: number;
  title: string;
  goal: string;
  generated_by: string;
  created_at: string;
  meals: Meal[];
  grocery_items: GroceryItem[];
}

export interface GenerateDietRequest {
  days: number;
  regenerate: boolean;
}

export interface ApiResponse<T> {
  message: string;
  data: T;
}