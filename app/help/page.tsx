"use client";

import * as React from "react";
import Link from "next/link";
import {
  QuestionIcon,
  PackageIcon,
  ArrowsClockwiseIcon,
  CreditCardIcon,
  StorefrontIcon,
  EnvelopeSimpleIcon,
  MagnifyingGlassIcon,
  CaretDownIcon,
} from "@phosphor-icons/react";

interface FAQItem {
  q: string;
  a: string;
  category: "orders" | "shipping" | "returns" | "payments" | "sellers";
}

const FAQS: FAQItem[] = [
  {
    category: "orders",
    q: "How do I track my order?",
    a: "As soon as the artisan dispatches your package, you will receive an email containing an official Finnish Posti tracking code (starting with JJFI...). You can track your parcel live on posti.fi or through your Oivaly account orders dashboard.",
  },
  {
    category: "orders",
    q: "Can I cancel or modify an order after placing it?",
    a: "Because each piece is prepared or crafted in an independent studio, please contact the seller or our customer support immediately within 2 hours of checkout. If the studio has not begun bespoke fabrication or booked courier dispatch, the order can be cancelled with a 100% refund.",
  },
  {
    category: "shipping",
    q: "What shipping carrier do you use in Finland?",
    a: "All domestic orders are fulfilled via Posti, Finland's premier logistics provider. Deliveries are typically sent via Postipaketti to your nearest Posti parcel locker or service point, with automated SMS notifications upon arrival.",
  },
  {
    category: "shipping",
    q: "How long does shipping take?",
    a: "Ready-to-ship items are typically dispatched by artisans within 1–2 business days. In transit via Posti, domestic deliveries take 1–3 business days. For made-to-order ceramics or bespoke woodwork, specific craft lead times are detailed on the individual product page.",
  },
  {
    category: "returns",
    q: "What is your return policy?",
    a: "Under EU consumer statutory rights, you have 14 days from the date of delivery to withdraw from your purchase and return the item in its original, undamaged condition. Once received by the artisan, your refund is released within 3–5 business days.",
  },
  {
    category: "returns",
    q: "Are customized or personalized items eligible for return?",
    a: "In accordance with Finnish and EU law, custom bespoke commissions (such as items engraved with personal names or crafted to unique non-standard dimensions) cannot be returned unless they arrive damaged or defective.",
  },
  {
    category: "payments",
    q: "Are Finnish VAT (ALV) taxes included in the price?",
    a: "Yes. All retail prices listed on Oivaly are in Euros (€) and inclusive of the standard Finnish VAT (ALV 25.5%) where applicable. No hidden fees or unexpected surcharges are added at checkout.",
  },
  {
    category: "payments",
    q: "How does Oivaly's Escrow Buyer Protection work?",
    a: "When you pay via Stripe, card, or bank transfer, your funds are safely held in high-security escrow for 14 days following verified delivery. Funds are only released to the maker once you have received and inspected your order.",
  },
  {
    category: "sellers",
    q: "How are makers verified before selling?",
    a: "Every seller on Oivaly must submit a verified Finnish Business ID (Y-tunnus) or official Scandinavian corporate entity. We validate every registration in real time via the Finnish Patent and Registration Office (PRH / YTJ) database before approving any storefront.",
  },
  {
    category: "sellers",
    q: "What commission fee does Oivaly charge artisans?",
    a: "Oivaly charges a transparent 10% platform fee only upon completed sales. There are zero monthly listing fees, zero setup costs, and zero subscription charges for independent makers.",
  },
];

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const [openItems, setOpenItems] = React.useState<Record<number, boolean>>({ 0: true });

  const toggleItem = (idx: number) => {
    setOpenItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = activeCategory === "all" || faq.category === activeCategory;
    const matchesQuery =
      searchQuery.trim() === "" ||
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-background py-8 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">Help Center & FAQ</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground">
            <QuestionIcon className="size-4" weight="fill" />
            <span>Customer Service & Support</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight">
            How can we help you?
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Find quick answers regarding delivery via Posti, order tracking, returns, escrow buyer protection, and artisan support.
          </p>

          {/* Search Bar */}
          <div className="pt-4 relative max-w-lg mx-auto">
            <MagnifyingGlassIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. Posti tracking, returns, ALV 25.5%)..."
              className="w-full h-11 pl-10 pr-4 text-xs bg-card border border-border/80 rounded-none focus:outline-none focus:ring-1 focus:ring-primary shadow-xs"
            />
          </div>
        </div>

        {/* Topic Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3.5 py-1.5 border transition-colors cursor-pointer ${
              activeCategory === "all"
                ? "bg-brand-deep-forest text-white border-brand-deep-forest font-semibold"
                : "bg-card border-border/80 text-muted-foreground hover:text-foreground"
            }`}
          >
            All Questions
          </button>
          <button
            onClick={() => setActiveCategory("orders")}
            className={`px-3.5 py-1.5 border transition-colors cursor-pointer ${
              activeCategory === "orders"
                ? "bg-brand-deep-forest text-white border-brand-deep-forest font-semibold"
                : "bg-card border-border/80 text-muted-foreground hover:text-foreground"
            }`}
          >
            Orders & Tracking
          </button>
          <button
            onClick={() => setActiveCategory("shipping")}
            className={`px-3.5 py-1.5 border transition-colors cursor-pointer ${
              activeCategory === "shipping"
                ? "bg-brand-deep-forest text-white border-brand-deep-forest font-semibold"
                : "bg-card border-border/80 text-muted-foreground hover:text-foreground"
            }`}
          >
            Shipping & Posti
          </button>
          <button
            onClick={() => setActiveCategory("returns")}
            className={`px-3.5 py-1.5 border transition-colors cursor-pointer ${
              activeCategory === "returns"
                ? "bg-brand-deep-forest text-white border-brand-deep-forest font-semibold"
                : "bg-card border-border/80 text-muted-foreground hover:text-foreground"
            }`}
          >
            Returns & Refunds
          </button>
          <button
            onClick={() => setActiveCategory("payments")}
            className={`px-3.5 py-1.5 border transition-colors cursor-pointer ${
              activeCategory === "payments"
                ? "bg-brand-deep-forest text-white border-brand-deep-forest font-semibold"
                : "bg-card border-border/80 text-muted-foreground hover:text-foreground"
            }`}
          >
            Payments & VAT
          </button>
          <button
            onClick={() => setActiveCategory("sellers")}
            className={`px-3.5 py-1.5 border transition-colors cursor-pointer ${
              activeCategory === "sellers"
                ? "bg-brand-deep-forest text-white border-brand-deep-forest font-semibold"
                : "bg-card border-border/80 text-muted-foreground hover:text-foreground"
            }`}
          >
            For Sellers
          </button>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3 max-w-3xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-xs text-muted-foreground bg-card border border-border/80">
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another term or contact our support team below.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = !!openItems[idx];
              return (
                <div
                  key={faq.q}
                  className="bg-card border border-border/80 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-foreground">
                      {faq.q}
                    </span>
                    <CaretDownIcon
                      className={`size-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-0 text-xs text-muted-foreground leading-relaxed border-t border-border/40 mt-1 pt-3 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Contact Support Channels */}
        <div className="border border-border/80 bg-brand-warm-ivory dark:bg-card p-6 sm:p-10 max-w-3xl mx-auto">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-lg font-serif font-bold text-foreground">Still have questions?</h2>
            <p className="text-xs text-muted-foreground">Our Helsinki customer support team is available Monday through Friday, 9:00 - 17:00 EET.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/contact"
              className="p-4 bg-background border border-border/80 hover:border-primary transition-colors flex items-center gap-3 group"
            >
              <div className="size-10 rounded-full bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground flex items-center justify-center shrink-0">
                <EnvelopeSimpleIcon className="size-5" weight="fill" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors block">
                  Send a Message
                </span>
                <span className="text-[11px] text-muted-foreground">Fill our quick support form</span>
              </div>
            </Link>

            <Link
              href="/shipping"
              className="p-4 bg-background border border-border/80 hover:border-primary transition-colors flex items-center gap-3 group"
            >
              <div className="size-10 rounded-full bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground flex items-center justify-center shrink-0">
                <PackageIcon className="size-5" weight="fill" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors block">
                  Shipping & Posti Guide
                </span>
                <span className="text-[11px] text-muted-foreground">View delivery times & lockers</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

