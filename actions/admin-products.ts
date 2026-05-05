'use server';

import { connectDB } from "@/lib/db";
import { Product } from "@/models/Product";
import { updateTag } from "next/cache";



export async function createProduct(data: {
  name: string; description: string; price: number;
  oldPrice?: number; discount?: number; stock: number;
  image: string; size?: string; isFeatured?: boolean;
}) {
  await connectDB();
  const slug = data.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  await new Product({ ...data, slug }).save();
  updateTag('products');
  updateTag('admin-products');
  updateTag('admin-stats');
  return { success: true };
}

export async function updateProduct(id: string, data: {
  name?: string; description?: string; price?: number;
  oldPrice?: number; discount?: number; stock?: number;
  image?: string; size?: string; isFeatured?: boolean;
}) {
  await connectDB();
  await Product.findByIdAndUpdate(id, data);
  updateTag('products');
  updateTag('admin-products');
  return { success: true };
}

export async function deleteProduct(id: string) {
  await connectDB();
  await Product.findByIdAndDelete(id);
  updateTag('products');
  updateTag('admin-products');
  updateTag('admin-stats');
  return { success: true };
}
