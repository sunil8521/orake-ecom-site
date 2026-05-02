'use server';

import { razorpay } from '@/lib/razorpay';

export async function createRazorpayOrder(amount: number, currency: string = 'INR') {
  try {
    // Validate amount (in paisa for INR)
    if (amount < 100) {
      throw new Error('Amount must be at least ₹1');
    }

    // Create order
    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert to paisa (smallest currency unit)
      currency: currency,
      receipt: `receipt_${Date.now()}`,
      notes: {
        // Add custom metadata
        created_at: new Date().toISOString(),
      },
    });

    return {
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    };
  } catch (error) {
    console.error('Order creation failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Order creation failed',
    };
  }
}