import type { Metadata } from "next";
import AccountHero from "@/components/Account/AccountHero";
import AccountTabs from "@/components/Account/AccountTabs";
import { getAddresses } from "@/lib/data/address";
import { getOrders } from "@/lib/data/order";
import { headers } from "next/headers";
import { Suspense } from "react";
import TabSkeleton from "@/components/Account/TabSkeleton";

export const metadata: Metadata = {
  title: "My Account — Orake",
  description: "Manage your Orake account, orders, addresses, and settings.",
};

async function AccountContent() {
  await headers();
  const [addresses, ordersData] = await Promise.all([
    getAddresses(),
    getOrders(),
  ]);

  return (
    <AccountTabs
      initialAddresses={addresses}
      initialOrders={ordersData.orders}
    />
  );
}

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-white">
      <AccountHero />
      <Suspense fallback={<div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-20 py-12"><TabSkeleton /></div>}>
        <AccountContent />
      </Suspense>
    </div>
  );
}

