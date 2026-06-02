'use server';

import { sendPartnerEmail } from "@/lib/mailer";

export async function submitPartnerForm(data: {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  partnershipType: string;
  city: string;
  volume: string;
  details?: string;
}) {
  try {
    await sendPartnerEmail(data);
    return { success: true };
  } catch (error) {
    console.error("Error sending partner email:", error);
    return { success: false, error: "Failed to submit partnership request. Please try again." };
  }
}
