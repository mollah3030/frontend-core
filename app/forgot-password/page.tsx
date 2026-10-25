"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircleIcon } from "@phosphor-icons/react";
import { forgotPasswordSchema, type ForgotPasswordFormValues } from "@/resources/schemas/auth.schema";
import { authApi } from "@/resources/apis/auth.api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthCardLayout } from "@/components/auth/auth-card-layout";

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    setErrorMessage(null);
    try {
      await authApi.forgotPassword(values);
      setSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Unable to process request. Please try again.";
      setErrorMessage(message);
    }
  };

  if (submitted) {
    return (
      <AuthCardLayout
        title="Check your inbox"
        subtitle="Password recovery instructions dispatched."
      >
        <div className="space-y-6 text-center py-4">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-[#715bc7]/20 text-[#a892f3] mx-auto border border-[#715bc7]/30">
            <CheckCircleIcon className="size-8" weight="fill" aria-hidden="true" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Instructions Sent</h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-sm mx-auto">
              If an account exists for that email, we&apos;ve sent password reset instructions. Please check your inbox and spam folder.
            </p>
          </div>
          <Button asChild className="w-full bg-[#715bc7] hover:bg-[#624db5] text-white font-medium rounded-xl h-11 text-sm shadow-md transition-all">
            <Link href="/login">
              Return to Sign In
            </Link>
          </Button>
        </div>
      </AuthCardLayout>
    );
  }

  return (
    <AuthCardLayout
      title="Forgot password"
      subtitle="Remember your credentials?"
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

        <div className="space-y-1">
          <Input
            id="email"
            type="email"
            placeholder="Enter your account email"
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

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#715bc7] hover:bg-[#624db5] active:scale-[0.99] text-white font-medium rounded-xl h-11 text-sm shadow-md transition-all mt-2"
        >
          {isSubmitting ? "Sending instructions..." : "Send Reset Link"}
        </Button>
      </form>
    </AuthCardLayout>
  );
}
