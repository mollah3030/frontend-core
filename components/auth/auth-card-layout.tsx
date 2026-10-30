"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react";

export interface AuthCardLayoutProps {
  title: string;
  subtitle?: string;
  linkText?: string;
  linkHref?: string;
  tagline?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Premium Split-Card Authentication Layout matching the dark luxury aesthetic:
 * - Left column: Atmospheric twilight hero photograph with brand logo, "Back to website", poetic tagline, and pagination indicators.
 * - Right column: Clean dark form with high-contrast typography, styled inputs, and accessible interactions.
 */
export function AuthCardLayout({
  title,
  subtitle,
  linkText,
  linkHref,
  tagline = (
    <>
      Capturing Moments,
      <br />
      Creating Memories
    </>
  ),
  children,
}: AuthCardLayoutProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto min-h-screen w-full bg-[#181622] text-white flex items-center justify-center p-3 sm:p-6 lg:p-8 selection:bg-[#715bc7] selection:text-white">
      {/* Subtle ambient light glows */}
      <div
        className="absolute -top-40 -left-40 size-96 rounded-full bg-[#715bc7]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -right-40 size-96 rounded-full bg-[#523e9c]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Container Card */}
      <div className="relative w-full max-w-[1040px] bg-[#252230] border border-white/[0.08] rounded-3xl p-3 sm:p-4 lg:p-5 shadow-2xl shadow-black/70">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Visual Showcase */}
          <div className="relative overflow-hidden rounded-2xl min-h-[300px] sm:min-h-[380px] lg:min-h-[580px] flex flex-col justify-between p-6 sm:p-8 bg-zinc-950">
            {/* Background Image */}
            <Image
              src="/images/auth-hero.jpg"
              alt="Scandinavian twilight landscape"
              fill
              priority
              className="object-cover object-center pointer-events-none"
            />

            {/* Gradient Overlay for high text contrast */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/45 pointer-events-none"
              aria-hidden="true"
            />

            {/* Top Bar: Brand Logo & Back Button */}
            <div className="relative z-10 flex items-center justify-between gap-3">
              <Link
                href="/"
                className="font-heading text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2 group"
                aria-label="Oivaly Home"
              >
                <span className="size-7 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-xs font-mono font-bold group-hover:scale-105 transition-transform">
                  N
                </span>
                <span>
                  Nordic<span className="text-[#9d86e9]">.</span>Market
                </span>
              </Link>

              <Link
                href="/"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/90 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 transition-all group"
              >
                <span>Back to website</span>
                <ArrowRightIcon className="size-3.5 group-hover:translate-x-0.5 transition-transform" weight="bold" />
              </Link>
            </div>

            {/* Bottom Bar: Tagline & Pagination Indicators */}
            <div className="relative z-10 space-y-4 pt-8">
              <h2 className="font-heading text-2xl sm:text-3xl font-normal text-white tracking-tight leading-snug">
                {tagline}
              </h2>

              <div className="flex items-center gap-2 pt-1" aria-hidden="true">
                <span className="h-1 w-6 rounded-full bg-white/35 transition-all" />
                <span className="h-1 w-6 rounded-full bg-white/35 transition-all" />
                <span className="h-1 w-10 rounded-full bg-white transition-all shadow-sm" />
              </div>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="flex flex-col justify-center px-2 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            <div className="max-w-md w-full mx-auto space-y-6">
              
              {/* Heading & Subtitle */}
              <div className="space-y-1.5">
                <h1 className="font-heading text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-xs sm:text-sm text-zinc-400">
                    {subtitle}
                    {linkText && linkHref && (
                      <Link
                        href={linkHref}
                        className="text-white hover:text-zinc-200 font-medium underline underline-offset-4 ml-1.5 transition-colors"
                      >
                        {linkText}
                      </Link>
                    )}
                  </p>
                )}
              </div>

              {/* Form Content */}
              {children}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
