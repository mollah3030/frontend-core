"use client";

import * as React from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import type { Product } from "@/resources/interfaces/product.interface";
import type { Store } from "@/resources/interfaces/store.interface";
import { cn } from "@/lib/utils";

export interface ProductTabsProps {
  product: Product;
  className?: string;
}

export function ProductTabs({ product, className }: ProductTabsProps) {
  const store = product.store;
  const fullStore =
    product.store && "address" in product.store ? (product.store as Store) : null;

  return (
    <div className={cn("pt-8 border-t border-border/70", className)}>
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="w-full justify-start border-b border-border/70 bg-transparent p-0 rounded-none h-auto gap-4 sm:gap-8 overflow-x-auto scrollbar-none">
          <TabsTrigger
            value="description"
            className="rounded-none border-b-2 border-transparent px-1 pb-3 text-xs sm:text-sm font-medium text-muted-foreground transition-colors data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:font-semibold data-[state=active]:bg-transparent"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="specs"
            className="rounded-none border-b-2 border-transparent px-1 pb-3 text-xs sm:text-sm font-medium text-muted-foreground transition-colors data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:font-semibold data-[state=active]:bg-transparent"
          >
            Specifications
          </TabsTrigger>
          <TabsTrigger
            value="maker"
            className="rounded-none border-b-2 border-transparent px-1 pb-3 text-xs sm:text-sm font-medium text-muted-foreground transition-colors data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:font-semibold data-[state=active]:bg-transparent"
          >
            About Maker
          </TabsTrigger>
          <TabsTrigger
            value="shipping"
            className="rounded-none border-b-2 border-transparent px-1 pb-3 text-xs sm:text-sm font-medium text-muted-foreground transition-colors data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:font-semibold data-[state=active]:bg-transparent"
          >
            Shipping & Returns
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: Description */}
        <TabsContent value="description" className="pt-6 space-y-4">
          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
            {product.description ? (
              product.description.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="text-xs sm:text-sm text-foreground/90">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-xs sm:text-sm text-muted-foreground italic">
                No detailed description has been added for this item yet.
              </p>
            )}
          </div>
        </TabsContent>

        {/* Tab 2: Specifications */}
        <TabsContent value="specs" className="pt-6">
          <div className="max-w-xl border border-border/70 bg-card overflow-hidden">
            <Table>
              <TableBody className="text-xs">
                {product.sku && (
                  <TableRow>
                    <TableCell className="font-medium text-muted-foreground w-1/3 py-2.5">
                      SKU
                    </TableCell>
                    <TableCell className="text-foreground py-2.5">{product.sku}</TableCell>
                  </TableRow>
                )}
                {product.category?.name && (
                  <TableRow>
                    <TableCell className="font-medium text-muted-foreground py-2.5">
                      Category
                    </TableCell>
                    <TableCell className="text-foreground py-2.5">
                      {product.category.name}
                    </TableCell>
                  </TableRow>
                )}
                <TableRow>
                  <TableCell className="font-medium text-muted-foreground py-2.5">
                    VAT Rate
                  </TableCell>
                  <TableCell className="text-foreground py-2.5">
                    {product.vatRate ? `${product.vatRate}%` : "25.5%"} (
                    {product.vatIncluded ? "included in price" : "calculated at checkout"})
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-muted-foreground py-2.5">
                    Returns Policy
                  </TableCell>
                  <TableCell className="text-foreground py-2.5">
                    {product.isReturnEligible !== false
                      ? "14 days (Standard statutory consumer rights)"
                      : "Made-to-order (Exempt from standard returns)"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-muted-foreground py-2.5">
                    Fulfillment
                  </TableCell>
                  <TableCell className="text-foreground py-2.5">
                    {product.trackInventory ? "Tracked stock" : "Made-to-order"}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* Tab 3: About Maker */}
        <TabsContent value="maker" className="pt-6 space-y-4">
          {store ? (
            <div className="max-w-xl border border-border/70 bg-card p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-foreground">
                    {store.name}
                  </h4>
                  {fullStore?.address && (
                    <p className="text-xs text-muted-foreground mt-0.5">{fullStore.address}</p>
                  )}
                </div>

                <Link
                  href={`/shops/${store.id}`}
                  className="text-xs text-primary font-medium hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Visit maker&apos;s storefront &rarr;
                </Link>
              </div>

              {fullStore && (
                <div className="pt-3 border-t border-border/60 text-xs text-muted-foreground space-y-1">
                  {fullStore.businessId && (
                    <p>
                      <strong>Business ID:</strong> {fullStore.businessId}
                    </p>
                  )}
                  {fullStore.vatId && (
                    <p>
                      <strong>VAT ID:</strong> {fullStore.vatId}
                    </p>
                  )}
                  {fullStore.phone && (
                    <p>
                      <strong>Customer Support:</strong> {fullStore.phone}
                    </p>
                  )}
                </div>
              )}
            </div>
          ) : (
            <p className="text-xs text-muted-foreground italic">
              Seller details are not currently available.
            </p>
          )}
        </TabsContent>

        {/* Tab 4: Shipping & Returns */}
        <TabsContent value="shipping" className="pt-6 space-y-4 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-foreground">
              Shipping & Delivery
            </h4>
            <p>
              All orders are packaged and dispatched directly from the independent maker&apos;s workshop. Estimated delivery time within the Nordic region is 2–4 business days from order confirmation.
            </p>
            <p>
              Orders are dispatched with tracking, and you will receive a tracking link via email as soon as your parcel ships.
            </p>
          </div>

          <div className="pt-4 border-t border-border/60 space-y-2">
            <h4 className="font-semibold text-sm text-foreground">
              14-Day Statutory Returns
            </h4>
            <p>
              You have a standard 14-day statutory right to return eligible items after receiving delivery. Returned items must be unused, in re-sellable condition, and in their original packaging.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
