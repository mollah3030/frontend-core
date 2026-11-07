# Graph Report - multi-tanent-frontend  (2026-11-07)

## Corpus Check
- 244 files · ~117,887 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 1, .ico 1, .css 1)

## Summary
- 1231 nodes · 3243 edges · 64 communities (51 shown, 13 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.88)
- Token cost: 1,500 input · 900 output

## Community Hubs (Navigation)
- Customer Shopping Cart & Checkout
- Category Discovery & Browsing
- Global Navigation & Drawer
- Buyer Protection & Guarantees
- Customer Auth Context (JWT)
- Global Navigation & Drawer (2)
- Customer Auth Context (JWT) (2)
- Category Discovery & Browsing (2)
- Seller Atelier Auth & Session
- Interactive Form Controls & Combobox
- Scandinavian Design System UI
- Product Details & Variants
- Customer Shopping Cart & Checkout (2)
- Finnish Business ID (Y-tunnus) & ALV
- Customer Auth Context (JWT) (3)
- Scandinavian Design System UI (2)
- Scandinavian Design System UI (3)
- Category Discovery & Browsing (3)
- Scandinavian Design System UI (4)
- Seller Dashboard & Atelier Management
- Scandinavian Design System UI (5)
- Scandinavian Design System UI (6)
- Customer Auth Context (JWT) (4)
- eslint.config.mjs Module
- tsconfig.json Module
- Artisan Shop Storefronts
- Category Discovery & Browsing (4)
- Scandinavian Design System UI (7)
- Customer Account & Addresses
- Product Details & Variants (2)
- Scandinavian Design System UI (8)
- Scandinavian Design System UI (9)
- Seller Dashboard & Atelier Management (2)
- Product Details & Variants (3)
- Scandinavian Design System UI (11)
- Scandinavian Design System UI (12)
- Scandinavian Design System UI (13)
- Scandinavian Design System UI (14)
- Scandinavian Design System UI (15)
- Scandinavian Design System UI (16)
- Scandinavian Design System UI (17)
- Category Discovery & Browsing (5)
- Scandinavian Design System UI (18)
- Product Details & Variants (4)
- Scandinavian Design System UI (19)
- Global Navigation & Drawer (3)
- Global Navigation & Drawer (4)
- Seller Atelier Auth & Session (2)
- Scandinavian Design System UI (20)
- Scandinavian Design System UI (21)
- Category Discovery & Browsing (6)
- Scandinavian Design System UI (24)
- Scandinavian Design System UI (25)
- Shipping & Posti Courier Tracking
- Scandinavian Design System UI (27)
- Scandinavian Design System UI (28)
- Scandinavian Design System UI (29)
- @stripe/react-stripe-js@^7.0.0 Module
- Scandinavian Design System UI (30)

## God Nodes (most connected - your core abstractions)
1. `react` - 159 edges
2. `Button()` - 112 edges
3. `@phosphor-icons/react` - 111 edges
4. `next` - 91 edges
5. `cn` - 60 edges
6. `Badge()` - 40 edges
7. `radix-ui` - 38 edges
8. `sonner` - 33 edges
9. `Product` - 31 edges
10. `Input()` - 25 edges

## Surprising Connections (you probably didn't know these)
- `AccountLayout()` --calls--> `useAuth()`  [EXTRACTED]
  app/account/layout.tsx → lib/auth-context.tsx
- `GiftsPage()` --calls--> `ProductCard()`  [EXTRACTED]
  app/gifts/page.tsx → components/product/product-card.tsx
- `ShopProductGridProps` --references--> `Product`  [EXTRACTED]
  components/shops/shop-product-grid.tsx → resources/interfaces/product.interface.ts
- `AddressesPage()` --calls--> `Button()`  [EXTRACTED]
  app/account/addresses/page.tsx → components/ui/button.tsx
- `AddressesPage()` --calls--> `Checkbox()`  [EXTRACTED]
  app/account/addresses/page.tsx → components/ui/checkbox.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Oivaly Marketplace Frontend Architecture Phases** — docs_architecture_phase1_foundation, docs_architecture_phase2_navigation, docs_architecture_phase3_homepage, docs_architecture_phase4_discovery_search, docs_architecture_phase5_product_details, docs_architecture_phase6_seller_storefronts, docs_architecture_phase7_authentication [EXTRACTED 0.95]

## Communities (64 total, 13 thin omitted)

### Community 0 - "Customer Shopping Cart & Checkout"
Cohesion: 0.05
Nodes (61): AddressesPage(), AccountOverviewPage(), CartPage(), CheckoutContent(), CheckoutPage(), CheckoutSuccessContent(), CheckoutSuccessPage(), COOKIE_REGISTRY (+53 more)

### Community 1 - "Category Discovery & Browsing"
Cohesion: 0.07
Nodes (57): CategoryPage(), CategoryPageProps, CategoryProductsContent(), generateMetadata(), SearchPage(), SearchPageProps, SearchResultsContent(), ActiveFilters() (+49 more)

### Community 2 - "Global Navigation & Drawer"
Cohesion: 0.08
Nodes (28): FilterMobileDrawer(), MobileNavigation(), MobileNavigationProps, Sheet(), SheetClose(), SheetContent(), SheetDescription(), SheetHeader() (+20 more)

### Community 3 - "Buyer Protection & Guarantees"
Cohesion: 0.07
Nodes (22): PROTECTION_SCENARIOS, Scenario, CategoriesContent(), CategoriesIndexPage(), CategoriesSkeleton(), metadata, generateMetadata(), ProductDetailsContent() (+14 more)

### Community 4 - "Customer Auth Context (JWT)"
Cohesion: 0.10
Nodes (33): AuthContext, AuthContextType, AuthProvider(), getClientSnapshot(), getServerSnapshot(), subscribeAuth(), ACCESS_TOKEN_COOKIE, clearAuthSession() (+25 more)

### Community 5 - "Global Navigation & Drawer (2)"
Cohesion: 0.10
Nodes (30): ShopLoading(), generateMetadata(), ShopPage(), ShopPageContent(), ShopPageProps, ShopAbout(), ShopAboutProps, ShopHeader() (+22 more)

### Community 6 - "Customer Auth Context (JWT) (2)"
Cohesion: 0.08
Nodes (17): DashboardLayout(), metadata, SellerOrdersPage(), SellerOverviewPage(), SellerSettingsPage(), SellerRootPage(), metadata, SellerDashboardLayout() (+9 more)

### Community 7 - "Category Discovery & Browsing (2)"
Cohesion: 0.13
Nodes (23): EditProductForm(), EditProductPage(), BusinessVerificationResult, sellerDashboardApi, CreateStoreProductPayload, PaginatedResult, ProductStatus, StoreInventorySummary (+15 more)

### Community 8 - "Seller Atelier Auth & Session"
Cohesion: 0.12
Nodes (22): metadata, SellerForgotPasswordPage(), metadata, SellerLoginPage(), metadata, SellerResetPasswordPage(), metadata, SellerSignupPage() (+14 more)

### Community 9 - "Interactive Form Controls & Combobox"
Cohesion: 0.11
Nodes (13): ComboboxChip(), ComboboxClear(), ComboboxInput(), ComboboxTrigger(), CommandInput(), InputGroup(), InputGroupAddon(), inputGroupAddonVariants (+5 more)

### Community 10 - "Scandinavian Design System UI"
Cohesion: 0.16
Nodes (19): LoginContent(), LoginPage(), RegisterContent(), RegisterPage(), ResetPasswordContent(), ResetPasswordPage(), AuthCardLayout(), AuthCardLayoutProps (+11 more)

### Community 11 - "Product Details & Variants"
Cohesion: 0.12
Nodes (14): apiClient(), ApiError, RequestOptions, newsletterApi, NewsletterSubscribeResponse, CustomerOrderQueryParams, ApiErrorResponse, ApiMeta (+6 more)

### Community 12 - "Customer Shopping Cart & Checkout (2)"
Cohesion: 0.13
Nodes (20): ProductPurchaseActionsProps, ProductVariantsProps, CartContext, CartContextType, CartProvider(), ClientCartItem, EMPTY_CART, getClientCartSnapshot() (+12 more)

### Community 13 - "Finnish Business ID (Y-tunnus) & ALV"
Cohesion: 0.14
Nodes (17): BusinessIdValidationResult, formatFinnishVatNumber(), isValidFinnishPhone(), isValidFinnishPostalCode(), isValidFinnishVatNumber(), validateFinnishBusinessId(), Y_TUNNUS_WEIGHTS, zod@^4.6.5 (+9 more)

### Community 14 - "Customer Auth Context (JWT) (3)"
Cohesion: 0.16
Nodes (22): deleteSellerCookie(), getCookieValue(), getStoredSellerAuth(), isJwtExpired(), SELLER_AUTH_EVENT, SELLER_REFRESH_TOKEN_KEY, SELLER_SESSION_MAX_AGE_SECONDS, SELLER_STORE_KEY (+14 more)

### Community 15 - "Scandinavian Design System UI (2)"
Cohesion: 0.09
Nodes (23): dependencies, cmdk@^1.1.1, cn@^0.4.0, date-fns@^4.4.0, @hookform/resolvers@^5.9.1, next@16.4.3, next-themes@^0.4.6, @phosphor-icons/react@^2.1.10 (+15 more)

### Community 16 - "Scandinavian Design System UI (3)"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 17 - "Category Discovery & Browsing (3)"
Cohesion: 0.14
Nodes (16): CatalogProductGridProps, CATEGORY_IMAGES_MAP, CategoryDiscoveryProps, CategoryHubItem, CATEGORY_TABS, FeaturedProductsProps, ProductDetailsViewProps, ProductGalleryProps (+8 more)

### Community 18 - "Scandinavian Design System UI (4)"
Cohesion: 0.14
Nodes (17): geistMono, geistSans, jetbrainsMono, metadata, RootLayout(), Toaster(), TooltipProvider(), EMPTY_WISHLIST (+9 more)

### Community 19 - "Seller Dashboard & Atelier Management"
Cohesion: 0.22
Nodes (8): SellerProductsPage(), AccountMenu(), DropdownMenu(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuSeparator(), DropdownMenuTrigger()

### Community 20 - "Scandinavian Design System UI (5)"
Cohesion: 0.13
Nodes (7): buttonVariants, Calendar(), CalendarDayButton(), QuestionnaireNext(), QuestionnairePrevious(), QuestionnaireSkip(), QuestionnaireSubmit()

### Community 21 - "Scandinavian Design System UI (6)"
Cohesion: 0.13
Nodes (9): ButtonGroup(), ButtonGroupSeparator(), buttonGroupVariants, Field(), FieldLabel(), FieldSeparator(), fieldVariants, Separator() (+1 more)

### Community 22 - "Customer Auth Context (JWT) (4)"
Cohesion: 0.25
Nodes (12): ProfilePage(), SecurityPage(), ForgotPasswordPage(), VerifyEmailContent(), VerifyEmailPage(), Input(), Label(), useAuth() (+4 more)

### Community 23 - "eslint.config.mjs Module"
Cohesion: 0.11
Nodes (18): eslintConfig, devDependencies, eslint@^9, eslint-config-next@16.4.3, tailwindcss@^4, @tailwindcss/turbopack@^4, @types/node@^20, @types/react@^19 (+10 more)

### Community 24 - "tsconfig.json Module"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 25 - "Artisan Shop Storefronts"
Cohesion: 0.19
Nodes (7): NotFound(), ShopEmptyState(), ShopEmptyStateProps, ShopProductGrid(), ShopProductGridProps, Button(), MessageScrollerButton()

### Community 26 - "Category Discovery & Browsing (4)"
Cohesion: 0.23
Nodes (17): HomePage(), LiveCategoryDiscovery(), LiveCustomerReviews(), LiveFeaturedProducts(), LiveFeaturedSellers(), CategoryDiscovery(), CategoryDiscoverySkeleton(), CuratedCollections() (+9 more)

### Community 28 - "Customer Account & Addresses"
Cohesion: 0.18
Nodes (12): AccountMenuProps, AnnouncementBar(), AnnouncementBarProps, SearchBar(), SearchBarFallback(), SearchBarForm(), SearchBarProps, SiteHeaderProps (+4 more)

### Community 29 - "Product Details & Variants (2)"
Cohesion: 0.24
Nodes (10): ProductTabs(), Table(), TableBody(), TableCell(), TableRow(), Tabs(), TabsContent(), TabsList() (+2 more)

### Community 31 - "Scandinavian Design System UI (9)"
Cohesion: 0.12
Nodes (16): @base-ui/react@^1.9.0, embla-carousel-react@^8.6.0, react-day-picker@^10.0.2, react-dom@19.3.0, recharts@3.8.0, ignoreScripts, name, packageManager (+8 more)

### Community 32 - "Seller Dashboard & Atelier Management (2)"
Cohesion: 0.21
Nodes (11): CuratedCollectionsProps, CustomerReviewsProps, FeaturedSellersProps, DEMO_CURATED_COLLECTIONS, DEMO_CUSTOMER_REVIEWS, DEMO_FEATURED_SELLERS, DemoCollectionItem, DemoProductItem (+3 more)

### Community 34 - "Product Details & Variants (3)"
Cohesion: 0.20
Nodes (10): GIFT_CATALOG, GiftItem, GiftsPage(), MakerDetail, MAKERS_DIRECTORY, MarketplaceProductsResponse, productsApi, MarketplaceStorePreview (+2 more)

### Community 35 - "Scandinavian Design System UI (11)"
Cohesion: 0.19
Nodes (12): CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext(), CarouselOptions, CarouselPlugin (+4 more)

### Community 36 - "Scandinavian Design System UI (12)"
Cohesion: 0.15
Nodes (4): NativeSelectProps, ScrollArea(), ScrollBar(), cn

### Community 37 - "Scandinavian Design System UI (13)"
Cohesion: 0.20
Nodes (8): Marker(), markerVariants, ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants, class-variance-authority@^0.7.1, class-variance-authority

### Community 38 - "Scandinavian Design System UI (14)"
Cohesion: 0.18
Nodes (5): AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogOverlay(), AlertDialogPortal()

### Community 39 - "Scandinavian Design System UI (15)"
Cohesion: 0.22
Nodes (12): ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartStyle(), ChartTooltipContent(), getPayloadConfigFromPayload() (+4 more)

### Community 40 - "Scandinavian Design System UI (16)"
Cohesion: 0.18
Nodes (5): DrawerContent(), DrawerOverlay(), DrawerPortal(), vaul@^1.1.2, vaul

### Community 41 - "Scandinavian Design System UI (17)"
Cohesion: 0.18
Nodes (5): Item(), ItemMedia(), itemMediaVariants, ItemSeparator(), itemVariants

### Community 42 - "Category Discovery & Browsing (5)"
Cohesion: 0.24
Nodes (10): CategoryNavigation(), CategoryNavigationFallback(), CategoryNavigationList(), CategoryNavigationProps, FooterLink, FooterSection, HEADER_NAV_CONFIG, NavCategory (+2 more)

### Community 43 - "Scandinavian Design System UI (18)"
Cohesion: 0.20
Nodes (5): Attachment(), AttachmentAction(), AttachmentMedia(), attachmentMediaVariants, attachmentVariants

### Community 44 - "Product Details & Variants (4)"
Cohesion: 0.31
Nodes (5): AccountLayout(), NAV_ITEMS, ProductPurchaseActions(), QuantitySelector(), QuantitySelectorProps

### Community 45 - "Scandinavian Design System UI (19)"
Cohesion: 0.20
Nodes (6): EditorPickItem, EDITORS_PICKS_DATA, HomeHeroProps, QUICK_TAGS, TRUST_PILLS, BENEFITS

### Community 46 - "Global Navigation & Drawer (3)"
Cohesion: 0.36
Nodes (8): ConditionalFooter(), ConditionalHeader(), MarketplaceShell(), MarketplaceShellProps, SiteFooter(), SiteFooterProps, SiteHeader(), FOOTER_SECTIONS

### Community 47 - "Global Navigation & Drawer (4)"
Cohesion: 0.24
Nodes (4): NavigationMenu(), NavigationMenuTrigger(), navigationMenuTriggerStyle, NavigationMenuViewport()

### Community 48 - "Seller Atelier Auth & Session (2)"
Cohesion: 0.28
Nodes (5): NewProductPage(), VariantFormItem, env, SellerLoginFormValues, sellerLoginSchema

### Community 49 - "Scandinavian Design System UI (20)"
Cohesion: 0.28
Nodes (4): PaginationLink(), PaginationLinkProps, PaginationNext(), PaginationPrevious()

### Community 52 - "Category Discovery & Browsing (6)"
Cohesion: 0.25
Nodes (8): Architecture Phase 1: Frontend Foundation & Design System, Architecture Phase 2: Global Navigation & Category Hierarchy, Architecture Phase 3: Marketplace Homepage & Artisan Showcase, Architecture Phase 4: Product Discovery & Faceted Search, Architecture Phase 5: Product Details & Variant Selection, Architecture Phase 6: Seller Ateliers & Public Storefronts, Architecture Phase 7: Customer & Seller Authentication (PRH Y-tunnus), Oivaly Nordic Marketplace Client Frontend

### Community 54 - "Scandinavian Design System UI (24)"
Cohesion: 0.38
Nodes (4): Bubble(), BubbleReactions(), bubbleReactionsVariants, bubbleVariants

### Community 57 - "Shipping & Posti Courier Tracking"
Cohesion: 0.33
Nodes (4): DESTINATION_ZONES, DestinationZone, WEIGHT_TIERS, WeightTier

### Community 60 - "Scandinavian Design System UI (29)"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

## Knowledge Gaps
- **3 isolated node(s):** `Architecture Phase 7: Customer & Seller Authentication (PRH Y-tunnus)`, `Oivaly Nordic Marketplace Client Frontend`, `Next.js Agent Guidelines & Dev Conventions`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 437 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Buyer Protection & Guarantees` to `Customer Shopping Cart & Checkout`, `Category Discovery & Browsing`, `Global Navigation & Drawer`, `Customer Auth Context (JWT)`, `Global Navigation & Drawer (2)`, `Customer Auth Context (JWT) (2)`, `Category Discovery & Browsing (2)`, `Seller Atelier Auth & Session`, `Interactive Form Controls & Combobox`, `Scandinavian Design System UI`, `Product Details & Variants`, `Customer Shopping Cart & Checkout (2)`, `Customer Auth Context (JWT) (3)`, `Scandinavian Design System UI (2)`, `Category Discovery & Browsing (3)`, `Scandinavian Design System UI (4)`, `Seller Dashboard & Atelier Management`, `Scandinavian Design System UI (5)`, `Scandinavian Design System UI (6)`, `Customer Auth Context (JWT) (4)`, `Artisan Shop Storefronts`, `Category Discovery & Browsing (4)`, `Scandinavian Design System UI (7)`, `Customer Account & Addresses`, `Product Details & Variants (2)`, `Scandinavian Design System UI (8)`, `Scandinavian Design System UI (9)`, `Seller Dashboard & Atelier Management (2)`, `Scandinavian Design System UI (10)`, `Product Details & Variants (3)`, `Scandinavian Design System UI (11)`, `Scandinavian Design System UI (12)`, `Scandinavian Design System UI (13)`, `Scandinavian Design System UI (14)`, `Scandinavian Design System UI (15)`, `Scandinavian Design System UI (16)`, `Scandinavian Design System UI (17)`, `Category Discovery & Browsing (5)`, `Scandinavian Design System UI (18)`, `Product Details & Variants (4)`, `Scandinavian Design System UI (19)`, `Global Navigation & Drawer (3)`, `Global Navigation & Drawer (4)`, `Seller Atelier Auth & Session (2)`, `Scandinavian Design System UI (20)`, `Scandinavian Design System UI (22)`, `Scandinavian Design System UI (23)`, `Scandinavian Design System UI (24)`, `Scandinavian Design System UI (25)`, `Scandinavian Design System UI (26)`, `Shipping & Posti Courier Tracking`, `Scandinavian Design System UI (27)`?**
  _High betweenness centrality (0.413) - this node is a cross-community bridge._
- **What connects `Architecture Phase 7: Customer & Seller Authentication (PRH Y-tunnus)`, `Oivaly Nordic Marketplace Client Frontend`, `Next.js Agent Guidelines & Dev Conventions` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Customer Shopping Cart & Checkout` be split into smaller, more focused modules?**
  _Cohesion score 0.05197368421052632 - nodes in this community are weakly interconnected._
- **Why does `@phosphor-icons/react` connect `Customer Shopping Cart & Checkout` to `Category Discovery & Browsing`, `Global Navigation & Drawer`, `Buyer Protection & Guarantees`, `Global Navigation & Drawer (2)`, `Customer Auth Context (JWT) (2)`, `Category Discovery & Browsing (2)`, `Seller Atelier Auth & Session`, `Interactive Form Controls & Combobox`, `Scandinavian Design System UI`, `Product Details & Variants`, `Scandinavian Design System UI (2)`, `Category Discovery & Browsing (3)`, `Seller Dashboard & Atelier Management`, `Scandinavian Design System UI (5)`, `Customer Auth Context (JWT) (4)`, `Artisan Shop Storefronts`, `Customer Account & Addresses`, `Scandinavian Design System UI (8)`, `Scandinavian Design System UI (9)`, `Seller Dashboard & Atelier Management (2)`, `Scandinavian Design System UI (10)`, `Product Details & Variants (3)`, `Scandinavian Design System UI (11)`, `Scandinavian Design System UI (12)`, `Product Details & Variants (4)`, `Scandinavian Design System UI (19)`, `Global Navigation & Drawer (3)`, `Global Navigation & Drawer (4)`, `Seller Atelier Auth & Session (2)`, `Scandinavian Design System UI (20)`, `Scandinavian Design System UI (25)`, `Shipping & Posti Courier Tracking`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Should `Category Discovery & Browsing` be split into smaller, more focused modules?**
  _Cohesion score 0.07098765432098765 - nodes in this community are weakly interconnected._
- **Why does `cn` connect `Scandinavian Design System UI (12)` to `Customer Shopping Cart & Checkout`, `Category Discovery & Browsing`, `Global Navigation & Drawer`, `Buyer Protection & Guarantees`, `Global Navigation & Drawer (2)`, `Interactive Form Controls & Combobox`, `Scandinavian Design System UI`, `Scandinavian Design System UI (2)`, `Seller Dashboard & Atelier Management`, `Scandinavian Design System UI (5)`, `Scandinavian Design System UI (6)`, `Customer Auth Context (JWT) (4)`, `Artisan Shop Storefronts`, `Scandinavian Design System UI (7)`, `Product Details & Variants (2)`, `Scandinavian Design System UI (8)`, `Scandinavian Design System UI (9)`, `Scandinavian Design System UI (10)`, `Scandinavian Design System UI (11)`, `Scandinavian Design System UI (13)`, `Scandinavian Design System UI (14)`, `Scandinavian Design System UI (15)`, `Scandinavian Design System UI (16)`, `Scandinavian Design System UI (17)`, `Scandinavian Design System UI (18)`, `Product Details & Variants (4)`, `Global Navigation & Drawer (4)`, `Scandinavian Design System UI (20)`, `Scandinavian Design System UI (21)`, `Scandinavian Design System UI (22)`, `Scandinavian Design System UI (23)`, `Scandinavian Design System UI (24)`, `Scandinavian Design System UI (25)`, `Scandinavian Design System UI (26)`, `Scandinavian Design System UI (27)`, `Scandinavian Design System UI (28)`?**
  _High betweenness centrality (0.087) - this node is a cross-community bridge._
- **Should `Global Navigation & Drawer` be split into smaller, more focused modules?**
  _Cohesion score 0.08244897959183674 - nodes in this community are weakly interconnected._