"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import {
  ArrowLeftIcon,
  PackageIcon,
  CurrencyEurIcon,
  ImageIcon,
  SparkleIcon,
  CheckCircleIcon,
  FloppyDiskIcon,
  TrashIcon,
  PlusIcon,
  InfoIcon,
  ArrowSquareOutIcon,
  ClockCountdownIcon,
  WarningCircleIcon,
  PaperPlaneTiltIcon,
  LockKeyIcon,
} from "@phosphor-icons/react";
import { useSellerAuth } from "@/lib/seller-auth-context";
import { sellerDashboardApi } from "@/resources/apis/seller-dashboard.api";
import { StoreProductItem } from "@/resources/interfaces/seller-dashboard.interface";
import { env } from "@/lib/env";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

function EditProductForm() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const productId = params?.id;
  const { store } = useSellerAuth();

  const [isLoading, setIsLoading] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [originalProduct, setOriginalProduct] = React.useState<StoreProductItem | null>(null);

  // Real Categories from database
  const [categories, setCategories] = React.useState<Array<{ id: string; name: string; slug: string }>>([]);

  // Form states populated strictly from database
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [categoryId, setCategoryId] = React.useState("");
  const [sku, setSku] = React.useState("");
  const [price, setPrice] = React.useState<number | string>(0);
  const [vatRate, setVatRate] = React.useState<number>(env.defaultVatRate);
  const [vatIncluded, setVatIncluded] = React.useState(true);
  const [trackInventory, setTrackInventory] = React.useState(true);
  const [stockQuantity, setStockQuantity] = React.useState<number>(0);
  const [lowStockThreshold, setLowStockThreshold] = React.useState<number>(3);

  // Images state populated strictly from database
  const [imageUrl, setImageUrl] = React.useState("");
  const [images, setImages] = React.useState<Array<{ url: string; altText?: string; isPrimary: boolean }>>([]);

  // Load real product & categories from database
  React.useEffect(() => {
    if (!productId) return;

    async function loadData() {
      setIsLoading(true);
      try {
        const [prod, fetchedCategories] = await Promise.all([
          sellerDashboardApi.getProduct(productId, store?.id),
          sellerDashboardApi.getCategories().catch(() => []),
        ]);

        setOriginalProduct(prod);

        // Ensure product's existing category is present in category list
        let activeCategories = Array.isArray(fetchedCategories) ? [...fetchedCategories] : [];
        if (prod.category && !activeCategories.some((c) => c.id === prod.category?.id)) {
          activeCategories = [
            {
              id: prod.category.id,
              name: prod.category.name,
              slug: prod.category.slug,
            },
            ...activeCategories,
          ];
        }
        setCategories(activeCategories);

        // Populate form strictly from real database product entity
        setName(prod.name || "");
        setDescription(prod.description || "");
        setCategoryId(prod.categoryId || prod.category?.id || (activeCategories[0]?.id ?? ""));
        setSku(prod.sku || "");
        setPrice(prod.price !== undefined && prod.price !== null ? Number(prod.price) : 0);
        setVatRate(
          prod.vatRate !== undefined && prod.vatRate !== null
            ? Number(prod.vatRate)
            : env.defaultVatRate
        );
        setVatIncluded(prod.vatIncluded ?? true);
        setTrackInventory(prod.trackInventory ?? true);

        // Derive stock quantity from database variants
        if (prod.variants && prod.variants.length > 0) {
          const totalStock = prod.variants.reduce(
            (sum, v) => sum + (Number(v.stockQuantity) || 0),
            0
          );
          setStockQuantity(totalStock);
          setLowStockThreshold(Number(prod.variants[0].lowStockThreshold) || 3);
        } else {
          setStockQuantity(Number(prod.totalStock) || 0);
          setLowStockThreshold(3);
        }

        // Images strictly from database (empty if none uploaded)
        if (prod.images && prod.images.length > 0) {
          setImages(
            prod.images.map((img) => ({
              url: img.url,
              altText: img.altText || prod.name,
              isPrimary: Boolean(img.isPrimary),
            }))
          );
        } else {
          setImages([]);
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Failed to load product details from database";
        toast.error(msg);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, [productId, store?.id]);

  // Quick SKU generator (only available if product is not published)
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

  const isPublished = originalProduct?.status === "PUBLISHED";
  const currentStatus = originalProduct?.status;

  // Real-time Earnings Calculation based on configured platform fee
  const numPrice = Number(price) || 0;
  const commissionRate = (env.platformCommissionPercent || 10) / 100;
  const customerPrice = vatIncluded ? numPrice : numPrice * (1 + vatRate / 100);
  const netPriceBeforeVat = vatIncluded ? numPrice / (1 + vatRate / 100) : numPrice;
  const estimatedVat = customerPrice - netPriceBeforeVat;
  const platformFee = numPrice * commissionRate;
  const sellerTakeHome = Math.max(0, netPriceBeforeVat - platformFee);

  // Handle Save
  const handleSave = async (submitForReview = false) => {
    if (!productId || !originalProduct) return;
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
      const updatePayload: Record<string, unknown> = {
        name: name.trim(),
        description: description.trim() || undefined,
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
        variants: [
          {
            sku: isPublished ? originalProduct.sku : (sku.trim() || undefined),
            price: numPrice,
            stockQuantity: Number(stockQuantity) || 0,
            lowStockThreshold: Number(lowStockThreshold) || 3,
          },
        ],
      };

      // Only allow modifying category and SKU if NOT published
      if (!isPublished) {
        updatePayload.categoryId = categoryId || undefined;
        updatePayload.sku = sku.trim() || undefined;
      }

      const updated = await sellerDashboardApi.updateProduct(
        productId,
        updatePayload,
        store?.id
      );

      if (submitForReview) {
        await sellerDashboardApi.submitProductForReview(productId, store?.id);
        toast.success(`Product "${updated.name}" updated and submitted for Platform Admin review!`);
      } else {
        toast.success(`Product "${updated.name}" updated successfully!`);
      }

      router.push("/seller/dashboard/products");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to update product";
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="py-24 text-center text-xs text-muted-foreground space-y-3">
        <div className="size-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
        <p className="font-medium text-foreground">Loading listing details from database...</p>
      </div>
    );
  }

  if (!originalProduct) {
    return (
      <div className="py-24 text-center text-xs text-muted-foreground space-y-3">
        <PackageIcon className="size-12 mx-auto text-muted-foreground/30" />
        <p className="text-base font-semibold text-foreground">Product not found</p>
        <p>The product could not be loaded from database or you do not have permission.</p>
        <Button asChild size="sm" className="bg-brand-deep-forest text-white rounded-none">
          <Link href="/seller/dashboard/products">Back to Catalog</Link>
        </Button>
      </div>
    );
  }

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
            <div className="flex items-center gap-2">
              <h1 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight">
                Edit Product Listing
              </h1>
              {isPublished ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
                  <CheckCircleIcon className="size-3" weight="bold" />
                  <span>PUBLISHED</span>
                </span>
              ) : currentStatus === "SUBMITTED" || currentStatus === "PENDING_REVIEW" ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20">
                  <ClockCountdownIcon className="size-3" weight="bold" />
                  <span>IN REVIEW</span>
                </span>
              ) : currentStatus === "DRAFT" ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold bg-muted text-muted-foreground border border-border">
                  <span>DRAFT</span>
                </span>
              ) : currentStatus === "REJECTED" ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold bg-destructive/10 text-destructive border border-destructive/20">
                  <WarningCircleIcon className="size-3" weight="bold" />
                  <span>REJECTED</span>
                </span>
              ) : null}
            </div>
            <p className="text-xs text-muted-foreground">
              Modify basic product details, pricing, Finnish VAT rates, workshop inventory, and media.
            </p>
          </div>
        </div>

        {/* Action Buttons Top */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          {isPublished && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-9 px-3 text-xs rounded-none border-border"
            >
              <Link
                href={`/products/${originalProduct.slug || originalProduct.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowSquareOutIcon className="size-3.5 mr-1.5 text-primary" />
                <span>View Live</span>
              </Link>
            </Button>
          )}

          {(currentStatus === "DRAFT" || currentStatus === "REJECTED") && (
            <Button
              type="button"
              variant="outline"
              disabled={isSubmitting}
              onClick={() => handleSave(true)}
              className="h-9 px-3.5 text-xs rounded-none border-border font-semibold shadow-xs"
            >
              <PaperPlaneTiltIcon className="size-3.5 mr-1.5 text-primary" />
              <span>Submit for Review</span>
            </Button>
          )}

          <Button
            type="button"
            disabled={isSubmitting}
            onClick={() => handleSave(false)}
            className="h-9 px-4 text-xs bg-brand-deep-forest hover:bg-brand-deep-forest/90 text-white rounded-none uppercase font-semibold tracking-wider shadow-xs"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="size-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Saving...</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <FloppyDiskIcon className="size-3.5" weight="bold" />
                <span>Save Changes</span>
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Status Advisory Banner */}
      {isPublished ? (
        <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200 text-xs flex items-start gap-2.5">
          <CheckCircleIcon className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" weight="fill" />
          <div>
            <span className="font-semibold">Live Marketplace Listing:</span> Published by Platform Administrator. Basic edits (pricing, stock, craft description, photos) will sync directly to the live customer storefront. Category and SKU are permanently locked to preserve marketplace data integrity.
          </div>
        </div>
      ) : currentStatus === "SUBMITTED" || currentStatus === "PENDING_REVIEW" ? (
        <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-2.5">
          <ClockCountdownIcon className="size-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" weight="fill" />
          <div className="flex-1">
            <span className="font-semibold">Listing is currently in review:</span> Awaiting Platform Administrator moderation and publishing. You can edit any details while waiting for review.
          </div>
        </div>
      ) : currentStatus === "DRAFT" ? (
        <div className="p-3.5 bg-muted border border-border text-foreground text-xs flex items-start gap-2.5">
          <InfoIcon className="size-4 shrink-0 text-muted-foreground mt-0.5" />
          <div className="flex-1">
            <span className="font-semibold">Draft Listing:</span> Visible only in your workshop atelier. Click <strong>Submit for Review</strong> when you are ready for a Platform Administrator to review and publish it.
          </div>
        </div>
      ) : currentStatus === "REJECTED" ? (
        <div className="p-3.5 bg-destructive/10 border border-destructive/30 text-destructive text-xs flex items-start gap-2.5">
          <WarningCircleIcon className="size-4 shrink-0 text-destructive mt-0.5" weight="fill" />
          <div>
            <span className="font-semibold">Rejection Feedback:</span> {originalProduct.rejectionReason || "Please review the product details, Finnish VAT specifications, or imagery to meet Nordic artisan guidelines."}
          </div>
        </div>
      ) : null}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Form Details (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Section 1: Basic Information */}
          <div className="p-5 bg-background border border-border/80 shadow-xs space-y-4">
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-2 pb-2 border-b border-border/60">
              <PackageIcon className="size-4 text-primary" />
              <span>Basic Information</span>
            </h2>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">
                  Product Title <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Handmade Birch Wood Kuksa Cup"
                  className="w-full h-9 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground mb-1">
                  Detailed Description & Craft Story
                </label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the materials, Finnish workshop origin, craftsmanship techniques, and care instructions..."
                  className="w-full p-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary resize-y"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {/* Category Field */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
                      <span>Marketplace Category</span>
                      {isPublished && (
                        <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground font-mono bg-muted/80 px-1.5 py-0.5 border border-border">
                          <LockKeyIcon className="size-3 text-muted-foreground" />
                          <span>LOCKED</span>
                        </span>
                      )}
                    </label>
                  </div>
                  <select
                    value={categoryId}
                    disabled={isPublished}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="w-full h-9 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary disabled:bg-muted/70 disabled:text-muted-foreground disabled:cursor-not-allowed"
                  >
                    {categories.length === 0 && (
                      <option value="">No categories available</option>
                    )}
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  {isPublished ? (
                    <p className="text-[10px] text-muted-foreground mt-1">
                      Category cannot be changed once product is published.
                    </p>
                  ) : (
                    <p className="text-[10px] text-muted-foreground mt-1">
                      Select marketplace taxonomy category.
                    </p>
                  )}
                </div>

                {/* SKU Field */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
                      <span>Artisan SKU Code</span>
                      {isPublished && (
                        <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground font-mono bg-muted/80 px-1.5 py-0.5 border border-border">
                          <LockKeyIcon className="size-3 text-muted-foreground" />
                          <span>LOCKED</span>
                        </span>
                      )}
                    </label>
                    {!isPublished && (
                      <button
                        type="button"
                        onClick={handleGenerateSku}
                        className="text-[11px] text-primary hover:underline font-mono"
                      >
                        Regenerate
                      </button>
                    )}
                  </div>
                  <input
                    type="text"
                    value={sku}
                    disabled={isPublished}
                    onChange={(e) => setSku(e.target.value)}
                    placeholder="e.g. KUK-1092"
                    className="w-full h-9 px-3 text-xs bg-background border border-border rounded-none font-mono focus:outline-none focus:ring-1 focus:ring-primary uppercase disabled:bg-muted/70 disabled:text-muted-foreground disabled:cursor-not-allowed"
                  />
                  {isPublished ? (
                    <p className="text-[10px] text-muted-foreground mt-1">
                      SKU is locked on published listings to preserve inventory and order tracking.
                    </p>
                  ) : (
                    <p className="text-[10px] text-muted-foreground mt-1">
                      Unique stock keeping unit identifier.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Pricing & Finnish VAT */}
          <div className="p-5 bg-background border border-border/80 shadow-xs space-y-4">
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-2 pb-2 border-b border-border/60">
              <CurrencyEurIcon className="size-4 text-primary" />
              <span>Pricing & Finnish VAT Compliance</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">
                  Customer Price (€ EUR) <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-mono text-xs">
                    €
                  </span>
                  <input
                    type="number"
                    step="0.01"
                    min="0.5"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full h-9 pl-7 pr-3 text-xs bg-background border border-border rounded-none font-mono focus:outline-none focus:ring-1 focus:ring-primary font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground mb-1">
                  Finnish ALV / VAT Rate (%)
                </label>
                <select
                  value={vatRate}
                  onChange={(e) => setVatRate(Number(e.target.value))}
                  className="w-full h-9 px-3 text-xs bg-background border border-border rounded-none font-mono focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value={25.5}>25.5% (Finnish Standard 2024+)</option>
                  <option value={24}>24.0% (Legacy Standard)</option>
                  <option value={14}>14.0% (Food & Restaurant)</option>
                  <option value={10}>10.0% (Books, Culture & Transport)</option>
                  <option value={0}>0.0% (VAT Exempt / Export)</option>
                </select>
              </div>

              <div className="flex flex-col justify-end">
                <label className="flex items-center gap-2 cursor-pointer h-9 px-3 border border-border bg-muted/20">
                  <input
                    type="checkbox"
                    checked={vatIncluded}
                    onChange={(e) => setVatIncluded(e.target.checked)}
                    className="size-4 rounded-none border-border accent-primary"
                  />
                  <span className="text-xs text-foreground font-medium">
                    Price includes Finnish VAT (ALV sisältyy)
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Section 3: Inventory & Stock */}
          <div className="p-5 bg-background border border-border/80 shadow-xs space-y-4">
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-2 pb-2 border-b border-border/60">
              <PackageIcon className="size-4 text-primary" />
              <span>Workshop Inventory & Fulfillment</span>
            </h2>

            <div className="space-y-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={trackInventory}
                  onChange={(e) => setTrackInventory(e.target.checked)}
                  className="size-4 rounded-none border-border accent-primary"
                />
                <span className="text-xs text-foreground font-medium">
                  Track workshop inventory count for this product
                </span>
              </label>

              {trackInventory && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">
                      Available Stock Quantity <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={stockQuantity}
                      onChange={(e) => setStockQuantity(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full h-9 px-3 text-xs bg-background border border-border rounded-none font-mono focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <p className="text-[11px] text-muted-foreground mt-1">
                      Remaining handcrafted items ready for dispatch.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">
                      Low Stock Threshold Alert
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={lowStockThreshold}
                      onChange={(e) => setLowStockThreshold(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full h-9 px-3 text-xs bg-background border border-border rounded-none font-mono focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <p className="text-[11px] text-muted-foreground mt-1">
                      Sends restock reminder when stock dips to or below this level.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Section 4: Imagery & Workshop Photos */}
          <div className="p-5 bg-background border border-border/80 shadow-xs space-y-4">
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-2 pb-2 border-b border-border/60">
              <ImageIcon className="size-4 text-primary" />
              <span>Product Photography & Gallery</span>
            </h2>

            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://... image URL (CDN, Unsplash, or Cloudinary)"
                  className="flex-1 h-9 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <Button
                  type="button"
                  onClick={handleAddImage}
                  variant="outline"
                  className="h-9 px-3 text-xs rounded-none border-border shrink-0"
                >
                  <PlusIcon className="size-3.5 mr-1" />
                  <span>Add URL</span>
                </Button>
              </div>

              {/* Photos Grid */}
              {images.length === 0 ? (
                <div className="p-8 border border-dashed border-border/80 text-center text-xs text-muted-foreground bg-muted/10">
                  <ImageIcon className="size-8 mx-auto text-muted-foreground/40 mb-2" />
                  <p className="font-medium text-foreground">No images in gallery</p>
                  <p className="text-[11px] mt-0.5">
                    Add a photo URL above to display images in your storefront listing.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`relative group border ${
                        img.isPrimary ? "border-primary ring-1 ring-primary" : "border-border"
                      } bg-muted/20 aspect-square flex flex-col justify-between overflow-hidden`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.url}
                        alt={img.altText || `Product image ${idx + 1}`}
                        className="size-full object-cover"
                      />

                      {/* Primary Badge */}
                      {img.isPrimary && (
                        <span className="absolute top-1 left-1 bg-brand-deep-forest text-white text-[9px] font-semibold px-1.5 py-0.5 tracking-wider uppercase">
                          Primary
                        </span>
                      )}

                      {/* Hover Overlay Controls */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 p-2">
                        {!img.isPrimary && (
                          <button
                            type="button"
                            onClick={() => handleSetPrimary(idx)}
                            className="px-2 py-1 bg-white text-black text-[10px] font-medium hover:bg-neutral-100"
                          >
                            Make Cover
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(idx)}
                          className="p-1.5 bg-rose-600 text-white hover:bg-rose-700"
                          title="Delete photo"
                        >
                          <TrashIcon className="size-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
                <span>Oivaly Platform Fee ({env.platformCommissionPercent}%)</span>
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
                onClick={() => handleSave(false)}
                className="w-full h-11 bg-brand-deep-forest hover:bg-brand-deep-forest/90 text-white rounded-none uppercase text-xs font-semibold tracking-wider shadow-xs"
              >
                {isSubmitting ? (
                  <span>Saving...</span>
                ) : (
                  <span className="flex items-center justify-center gap-1.5">
                    <FloppyDiskIcon className="size-3.5" weight="bold" />
                    <span>Save Changes</span>
                  </span>
                )}
              </Button>

              {(currentStatus === "DRAFT" || currentStatus === "REJECTED") && (
                <Button
                  type="button"
                  variant="outline"
                  disabled={isSubmitting}
                  onClick={() => handleSave(true)}
                  className="w-full h-9 text-xs rounded-none border-border font-semibold"
                >
                  <PaperPlaneTiltIcon className="size-3.5 mr-1.5 text-primary" />
                  <span>Submit for Review</span>
                </Button>
              )}

              {isPublished && (
                <Button
                  asChild
                  variant="outline"
                  className="w-full h-9 text-xs rounded-none border-border"
                >
                  <Link
                    href={`/products/${originalProduct.slug || originalProduct.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowSquareOutIcon className="size-3.5 mr-1.5 text-primary" />
                    <span>View in Storefront</span>
                  </Link>
                </Button>
              )}

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

export default function EditProductPage() {
  return (
    <React.Suspense
      fallback={
        <div className="py-24 text-center text-xs text-muted-foreground space-y-3">
          <div className="size-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
          <p className="font-medium text-foreground">Loading listing details from database...</p>
        </div>
      }
    >
      <EditProductForm />
    </React.Suspense>
  );
}
