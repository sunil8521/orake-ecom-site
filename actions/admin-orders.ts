'use server';

import { connectDB } from "@/lib/db";
import { Order } from "@/models/Order";
import { updateTag } from "next/cache";
import type {  OrderStatus } from "@/lib/data/admin-orders";



export async function updateOrderStatus(id: string, status: OrderStatus) {
  await connectDB();
  await Order.findByIdAndUpdate(id, { status });
  updateTag("admin-orders");
  updateTag("admin-stats");
  return { success: true };
}
