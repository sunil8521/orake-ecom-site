'use server';

import { connectDB } from "@/lib/db";
import { Wishlist } from "@/models/Wishlist";
import { Product } from "@/models/Product";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import {
  getWishlistCount as _getWishlistCount
} from "@/lib/data/wishlist";


export async function getWishlistCount(): Promise<number> {
  return _getWishlistCount();
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
      revalidatePath("/products");
      revalidatePath("/wishlist");
      return { success: true, added: false };
    } else {
      await Wishlist.create({
        userId: session.user.id,
        productId: productId
      });
      revalidatePath("/products");
      revalidatePath("/wishlist");

      return { success: true, added: true };
    }
  } catch (error: any) {
    console.error("Toggle wishlist error:", error);
    return { success: false, error: error.message };
  }
}
