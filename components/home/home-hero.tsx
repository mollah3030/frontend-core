"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRightIcon,
  SparkleIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  LeafIcon,
  CheckCircleIcon,
  StarIcon,
  StorefrontIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export interface HomeHeroProps {
  eyebrow?: string;
  headline?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

const QUICK_TAGS = [
  { label: "Handmade Ceramics", href: "/search?q=ceramics" },
  { label: "Linen Bedding", href: "/search?q=linen" },
  { label: "Artisan Lighting", href: "/search?q=lighting" },
  { label: "Woodcraft", href: "/search?q=wood" },
  { label: "Wool Throws", href: "/search?q=wool" },
];

const TRUST_PILLS = [
  { icon: ShieldCheckIcon, label: "Verified Nordic Ateliers" },
  { icon: LeafIcon, label: "Carbon-Neutral EU Shipping" },
  { icon: CheckCircleIcon, label: "Direct Studio Support" },
];

/**
 * High-end Editorial Scandinavian Hero Section for Nordic Marketplace.
 * Features an artisan lifestyle collage, integrated discovery search bar,
 * quick category chips, and verified maker badges.
 */
export function HomeHero({
  eyebrow = "CURATED NORDIC LIVING & ATELIERS",
  headline = "Timeless design, shaped by nature and independent makers.",
  description = "Discover thoughtfully crafted homewares, heirloom stoneware, organic textiles, and unique gifts created by vetted Nordic artisans and independent design studios.",
  primaryCtaText = "Explore Collection",
  primaryCtaHref = "/categories",
  secondaryCtaText = "Meet the Makers",
  secondaryCtaHref = "#makers",
}: HomeHeroProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/categories");
    }
  };

  return (
    <section
      aria-label="Welcome to Nordic Marketplace"
      className="relative overflow-hidden bg-brand-warm-ivory dark:bg-card/40 border-b border-border/80"
    >
      {/* Subtle organic background glow */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-brand-pale-sage/40 dark:bg-primary/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-24 size-96 rounded-full bg-brand-soft-beige/50 dark:bg-muted/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Copy, Search, & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary bg-brand-pale-sage/90 dark:bg-muted/80 border border-brand-sage/20 mb-4 shadow-2xs">
              <SparkleIcon className="size-3.5 text-primary" weight="fill" aria-hidden="true" />
              <span>{eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.14] mb-4">
              {headline}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mb-7">
              {description}
            </p>

            {/* Integrated Discovery Search Bar */}
            <form onSubmit={handleSearch} className="w-full max-w-xl mb-3">
              <div className="flex items-center border border-border bg-background shadow-xs focus-within:border-ring focus-within:ring-1 focus-within:ring-ring/50 transition-all">
                <div className="pl-3.5 pr-1.5 text-muted-foreground flex items-center">
                  <MagnifyingGlassIcon className="size-4" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search handmade ceramics, linen, lighting, woodcraft..."
                  className="h-11 w-full bg-transparent px-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground outline-none"
                  aria-label="Search the marketplace"
                />
                <div className="p-1">
                  <Button
                    type="submit"
                    size="default"
                    className="h-9 px-4 text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </form>

            {/* Quick Trending Category Chips */}
            <div className="flex flex-wrap items-center gap-1.5 mb-7 text-xs text-muted-foreground">
              <span className="text-[11px] font-medium text-muted-foreground/80 mr-0.5">Trending:</span>
              {QUICK_TAGS.map((tag) => (
                <Link
                  key={tag.label}
                  href={tag.href}
                  className="inline-flex items-center px-2.5 py-1 text-[11px] font-medium text-foreground/80 bg-background/80 hover:bg-background hover:text-primary border border-border/70 hover:border-primary/40 transition-all shadow-2xs"
                >
                  {tag.label}
                </Link>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <Button asChild size="default" className="px-6 h-11 text-xs sm:text-sm font-medium">
                <Link href={primaryCtaHref}>
                  <span>{primaryCtaText}</span>
                  <ArrowRightIcon className="size-4 ml-1.5" aria-hidden="true" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="default"
                className="px-6 h-11 text-xs sm:text-sm font-medium border-border hover:bg-muted"
              >
                <Link href={secondaryCtaHref}>
                  <span>{secondaryCtaText}</span>
                </Link>
              </Button>
            </div>

            {/* Micro feature pills */}
            <div className="pt-6 border-t border-border/70 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-muted-foreground w-full">
              {TRUST_PILLS.map((pill, i) => {
                const Icon = pill.icon;
                return (
                  <span key={i} className="inline-flex items-center gap-1.5 text-foreground/80 font-medium text-[11px] sm:text-xs">
                    <Icon className="size-3.5 text-primary" weight="bold" aria-hidden="true" />
                    <span>{pill.label}</span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Right Column: Layered Editorial Lifestyle Collage */}
          <div className="lg:col-span-6 relative">
            {/* Floating Top-Left Social Proof Rating Card */}
            <div className="hidden sm:flex absolute -top-4 -left-4 z-10 items-center gap-3 bg-background/95 backdrop-blur-md border border-border/90 px-3.5 py-2.5 shadow-lg max-w-[260px]">
              <div className="relative size-10 shrink-0 overflow-hidden border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=200&auto=format&fit=crop"
                  alt="Ceramicist throwing clay on pottery wheel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                  <StarIcon className="size-3" weight="fill" />
                  <span className="text-[11px] font-bold">4.9 / 5</span>
                  <span className="text-[10px] text-muted-foreground font-normal">(1.2k+ reviews)</span>
                </div>
                <span className="text-[11px] font-medium text-foreground truncate mt-0.5">
                  Independent Nordic Studios
                </span>
              </div>
            </div>

            {/* Main Lifestyle Hero Photo */}
            <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 w-full overflow-hidden border border-border/80 shadow-md bg-muted group">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
                alt="Bright Scandinavian interior with natural wood furniture and ceramic pieces"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />

              {/* Gradient Scrim for Card Contrast */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Overlaid Editorial Maker Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-background/95 backdrop-blur-md border border-border/80 p-3 sm:p-3.5 shadow-lg">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                    Featured Atelier
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5">
                    <CheckCircleIcon className="size-3" weight="fill" />
                    Verified
                  </span>
                </div>
                <p className="text-xs font-semibold text-foreground mt-1">
                  Kupittaa Ceramics &bull; Turku, Finland
                </p>
                <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">
                  Hand-thrown stoneware for mindful everyday living
                </p>
              </div>
            </div>

            {/* Floating Bottom-Right Atelier Counter Badge */}
            <div className="hidden sm:inline-flex absolute -bottom-3 -right-3 z-10 items-center gap-2 bg-primary text-primary-foreground px-3.5 py-2 shadow-lg text-xs font-medium">
              <StorefrontIcon className="size-4" weight="fill" />
              <span>450+ Active Ateliers</span>
              i            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
