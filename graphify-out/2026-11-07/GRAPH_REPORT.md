# Graph Report - multi-tanent-frontend  (2026-11-07)

## Corpus Check
- 239 files · ~119,122 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 1, .ico 1, .css 1)

## Summary
- 1235 nodes · 3246 edges · 70 communities (52 shown, 18 thin omitted)
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
- app/layout.tsx
- seller-auth-context.tsx
- Seller Atelier Auth & Session
- next
- Button
- client.ts
- Customer Shopping Cart & Checkout (2)
- finland.ts
- categories/page.tsx
- Scandinavian Design System UI (2)
- Scandinavian Design System UI (3)
- Product
- category-navigation.tsx
- Seller Dashboard & Atelier Management
- Scandinavian Design System UI (5)
- Scandinavian Design System UI (6)
- marketplace-shell.tsx
- eslint.config.mjs Module
- tsconfig.json Module
- message-scroller.tsx
- Category Discovery & Browsing (4)
- Scandinavian Design System UI (7)
- shop-policies.tsx
- Product Details & Variants (2)
- Scandinavian Design System UI (8)
- package.json
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
- shop-product-grid.tsx
- Global Navigation & Drawer (4)
- api-response.interface.ts
- Scandinavian Design System UI (20)
- Scandinavian Design System UI (21)
- Category Discovery & Browsing (6)
- Scandinavian Design System UI (24)
- Scandinavian Design System UI (25)
- cn
- Shipping & Posti Courier Tracking
- alert.tsx
- Scandinavian Design System UI (28)
- Scandinavian Design System UI (29)
- eslint.config.mjs
- Scandinavian Design System UI (30)
- native-select.tsx
- marker.tsx
- cookies/page.tsx
- recharts
- help/page.tsx
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
- `ShopProductGridProps` --references--> `Product`  [EXTRACTED]
  components/shops/shop-product-grid.tsx → resources/interfaces/product.interface.ts
- `StoreProductsResult` --references--> `Product`  [EXTRACTED]
  lib/seller-resolver.ts → resources/interfaces/product.interface.ts
- `AccountLayout()` --calls--> `useAuth()`  [EXTRACTED]
  app/account/layout.tsx → lib/auth-context.tsx
- `RootLayout()` --calls--> `MarketplaceShell()`  [EXTRACTED]
  app/layout.tsx → components/layout/marketplace-shell.tsx
- `CatalogPaginationProps` --references--> `CatalogFilterState`  [EXTRACTED]
  components/catalog/catalog-pagination.tsx → lib/search-url.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Oivaly Marketplace Frontend Architecture Phases** — docs_architecture_phase1_foundation, docs_architecture_phase2_navigation, docs_architecture_phase3_homepage, docs_architecture_phase4_discovery_search, docs_architecture_phase5_product_details, docs_architecture_phase6_seller_storefronts, docs_architecture_phase7_authentication [EXTRACTED 0.95]

## Communities (70 total, 18 thin omitted)

### Community 0 - "addresses/page.tsx"
Cohesion: 0.08
Nodes (13): ComboboxChip(), ComboboxClear(), ComboboxInput(), ComboboxTrigger(), CommandInput(), InputGroup(), InputGroupAddon(), inputGroupAddonVariants (+5 more)

### Community 1 - "Category Discovery & Browsing"
Cohesion: 0.07
Nodes (57): CategoryPage(), CategoryPageProps, CategoryProductsContent(), generateMetadata(), SearchPage(), SearchPageProps, SearchResultsContent(), ActiveFilters() (+49 more)

### Community 2 - "Global Navigation & Drawer"
Cohesion: 0.08
Nodes (26): FilterMobileDrawer(), MobileNavigation(), Sheet(), SheetClose(), SheetContent(), SheetDescription(), SheetHeader(), SheetOverlay() (+18 more)

### Community 3 - "products/[slug]/page.tsx"
Cohesion: 0.14
Nodes (18): generateMetadata(), ProductDetailsContent(), ProductPage(), ProductPageProps, ProductDetailsSkeleton(), ProductReviews(), ProductReviewsProps, RelatedProducts() (+10 more)

### Community 4 - "Customer Auth Context (JWT)"
Cohesion: 0.10
Nodes (33): AuthContext, AuthContextType, AuthProvider(), getClientSnapshot(), getServerSnapshot(), subscribeAuth(), ACCESS_TOKEN_COOKIE, clearAuthSession() (+25 more)

### Community 5 - "shops/[slug]/page.tsx"
Cohesion: 0.18
Nodes (14): generateMetadata(), ShopPage(), ShopPageContent(), ShopPageProps, ShopAbout(), ShopHeader(), subscribeStorage(), ShopNavigation() (+6 more)

### Community 6 - "app/layout.tsx"
Cohesion: 0.14
Nodes (17): geistMono, geistSans, jetbrainsMono, metadata, RootLayout(), Toaster(), TooltipProvider(), EMPTY_WISHLIST (+9 more)

### Community 7 - "seller-auth-context.tsx"
Cohesion: 0.05
Nodes (62): DashboardLayout(), metadata, SellerOrdersPage(), SellerOverviewPage(), EditProductForm(), EditProductPage(), NewProductPage(), VariantFormItem (+54 more)

### Community 8 - "Seller Atelier Auth & Session"
Cohesion: 0.11
Nodes (24): metadata, SellerForgotPasswordPage(), metadata, SellerLoginPage(), metadata, SellerResetPasswordPage(), metadata, SellerSignupPage() (+16 more)

### Community 9 - "next"
Cohesion: 0.12
Nodes (3): metadata, nextConfig, next

### Community 10 - "Button"
Cohesion: 0.05
Nodes (91): AddressesPage(), AccountOverviewPage(), ProfilePage(), SecurityPage(), CartPage(), CheckoutContent(), CheckoutPage(), CheckoutSuccessContent() (+83 more)

### Community 11 - "client.ts"
Cohesion: 0.15
Nodes (13): MakerDetail, MAKERS_DIRECTORY, apiClient(), ApiError, RequestOptions, newsletterApi, NewsletterSubscribeResponse, CustomerOrderQueryParams (+5 more)

### Community 12 - "Customer Shopping Cart & Checkout (2)"
Cohesion: 0.18
Nodes (15): CartContext, CartProvider(), ClientCartItem, EMPTY_CART, getClientCartSnapshot(), getServerCartSnapshot(), mapBackendCartToItems(), saveCart() (+7 more)

### Community 13 - "finland.ts"
Cohesion: 0.12
Nodes (19): EditorPickItem, EDITORS_PICKS_DATA, BusinessIdValidationResult, formatFinnishVatNumber(), isValidFinnishPhone(), isValidFinnishPostalCode(), isValidFinnishVatNumber(), validateFinnishBusinessId() (+11 more)

### Community 14 - "categories/page.tsx"
Cohesion: 0.29
Nodes (7): CategoriesContent(), CategoriesIndexPage(), CategoriesSkeleton(), metadata, ShopLoading(), SidebarMenuSkeleton(), Skeleton()

### Community 15 - "Scandinavian Design System UI (2)"
Cohesion: 0.10
Nodes (21): dependencies, @base-ui/react@^1.9.0, cn@^0.4.0, embla-carousel-react@^8.6.0, @hookform/resolvers@^5.9.1, next@16.4.3, next-themes@^0.4.6, @phosphor-icons/react@^2.1.10 (+13 more)

### Community 16 - "Scandinavian Design System UI (3)"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 17 - "Product"
Cohesion: 0.16
Nodes (15): CatalogProductGridProps, CATEGORY_IMAGES_MAP, CategoryDiscoveryProps, CategoryHubItem, FeaturedProductsProps, ProductDetailsViewProps, ProductPurchaseActionsProps, ProductTabsProps (+7 more)

### Community 18 - "category-navigation.tsx"
Cohesion: 0.31
Nodes (8): CategoryNavigation(), CategoryNavigationFallback(), CategoryNavigationList(), CategoryNavigationProps, FooterLink, FooterSection, NavCategory, PROVISIONAL_CATEGORIES

### Community 19 - "Seller Dashboard & Atelier Management"
Cohesion: 0.15
Nodes (14): SellerProductsPage(), AccountMenu(), AccountMenuProps, SiteHeaderProps, DropdownMenu(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel() (+6 more)

### Community 20 - "Scandinavian Design System UI (5)"
Cohesion: 0.13
Nodes (7): buttonVariants, Calendar(), CalendarDayButton(), QuestionnaireNext(), QuestionnairePrevious(), QuestionnaireSkip(), QuestionnaireSubmit()

### Community 21 - "Scandinavian Design System UI (6)"
Cohesion: 0.13
Nodes (9): ButtonGroup(), ButtonGroupSeparator(), buttonGroupVariants, Field(), FieldLabel(), FieldSeparator(), fieldVariants, Separator() (+1 more)

### Community 22 - "marketplace-shell.tsx"
Cohesion: 0.33
Nodes (8): ConditionalFooter(), ConditionalHeader(), isBareLayoutRoute(), MarketplaceShell(), MarketplaceShellProps, SiteFooter(), SiteFooterProps, FOOTER_SECTIONS

### Community 23 - "eslint.config.mjs Module"
Cohesion: 0.15
Nodes (13): devDependencies, tailwindcss@^4, @tailwindcss/turbopack@^4, @types/node@^20, @types/react@^19, @types/react-dom@^19, typescript@^5, tailwindcss (+5 more)

### Community 24 - "tsconfig.json Module"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 25 - "message-scroller.tsx"
Cohesion: 0.22
Nodes (3): MessageScrollerButton(), @shadcn/react@^0.3.1, @shadcn/react

### Community 26 - "Category Discovery & Browsing (4)"
Cohesion: 0.23
Nodes (17): HomePage(), LiveCategoryDiscovery(), LiveCustomerReviews(), LiveFeaturedProducts(), LiveFeaturedSellers(), CategoryDiscovery(), CategoryDiscoverySkeleton(), CuratedCollections() (+9 more)

### Community 27 - "Scandinavian Design System UI (7)"
Cohesion: 0.12
Nodes (3): ScrollArea(), ScrollBar(), radix-ui

### Community 28 - "shop-policies.tsx"
Cohesion: 0.54
Nodes (6): ShopPolicies(), ShopPoliciesProps, Accordion(), AccordionContent(), AccordionItem(), AccordionTrigger()

### Community 29 - "Product Details & Variants (2)"
Cohesion: 0.24
Nodes (10): ProductTabs(), Table(), TableBody(), TableCell(), TableRow(), Tabs(), TabsContent(), TabsList() (+2 more)

### Community 31 - "package.json"
Cohesion: 0.12
Nodes (16): cmdk@^1.1.1, date-fns@^4.4.0, react-day-picker@^10.0.2, react-dom@19.3.0, @stripe/react-stripe-js@^7.0.0, ignoreScripts, name, packageManager (+8 more)

### Community 32 - "Seller Dashboard & Atelier Management (2)"
Cohesion: 0.14
Nodes (14): CuratedCollectionsProps, CustomerReviewsProps, FeaturedSellersProps, HomeHeroProps, QUICK_TAGS, TRUST_PILLS, BENEFITS, DEMO_CURATED_COLLECTIONS (+6 more)

### Community 34 - "seller-resolver.ts"
Cohesion: 0.19
Nodes (11): ShopAboutProps, ShopHeaderProps, EXTRA_DEMO_SELLERS, getStoreProducts(), mapDemoProductItemToProduct(), StoreProductsFilterOptions, StoreProductsResult, CartItem (+3 more)

### Community 35 - "Scandinavian Design System UI (11)"
Cohesion: 0.19
Nodes (12): CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext(), CarouselOptions, CarouselPlugin (+4 more)

### Community 36 - "react"
Cohesion: 0.15
Nodes (5): PROTECTION_SCENARIOS, Scenario, RETURN_REASONS, ReturnReason, react

### Community 37 - "toggle-group.tsx"
Cohesion: 0.33
Nodes (6): ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants, class-variance-authority@^0.7.1, class-variance-authority

### Community 38 - "Scandinavian Design System UI (14)"
Cohesion: 0.18
Nodes (5): AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogOverlay(), AlertDialogPortal()

### Community 39 - "Scandinavian Design System UI (15)"
Cohesion: 0.22
Nodes (12): ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartStyle(), ChartTooltipContent(), getPayloadConfigFromPayload() (+4 more)

### Community 40 - "Scandinavian Design System UI (16)"
Cohesion: 0.22
Nodes (3): DrawerContent(), DrawerOverlay(), DrawerPortal()

### Community 41 - "Scandinavian Design System UI (17)"
Cohesion: 0.18
Nodes (5): Item(), ItemMedia(), itemMediaVariants, ItemSeparator(), itemVariants

### Community 42 - "product-card.tsx"
Cohesion: 0.14
Nodes (12): AccountLayout(), NAV_ITEMS, GIFT_CATALOG, GiftItem, GiftsPage(), CATEGORIES, DisplayProduct, NEW_ARRIVALS_FIXTURES (+4 more)

### Community 43 - "Scandinavian Design System UI (18)"
Cohesion: 0.20
Nodes (5): Attachment(), AttachmentAction(), AttachmentMedia(), attachmentMediaVariants, attachmentVariants

### Community 44 - "site-header.tsx"
Cohesion: 0.27
Nodes (9): AnnouncementBar(), AnnouncementBarProps, MobileNavigationProps, SearchBar(), SearchBarFallback(), SearchBarForm(), SearchBarProps, SiteHeader() (+1 more)

### Community 45 - "shop-product-grid.tsx"
Cohesion: 0.47
Nodes (4): ShopEmptyState(), ShopEmptyStateProps, ShopProductGrid(), ShopProductGridProps

### Community 47 - "Global Navigation & Drawer (4)"
Cohesion: 0.24
Nodes (4): NavigationMenu(), NavigationMenuTrigger(), navigationMenuTriggerStyle, NavigationMenuViewport()

### Community 48 - "api-response.interface.ts"
Cohesion: 0.33
Nodes (5): ApiErrorResponse, ApiMeta, ApiResponse, PaginatedResponse, PaginationParams

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

### Community 61 - "eslint.config.mjs"
Cohesion: 0.33
Nodes (5): eslintConfig, eslint@^9, eslint-config-next@16.4.3, eslint, eslint-config-next

## Knowledge Gaps
- **3 isolated node(s):** `Architecture Phase 7: Customer & Seller Authentication (PRH Y-tunnus)`, `Oivaly Nordic Marketplace Client Frontend`, `Next.js Agent Guidelines & Dev Conventions`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 437 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **18 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `addresses/page.tsx`, `Category Discovery & Browsing`, `Global Navigation & Drawer`, `products/[slug]/page.tsx`, `Customer Auth Context (JWT)`, `shops/[slug]/page.tsx`, `app/layout.tsx`, `seller-auth-context.tsx`, `Seller Atelier Auth & Session`, `Button`, `client.ts`, `Customer Shopping Cart & Checkout (2)`, `finland.ts`, `categories/page.tsx`, `Scandinavian Design System UI (2)`, `Product`, `category-navigation.tsx`, `Seller Dashboard & Atelier Management`, `Scandinavian Design System UI (5)`, `Scandinavian Design System UI (6)`, `marketplace-shell.tsx`, `message-scroller.tsx`, `Category Discovery & Browsing (4)`, `Scandinavian Design System UI (7)`, `shop-policies.tsx`, `Product Details & Variants (2)`, `Scandinavian Design System UI (8)`, `package.json`, `Seller Dashboard & Atelier Management (2)`, `Scandinavian Design System UI (10)`, `Scandinavian Design System UI (11)`, `toggle-group.tsx`, `Scandinavian Design System UI (14)`, `Scandinavian Design System UI (15)`, `Scandinavian Design System UI (16)`, `Scandinavian Design System UI (17)`, `product-card.tsx`, `Scandinavian Design System UI (18)`, `site-header.tsx`, `shop-product-grid.tsx`, `card.tsx`, `Global Navigation & Drawer (4)`, `Scandinavian Design System UI (20)`, `Scandinavian Design System UI (22)`, `Scandinavian Design System UI (23)`, `Scandinavian Design System UI (24)`, `Scandinavian Design System UI (25)`, `cn`, `Shipping & Posti Courier Tracking`, `alert.tsx`, `native-select.tsx`, `marker.tsx`, `cookies/page.tsx`, `help/page.tsx`?**
  _High betweenness centrality (0.394) - this node is a cross-community bridge._
- **What connects `Architecture Phase 7: Customer & Seller Authentication (PRH Y-tunnus)`, `Oivaly Nordic Marketplace Client Frontend`, `Next.js Agent Guidelines & Dev Conventions` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `addresses/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08258258258258258 - nodes in this community are weakly interconnected._
- **Why does `@phosphor-icons/react` connect `Button` to `addresses/page.tsx`, `Category Discovery & Browsing`, `Global Navigation & Drawer`, `products/[slug]/page.tsx`, `shops/[slug]/page.tsx`, `seller-auth-context.tsx`, `Seller Atelier Auth & Session`, `next`, `client.ts`, `finland.ts`, `Scandinavian Design System UI (2)`, `Product`, `Seller Dashboard & Atelier Management`, `Scandinavian Design System UI (5)`, `marketplace-shell.tsx`, `message-scroller.tsx`, `shop-policies.tsx`, `Scandinavian Design System UI (8)`, `package.json`, `Seller Dashboard & Atelier Management (2)`, `Scandinavian Design System UI (10)`, `Scandinavian Design System UI (11)`, `react`, `product-card.tsx`, `site-header.tsx`, `shop-product-grid.tsx`, `Global Navigation & Drawer (4)`, `Scandinavian Design System UI (20)`, `Scandinavian Design System UI (25)`, `cn`, `Shipping & Posti Courier Tracking`, `native-select.tsx`, `cookies/page.tsx`, `help/page.tsx`?**
  _High betweenness centrality (0.112) - this node is a cross-community bridge._
- **Should `Category Discovery & Browsing` be split into smaller, more focused modules?**
  _Cohesion score 0.07098765432098765 - nodes in this community are weakly interconnected._
- **Why does `cn` connect `cn` to `addresses/page.tsx`, `Category Discovery & Browsing`, `Global Navigation & Drawer`, `products/[slug]/page.tsx`, `Button`, `categories/page.tsx`, `Scandinavian Design System UI (2)`, `Seller Dashboard & Atelier Management`, `Scandinavian Design System UI (5)`, `Scandinavian Design System UI (6)`, `message-scroller.tsx`, `Scandinavian Design System UI (7)`, `shop-policies.tsx`, `Product Details & Variants (2)`, `Scandinavian Design System UI (8)`, `package.json`, `Scandinavian Design System UI (10)`, `Scandinavian Design System UI (11)`, `toggle-group.tsx`, `Scandinavian Design System UI (14)`, `Scandinavian Design System UI (15)`, `Scandinavian Design System UI (16)`, `Scandinavian Design System UI (17)`, `product-card.tsx`, `Scandinavian Design System UI (18)`, `card.tsx`, `Global Navigation & Drawer (4)`, `Scandinavian Design System UI (20)`, `Scandinavian Design System UI (21)`, `Scandinavian Design System UI (22)`, `Scandinavian Design System UI (23)`, `Scandinavian Design System UI (24)`, `Scandinavian Design System UI (25)`, `alert.tsx`, `Scandinavian Design System UI (28)`, `native-select.tsx`, `marker.tsx`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **Should `Global Navigation & Drawer` be split into smaller, more focused modules?**
  _Cohesion score 0.0841813135985199 - nodes in this community are weakly interconnected._