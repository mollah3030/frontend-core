"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon, XIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export interface SearchBarProps {
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
  onSearchSubmit?: (query: string) => void;
  id?: string;
  size?: "default" | "sm" | "lg";
}

function SearchBarFallback({
  placeholder = "Search products, gifts and makers...",
  className,
  size = "default",
}: {
  placeholder?: string;
  className?: string;
  size?: "default" | "sm" | "lg";
}) {
  const sizeClasses = {
    sm: "h-8 text-xs",
    default: "h-9 text-xs sm:text-sm",
    lg: "h-10 text-sm",
  }[size];

  return (
    <div className={cn("relative flex w-full items-center", className)}>
      <div className="pointer-events-none absolute left-3 flex items-center justify-center text-muted-foreground">
        <MagnifyingGlassIcon className="size-4" aria-hidden="true" />
      </div>
      <input
        type="search"
        disabled
        placeholder={placeholder}
        aria-hidden="true"
        className={cn(
          "w-full rounded-none border border-input bg-card pl-9 pr-14 text-foreground placeholder:text-muted-foreground outline-none opacity-80",
          sizeClasses
        )}
      />
    </div>
  );
}

function SearchBarForm({
  placeholder = "Search products, gifts and makers...",
  className,
  autoFocus = false,
  onSearchSubmit,
  id = "marketplace-search",
  size = "default",
}: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") || "";

  const [query, setQuery] = React.useState(urlQuery);
  const [prevUrlQuery, setPrevUrlQuery] = React.useState(urlQuery);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Adjust state during render when URL query changes (React 19 pattern)
  if (urlQuery !== prevUrlQuery) {
    setPrevUrlQuery(urlQuery);
    setQuery(urlQuery);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = query.trim();

    if (!trimmed) {
      inputRef.current?.focus();
      return;
    }

    const targetUrl = `/search?q=${encodeURIComponent(trimmed)}`;
    router.push(targetUrl);

    if (onSearchSubmit) {
      onSearchSubmit(trimmed);
    }
  };

  const handleClear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  const sizeClasses = {
    sm: "h-8 text-xs",
    default: "h-9 text-xs sm:text-sm",
    lg: "h-10 text-sm",
  }[size];

  return (
    <form
      role="search"
      aria-label="Product Search"
      onSubmit={handleSubmit}
      className={cn("relative flex w-full items-center", className)}
    >
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>

      <div className="relative flex w-full items-center">
        {/* Search Icon Prefix */}
        <div className="pointer-events-none absolute left-3 flex items-center justify-center text-muted-foreground">
          <MagnifyingGlassIcon className="size-4" aria-hidden="true" />
        </div>

        {/* Input */}
        <input
          ref={inputRef}
          id={id}
          type="search"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          className={cn(
            "w-full rounded-none border border-input bg-card pl-9 pr-14 text-foreground placeholder:text-muted-foreground transition-all duration-150 outline-none",
            "focus:border-ring focus:ring-1 focus:ring-ring/50",
            sizeClasses
          )}
        />

        {/* Clear Button (only when text present) */}
        {query.length > 0 && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            className="absolute right-9 p-1 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <XIcon className="size-3.5" aria-hidden="true" />
          </button>
        )}

        {/* Submit Icon Button */}
        <button
          type="submit"
          aria-label="Submit search"
          className="absolute right-1 flex size-7 items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <MagnifyingGlassIcon className="size-3.5" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}

/**
 * Reusable product search component with internal Suspense boundary
 * to ensure SSR & Next.js 16 Partial Prerendering compatibility.
 */
export function SearchBar(props: SearchBarProps) {
  return (
    <React.Suspense
      fallback={
        <SearchBarFallback
          placeholder={props.placeholder}
          className={props.className}
          size={props.size}
        />
      }
    >
      <SearchBarForm {...props} />
    </React.Suspense>
  );
}
