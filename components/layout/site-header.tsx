"use client";

import * as React from "react";
import Link from "next/link";
import { HeartIcon, ShoppingBagIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { AnnouncementBar } from "./announcement-bar";
import { SearchBar } from "./search-bar";
import { CategoryNavigation } from "./category-navigation";
import { AccountMenu } from "./account-menu";
import { MobileNavigation } from "./mobile-navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/lib/auth-context";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import { HEADER_NAV_CONFIG } from "@/config/navigation";
import type { User } from "@/resources/interfaces/user.interface";
import { cn } from "@/lib/utils";

export interface SiteHeaderProps {
  user?: User | null;
  cartCount?: number;
  wishlistCount?: number;
  showAnnouncement?: boolean;
  announcementMessage?: string;
  className?: string;
}

/**
 * Global marketplace header incorporating announcement bar,
 * brand wordmark, prominent search, customer actions, and category navigation.
 */
export function SiteHeader({
  user,
  cartCount,
  wishlistCount,
  showAnnouncement = true,
  announcementMessage = HEADER_NAV_CONFIG.announcement,
  className,
}: SiteHeaderProps) {
  const { user: authUser } = useAuth();
  const { cartCount: liveCartCount } = useCart();
  const { wishlistCount: liveWishlistCount } = useWishlist();

  const currentUser = user !== undefined ? user : authUser;
  const currentCartCount = cartCount !== undefined ? cartCount : liveCartCount;
  const currentWishlistCount = wishlistCount !== undefined ? wishlistCount : liveWishlistCount;

  const [mobileSearchOpen, setMobileSearchOpen] = React.useState(false);

  return (
    <header className={cn("relative w-full z-40 bg-background", className)}>
      {/* 1. Optional Announcement Bar */}
      {showAnnouncement && (
        <AnnouncementBar message={announcementMessage} />
      )}

      {/* 2. Main Header Bar */}
      <div className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/95 backdrop-blur-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-3 sm:gap-6">
            {/* Mobile Menu Trigger & Wordmark */}
            <div className="flex items-center gap-2 sm:gap-3">
              <MobileNavigation
                cartCount={currentCartCount}
                wishlistCount={currentWishlistCount}
              />

              <Link
                href={HEADER_NAV_CONFIG.routes.home}
                className="group flex flex-col justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                aria-label="Nordic Marketplace Home"
              >
                <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  Nordic<span className="text-primary font-light">.</span>Market
                </span>
                <span className="hidden sm:inline-block text-[9px] uppercase tracking-widest text-muted-foreground font-medium -mt-1">
                  Finnish Multi-Vendor
                </span>
              </Link>
            </div>

            {/* Desktop Prominent Search */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-4">
              <SearchBar placeholder={HEADER_NAV_CONFIG.searchPlaceholder} />
            </div>

            {/* Actions (Search Toggle, Account, Wishlist, Cart) */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Mobile Search Toggle */}
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
                className="lg:hidden text-foreground hover:bg-muted"
                aria-label={mobileSearchOpen ? "Close search" : "Open search"}
                aria-expanded={mobileSearchOpen}
              >
                <MagnifyingGlassIcon className="size-4" aria-hidden="true" />
              </Button>

              {/* Account Menu */}
              <div className="hidden sm:block">
                <AccountMenu user={currentUser} />
              </div>

              {/* Wishlist Link */}
              <Button
                variant="ghost"
                size="icon-sm"
                asChild
                className="relative text-foreground hover:bg-muted"
              >
                <Link
                  href={HEADER_NAV_CONFIG.routes.wishlist}
                  aria-label={
                    typeof currentWishlistCount === "number" && currentWishlistCount > 0
                      ? `Wishlist (${currentWishlistCount} items)`
                      : "Wishlist"
                  }
                >
                  <HeartIcon className="size-4.5" aria-hidden="true" />
                  {typeof currentWishlistCount === "number" && currentWishlistCount > 0 && (
                    <Badge
                      variant="secondary"
                      className="absolute -top-1 -right-1 h-4 min-w-4 px-1 rounded-full text-[10px] font-semibold bg-muted text-foreground border border-border"
                    >
                      {currentWishlistCount}
                    </Badge>
                  )}
                </Link>
              </Button>

              {/* Cart Link */}
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="relative px-2.5 text-foreground hover:bg-muted"
              >
                <Link
                  href={HEADER_NAV_CONFIG.routes.cart}
                  aria-label={
                    typeof currentCartCount === "number" && currentCartCount > 0
                      ? `Cart (${currentCartCount} items)`
                      : "Shopping Cart"
                  }
                >
                  <ShoppingBagIcon className="size-4.5 text-primary" aria-hidden="true" />
                  <span className="hidden md:inline-block ml-1.5 text-xs font-medium">
                    Cart
                  </span>
                  {typeof currentCartCount === "number" && currentCartCount > 0 && (
                    <Badge
                      variant="default"
                      className="ml-1 sm:ml-1.5 h-4 min-w-4 px-1 rounded-full text-[10px] font-semibold bg-primary text-primary-foreground"
                    >
                      {currentCartCount}
                    </Badge>
                  )}
                </Link>
              </Button>
            </div>
          </div>

          {/* Expandable Mobile Search Row */}
          {mobileSearchOpen && (
            <div className="lg:hidden pb-3 pt-1 border-t border-border/50 animate-in fade-in-0 duration-150">
              <SearchBar
                id="mobile-header-search"
                autoFocus
                placeholder={HEADER_NAV_CONFIG.searchPlaceholder}
                size="sm"
                onSearchSubmit={() => setMobileSearchOpen(false)}
              />
            </div>
          )}
        </div>

        {/* 3. Category Navigation Bar (Desktop) */}
        <div className="hidden lg:block">
          <CategoryNavigation />
        </div>
      </div>
    </header>
  );
}
