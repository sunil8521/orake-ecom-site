import "server-only";
// lib/data/admin-products.ts
// NO 'use server' — plain async data function (server-only)
// Mutations (create/update/delete) stay in actions/admin-products.ts

import { connectDB } from "@/lib/db";
import { Product } from "@/models/Product";

export interface ProductFilters {
  search?: string;
  page?: number;
  limit?: number;
}

export interface AdminProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  stock: number;
  image: string;
  size: string;
  isFeatured: boolean;
  numReviews: number;
  slug: string;
  createdAt: string;
}

// Products CAN be cached per CACHING.md — they're public, rarely change.
// But with pagination + dynamic filters, we keep it uncached for admin.
// Public product listing (storefront) uses 'use cache' separately.
export async function getAdminProducts(filters: ProductFilters = {}): Promise<{ products: AdminProduct[]; total: number; totalPages: number; page: number }> {
  const { search = "", page = 1, limit = 8 } = filters;
  await connectDB();

  const query: Record<string, any> = {};
  if (search.trim()) {
    query.name = { $regex: search.trim(), $options: "i" };
  }

  const skip = (page - 1) * limit;

  const [total, data] = await Promise.all([
    Product.countDocuments(query),
    Product.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
  ]);

  return {
    products: JSON.parse(JSON.stringify(data)),
    total,
    page,
    totalPages: Math.ceil(total / limit),
  };
}
