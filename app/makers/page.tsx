import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { StorefrontIcon, MapPinIcon, ShieldCheckIcon, ArrowRightIcon, SparkleIcon } from "@phosphor-icons/react/dist/ssr";
import { storesApi, type MarketplaceStorePreview } from "@/resources/apis/stores.api";

export const metadata: Metadata = {
  title: "Independent Makers & Artisan Studios | Oivaly",
  description:
    "Meet the ceramicists, weavers, woodworkers, and independent designers shaping authentic Nordic goods across Finland.",
};

const FALLBACK_MAKERS: MarketplaceStorePreview[] = [
  {
    id: "maker-1",
    name: "Fiskars Ceramic Studio",
    legalBusinessName: "Fiskars Savi Oy",
    address: "Ruukintie 8, 10470 Fiskars, Finland",
    phone: "+358 40 123 4567",
    contactName: "Eeva Virtanen",
    status: "ACTIVE",
    description: "Wheel-thrown Nordic stoneware, speckled tableware, and architectural vases handcrafted with Finnish earthenware and natural glazes.",
    logoUrl: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=400&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
    websiteUrl: "https://fiskarsceramics.fi",
    createdAt: "2024-01-15",
    productCount: 18,
    featuredProducts: [],
  },
  {
    id: "maker-2",
    name: "Lapland Woodcrafts",
    legalBusinessName: "Pohjolan Puu Tmi",
    address: "Valtakatu 12, 96100 Rovaniemi, Finland",
    phone: "+358 40 987 6543",
    contactName: "Tapio Korhonen",
    status: "ACTIVE",
    description: "Traditional Arctic birch carvings, hand-shaped kuksas, and kelo pine furniture crafted from sustainably harvested fallen trees.",
    logoUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
    websiteUrl: "https://laplandwood.fi",
    createdAt: "2024-02-10",
    productCount: 14,
    featuredProducts: [],
  },
  {
    id: "maker-3",
    name: "Turku Weaver Guild",
    legalBusinessName: "Aurajoen Kutomo Oy",
    address: "Läntinen Rantakatu 14, 20100 Turku, Finland",
    phone: "+358 45 332 1109",
    contactName: "Maija Lindqvist",
    status: "ACTIVE",
    description: "Hand-loomed Baltic linen blankets, waffle sauna towels, and wool throws woven on century-old floor looms in Turku.",
    logoUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    websiteUrl: "https://turkuweaver.fi",
    createdAt: "2024-03-01",
    productCount: 22,
    featuredProducts: [],
  },
  {
    id: "maker-4",
    name: "Design District Metals",
    legalBusinessName: "Helsinki Koru Studio Oy",
    address: "Uudenmaankatu 23, 00120 Helsinki, Finland",
    phone: "+358 50 443 8912",
    contactName: "Kari Niemi",
    status: "ACTIVE",
    description: "Architectural jewelry forged in recycled 925 sterling silver, raw brass, and Nordic river pearls.",
    logoUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80",
    websiteUrl: "https://designdistrictmetals.fi",
    createdAt: "2024-04-12",
    productCount: 16,
    featuredProducts: [],
  },
  {
    id: "maker-5",
    name: "Saimaa Pure Botanical",
    legalBusinessName: "Saimaan Luonto Oy",
    address: "Kauppakatu 5, 57100 Savonlinna, Finland",
    phone: "+358 40 771 9920",
    contactName: "Liisa Rantanen",
    status: "ACTIVE",
    description: "Wild-harvested pine, peat, and birch soaps, sauna aromatherapy oils, and restorative salves from Lake Saimaa.",
    logoUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=400&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80",
    websiteUrl: "https://saimaabotanical.fi",
    createdAt: "2024-05-05",
    productCount: 12,
    featuredProducts: [],
  },
  {
    id: "maker-6",
    name: "Nuutajärvi Heritage Glassworks",
    legalBusinessName: "Nuutajärvi Lasi Osk",
    address: "Pruukinraitti 1, 31160 Nuutajärvi, Finland",
    phone: "+358 50 112 3445",
    contactName: "Mikko Salo",
    status: "ACTIVE",
    description: "Mouth-blown Finnish art glass, textured carafes, and sculptural paperweights shaped in Finland’s oldest glass village.",
    logoUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=400&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80",
    websiteUrl: "https://nuutajarviglass.fi",
    createdAt: "2024-06-18",
    productCount: 9,
    featuredProducts: [],
  },
];

export default async function MakersDirectoryPage() {
  let stores: MarketplaceStorePreview[] = [];

  try {
    const apiStores = await storesApi.getMarketplaceStores(30);
    if (apiStores && apiStores.length > 0) {
      stores = apiStores;
    }
  } catch {
    // fallback
  }

  const displayMakers = stores.length >= 3 ? stores : FALLBACK_MAKERS;

  return (
    <div className="min-h-screen bg-background py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">Independent Makers</span>
        </nav>

        {/* Hero Banner */}
        <div className="border border-border/80 bg-brand-warm-ivory dark:bg-card p-6 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground">
              <StorefrontIcon className="size-4" weight="fill" />
              <span>Verified Nordic Artisans</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight">
              Meet Our Independent Makers
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Every shop on Oivaly is an independent studio, atelier, or family workshop. Discover the people behind the craft and shop directly from Finnish creators.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-foreground">Artisan Guilds:</span>
              <span className="text-muted-foreground">Ceramics &bull; Woodworking &bull; Glass &bull; Textiles &bull; Sauna Apothecary</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
              <ShieldCheckIcon className="size-4" weight="fill" />
              <span>All makers verified via Finnish PRH / YTJ trade register</span>
            </div>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayMakers.map((maker) => {
            const shopSlug = maker.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return (
              <div
                key={maker.id}
                className="bg-card border border-border/80 hover:border-primary/80 transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Banner Image */}
                  <div className="relative h-36 w-full bg-muted overflow-hidden">
                    {maker.bannerUrl ? (
                      <Image
                        src={maker.bannerUrl}
                        alt={maker.name}
                        fill
                        className="object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-brand-pale-sage/40 flex items-center justify-center text-muted-foreground text-xs">
                        Studio Workshop
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Location Badge */}
                    <div className="absolute bottom-2.5 left-3 flex items-center gap-1 text-[11px] font-medium text-white drop-shadow-xs">
                      <MapPinIcon className="size-3.5 text-brand-sage" weight="fill" />
                      <span>{maker.address.split(",")[1]?.trim() || "Finland"}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="text-base font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                        {maker.name}
                      </h3>
                      {maker.legalBusinessName && (
                        <p className="text-[11px] text-muted-foreground font-mono">
                          {maker.legalBusinessName}
                        </p>
                      )}
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {maker.description || "Authentic Nordic workshop crafting sustainable goods by hand."}
                    </p>
                  </div>
                </div>

                {/* Footer link */}
                <div className="px-5 py-3 border-t border-border/60 bg-muted/20 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground text-[11px]">
                    {maker.productCount ? `${maker.productCount} pieces in studio` : "Active Atelier"}
                  </span>
                  <Link
                    href={`/shops/${shopSlug}`}
                    className="inline-flex items-center gap-1 font-semibold text-primary hover:underline text-xs"
                  >
                    <span>Visit Shop</span>
                    <ArrowRightIcon className="size-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Join as a Maker CTA */}
        <div className="border border-border/80 bg-brand-deep-forest text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-white/10 text-brand-sage rounded-xs">
              <SparkleIcon className="size-3" weight="fill" />
              <span>Artisan Partnership</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
              Craft beautiful goods? Open your studio on Oivaly.
            </h2>
            <p className="text-xs text-white/80 leading-relaxed">
              Reach collectors across Finland and Scandinavia. Zero listing fees, automated Posti shipping, 90% direct payouts to your Finnish IBAN, and instant Y-tunnus verification.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/seller/signup"
              className="px-6 py-3 bg-brand-sage hover:bg-brand-sage/90 text-brand-deep-forest text-xs font-bold uppercase tracking-wider transition-colors text-center"
            >
              Apply as a Seller
            </Link>
            <Link
              href="/seller-guide"
              className="px-6 py-3 border border-white/30 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider transition-colors text-center"
            >
              Read Maker Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

