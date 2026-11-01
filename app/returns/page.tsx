import type { Metadata } from "next";
import Link from "next/link";
import { ArrowsClockwiseIcon, ShieldCheckIcon, CheckCircleIcon, WarningCircleIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Returns & Refunds Policy | Oivaly",
  description:
    "Information on our 14-day European statutory right of withdrawal, prepaid Posti returns, and prompt refunds.",
};

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-background py-8 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">Returns & Refunds</span>
        </nav>

        {/* Hero */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground">
            <ArrowsClockwiseIcon className="size-4" weight="bold" />
            <span>Hassle-Free European Returns</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight">
            Returns & Refunds
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
            We want you to treasure every handcrafted piece. Under Finnish Consumer Protection Law and European Union statutory guidelines, you have 14 days from delivery to request a return.
          </p>
        </div>

        {/* 5-Step Return Process */}
        <div className="space-y-6">
          <h2 className="text-lg font-serif font-bold text-foreground">How to Complete a Return in 5 Easy Steps</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-card border border-border/80 space-y-2">
              <span className="size-6 rounded-full bg-brand-deep-forest text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="font-bold text-foreground">Notify Within 14 Days</h3>
              <p className="text-muted-foreground leading-relaxed">
                Log into your Oivaly account or email support@oivaly.fi with your order number within 14 days of receiving your parcel.
              </p>
            </div>

            <div className="p-4 bg-card border border-border/80 space-y-2">
              <span className="size-6 rounded-full bg-brand-deep-forest text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="font-bold text-foreground">Get Posti Return Code</h3>
              <p className="text-muted-foreground leading-relaxed">
                We provide a digital Posti return label or 6-digit locker return code. No printer is needed for automated locker returns.
              </p>
            </div>

            <div className="p-4 bg-card border border-border/80 space-y-2">
              <span className="size-6 rounded-full bg-brand-deep-forest text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="font-bold text-foreground">Repack Safely</h3>
              <p className="text-muted-foreground leading-relaxed">
                Place the item securely inside its original packaging with all protective honeycomb wrapping to prevent breakage during transit.
              </p>
            </div>

            <div className="p-4 bg-card border border-border/80 space-y-2">
              <span className="size-6 rounded-full bg-brand-deep-forest text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
              <h3 className="font-bold text-foreground">Drop Off at Posti</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deposit the package at any convenient Posti SmartPost locker, Posti service point, or R-Kioski in Finland.
              </p>
            </div>

            <div className="p-4 bg-card border border-border/80 space-y-2 sm:col-span-2 lg:col-span-1">
              <span className="size-6 rounded-full bg-brand-deep-forest text-white font-mono font-bold flex items-center justify-center text-xs">5</span>
              <h3 className="font-bold text-foreground">Rapid Escrow Refund</h3>
              <p className="text-muted-foreground leading-relaxed">
                Once the studio inspects the returned piece, your refund is processed within 3–5 business days directly to your card or bank account.
              </p>
            </div>
          </div>
        </div>

        {/* Exceptions & Conditions */}
        <div className="border border-border/80 bg-brand-warm-ivory dark:bg-card p-6 sm:p-8 space-y-4">
          <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
            <WarningCircleIcon className="size-4 text-amber-600" weight="fill" />
            <span>Return Exceptions (Under Finnish Consumer Law)</span>
          </h3>
          <ul className="space-y-2 text-xs text-muted-foreground list-disc list-inside leading-relaxed">
            <li>
              <strong>Custom & Personalized Creations:</strong> Bespoke commissions crafted to unique customer dimensions, custom monogrammed leather, or personalized woodwork cannot be returned unless defective.
            </li>
            <li>
              <strong>Hygiene & Sealed Botanical Items:</strong> Sauna salves, botanical face oils, and body care items where the safety seal has been unsealed cannot be accepted for health and hygiene protection.
            </li>
            <li>
              <strong>Condition Requirement:</strong> Returned items must be unwashed, unused, and in identical pristine condition as when received.
            </li>
          </ul>
        </div>

        {/* Transit Breakage & Damage Guarantee */}
        <div className="p-6 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-2 text-xs">
          <div className="flex items-center gap-2 font-bold text-emerald-900 dark:text-emerald-200">
            <ShieldCheckIcon className="size-4 text-emerald-600" weight="fill" />
            <span>What if an item arrives damaged?</span>
          </div>
          <p className="text-emerald-800 dark:text-emerald-300 leading-relaxed">
            Every fragile creation is insured. If a ceramic piece, glassware, or art arrives cracked or damaged from courier handling, simply snap 2–3 photos and email <strong className="text-emerald-950 dark:text-emerald-100">support@oivaly.fi</strong> within 48 hours. We will immediately arrange a complimentary studio replacement or a 100% full refund with no return shipping fees required.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-muted/20 border border-border/60 text-xs">
          <div>
            <span className="font-bold text-foreground block">Need assistance with a return?</span>
            <span className="text-muted-foreground">Our support team will guide you through the process.</span>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-brand-deep-forest text-white font-semibold uppercase tracking-wider hover:bg-brand-deep-forest/90 transition-colors text-center shrink-0"
          >
            Contact Customer Support
          </Link>
        </div>
      </div>
    </div>
  );
}

