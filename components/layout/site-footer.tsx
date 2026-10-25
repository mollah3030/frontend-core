import * as React from "react";
import Link from "next/link";
import { GlobeIcon, ShieldCheckIcon, LeafIcon, SparkleIcon } from "@phosphor-icons/react/dist/ssr";
import { FOOTER_SECTIONS } from "@/config/navigation";
import { cn } from "@/lib/utils";

export type SiteFooterProps = React.HTMLAttributes<HTMLElement>;

/**
 * Global marketplace footer designed with Scandinavian restraint,
 * structured navigation columns, localization indicators, and trust highlights.
 */
export function SiteFooter({ className, ...props }: SiteFooterProps) {
  return (
    <footer
      role="contentinfo"
      aria-label="Site Footer"
      className={cn(
        "w-full border-t border-border/80 bg-brand-warm-ivory dark:bg-card text-foreground transition-colors",
        className
      )}
      {...props}
    >
      {/* 1. Nordic Values & Trust Banner */}
      <div className="border-b border-border/50 bg-brand-pale-sage/30 dark:bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded bg-brand-pale-sage text-brand-deep-forest dark:bg-muted">
                <LeafIcon className="size-4.5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-foreground">
                  Nordic Quality
                </h3>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
                  Curated pieces crafted by independent artisans and small Nordic design studios.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded bg-brand-pale-sage text-brand-deep-forest dark:bg-muted">
                <ShieldCheckIcon className="size-4.5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-foreground">
                  Buyer Protection
                </h3>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
                  Secure payments, certified checkout, and clear 14-day statutory returns.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded bg-brand-pale-sage text-brand-deep-forest dark:bg-muted">
                <SparkleIcon className="size-4.5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-foreground">
                  Support Independent Studios
                </h3>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
                  Every order directly supports independent creators and regional workshops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Intro Column */}
          <div className="col-span-2 lg:col-span-1 pr-4">
            <Link
              href="/"
              className="inline-block font-heading text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors"
            >
              Nordic<span className="text-primary font-light">.</span>Market
            </Link>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              A curated multi-vendor marketplace connecting discerning shoppers with independent Nordic makers.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <GlobeIcon className="size-4 text-primary" aria-hidden="true" />
              <span>Helsinki, Finland</span>
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-xs font-semibold tracking-wider text-foreground uppercase">
                {section.title}
              </h3>
              <ul className="space-y-2 text-xs">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3. Bottom Legal & Localization Bar */}
        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="text-center sm:text-left">
            &copy; 2026 Nordic Marketplace. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
              <span className="size-2 rounded-full bg-brand-sage" aria-hidden="true" />
              English &bull; EUR (&euro;)
            </span>
            <span className="text-border">|</span>
            <span className="text-muted-foreground">Helsinki, FI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
