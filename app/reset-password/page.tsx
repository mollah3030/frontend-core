"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeSlashIcon, CheckCircleIcon } from "@phosphor-icons/react";
import { resetPasswordSchema, type ResetPasswordFormValues } from "@/resources/schemas/auth.schema";
import { authApi } from "@/resources/apis/auth.api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthCardLayout } from "@/components/auth/auth-card-layout";

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const tokenParam = searchParams.get("token") || "";

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [resetSuccess, setResetSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      token: tokenParam,
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: ResetPasswordFormValues) => {
    setErrorMessage(null);
    try {
      await authApi.resetPassword({
        token: values.token.trim(),
        newPassword: values.newPassword,
      });
      setResetSuccess(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Password reset token is invalid or has expired.";
      setErrorMessage(message);
    }
  };

  if (resetSuccess) {
    return (
      <AuthCardLayout
        title="Password updated!"
        subtitle="Your new credentials are now active."
      >
        <div className="space-y-6 text-center py-4">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-[#715bc7]/20 text-[#a892f3] mx-auto border border-[#715bc7]/30">
            <CheckCircleIcon className="size-8" weight="fill" aria-hidden="true" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Reset Complete</h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-sm mx-auto">
              Your password has been changed successfully. You can now log into your customer account using your new password.
            </p>
          </div>
          <Button asChild className="w-full bg-[#715bc7] hover:bg-[#624db5] text-white font-medium rounded-xl h-11 text-sm shadow-md transition-all">
            <Link href="/login">
              Sign In to Your Account
            </Link>
          </Button>
        </div>
      </AuthCardLayout>
    );
  }

  return (
    <AuthCardLayout
      title="Create new password"
      subtitle="Remember your password?"
      linkText="Log in"
      linkHref="/login"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        {errorMessage && (
          <div
            role="alert"
            className="p-3 bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs rounded-xl flex items-start gap-2"
          >
            <div className="shrink-0 mt-0.5">&bull;</div>
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Token Field */}
        <div className="space-y-1">
          <Input
            id="token"
            type="text"
            placeholder="Reset token"
            disabled={isSubmitting || Boolean(tokenParam)}
            className="bg-[#342f42] border-white/10 text-white placeholder:text-zinc-500 rounded-xl h-11 text-xs sm:text-sm focus:border-[#7c65c1] focus:ring-1 focus:ring-[#7c65c1] font-mono"
            aria-invalid={Boolean(errors.token)}
            {...register("token")}
          />
          {errors.token && (
            <p className="text-[11px] text-rose-400 pl-1">{errors.token.message}</p>
          )}
        </div>

        {/* New Password Field */}
        <div className="space-y-1">
          <div className="relative">
            <Input
              id="newPassword"
              type={showPassword ? "text" : "password"}
              placeholder="New password (minimum 8 characters)"
              autoComplete="new-password"
              disabled={isSubmitting}
              className="bg-[#342f42] border-white/10 text-white placeholder:text-zinc-500 rounded-xl h-11 pr-11 text-xs sm:text-sm focus:border-[#7c65c1] focus:ring-1 focus:ring-[#7c65c1]"
              aria-invalid={Boolean(errors.newPassword)}
              {...register("newPassword")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors p-1"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeSlashIcon className="size-4" /> : <EyeIcon className="size-4" />}
            </button>
          </div>
          {errors.newPassword && (
            <p className="text-[11px] text-rose-400 pl-1">{errors.newPassword.message}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="space-y-1">
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm new password"
              autoComplete="new-password"
              disabled={isSubmitting}
              className="bg-[#342f42] border-white/10 text-white placeholder:text-zinc-500 rounded-xl h-11 pr-11 text-xs sm:text-sm focus:border-[#7c65c1] focus:ring-1 focus:ring-[#7c65c1]"
              aria-invalid={Boolean(errors.confirmPassword)}
              {...register("confirmPassword")}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors p-1"
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            >
              {showConfirmPassword ? (
                <EyeSlashIcon className="size-4" />
              ) : (
                <EyeIcon className="size-4" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-[11px] text-rose-400 pl-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#715bc7] hover:bg-[#624db5] active:scale-[0.99] text-white font-medium rounded-xl h-11 text-sm shadow-md transition-all mt-2"
        >
          {isSubmitting ? "Resetting password..." : "Set New Password"}
        </Button>
      </form>
    </AuthCardLayout>
  );
}

export default function ResetPasswordPage() {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen bg-[#181622] flex items-center justify-center text-zinc-400 text-xs">
          Loading...
        </div>
      }
    >
      <ResetPasswordContent />
    </React.Suspense>
  );
}
