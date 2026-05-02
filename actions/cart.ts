'use server';

import { connectDB } from "@/lib/db";
import { Cart } from "@/models/Cart";
import { Product } from "@/models/Product";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

async function getSession() {
  const reqHeaders = await headers();
  return auth.api.getSession({ headers: reqHeaders });
}

export async function getCart() {
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

export async function addToCart(productId: string, quantity: number = 1) {
  try {
    const session = await getSession();
    if (!session?.user) throw new Error("Unauthorized");

    await connectDB();
    
    let cart = await Cart.findOne({ userId: session.user.id });
    
    if (!cart) {
      cart = new Cart({ userId: session.user.id, items: [] });
    }

    const existingItemIndex = cart.items.findIndex((item: any) => item.productId.toString() === productId);
    
    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    return { success: true };
  } catch (error: any) {
    console.error("Add to cart error:", error);
    return { success: false, error: error.message };
  }
}

export async function updateCartItemQty(productId: string, quantity: number) {
  try {
    const session = await getSession();
    if (!session?.user) throw new Error("Unauthorized");

    await connectDB();
    const cart = await Cart.findOne({ userId: session.user.id });
    if (!cart) throw new Error("Cart not found");

    const existingItemIndex = cart.items.findIndex((item: any) => item.productId.toString() === productId);
    if (existingItemIndex > -1) {
      if (quantity <= 0) {
        cart.items.splice(existingItemIndex, 1);
      } else {
        cart.items[existingItemIndex].quantity = quantity;
      }
      await cart.save();
    }
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function removeFromCart(productId: string) {
  try {
    const session = await getSession();
    if (!session?.user) throw new Error("Unauthorized");

    await connectDB();
    const cart = await Cart.findOne({ userId: session.user.id });
    if (!cart) return { success: true };

    cart.items = cart.items.filter((item: any) => item.productId.toString() !== productId);
    await cart.save();
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function clearCart() {
  try {
    const session = await getSession();
    if (!session?.user) throw new Error("Unauthorized");
    await connectDB();
    await Cart.findOneAndUpdate({ userId: session.user.id }, { items: [] });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
