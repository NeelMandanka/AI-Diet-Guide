import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  loginSchema,
  type LoginFormValues,
} from "@/validations/login.schema";

interface LoginFormProps {
  onSubmit: (values: LoginFormValues) => Promise<void>;
  isLoading: boolean;
}

export default function LoginForm({
  onSubmit,
  isLoading,
}: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Email Address
        </label>

        <div className="group relative">
          <Mail
            size={19}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-200 group-focus-within:text-emerald-600"
          />

          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
            placeholder="name@example.com"
            className="
              h-14
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              pl-12
              pr-4
              text-[15px]
              text-slate-900
              placeholder:text-slate-400
              transition-all
              duration-200
              hover:border-slate-300
              focus:border-emerald-500
              focus:bg-white
              focus:outline-none
              focus:ring-4
              focus:ring-emerald-500/10
            "
          />
        </div>

        {errors.email && (
          <p className="mt-2 text-sm font-medium text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label
            htmlFor="password"
            className="text-sm font-semibold text-slate-700"
          >
            Password
          </label>

          <Link
            to="/forgot-password"
            className="text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700"
          >
            Forgot password?
          </Link>
        </div>

        <div className="group relative">
          <Lock
            size={19}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-200 group-focus-within:text-emerald-600"
          />

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            aria-invalid={!!errors.password}
            {...register("password")}
            placeholder="Enter your password"
            className="
              h-14
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              pl-12
              pr-14
              text-[15px]
              text-slate-900
              placeholder:text-slate-400
              transition-all
              duration-200
              hover:border-slate-300
              focus:border-emerald-500
              focus:bg-white
              focus:outline-none
              focus:ring-4
              focus:ring-emerald-500/10
            "
          />

          <button
            type="button"
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
            onClick={() =>
              setShowPassword((prev) => !prev)
            }
            className="
              absolute
              right-3
              top-1/2
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-xl
              text-slate-500
              transition-all
              duration-200
              hover:bg-slate-100
              hover:text-slate-700
            "
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>

        {errors.password && (
          <p className="mt-2 text-sm font-medium text-red-600">
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
          h-14
          w-full
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-gradient-to-r
          from-emerald-500
          to-green-600
          text-[15px]
          font-semibold
          text-white
          shadow-lg
          shadow-emerald-500/20
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:shadow-xl
          hover:shadow-emerald-500/30
          active:scale-[0.99]
          disabled:cursor-not-allowed
          disabled:opacity-60
          disabled:hover:translate-y-0
        "
      >
        {isLoading && (
          <Loader2
            size={18}
            className="animate-spin"
          />
        )}

        {isLoading ? "Signing In..." : "Sign In"}
      </button>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Secure Login
          </span>
        </div>
      </div>

      {/* Register */}
      <p className="text-center text-sm text-slate-600">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-emerald-600 transition-colors hover:text-emerald-700"
        >
          Create Account
        </Link>
      </p>
    </form>
  );
}