import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Product } from "@/models/Product";

const mockProducts = [
  {
    name: "FAN FAVORITES BOX",
    slug: "fan-favorites-box",
    description: "The ultimate collection of our best-selling prebiotic energy drinks. Features our fan-favorite Strawberry Vanilla flavor. Real fruit juice, natural caffeine, no crash.",
    price: 627.00,
    oldPrice: 660.00,
    discount: 5,
    size: "12x 250ML",
    image: "/can1.png",
    stock: 100,
    numReviews: 48,
    isFeatured: true
  },
  {
    name: "CHAOS EDITION BOX",
    slug: "chaos-edition-box",
    description: "Embrace the chaos with our boldest flavor yet. Ginger Lemon provides a spicy, refreshing kick. Real fruit juice, natural caffeine, no crash.",
    price: 750.00,
    oldPrice: 783.00,
    discount: 4,
    size: "12x 250ML",
    image: "/can2.png",
    stock: 100,
    numReviews: 12,
    isFeatured: true
  }
];

export async function GET() {
  try {
    await connectDB();
    
    // Clear existing products to prevent duplicates during seeding
    // (Optional: remove this if you want to keep existing data)
    await Product.deleteMany({ slug: { $in: mockProducts.map(p => p.slug) } });

    // Insert mock products
    const inserted = await Product.insertMany(mockProducts);

    return NextResponse.json({
      success: true,
      message: "Products seeded successfully",
      products: inserted
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
