import type { Metadata } from "next";
import Link from "next/link";
import { ScalesIcon } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Terms of Service | Oivaly",
  description:
    "Terms of service and user agreement governing purchases, multi-vendor transactions, payments, and platform usage on Oivaly.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background py-8 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">Terms of Service</span>
        </nav>

        {/* Hero */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground">
            <ScalesIcon className="size-4" weight="fill" />
            <span>Platform Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Last updated: October 2026. Please read these Terms of Service carefully before browsing, registering, or making purchases on Oivaly.
          </p>
        </div>

        {/* Clauses */}
        <div className="space-y-8 text-xs leading-relaxed text-muted-foreground border-t border-border/60 pt-8">
          {/* 1 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using Oivaly (&ldquo;Platform&rdquo;, operated by Oivaly Oy), you agree to be bound by these Terms of Service, our Privacy Policy, and any seller guidelines referenced herein. If you do not agree, you must refrain from using the platform.
            </p>
          </section>

          {/* 2 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              2. Marketplace Model & Role of Oivaly
            </h2>
            <p>
              Oivaly is an online multi-vendor marketplace platform. Products displayed on the site are offered and sold directly by independent artisan merchants (&ldquo;Sellers&rdquo;). The contract for sale is formed directly between the Buyer and the respective Seller. Oivaly acts as a commercial marketplace facilitator providing platform infrastructure, secure checkout, Posti shipping integrations, and escrow holding services.
            </p>
          </section>

          {/* 3 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              3. Pricing, Currency & Finnish VAT (ALV)
            </h2>
            <p>
              All prices listed on the platform are in Euros (&euro;). Retail consumer prices are inclusive of Finnish Value Added Tax (ALV 25.5%) where applicable under Finnish tax regulations. Shipping charges calculated based on the delivery destination and carrier service (Posti) are displayed before the final checkout confirmation.
            </p>
          </section>

          {/* 4 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              4. Payment & Escrow Protection
            </h2>
            <p>
              Payments are processed via authorized third-party gateways (Stripe) supporting major credit/debit cards and European bank transfers. To protect consumer purchases, funds are held in secure escrow for fourteen (14) days following confirmed courier delivery before being released to the independent seller.
            </p>
          </section>

          {/* 5 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              5. Shipping, Posti Delivery & Risk of Loss
            </h2>
            <p>
              All domestic orders are fulfilled via Posti Finland with registered barcode tracking. The risk of loss or accidental damage passes to the consumer only upon physical receipt of the goods. If an item is damaged during transit, our Buyer Protection Guarantee ensures a full replacement or refund.
            </p>
          </section>

          {/* 6 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              6. Statutory Right of Withdrawal (14-Day Returns)
            </h2>
            <p>
              In accordance with Chapter 6 of the Finnish Consumer Protection Act (Kuluttajansuojalaki), consumers have the right to withdraw from a purchase within fourteen (14) days from the date of physical delivery without providing a reason. This right does not apply to custom bespoke creations crafted to individual specifications or unsealed hygiene items.
            </p>
          </section>

          {/* 7 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              7. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Finland. Consumers may also refer disputes to the Finnish Consumer Disputes Board (Kuluttajariitalautakunta, <a href="https://kuluttajariita.fi" target="_blank" rel="noopener noreferrer" className="underline text-primary">kuluttajariita.fi</a>) or submit claims to the District Court of Helsinki.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

