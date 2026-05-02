'use server';

import { connectDB } from "@/lib/db";
import { Product } from "@/models/Product";

export async function getFeaturedProducts() {
  try {
    await connectDB();
    const products = await Product.find({ isFeatured: true }).lean();
    
    // Convert MongoDB _id to string id for frontend
    return products.map(product => ({
      ...product,
      _id: product._id?.toString(),
      id: product._id?.toString(),
    }));
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}
