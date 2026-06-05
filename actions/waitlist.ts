'use server';

import { getCart } from "@/lib/data/cart";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { sendWaitlistEmail } from "@/lib/mailer";

async function getSession() {
  const reqHeaders = await headers();
  return auth.api.getSession({ headers: reqHeaders });
}

export async function processWaitlistCheckout(total: number) {
  try {
    const session = await getSession();
    if (!session?.user) throw new Error("Unauthorized");

    // Get the user's cart
    const cartRes = await getCart();
    const items = cartRes?.items;

    if (!items || items.length === 0) {
        throw new Error("Cart is empty");
    }

    // Send email to admin
    await sendWaitlistEmail({
      name: session.user.name ,
      email: session.user.email,
      cartItems: items,
      total: total
    });

    // Optionally clear the cart here if desired.
    // For a waitlist, we can leave it or clear it. Leaving it for now so they don't lose it if they actually want to see it later.
    // If you want to clear it, uncomment:
    // await clearCart();

    return { success: true };
  } catch (error: any) {
    console.error("Waitlist checkout error:", error);
    return { success: false, error: error.message };
  }
}
