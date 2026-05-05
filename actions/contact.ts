'use server';

import { sendContactEmail } from "@/lib/mailer";

export async function submitContactForm(data: {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
}) {
    try {
        await sendContactEmail(data);

        return { success: true };
    } catch (error) {
        console.error("Error sending contact email:", error);
        return { success: false, error: "Failed to send message. Please try again." };
    }
}
