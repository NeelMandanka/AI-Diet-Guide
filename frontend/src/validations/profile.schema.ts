import { z } from "zod";

export const profileSchema = z.object({
  age: z.number().min(10).max(100),

  gender: z.enum([
    "male",
    "female",
    "other",
  ]),

  height_cm: z.number().min(50).max(300),

  weight_kg: z.number().min(10).max(500),

  activity_level: z.enum([
    "sedentary",
    "light",
    "moderate",
    "active",
    "very_active",
  ]),

  goal: z.enum([
    "lose_weight",
    "maintain",
    "gain_muscle",
  ]),
});

export type ProfileFormValues =
  z.infer<typeof profileSchema>;