import type { Metadata } from "next";
import Link from "next/link";
import { SparkleIcon, ArrowRightIcon, ShieldCheckIcon, PackageIcon } from "@phosphor-icons/react/dist/ssr";
import { productsApi } from "@/resources/apis/products.api";
import { ProductCard } from "@/components/product/product-card";

export const metadata: Metadata = {
  title: "New Arrivals | Oivaly Nordic Marketplace",
  description:
    "Explore the latest handcrafted arrivals from independent Nordic artisans and small workshops across Finland.",
};

const FALLBACK_NEW_ARRIVALS = [
  {
    id: "na-1",
    name: "Hand-Thrown Speckled Stoneware Mug",
    slug: "hand-thrown-speckled-stoneware-mug",
    price: 34.0,
    storeName: "Fiskars Ceramic Studio",
    storeCity: "Fiskars",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    badge: "Just Added",
    freeShipping: true,
  },
  {
    id: "na-2",
    name: "Baltic Linen Woven Table Runner",
    slug: "baltic-linen-woven-table-runner",
    price: 52.0,
    storeName: "Turku Weaver Guild",
    storeCity: "Turku",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    badge: "Small Batch",
    freeShipping: false,
  },
  {
    id: "na-3",
    name: "Kelo Pine Carved Butter Spreader & Board",
    slug: "kelo-pine-carved-butter-spreader-board",
    price: 28.0,
    storeName: "Lapland Woodcrafts",
    storeCity: "Rovaniemi",
    imageUrl: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=800&q=80",
    badge: "Handmade",
    freeShipping: true,
  },
  {
    id: "na-4",
    name: "Birch Bark Minimalist Pendant Lamp",
    slug: "birch-bark-minimalist-pendant-lamp",
    price: 185.0,
    originalPrice: 210.0,
    storeName: "Nordic Light Atelier",
    storeCity: "Helsinki",
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    badge: "Featured",
    freeShipping: true,
  },
  {
    id: "na-5",
    name: "Pure Wool Chunky Knit Throw",
    slug: "pure-wool-chunky-knit-throw",
    price: 120.0,
    storeName: "Saimaa Wool & Yarn",
    storeCity: "Mikkeli",
    imageUrl: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    badge: "Eco Wool",
    freeShipping: true,
  },
  {
    id: "na-6",
    name: "Mouth-Blown Forest Green Glass Vase",
    slug: "mouth-blown-forest-green-glass-vase",
    price: 68.0,
    storeName: "Iittala Valley Glassworks",
    storeCity: "Hämeenlinna",
    imageUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",
    badge: "New Release",
    freeShipping: false,
  },
  {
    id: "na-7",
    name: "Botanical Wild Birch Essential Oil Sauna Blend",
    slug: "botanical-wild-birch-essential-oil-sauna-blend",
    price: 24.5,
    storeName: "Kallio Apothecary",
    storeCity: "Helsinki",
    imageUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    badge: "100% Organic",
    freeShipping: false,
  },
  {
    id: "na-8",
    name: "Brushed Brass Minimalist Ear Studs",
    slug: "brushed-brass-minimalist-ear-studs",
    price: 45.0,
    storeName: "Design District Metals",
    storeCity: "Helsinki",
    imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    badge: "Artisan Made",
    freeShipping: true,
  },
];

export default async function NewArrivalsPage() {
  let products: Array<{
    id: string;
    name: string;
    slug: string;
    price: number;
    originalPrice?: number;
    storeName?: string;
    storeCity?: string;
    imageUrl?: string | null;
    badge?: string;
    freeShipping?: boolean;
  }> = [];

  try {
    const res = await productsApi.getMarketplace({ limit: 16 });
    if (res?.data && res.data.length > 0) {
      products = res.data.map((p) => ({
        id: p.id,
        name: p.name,
        slug: p.slug,
        price: Number(p.price),
        originalPrice: undefined,
        storeName: p.store?.name || "Artisan Workshop",
        storeCity: "Finland",
        imageUrl: p.images?.[0]?.url || null,
        badge: "New Arrival",
        freeShipping: Number(p.price) >= 50,
      }));
    }
  } catch {
    // Graceful fallback to curated fixtures
  }

  const displayProducts = products.length >= 4 ? products : FALLBACK_NEW_ARRIVALS;

  return (
    <div className="min-h-screen bg-background py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">New Arrivals</span>
        </nav>

        {/* Hero Banner */}
        <div className="border border-border/80 bg-brand-warm-ivory/60 dark:bg-card/60 p-6 sm:p-10 relative overflow-hidden">
          <div className="max-w-2xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground">
              <SparkleIcon className="size-3.5" weight="fill" />
              <span>Direct From Nordic Studios</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-foreground tracking-tight">
              Fresh Nordic Arrivals
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Explore freshly crafted pieces straight from independent ceramicists, woodturners, weavers, and heritage design studios across Finland and the Nordics.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border/60 text-xs">
            <span className="font-semibold text-foreground py-1">Quick Filters:</span>
            <Link
              href="/categories/home-living"
              className="px-3 py-1 bg-background border border-border/80 hover:border-primary text-muted-foreground hover:text-foreground transition-colors"
            >
              Home & Living
            </Link>
            <Link
              href="/categories/art-ceramics"
              className="px-3 py-1 bg-background border border-border/80 hover:border-primary text-muted-foreground hover:text-foreground transition-colors"
            >
              Ceramics & Art
            </Link>
            <Link
              href="/categories/jewelry-accessories"
              className="px-3 py-1 bg-background border border-border/80 hover:border-primary text-muted-foreground hover:text-foreground transition-colors"
            >
              Handmade Jewelry
            </Link>
            <Link
              href="/gifts"
              className="px-3 py-1 bg-background border border-border/80 hover:border-primary text-muted-foreground hover:text-foreground transition-colors"
            >
              Gifts & Sets
            </Link>
          </div>
        </div>

        {/* Product Count & Information */}
        <div className="flex items-center justify-between border-b border-border/60 pb-3">
          <p className="text-xs text-muted-foreground">
            Showing <strong className="text-foreground font-semibold">{displayProducts.length}</strong> unique handcrafted arrivals
          </p>
          <span className="text-xs text-muted-foreground flex items-center gap-1.5">
            <PackageIcon className="size-3.5 text-primary" />
            <span>Shipped via Posti with official tracking</span>
          </span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              slug={product.slug}
              price={product.price}
              originalPrice={product.originalPrice}
              storeName={product.storeName}
              storeCity={product.storeCity}
              imageUrl={product.imageUrl}
              badge={product.badge}
              freeShipping={product.freeShipping}
            />
          ))}
        </div>

        {/* Bottom Trust Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 bg-brand-pale-sage/20 dark:bg-muted/20 border border-border/60">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-full bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground">
              <ShieldCheckIcon className="size-5" weight="fill" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-foreground">Verified Nordic Artisans</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Every seller is vetted with an authentic Finnish Business ID (Y-tunnus) via the PRH register.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-full bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground">
              <PackageIcon className="size-5" weight="fill" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-foreground">Posti Courier Dispatch</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Direct pickup and tracked delivery across Finland and Scandinavia via Postipaketti lockers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-full bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground">
              <SparkleIcon className="size-5" weight="fill" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-foreground">14-Day EU Peace of Mind</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Funds are protected in high-security escrow until you receive and inspect your items.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
