'use server';

import { connectDB } from "@/lib/db";
import { Wishlist } from "@/models/Wishlist";
import { Product } from "@/models/Product";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

async function getSession() {
  const reqHeaders = await headers();
  return auth.api.getSession({ headers: reqHeaders });
}

import { revalidateTag, unstable_noStore } from "next/cache";

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
        // Remove it
        await Wishlist.deleteOne({ _id: existing._id });
        revalidateTag("wishlist");
        return { success: true, added: false };
    } else {
        // Add it
        await Wishlist.create({
            userId: session.user.id,
            productId: productId
        });
        revalidateTag("wishlist");
        return { success: true, added: true };
    }
  } catch (error: any) {
    console.error("Toggle wishlist error:", error);
    return { success: false, error: error.message };
  }
}

export async function checkWishlistStatus(productId: string) {
  unstable_noStore();
  try {
    const session = await getSession();
    if (!session?.user) return false;

    await connectDB();
    const existing = await Wishlist.findOne({ 
        userId: session.user.id, 
        productId: productId 
    });
    
    return !!existing;
  } catch (error) {
    return false;
  }
}

