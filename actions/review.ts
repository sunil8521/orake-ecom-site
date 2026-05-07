"use server"

import { connectDB } from "@/lib/db";
import { Rating } from "@/models/Rating";
import { Product } from "@/models/Product";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { revalidatePath, revalidateTag } from "next/cache";

export async function submitReview(formData: FormData) {
    try {
        await connectDB();
        const session = await auth.api.getSession({
            headers: await headers()
        });

        const productId = formData.get("productId") as string;
        const productSlug = formData.get("productSlug") as string;
        const text = formData.get("text") as string;
        const rating = parseInt(formData.get("rating") as string);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;

        if (!productId || !text || !rating || rating < 1 || rating > 5) {
            return { success: false, error: "Invalid form data" };
        }

        // Prepare review data
        const reviewData: any = {
            procutID: productId,
            text,
            rating,
        };

        if (session?.user) {
            reviewData.userID = session.user.id;
        } else {
            if (!name || !email) {
                return { success: false, error: "Name and email are required for guests" };
            }
            reviewData.name = name;
            reviewData.email = email;
        }

        const newReview = await Rating.create(reviewData);

        // Update product numReviews
        const reviewsCount = await Rating.countDocuments({ procutID: productId });
        await Product.findByIdAndUpdate(productId, { numReviews: reviewsCount });

        // Revalidate cache
        if (productSlug) {
            revalidatePath(`/products/${productSlug}`);
        }
        revalidateTag(`reviews-${productId}`);
        revalidateTag(`product-${productSlug}`);

        return { success: true, message: "Review submitted successfully!" };
    } catch (error: any) {
        console.error("Failed to submit review:", error);
        return { success: false, error: error.message || "Failed to submit review" };
    }
}
