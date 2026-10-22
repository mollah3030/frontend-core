"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export interface MarketplaceShellProps {
  children: React.ReactNode;
}

function ConditionalHeader() {
  const pathname = usePathname();
  const isSellerRoute = Boolean(
    pathname &&
      (pathname.startsWith("/seller") ||
        pathname === "/sell" ||
        pathname.startsWith("/sell/"))
  );

  if (isSellerRoute) {
    return null;
  }

  return <SiteHeader />;
}

function ConditionalFooter() {
  const pathname = usePathname();
  const isSellerRoute = Boolean(
    pathname &&
      (pathname.startsWith("/seller") ||
        pathname === "/sell" ||
        pathname.startsWith("/sell/"))
  );

  if (isSellerRoute) {
    return null;
  }

  return <SiteFooter />;
}

/**
 * Shell wrapper that conditionally renders customer header and footer.
 * On dedicated seller routes (/seller/*, /sell), customer header and footer
 * are omitted to present a focused, high-end seller atelier experience.
 *
 * Header and footer are wrapped in Suspense so usePathname() does not
 * block root prerendering on dynamic routes like /products/[slug].
 */
export function MarketplaceShell({ children }: MarketplaceShellProps) {
  return (
    <>
      <React.Suspense fallback={<SiteHeader />}>
        <ConditionalHeader />
      </React.Suspense>
      <main id="main-content" className="flex-1 flex flex-col">
        {children}
      </main>
      <React.Suspense fallback={<SiteFooter />}>
        <ConditionalFooter />
      </React.Suspense>
    </>
  );
}
