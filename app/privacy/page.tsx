import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheckIcon, LockKeyIcon } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Privacy Policy | Oivaly",
  description:
    "Information on how Oivaly collects, processes, and protects your personal data in accordance with the EU General Data Protection Regulation (GDPR) and Finnish Data Protection Law.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background py-8 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">Privacy Policy</span>
        </nav>

        {/* Hero */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground">
            <LockKeyIcon className="size-4" weight="fill" />
            <span>GDPR & Data Protection</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Last updated: October 2026. This Privacy Notice describes how Oivaly Oy collects, uses, and discloses your personal data when you visit our website or make purchases through our multi-vendor platform.
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-8 text-xs leading-relaxed text-muted-foreground border-t border-border/60 pt-8">
          {/* Section 1 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              1. Data Controller
            </h2>
            <p>
              The data controller responsible for the processing of your personal data under the EU General Data Protection Regulation (GDPR 2016/679) is:
            </p>
            <div className="p-3 bg-muted/20 border border-border/60 font-mono text-[11px] space-y-0.5 text-foreground">
              <div>Oivaly Oy (Finnish Business ID / Y-tunnus: 3412984-7)</div>
              <div>Mannerheimintie 10, 00100 Helsinki, Finland</div>
              <div>Contact: privacy@oivaly.fi</div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              2. Personal Data We Collect
            </h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong>Contact & Identification Data:</strong> Full name, email address, postal delivery address, and telephone number (required for automated Posti SMS arrival notifications).</li>
              <li><strong>Payment Information:</strong> Transaction identifiers, payment method details, and billing tokens processed securely via our certified payment processor (Stripe). Oivaly does not store raw credit card numbers.</li>
              <li><strong>Seller Data:</strong> Legal corporate name, Finnish Business ID (Y-tunnus), ALV/VAT identifier, and bank IBAN account numbers for payout disbursements.</li>
              <li><strong>Technical Data:</strong> IP address, device type, browser information, and functional cookies necessary for shopping cart preservation.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              3. Purpose & Legal Basis for Processing
            </h2>
            <p>
              We process personal data based on the following legal grounds under Article 6 of the GDPR:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong>Performance of Contract (Art. 6(1)(b)):</strong> To process payments, manage your customer account, coordinate fulfillment with independent artisans, and book parcel delivery with Posti.</li>
              <li><strong>Legal Obligation (Art. 6(1)(c)):</strong> To maintain Finnish statutory accounting records, tax reporting (ALV / VAT), and comply with consumer protection regulations.</li>
              <li><strong>Legitimate Interests (Art. 6(1)(f)):</strong> To detect fraudulent transactions, optimize platform security, and ensure marketplace integrity.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              4. Data Sharing & Third-Party Processors
            </h2>
            <p>
              We never sell your personal information. Personal data is shared strictly on a need-to-know basis with:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong>Artisan Merchants:</strong> The independent studio fulfilling your order receives your name, delivery address, and item selections.</li>
              <li><strong>Logistics Partners:</strong> Posti Group Oyj receives delivery details to generate tracking codes (JJFI) and dispatch packages.</li>
              <li><strong>Payment Gateways:</strong> Stripe Payments Europe Ltd. processes card and banking transactions in compliance with PCI-DSS Level 1.</li>
              <li><strong>Government Registries:</strong> Finnish Patent and Registration Office (PRH / YTJ) API for real-time validation of seller business IDs.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              5. Data Retention & EU Storage
            </h2>
            <p>
              All personal customer data is hosted and processed securely within the European Economic Area (EEA). Transaction and accounting records are retained for six (6) years in accordance with Finnish Accounting Law (Kirjanpitolaki). Unregistered cart data is expunged after 30 days.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              6. Your Statutory Rights Under GDPR
            </h2>
            <p>
              As a European data subject, you are entitled to:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Right to access and obtain a copy of your personal data.</li>
              <li>Right to rectification of inaccurate or outdated details.</li>
              <li>Right to erasure (&ldquo;Right to be forgotten&rdquo;), subject to statutory tax retention.</li>
              <li>Right to data portability in a machine-readable JSON format.</li>
              <li>Right to lodge a complaint with the Finnish Data Protection Ombudsman (<em className="font-serif">Tietosuojavaltuutetun toimisto</em>) at <a href="https://tietosuoja.fi" target="_blank" rel="noopener noreferrer" className="underline text-primary">tietosuoja.fi</a>.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-2">
            <h2 className="text-base font-serif font-bold text-foreground">
              7. Contact Privacy Officer
            </h2>
            <p>
              To exercise any of your data rights or make inquiries, contact our Data Protection Officer at: <a href="mailto:privacy@oivaly.fi" className="font-mono text-primary underline">privacy@oivaly.fi</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

