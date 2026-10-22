import * as React from "react";
import {
  HomeHero,
  CategoryDiscovery,
  FeaturedProducts,
  FeaturedProductsSkeleton,
  CuratedCollections,
  FeaturedSellers,
  MarketplaceBenefits,
  StoryHighlight,
} from "@/components/home";
import { productsApi } from "@/resources/apis/products.api";
import type { Product } from "@/resources/interfaces/product.interface";

/**
 * Async data streaming component for featured marketplace products.
 * Wrapped in Suspense so Next.js Partial Prerendering can statically cache
 * the rest of the page layout immediately.
 */
async function LiveFeaturedProducts() {
  let realProducts: Product[] = [];

  try {
    const response = await productsApi.getMarketplace({ limit: 8 });
    if (response && Array.isArray(response.data)) {
      realProducts = response.data;
    }
  } catch {
    // Graceful fallback: homepage remains resilient even if the backend is temporarily offline
  }

  return <FeaturedProducts realProducts={realProducts} />;
}

/**
 * Homepage for Nordic Marketplace.
 * Server-rendered React component integrating live marketplace inventory
 * with Scandinavian editorial discovery sections.
 */
export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Editorial Hero Section */}
      <HomeHero />

      {/* 2. Visual Category Discovery */}
      <CategoryDiscovery />

      {/* 3. Curated Featured Products Grid (with Suspense streaming) */}
      <React.Suspense fallback={<FeaturedProductsSkeleton />}>
        <LiveFeaturedProducts />
      </React.Suspense>

      {/* 4. Scandinavian Curated Living Collections */}
      <CuratedCollections />

      {/* 5. Meet the Makers / Featured Independent Sellers */}
      <FeaturedSellers />

      {/* 6. Marketplace Standards & Trust Guarantees */}
      <MarketplaceBenefits />

      {/* 7. Nordic Craft Story & Philosophy */}
      <StoryHighlight />
    </div>
  );
}
