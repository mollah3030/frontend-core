"use client";

import * as React from "react";
import Link from "next/link";
import {
  EnvelopeSimpleIcon,
  MapPinIcon,
  ClockIcon,
  PaperPlaneTiltIcon,
  CheckCircleIcon,
  SparkleIcon,
  ChatCircleDotsIcon,
} from "@phosphor-icons/react";
import { toast } from "sonner";

export default function ContactUsPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("general");
  const [orderNumber, setOrderNumber] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    // Simulate brief network delay
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent! Our Helsinki team will get back to you shortly.");
  };

  return (
    <div className="min-h-screen bg-background py-8 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">Contact Us</span>
        </nav>

        {/* Hero */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground">
            <ChatCircleDotsIcon className="size-4" weight="fill" />
            <span>We&apos;re Here to Help</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight">
            Get in Touch
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Have a question about an order, shipping via Posti, returning an item, or opening an artisan atelier? Send us a message and our Helsinki support team will reply within 24 hours.
          </p>
        </div>

        {/* Main Grid: Form + Office Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-card border border-border/80 p-6 sm:p-8">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="size-14 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircleIcon className="size-8" weight="fill" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-serif font-bold text-foreground">Message Received!</h3>
                  <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-foreground">{name}</strong>. A confirmation has been sent to <span className="font-mono text-foreground">{email}</span>. A team member will respond within 1 business day.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setMessage("");
                    setOrderNumber("");
                  }}
                  className="px-4 py-2 bg-muted hover:bg-muted/80 text-foreground text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-base font-serif font-bold text-foreground pb-2 border-b border-border/60">
                  Send a Direct Message
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-semibold text-foreground">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Aino Aalto"
                      className="w-full h-10 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold text-foreground">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="aino@example.fi"
                      className="w-full h-10 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-semibold text-foreground">
                      Topic / Subject
                    </label>
                    <select
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full h-10 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="general">General Inquiries</option>
                      <option value="order">Order Status & Posti Tracking</option>
                      <option value="returns">Returns, Breakage & Refunds</option>
                      <option value="seller">Selling on Oivaly (Artisan Onboarding)</option>
                      <option value="press">Press & Partnerships</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="order-num" className="block text-xs font-semibold text-foreground">
                      Order Number (Optional)
                    </label>
                    <input
                      id="order-num"
                      type="text"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      placeholder="e.g. OIV-84920"
                      className="w-full h-10 px-3 text-xs font-mono bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-semibold text-foreground">
                    Message Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us how we can help you with your order, artisan question, or feedback..."
                    className="w-full p-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 bg-brand-deep-forest hover:bg-brand-deep-forest/90 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <PaperPlaneTiltIcon className="size-4" weight="fill" />
                  <span>{isSubmitting ? "Sending..." : "Submit Inquiry"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Office Details & Support Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card border border-border/80 p-6 space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider text-[11px]">
                Marketplace Headquarters
              </h3>

              <div className="space-y-3 text-xs text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="size-4 text-primary shrink-0 mt-0.5" weight="fill" />
                  <div>
                    <strong className="text-foreground font-semibold block">Oivaly Oy</strong>
                    <span>Mannerheimintie 10</span>
                    <span className="block">00100 Helsinki, Finland</span>
                    <span className="text-[11px] font-mono text-muted-foreground mt-0.5 block">Y-tunnus: 3412984-7</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ClockIcon className="size-4 text-primary shrink-0 mt-0.5" weight="fill" />
                  <div>
                    <strong className="text-foreground font-semibold block">Operating Hours</strong>
                    <span>Monday – Friday: 09:00 – 17:00 (EET)</span>
                    <span className="block text-[11px] text-muted-foreground">Closed on Finnish public holidays</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border/80 p-6 space-y-3">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider text-[11px]">
                Direct Departments
              </h3>

              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 bg-muted/20 border border-border/40">
                  <span className="font-semibold text-foreground block">Customer & Order Support</span>
                  <a href="mailto:support@oivaly.fi" className="text-primary hover:underline text-[11px] font-mono">
                    support@oivaly.fi
                  </a>
                </div>

                <div className="p-2.5 bg-muted/20 border border-border/40">
                  <span className="font-semibold text-foreground block">Artisan & Seller Relations</span>
                  <a href="mailto:makers@oivaly.fi" className="text-primary hover:underline text-[11px] font-mono">
                    makers@oivaly.fi
                  </a>
                </div>

                <div className="p-2.5 bg-muted/20 border border-border/40">
                  <span className="font-semibold text-foreground block">Press & Brand Collaborations</span>
                  <a href="mailto:press@oivaly.fi" className="text-primary hover:underline text-[11px] font-mono">
                    press@oivaly.fi
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Link to Help Center */}
            <div className="p-5 bg-brand-pale-sage/30 dark:bg-muted/30 border border-border/80 flex items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-foreground block">Looking for fast answers?</span>
                <span className="text-[11px] text-muted-foreground">Check our interactive FAQ directory.</span>
              </div>
              <Link
                href="/help"
                className="px-3 py-1.5 bg-background border border-border font-semibold text-foreground hover:border-primary transition-colors shrink-0"
              >
                Browse FAQs &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

