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

export async function getWishlist() {
  try {
    const session = await getSession();
    if (!session?.user) return { items: [] };

    await connectDB();
    const wishlistItems = await Wishlist.find({ userId: session.user.id })
        .populate('productId')
        .lean();
    
    // Map to the shape expected by the frontend
    const mappedItems = wishlistItems.map((item: any) => {
       const product = item.productId;
       // Handle cases where the product was deleted from DB but remains in wishlist
       if (!product) return null; 
       
       return {
         id: product._id.toString(),
         name: product.name,
         flavor: product.slug, // using slug as flavor for now
         price: product.price,
         oldPrice: product.oldPrice,
         image: product.image,
         inStock: product.stock > 0
       };
    }).filter(Boolean); // remove nulls

    return { items: mappedItems };
  } catch (error) {
    console.error("Failed to fetch wishlist:", error);
    return { items: [] };
  }
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
        // Remove it
        await Wishlist.deleteOne({ _id: existing._id });
        return { success: true, added: false };
    } else {
        // Add it
        await Wishlist.create({
            userId: session.user.id,
            productId: productId
        });
        return { success: true, added: true };
    }
  } catch (error: any) {
    console.error("Toggle wishlist error:", error);
    return { success: false, error: error.message };
  }
}

export async function checkWishlistStatus(productId: string) {
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
