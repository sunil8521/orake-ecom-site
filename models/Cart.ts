import mongoose, { Schema, Types } from "mongoose";

export interface ICartItem {
    productId: Types.ObjectId;
    quantity: number;
}

export interface ICart {
    userId: Types.ObjectId;
    items: ICartItem[];
}

const CartSchema = new Schema<ICart>({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    items: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: "Product"
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ]
});

export const Cart =
    mongoose.models.Cart || mongoose.model<ICart>("Cart", CartSchema);