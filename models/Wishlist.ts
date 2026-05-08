import mongoose, { Schema, Types } from "mongoose";

export interface IWishlist {
    userId: Types.ObjectId;
    productId: Types.ObjectId;
}

const WishlistSchema = new Schema<IWishlist>({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    productId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    },
}, { timestamps: true });

// Compound index to prevent duplicate wishlist entries

export const Wishlist =
    mongoose.models.Wishlist || mongoose.model<IWishlist>("Wishlist", WishlistSchema);