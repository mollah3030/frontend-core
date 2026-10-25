"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EyeIcon,
  EyeSlashIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";
import { registerSchema, type RegisterFormValues } from "@/resources/schemas/auth.schema";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthCardLayout } from "@/components/auth/auth-card-layout";
import { SocialAuthButtons } from "@/components/auth/social-auth-buttons";

function RegisterContent() {
  const searchParams = useSearchParams();
  const { register: registerCustomer } = useAuth();

  const rawReturnUrl = searchParams.get("returnUrl");
  const [showPassword, setShowPassword] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [registeredSuccess, setRegisteredSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      terms: false,
    },
  });

  const termsChecked = watch("terms");

  const onSubmit = async (values: RegisterFormValues) => {
    setErrorMessage(null);
    try {
      const fullName = `${values.firstName} ${values.lastName}`.trim();
      await registerCustomer({
        name: fullName,
        email: values.email.trim().toLowerCase(),
        password: values.password,
        phone: values.phone?.trim() || undefined,
      });
      setRegisteredSuccess(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Registration failed. An account with this email may already exist.";
      setErrorMessage(message);
    }
  };

  const loginLink = `/login${rawReturnUrl ? `?returnUrl=${encodeURIComponent(rawReturnUrl)}` : ""}`;

  if (registeredSuccess) {
    return (
      <AuthCardLayout
        title="Registration Complete!"
        subtitle="Your Nordic customer account is ready."
      >
        <div className="space-y-6 text-center py-4">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-[#715bc7]/20 text-[#a892f3] mx-auto border border-[#715bc7]/30">
            <CheckCircleIcon className="size-8" weight="fill" aria-hidden="true" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Check your email</h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-sm mx-auto">
              We&apos;ve sent a verification link to your email address. You can verify now or proceed directly to sign in.
            </p>
          </div>
          <Button asChild className="w-full bg-[#715bc7] hover:bg-[#624db5] text-white font-medium rounded-xl h-11 text-sm shadow-md transition-all">
            <Link href={loginLink}>
              Proceed to Sign In
            </Link>
          </Button>
        </div>
      </AuthCardLayout>
    );
  }

  return (
    <AuthCardLayout
      title="Create an account"
      subtitle="Already have an account?"
      linkText="Log in"
      linkHref={loginLink}
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

        {/* Row 1: First Name & Last Name (2 columns) */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Input
              id="firstName"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              disabled={isSubmitting}
              className="bg-[#342f42] border-white/10 text-white placeholder:text-zinc-500 rounded-xl h-11 text-xs sm:text-sm focus:border-[#7c65c1] focus:ring-1 focus:ring-[#7c65c1]"
              aria-invalid={Boolean(errors.firstName)}
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-[11px] text-rose-400 pl-1">{errors.firstName.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Input
              id="lastName"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              disabled={isSubmitting}
              className="bg-[#342f42] border-white/10 text-white placeholder:text-zinc-500 rounded-xl h-11 text-xs sm:text-sm focus:border-[#7c65c1] focus:ring-1 focus:ring-[#7c65c1]"
              aria-invalid={Boolean(errors.lastName)}
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="text-[11px] text-rose-400 pl-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Row 2: Email */}
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

        {/* Row 3: Password with Eye Toggle */}
        <div className="space-y-1">
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              autoComplete="new-password"
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

        {/* Row 4: Terms & Conditions Checkbox */}
        <div className="pt-1">
          <div className="flex items-center gap-2.5">
            <Checkbox
              id="terms"
              checked={termsChecked}
              onCheckedChange={(checked) => setValue("terms", Boolean(checked))}
              className="size-4 rounded border-white/30 bg-[#342f42] data-[state=checked]:bg-[#715bc7] data-[state=checked]:border-[#715bc7] text-white"
            />
            <label htmlFor="terms" className="text-xs text-zinc-300 select-none cursor-pointer">
              I agree to the{" "}
              <Link
                href="/terms"
                target="_blank"
                className="text-white hover:text-zinc-200 underline underline-offset-2 transition-colors"
              >
                Terms &amp; Conditions
              </Link>
            </label>
          </div>
          {errors.terms && (
            <p className="text-[11px] text-rose-400 pl-1 pt-1">{errors.terms.message}</p>
          )}
        </div>

        {/* Row 5: Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#715bc7] hover:bg-[#624db5] active:scale-[0.99] text-white font-medium rounded-xl h-11 text-sm shadow-md transition-all mt-2"
        >
          {isSubmitting ? "Creating account..." : "Create account"}
        </Button>

        {/* Row 6: Divider & Social Auth */}
        <SocialAuthButtons actionText="register" />
      </form>
    </AuthCardLayout>
  );
}

export default function RegisterPage() {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen bg-[#181622] flex items-center justify-center text-zinc-400 text-xs">
          Loading...
        </div>
      }
    >
      <RegisterContent />
    </React.Suspense>
  );
}
