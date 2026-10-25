"use client";

import * as React from "react";
import { XIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export interface AnnouncementBarProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string;
  subMessage?: string;
  dismissible?: boolean;
}

/**
 * Slim, responsive announcement bar placed above the primary header.
 * Uses restrained Scandinavian Pale Sage styling with accessible contrast.
 */
export function AnnouncementBar({
  message = "Discover thoughtful finds from independent Nordic makers.",
  subMessage,
  dismissible = true,
  className,
  ...props
}: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      aria-label="Announcement"
      className={cn(
        "relative w-full bg-brand-pale-sage/75 text-brand-deep-forest dark:bg-secondary dark:text-secondary-foreground border-b border-border/40 text-xs py-2 px-4 transition-all duration-200",
        className
      )}
      {...props}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-center text-center pr-8 sm:pr-0">
        <p className="font-normal tracking-normal leading-normal">
          <span className="font-medium">{message}</span>
          {subMessage && (
            <span className="hidden sm:inline text-brand-deep-forest/80 dark:text-secondary-foreground/80 ml-2">
              — {subMessage}
            </span>
          )}
        </p>
      </div>

      {dismissible && (
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          aria-label="Dismiss announcement"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-brand-deep-forest/70 hover:text-brand-deep-forest dark:text-secondary-foreground/70 dark:hover:text-secondary-foreground rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors"
        >
          <XIcon className="size-3.5" aria-hidden="true" />
        </button>
      )}
    </aside>
  );
}
