import type { Metadata } from "next";
import Link from "next/link";
import { PackageIcon, TruckIcon, MapPinIcon, ShieldCheckIcon, ClockIcon } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Shipping & Posti Delivery Information | Oivaly",
  description:
    "Information on Posti courier delivery, parcel lockers, tracking codes (JJFI), rates, and Nordic shipping times across Finland and Europe.",
};

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-background py-8 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">Shipping Information</span>
        </nav>

        {/* Hero */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground">
            <TruckIcon className="size-4" weight="fill" />
            <span>Fast, Reliable Nordic Logistics</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight">
            Shipping & Posti Delivery
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
            We partner with Posti, Finland&apos;s national logistics provider, to offer carbon-smart, fully tracked deliveries directly from independent maker studios to your home or nearest smart parcel locker.
          </p>
        </div>

        {/* Posti Delivery Options Table */}
        <div className="space-y-4">
          <h2 className="text-lg font-serif font-bold text-foreground">Domestic Delivery Services (Finland)</h2>
          <div className="border border-border/80 bg-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-muted/40 border-b border-border/80 text-foreground font-semibold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-3.5">Service</th>
                    <th className="p-3.5">Delivery Time</th>
                    <th className="p-3.5">Destination</th>
                    <th className="p-3.5">Standard Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  <tr>
                    <td className="p-3.5 font-medium text-foreground">
                      <strong>Postipaketti (Parcel Locker)</strong>
                      <span className="block text-[11px] text-muted-foreground">Pick up at over 3,000 Posti SmartPost lockers & shops</span>
                    </td>
                    <td className="p-3.5 text-muted-foreground">1 – 3 business days</td>
                    <td className="p-3.5 text-muted-foreground">Local Posti Locker / K-Market / R-Kioski</td>
                    <td className="p-3.5 font-mono font-medium text-foreground">€6.90 – €8.90 (Free over €50*)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-medium text-foreground">
                      <strong>Kotipaketti (Home Delivery)</strong>
                      <span className="block text-[11px] text-muted-foreground">Delivered directly to your door at an agreed time window</span>
                    </td>
                    <td className="p-3.5 text-muted-foreground">1 – 2 business days</td>
                    <td className="p-3.5 text-muted-foreground">Recipient Doorstep</td>
                    <td className="p-3.5 font-mono font-medium text-foreground">€11.90 – €14.90</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-medium text-foreground">
                      <strong>Pikkupaketti (Small Parcel)</strong>
                      <span className="block text-[11px] text-muted-foreground">Directly into letterbox for jewelry and small goods</span>
                    </td>
                    <td className="p-3.5 text-muted-foreground">2 – 4 business days</td>
                    <td className="p-3.5 text-muted-foreground">Home Mailbox</td>
                    <td className="p-3.5 font-mono font-medium text-foreground">€4.90</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-muted/20 border-t border-border/60 text-[11px] text-muted-foreground">
              * Note: Individual studios may set independent free-shipping promotions or combined delivery thresholds.
            </div>
          </div>
        </div>

        {/* Live Posti Tracking Information */}
        <div className="border border-border/80 bg-brand-warm-ivory dark:bg-card p-6 sm:p-8 space-y-4">
          <div className="flex items-start gap-4">
            <div className="size-10 rounded-full bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground flex items-center justify-center shrink-0">
              <PackageIcon className="size-5" weight="fill" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-foreground">Real-Time Posti Barcode Tracking (JJFI...)</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                As soon as an artisan packs your order, a registered Finnish consignment code is generated (e.g. <code className="bg-background px-1.5 py-0.5 font-mono text-[11px]">JJFI61234567890123456</code>). You can track your parcel anytime at{" "}
                <a
                  href="https://www.posti.fi/en/tracking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline"
                >
                  posti.fi/en/tracking
                </a>{" "}
                or inside your Oivaly account.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Dispatch & Packaging Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="p-5 bg-card border border-border/80 space-y-2">
            <h4 className="font-bold text-foreground flex items-center gap-1.5">
              <ClockIcon className="size-4 text-primary" weight="fill" />
              <span>Studio Dispatch Times</span>
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              In-stock items are packaged and booked for Posti collection within 24 to 48 hours. If an item is bespoke or made to order (such as custom-sized woodwork or wheel-thrown pottery), the artisan&apos;s production lead time is displayed directly on the product listing.
            </p>
          </div>

          <div className="p-5 bg-card border border-border/80 space-y-2">
            <h4 className="font-bold text-foreground flex items-center gap-1.5">
              <ShieldCheckIcon className="size-4 text-emerald-600" weight="fill" />
              <span>Breakage Protection Guarantee</span>
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              All delicate ceramics and mouth-blown glassware are packaged with shock-absorbing honeycomb kraft cushioning. In the rare event of transit damage, our 14-Day Buyer Protection immediately issues a replacement or full refund.
            </p>
          </div>
        </div>

        {/* International EU Shipping */}
        <div className="space-y-3 border-t border-border/60 pt-8">
          <h2 className="text-lg font-serif font-bold text-foreground">European & International Shipping</h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            We ship across Sweden, Denmark, Norway, Germany, and the wider European Union via Posti Priority Parcel and DHL Express. EU deliveries typically take 3 to 6 business days. All items dispatched from Finland include EU single-market customs clearance with no import duties inside the European Union.
          </p>
        </div>
      </div>
    </div>
  );
}

