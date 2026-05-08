import { connectDB } from "@/lib/db";
import { Rating, IRating } from "@/models/Rating";
import { User } from "@/models/User"; // import to register User schema for populate
import { cacheLife, cacheTag } from "next/cache";

// Type for populated review
export interface PopulatedReview {
    _id: string;
    procutID: string;
    userID?: {
        _id: string;
        name: string;
        email: string;
    };
    name?: string;
    email?: string;
    text: string;
    rating: number;
    createdAt: string;
}

export async function getProductReviews(productId: string) {
    'use cache'
    cacheLife('hours')
    cacheTag(`reviews-${productId}`)

    try {
        await connectDB();
        
        // Use populate to get User details if userID exists
        // Registration of User schema happens with import { User } above
        const reviews = await Rating.find({ procutID: productId })
            .populate('userID', 'name email')
            .sort({ createdAt: -1 })
            .lean();

        return JSON.parse(JSON.stringify(reviews)) as PopulatedReview[];
    } catch (error) {
        console.error(`Failed to fetch reviews for product ${productId}:`, error);
        return [];
    }
}
