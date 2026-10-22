/**
 * Demonstration fixtures for Nordic Marketplace Phase 3.
 *
 * NOTE: These are presentation-only demonstration items used to establish
 * the editorial Scandinavian layout patterns. When live marketplace data
 * is available from the backend API, real items are prioritized.
 */



export interface DemoProductItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  vatRate: number;
  vatIncluded: boolean;
  storeName: string;
  storeCity: string;
  storeId: string;
  categoryName: string;
  categorySlug: string;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
  isReturnEligible: boolean;
}

export interface DemoSellerItem {
  id: string;
  name: string;
  city: string;
  region: string;
  specialty: string;
  description: string;
  itemCount: number;
  avatarUrl: string;
  bannerUrl: string;
  joinedYear: number;
}

export interface DemoCollectionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  imageUrl: string;
  itemCount: number;
  tag: string;
}

export const DEMO_FEATURED_PRODUCTS: DemoProductItem[] = [
  {
    id: "demo-p1",
    name: "Handcrafted Ceramic Coffee Mug",
    slug: "handcrafted-ceramic-coffee-mug",
    price: 34.0,
    vatRate: 25.5,
    vatIncluded: true,
    storeName: "Kupittaa Ceramics",
    storeCity: "Turku",
    storeId: "store-kupittaa",
    categoryName: "Home & Living",
    categorySlug: "home-living",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Handcrafted ceramic mug with rustic matte glaze",
    badge: "Unique",
    isReturnEligible: true,
  },
  {
    id: "demo-p2",
    name: "Pure Washed Linen Tablecloth (100% Linen)",
    slug: "pure-washed-linen-tablecloth",
    price: 78.0,
    vatRate: 25.5,
    vatIncluded: true,
    storeName: "Lapland Linen Studio",
    storeCity: "Rovaniemi",
    storeId: "store-lapin-pellava",
    categoryName: "Home & Living",
    categorySlug: "home-living",
    imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Sand-grey washed linen tablecloth laid on rustic dining table",
    badge: "Linen",
    isReturnEligible: true,
  },
  {
    id: "demo-p3",
    name: "Carved Solid Oak Serving Board",
    slug: "carved-solid-oak-serving-board",
    price: 52.0,
    vatRate: 25.5,
    vatIncluded: true,
    storeName: "Helsinki Woodcraft",
    storeCity: "Helsinki",
    storeId: "store-hki-wood",
    categoryName: "Home & Living",
    categorySlug: "home-living",
    imageUrl: "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Hand-carved solid oak serving board with organic oiled finish",
    isReturnEligible: true,
  },
  {
    id: "demo-p4",
    name: "Natural Finnsheep Wool Blanket",
    slug: "natural-finnsheep-wool-blanket",
    price: 125.0,
    vatRate: 25.5,
    vatIncluded: true,
    storeName: "Nordic Wool Co.",
    storeCity: "Oulu",
    storeId: "store-pohjolan-villa",
    categoryName: "Home & Living",
    categorySlug: "home-living",
    imageUrl: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Soft domestic wool blanket draped over armchair",
    badge: "100% Wool",
    isReturnEligible: true,
  },
  {
    id: "demo-p5",
    name: "Soy Wax Candle 'Forest Mist' (Pine & Juniper)",
    slug: "soy-wax-candle-forest-mist",
    price: 24.5,
    vatRate: 25.5,
    vatIncluded: true,
    storeName: "Aura Botanical",
    storeCity: "Naantali",
    storeId: "store-aura-botanical",
    categoryName: "Nordic Living",
    categorySlug: "nordic-living",
    imageUrl: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Hand-poured soy wax candle in amber glass jar",
    isReturnEligible: true,
  },
  {
    id: "demo-p6",
    name: "Hand-Forged Sterling Silver Ring",
    slug: "hand-forged-sterling-silver-ring",
    price: 89.0,
    vatRate: 25.5,
    vatIncluded: true,
    storeName: "Kallio Silversmiths",
    storeCity: "Helsinki",
    storeId: "store-kallio-silver",
    categoryName: "Jewelry & Accessories",
    categorySlug: "jewelry-accessories",
    imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Forged 925 sterling silver band ring with textured finish",
    badge: "Eco Silver",
    isReturnEligible: true,
  },
  {
    id: "demo-p7",
    name: "Mouth-Blown Minimalist Glass Vase",
    slug: "mouth-blown-glass-vase",
    price: 64.0,
    vatRate: 25.5,
    vatIncluded: true,
    storeName: "Nuutajärvi Glassworks",
    storeCity: "Urjala",
    storeId: "store-nuutajarvi",
    categoryName: "Art & Ceramics",
    categorySlug: "art-ceramics",
    imageUrl: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Forest-green mouth-blown glass vase bathed in natural light",
    isReturnEligible: true,
  },
  {
    id: "demo-p8",
    name: "Vegetable-Tanned Leather Card Holder",
    slug: "vegetable-tanned-leather-card-holder",
    price: 45.0,
    vatRate: 25.5,
    vatIncluded: true,
    storeName: "Saimaa Leather Works",
    storeCity: "Savonlinna",
    storeId: "store-saimaa-leather",
    categoryName: "Jewelry & Accessories",
    categorySlug: "jewelry-accessories",
    imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Vegetable-tanned hand-stitched minimal leather card wallet",
    isReturnEligible: true,
  },
];

export const DEMO_FEATURED_SELLERS: DemoSellerItem[] = [
  {
    id: "store-kupittaa",
    name: "Kupittaa Ceramics",
    city: "Turku",
    region: "Southwest Finland",
    specialty: "Hand-thrown stoneware & studio glazes",
    description: "Crafting everyday ceramic wares in my riverside studio. Each cup and bowl is an individual piece combining function and Scandinavian form.",
    itemCount: 24,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    bannerUrl: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=600&auto=format&fit=crop",
    joinedYear: 2024,
  },
  {
    id: "store-hki-wood",
    name: "Helsinki Woodcraft",
    city: "Helsinki",
    region: "Uusimaa",
    specialty: "Nordic solid hardwood joinery",
    description: "Sustainable woodwork made from Finnish oak, birch, and ash. Finished with food-safe natural cold-pressed oils.",
    itemCount: 18,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    bannerUrl: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=600&auto=format&fit=crop",
    joinedYear: 2023,
  },
  {
    id: "store-lapin-pellava",
    name: "Lapland Linen Studio",
    city: "Rovaniemi",
    region: "Lapland",
    specialty: "Artisanal pure linen textiles",
    description: "Timeless, softened linen goods for dining, home, and sauna rituals. Natural linen crafted to endure for generations.",
    itemCount: 32,
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    bannerUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop",
    joinedYear: 2024,
  },
  {
    id: "store-pohjolan-villa",
    name: "Nordic Wool Co.",
    city: "Oulu",
    region: "Northern Ostrobothnia",
    specialty: "100% natural Finnsheep wool",
    description: "Blankets, beanies, and wool scarves spun and woven from regional heritage flocks without harsh synthetic chemicals.",
    itemCount: 15,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    bannerUrl: "https://images.unsplash.com/photo-1528458876885-b152d13ecb34?q=80&w=600&auto=format&fit=crop",
    joinedYear: 2025,
  },
];

export const DEMO_CURATED_COLLECTIONS: DemoCollectionItem[] = [
  {
    id: "col-kitchen",
    title: "Nordic Dining & Kitchen",
    subtitle: "Artisanal Tableware",
    description: "Oak boards, stoneware ceramics, and washed linen textiles for slow breakfasts and shared dinners.",
    slug: "nordic-dining",
    imageUrl: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=800&auto=format&fit=crop",
    itemCount: 48,
    tag: "Dining",
  },
  {
    id: "col-warmth",
    title: "Warmth & Natural Living",
    subtitle: "Hygge & Tactile Comfort",
    description: "Pure wool throws, hand-poured botanical candles, and natural textures designed for cozy living.",
    slug: "warmth-natural-living",
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
    itemCount: 36,
    tag: "Comfort",
  },
  {
    id: "col-artisan",
    title: "The Maker's Studio",
    subtitle: "Studio Craft & Pottery",
    description: "Explore unique small-batch creations and thoughtful craft pieces from independent makers.",
    slug: "artisan-craft",
    imageUrl: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=800&auto=format&fit=crop",
    itemCount: 52,
    tag: "Artisan Craft",
  },
];
