import type { Metadata } from "next";
import { SellerDashboardLayout } from "@/components/seller-dashboard/seller-dashboard-layout";

export const metadata: Metadata = {
  title: "Artisan Atelier Dashboard | Nordic Marketplace",
  description:
    "Manage your Finnish craft listings, orders, Posti shipping fulfillment, inventory, and payout earnings.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SellerDashboardLayout>{children}</SellerDashboardLayout>;
}
