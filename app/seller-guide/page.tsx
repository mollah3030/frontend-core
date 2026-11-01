import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpenIcon,
  StorefrontIcon,
  CameraIcon,
  CurrencyEurIcon,
  PackageIcon,
  BankIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Seller Handbook & Artisan Guide | Oivaly",
  description:
    "Everything you need to know about opening an artisan atelier on Oivaly: Finnish Business ID (Y-tunnus) verification, photography, ALV 25.5% tax, Posti shipping, and payouts.",
};

export default function SellerGuidePage() {
  return (
    <div className="min-h-screen bg-background py-8 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">Seller Handbook</span>
        </nav>

        {/* Hero */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground">
            <BookOpenIcon className="size-4" weight="fill" />
            <span>Artisan Atelier Manual</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight">
            The Oivaly Seller Handbook
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Welcome to Oivaly. We built this platform to give independent Nordic creators the technical, logistics, and payment infrastructure needed to build a thriving craft business.
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="space-y-8">
          {/* Chapter 1: Onboarding & Y-tunnus */}
          <div className="p-6 bg-card border border-border/80 space-y-3">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground font-mono font-bold flex items-center justify-center text-xs">
                01
              </span>
              <h2 className="text-lg font-serif font-bold text-foreground">
                Artisan Registration & Finnish Y-tunnus Verification
              </h2>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed pl-11">
              To preserve authentic quality and consumer trust, all sellers must hold an official registered business entity in Finland (Toiminimi, Osakeyhtiö, or Osuuskunta) or Scandinavia. During signup, your Finnish Business ID (Y-tunnus) is verified in real time against the PRH / YTJ trade registry. Once submitted, our team reviews your atelier application within 24 hours.
            </p>
          </div>

          {/* Chapter 2: Photography & Storytelling */}
          <div className="p-6 bg-card border border-border/80 space-y-3">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground font-mono font-bold flex items-center justify-center text-xs">
                02
              </span>
              <h2 className="text-lg font-serif font-bold text-foreground">
                Photography & Listing Best Practices
              </h2>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed pl-11">
              High-resolution photography taken in diffused, natural daylight is essential. We recommend at least 3–4 photos per piece: a clean hero shot on neutral wood or linen, a close-up highlighting craft texture (glaze crackle, wood grain, stitch details), and a scale photo with familiar objects. Include exact dimensions in centimeters and detailed material care instructions.
            </p>
          </div>

          {/* Chapter 3: Pricing & VAT */}
          <div className="p-6 bg-card border border-border/80 space-y-3">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground font-mono font-bold flex items-center justify-center text-xs">
                03
              </span>
              <h2 className="text-lg font-serif font-bold text-foreground">
                Pricing, Platform Commission & Finnish ALV (25.5%)
              </h2>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed pl-11">
              Oivaly charges a transparent 10% commission fee only when a sale is successfully completed. There are zero listing fees or monthly subscriptions. When listing items, you can specify whether your price includes standard Finnish VAT (ALV 25.5%) or whether your studio operates under the small business VAT relief threshold (alv-alarajahuojennus).
            </p>
          </div>

          {/* Chapter 4: Shipping with Posti */}
          <div className="p-6 bg-card border border-border/80 space-y-3">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground font-mono font-bold flex items-center justify-center text-xs">
                04
              </span>
              <h2 className="text-lg font-serif font-bold text-foreground">
                Automated Courier Booking with Posti
              </h2>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed pl-11">
              Our seller portal integrates directly with Posti. When an order arrives, you click &ldquo;Auto-Book Posti Courier&rdquo; to generate an official Posti parcel barcode (JJFI...) and address waybill. You can drop off packages at any of the 3,000+ Posti parcel lockers or request a studio pickup. Customers are automatically notified with the tracking link.
            </p>
          </div>

          {/* Chapter 5: Payouts */}
          <div className="p-6 bg-card border border-border/80 space-y-3">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground font-mono font-bold flex items-center justify-center text-xs">
                05
              </span>
              <h2 className="text-lg font-serif font-bold text-foreground">
                High-Security Escrow & Direct Bank Payouts
              </h2>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed pl-11">
              Customer funds are held in secure escrow for 14 days following verified delivery to honor EU statutory consumer protections. Once cleared, your 90% net earnings are automatically transferred directly to your Finnish / SEPA bank IBAN account. You can monitor upcoming clearances in your Studio Financials dashboard.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="border border-border/80 bg-brand-pale-sage/30 dark:bg-muted/30 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-serif font-bold text-foreground">
              Ready to Share Your Craft?
            </h3>
            <p className="text-xs text-muted-foreground">
              Join dozens of Nordic makers already showcasing their work on Oivaly.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/seller/signup"
              className="px-5 py-2.5 bg-brand-deep-forest text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-deep-forest/90 transition-colors text-center"
            >
              Start Seller Application
            </Link>
            <Link
              href="/seller/login"
              className="px-5 py-2.5 bg-background border border-border text-foreground text-xs font-semibold uppercase tracking-wider hover:border-primary transition-colors text-center"
            >
              Sign In to Atelier
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

