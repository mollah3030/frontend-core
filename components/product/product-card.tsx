"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartIcon, PackageIcon } from "@phosphor-icons/react";
import { formatFinnishCurrency } from "@/lib/finland";
import { Badge } from "@/components/ui/badge";
import { useWishlist } from "@/lib/wishlist-context";
import { cn } from "@/lib/utils";

export interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  price: number | string;
  storeName?: string;
  storeCity?: string;
  storeId?: string;
  imageUrl?: string | null;
  imageAlt?: string;
  badge?: string;
  vatIncluded?: boolean;
  priorityImage?: boolean;
  className?: string;
  onWishlistToggle?: (productId: string) => void;
  isWishlisted?: boolean;
}

/**
 * Reusable Scandinavian product card for marketplace discovery grids.
 * Emphasizes high-quality product photography, clear pricing, and maker attribution.
 */
export function ProductCard({
  id,
  name,
  slug,
  price,
  storeName,
  storeCity,
  storeId,
  imageUrl,
  imageAlt,
  badge,
  vatIncluded = true,
  priorityImage = false,
  className,
  onWishlistToggle,
  isWishlisted = false,
}: ProductCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const wishlisted = isInWishlist(id) || isWishlisted;

  const numericPrice = typeof price === "number" ? price : parseFloat(price) || 0;
  const formattedPrice = formatFinnishCurrency(numericPrice);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist({
      productId: id,
      name,
      slug: slug || id,
      price: numericPrice,
      imageUrl,
      storeName,
      storeId,
    });
    if (onWishlistToggle) {
      onWishlistToggle(id);
    }
  };

  const productHref = `/products/${slug || id}`;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden bg-card border border-border/70 hover:border-border transition-all duration-200",
        className
      )}
    >
      {/* 1. Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-muted/40">
        <Link
          href={productHref}
          className="block size-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={`View product: ${name}`}
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlt || name}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
              priority={priorityImage}
              className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex size-full flex-col items-center justify-center text-muted-foreground/50">
              <PackageIcon className="size-8" aria-hidden="true" />
              <span className="text-[11px] mt-1">Image coming soon</span>
            </div>
          )}
        </Link>

        {/* Optional Badge */}
        {badge && (
          <Badge
            variant="secondary"
            className="absolute left-2.5 top-2.5 text-[10px] uppercase tracking-wider font-semibold bg-background/90 backdrop-blur-xs text-foreground border border-border/80 px-2 py-0.5"
          >
            {badge}
          </Badge>
        )}

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlistClick}
          aria-label={
            wishlisted
              ? `Remove from wishlist: ${name}`
              : `Add to wishlist: ${name}`
          }
          className={cn(
            "absolute right-2.5 top-2.5 flex size-8 items-center justify-center rounded-full bg-background/90 backdrop-blur-xs text-foreground transition-all duration-150 hover:bg-background hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            wishlisted && "text-destructive"
          )}
        >
          <HeartIcon
            className="size-4"
            weight={wishlisted ? "fill" : "regular"}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* 2. Product Metadata */}
      <div className="flex flex-1 flex-col p-3 sm:p-3.5 justify-between">
        <div>
          {/* Store Name & Location */}
          {storeName && (
            <p className="text-[11px] text-muted-foreground truncate mb-1">
              {storeId ? (
                <Link
                  href={`/shops/${storeId}`}
                  className="hover:text-foreground transition-colors"
                >
                  {storeName}
                  {storeCity && <span className="opacity-70"> &bull; {storeCity}</span>}
                </Link>
              ) : (
                <span>
                  {storeName}
                  {storeCity && <span className="opacity-70"> &bull; {storeCity}</span>}
                </span>
              )}
            </p>
          )}

          {/* Product Title */}
          <h3 className="text-xs sm:text-sm font-medium text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
            <Link href={productHref} className="focus-visible:outline-none focus-visible:underline">
              {name}
            </Link>
          </h3>
        </div>

        {/* Price & Tax details */}
        <div className="mt-3 flex items-baseline justify-between pt-2 border-t border-border/40">
          <span className="text-sm sm:text-base font-semibold tracking-tight text-foreground">
            {formattedPrice}
          </span>
          {vatIncluded && (
            <span className="text-[10px] text-muted-foreground">
              incl. VAT
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
