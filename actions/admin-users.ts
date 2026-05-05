'use server';
// MUTATIONS + thin GET wrappers for client components.
// Types are NOT re-exported here — import them from @/lib/data/admin-users directly.

import { getDb, connectDB } from "@/lib/db";
import { Cart } from "@/models/Cart";
import { Wishlist } from "@/models/Wishlist";
import { Address } from "@/models/Address";
import { ObjectId } from "mongodb";
import { updateTag } from "next/cache";
import {
  getAdminUsers as _getAdminUsers,
  getUserStats as _getUserStats,
} from "@/lib/data/admin-users";
import type { UserFilters, AdminUser, AdminUserStats } from "@/lib/data/admin-users";



export  async function getUserStats(userId: string): Promise<AdminUserStats> {
  return _getUserStats(userId);
}

export async function softDeleteUser(userId: string): Promise<{ success: boolean; message: string }> {
  try {
    const db = await getDb();

    const result = await db.collection("user").updateOne(
      { _id: new ObjectId(userId) },
      { $set: { isDelete: true, updatedAt: new Date() } }
    );

    if (result.matchedCount === 0) return { success: false, message: "User not found" };

    // Immediately invalidate all active sessions
    await db.collection("session").deleteMany({ userId: new ObjectId(userId) });

    // Hard-delete ephemeral data (cart, wishlist, addresses)
    await connectDB();
    await Promise.all([
      Cart.deleteOne({ userId }),
      Wishlist.deleteMany({ userId }),
      Address.deleteMany({ userId }),
    ]);

    // Orders are intentionally kept for financial records
    updateTag("admin-users");
    updateTag("admin-stats");

    return { success: true, message: "User deleted successfully" };
  } catch (error: any) {
    return { success: false, message: error.message || "Failed to delete user" };
  }
}

export async function restoreUser(userId: string): Promise<{ success: boolean; message: string }> {
  try {
    const db = await getDb();
    const result = await db.collection("user").updateOne(
      { _id: new ObjectId(userId) },
      { $set: { isDelete: false, updatedAt: new Date() } }
    );
    if (result.matchedCount === 0) return { success: false, message: "User not found" };
    updateTag("admin-users");
    updateTag("admin-stats");
    return { success: true, message: "User restored successfully" };
  } catch (error: any) {
    return { success: false, message: error.message || "Failed to restore user" };
  }
}
