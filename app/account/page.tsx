"use client";
import AccountHero from "@/components/Account/AccountHero";
import AccountTabs from "@/components/Account/AccountTabs";

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-white">
      <AccountHero />
      <AccountTabs />
    </div>
  );
}
