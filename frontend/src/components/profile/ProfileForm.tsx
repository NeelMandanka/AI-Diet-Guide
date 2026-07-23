import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { UserProfile } from "@/types/profile";
import {
  profileSchema,
  type ProfileFormValues,
} from "@/validations/profile.schema";

interface ProfileFormProps {
  initialData?: UserProfile | null;
  isLoading: boolean;
  onSubmit: (
    values: ProfileFormValues
  ) => Promise<void> | void;
}

export default function ProfileForm({
  initialData,
  isLoading,
  onSubmit,
}: ProfileFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),

    defaultValues: {
      age: 18,
      gender: "male",
      height_cm: 170,
      weight_kg: 70,
      activity_level: "moderate",
      goal: "maintain",
    },
  });

  useEffect(() => {
    if (!initialData) return;

    reset({
      age: initialData.age,
      gender: initialData.gender,
      height_cm: initialData.height_cm,
      weight_kg: initialData.weight_kg,
      activity_level:
        initialData.activity_level,
      goal: initialData.goal,
    });
  }, [initialData, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Age
          </label>

          <input
            type="number"
            {...register("age", {
              valueAsNumber: true,
            })}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-green-500 focus:outline-none"
          />

          {errors.age && (
            <p className="mt-1 text-sm text-red-500">
              {errors.age.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Gender
          </label>

          <select
            {...register("gender")}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-green-500 focus:outline-none"
          >
            <option value="male">
              Male
            </option>

            <option value="female">
              Female
            </option>

            <option value="other">
              Other
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Height (cm)
          </label>

          <input
            type="number"
            {...register("height_cm", {
              valueAsNumber: true,
            })}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-green-500 focus:outline-none"
          />

          {errors.height_cm && (
            <p className="mt-1 text-sm text-red-500">
              {errors.height_cm.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Weight (kg)
          </label>

          <input
            type="number"
            step="0.1"
            {...register("weight_kg", {
              valueAsNumber: true,
            })}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-green-500 focus:outline-none"
          />

          {errors.weight_kg && (
            <p className="mt-1 text-sm text-red-500">
              {errors.weight_kg.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Activity Level
          </label>

          <select
            {...register("activity_level")}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-green-500 focus:outline-none"
          >
            <option value="sedentary">
              Sedentary
            </option>

            <option value="light">
              Light
            </option>

            <option value="moderate">
              Moderate
            </option>

            <option value="active">
              Active
            </option>

            <option value="very_active">
              Very Active
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Goal
          </label>

          <select
            {...register("goal")}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-green-500 focus:outline-none"
          >
            <option value="lose_weight">
              Lose Weight
            </option>

            <option value="maintain">
              Maintain
            </option>

            <option value="gain_muscle">
              Gain Muscle
            </option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading
          ? "Saving..."
          : initialData
          ? "Update Profile"
          : "Create Profile"}
      </button>
    </form>
  );
}