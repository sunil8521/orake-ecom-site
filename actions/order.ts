'use server';

import { connectDB } from "@/lib/db";
import { Order } from "@/models/Order";
import { getCart, clearCart } from "@/actions/cart";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { razorpay } from "@/lib/razorpay";

async function getSession() {
  const reqHeaders = await headers();
  return auth.api.getSession({ headers: reqHeaders });
}

interface ShippingAddress {
    fullName: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

export async function placeOrder(shippingAddress: ShippingAddress, paymentMethod: string) {
  try {
    const session = await getSession();
    if (!session?.user) throw new Error("Unauthorized");

    // Get the user's cart
    const cartRes = await getCart();
    const items = cartRes?.items;

    if (!items || items.length === 0) {
        throw new Error("Cart is empty");
    }

    await connectDB();

    // Calculate totals
    const itemsPrice = items.reduce((acc: number, item: any) => acc + (item.price * item.qty), 0);
    const shippingPrice = itemsPrice > 999 ? 0 : 99; // Standard rule
    const taxPrice = 0; // Or whatever calculation
    const totalPrice = itemsPrice + shippingPrice + taxPrice;

    // Format items for DB
    const orderItems = items.map((item: any) => ({
        name: item.name,
        qty: item.qty,
        image: item.image,
        price: item.price,
        productId: item.id
    }));

    // Create the order in MongoDB
    const order = new Order({
        userId: session.user.id,
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        isPaid: false,
        status: paymentMethod === 'COD' ? 'Processing' : 'Pending', // COD starts Processing, Online starts Pending
    });

    // If Razorpay, we also need to generate the razorpay order
    if (paymentMethod === 'Razorpay') {
        const rzpOrder = await razorpay.orders.create({
            amount: totalPrice * 100, // paise
            currency: 'INR',
            receipt: `receipt_${Date.now()}`
        });

        order.paymentResult = {
            id: rzpOrder.id, // We store the Razorpay Order ID here
            status: rzpOrder.status,
            update_time: new Date().toISOString(),
            email_address: session.user.email
        };
    }

    await order.save();

    // If COD, clear the cart immediately since order is placed
    if (paymentMethod === 'COD') {
        await clearCart();
    }

    // Return the required info to the frontend
    return {
        success: true,
        orderId: order._id.toString(),
        totalPrice,
        razorpayOrderId: order.paymentResult?.id
    };

  } catch (error: any) {
    console.error("Place order error:", error);
    return { success: false, error: error.message };
  }
}
