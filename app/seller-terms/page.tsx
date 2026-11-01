import type { Metadata } from "next";
import Link from "next/link";
import { ScalesIcon, ShieldCheckIcon } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Seller Terms of Service & Merchant Agreement | Oivaly",
  description:
    "Official terms and conditions governing artisan merchants, commission fees, escrow payouts, and order fulfillment on Oivaly.",
};

export default function SellerTermsPage() {
  return (
    <div className="min-h-screen bg-background py-8 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">Seller Terms</span>
        </nav>

        {/* Hero */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground">
            <ScalesIcon className="size-4" weight="fill" />
            <span>Merchant Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight">
            Seller Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Last updated: October 2026. This Agreement governs the relationship between Oivaly Oy (&ldquo;Oivaly&rdquo;, &ldquo;Platform&rdquo;) and independent artisan merchants (&ldquo;Sellers&rdquo;, &ldquo;Studios&rdquo;) offering goods for sale on the marketplace.
          </p>
        </div>

        {/* Legal Clauses */}
        <div className="space-y-8 text-xs leading-relaxed text-muted-foreground border-t border-border/60 pt-8">
          {/* Clause 1 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              1. Merchant Eligibility & Registration
            </h2>
            <p>
              To open a studio storefront on Oivaly, merchants must represent a bona fide commercial entity or sole proprietorship (Toiminimi, Osakeyhtiö, or regional Nordic equivalent) registered with the Finnish Patent and Registration Office (PRH) or corresponding Scandinavian authority. All applicants agree to automated verification of their Business ID (Y-tunnus). Oivaly reserves the right to reject or terminate accounts that fail registry validation.
            </p>
          </section>

          {/* Clause 2 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              2. Commission & Payment Structure
            </h2>
            <p>
              Oivaly operates on a performance-based commission model:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong>Platform Commission:</strong> Oivaly deducts a flat ten percent (10%) fee from the gross product retail price upon every completed customer order.</li>
              <li><strong>Zero Listing Fees:</strong> Sellers incur no upfront charges, monthly membership costs, or per-item insertion fees to publish listings.</li>
              <li><strong>VAT / ALV Compliance:</strong> Sellers are solely responsible for setting appropriate Finnish VAT rates (standard 25.5%, reduced rates, or zero-rate relief) and remitting applicable indirect taxes to the Finnish Tax Administration (Verohallinto).</li>
            </ul>
          </section>

          {/* Clause 3 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              3. Escrow Security & Payout Cycles
            </h2>
            <p>
              To ensure compliance with European Union statutory consumer rights and prevent fraudulent transactions, customer funds are held in secure escrow for fourteen (14) calendar days following verified courier delivery by Posti. Following the 14-day clearance holding period, net artisan proceeds (90%) are automatically transferred to the seller&apos;s verified Finnish or SEPA bank account (IBAN).
            </p>
          </section>

          {/* Clause 4 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              4. Order Fulfillment & Posti Logistics SLAs
            </h2>
            <p>
              Sellers agree to adhere to strict fulfillment service-level agreements:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong>In-Stock Dispatch:</strong> In-stock goods must be packaged and transferred to Posti custody within two (2) business days of order confirmation.</li>
              <li><strong>Made-to-Order Lead Times:</strong> For custom commissions, the actual fabrication timeline must not exceed the lead time specified in the product listing.</li>
              <li><strong>Valid Tracking:</strong> All parcels must be dispatched with an official Posti tracking barcode (JJFI...) generated via the Oivaly Seller Portal or integrated Posti API.</li>
              <li><strong>Safe Packaging:</strong> Fragile ceramics and glassware must be packaged with shock-absorbing, plastic-free protective cushioning.</li>
            </ul>
          </section>

          {/* Clause 5 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              5. Authentic Craftsmanship & Prohibited Items
            </h2>
            <p>
              Oivaly is exclusively dedicated to authentic handcrafted goods, original art, vintage heirlooms, and curated Nordic supplies. The sale of mass-manufactured drop-shipped goods from third-party wholesale factories, counterfeit items, hazardous chemicals, or goods violating European intellectual property laws is strictly prohibited and results in immediate account forfeiture.
            </p>
          </section>

          {/* Clause 6 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              6. Returns, Withdrawals & Defect Protocol
            </h2>
            <p>
              Sellers acknowledge that under European Union consumer law, retail buyers have a 14-day right of withdrawal for non-customized goods. If an item arrives broken or defective, the seller must either supply a replacement piece within 7 business days or authorize a full refund via the Oivaly platform.
            </p>
          </section>

          {/* Clause 7 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              7. Governing Law & Dispute Jurisdiction
            </h2>
            <p>
              This Agreement shall be governed by, and construed in accordance with, the laws of the Republic of Finland. Any unresolved disputes arising in connection with this agreement shall be submitted to the exclusive jurisdiction of the District Court of Helsinki (Helsingin käräjäoikeus).
            </p>
          </section>
        </div>

        {/* Footer Link */}
        <div className="border-t border-border/60 pt-6 flex items-center justify-between text-xs">
          <Link href="/seller-guide" className="font-semibold text-primary hover:underline">
            &larr; Return to Seller Handbook
          </Link>
          <Link href="/seller/signup" className="font-semibold text-primary hover:underline">
            Apply to Sell on Oivaly &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

