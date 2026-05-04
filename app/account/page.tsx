import type { Metadata } from "next";
import AccountHero from "@/components/Account/AccountHero";
import AccountTabs from "@/components/Account/AccountTabs";
import { getAddresses } from "@/lib/data/address";
import { getOrders } from "@/lib/data/order";

export const metadata: Metadata = {
  title: "My Account — Orake",
  description: "Manage your Orake account, orders, addresses, and settings.",
};

export default async function AccountPage() {
  const [addresses, ordersData] = await Promise.all([
    getAddresses(),
    getOrders(1, 3),
  ]);

  return (
    <div className="min-h-screen bg-white">
      <AccountHero />
      <AccountTabs
        initialAddresses={addresses}
        initialOrders={ordersData.orders}
        initialOrdersTotal={ordersData.total}
        initialOrdersTotalPages={ordersData.totalPages}
      />
    </div>
  );
}
