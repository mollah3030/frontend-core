import type { Metadata } from "next";
import Link from "next/link";
import { GiftIcon, HeartIcon, TagIcon, SparkleIcon, FireIcon } from "@phosphor-icons/react/dist/ssr";
import { ProductCard } from "@/components/product/product-card";
import { productsApi } from "@/resources/apis/products.api";

export const metadata: Metadata = {
  title: "Gift Ideas & Handcrafted Sets | Oivaly",
  description:
    "Discover thoughtful, timeless Nordic gifts crafted by independent artisans. Unique ceramics, textiles, wooden heirlooms, and sauna luxuries.",
};

const GIFT_COLLECTIONS = [
  {
    title: "For the Nordic Home",
    desc: "Ceramic vessels, linen textiles & hand-poured candles.",
    href: "/categories/home-living",
    icon: GiftIcon,
  },
  {
    title: "For Sauna & Wellness",
    desc: "Organic birch whisks, tar soaps & linen seat covers.",
    href: "/categories/nordic-living",
    icon: FireIcon,
  },
  {
    title: "Artisan Heirlooms",
    desc: "Curly birch woodwork & blown studio glassware.",
    href: "/categories/art-ceramics",
    icon: SparkleIcon,
  },
  {
    title: "Handmade Adornments",
    desc: "Silver, brass & Baltic amber jewelry.",
    href: "/categories/jewelry-accessories",
    icon: HeartIcon,
  },
];

const CURATED_GIFTS = [
  {
    id: "gift-1",
    name: "Hand-Carved Finnish Kuksa Drinking Cup",
    slug: "hand-carved-finnish-kuksa-drinking-cup",
    price: 49.0,
    storeName: "Lapland Birchworks",
    storeCity: "Inari",
    imageUrl: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=800&q=80",
    badge: "Popular Gift",
    freeShipping: true,
  },
  {
    id: "gift-2",
    name: "Smoked Birch & Peat Soy Candle",
    slug: "smoked-birch-peat-soy-candle",
    price: 26.0,
    storeName: "Helsinki Flame Studio",
    storeCity: "Helsinki",
    imageUrl: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    badge: "Under €30",
    freeShipping: false,
  },
  {
    id: "gift-3",
    name: "Woven Heavy Linen Kitchen Towel Set",
    slug: "woven-heavy-linen-kitchen-towel-set",
    price: 38.0,
    storeName: "Pohjanmaa Linen Guild",
    storeCity: "Vaasa",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    badge: "Host Gift",
    freeShipping: false,
  },
  {
    id: "gift-4",
    name: "Ceramic Drip Coffee Pour-Over Set",
    slug: "ceramic-drip-coffee-pour-over-set",
    price: 58.0,
    storeName: "Kallio Potters Co.",
    storeCity: "Helsinki",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    badge: "Design Pick",
    freeShipping: true,
  },
  {
    id: "gift-5",
    name: "Handmade Sauna Bucket & Birch Ladle",
    slug: "handmade-sauna-bucket-birch-ladle",
    price: 84.0,
    storeName: "Saimaa Sauna Craft",
    storeCity: "Savonlinna",
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    badge: "Sauna Classic",
    freeShipping: true,
  },
  {
    id: "gift-6",
    name: "Mouth-Blown Clear Glass Water Carafe",
    slug: "mouth-blown-clear-glass-water-carafe",
    price: 72.0,
    storeName: "Nuutajärvi Heritage Glass",
    storeCity: "Urjala",
    imageUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",
    badge: "Heirloom",
    freeShipping: true,
  },
  {
    id: "gift-7",
    name: "Organic Forest Pine Honey & Wooden Dipper",
    slug: "organic-forest-pine-honey-wooden-dipper",
    price: 19.5,
    storeName: "Kainuu Forest Apiaries",
    storeCity: "Kajaani",
    imageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    badge: "Under €25",
    freeShipping: false,
  },
  {
    id: "gift-8",
    name: "Solid Reclaimed Oak Serving Board",
    slug: "solid-reclaimed-oak-serving-board",
    price: 64.0,
    storeName: "Tampere Woodworkers",
    storeCity: "Tampere",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    badge: "Best Seller",
    freeShipping: true,
  },
];

export default async function GiftsPage() {
  let products = CURATED_GIFTS;

  try {
    const res = await productsApi.getMarketplace({ limit: 8 });
    if (res?.data && res.data.length >= 4) {
      products = res.data.map((p, idx) => ({
        id: p.id,
        name: p.name,
        slug: p.slug,
        price: Number(p.price),
        storeName: p.store?.name || "Nordic Artisan Studio",
        storeCity: "Finland",
        imageUrl: p.images?.[0]?.url || CURATED_GIFTS[idx % CURATED_GIFTS.length].imageUrl,
        badge: "Gift Choice",
        freeShipping: Number(p.price) >= 50,
      }));
    }
  } catch {
    // Graceful fallback
  }

  return (
    <div className="min-h-screen bg-background py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">Gift Ideas</span>
        </nav>

        {/* Hero Section */}
        <div className="border border-border/80 bg-brand-warm-ivory dark:bg-card p-6 sm:p-12 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground">
            <GiftIcon className="size-4" weight="fill" />
            <span>Curated Artisan Gift Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight">
            Thoughtful Nordic Gifts
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Give a piece of timeless craftsmanship. Each creation on Oivaly is shaped with intention by independent creators in small Scandinavian workshops.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-muted-foreground mr-1">Shop by budget:</span>
            <span className="px-3 py-1 bg-background border border-border/70 font-mono text-foreground font-medium">Under €30</span>
            <span className="px-3 py-1 bg-background border border-border/70 font-mono text-foreground font-medium">€30 – €75</span>
            <span className="px-3 py-1 bg-background border border-border/70 font-mono text-foreground font-medium">€75 – €150</span>
            <span className="px-3 py-1 bg-background border border-border/70 font-mono text-foreground font-medium">Heirloom / €150+</span>
          </div>
        </div>

        {/* Curated Categories */}
        <div className="space-y-4">
          <h2 className="text-lg font-serif font-bold text-foreground">Explore Gift Themes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GIFT_COLLECTIONS.map((c) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.title}
                  href={c.href}
                  className="p-5 bg-card border border-border/70 hover:border-primary transition-all duration-200 group space-y-2"
                >
                  <div className="size-10 rounded-full bg-brand-pale-sage/60 dark:bg-muted text-brand-deep-forest dark:text-foreground flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="size-5" weight="fill" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {c.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Curated Product Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-border/60 pb-3">
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground">Artisan Gift Selections</h2>
              <p className="text-xs text-muted-foreground">Handcrafted pieces ready to bring warmth to any celebration.</p>
            </div>
            <Link
              href="/categories"
              className="text-xs font-semibold text-primary hover:underline"
            >
              Browse All Categories &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                name={p.name}
                slug={p.slug}
                price={p.price}
                storeName={p.storeName}
                storeCity={p.storeCity}
                imageUrl={p.imageUrl}
                badge={p.badge}
                freeShipping={p.freeShipping}
              />
            ))}
          </div>
        </div>

        {/* Gift Wrapping & Packaging Guarantee */}
        <div className="border border-border/80 bg-brand-pale-sage/30 dark:bg-muted/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <SparkleIcon className="size-4 text-primary" weight="fill" />
              <span>Complimentary Studio Handwritten Note & Eco-Packaging</span>
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Every artisan on Oivaly packages items with care using plastic-free, recyclable materials. Add a gift note at checkout and the maker will hand-write your personal message on Finnish archival cardstock.
            </p>
          </div>
          <Link
            href="/seller/signup"
            className="shrink-0 px-5 py-2.5 bg-brand-deep-forest text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-deep-forest/90 transition-colors"
          >
            Sell Your Gifts on Oivaly
          </Link>
        </div>
      </div>
    </div>
  );
}

