import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { ProductCard } from "@/components/product/product-card";
import { DEMO_FEATURED_PRODUCTS } from "@/fixtures/marketplace-demo";
import type { Product } from "@/resources/interfaces/product.interface";

export interface FeaturedProductsProps {
  realProducts?: Product[];
  heading?: string;
  subheading?: string;
  limit?: number;
}

/**
 * Featured Products Merchandising Grid.
 * Displays published marketplace products with demonstration fallbacks
 * when inventory is small or during initial tenant onboarding.
 */
export function FeaturedProducts({
  realProducts = [],
  heading = "Find your next favourite",
  subheading = "Thoughtfully made goods and distinctive finds direct from independent studios.",
  limit = 8,
}: FeaturedProductsProps) {
  // Map real backend products into card-compatible items
  const mappedRealProducts = realProducts.map((p) => {
    const primaryImg = p.images?.find((img) => img.isPrimary) || p.images?.[0];
    const store = p.store;

    return {
      id: p.id,
      name: p.name,
      slug: p.slug,
      price: p.price,
      vatRate: typeof p.vatRate === "number" ? p.vatRate : 25.5,
      vatIncluded: p.vatIncluded ?? true,
      storeName: store?.name || "Independent Studio",
      storeCity: (store as { address?: string })?.address?.includes("Helsinki")
        ? "Helsinki"
        : undefined,
      storeId: store?.id,
      categoryName: p.category?.name || "Products",
      categorySlug: p.category?.slug || "products",
      imageUrl: primaryImg?.url || null,
      imageAlt: primaryImg?.altText || p.name,
      badge: p.status === "PUBLISHED" ? "New In" : undefined,
      isReturnEligible: p.isReturnEligible ?? true,
    };
  });

  // Combine real items with demonstration items to fill the 8-item grid
  const displayItems = [
    ...mappedRealProducts,
    ...DEMO_FEATURED_PRODUCTS.filter(
      (demo) => !mappedRealProducts.some((real) => real.name === demo.name)
    ),
  ].slice(0, limit);

  return (
    <section
      aria-labelledby="featured-products-heading"
      className="py-14 sm:py-20 bg-background border-b border-border/70"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-primary block mb-1">
              Curated Finds
            </span>
            <h2
              id="featured-products-heading"
              className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-foreground"
            >
              {heading}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-lg">
              {subheading}
            </p>
          </div>

          <Link
            href="/search"
            className="inline-flex items-center text-xs font-medium text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <span>Browse all products</span>
            <ArrowRightIcon className="size-3.5 ml-1" aria-hidden="true" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {displayItems.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              slug={product.slug}
              price={product.price}
              storeName={product.storeName}
              storeCity={product.storeCity}
              storeId={product.storeId}
              imageUrl={product.imageUrl}
              imageAlt={product.imageAlt}
              badge={product.badge}
              vatIncluded={product.vatIncluded}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Skeleton fallback for FeaturedProducts when streaming live inventory.
 */
export function FeaturedProductsSkeleton() {
  return (
    <section className="py-14 sm:py-20 bg-background border-b border-border/70 animate-pulse">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <div className="h-3 w-28 bg-muted mb-2" />
          <div className="h-8 w-64 bg-muted mb-2" />
          <div className="h-4 w-96 bg-muted/60" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col bg-card border border-border/60">
              <div className="aspect-square bg-muted" />
              <div className="p-3 space-y-2">
                <div className="h-3 w-20 bg-muted/70" />
                <div className="h-4 w-full bg-muted" />
                <div className="h-4 w-16 bg-muted pt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
