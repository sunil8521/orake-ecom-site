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
    <html lang="en" className="antialiased" data-scroll-behavior="smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/fav-icon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav-icon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fav-icon/favicon-16x16.png" />
        <link rel="manifest" href="/fav-icon/site.webmanifest" />
      </head>
      <body className="min-h-screen flex flex-col">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
