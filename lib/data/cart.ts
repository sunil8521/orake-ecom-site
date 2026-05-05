import "server-only";
import { connectDB } from "@/lib/db";
import { Cart } from "@/models/Cart";
import "@/models/Product";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

async function getSession() {
  const reqHeaders = await headers();
  return auth.api.getSession({ headers: reqHeaders });
}

export async function getCart() {
  // No 'use cache' — per-user data must always be fresh
  try {
    const session = await getSession();
    if (!session?.user) return null;

    await connectDB();
    const cart = await Cart.findOne({ userId: session.user.id }).populate('items.productId').lean();
    
    if (!cart) return { items: [] };

    // Map to the shape expected by the frontend
    const mappedItems = cart.items.map((item: any) => {
       const product = item.productId;
       return {
         id: product._id.toString(),
         name: product.name,
         flavor: product.slug, // using slug as flavor for now based on mockup
         price: product.price,
         oldPrice: product.oldPrice,
         qty: item.quantity,
         image: product.image,
       };
    });

    return { items: mappedItems };
  } catch (error) {
    console.error("Failed to fetch cart:", error);
    return { items: [] };
  }
}

export async function getCartCount(): Promise<number> {
  try {
    const session = await getSession();
    if (!session?.user) return 0;
    await connectDB();
    const cart = await Cart.findOne({ userId: session.user.id });
    if (!cart) return 0;
    return cart.items.reduce((acc: number, item: any) => acc + item.quantity, 0);
  } catch {
    return 0;
  }
}
