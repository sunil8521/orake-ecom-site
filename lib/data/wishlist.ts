import { connectDB } from "@/lib/db";
import { Wishlist } from "@/models/Wishlist";
import "@/models/Product";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

async function getSession() {
  const reqHeaders = await headers();
  return auth.api.getSession({ headers: reqHeaders });
}

export async function getWishlist() {
  // No 'use cache' — per-user data must always be fresh
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
    }).filter((item): item is NonNullable<typeof item> => Boolean(item));

    return { items: mappedItems };
  } catch (error) {
    console.error("Failed to fetch wishlist:", error);
    return { items: [] };
  }
}

export async function checkWishlistStatus(productId: string) {
  // No 'use cache' — per-user data must always be fresh
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
