"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";
import { loginSchema, type LoginFormValues } from "@/resources/schemas/auth.schema";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthCardLayout } from "@/components/auth/auth-card-layout";
import { SocialAuthButtons } from "@/components/auth/social-auth-buttons";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();

  const rawReturnUrl = searchParams.get("returnUrl");
  const safeReturnUrl =
    rawReturnUrl && rawReturnUrl.startsWith("/") && !rawReturnUrl.startsWith("//")
      ? rawReturnUrl
      : "/account";

  const [showPassword, setShowPassword] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
  });

  const rememberMeChecked = watch("rememberMe");

  const onSubmit = async (values: LoginFormValues) => {
    setErrorMessage(null);
    try {
      await login({
        email: values.email.trim().toLowerCase(),
        password: values.password,
      });
      router.push(safeReturnUrl);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Invalid email address or password. Please try again.";
      setErrorMessage(message);
    }
  };

  const registerLink = `/register${rawReturnUrl ? `?returnUrl=${encodeURIComponent(rawReturnUrl)}` : ""}`;

  return (
    <AuthCardLayout
      title="Welcome back"
      subtitle="Don't have an account?"
      linkText="Sign up"
      linkHref={registerLink}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        {/* Error Notification */}
        {errorMessage && (
          <div
            role="alert"
            className="p-3 bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs rounded-xl flex items-start gap-2"
          >
            <div className="shrink-0 mt-0.5">&bull;</div>
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Row 1: Email */}
        <div className="space-y-1">
          <Input
            id="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            disabled={isSubmitting}
            className="bg-[#342f42] border-white/10 text-white placeholder:text-zinc-500 rounded-xl h-11 text-xs sm:text-sm focus:border-[#7c65c1] focus:ring-1 focus:ring-[#7c65c1]"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-[11px] text-rose-400 pl-1">{errors.email.message}</p>
          )}
        </div>

        {/* Row 2: Password with Eye Toggle */}
        <div className="space-y-1">
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              autoComplete="current-password"
              disabled={isSubmitting}
              className="bg-[#342f42] border-white/10 text-white placeholder:text-zinc-500 rounded-xl h-11 pr-11 text-xs sm:text-sm focus:border-[#7c65c1] focus:ring-1 focus:ring-[#7c65c1]"
              aria-invalid={Boolean(errors.password)}
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors p-1"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeSlashIcon className="size-4" />
              ) : (
                <EyeIcon className="size-4" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-[11px] text-rose-400 pl-1">{errors.password.message}</p>
          )}
        </div>

        {/* Row 3: Remember me & Forgot Password */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2.5">
            <Checkbox
              id="rememberMe"
              checked={rememberMeChecked}
              onCheckedChange={(checked) => setValue("rememberMe", Boolean(checked))}
              className="size-4 rounded border-white/30 bg-[#342f42] data-[state=checked]:bg-[#715bc7] data-[state=checked]:border-[#715bc7] text-white"
            />
            <label htmlFor="rememberMe" className="text-xs text-zinc-300 select-none cursor-pointer">
              Remember me
            </label>
          </div>

          <Link
            href="/forgot-password"
            className="text-xs text-zinc-400 hover:text-white transition-colors underline-offset-2 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* Row 4: Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#715bc7] hover:bg-[#624db5] active:scale-[0.99] text-white font-medium rounded-xl h-11 text-sm shadow-md transition-all mt-2"
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </Button>

        {/* Row 5: Divider & Social Auth */}
        <SocialAuthButtons actionText="sign in" />
      </form>
    </AuthCardLayout>
  );
}

export default function LoginPage() {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen bg-[#181622] flex items-center justify-center text-zinc-400 text-xs">
          Loading...
        </div>
      }
    >
      <LoginContent />
    </React.Suspense>
  );
}
