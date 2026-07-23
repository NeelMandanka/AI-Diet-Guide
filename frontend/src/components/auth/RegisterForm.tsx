import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  User,
} from "lucide-react";

import {
  registerSchema,
  type RegisterFormValues,
} from "@/validations/register.schema";

interface RegisterFormProps {
  isLoading: boolean;
  onSubmit: (
    values: RegisterFormValues
  ) => Promise<void>;
}

export default function RegisterForm({
  onSubmit,
  isLoading,
}: RegisterFormProps) {
  const [showPassword, setShowPassword] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Name */}

      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-[13px] font-semibold text-slate-700"
        >
          Full Name
        </label>

        <div className="group relative">
          <User
            size={18}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-emerald-600"
          />

          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="John Doe"
            aria-invalid={!!errors.name}
            {...register("name")}
            className="
              h-11
              w-full
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              pl-10
              pr-3
              text-sm
              text-slate-900
              placeholder:text-slate-400
              transition
              hover:border-slate-300
              focus:border-emerald-500
              focus:bg-white
              focus:ring-4
              focus:ring-emerald-500/10
            "
          />
        </div>

        {errors.name && (
          <p className="mt-1 text-xs font-medium text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-[13px] font-semibold text-slate-700"
        >
          Email Address
        </label>

        <div className="group relative">
          <Mail
            size={18}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-emerald-600"
          />

          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="name@example.com"
            aria-invalid={!!errors.email}
            {...register("email")}
            className="
              h-11
              w-full
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              pl-10
              pr-3
              text-sm
              text-slate-900
              placeholder:text-slate-400
              transition
              hover:border-slate-300
              focus:border-emerald-500
              focus:bg-white
              focus:ring-4
              focus:ring-emerald-500/10
            "
          />
        </div>

        {errors.email && (
          <p className="mt-1 text-xs font-medium text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}

      <div>
        <label
          htmlFor="password"
          className="mb-1.5 block text-[13px] font-semibold text-slate-700"
        >
          Password
        </label>

        <div className="group relative">
          <Lock
            size={18}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-emerald-600"
          />

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            placeholder="Create a secure password"
            aria-invalid={!!errors.password}
            {...register("password")}
            className="
              h-11
              w-full
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              pl-10
              pr-11
              text-sm
              text-slate-900
              placeholder:text-slate-400
              transition
              hover:border-slate-300
              focus:border-emerald-500
              focus:bg-white
              focus:ring-4
              focus:ring-emerald-500/10
            "
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword((prev) => !prev)
            }
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
            className="
              absolute
              right-2
              top-1/2
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-lg
              text-slate-500
              transition
              hover:bg-slate-100
              hover:text-slate-700
            "
          >
            {showPassword ? (
              <EyeOff size={17} />
            ) : (
              <Eye size={17} />
            )}
          </button>
        </div>

        {errors.password && (
          <p className="mt-1 text-xs font-medium text-red-600">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={isLoading}
        className="
          flex
          h-11
          w-full
          items-center
          justify-center
          gap-1.5
          rounded-xl
          bg-gradient-to-r
          from-emerald-500
          to-green-600
          text-sm
          font-semibold
          text-white
          shadow-md
          shadow-emerald-500/20
          transition
          hover:-translate-y-0.5
          hover:shadow-lg
          active:scale-[0.99]
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {isLoading && (
          <Loader2
            size={17}
            className="animate-spin"
          />
        )}

        {isLoading
          ? "Creating Account..."
          : "Create Account"}
      </button>

      {/* Divider */}

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Join AI Diet Guide
          </span>
        </div>
      </div>
    </form>
  );
}