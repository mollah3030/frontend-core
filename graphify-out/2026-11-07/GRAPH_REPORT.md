# Graph Report - multi-tanent-frontend  (2026-11-07)

## Corpus Check
- 239 files · ~119,071 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 1, .ico 1, .css 1)

## Summary
- 1234 nodes · 3245 edges · 71 communities (51 shown, 20 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7cb1ef63`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- addresses/page.tsx
- Category Discovery & Browsing
- Global Navigation & Drawer
- products/[slug]/page.tsx
- Customer Auth Context (JWT)
- shops/[slug]/page.tsx
- useSellerAuth
- Category Discovery & Browsing (2)
- Seller Atelier Auth & Session
- next
- Scandinavian Design System UI
- Product Details & Variants
- Customer Shopping Cart & Checkout (2)
- finland.ts
- Customer Auth Context (JWT) (3)
- Scandinavian Design System UI (2)
- Scandinavian Design System UI (3)
- Category Discovery & Browsing (3)
- account/page.tsx
- Seller Dashboard & Atelier Management
- Scandinavian Design System UI (5)
- Scandinavian Design System UI (6)
- Badge
- eslint.config.mjs Module
- tsconfig.json Module
- Artisan Shop Storefronts
- Category Discovery & Browsing (4)
- Scandinavian Design System UI (7)
- seller-auth-layout.tsx
- Product Details & Variants (2)
- Scandinavian Design System UI (8)
- react-day-picker
- Seller Dashboard & Atelier Management (2)
- seller-resolver.ts
- Scandinavian Design System UI (11)
- react
- toggle-group.tsx
- Scandinavian Design System UI (14)
- Scandinavian Design System UI (15)
- Scandinavian Design System UI (16)
- Scandinavian Design System UI (17)
- product-card.tsx
- Scandinavian Design System UI (18)
- site-header.tsx
- success/page.tsx
- Global Navigation & Drawer (4)
- Seller Atelier Auth & Session (2)
- Scandinavian Design System UI (20)
- Scandinavian Design System UI (21)
- Category Discovery & Browsing (6)
- Scandinavian Design System UI (24)
- Scandinavian Design System UI (25)
- Shipping & Posti Courier Tracking
- class-variance-authority
- Scandinavian Design System UI (28)
- Scandinavian Design System UI (29)
- eslint.config.mjs
- Scandinavian Design System UI (30)
- native-select.tsx
- date-fns@^4.4.0
- react-dom@19.3.0
- recharts
- shadcn@^4.21.4
- @shadcn/react
- tw-animate-css@^1.4.0

## God Nodes (most connected - your core abstractions)
1. `react` - 160 edges
2. `Button()` - 112 edges
3. `@phosphor-icons/react` - 111 edges
4. `next` - 91 edges
5. `cn` - 60 edges
6. `Badge()` - 42 edges
7. `radix-ui` - 38 edges
8. `sonner` - 37 edges
9. `Product` - 31 edges
10. `useSellerAuth()` - 25 edges

## Surprising Connections (you probably didn't know these)
- `CatalogProductGridProps` --references--> `Product`  [EXTRACTED]
  components/catalog/catalog-product-grid.tsx → resources/interfaces/product.interface.ts
- `ProductTabsProps` --references--> `Product`  [EXTRACTED]
  components/product/product-tabs.tsx → resources/interfaces/product.interface.ts
- `finnishPostalCodeSchema` --calls--> `isValidFinnishPostalCode()`  [EXTRACTED]
  resources/schemas/finland.schema.ts → lib/finland.ts
- `ForgotPasswordPage()` --calls--> `Button()`  [EXTRACTED]
  app/forgot-password/page.tsx → components/ui/button.tsx
- `LoginContent()` --calls--> `Button()`  [EXTRACTED]
  app/login/page.tsx → components/ui/button.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Oivaly Marketplace Frontend Architecture Phases** — docs_architecture_phase1_foundation, docs_architecture_phase2_navigation, docs_architecture_phase3_homepage, docs_architecture_phase4_discovery_search, docs_architecture_phase5_product_details, docs_architecture_phase6_seller_storefronts, docs_architecture_phase7_authentication [EXTRACTED 0.95]

## Communities (71 total, 20 thin omitted)

### Community 0 - "addresses/page.tsx"
Cohesion: 0.07
Nodes (28): AddressesPage(), OrderTrackingDialog(), ProductGallery(), ProductGalleryProps, ComboboxChip(), ComboboxClear(), ComboboxInput(), ComboboxTrigger() (+20 more)

### Community 1 - "Category Discovery & Browsing"
Cohesion: 0.06
Nodes (66): CategoriesContent(), CategoriesIndexPage(), CategoriesSkeleton(), metadata, CategoryPage(), CategoryPageProps, CategoryProductsContent(), generateMetadata() (+58 more)

### Community 2 - "Global Navigation & Drawer"
Cohesion: 0.05
Nodes (46): FilterMobileDrawer(), CategoryNavigation(), CategoryNavigationFallback(), CategoryNavigationList(), CategoryNavigationProps, ConditionalFooter(), ConditionalHeader(), MarketplaceShell() (+38 more)

### Community 3 - "products/[slug]/page.tsx"
Cohesion: 0.19
Nodes (15): generateMetadata(), ProductDetailsContent(), ProductPage(), ProductPageProps, ProductDetailsSkeleton(), ProductReviews(), ProductReviewsProps, RelatedProducts() (+7 more)

### Community 4 - "Customer Auth Context (JWT)"
Cohesion: 0.06
Nodes (50): geistMono, geistSans, jetbrainsMono, metadata, RootLayout(), Toaster(), TooltipProvider(), AuthContext (+42 more)

### Community 5 - "shops/[slug]/page.tsx"
Cohesion: 0.20
Nodes (14): ShopPage(), ShopPageContent(), ShopPageProps, ShopAbout(), ShopNavigation(), ShopNavigationProps, ShopPolicies(), ShopPoliciesProps (+6 more)

### Community 6 - "useSellerAuth"
Cohesion: 0.21
Nodes (12): DashboardLayout(), metadata, SellerOrdersPage(), SellerRootPage(), SellerDashboardLayout(), SellerDashboardLayoutProps, NAV_ITEMS, NavItem (+4 more)

### Community 7 - "Category Discovery & Browsing (2)"
Cohesion: 0.14
Nodes (21): SellerOverviewPage(), sellerDashboardApi, CreateStoreProductPayload, PaginatedResult, ProductStatus, StoreInventorySummary, StoreOrderCustomer, StoreOrderItem (+13 more)

### Community 8 - "Seller Atelier Auth & Session"
Cohesion: 0.15
Nodes (18): metadata, SellerResetPasswordPage(), SellerResetPasswordContent(), SellerResetPasswordForm(), @hookform/resolvers@^5.9.1, react-hook-form@^7.89.0, @hookform/resolvers, react-hook-form (+10 more)

### Community 9 - "next"
Cohesion: 0.06
Nodes (11): PROTECTION_SCENARIOS, Scenario, COOKIE_REGISTRY, CookieItem, EXTENSIVE_FAQS, FAQItem, RETURN_REASONS, ReturnReason (+3 more)

### Community 10 - "Scandinavian Design System UI"
Cohesion: 0.09
Nodes (33): ForgotPasswordPage(), LoginContent(), LoginPage(), RegisterContent(), RegisterPage(), ResetPasswordContent(), ResetPasswordPage(), AuthCardLayout() (+25 more)

### Community 11 - "Product Details & Variants"
Cohesion: 0.13
Nodes (12): CATEGORY_DEFAULT_IMAGES, categoriesApi, apiClient(), ApiError, RequestOptions, newsletterApi, NewsletterSubscribeResponse, ApiErrorResponse (+4 more)

### Community 12 - "Customer Shopping Cart & Checkout (2)"
Cohesion: 0.14
Nodes (20): ProductPurchaseActionsProps, ProductVariantsProps, CartContext, CartContextType, CartProvider(), ClientCartItem, EMPTY_CART, getClientCartSnapshot() (+12 more)

### Community 13 - "finland.ts"
Cohesion: 0.20
Nodes (4): EditorPickItem, EDITORS_PICKS_DATA, BusinessIdValidationResult, Y_TUNNUS_WEIGHTS

### Community 14 - "Customer Auth Context (JWT) (3)"
Cohesion: 0.16
Nodes (22): deleteSellerCookie(), getCookieValue(), getStoredSellerAuth(), isJwtExpired(), SELLER_AUTH_EVENT, SELLER_REFRESH_TOKEN_KEY, SELLER_SESSION_MAX_AGE_SECONDS, SELLER_STORE_KEY (+14 more)

### Community 15 - "Scandinavian Design System UI (2)"
Cohesion: 0.09
Nodes (22): dependencies, @base-ui/react@^1.9.0, class-variance-authority@^0.7.1, cmdk@^1.1.1, cn@^0.4.0, embla-carousel-react@^8.6.0, next@16.4.3, next-themes@^0.4.6 (+14 more)

### Community 16 - "Scandinavian Design System UI (3)"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 17 - "Category Discovery & Browsing (3)"
Cohesion: 0.21
Nodes (12): CATEGORY_TABS, FeaturedProductsProps, ProductDetailsViewProps, RelatedProductsProps, ShopProductGridProps, DEMO_FEATURED_PRODUCTS, StoreProductsResult, MarketplaceProductsResponse (+4 more)

### Community 18 - "account/page.tsx"
Cohesion: 0.18
Nodes (18): AccountOverviewPage(), getStatusBadge(), OrderCard(), OrderCardProps, getStepIndex(), OrderTrackerStepper(), OrderTrackerStepperProps, STEPS (+10 more)

### Community 19 - "Seller Dashboard & Atelier Management"
Cohesion: 0.15
Nodes (14): SellerProductsPage(), AccountMenu(), AccountMenuProps, SiteHeaderProps, DropdownMenu(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel() (+6 more)

### Community 20 - "Scandinavian Design System UI (5)"
Cohesion: 0.13
Nodes (7): buttonVariants, Calendar(), CalendarDayButton(), QuestionnaireNext(), QuestionnairePrevious(), QuestionnaireSkip(), QuestionnaireSubmit()

### Community 21 - "Scandinavian Design System UI (6)"
Cohesion: 0.17
Nodes (6): VerifyEmailContent(), VerifyEmailPage(), Field(), FieldLabel(), fieldVariants, Label()

### Community 22 - "Badge"
Cohesion: 0.23
Nodes (13): AccountLayout(), NAV_ITEMS, ProfilePage(), SecurityPage(), CheckoutContent(), CheckoutPage(), StripeCardDetails, StripePaymentForm() (+5 more)

### Community 23 - "eslint.config.mjs Module"
Cohesion: 0.13
Nodes (19): devDependencies, tailwindcss@^4, @tailwindcss/turbopack@^4, @types/node@^20, @types/react@^19, @types/react-dom@^19, typescript@^5, ignoreScripts (+11 more)

### Community 24 - "tsconfig.json Module"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 25 - "Artisan Shop Storefronts"
Cohesion: 0.12
Nodes (14): NotFound(), SellerSettingsPage(), HomeHeroProps, QUICK_TAGS, TRUST_PILLS, ShopEmptyState(), ShopEmptyStateProps, ShopHeader() (+6 more)

### Community 26 - "Category Discovery & Browsing (4)"
Cohesion: 0.17
Nodes (21): HomePage(), LiveCategoryDiscovery(), LiveCustomerReviews(), LiveFeaturedProducts(), LiveFeaturedSellers(), CATEGORY_IMAGES_MAP, CategoryDiscovery(), CategoryDiscoveryProps (+13 more)

### Community 28 - "seller-auth-layout.tsx"
Cohesion: 0.22
Nodes (11): metadata, SellerForgotPasswordPage(), metadata, SellerLoginPage(), metadata, SellerSignupPage(), SellerAuthLayout(), SellerAuthLayoutProps (+3 more)

### Community 29 - "Product Details & Variants (2)"
Cohesion: 0.22
Nodes (11): ProductTabs(), ProductTabsProps, Table(), TableBody(), TableCell(), TableRow(), Tabs(), TabsContent() (+3 more)

### Community 32 - "Seller Dashboard & Atelier Management (2)"
Cohesion: 0.19
Nodes (11): CuratedCollectionsProps, CustomerReviewsProps, FeaturedSellersProps, BENEFITS, DEMO_CURATED_COLLECTIONS, DEMO_CUSTOMER_REVIEWS, DEMO_FEATURED_SELLERS, DemoCollectionItem (+3 more)

### Community 34 - "seller-resolver.ts"
Cohesion: 0.13
Nodes (18): MakerDetail, MAKERS_DIRECTORY, generateMetadata(), ShopAboutProps, ShopHeaderProps, DemoProductItem, EXTRA_DEMO_SELLERS, getStoreProducts() (+10 more)

### Community 35 - "Scandinavian Design System UI (11)"
Cohesion: 0.19
Nodes (12): CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext(), CarouselOptions, CarouselPlugin (+4 more)

### Community 36 - "react"
Cohesion: 0.14
Nodes (6): InputGroupTextarea(), ScrollArea(), ScrollBar(), Textarea(), cn, react

### Community 37 - "toggle-group.tsx"
Cohesion: 0.43
Nodes (4): ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants

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
Cohesion: 0.12
Nodes (11): ButtonGroup(), ButtonGroupSeparator(), buttonGroupVariants, FieldSeparator(), Item(), ItemMedia(), itemMediaVariants, ItemSeparator() (+3 more)

### Community 42 - "product-card.tsx"
Cohesion: 0.21
Nodes (9): GIFT_CATALOG, GiftItem, GiftsPage(), CATEGORIES, DisplayProduct, NEW_ARRIVALS_FIXTURES, NewArrivalsPage(), ProductCard() (+1 more)

### Community 43 - "Scandinavian Design System UI (18)"
Cohesion: 0.20
Nodes (5): Attachment(), AttachmentAction(), AttachmentMedia(), attachmentMediaVariants, attachmentVariants

### Community 44 - "site-header.tsx"
Cohesion: 0.24
Nodes (11): CartPage(), WishlistPage(), AnnouncementBar(), AnnouncementBarProps, SiteHeader(), ProductPurchaseActions(), QuantitySelector(), QuantitySelectorProps (+3 more)

### Community 45 - "success/page.tsx"
Cohesion: 0.24
Nodes (8): CheckoutSuccessContent(), CheckoutSuccessPage(), CreateCheckoutSessionResponse, CreatePaymentIntentResponse, InvoiceSummary, PaymentRecord, paymentsApi, VerifySessionResponse

### Community 47 - "Global Navigation & Drawer (4)"
Cohesion: 0.24
Nodes (4): NavigationMenu(), NavigationMenuTrigger(), navigationMenuTriggerStyle, NavigationMenuViewport()

### Community 48 - "Seller Atelier Auth & Session (2)"
Cohesion: 0.27
Nodes (5): EditProductForm(), EditProductPage(), NewProductPage(), VariantFormItem, env

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

### Community 58 - "class-variance-authority"
Cohesion: 0.20
Nodes (5): Alert(), alertVariants, Marker(), markerVariants, class-variance-authority

### Community 60 - "Scandinavian Design System UI (29)"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 61 - "eslint.config.mjs"
Cohesion: 0.33
Nodes (5): eslintConfig, eslint@^9, eslint-config-next@16.4.3, eslint, eslint-config-next

## Knowledge Gaps
- **3 isolated node(s):** `Architecture Phase 7: Customer & Seller Authentication (PRH Y-tunnus)`, `Oivaly Nordic Marketplace Client Frontend`, `Next.js Agent Guidelines & Dev Conventions`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 437 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **20 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `addresses/page.tsx`, `Category Discovery & Browsing`, `Global Navigation & Drawer`, `products/[slug]/page.tsx`, `Customer Auth Context (JWT)`, `shops/[slug]/page.tsx`, `useSellerAuth`, `Category Discovery & Browsing (2)`, `Seller Atelier Auth & Session`, `next`, `Scandinavian Design System UI`, `Product Details & Variants`, `Customer Shopping Cart & Checkout (2)`, `finland.ts`, `Customer Auth Context (JWT) (3)`, `Scandinavian Design System UI (2)`, `Category Discovery & Browsing (3)`, `account/page.tsx`, `Seller Dashboard & Atelier Management`, `Scandinavian Design System UI (5)`, `Scandinavian Design System UI (6)`, `Badge`, `eslint.config.mjs Module`, `Artisan Shop Storefronts`, `Category Discovery & Browsing (4)`, `Scandinavian Design System UI (7)`, `seller-auth-layout.tsx`, `Product Details & Variants (2)`, `Scandinavian Design System UI (8)`, `Seller Dashboard & Atelier Management (2)`, `Scandinavian Design System UI (10)`, `seller-resolver.ts`, `Scandinavian Design System UI (11)`, `toggle-group.tsx`, `Scandinavian Design System UI (14)`, `Scandinavian Design System UI (15)`, `Scandinavian Design System UI (16)`, `Scandinavian Design System UI (17)`, `product-card.tsx`, `Scandinavian Design System UI (18)`, `site-header.tsx`, `success/page.tsx`, `card.tsx`, `Global Navigation & Drawer (4)`, `Seller Atelier Auth & Session (2)`, `Scandinavian Design System UI (20)`, `Scandinavian Design System UI (22)`, `Scandinavian Design System UI (23)`, `Scandinavian Design System UI (24)`, `Scandinavian Design System UI (25)`, `Scandinavian Design System UI (26)`, `Shipping & Posti Courier Tracking`, `class-variance-authority`, `native-select.tsx`?**
  _High betweenness centrality (0.384) - this node is a cross-community bridge._
- **What connects `Architecture Phase 7: Customer & Seller Authentication (PRH Y-tunnus)`, `Oivaly Nordic Marketplace Client Frontend`, `Next.js Agent Guidelines & Dev Conventions` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `addresses/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06948051948051948 - nodes in this community are weakly interconnected._
- **Why does `@phosphor-icons/react` connect `Artisan Shop Storefronts` to `addresses/page.tsx`, `Category Discovery & Browsing`, `Global Navigation & Drawer`, `products/[slug]/page.tsx`, `shops/[slug]/page.tsx`, `useSellerAuth`, `Category Discovery & Browsing (2)`, `Seller Atelier Auth & Session`, `next`, `Scandinavian Design System UI`, `Product Details & Variants`, `finland.ts`, `Scandinavian Design System UI (2)`, `Category Discovery & Browsing (3)`, `account/page.tsx`, `Seller Dashboard & Atelier Management`, `Scandinavian Design System UI (5)`, `Scandinavian Design System UI (6)`, `Badge`, `eslint.config.mjs Module`, `Category Discovery & Browsing (4)`, `Scandinavian Design System UI (7)`, `seller-auth-layout.tsx`, `Scandinavian Design System UI (8)`, `Seller Dashboard & Atelier Management (2)`, `Scandinavian Design System UI (10)`, `seller-resolver.ts`, `Scandinavian Design System UI (11)`, `react`, `product-card.tsx`, `site-header.tsx`, `success/page.tsx`, `Global Navigation & Drawer (4)`, `Seller Atelier Auth & Session (2)`, `Scandinavian Design System UI (20)`, `Scandinavian Design System UI (25)`, `Shipping & Posti Courier Tracking`, `native-select.tsx`?**
  _High betweenness centrality (0.130) - this node is a cross-community bridge._
- **Should `Category Discovery & Browsing` be split into smaller, more focused modules?**
  _Cohesion score 0.05666293393057111 - nodes in this community are weakly interconnected._
- **Why does `Button()` connect `Artisan Shop Storefronts` to `addresses/page.tsx`, `Category Discovery & Browsing`, `Global Navigation & Drawer`, `useSellerAuth`, `Category Discovery & Browsing (2)`, `Seller Atelier Auth & Session`, `Scandinavian Design System UI`, `Product Details & Variants`, `account/page.tsx`, `Seller Dashboard & Atelier Management`, `Scandinavian Design System UI (5)`, `Scandinavian Design System UI (6)`, `Badge`, `Category Discovery & Browsing (4)`, `seller-auth-layout.tsx`, `Scandinavian Design System UI (11)`, `react`, `Scandinavian Design System UI (14)`, `Scandinavian Design System UI (18)`, `site-header.tsx`, `success/page.tsx`, `Seller Atelier Auth & Session (2)`, `Scandinavian Design System UI (20)`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Should `Global Navigation & Drawer` be split into smaller, more focused modules?**
  _Cohesion score 0.05405405405405406 - nodes in this community are weakly interconnected._