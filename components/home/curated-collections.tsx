import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { DEMO_CURATED_COLLECTIONS, type DemoCollectionItem } from "@/fixtures/marketplace-demo";

export interface CuratedCollectionsProps {
  collections?: DemoCollectionItem[];
}

/**
 * Editorial Curated Collections Section.
 * Large, expressive image tiles highlighting distinct Scandinavian living themes.
 */
export function CuratedCollections({
  collections = DEMO_CURATED_COLLECTIONS,
}: CuratedCollectionsProps) {
  return (
    <section
      aria-labelledby="collections-heading"
      className="py-14 sm:py-20 bg-brand-warm-ivory dark:bg-card/30 border-b border-border/70"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-primary block mb-1">
            Curated Collections
          </span>
          <h2
            id="collections-heading"
            className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-foreground"
          >
            Themes for the Nordic Home
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2">
            Selected goods bringing natural calm, authenticity, and functional beauty to everyday living.
          </p>
        </div>

        {/* Collections Grid: 3 Editorial Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {collections.map((col) => (
            <Link
              key={col.id}
              href={`/categories/${col.slug}`}
              className="group relative flex flex-col overflow-hidden bg-card border border-border/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {/* Tile Image */}
              <div className="relative aspect-4/3 sm:aspect-16/10 w-full overflow-hidden bg-muted">
                <Image
                  src={col.imageUrl}
                  alt={col.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-xs px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary border border-border/80">
                  {col.tag}
                </div>
              </div>

              {/* Tile Content */}
              <div className="p-5 flex flex-col flex-1 justify-between text-left">
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    {col.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs font-medium text-primary">
                  <span>Explore collection</span>
                  <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
