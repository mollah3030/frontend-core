"use client";

import * as React from "react";
import {
  GearSixIcon,
  StorefrontIcon,
  MapPinIcon,
  BankIcon,
  FloppyDiskIcon,
  InfoIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";
import { useSellerAuth } from "@/lib/seller-auth-context";
import { sellerDashboardApi } from "@/resources/apis/seller-dashboard.api";
import type { StoreProfileData } from "@/resources/interfaces/seller-dashboard.interface";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function SellerSettingsPage() {
  const { store } = useSellerAuth();

  const [isLoading, setIsLoading] = React.useState(true);
  const [isSaving, setIsSaving] = React.useState(false);

  // Form states
  const [storeName, setStoreName] = React.useState("");
  const [legalName, setLegalName] = React.useState("");
  const [businessId, setBusinessId] = React.useState("");
  const [vatId, setVatId] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [businessAddress, setBusinessAddress] = React.useState("");
  const [contactEmail, setContactEmail] = React.useState("");
  const [contactPhone, setContactPhone] = React.useState("");
  const [bankIban, setBankIban] = React.useState("");
  const [bankBic, setBankBic] = React.useState("");

  React.useEffect(() => {
    async function loadProfile() {
      setIsLoading(true);
      try {
        const profile = await sellerDashboardApi.getProfile(store?.id);
        if (profile) {
          setStoreName(profile.name || store?.name || "");
          setLegalName(profile.legalBusinessName || "");
          setBusinessId(profile.businessId || "");
          setVatId(profile.vatId || "");
          setDescription(profile.description || "");
          setBusinessAddress(profile.businessAddress || "");
          setContactEmail(profile.contactEmail || "");
          setContactPhone(profile.contactPhone || "");
          setBankIban(profile.bankIban || "");
          setBankBic(profile.bankBic || "");
        }
      } catch {
        // Fallback with store data
        setStoreName(store?.name || "Nordic Artisan Studio");
      } finally {
        setIsLoading(false);
      }
    }
    loadProfile();
  }, [store]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await sellerDashboardApi.updateProfile(
        {
          name: storeName.trim(),
          legalBusinessName: legalName.trim(),
          businessId: businessId.trim(),
          vatId: vatId.trim(),
          description: description.trim(),
          businessAddress: businessAddress.trim(),
          contactEmail: contactEmail.trim(),
          contactPhone: contactPhone.trim(),
          bankIban: bankIban.trim(),
          bankBic: bankBic.trim(),
        },
        store?.id
      );

      toast.success("Studio profile and payout preferences saved!");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to save profile settings";
      toast.error(msg);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6 w-full pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-border/60">
        <div>
          <h1 className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight">
            Studio Profile & Payout Settings
          </h1>
          <p className="mt-1 text-xs text-muted-foreground">
            Configure your artisan workshop bio, legal Finnish business registration, and bank IBAN for payouts.
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Section 1: Workshop Branding */}
        <div className="p-5 bg-background border border-border/80 shadow-xs space-y-4">
          <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <StorefrontIcon className="size-4 text-primary" weight="bold" />
            <span>Studio Identity & Craftsmanship</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="store-name" className="block text-xs font-semibold text-foreground">
                Public Studio Name <span className="text-destructive">*</span>
              </label>
              <input
                id="store-name"
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                required
                className="w-full h-10 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary font-medium"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="legal-name" className="block text-xs font-semibold text-foreground">
                Legal Company Name (Toiminimi / Oy)
              </label>
              <input
                id="legal-name"
                type="text"
                value={legalName}
                onChange={(e) => setLegalName(e.target.value)}
                placeholder="e.g. Lapland Woodcrafts Tmi"
                className="w-full h-10 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="desc" className="block text-xs font-semibold text-foreground">
              Artisan Bio & Craft Story
            </label>
            <textarea
              id="desc"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Introduce your craft workshop, materials, Finnish traditions, and handmade philosophy to marketplace visitors..."
              className="w-full p-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary leading-relaxed"
            />
          </div>
        </div>

        {/* Section 2: Finnish Business & Workshop Address */}
        <div className="p-5 bg-background border border-border/80 shadow-xs space-y-4">
          <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <MapPinIcon className="size-4 text-emerald-600" weight="bold" />
            <span>Finnish Business Registration & Workshop Location</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="biz-id" className="block text-xs font-semibold text-foreground">
                Finnish Business ID (Y-tunnus)
              </label>
              <input
                id="biz-id"
                type="text"
                value={businessId}
                onChange={(e) => setBusinessId(e.target.value)}
                placeholder="1234567-8"
                className="w-full h-10 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="vat-id" className="block text-xs font-semibold text-foreground">
                Finnish VAT Number (ALV-numero)
              </label>
              <input
                id="vat-id"
                type="text"
                value={vatId}
                onChange={(e) => setVatId(e.target.value)}
                placeholder="FI12345678"
                className="w-full h-10 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary font-mono"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="address" className="block text-xs font-semibold text-foreground">
              Workshop / Atelier Address
            </label>
            <input
              id="address"
              type="text"
              value={businessAddress}
              onChange={(e) => setBusinessAddress(e.target.value)}
              placeholder="e.g. Pohjolankatu 12, 96100 Rovaniemi, Finland"
              className="w-full h-10 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="block text-xs font-semibold text-foreground">
                Studio Contact Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="artisan@woodcraft.fi"
                className="w-full h-10 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-phone" className="block text-xs font-semibold text-foreground">
                Contact Phone
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="+358 40 123 4567"
                className="w-full h-10 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary font-mono"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Payout Banking Preferences */}
        <div className="p-5 bg-background border border-border/80 shadow-xs space-y-4">
          <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <BankIcon className="size-4 text-primary" weight="bold" />
            <span>Finnish Banking Payout Preferences</span>
          </h2>

          <div className="p-3 bg-muted/30 border border-border/60 text-xs text-muted-foreground flex items-start gap-2.5">
            <InfoIcon className="size-4 text-primary shrink-0 mt-0.5" />
            <p>
              Your verified earnings (90% net sales) are transferred directly to your Finnish bank account via SEPA transfer according to your payout cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="iban" className="block text-xs font-semibold text-foreground">
                Finnish IBAN Account
              </label>
              <input
                id="iban"
                type="text"
                value={bankIban}
                onChange={(e) => setBankIban(e.target.value)}
                placeholder="FI21 1234 5678 9012 34"
                className="w-full h-10 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary font-mono uppercase"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="bic" className="block text-xs font-semibold text-foreground">
                Bank SWIFT / BIC Code
              </label>
              <input
                id="bic"
                type="text"
                value={bankBic}
                onChange={(e) => setBankBic(e.target.value)}
                placeholder="OPFIHH2X or NORDFIHH"
                className="w-full h-10 px-3 text-xs bg-background border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-primary font-mono uppercase"
              />
            </div>
          </div>
        </div>

        {/* Bottom Save Action */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <Button
            type="submit"
            disabled={isSaving}
            className="h-10 px-6 bg-brand-deep-forest hover:bg-brand-deep-forest/90 text-white rounded-none uppercase text-xs font-semibold tracking-wider shadow-xs"
          >
            {isSaving ? (
              <span className="flex items-center gap-2">
                <span className="size-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Saving Studio Preferences...</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <FloppyDiskIcon className="size-3.5" weight="bold" />
                <span>Save All Settings</span>
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
