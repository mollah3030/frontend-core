"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import type { ProductVariant } from "@/resources/interfaces/product.interface";
import { formatFinnishCurrency } from "@/lib/finland";
import { cn } from "@/lib/utils";

export interface ProductVariantsProps {
  variants?: ProductVariant[];
  selectedVariant: ProductVariant | null;
  onSelectVariant: (variant: ProductVariant) => void;
  className?: string;
}

export function ProductVariants({
  variants = [],
  selectedVariant,
  onSelectVariant,
  className,
}: ProductVariantsProps) {
  // Only render if product has active variants
  const activeVariants = React.useMemo(() => {
    return variants.filter((v) => v.isActive !== false);
  }, [variants]);

  if (activeVariants.length <= 1) {
    // If 0 or 1 variant without distinctive attributes, no variant selection needed
    const single = activeVariants[0];
    if (!single?.size && !single?.color && !single?.model && !single?.attributeValue) {
      return null;
    }
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Select Option
        </Label>
        {selectedVariant && (
          <span className="text-xs text-muted-foreground">
            {selectedVariant.stockQuantity > 0 ? (
              <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                In stock ({selectedVariant.stockQuantity} available)
              </span>
            ) : (
              <span className="text-destructive font-medium">Out of stock</span>
            )}
          </span>
        )}
      </div>

      <div
        role="radiogroup"
        aria-label="Product options"
        className="grid grid-cols-2 sm:grid-cols-3 gap-2"
      >
        {activeVariants.map((v) => {
          const isSelected = selectedVariant?.id === v.id;
          const isOutOfStock = v.stockQuantity <= 0;

          // Format label from available variant dimensions
          const parts: string[] = [];
          if (v.size) parts.push(`Size: ${v.size}`);
          if (v.color) parts.push(`Color: ${v.color}`);
          if (v.model) parts.push(v.model);
          if (v.attributeValue) {
            parts.push(v.attributeKey ? `${v.attributeKey}: ${v.attributeValue}` : v.attributeValue);
          }

          const label = parts.length > 0 ? parts.join(" • ") : `Option ${v.sku || v.id.slice(0, 6)}`;
          const variantPrice = v.price ? formatFinnishCurrency(v.price) : null;

          return (
            <button
              key={v.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={isOutOfStock}
              onClick={() => onSelectVariant(v)}
              className={cn(
                "relative flex flex-col p-2.5 text-left border rounded-none transition-all outline-none",
                "focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-ring",
                isSelected
                  ? "border-primary bg-primary/5 text-foreground ring-1 ring-primary"
                  : "border-border/80 bg-card text-muted-foreground hover:border-foreground hover:text-foreground",
                isOutOfStock && "opacity-40 cursor-not-allowed bg-muted/40"
              )}
            >
              <span className="text-xs font-medium truncate">{label}</span>

              <div className="mt-1 flex items-baseline justify-between text-[11px]">
                {variantPrice ? (
                  <span className="font-semibold text-foreground">{variantPrice}</span>
                ) : (
                  <span />
                )}

                {isOutOfStock ? (
                  <span className="text-destructive font-normal">Sold out</span>
                ) : v.stockQuantity <= (v.lowStockThreshold || 3) ? (
                  <span className="text-amber-700 dark:text-amber-400 font-normal">Low stock</span>
                ) : null}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
