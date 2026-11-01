import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SparkleIcon, HeartIcon, TreeEvergreenIcon, ShieldCheckIcon, GlobeIcon, StorefrontIcon } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "About Us | Oivaly Nordic Marketplace",
  description:
    "Learn about Oivaly: our Helsinki roots, our mission to support independent Nordic artisans, and our commitment to authentic craftsmanship.",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background py-8 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">About Us</span>
        </nav>

        {/* Hero */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground">
            <GlobeIcon className="size-4" weight="fill" />
            <span>Rooted in Helsinki, Finland</span>
          </div>
          <h1 className="text-3xl sm:text-6xl font-serif font-bold text-foreground tracking-tight leading-tight">
            Celebrating the Soul of Nordic Craftsmanship.
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Oivaly was founded on a simple observation: the Nordic region is home to some of the world’s most gifted ceramicists, weavers, woodworkers, and botanical creators, yet their work is often obscured by industrial fast-consumption platforms.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-foreground">
              A Home for Independent Ateliers
            </h2>
            <p>
              The Finnish word <strong className="text-foreground font-semibold">Oiva</strong> conveys something splendid, genuine, and finely crafted. That spirit guides every decision we make. We built Oivaly to connect discerning collectors across Finland and Scandinavia with independent makers who shape goods with care, patience, and purpose.
            </p>
            <p>
              When you shop on Oivaly, you aren&apos;t purchasing items sitting in an anonymous fulfillment warehouse. Your order is received directly by an artisan in Fiskars, a weaver in Turku, or a woodcarver in Rovaniemi. Every piece carries the unique thumbprint of human skill.
            </p>
          </div>

          <div className="relative aspect-4/3 w-full bg-muted overflow-hidden border border-border/80">
            <Image
              src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1000&q=80"
              alt="Nordic ceramic artisan throwing clay in studio"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-foreground text-center">
            What Sets Oivaly Apart
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-card border border-border/80 space-y-3">
              <div className="size-10 rounded-full bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground flex items-center justify-center">
                <ShieldCheckIcon className="size-5" weight="fill" />
              </div>
              <h3 className="text-base font-serif font-bold text-foreground">
                Authentic Verification
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We verify every maker&apos;s Finnish Business ID (Y-tunnus) with the official government registry (PRH). Zero mass-manufactured drop-shipping or deceptive resellers.
              </p>
            </div>

            <div className="p-6 bg-card border border-border/80 space-y-3">
              <div className="size-10 rounded-full bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground flex items-center justify-center">
                <HeartIcon className="size-5" weight="fill" />
              </div>
              <h3 className="text-base font-serif font-bold text-foreground">
                90% to the Maker
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We take only a modest 10% platform commission on completed sales, ensuring creators receive the lion&apos;s share of their craft&apos;s value to sustain regional craft heritage.
              </p>
            </div>

            <div className="p-6 bg-card border border-border/80 space-y-3">
              <div className="size-10 rounded-full bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground flex items-center justify-center">
                <TreeEvergreenIcon className="size-5" weight="fill" />
              </div>
              <h3 className="text-base font-serif font-bold text-foreground">
                Zero Plastic Commitment
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All orders are dispatched in 100% plastic-free, recyclable packaging, transported using Posti&apos;s carbon-conscious parcel locker logistics in Finland.
              </p>
            </div>
          </div>
        </div>

        {/* Helsinki Studio & Team */}
        <div className="border border-border/80 bg-brand-warm-ivory dark:bg-card p-8 sm:p-10 space-y-4">
          <h3 className="text-lg font-serif font-bold text-foreground">
            Our Headquarters
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
            Oivaly Oy is headquartered in the Design District of Helsinki, Finland (Mannerheimintie 10, 00100 Helsinki). Our team of designers, engineers, and craft curators works daily to support our growing network of Nordic workshops.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-primary">
            <Link href="/contact" className="hover:underline">Contact Helsinki Office &rarr;</Link>
            <Link href="/makers" className="hover:underline">Meet Independent Makers &rarr;</Link>
            <Link href="/sustainability" className="hover:underline">Read Sustainability Manifesto &rarr;</Link>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="border border-border/80 bg-brand-deep-forest text-white p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-serif font-bold">
              Join the Nordic Artisan Movement
            </h2>
            <p className="text-xs text-white/80">
              Discover one-of-a-kind treasures or open your own creative workshop.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/categories"
              className="px-5 py-2.5 bg-brand-sage text-brand-deep-forest font-bold text-xs uppercase tracking-wider hover:bg-brand-sage/90 transition-colors"
            >
              Explore Catalog
            </Link>
            <Link
              href="/seller/signup"
              className="px-5 py-2.5 border border-white/40 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Apply as Seller
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

