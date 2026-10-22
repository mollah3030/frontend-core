import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { PROVISIONAL_CATEGORIES, type NavCategory } from "@/config/navigation";

// Curated high-resolution editorial images for category tiles
const CATEGORY_TILE_IMAGES: Record<string, string> = {
  "home-living": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop",
  "jewelry-accessories": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop",
  "clothing-shoes": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=600&auto=format&fit=crop",
  "art-ceramics": "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=600&auto=format&fit=crop",
  "craft-supplies": "https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=600&auto=format&fit=crop",
  "gifts-seasonal": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop",
  "vintage-collectibles": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop",
  "nordic-living": "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop",
};

export interface CategoryDiscoveryProps {
  categories?: NavCategory[];
}

/**
 * Visual Category Discovery Section directly beneath the hero.
 * Features balanced editorial tiles with subtle zoom on hover.
 */
export function CategoryDiscovery({
  categories = PROVISIONAL_CATEGORIES.slice(0, 6),
}: CategoryDiscoveryProps) {
  return (
    <section
      aria-labelledby="categories-heading"
      className="py-14 sm:py-20 bg-background border-b border-border/70"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-primary block mb-1">
              Explore by Category
            </span>
            <h2
              id="categories-heading"
              className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-foreground"
            >
              Browse popular departments
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-lg">
              Inspiration for everyday living, dining, gifting, and personal Nordic style.
            </p>
          </div>

          <Link
            href="/categories"
            className="inline-flex items-center text-xs font-medium text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <span>All categories</span>
            <ArrowRightIcon className="size-3.5 ml-1" aria-hidden="true" />
          </Link>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((cat) => {
            const imageUrl =
              CATEGORY_TILE_IMAGES[cat.slug] ||
              "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop";

            return (
              <Link
                key={cat.slug}
                href={cat.href}
                className="group relative flex flex-col overflow-hidden bg-card border border-border/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {/* Tile Image */}
                <div className="relative aspect-4/5 w-full overflow-hidden bg-muted">
                  <Image
                    src={imageUrl}
                    alt={cat.title}
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Shadow for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Tile Overlay Label */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <h3 className="text-xs sm:text-sm font-semibold text-white tracking-tight leading-tight">
                      {cat.title}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
