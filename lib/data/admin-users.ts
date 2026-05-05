import "server-only";
// lib/data/admin-users.ts
// NO 'use server' — plain async data function (server-only)
// GET functions must NOT be Server Actions (they'd fire as POST).
// Only mutations (softDeleteUser, restoreUser) live in actions/admin-users.ts

import { getDb } from "@/lib/db";

export interface UserFilters {
  search?: string;
  role?: string;       // "all" | "user" | "admin"
  provider?: string;   // "all" | "google" | "credential"
  showDeleted?: boolean;
  page?: number;
  limit?: number;
}

export interface AdminUser {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  image?: string;
  role: "user" | "admin";
  provider: "google" | "credential";
  isDelete?: boolean;
  emailVerified?: boolean;
  createdAt: string;
  updatedAt: string;
  orderCount: number;
}

export interface AdminUserStats {
  orderCount: number;
  cartCount: number;
  wishlistCount: number;
}

// Admin user listing is NOT cached — it's live admin data
export async function getAdminUsers(filters: UserFilters = {}): Promise<{ users: AdminUser[]; total: number; totalPages: number; page: number }> {
  const { search = "", role = "all", provider = "all", showDeleted = false, page = 1, limit = 8 } = filters;
  const db = await getDb();

  const match: Record<string, any> = {};

  if (showDeleted) {
    match.isDelete = true;
  } else {
    match.$or = [{ isDelete: false }, { isDelete: { $exists: false } }];
  }

  if (role !== "all") match.role = role;

  if (search.trim()) {
    const regex = { $regex: search.trim(), $options: "i" };
    match.$and = [...(match.$and || []), { $or: [{ name: regex }, { email: regex }, { phone: regex }] }];
  }

  const skip = (page - 1) * limit;

  const [results] = await db.collection("user").aggregate([
    { $match: match },
    { $lookup: { from: "account", localField: "_id", foreignField: "userId", as: "accounts" } },
    { $lookup: { from: "orders", localField: "_id", foreignField: "userId", as: "orderDocs" } },
    {
      $addFields: {
        provider: {
          $cond: {
            if: { $gt: [{ $size: "$accounts" }, 0] },
            then: { $arrayElemAt: ["$accounts.providerId", 0] },
            else: "credential"
          }
        },
        orderCount: { $size: "$orderDocs" }
      }
    },
    ...(provider !== "all" ? [{ $match: { provider } }] : []),
    { $project: { accounts: 0, orderDocs: 0 } },
    {
      $facet: {
        total: [{ $count: "count" }],
        data: [{ $sort: { createdAt: -1 } }, { $skip: skip }, { $limit: limit }]
      }
    }
  ]).toArray();

  const total = results?.total?.[0]?.count ?? 0;

  return {
    users: JSON.parse(JSON.stringify(results?.data ?? [])),
    total,
    page,
    totalPages: Math.ceil(total / limit),
  };
}

export async function getUserStats(userId: string): Promise<AdminUserStats> {
  const db = await getDb();

  const [orderCount, cartDoc, wishlistCount] = await Promise.all([
    db.collection("orders").countDocuments({ userId }),
    db.collection("carts").findOne({ userId }, { projection: { items: 1 } }),
    db.collection("wishlists").countDocuments({ userId }),
  ]);

  return {
    orderCount,
    cartCount: (cartDoc as any)?.items?.length ?? 0,
    wishlistCount,
  };
}
