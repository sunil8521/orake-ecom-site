'use server';

import { connectDB } from "@/lib/db";
import { Newsletter } from "@/models/Newsletter";

export async function subscribeEmail(email: string) {
  try {
    await connectDB();
    
    // Use upsert to handle duplicates easily without erroring out
    await Newsletter.findOneAndUpdate(
      { email },
      { email, subscribedAt: new Date() },
      { upsert: true }
    );
    
    return { success: true };
  } catch (error) {
    console.error("Newsletter Subscription Error:", error);
    return { success: false, error: "Failed to subscribe. Please try again later." };
  }
}
