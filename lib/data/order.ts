import { connectDB } from "@/lib/db";
import { Order } from "@/models/Order";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

async function getSession() {
  const reqHeaders = await headers();
  return auth.api.getSession({ headers: reqHeaders });
}

export async function getOrders(page: number = 1, limit: number = 3) {
  // No 'use cache' — per-user data, always fresh
  // Dynamic via getSession() → headers()
  try {
    const session = await getSession();
    if (!session?.user) return { orders: [], total: 0, totalPages: 1, page: 1 };

    await connectDB();

    const skip = (page - 1) * limit;

    const total = await Order.countDocuments({ userId: session.user.id });
    const orders = await Order.find({ userId: session.user.id })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    return {
      orders: JSON.parse(JSON.stringify(orders)),
      total,
      totalPages: Math.ceil(total / limit),
      page,
    };
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    return { orders: [], total: 0, totalPages: 1, page: 1 };
  }
}
