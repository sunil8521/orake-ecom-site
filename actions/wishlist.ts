'use server';

import { connectDB } from "@/lib/db";
import { Wishlist } from "@/models/Wishlist";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { updateTag } from "next/cache";
import {
  getWishlistCount as _getWishlistCount,
  checkWishlistStatus as _checkWishlistStatus,
} from "@/lib/data/wishlist";

// These are GET wrappers — called from client components on auth/mount events,
// NOT in tight loops or on every keystroke. Acceptable use of Server Actions.
export async function getWishlistCount(): Promise<number> {
  return _getWishlistCount();
}

export async function checkWishlistStatus(productId: string): Promise<boolean> {
  return _checkWishlistStatus(productId);
}

async function getSession() {
  const reqHeaders = await headers();
  return auth.api.getSession({ headers: reqHeaders });
}

export async function toggleWishlist(productId: string) {
  try {
    const session = await getSession();
    if (!session?.user) throw new Error("Unauthorized");

    await connectDB();
    
    const existing = await Wishlist.findOne({ 
        userId: session.user.id, 
        productId: productId 
    });
    
    if (existing) {
        await Wishlist.deleteOne({ _id: existing._id });
        updateTag("wishlist");
        return { success: true, added: false };
    } else {
        await Wishlist.create({
            userId: session.user.id,
            productId: productId
        });
        updateTag("wishlist");
        return { success: true, added: true };
    }
  } catch (error: any) {
    console.error("Toggle wishlist error:", error);
    return { success: false, error: error.message };
  }
}
