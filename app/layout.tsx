import type { Metadata } from "next";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

export const metadata: Metadata = {
  title: "Orake — Energy That Hits Different",
  description: "Premium prebiotic energy drinks. Zero sugar, real fruit juice, natural caffeine. Fuel your grind with Strawberry Vanilla and Ginger Lemon flavors.",
  keywords: "energy drink, prebiotic, zero sugar, natural caffeine, Orake",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen flex flex-col">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
