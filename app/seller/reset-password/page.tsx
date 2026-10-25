import type { Metadata } from "next";
import { SellerAuthLayout } from "@/components/seller-auth/seller-auth-layout";
import { SellerResetPasswordForm } from "@/components/seller-auth/seller-reset-password-form";

export const metadata: Metadata = {
  title: "Set New Studio Password | Nordic Marketplace Seller Portal",
  description:
    "Set a new password for your artisan workshop administrator account on Nordic Marketplace.",
};

export default function SellerResetPasswordPage() {
  return (
    <SellerAuthLayout
      title="Set New Studio Password"
      subtitle="Choose a secure password for your artisan atelier administrator account."
      activeTab="reset"
    >
      <SellerResetPasswordForm />
    </SellerAuthLayout>
  );
}
