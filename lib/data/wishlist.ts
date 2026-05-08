import "server-only";
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

    const wishlistDocs = await Wishlist.find({ userId: session.user.id })
      .populate({
        path: "productId",
        model: Product,
        select: "_id name slug price oldPrice size image stock",
      })
      .lean();

    const items = wishlistDocs
      .map((doc: any) => doc.productId)
      .filter(Boolean);
    return { items: items };

  } catch (error) {
    console.error("Failed to fetch wishlist:", error);
    return { items: [] };
  }
}

export async function getWishlistCount(): Promise<number> {
  try {
    const session = await getSession();
    if (!session?.user) return 0;
    await connectDB();
    return await Wishlist.countDocuments({ userId: session.user.id });
  } catch {
    return 0;
  }
}


export async function getUserWishlist(): Promise<string[]> {

  try {
    const session = await getSession();
    if (!session?.user) {
      return []
    }
    await connectDB();
    const wishlistItems = await Wishlist.find({ userId: session.user.id }).lean();

    return wishlistItems.map(item => item.productId.toString());
  } catch (er) {
    console.log(er)
    return []
  }

}