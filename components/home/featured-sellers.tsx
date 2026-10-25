import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, MapPinIcon } from "@phosphor-icons/react/dist/ssr";
import { DEMO_FEATURED_SELLERS, type DemoSellerItem } from "@/fixtures/marketplace-demo";

export interface FeaturedSellersProps {
  sellers?: DemoSellerItem[];
}

/**
 * Featured Sellers Section: "Meet the Makers" / "Tutustu tekijöihin".
 * Promotes transparency, craft authenticity, and direct connection with Finnish artisans.
 */
export function FeaturedSellers({
  sellers = DEMO_FEATURED_SELLERS,
}: FeaturedSellersProps) {
  return (
    <section
      id="makers"
      aria-labelledby="makers-heading"
      className="py-14 sm:py-20 bg-background border-b border-border/70 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-primary block mb-1">
              Independent Makers
            </span>
            <h2
              id="makers-heading"
              className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-foreground"
            >
              Meet the independent makers
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-lg">
              The creative artisans and independent studios behind the objects you love.
            </p>
          </div>

          <Link
            href="/sell"
            className="inline-flex items-center text-xs font-medium text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <span>Sell on Nordic Market</span>
            <ArrowRightIcon className="size-3.5 ml-1" aria-hidden="true" />
          </Link>
        </div>

        {/* Sellers Grid: 4 Maker Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sellers.map((seller) => (
            <article
              key={seller.id}
              className="group relative flex flex-col overflow-hidden bg-card border border-border/80 hover:border-border transition-all duration-200"
            >
              {/* Studio Banner */}
              <div className="relative aspect-16/9 w-full overflow-hidden bg-muted">
                <Image
                  src={seller.bannerUrl}
                  alt={`${seller.name} studio`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Profile Body */}
              <div className="relative p-4 pt-0 flex flex-col flex-1 justify-between">
                <div>
                  {/* Floating Avatar */}
                  <div className="relative -mt-6 mb-3 size-12 overflow-hidden rounded-full border-2 border-background shadow-xs bg-muted">
                    <Image
                      src={seller.avatarUrl}
                      alt={seller.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>

                  {/* Title & Location */}
                  <h3 className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    <Link href={`/shops/${seller.id}`} className="focus-visible:outline-none focus-visible:underline">
                      {seller.name}
                    </Link>
                  </h3>

                  <div className="flex items-center gap-1 text-[11px] text-muted-foreground mt-0.5">
                    <MapPinIcon className="size-3 text-primary shrink-0" aria-hidden="true" />
                    <span>{seller.city}, Finland</span>
                  </div>

                  {/* Specialty */}
                  <p className="text-[11px] font-medium text-brand-deep-forest dark:text-brand-pale-sage mt-2">
                    {seller.specialty}
                  </p>

                  {/* Bio */}
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-3">
                    {seller.description}
                  </p>
                </div>

                {/* Footer link to storefront */}
                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-muted-foreground">
                    {seller.itemCount} items
                  </span>
                  <Link
                    href={`/shops/${seller.id}`}
                    className="font-medium text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>Visit Studio</span>
                    <ArrowRightIcon className="size-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
