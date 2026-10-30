"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeftIcon,
  PackageIcon,
  CurrencyEurIcon,
  ImageIcon,
  SparkleIcon,
  CheckCircleIcon,
  PaperPlaneTiltIcon,
  FloppyDiskIcon,
  TrashIcon,
  PlusIcon,
  InfoIcon,
} from "@phosphor-icons/react";
import { useSellerAuth } from "@/lib/seller-auth-context";
import { sellerDashboardApi } from "@/resources/apis/seller-dashboard.api";
import { env } from "@/lib/env";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface VariantFormItem {
  size?: string;
  color?: string;
  sku?: string;
  price?: number;
  stockQuantity: number;
}

export default function NewProductPage() {
  const router = useRouter();
  const { store } = useSellerAuth();

  // Categories list
  const [categories, setCategories] = React.useState<Array<{ id: string; name: string; slug: string }>>([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Form states
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [categoryId, setCategoryId] = React.useState("");
  const [sku, setSku] = React.useState("");
  const [price, setPrice] = React.useState<number | string>(49.0);
  const [vatRate, setVatRate] = React.useState<number>(env.defaultVatRate);
  const [vatIncluded, setVatIncluded] = React.useState(true);
  const [trackInventory, setTrackInventory] = React.useState(true);
  const [stockQuantity, setStockQuantity] = React.useState<number>(10);
  const [lowStockThreshold, setLowStockThreshold] = React.useState<number>(3);

  // Images state
  const [imageUrl, setImageUrl] = React.useState("");
  const [images, setImages] = React.useState<Array<{ url: string; altText?: string; isPrimary: boolean }>>([
    {
      url: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      altText: "Handcrafted Nordic product photo",
      isPrimary: true,
    },
  ]);

  // Variants state (optional)
  const [showVariants, setShowVariants] = React.useState(false);
  const [variants, setVariants] = React.useState<VariantFormItem[]>([]);

  // Load categories
  React.useEffect(() => {
    async function loadCategories() {
      try {
        const cats = await sellerDashboardApi.getCategories();
        setCategories(cats || []);
        if (cats && cats.length > 0) {
          setCategoryId(cats[0].id);
        }
      } catch {
        // Fallback demo categories
        setCategories([
          { id: "c1", name: "Handmade & Crafts", slug: "crafts" },
          { id: "c2", name: "Nordic Home & Living", slug: "home" },
          { id: "c3", name: "Finnish Design & Art", slug: "design" },
        ]);
      }
    }
    loadCategories();
  }, []);

  // Quick SKU generator
  const handleGenerateSku = () => {
    const prefix = name ? name.slice(0, 3).toUpperCase() : "NDK";
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setSku(`${prefix}-${randomNum}`);
    toast.info("Generated SKU code");
  };

  // Add Image
  const handleAddImage = () => {
    if (!imageUrl.trim()) {
      toast.error("Please enter a valid image URL");
      return;
    }
    setImages((prev) => [
      ...prev,
      {
        url: imageUrl.trim(),
        altText: name || "Product image",
        isPrimary: prev.length === 0,
      },
    ]);
    setImageUrl("");
    toast.success("Image added to gallery");
  };

  // Remove Image
  const handleRemoveImage = (index: number) => {
    setImages((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      if (updated.length > 0 && !updated.some((img) => img.isPrimary)) {
        updated[0].isPrimary = true;
      }
      return updated;
    });
  };

  // Set Primary Image
  const handleSetPrimary = (index: number) => {
    setImages((prev) =>
      prev.map((img, i) => ({
        ...img,
        isPrimary: i === index,
      }))
    );
  };

  // Real-time Earnings & Payout Calculation
  const numPrice = Number(price) || 0;
  // 1. Calculate Gross Customer Price and Net Sales Price before VAT
  const customerPrice = vatIncluded ? numPrice : numPrice * (1 + vatRate / 100);
  const netPriceBeforeVat = vatIncluded ? numPrice / (1 + vatRate / 100) : numPrice;
  const estimatedVat = customerPrice - netPriceBeforeVat;

  // 2. Oivaly Platform Fee (10% commission on listing price)
  const platformFee = numPrice * 0.10;

  // 3. What the seller actually receives after deducting VAT remittance and Oivaly platform fee
  // Net Payout = Net revenue before VAT - Platform fee
  const sellerTakeHome = Math.max(0, netPriceBeforeVat - platformFee);

  // Handle Form Submission
  const handleSubmit = async (submitForReview: boolean) => {
    if (!name.trim()) {
      toast.error("Product name is required");
      return;
    }
    if (numPrice <= 0) {
      toast.error("Please provide a valid price greater than 0");
      return;
    }

    setIsSubmitting(true);
    try {
      const created = await sellerDashboardApi.createProduct(
        {
          name: name.trim(),
          description: description.trim() || undefined,
          categoryId: categoryId || undefined,
          sku: sku.trim() || undefined,
          price: numPrice,
          vatRate: vatRate,
          vatIncluded: vatIncluded,
          trackInventory: trackInventory,
          images: images.map((img, idx) => ({
            url: img.url,
            altText: img.altText || name,
            isPrimary: img.isPrimary,
            sortOrder: idx,
          })),
          variants: showVariants && variants.length > 0
            ? variants.map((v) => ({
                size: v.size,
                color: v.color,
                sku: v.sku,
                price: v.price,
                stockQuantity: v.stockQuantity,
                lowStockThreshold,
              }))
            : [
                {
                  sku: sku.trim() || undefined,
                  price: numPrice,
                  stockQuantity: stockQuantity,
                  lowStockThreshold: lowStockThreshold,
                },
              ],
        },
        store?.id
      );

      if (submitForReview) {
        try {
          await sellerDashboardApi.submitProductForReview(created.id, store?.id);
          toast.success(`Product "${created.name}" submitted for Platform Admin review!`);
        } catch {
          toast.warning("Product created as draft. Review submission requires admin activation.");
        }
      } else {
        toast.success(`Product "${created.name}" saved as DRAFT!`);
      }

      router.push("/seller/dashboard/products");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to create product listing";
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 w-full pb-16">
      {/* Top Header & Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="size-8 p-0 rounded-none text-muted-foreground hover:text-foreground"
          >
            <Link href="/seller/dashboard/products">
              <ArrowLeftIcon className="size-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight">
              Create New Product Listing
            </h1>
            <p className="text-xs text-muted-foreground">
              Define pricing, Finnish VAT rates, craftsmanship descriptions, and workshop stock.
            </p>
          </div>
        </div>

        {/* Action Buttons Top */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <Button
            type="button"
            variant="outline"
            disabled={isSubmitting}
            onClick={() => handleSubmit(false)}
            className="h-9 px-3.5 text-xs rounded-none border-border"
          >
            <FloppyDiskIcon className="size-3.5 mr-1.5" />
            <span>Save Draft</span>
          </Button>

          <Button
            type="button"
            disabled={isSubmitting}
            onClick={() => handleSubmit(true)}
            className="h-9 px-4 text-xs bg-brand-deep-forest hover:bg-brand-deep-forest/90 text-white rounded-none uppercase font-semibold tracking-wider shadow-xs"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="size-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Submitting...</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <PaperPlaneTiltIcon className="size-3.5" weight="bold" />
                <span>Submit for Review</span>
              </span>
            )}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Form Details (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Section 1: Basic Information */}
          <div className="p-5 bg-background border border-border/80 shadow-xs space-y-4">
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <PackageIcon className="size-4 text-primary" weight="bold" />
              <span>General Details</span>
            </h2>

            {/* Product Title */}
            <div className="space-y-1.5">
              <label htmlFor="prod-name" className="block text-xs font-semibold text-foreground">
                Product Title <span className="text-destructive">*</span>
              </label>
              <input
                id="prod-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Handcrafted Lapland Birch Kuksa Cup"
                className="w-full h-10 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Category & SKU row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="prod-cat" className="block text-xs font-semibold text-foreground">
                  Marketplace Category
                </label>
                <select
                  id="prod-cat"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="w-full h-10 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="prod-sku" className="block text-xs font-semibold text-foreground">
                    SKU Code
                  </label>
                  <button
                    type="button"
                    onClick={handleGenerateSku}
                    className="text-[10px] text-primary hover:underline font-medium"
                  >
                    Auto-generate
                  </button>
                </div>
                <input
                  id="prod-sku"
                  type="text"
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                  placeholder="KUKSA-BIRCH-001"
                  className="w-full h-10 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary font-mono"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <label htmlFor="prod-desc" className="block text-xs font-semibold text-foreground">
                Craftsmanship & Description
              </label>
              <textarea
                id="prod-desc"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your handmade item, Finnish wood/materials, sizing, care instructions, and artisan heritage..."
                className="w-full p-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary leading-relaxed"
              />
            </div>
          </div>

          {/* Section 2: Pricing & Finnish VAT */}
          <div className="p-5 bg-background border border-border/80 shadow-xs space-y-4">
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <CurrencyEurIcon className="size-4 text-emerald-600" weight="bold" />
              <span>Pricing & Finnish VAT (ALV)</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Base Price */}
              <div className="space-y-1.5">
                <label htmlFor="prod-price" className="block text-xs font-semibold text-foreground">
                  Listing Price (€) <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground">
                    €
                  </span>
                  <input
                    id="prod-price"
                    type="number"
                    step="0.01"
                    min="0"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full h-10 pl-8 pr-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary font-mono"
                  />
                </div>
              </div>

              {/* Finnish VAT Rate */}
              <div className="space-y-1.5">
                <label htmlFor="prod-vat" className="block text-xs font-semibold text-foreground">
                  Finnish VAT Rate (ALV)
                </label>
                <select
                  id="prod-vat"
                  value={vatRate}
                  onChange={(e) => setVatRate(Number(e.target.value))}
                  className="w-full h-10 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary font-mono"
                >
                  <option value={25.5}>25.5% (Standard Finnish ALV)</option>
                  <option value={14.0}>14.0% (Reduced: Food & Groceries)</option>
                  <option value={10.0}>10.0% (Cultural, Books, Artwork)</option>
                  <option value={0.0}>0.0% (Exempt / Reverse Charge)</option>
                </select>
              </div>
            </div>

            {/* VAT Included Toggle */}
            <div className="pt-2">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={vatIncluded}
                  onChange={(e) => setVatIncluded(e.target.checked)}
                  className="size-4 rounded-none border-border text-primary focus:ring-primary"
                />
                <span className="text-xs text-foreground font-medium">
                  Price already includes Finnish VAT (Standard B2C Retail)
                </span>
              </label>
            </div>
          </div>

          {/* Section 3: Inventory & Workshop Stock */}
          <div className="p-5 bg-background border border-border/80 shadow-xs space-y-4">
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <PackageIcon className="size-4 text-amber-600" weight="bold" />
              <span>Workshop Inventory</span>
            </h2>

            <div className="flex items-center justify-between pb-2">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={trackInventory}
                  onChange={(e) => setTrackInventory(e.target.checked)}
                  className="size-4 rounded-none border-border text-primary focus:ring-primary"
                />
                <span className="text-xs text-foreground font-medium">
                  Track stock reservations for this item
                </span>
              </label>
            </div>

            {trackInventory && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-border/60">
                <div className="space-y-1.5">
                  <label htmlFor="stock-qty" className="block text-xs font-semibold text-foreground">
                    Available Workshop Quantity
                  </label>
                  <input
                    id="stock-qty"
                    type="number"
                    min="0"
                    value={stockQuantity}
                    onChange={(e) => setStockQuantity(Number(e.target.value))}
                    className="w-full h-10 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="low-threshold" className="block text-xs font-semibold text-foreground">
                    Low Stock Warning Threshold
                  </label>
                  <input
                    id="low-threshold"
                    type="number"
                    min="0"
                    value={lowStockThreshold}
                    onChange={(e) => setLowStockThreshold(Number(e.target.value))}
                    className="w-full h-10 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary font-mono"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Section 4: Imagery & Product Gallery */}
          <div className="p-5 bg-background border border-border/80 shadow-xs space-y-4">
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <ImageIcon className="size-4 text-primary" weight="bold" />
              <span>Media & Gallery</span>
            </h2>

            {/* Image input & add */}
            <div className="flex gap-2">
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Paste high-res image URL (e.g. Unsplash or CDN)..."
                className="flex-1 h-10 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button
                type="button"
                onClick={handleAddImage}
                size="sm"
                className="h-10 px-4 bg-muted hover:bg-muted/80 text-foreground text-xs rounded-none border border-border"
              >
                <PlusIcon className="size-3.5 mr-1" />
                <span>Add Image</span>
              </Button>
            </div>

            {/* Gallery thumbnails */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={`group relative aspect-square border overflow-hidden rounded-none ${
                    img.isPrimary ? "border-primary ring-2 ring-primary/20" : "border-border"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.url}
                    alt={img.altText || `Image ${idx + 1}`}
                    className="size-full object-cover"
                  />

                  {/* Primary Badge */}
                  {img.isPrimary && (
                    <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-brand-deep-forest text-white text-[9px] font-semibold uppercase tracking-wider rounded-none">
                      Cover
                    </span>
                  )}

                  {/* Hover Controls */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(idx)}
                      className="self-end p-1 rounded bg-rose-600 text-white hover:bg-rose-700 transition-colors"
                      title="Remove image"
                    >
                      <TrashIcon className="size-3" />
                    </button>
                    {!img.isPrimary && (
                      <button
                        type="button"
                        onClick={() => handleSetPrimary(idx)}
                        className="py-1 px-2 bg-white text-black text-[10px] font-semibold uppercase tracking-wider rounded-none hover:bg-gray-100"
                      >
                        Set as Cover
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Real-Time Earnings Calculator (1 Col Sticky) */}
        <div className="space-y-6">
          <div className="p-5 bg-background border border-border/80 shadow-xs rounded-none sticky top-20 space-y-4">
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-2 pb-2 border-b border-border/60">
              <SparkleIcon className="size-4 text-emerald-600" weight="fill" />
              <span>Earnings & Payout Engine</span>
            </h2>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between text-muted-foreground">
                <span>Customer Checkout Price</span>
                <span className="font-mono font-semibold text-foreground">
                  €{customerPrice.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between text-muted-foreground">
                <span>
                  Estimated Finnish VAT ({vatRate}%)
                  <span className="block text-[10px] text-muted-foreground/75">
                    {vatIncluded ? "(Included in price)" : "(Added at checkout)"}
                  </span>
                </span>
                <span className="font-mono text-muted-foreground">
                  -€{estimatedVat.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between text-muted-foreground">
                <span>Net Sales Revenue (excl. VAT)</span>
                <span className="font-mono font-medium text-foreground">
                  €{netPriceBeforeVat.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between text-muted-foreground">
                <span>Oivaly Platform Fee (10%)</span>
                <span className="font-mono text-destructive">
                  -€{platformFee.toFixed(2)}
                </span>
              </div>

              <div className="pt-3 border-t border-border/80 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-foreground block">
                    Seller Net Payout
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    What you actually receive into your bank account
                  </span>
                </div>
                <span className="text-lg font-bold font-mono text-emerald-700 dark:text-emerald-300">
                  €{sellerTakeHome.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Guarantee Box */}
            <div className="mt-4 p-3 bg-muted/40 border border-border/60 rounded-none text-[11px] text-muted-foreground space-y-1.5">
              <div className="flex items-start gap-2">
                <InfoIcon className="size-3.5 text-primary shrink-0 mt-0.5" />
                <p>
                  Funds are secured on Oivaly and automatically disbursed to your verified bank account after order fulfillment.
                </p>
              </div>
            </div>

            {/* Bottom Form Actions */}
            <div className="pt-3 space-y-2">
              <Button
                type="button"
                disabled={isSubmitting}
                onClick={() => handleSubmit(true)}
                className="w-full h-11 bg-brand-deep-forest hover:bg-brand-deep-forest/90 text-white rounded-none uppercase text-xs font-semibold tracking-wider shadow-xs"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <span className="flex items-center justify-center gap-1.5">
                    <PaperPlaneTiltIcon className="size-4" weight="bold" />
                    <span>Submit Listing for Review</span>
                  </span>
                )}
              </Button>

              <Button
                type="button"
                variant="outline"
                disabled={isSubmitting}
                onClick={() => handleSubmit(false)}
                className="w-full h-9 text-xs rounded-none border-border"
              >
                <FloppyDiskIcon className="size-3.5 mr-1.5" />
                <span>Save as Draft</span>
              </Button>

              <p className="text-[10px] text-muted-foreground text-center pt-1 leading-tight">
                All seller listings are reviewed and published by a Platform Administrator before becoming visible on the marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
