import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheckIcon, LockKeyIcon, CheckCircleIcon, XCircleIcon, SparkleIcon, ScalesIcon } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Buyer Protection Guarantee | Oivaly",
  description:
    "Shop with complete confidence. Oivaly protects every transaction with 14-day escrow payment holding, PRH verified artisans, and a 100% money-back guarantee.",
};

export default function BuyerProtectionPage() {
  return (
    <div className="min-h-screen bg-background py-8 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">Buyer Protection</span>
        </nav>

        {/* Hero */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground">
            <ShieldCheckIcon className="size-4" weight="fill" />
            <span>Complete Peace of Mind</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight">
            The Oivaly Buyer Protection Guarantee
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            When you purchase handmade goods on Oivaly, your transaction is protected from checkout to doorstep. We ensure independent artistry is matched with institutional-grade security.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-card border border-border/80 space-y-3">
            <div className="size-11 rounded-full bg-brand-pale-sage/60 dark:bg-muted text-brand-deep-forest dark:text-foreground flex items-center justify-center">
              <LockKeyIcon className="size-6" weight="fill" />
            </div>
            <h3 className="text-base font-serif font-bold text-foreground">
              14-Day High-Security Escrow
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              When you pay, your funds do not go directly to a seller&apos;s personal account. Payments are safely locked in bank-level escrow for 14 days following verified delivery, giving you ample time to inspect your items.
            </p>
          </div>

          <div className="p-6 bg-card border border-border/80 space-y-3">
            <div className="size-11 rounded-full bg-brand-pale-sage/60 dark:bg-muted text-brand-deep-forest dark:text-foreground flex items-center justify-center">
              <ShieldCheckIcon className="size-6" weight="fill" />
            </div>
            <h3 className="text-base font-serif font-bold text-foreground">
              PRH-Verified Finnish Businesses
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Zero anonymous accounts or fake storefronts. Every shop on Oivaly is verified against the official Finnish Patent and Registration Office (PRH / YTJ) registry with a verified Finnish Business ID (Y-tunnus).
            </p>
          </div>

          <div className="p-6 bg-card border border-border/80 space-y-3">
            <div className="size-11 rounded-full bg-brand-pale-sage/60 dark:bg-muted text-brand-deep-forest dark:text-foreground flex items-center justify-center">
              <ScalesIcon className="size-6" weight="fill" />
            </div>
            <h3 className="text-base font-serif font-bold text-foreground">
              100% Full Refund Guarantee
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              If an item is lost in transit, damaged by the courier, or materially different from the listing photos and description, Oivaly guarantees a complimentary replacement or a full refund directly to your account.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="space-y-4">
          <h2 className="text-lg font-serif font-bold text-foreground">
            Why Shop on Oivaly vs. Unregulated Marketplaces
          </h2>

          <div className="border border-border/80 bg-card overflow-hidden text-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-muted/40 border-b border-border/80 text-foreground font-semibold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-3.5">Security Feature</th>
                    <th className="p-3.5 text-brand-deep-forest dark:text-emerald-400 font-bold">Oivaly Protected Checkout</th>
                    <th className="p-3.5 text-muted-foreground">Classified Ads & Peer-to-Peer Forums</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  <tr>
                    <td className="p-3.5 font-medium text-foreground">Payment Protection</td>
                    <td className="p-3.5 text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                      <CheckCircleIcon className="size-4 shrink-0" weight="fill" />
                      <span>Held in 14-day escrow until delivery</span>
                    </td>
                    <td className="p-3.5 text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                      <XCircleIcon className="size-4 shrink-0" weight="fill" />
                      <span>Direct wire with zero recourse</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-medium text-foreground">Seller Verification</td>
                    <td className="p-3.5 text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                      <CheckCircleIcon className="size-4 shrink-0" weight="fill" />
                      <span>Validated Finnish Y-tunnus & PRH trade record</span>
                    </td>
                    <td className="p-3.5 text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                      <XCircleIcon className="size-4 shrink-0" weight="fill" />
                      <span>Anonymous or unvetted accounts</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-medium text-foreground">Courier Tracking</td>
                    <td className="p-3.5 text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                      <CheckCircleIcon className="size-4 shrink-0" weight="fill" />
                      <span>Official Posti JJFI barcode tracking</span>
                    </td>
                    <td className="p-3.5 text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                      <XCircleIcon className="size-4 shrink-0" weight="fill" />
                      <span>Untracked or unpredictable delivery</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-medium text-foreground">Return Rights</td>
                    <td className="p-3.5 text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                      <CheckCircleIcon className="size-4 shrink-0" weight="fill" />
                      <span>14-day EU statutory right of return</span>
                    </td>
                    <td className="p-3.5 text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                      <XCircleIcon className="size-4 shrink-0" weight="fill" />
                      <span>No returns accepted / final sale</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Dispute Resolution Note */}
        <div className="border border-border/80 bg-brand-warm-ivory dark:bg-card p-6 sm:p-8 space-y-3">
          <h3 className="text-sm font-bold text-foreground">Dedicated Human Mediation in Helsinki</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            In the unlikely event of a disagreement between you and an artisan workshop, our customer support team steps in directly. We review courier logs, photographic evidence, and workshop correspondence to resolve disputes fairly within 48 hours.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="text-xs font-semibold text-primary hover:underline"
            >
              Contact Dispute Team &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

