import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon, BookOpenIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";

/**
 * Editorial Craft Story Highlight Section.
 * Replaces fake newsletter forms with an authentic story invitation
 * highlighting Scandinavian craft philosophy and small studio values.
 */
export function StoryHighlight() {
  return (
    <section
      aria-labelledby="story-heading"
      className="py-14 sm:py-20 bg-brand-pale-sage/40 dark:bg-muted/30 border-b border-border/70"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-deep-forest dark:text-foreground bg-brand-pale-sage dark:bg-muted mb-4">
          <BookOpenIcon className="size-3.5" aria-hidden="true" />
          <span>Our Philosophy</span>
        </div>

        <h2
          id="story-heading"
          className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground max-w-2xl mx-auto leading-tight"
        >
          A home for Nordic craft and mindful design.
        </h2>

        <p className="text-xs sm:text-sm text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
          We believe the most meaningful objects are made slowly and intentionally. 
          Our platform brings together skilled woodworkers, ceramicists, textile artists, 
          and jewelry makers under one shared community.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="default" className="px-6 h-10 text-xs sm:text-sm font-medium">
            <Link href="/about">
              <span>Read our story</span>
              <ArrowRightIcon className="size-3.5 ml-1.5" aria-hidden="true" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="default"
            className="px-6 h-10 text-xs sm:text-sm font-medium border-border hover:bg-muted"
          >
            <Link href="/sell">
              <span>Sell on Nordic Market</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
