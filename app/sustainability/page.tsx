import type { Metadata } from "next";
import Link from "next/link";
import { LeafIcon, ArrowsClockwiseIcon, HandshakeIcon, TreeEvergreenIcon, ShieldCheckIcon } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Sustainability & Ethical Craftsmanship | Oivaly",
  description:
    "Learn about Oivaly's commitment to plastic-free packaging, circular Posti logistics, natural Nordic materials, and fair compensation for independent makers.",
};

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-background py-8 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">Sustainability</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground">
            <LeafIcon className="size-4" weight="fill" />
            <span>The Oivaly Ecological Manifesto</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight">
            Crafted for Generations, Not Landfills.
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            In an era of mass-produced disposable goods, Oivaly is built on the centuries-old Nordic philosophy of <em className="font-serif">kestävyys</em> — durability, restraint, and profound respect for our natural environment.
          </p>
        </div>

        {/* Four Sustainability Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-card border border-border/80 space-y-3">
            <div className="size-11 rounded-full bg-brand-pale-sage/60 dark:bg-muted text-brand-deep-forest dark:text-foreground flex items-center justify-center">
              <TreeEvergreenIcon className="size-6" weight="fill" />
            </div>
            <h3 className="text-lg font-serif font-bold text-foreground">
              1. Renewable & Regional Materials
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Our artisans work primarily with native Scandinavian raw materials: fallen curly birch and kelo pine from certified Finnish forests, unbleached Baltic flax linen, natural stoneware clay, and organic sheep wool from small Nordic farms.
            </p>
          </div>

          <div className="p-6 bg-card border border-border/80 space-y-3">
            <div className="size-11 rounded-full bg-brand-pale-sage/60 dark:bg-muted text-brand-deep-forest dark:text-foreground flex items-center justify-center">
              <ArrowsClockwiseIcon className="size-6" weight="bold" />
            </div>
            <h3 className="text-lg font-serif font-bold text-foreground">
              2. 100% Plastic-Free Studio Packaging
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Every seller on Oivaly adheres to our zero-plastic packaging mandate. Orders are safeguarded in recycled corrugated cardboard, unbleached kraft paper, biodegradable wood shavings, and water-activated paper tape.
            </p>
          </div>

          <div className="p-6 bg-card border border-border/80 space-y-3">
            <div className="size-11 rounded-full bg-brand-pale-sage/60 dark:bg-muted text-brand-deep-forest dark:text-foreground flex items-center justify-center">
              <HandshakeIcon className="size-6" weight="fill" />
            </div>
            <h3 className="text-lg font-serif font-bold text-foreground">
              3. Fair Artisan Compensation (90% Direct)
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Unlike traditional retail markups that take 50% to 70% of a maker&apos;s price, Oivaly operates on a modest 10% platform fee. 90% of every purchase goes directly into the creator&apos;s workshop to support living artisan wages in local communities.
            </p>
          </div>

          <div className="p-6 bg-card border border-border/80 space-y-3">
            <div className="size-11 rounded-full bg-brand-pale-sage/60 dark:bg-muted text-brand-deep-forest dark:text-foreground flex items-center justify-center">
              <ShieldCheckIcon className="size-6" weight="fill" />
            </div>
            <h3 className="text-lg font-serif font-bold text-foreground">
              4. Carbon-Smart Posti Delivery
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              By partnering with Posti Finland, our logistics utilize renewable biofuel vehicle fleets and widespread automated parcel locker networks (SmartPost), reducing last-mile carbon emissions by up to 40% compared to traditional couriers.
            </p>
          </div>
        </div>

        {/* Deep Dive: The Materials We Stand Behind */}
        <div className="space-y-6 border-t border-border/60 pt-10">
          <h2 className="text-2xl font-serif font-bold text-foreground">
            Our Material Standards
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="space-y-2 p-4 bg-muted/20 border border-border/60">
              <span className="font-bold text-foreground uppercase tracking-wider text-[11px] block">Nordic Timbers</span>
              <p className="text-muted-foreground leading-relaxed">
                PEFC and FSC-certified birch, pine, and alder. No toxic polyurethane varnishes; only cold-pressed linseed oil, natural beeswax, and sauna paraffin.
              </p>
            </div>

            <div className="space-y-2 p-4 bg-muted/20 border border-border/60">
              <span className="font-bold text-foreground uppercase tracking-wider text-[11px] block">Ceramics & Glazes</span>
              <p className="text-muted-foreground leading-relaxed">
                Fired to stoneware maturity (1220°C+) for dishwasher longevity. All food-contact glazes are 100% lead and cadmium free.
              </p>
            </div>

            <div className="space-y-2 p-4 bg-muted/20 border border-border/60">
              <span className="font-bold text-foreground uppercase tracking-wider text-[11px] block">Textiles & Fibers</span>
              <p className="text-muted-foreground leading-relaxed">
                OEKO-TEX certified European linen and GOTS organic cotton. Naturally breathable, anti-bacterial, and biodegradable.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-10 bg-brand-pale-sage/30 dark:bg-muted/30 border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg font-serif font-bold text-foreground">
              Support Sustainable Nordic Craft
            </h3>
            <p className="text-xs text-muted-foreground">
              Every order makes a tangible difference to independent workshops.
            </p>
          </div>
          <Link
            href="/categories"
            className="px-6 py-3 bg-brand-deep-forest text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-deep-forest/90 transition-colors"
          >
            Explore Sustainable Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}

