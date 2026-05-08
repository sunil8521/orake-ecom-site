import "server-only";
// lib/data/admin-stats.ts
// 'use cache' inside the function — correct Next.js 16 pattern.
// Called directly from app/admin/page.tsx (Server Component).

import { connectDB, getDb } from "@/lib/db";
import { Product } from "@/models/Product";
import { Order } from "@/models/Order";
import { cacheLife, cacheTag } from "next/cache";

export async function getAdminStats() {
  'use cache';
  cacheLife('minutes');
  cacheTag('admin-stats');

  const [mongoDb] = await Promise.all([getDb(), connectDB()]);

  const [totalProducts, totalOrders, revenueResult, totalUsers] = await Promise.all([
    Product.countDocuments(),
    Order.countDocuments(),
    Order.aggregate([
      { $match: { isPaid: true } },
      { $group: { _id: null, total: { $sum: "$totalPrice" } } }
    ]),
    mongoDb.collection("user").countDocuments({ isDelete: { $ne: true } }),
  ]);

  return {
    totalProducts,
    totalUsers,
    totalOrders,
    totalRevenue: revenueResult[0]?.total ?? 0,
  };
}

export type AdminStats = Awaited<ReturnType<typeof getAdminStats>>;
