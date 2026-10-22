"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { PROVISIONAL_CATEGORIES, type NavCategory } from "@/config/navigation";

export interface CategoryNavigationProps {
  categories?: NavCategory[];
  className?: string;
}

function CategoryNavigationList({
  categories = PROVISIONAL_CATEGORIES,
  className,
}: CategoryNavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main categories"
      className={cn(
        "w-full border-b border-border/70 bg-card/60 backdrop-blur-xs",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2 scrollbar-none text-xs font-medium">
          {categories.map((cat) => {
            const isActive = pathname === cat.href;

            return (
              <li key={cat.slug} className="shrink-0">
                <Link
                  href={cat.href}
                  className={cn(
                    "inline-flex items-center px-2.5 py-1 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-none whitespace-nowrap",
                    isActive &&
                      "text-primary font-semibold bg-brand-pale-sage/50 dark:bg-muted/80 border-b-2 border-primary"
                  )}
                >
                  {cat.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

function CategoryNavigationFallback({
  categories = PROVISIONAL_CATEGORIES,
  className,
}: CategoryNavigationProps) {
  return (
    <nav
      aria-label="Main categories"
      className={cn(
        "w-full border-b border-border/70 bg-card/60 backdrop-blur-xs",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2 scrollbar-none text-xs font-medium">
          {categories.map((cat) => (
            <li key={cat.slug} className="shrink-0">
              <Link
                href={cat.href}
                className="inline-flex items-center px-2.5 py-1 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-none whitespace-nowrap"
              >
                {cat.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/**
 * Desktop horizontal category navigation bar below the primary header.
 * Wrapped in Suspense for Next.js 16 Partial Prerendering compatibility.
 */
export function CategoryNavigation(props: CategoryNavigationProps) {
  return (
    <React.Suspense fallback={<CategoryNavigationFallback {...props} />}>
      <CategoryNavigationList {...props} />
    </React.Suspense>
  );
}
