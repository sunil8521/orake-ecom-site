import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { connectDB } from "@/lib/db";
import { Order } from "@/models/Order";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.headers.get("x-razorpay-signature");
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error("Webhook secret is missing");
      return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
    }

    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }

    // Verify signature
    const expectedSignature = crypto
      .createHmac("sha256", webhookSecret)
      .update(body)
      .digest("hex");

    if (expectedSignature !== signature) {
      console.error("Invalid signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    // Parse payload after verification
    const payload = JSON.parse(body);
    const event = payload.event;

    console.log(`Razorpay Webhook Received: ${event}`);

    await connectDB();

    // Handle different events
    switch (event) {
      case "order.paid":
        const orderDetails = payload.payload.order.entity;
        console.log("Order Paid Successfully:", orderDetails.id);
        
        // Find order by Razorpay Order ID and update to paid
        const order = await Order.findOne({ 'paymentResult.id': orderDetails.id });
        if (order && !order.isPaid) {
            order.isPaid = true;
            order.paidAt = new Date();
            order.status = 'Processing';
            order.paymentResult.status = 'paid';
            await order.save();
            console.log(`Database Order ${order._id} updated to PAID`);
        }
        break;

      case "payment.failed":
        const failedDetails = payload.payload.payment.entity;
        console.error("Payment Failed for Order:", failedDetails.order_id);
        
        // Find order and mark as failed/cancelled
        if (failedDetails.order_id) {
             const failedOrder = await Order.findOne({ 'paymentResult.id': failedDetails.order_id });
             if (failedOrder && !failedOrder.isPaid) {
                 failedOrder.status = 'Cancelled';
                 failedOrder.paymentResult.status = 'failed';
                 await failedOrder.save();
                 console.log(`Database Order ${failedOrder._id} marked as Cancelled due to payment failure`);
             }
        }
        break;

      default:
        console.log(`Unhandled event type: ${event}`);
    }

    // Respond with 200 OK so Razorpay knows we received it
    return NextResponse.json({ status: "success" }, { status: 200 });

  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
