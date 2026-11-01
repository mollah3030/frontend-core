"use client";

import * as React from "react";
import Link from "next/link";
import { CookieIcon, ShieldCheckIcon, CheckCircleIcon, FloppyDiskIcon } from "@phosphor-icons/react";
import { toast } from "sonner";

export default function CookiePreferencesPage() {
  const [functionalCookies, setFunctionalCookies] = React.useState(true);
  const [analyticsCookies, setAnalyticsCookies] = React.useState(true);
  const [marketingCookies, setMarketingCookies] = React.useState(false);

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("oivaly_cookie_preferences");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.functional !== undefined) setFunctionalCookies(parsed.functional);
        if (parsed.analytics !== undefined) setAnalyticsCookies(parsed.analytics);
        if (parsed.marketing !== undefined) setMarketingCookies(parsed.marketing);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSave = () => {
    try {
      localStorage.setItem(
        "oivaly_cookie_preferences",
        JSON.stringify({
          essential: true,
          functional: functionalCookies,
          analytics: analyticsCookies,
          marketing: marketingCookies,
          savedAt: new Date().toISOString(),
        })
      );
      toast.success("Cookie preferences saved successfully!");
    } catch {
      toast.error("Failed to save cookie preferences.");
    }
  };

  const handleAcceptAll = () => {
    setFunctionalCookies(true);
    setAnalyticsCookies(true);
    setMarketingCookies(true);
    try {
      localStorage.setItem(
        "oivaly_cookie_preferences",
        JSON.stringify({
          essential: true,
          functional: true,
          analytics: true,
          marketing: true,
          savedAt: new Date().toISOString(),
        })
      );
      toast.success("All cookies accepted!");
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">Cookie Preferences</span>
        </nav>

        {/* Hero */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-pale-sage text-brand-deep-forest dark:bg-muted dark:text-foreground">
            <CookieIcon className="size-4" weight="fill" />
            <span>Transparency & Consent</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight">
            Cookie Preferences & Policy
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
            We believe in complete transparency. We use cookies and local storage tokens to keep your shopping cart intact, remember your language choices, and ensure secure bank checkout. You can customize your preferences below.
          </p>
        </div>

        {/* Preferences Control Panel */}
        <div className="space-y-6">
          {/* 1. Necessary */}
          <div className="p-6 bg-card border border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1 max-w-xl">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-foreground">1. Strictly Necessary Cookies</h3>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-muted text-muted-foreground">
                  Always Active
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Essential for the core functions of the marketplace: holding items in your cart across pages, maintaining session authentication, and preventing CSRF attacks. Cannot be disabled.
              </p>
            </div>
            <div className="shrink-0 text-xs font-semibold text-muted-foreground">
              Required
            </div>
          </div>

          {/* 2. Functional */}
          <div className="p-6 bg-card border border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1 max-w-xl">
              <h3 className="text-sm font-bold text-foreground">2. Functional & Preference Cookies</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Enables the site to remember your display preferences, recently viewed artisan studios, dark/light theme choices, and currency formatting.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer shrink-0">
              <input
                type="checkbox"
                checked={functionalCookies}
                onChange={(e) => setFunctionalCookies(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-deep-forest"></div>
            </label>
          </div>

          {/* 3. Analytics */}
          <div className="p-6 bg-card border border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1 max-w-xl">
              <h3 className="text-sm font-bold text-foreground">3. Analytics & Performance Cookies</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Helps us understand how visitors navigate the marketplace by collecting aggregated, anonymous performance metrics. No personal profile is built.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer shrink-0">
              <input
                type="checkbox"
                checked={analyticsCookies}
                onChange={(e) => setAnalyticsCookies(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-deep-forest"></div>
            </label>
          </div>

          {/* 4. Marketing */}
          <div className="p-6 bg-card border border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1 max-w-xl">
              <h3 className="text-sm font-bold text-foreground">4. Marketing & Personalization Cookies</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Allows us to tailor artisan recommendations and showcase featured studio drops aligned with your handcrafted interests.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer shrink-0">
              <input
                type="checkbox"
                checked={marketingCookies}
                onChange={(e) => setMarketingCookies(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-deep-forest"></div>
            </label>
          </div>

          {/* Action buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="w-full sm:w-auto px-5 py-2.5 bg-background border border-border text-foreground text-xs font-semibold uppercase tracking-wider hover:border-primary transition-colors cursor-pointer"
            >
              Accept All Cookies
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="w-full sm:w-auto px-6 py-2.5 bg-brand-deep-forest text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-deep-forest/90 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <FloppyDiskIcon className="size-4" weight="fill" />
              <span>Save My Preferences</span>
            </button>
          </div>
        </div>

        {/* Browser Guidance */}
        <div className="border border-border/60 bg-muted/20 p-6 space-y-2 text-xs text-muted-foreground">
          <h4 className="font-bold text-foreground">Managing Cookies in Your Browser</h4>
          <p className="leading-relaxed">
            You can also delete or block cookies at any time through your browser settings (Chrome, Safari, Firefox, Edge). Please note that blocking essential cookies may disrupt your shopping cart and session authentication. For more information, read our <Link href="/privacy" className="text-primary underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

