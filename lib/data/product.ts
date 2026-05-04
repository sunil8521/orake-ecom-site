import { connectDB } from "@/lib/db";
import { Product } from "@/models/Product";
import { cacheLife, cacheTag } from "next/cache";

export async function getFeaturedProducts() {
  'use cache'
  cacheLife('hours')
  cacheTag('products')

  try {
    await connectDB();
    const products = await Product.find({}).lean();
    
    return products.map((product: any) => ({
      ...product,
      _id: product._id?.toString(),
      id: product._id?.toString(),
    }));
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}
